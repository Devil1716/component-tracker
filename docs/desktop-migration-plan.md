# Component Tracker Desktop Migration Plan

## Root Cause Summary

- The cloud email UI failed because `COMPONENT_TRACKER_CONFIG.email.reminderEndpoint` was empty in `firebase-config.js`.
- The browser correctly blocked sending rather than exposing SMTP credentials.
- The Cloud Function also needed production hardening: retries, duplicate suppression, invalid recipient logging, timeout handling, and partial-failure responses.

## Future Offline Impact

These cloud capabilities stop working when fully offline:

- Firebase Authentication
- Firebase Realtime Database / Firestore-style cloud state
- Cloud Functions
- Cloud Storage
- Realtime multi-device updates

## Target Desktop Stack

- Electron shell
- React renderer
- Node.js main process services
- SQLite local database
- Prisma migrations and typed data access
- Nodemailer for SMTP or local relay sending
- Local scheduling service for reminder jobs
- Local file storage for uploads, exports, logs, and backups

## Local Folder Layout

```plaintext
AppData/
 ├── database/
 ├── exports/
 ├── backups/
 ├── logs/
 ├── uploads/
 └── config/
```

## Data Architecture

- Store canonical data in SQLite.
- Use Prisma migrations for teams, members, components, allocations, returns, reminder logs, users, roles, settings, and audit events.
- Keep uploaded files in `uploads/` with metadata in SQLite.
- Write exports to `exports/` and audit each export.
- Encrypt sensitive config values such as SMTP credentials with OS keychain support where available.

## Backup And Restore

- Automatic daily compressed SQLite backups into `backups/`.
- Manual backup and restore from the app settings screen.
- Restore flow validates schema version, creates a pre-restore backup, imports, migrates, and restarts local services.
- CSV/JSON import/export remains available for portability.

## Role Management

- Replace Firebase Auth with local users and roles.
- Suggested roles: Admin, Lab Staff, Viewer.
- Store password hashes with a modern password hashing algorithm.
- Audit all inventory mutation, allocation, return, reminder, import, restore, and export actions.

## Desktop Update Pipeline

- Package with Electron Builder.
- Build signed installers for Windows first, then macOS/Linux if needed.
- Publish releases to GitHub Releases or a private update server.
- Use Electron auto-updater to check, download, and apply updates.
- Keep rollback support by retaining the previous installer/update artifact and database backup before app migration.
- Release flow: CI test, build, sign, create draft release, attach artifacts, publish update metadata, smoke test update from previous version.

## Migration Phases

1. Stabilize cloud app and freeze current data contracts.
2. Add explicit export/import formats for full inventory, teams, allocations, pending reports, and audit history.
3. Build Electron shell around the current UI.
4. Introduce SQLite/Prisma behind a repository layer.
5. Port reminder sending from Cloud Functions to a local scheduler plus Nodemailer.
6. Add local auth, encrypted settings, backup/restore, and update pipeline.
7. Run parallel cloud/local migration tests before decommissioning cloud dependencies.

## Risks

- SMTP delivery varies by local network and provider policy.
- Offline mode removes realtime multi-device sync unless a future LAN sync service is added.
- Database migrations must be transactional and backed up.
- Local machines need update signing trust and antivirus-friendly packaging.
