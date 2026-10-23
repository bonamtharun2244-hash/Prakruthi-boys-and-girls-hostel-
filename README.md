# Hostel Website Template

A responsive hostel and PG website template built with Vite and vanilla JavaScript. Use it as a starter for client websites: update the single configuration file, replace the illustrative room photos and facility artwork, and deploy the built site.

## Demo configuration

The included configuration is for Prakruthi Hostel. Its room rates, phone number, address, and map are example demo content for this project. Verify all business details with each customer before publishing.

## Customize a customer copy

1. Copy the project and open `Config.js`.
2. Update `businessName`, `tagline`, `phoneDisplay`, `whatsappNumber`, `address`, and `mapsUrl`.
3. Edit `roomOptions` to set the rooms to show. Each entry has an `id`, `title`, `description`, `rentLabel`, `rentOptions`, and `image`. Use an empty string for `image` if a room photo is not ready.
4. Replace example room photos and the custom SVG facility illustrations with images supplied or approved by the customer. The SVGs are decorative vector illustrations, not photographs or AI-generated images. Confirm permission to use every photo.
5. Review the page copy and confirm rent, facilities, food, policies, and contact information with the customer. Only list facilities that the property actually provides.

The WhatsApp number must include its country code and digits only (for example, `919121497402`). Room information is rendered from `Config.js`; text entered there is inserted as text, not interpreted as HTML.

## Run and build

Install Node.js, then run:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Vite writes the static website to `dist/`.

## Deployment

Deploy the contents of `dist/` to static hosting such as Netlify, Vercel, or GitHub Pages. For a GitHub Pages project site, set the `base` option in `vite.config.js` to `/<repository-name>/` before building.

## Feature scope

This is a static marketing and enquiry website. The enquiry form opens WhatsApp; it does not save enquiries, confirm reservations, take payments, or provide an owner dashboard. The included `admin.html` is only a notice page, not a login. Do not advertise these backend features unless they are separately implemented and secured.

Before selling or handing over a customized copy, agree the scope, price, support, hosting, domain ownership, and usage rights with the customer. This starter does not include a separate commercial license. Do not expose private API keys or credentials in browser code.
