# Amity Component Tracker

A lightweight component checkout tracker for lab teams. It helps you create teams, log electronics components issued to each team, track remaining stock, record returns, review daily activity, and export the full checkout history as CSV.

The app is a static browser app: there is no server, database, login, or build step. Data is saved in the browser's local storage on the same desktop.

## Features

- Admin-only login gate with no registration screen
- Team creation with automatic IDs like `IL001`
- Team rename support
- Five member profile fields per team: name, SEN, and branch
- Component catalog with stock limits and remaining-stock hints
- Checkout and return tracking by team
- Daily activity log
- Stock inventory modal with search
- Summary view across all teams
- CSV export of the full activity history
- Firebase Realtime Database sync for everyone opening the hosted link
- Installable desktop PWA when hosted through GitHub Pages

## Use It Online

After GitHub Pages is enabled for this repository, the app will be available at:

https://devil1716.github.io/component-tracker/

In Chrome or Microsoft Edge, open the page and use the browser's install option to add it to the desktop.

## Download For Desktop

1. Go to the repository's **Releases** page.
2. Download `component-tracker.zip`.
3. Extract the ZIP anywhere on your desktop.
4. Open `index.html` in a browser.

For the installable desktop experience, use the GitHub Pages link instead of opening the file directly. Service workers and PWA installation require `https://` or `localhost`, so they do not run from `file://`.

## Local Setup For Development

No dependencies are required. You can open `index.html` directly, or serve the folder locally:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Release Process

1. Commit the changes you want to release.
2. Create and push a version tag:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

The `Release Component Tracker` GitHub Action will create a GitHub Release and attach `component-tracker.zip`.

## Data Storage

The app keeps a local browser copy under `comp_tracker_v8` and syncs the shared copy to Firebase Realtime Database at `componentTracker/state`.

Existing local data is not cleared. The first time an existing user opens the updated hosted app, their local data is merged into Firebase and marked as migrated on that device. After that, the hosted link receives live database updates.

Default admin login:

```text
Username: Admin
Password: Amitylab414
```

This client-side login hides the tracker from casual access. For real production security, pair it with Firebase Authentication and private database rules.

If Firebase returns `Permission denied`, update the Realtime Database rules in the Firebase console. For open lab usage during testing:

```json
{
  "rules": {
    "componentTracker": {
      ".read": true,
      ".write": true
    }
  }
}
```

For production, add authentication before making the database public.
