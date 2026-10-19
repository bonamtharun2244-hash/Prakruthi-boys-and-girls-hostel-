Sellable Hostel Website Template — Prakruthi Hostel
A responsive, customizable hostel/PG marketing website built with Vite and vanilla JavaScript. This project is designed as a reusable starter that can be branded for multiple customers.
Working features in this version
Responsive mobile/desktop layout
4-sharing and 6-sharing room cards
Room enquiry buttons preselect the chosen room
Enquiry form validates required name and phone fields and prepares a WhatsApp message
WhatsApp floating contact button
Google Maps link configurable in src/config.js
Centralized branding, phone number, address and room configuration
No fake booking confirmation, payment flow or non-working admin link
Important scope and security note
This is the public website / enquiry front end, not a production booking database, owner dashboard, or payment processor. The form opens WhatsApp; it does not store enquiries on a server and does not confirm a reservation. That is intentional so the starter does not falsely claim backend features that are not configured.
If selling a version with owner login, saved bookings, or online payments:
Add Supabase Auth for owner login and Postgres with Row Level Security (RLS) for data access.
Keep owner-only tables protected with RLS policies tied to authenticated owner IDs. Do not rely on hiding admin pages or checking a password in JavaScript.
Use a server-side function (Supabase Edge Function or Netlify Function) for booking creation and payment operations.
Keep Razorpay/other payment secret keys in server environment variables. Create orders on the server and verify payment signatures on the server before marking bookings paid.
Never expose a Supabase service-role key, payment secret, or private API key in the browser or GitHub repository.
Add spam/rate limiting, consent/privacy notice, backups, and a clear cancellation/refund policy before production use.
Customize for each customer
Edit src/config.js:
businessName
phoneDisplay
whatsappNumber (country code and digits only, e.g. India: 91 + 10 digits)
address
mapsUrl
roomOptions (future configuration point)
Update index.html and src/style.css to replace sample text and illustrative Unsplash images with genuine customer photos. Confirm all facilities, prices, gender policy, food, house rules and contact details with the customer. Do not advertise unverified amenities.
Run locally
Install Node.js on a computer, then:
npm install
npm run dev
Open the local URL shown by Vite.
Build
npm run build
The deployable website is created in dist/.
Deploy to GitHub Pages from Android
GitHub Pages is static hosting. It can host this front end, but not private server functions or a secure admin backend.
Open GitHub in Chrome and sign in.
Create a repository, for example prakruthi-hostel.
Upload all project files and folders (not just index.html) to the repository root.
For the simplest path on GitHub Pages, use the included static index.html and src files? This project uses Vite module imports, so build it first and publish the contents of dist/. GitHub web UI cannot run npm build itself.
Easiest option: connect the repository to Netlify and set build command npm run build, publish directory dist. Netlify builds the Vite project automatically.
For GitHub Pages specifically, use GitHub Actions to install dependencies, run npm run build, and publish dist; configure the Vite base to /<repository-name>/ in vite.config.js if using a project Pages URL.
Recommended client delivery checklist
Client-approved copy and images
Verified rent and facilities
Tested WhatsApp link on Android
Custom domain and hosting connected
Privacy policy and terms if collecting personal data
Owner access tested if a backend is added
Payment test transaction and verified webhook if payments are added
Handover source repository and instructions under a written agreement
