# Airtech Services — Website

Premium HVAC company website for **Airtech Services**, Johannesburg. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

### Prerequisites

- **Node.js 18+** — Download from [nodejs.org](https://nodejs.org) (LTS version recommended)
- **npm** (bundled with Node.js)

### 1. Install dependencies

```bash
cd "c:/Users/dpjones/Desktop/AIRTECH WEBSITE"
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Then edit `.env.local` and fill in:
- `RESEND_API_KEY` — sign up at resend.com
- `CONTACT_EMAIL` — email that receives lead notifications
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 ID (format: `G-XXXXXXXXXX`)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID

### 3. Run development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. In Project Settings → Environment Variables, add all keys from `.env.example`
4. Click Deploy

The site will auto-deploy on every push to `main`.

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, SEO, schema)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services hub
│   │   ├── air-conditioning/
│   │   ├── evaporative-cooling/
│   │   ├── ventilation/
│   │   └── central-vacuum/
│   ├── projects/page.tsx
│   ├── areas-we-serve/page.tsx
│   ├── reviews/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── thank-you/page.tsx
│   ├── not-found.tsx
│   └── api/lead/route.ts       # Lead form API endpoint
├── components/
│   ├── layout/                 # Header, Footer, MobileCTABar
│   ├── home/                   # Homepage section components
│   └── shared/                 # Reusable components
└── lib/
    ├── constants.ts            # All content (NAP, testimonials, etc.)
    └── utils.ts                # cn() helper
```

---

## TODO Checklist — Required Before Launch

### Photography (Critical)
- [ ] **Hero image** — Replace placeholder in `HeroSection.tsx`. Needs: luxury home or commercial interior with a neat aircon installation. Ideally shot professionally.
- [ ] **About page** — Add founder portrait (`about/page.tsx`, TODO comment)
- [ ] **Projects page** — Replace all 9 placeholder project images with real photography

### Logos
- [ ] **Client logos** — Obtain brand-approved greyscale logos from: MTN, Masterpack, Multiprint Litho, Mortimer Offset, Pilanesburg Airport, Fournos, Wingate, Medicare, Freeworld Coatings, Spectramed. Replace text placeholders in `ClientLogos.tsx`.

### Integrations
- [ ] **Lead form emails** — Connect `/api/lead/route.ts` to Resend or another email service. Instructions in the file as comments.
- [ ] **Google Analytics** — Uncomment GA4 script in `layout.tsx` and set `NEXT_PUBLIC_GA_ID`
- [ ] **Meta Pixel** — Uncomment Pixel script in `layout.tsx` and set `NEXT_PUBLIC_META_PIXEL_ID`
- [ ] **Google Maps** — Add iframe embed to `contact/page.tsx` and `areas-we-serve/page.tsx`

### Business Details
- [ ] **Confirm business hours** — Search for `TODO: confirm exact business hours` across codebase
- [ ] **Verify geo coordinates** — Check lat/lng in `layout.tsx` LocalBusiness schema
- [ ] **Google Business Profile URL** — Add to `reviews/page.tsx` "Leave a Review" link
- [ ] **Social profile URLs** — Add Facebook, Instagram, LinkedIn to Footer and schema

### SEO
- [ ] **OG image** — Create a 1200×630px branded image, add to `/public/og-image.jpg` and uncomment in `layout.tsx`
- [ ] **Google Search Console** — Add verification meta tag in `layout.tsx` once verified
- [ ] **Canonical URL** — Update `NEXT_PUBLIC_SITE_URL` in `.env.local` to the live domain
- [ ] **Sitemap** — Runs automatically on `npm run build` via `next-sitemap`

### Content
- [ ] **Privacy Policy** — Add a real privacy policy page at `/privacy`
- [ ] **Terms of Service** — Add terms page at `/terms`
- [ ] **Project case studies** — Expand projects page with real descriptions and photography
- [ ] **Area descriptions** — Review area blurbs in `areas-we-serve/page.tsx` for accuracy

---

## Design System

| Token | Value |
|---|---|
| Base bg | `#080808` |
| Surface | `#0F0F0F` |
| Elevated | `#161616` |
| Text primary | `#F5F3EE` |
| Text secondary | `#9B9893` |
| Accent (Copper) | `#C49A6C` |
| Accent Light | `#DDB98A` |
| Display font | Cormorant Garamond |
| Body font | Manrope |

---

## Lead Form

The form at `/contact` submits to `/api/lead`. In development it logs to console. For production, connect to Resend inside `src/app/api/lead/route.ts` — detailed instructions are in the file.

---

## Conversion Elements (Always Visible)

- **Sticky mobile CTA bar** — Call / WhatsApp / Quote (visible on all pages on mobile)
- **WhatsApp floating button** — Bottom-right on all pages
- **CTA in every section** — Each page section includes at least one conversion action

---

Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod.