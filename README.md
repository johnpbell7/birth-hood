# birth-hood — Next.js Website

A full-featured website for birth-hood built with Next.js 15, Tailwind CSS, Sanity CMS, and Resend.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS + CSS custom properties |
| CMS | Sanity v3 (blog posts + free resources) |
| Contact form | Resend API |
| Hosting | Vercel (recommended) |
| PDF downloads | `/public/downloads/` |

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` |
| `SANITY_API_TOKEN` | Sanity API token (read/write) |
| `RESEND_API_KEY` | Resend API key for contact form emails |
| `CONTACT_EMAIL_TO` | Email address to receive contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Your production URL |

### 3. Create a Sanity project

```bash
npx sanity@latest init --bare
```

Copy the project ID to your `.env.local`.

### 4. Run locally

```bash
npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **Sanity Studio (CMS)**: http://localhost:3000/studio

## Project structure

```
app/
├── (studio)/studio/   # Sanity Studio CMS
├── api/contact/       # Contact form API route
├── blog/              # Blog (Sanity-powered)
│   └── [slug]/        # Blog post pages
├── contact/           # Contact page + form
├── freebies/          # Free resources page
├── hypnobirthing/     # Hypnobirthing page
├── doula/             # Doula overview
├── birth-doula/       # Birth doula page
├── virtual-doula/     # Virtual doula page
├── yoga/              # Prenatal yoga page
├── birth-trauma/      # Birth trauma support
├── meet-leanne/       # About Leanne
├── reviews/           # Client reviews
├── masterclass/       # Birth masterclass
├── course-info/       # Course dates & info
├── faq/               # FAQ page
├── terms/             # Terms & conditions
└── layout.tsx         # Root layout (Nav + Footer)

components/
├── Nav.tsx            # Fixed navigation with dropdown menus
├── Footer.tsx         # Site footer
├── MarqueeStrip.tsx   # Animated marquee strip
├── PageHero.tsx       # Reusable page hero section
├── CtaBand.tsx        # Call-to-action band
├── FaqAccordion.tsx   # Accordion FAQ component
└── RevealWrapper.tsx  # Scroll-triggered reveal animation

sanity/schemas/
├── blogPost.ts        # Blog post schema
└── freebie.ts         # Free resource schema

public/downloads/      # PDF files for download
```

## Adding PDF downloads

1. Place PDF files in `/public/downloads/`
2. Link them from the freebies page at `/downloads/filename.pdf`
3. Or upload them to Sanity as freebie file assets (managed via CMS)

## CMS Content Types

### Blog Posts
Fields: title, slug, publishedAt, category, excerpt, mainImage, body (rich text)

Categories: Hypnobirthing, Doula Support, Birth Trauma, Prenatal Yoga, Birth Rights, Postnatal, General

### Free Resources (Freebies)
Fields: title, emoji, description, type (pdf/audio/external), downloadFile, externalUrl, buttonLabel, accentColor

## Deploying to Vercel

1. Push to GitHub
2. Import project in Vercel dashboard
3. Add all environment variables from `.env.example`
4. Set root directory to this folder if needed
5. Deploy!

Vercel will automatically detect Next.js and configure the build.
