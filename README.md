# Prakruthi Hostel Booking Platform — implementation starter

## Business details configured
- Public brand: Prakruthi Boys & Girls Hostel
- Location: Vasavi Nagar, near Honda showroom, Puttur, Andhra Pradesh
- WhatsApp: 9121497402 (confirm that this is the correct WhatsApp-enabled number)
- Rent supplied: ₹5,000; shown as a starting point only because room-wise prices were not supplied
- Food: vegetarian and non-vegetarian options, with actual menu to be added
- Admin: owner-only intention; secure sign-in is not implemented yet

## Files
- `index.html`, `styles.css`: public responsive website
- `src/main.js`: WhatsApp enquiry form and optional database insert starter
- `src/supabase.js`: public frontend Supabase client configuration
- `admin.html`: honest placeholder, not a working admin dashboard
- `supabase-schema.sql`: tables and baseline row-level security policies
- `.env.example`: frontend environment variable template

## Critical distinction
This is an implementation starter, not a production-ready booking/payment platform. The enquiry form opens WhatsApp; a database insert is attempted only if Supabase is configured. A secure owner dashboard and online payments still require backend functions and verified authentication. Do not accept live payments until those are implemented and tested.

## Android-first setup

### A. Create Supabase project
1. Open https://supabase.com in Chrome and create a project.
2. Save the database password securely; do not share it in chat or commit it to GitHub.
3. Open SQL Editor, paste `supabase-schema.sql`, review, and run it.
4. Open Project Settings / API (or Connect, depending on dashboard UI). Copy the Project URL and publishable/anon key. Never copy the service-role/secret key into website code.
5. Configure environment variables in your deployment host:
   - `VITE_SUPABASE_URL` = project URL
   - `VITE_SUPABASE_ANON_KEY` = publishable/anon key
6. The starter's direct browser insert into `enquiries` will be denied by the baseline policy, intentionally. For production, create a server/Edge Function that validates the request, rate-limits spam, and inserts the enquiry securely. Alternatively, keep WhatsApp-only enquiries until that backend exists.

### B. Create the owner account
1. In Supabase Authentication, create/invite the owner's account.
2. Before adding dashboard data access, design an owner-role check that is enforced in database policies and server functions. Hiding a URL or button is not security.
3. Keep `admin.html` as a placeholder until sign-in, session checks, role policies and dashboard actions are fully implemented.
4. Never grant public access to enquiries, payment records or owner management tables.

### C. Build and deploy
This project uses Vite and needs a Node.js build. On Android, you can use GitHub Codespaces in Chrome, or a trusted online development environment:
1. Create a GitHub repository and upload the files/folders preserving their structure.
2. Open the repository in Codespaces if your account offers it.
3. Run `npm install`, then `npm run build`.
4. Deploy to Vercel or Netlify and configure the environment variables in the host dashboard.
5. Test the public website on a phone before sharing it. For Vite static assets, GitHub Pages is possible with extra base-path configuration, but it is not a secure backend host.

### D. Payment integration — do this only after backend exists
1. Create a merchant account with a payment provider such as Razorpay.
2. Use its test mode and official server-side integration documentation.
3. A backend function must create each order using a secret stored only on the server.
4. The backend must verify the provider signature/webhook before recording a payment as paid.
5. Store only gateway IDs, amount, currency and status; never store card numbers, CVV, UPI PIN or payment secrets.
6. Test failed, cancelled, duplicate and successful payment cases before enabling live payments.

Official references:
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase Auth: https://supabase.com/docs/guides/auth
- Supabase Edge Functions: https://supabase.com/docs/guides/functions
- Vercel environment variables: https://vercel.com/docs/projects/environment-variables
- Razorpay Standard Checkout: https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/
