# WashMeNow+

**Find. Book. Wash. Track. Pay.**

WashMeNow+ is a responsive web MVP for Namibia’s verified car wash discovery and operations platform. It helps car owners find trusted car washes near them, view services and pricing, check queue visibility, submit booking requests, and access maps/call actions quickly.

The current MVP is focused on the first pilot partner:

**Out of Nature Carwash**  
Erf 2255 Stockholm Street, Windhoek  
Phone: 081 336 9016  
Map: https://maps.app.goo.gl/Bj4SVA4sEc9PSLW79

---

## Live Demo

Production URL:

```text
https://washmenow-plus.vercel.app
```

Main demo routes:

```text
/
 /carwashes/out-of-nature
 /booking
 /backoffice
```

---

## Product Context

WashMeNow+ is designed as a Namibian one-stop digital platform for verified car wash discovery and operational support.

The platform starts with a public web MVP and will later expand into a full mobile and backoffice ecosystem.

### Core Promise

For car owners:

- Discover verified car washes near them.
- Compare services and prices.
- View queue and estimated waiting time.
- Call or open directions quickly.
- Submit booking requests.
- Review safely without exposing sensitive vehicle information.

For car wash owners:

- Maintain a verified public business profile.
- Display services and pricing.
- Track queue status.
- Manage booking requests.
- Track payments and POS-style activity.
- Promote events and campaigns.
- Convert discovery into repeat customers.

For the platform:

- Start with a two-month pilot model.
- Convert car washes to subscription plans after value is proven.
- Generate revenue from subscriptions, featured placements, adverts, and future payment integrations.

---

## Current MVP Features

### Public Frontoffice

- Landing page for WashMeNow+.
- Featured pilot profile for Out of Nature Carwash.
- Verified pilot badge.
- Address, phone, and map link.
- Live queue summary.
- Service and pricing display.
- Booking call-to-action.
- Responsive mobile-first layout.

### Carwash Profile Page

- Profile header.
- Call button.
- Open Maps button.
- Book Service button.
- Services and pricing table.
- Live queue card.
- Verified business information.
- Payment methods.
- Pilot messaging.
- Gallery support for car wash media.

### Booking Page

- Demo booking request form.
- Captures customer name, phone, service, preferred time, and notes.
- Intended for MVP validation before Supabase persistence.

### Backoffice Demo

- Owner dashboard demo.
- Queue metrics.
- Available bays.
- Estimated wait time.
- Quick queue controls.
- Booking request placeholders.
- POS/payment tracking roadmap messaging.

---

## Tech Stack

### Current

- **Next.js** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** icons
- **Static seed data** for first demo
- **Vercel** for deployment
- **GitHub** for source control

### Planned

- **Supabase PostgreSQL** for persistent data
- **Supabase Auth** for users, car wash owners, and staff
- **Supabase Storage** for car wash media
- **Row Level Security** for role-based access
- **Realtime updates** for queue status
- **Payment integrations**: Cash tracking first, then PayToday, PayPulse, DPO, QR, card, and wallet options
- **Image processing** for automatic number plate blurring

---

## Project Structure

```text
washmenow-plus/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── booking/
│   │   └── page.tsx
│   ├── backoffice/
│   │   └── page.tsx
│   └── carwashes/
│       └── out-of-nature/
│           └── page.tsx
├── data/
│   └── seed.ts
├── public/
│   ├── favicon.ico
│   ├── icons/
│   ├── brand/
│   └── out-of-nature/
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

### Important Note on Structure

This project currently uses the root-level Next.js App Router structure:

```text
app/
data/
public/
```

Avoid placing active routes only under:

```text
src/app/
```

unless the project is intentionally migrated to a full `src/` structure and `tsconfig.json` path aliases are updated accordingly.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:Tameka-Artificial-intelligence-TAI/washmenow-plus.git
cd washmenow-plus
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 4. Test Key Routes

```text
http://localhost:3000
http://localhost:3000/carwashes/out-of-nature
http://localhost:3000/booking
http://localhost:3000/backoffice
```

---

## Build

Run a production build locally before pushing major changes:

```bash
npm run build
```

Expected routes should include:

```text
/
 /backoffice
 /booking
 /carwashes/out-of-nature
