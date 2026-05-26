# Component Tracker Stabilization Report

## Root Cause Analysis

- Reminder emails failed because `firebase-config.js` shipped with `email.reminderEndpoint` set to an empty string.
- The client showed the raw setup message and disabled sending before the Firebase Function could be called.
- The email function had basic SMTP sending, but lacked retries, timeout handling, duplicate send suppression, and structured partial-failure reporting.
- Member email validation was too blunt and ran during autosave-style field updates, which made normal values with spaces or uppercase letters feel invalid.
- Team detail fields were saved on `change`/`blur`, so remote refreshes and rerenders could restore stale member names while the user was still editing.

## Code Changes

- Configured the deployed Firebase Function endpoint in `firebase-config.js`.
- Added normalized email handling across saved members, reminders, assignments, and imported/restored data.
- Replaced detail autosave with explicit Save Details behavior.
- Preserved active input values during cloud polling rerenders.
- Added inline email validation messages.
- Added fair random assignment, regenerate assignment, duplicate merging, over-allocation guardrails, reassignment, and history logging.
- Added a Component Allocation Tracker with search, team/status filters, sorting, and export.
- Rebuilt CSV export with modes for Full Inventory, Team-wise Export, Allocation Report, and Pending Components Report.
- Hardened Cloud Function email sending with retries, timeouts, invalid email logs, duplicate logs, failed send logs, and partial-failure responses.

## CSV Examples

Full Inventory:

```csv
"Category","Component","Total Stock","Allocated","Available","Status"
"Development Boards","Arduino Uno R3 (Original)","50","2","48","Available"
```

Team-wise Export:

```csv
"Team ID","Team","Project Name","Component","Member","Email","Quantity","Date","Status"
"IL003","Delta","Reminder Project","ESP32 Dev Kit V1","Reminder Student","reminder.student@example.edu","1","2026-05-26","Pending"
```

Allocation Report:

```csv
"Team ID","Team","Project Name","Component","Member","Email","Quantity","Assigned Date","Status","Notes"
"IL003","Delta","Reminder Project","ESP32 Dev Kit V1","Reminder Student","reminder.student@example.edu","1","2026-05-26","Pending","Issued to Reminder Student"
```

Pending Components Report:

```csv
"Team ID","Team","Project Name","Component","Member","Email","Quantity","Assigned Date","Status","Notes"
"IL003","Delta","Reminder Project","ESP32 Dev Kit V1","Reminder Student","reminder.student@example.edu","1","2026-05-26","Pending","Issued to Reminder Student"
```

## Testing Checklist

- Login renders and unlocks the app.
- Team details can be typed without values resetting during rerender.
- Emails with accidental spaces and uppercase letters save as normalized lowercase.
- Invalid emails show inline messages.
- Blank member slots are allowed; started member rows must be complete.
- Random assignment selects a valid member.
- Component logging prevents over-allocation and merges duplicates for the same team/member/component.
- Reminder modal shows configured sender and valid recipients for pending components.
- Export modal opens and supports each export mode and sort option.
- Allocation tracker opens, filters, sorts, and exports.
- Function syntax passes `node --check`.

## Risk Assessment

- The configured Function URL must match the deployed Firebase project and region.
- SMTP secrets must be configured in the Firebase Function runtime before production sends can succeed.
- Browser-side retry handles network and temporary 5xx errors, but permanent SMTP failures still require server log review.
- The current app remains single-admin and cloud-backed until the desktop migration is executed.
- Local desktop migration should preserve CSV/export contracts before replacing Firebase.
