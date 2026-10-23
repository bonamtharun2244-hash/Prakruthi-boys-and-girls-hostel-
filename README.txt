# Prakruthi Hostel Owner Dashboard — Demo

## What is included
- Mobile-friendly owner dashboard
- Booking/enquiry records, confirmation status and WhatsApp message drafts
- Room type capacity and occupancy editing
- Student demo records
- Rent/payment tracking and paid/due toggles
- CSV export

## Important limitations
This is a browser-only prototype for presentation/testing. Data is stored in localStorage on the current browser/device only. It does not sync between owner and visitors, and it has no secure authentication, access control, server database, verified payment integration, or backup. Do not use real student data or financial records in this version.

For a production version, use a backend/database (for example, Supabase or Firebase) with owner authentication and security rules, and deploy on a host suitable for a transactional business app. GitHub Pages is static hosting and does not run server-side code. Review GitHub Pages' current acceptable-use terms before using it for a commercial booking service.

## Configure the owner's WhatsApp number
In `index.html`, search for:
`const DEFAULT_PHONE='91XXXXXXXXXX';`
Replace it with the owner's country code + phone number digits only, e.g. `919876543210` (example format only).

## Upload from Android
1. Open the repository in your browser: https://github.com/Bonamtharun2244-hash/Prakruthi-boys-and-girls-hostel-
2. Download/backup the current files before changing anything.
3. Open `index.html` from the repository, choose the pencil/Edit option, and replace its contents with the supplied `index.html` code; commit the changes. Alternatively use Add file → Upload files to upload this `index.html` at the repository root, replacing the existing one if prompted.
4. Ensure `index.html` is at the repository root (not inside another folder).
5. In repository Settings → Pages, confirm the current publishing branch/folder (usually `main` and `/(root)`).
6. Wait for deployment, then open: https://bonamtharun2244-hash.github.io/Prakruthi-boys-and-girls-hostel-/
7. If the old version appears, refresh or open in a private tab.

## Test the demo
- Add a room type and adjust its beds.
- Add a booking and try Confirm / WhatsApp.
- Add a student and add a payment.
- Export CSV to test the export feature.
- Data stays in the browser where it was entered; another device will not see it.