```

---

## Deployment

This project is deployed on Vercel.

### Normal Deployment Flow

After making updates:

```bash
git status
git add .
git commit -m "Describe update"
git push
```

Vercel automatically redeploys from the `main` branch.

### Manual Vercel Setup

If importing again:

- Framework Preset: **Next.js**
- Root Directory: `./`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: leave default
- Environment Variables: none required for the static MVP

---

## Branding

The app should use the WashMeNow+ identity:

**App Title**

```text
WashMeNow+ | Find. Book. Wash. Track. Pay.
```

**Tagline**

```text
Find. Book. Wash. Track. Pay.
```

Brand assets should be stored in:

```text
public/brand/
public/icons/
```

Recommended files:

```text
favicon.ico
icon-16.png
icon-32.png
icon-48.png
apple-touch-icon.png
android-chrome-192x192.png
android-chrome-512x512.png
site.webmanifest
washmenow-logo-horizontal.png
washmenow-logo-icon.png
og-image.png
```

The metadata should be managed in:

```text
app/layout.tsx
```

---

## Data Source

Current MVP data lives in:

```text
data/seed.ts
```

The seed file contains:

- Pilot car wash details
- Address and phone
- Queue values
- Payment methods
- Services and pricing
- Gallery image references
- Sample booking placeholders

This is temporary and should be replaced with Supabase once the owner-demo flow is approved.

---

## Supabase Roadmap

Planned tables:

```text
carwashes
carwash_locations
carwash_services
service_prices
queue_items
bookings
payments
reviews
photo_uploads
profiles
staff_members
subscriptions
adverts
```

### First Supabase Milestone

Replace static booking form with real inserts into:

```text
bookings
```

Minimum booking fields:

```text
id
carwash_id
customer_name
customer_phone
service_name
preferred_date
preferred_time
notes
status
created_at
```

### Second Supabase Milestone

Connect backoffice queue controls to:

```text
queue_items
```

Minimum queue fields:

```text
id
carwash_id
vehicle_label
service_name
status
queue_position
checked_in_at
started_at
completed_at
updated_at
```

---

## Role Model

### Public Users

- Guest
- Registered Car Owner

### Car Wash Roles

- Car Wash Owner
- Branch Manager
- Cashier
- Car Wash Attendant
- Verified Driver
- Kitchen / Bar / Inventory Staff

### Platform Roles

- System Administrator
- Verification Officer
- Support Agent
- Billing & Subscription Admin
- Advert Moderator

---

## MVP Demo Script for Out of Nature Carwash

Use this flow when presenting to the owner:

1. Open the homepage.
2. Explain that WashMeNow+ helps customers find verified car washes near them.
3. Click **View Pilot Carwash**.
4. Show the Out of Nature profile.
5. Highlight address, phone, map link, and verified pilot status.
6. Show services and pricing.
7. Show live queue and estimated wait time.
8. Click **Book Service**.
9. Show the booking request form.
10. Open **Backoffice Demo**.
11. Explain that this is where the owner/staff can manage queues, booking requests, payments, and profile updates.
12. Explain the proposed **two-month free pilot**, then subscription conversion if value is proven.

---

## MVP Validation Goals

During the first pilot, validate:

- Can customers find the car wash easily?
- Does the owner see value in a verified profile?
- Are services and pricing clear enough?
- Does queue visibility reduce customer uncertainty?
- Would customers submit booking requests?
- Would staff be willing to update queue statuses?
- Would the owner pay after a two-month trial?
- Which features matter most before mobile app development?

---

## Suggested Subscription Direction

After the two-month pilot:

### Starter

- Verified listing
- Basic profile
- Services and pricing
- Queue status
- Basic booking requests

### Plus

- Everything in Starter
- Staff roles
- Booking management
- POS-style tabs
- Customer reviews
- Basic adverts

### Pro

- Everything in Plus
- Mobile car wash support
- Pickup/drop-off support
- Driver verification
- Advanced reports
- Priority support

### Enterprise

- Multi-branch support
- Branch managers
- Consolidated reporting
- Fleet support
- Custom onboarding

---

## Privacy and Safety Requirements

The platform must be privacy-first.

Key requirements:

- Hide full customer names by default.
- Use nicknames or system IDs for public reviews.
- Automatically blur number plates before public image display.
- Do not expose customer phone numbers publicly.
- Protect driver license and verification documents.
- Use role-based access control before going into production with real data.

---

## Current Limitations

The current MVP is static and demo-oriented.

Known limitations:

- Booking form does not yet save to a database.
- Queue controls are visual only.
- POS tracking is not yet connected to real payments.
- No authentication yet.
- No Supabase persistence yet.
- No automatic number plate blur pipeline yet.
- Images are manually prepared for demo use.
- No production-grade authorization yet.

---

## Immediate Next Steps

1. Confirm the owner-demo flow.
2. Add brand assets and favicon.
3. Add polished Out of Nature gallery images.
4. Connect booking form to Supabase.
5. Create backoffice authentication.
6. Connect queue controls to Supabase.
7. Add owner/staff login.
8. Add image upload and number plate blur workflow.
9. Prepare pricing plan and trial onboarding workflow.
10. Start onboarding 5–10 more pilot car washes.

---

## Useful Commands

```bash
npm install
npm run dev
npm run build
git status
git add .
git commit -m "Update message"
git push
```

---

## Troubleshooting

### Module not found: `@/data/seed`

Make sure this file exists:

```text
data/seed.ts
```

If using `src/data/seed.ts`, update `tsconfig.json` paths or move the active seed file to the root-level `data/` folder.

### Vercel only shows `/` route

Ensure route files exist under root-level `app/`, not only `src/app/`.

Correct:

```text
app/backoffice/page.tsx
app/booking/page.tsx
app/carwashes/out-of-nature/page.tsx
```

### Local build passes but Vercel fails

Check:

- All files are committed.
- Build command is `npm run build`.
- Root directory is `./`.
- There are no local-only files missing from Git.
- File names and import paths match exactly.

---

## Collaboration Notes

Project founders/collaborators:

- Heinrich Naatwilwe Aluvilu
- Erastus Nathingo

Current pilot partner:

- Out of Nature Carwash

Recommended working style:

- Keep MVP scope lean.
- Build visible customer/operator value first.
- Use specs before coding larger features.
- Validate with real car wash owners before scaling.
- Keep production data and customer information secure from the start.

---

## License / Ownership

Private project. All rights reserved unless otherwise agreed by the project collaborators.

---

## Status

Current status:

```text
Live MVP deployed on Vercel.
Static frontoffice and backoffice demo available.
Out of Nature Carwash pilot profile active.
Supabase integration pending.
```
