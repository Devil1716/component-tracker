const admin = require('firebase-admin');
const { onRequest } = require('firebase-functions/v2/https');
const nodemailer = require('nodemailer');

admin.initializeApp();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'kprasanna@blr.amity.edu';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://devil1716.github.io';
const SEND_TIMEOUT_MS = Number(process.env.SMTP_SEND_TIMEOUT_MS || 15000);
const MAX_SEND_ATTEMPTS = Number(process.env.SMTP_SEND_ATTEMPTS || 3);

function setCors(req, res) {
  const origin = req.get('origin');
  if (origin === ALLOWED_ORIGIN || (origin && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin))) {
    res.set('Access-Control-Allow-Origin', origin);
  }
  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function makeTransport() {
  const port = Number(process.env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

function cleanText(value, max = 500) {
  return String(value || '').trim().slice(0, max);
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function validEmail(email) {
  const normalized = normalizeEmail(email);
  if (!normalized || normalized.length > 254 || normalized.includes('..')) return false;
  return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-z0-9-]+\.)+[a-z]{2,63}$/i.test(normalized);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function withTimeout(promise, ms) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`SMTP send timed out after ${ms}ms`)), ms);
      })
    ]);
  } finally {
    clearTimeout(timer);
  }
}

async function sendMailWithRetry(transport, message, context) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_SEND_ATTEMPTS; attempt++) {
    try {
      await withTimeout(transport.sendMail(message), SEND_TIMEOUT_MS);
      if (attempt > 1) console.log('Reminder email sent after retry', { ...context, attempt });
      return true;
    } catch (err) {
      lastError = err;
      console.error('Reminder email send attempt failed', {
        ...context,
        attempt,
        maxAttempts: MAX_SEND_ATTEMPTS,
        code: err?.code,
        message: err?.message
      });
      if (attempt < MAX_SEND_ATTEMPTS) await sleep(500 * attempt);
    }
  }
  throw lastError;
}

function buildMessage(team, recipient) {
  const components = (team.pendingComponents || [])
    .map(item => `- ${cleanText(item.name)} x${Number(item.qty || 0)}`)
    .join('\n');
  return [
    `Hello ${cleanText(recipient.name) || 'Student'},`,
    '',
    'This is a reminder to return pending lab components.',
    '',
    `Team number: ${cleanText(team.teamNumber)}`,
    `Team name: ${cleanText(team.team)}`,
    `Project name: ${cleanText(team.projectName)}`,
    '',
    'Pending components:',
    components || '- No pending components listed',
    '',
    'Please return the listed components to the lab as soon as possible.',
    '',
    `Regards,`,
    ADMIN_EMAIL
  ].join('\n');
}

exports.sendReminderEmails = onRequest({ region: 'asia-south1', cors: false }, async (req, res) => {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const authHeader = req.get('authorization') || '';
    const match = authHeader.match(/^Bearer (.+)$/);
    if (!match) return res.status(401).json({ error: 'Missing admin auth token' });
    const decoded = await admin.auth().verifyIdToken(match[1]);
    if ((decoded.email || '').toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      return res.status(403).json({ error: 'Only the configured admin can send reminders' });
    }
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({ error: 'SMTP is not configured on the email function' });
    }

    const teams = Array.isArray(req.body?.teams) ? req.body.teams : [];
    const transport = makeTransport();
    let sent = 0;
    let failed = 0;
    let skippedInvalidEmails = 0;
    const duplicateKeys = new Set();
    const errors = [];

    for (const team of teams) {
      const pending = Array.isArray(team.pendingComponents) ? team.pendingComponents.filter(item => Number(item.qty || 0) > 0) : [];
      if (!pending.length) continue;
      const rawRecipients = Array.isArray(team.recipients) ? team.recipients : [];
      const recipients = [];
      for (const recipient of rawRecipients) {
        const email = normalizeEmail(recipient.email);
        if (!validEmail(email)) {
          skippedInvalidEmails++;
          console.warn('Invalid reminder email skipped', {
            team: cleanText(team.team),
            teamNumber: cleanText(team.teamNumber),
            email: cleanText(recipient.email, 254)
          });
          continue;
        }
        recipients.push({ ...recipient, email });
      }
      for (const recipient of recipients) {
        const recipientPending = Array.isArray(recipient.pendingComponents) && recipient.pendingComponents.length
          ? recipient.pendingComponents.filter(item => Number(item.qty || 0) > 0)
          : pending;
        if (!recipientPending.length) continue;
        const duplicateKey = `${cleanText(team.teamNumber)}|${recipient.email}|${recipientPending.map(item => `${item.itemId}:${item.qty}`).sort().join(';')}`;
        if (duplicateKeys.has(duplicateKey)) {
          console.warn('Duplicate reminder skipped', {
            team: cleanText(team.team),
            teamNumber: cleanText(team.teamNumber),
            email: recipient.email
          });
          continue;
        }
        duplicateKeys.add(duplicateKey);
        try {
          await sendMailWithRetry(transport, {
          from: ADMIN_EMAIL,
          to: recipient.email,
          subject: `Component return reminder - ${cleanText(team.teamNumber)} ${cleanText(team.team)}`,
          text: buildMessage({ ...team, pendingComponents: recipientPending }, recipient)
          }, {
            team: cleanText(team.team),
            teamNumber: cleanText(team.teamNumber),
            email: recipient.email
          });
          sent++;
        } catch (err) {
          failed++;
          errors.push({
            team: cleanText(team.team),
            teamNumber: cleanText(team.teamNumber),
            email: recipient.email,
            message: err?.message || 'Send failed'
          });
          console.error('Reminder email failed after retries', errors[errors.length - 1]);
        }
      }
    }

    const status = failed ? 207 : 200;
    return res.status(status).json({ sent, failed, skippedInvalidEmails, errors });
  } catch (err) {
    console.error('sendReminderEmails failed', err);
    return res.status(500).json({ error: 'Reminder email send failed' });
  }
});
