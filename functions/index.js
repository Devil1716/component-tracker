const admin = require('firebase-admin');
const { onRequest } = require('firebase-functions/v2/https');
const nodemailer = require('nodemailer');

admin.initializeApp();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'kprasanna@blr.amity.edu';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://devil1716.github.io';

function setCors(req, res) {
  const origin = req.get('origin');
  if (origin === ALLOWED_ORIGIN) {
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

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ''));
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

    for (const team of teams) {
      const pending = Array.isArray(team.pendingComponents) ? team.pendingComponents.filter(item => Number(item.qty || 0) > 0) : [];
      if (!pending.length) continue;
      const recipients = Array.isArray(team.recipients) ? team.recipients.filter(r => validEmail(r.email)) : [];
      for (const recipient of recipients) {
        const recipientPending = Array.isArray(recipient.pendingComponents) && recipient.pendingComponents.length
          ? recipient.pendingComponents.filter(item => Number(item.qty || 0) > 0)
          : pending;
        if (!recipientPending.length) continue;
        await transport.sendMail({
          from: ADMIN_EMAIL,
          to: recipient.email,
          subject: `Component return reminder - ${cleanText(team.teamNumber)} ${cleanText(team.team)}`,
          text: buildMessage({ ...team, pendingComponents: recipientPending }, recipient)
        });
        sent++;
      }
    }

    return res.json({ sent });
  } catch (err) {
    console.error('sendReminderEmails failed', err);
    return res.status(500).json({ error: 'Reminder email send failed' });
  }
});
