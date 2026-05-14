# Amity Component Tracker

A lightweight component checkout tracker for lab teams. It helps create teams, enter team member details, log issued electronics components, track remaining stock, record returns, review daily activity, and export CSV history.

The app is a static browser app with Firebase Realtime Database sync. It keeps a local browser copy and syncs a shared cloud copy when opened through the hosted link.

## Features

- Admin-only Firebase Authentication login with no registration screen
- Runtime config generated from GitHub Secrets, so Firebase keys and admin settings are not committed
- Separate production and testing database vessels
- Team creation with automatic IDs like `IL001`
- Team rename and team number edit support
- Project name per team
- Five member profile fields per team: name, SEN, branch, and college email ID
- Team details collapse after successful validation and save
- Team/project search in the sidebar
- Pending return reminder email selection
- Component catalog with stock limits and remaining-stock hints
- Checkout and return tracking by team
- Daily activity log
- Stock inventory modal with search
- Summary view across all teams
- CSV export of the full activity history
- Installable desktop PWA when hosted through GitHub Pages

## Use It Online

Production app:

```text
https://devil1716.github.io/component-tracker/
```

Testing vessel:

```text
https://devil1716.github.io/component-tracker/?env=test
```

Use the testing URL for experiments. It writes to a different Firebase path and will not affect the production app data.

## Login

There is no registration screen. The deployed app uses Firebase Authentication email/password sign-in, then Firebase Realtime Database rules decide whether that signed-in user can read or write tracker data.

In Firebase Console, enable **Authentication > Sign-in method > Email/Password** and create one admin user. Store that email in the `ADMIN_EMAIL` GitHub secret.

The old client-side SHA-256 password gate is still available only if you explicitly set `auth.mode` to `local-hash` in a local config. Do not use that mode for production, because anyone can inspect browser code and bypass client-only checks.

## Required GitHub Secrets

Add these in `Settings > Secrets and variables > Actions`:

```text
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_DATABASE_URL
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
FIREBASE_MEASUREMENT_ID
ADMIN_EMAIL
```

The deploy workflow uses `ADMIN_EMAIL` to generate `firebase-config.js` only inside the Pages artifact. The committed `firebase-config.js` is intentionally a safe placeholder.

## Database Vessels

Production data path:

```text
componentTracker/production/state
```

Testing data path:

```text
componentTracker/testing/state
```

Existing local data is not cleared. The first time an existing user opens the updated production link, their local data is merged into the production Firebase path and marked as migrated for that browser. Testing uses a separate migration marker.

## Firebase Rules

Use locked Firebase Realtime Database rules. Copy `database.rules.json` into Firebase Console, replace `admin@example.com` with your real admin email, then publish the rules.

```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "componentTracker": {
      "production": {
        "state": {
          ".read": "auth != null && auth.token.email == 'admin@example.com'",
          ".write": "auth != null && auth.token.email == 'admin@example.com'"
        }
      },
      "testing": {
        "state": {
          ".read": "auth != null && auth.token.email == 'admin@example.com'",
          ".write": "auth != null && auth.token.email == 'admin@example.com'"
        }
      }
    }
  }
}
```

Important: the rule email must exactly match your Firebase Authentication admin user email and the `ADMIN_EMAIL` GitHub secret.

## Reminder Email Backend

Reminder email sending is designed to run through Firebase Functions with Nodemailer so SMTP credentials stay out of the browser.

The frontend reads:

```js
email: {
  reminderEndpoint: 'https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net/sendReminderEmails'
}
```

Configure the function environment with:

```text
ADMIN_EMAIL=kprasanna@blr.amity.edu
ALLOWED_ORIGIN=https://devil1716.github.io
SMTP_HOST=your.smtp.host
SMTP_PORT=587
SMTP_USER=your-admin-smtp-user
SMTP_PASS=your-admin-smtp-password-or-app-password
```

Then deploy:

```powershell
cd functions
npm install
cd ..
npx firebase-tools deploy --only functions --project component-tracker-cd000
```

After deployment, copy the function URL into `firebase-config.js` or the GitHub Pages runtime config as `email.reminderEndpoint`.

## Secret Alert Cleanup

GitHub flagged the earlier committed Google/Firebase API key. The current source no longer commits that value. You should still rotate or restrict the exposed Firebase web API key in Google Cloud/Firebase, then dismiss the GitHub secret alert after verifying the new key is configured as a GitHub secret.

## Download For Desktop

1. Go to the repository's **Releases** page.
2. Download `component-tracker.zip`.
3. Extract the ZIP anywhere on your desktop.
4. Configure `firebase-config.js` from `firebase-config.template.js`.
5. Serve the folder locally or host it. Cloud sync does not run from `file://`.

## Local Setup For Development

No build step is required. Serve the folder locally:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

For local Firebase testing, copy `firebase-config.template.js` into `firebase-config.js` and fill in local/test values. Do not commit real credentials.

## Release Process

1. Commit the changes you want to release.
2. Create and push a version tag:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

The `Release Component Tracker` GitHub Action creates a GitHub Release and attaches `component-tracker.zip`.
