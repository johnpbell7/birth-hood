import { createClient } from '@sanity/client'

/**
 * Seed a Page document for every CMS-enabled route so they appear in
 * Studio › Pages and can be edited.
 *
 * SAFE BY DESIGN: each page is created with EMPTY `sections`. The site uses
 * cmsOrStatic(), which only swaps in the CMS version once a page has at least
 * one section — so seeding these stubs changes nothing on the live site. The
 * polished static pages keep rendering until you deliberately build sections
 * in the Studio. Uses createIfNotExists, so re-running never overwrites edits.
 *
 * Run (from the project root, with your Sanity write token available):
 *   node --env-file=.env.local scripts/seed-pages.mjs
 *
 * Requires these env vars (already in your Vercel project / .env.local):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET        (e.g. production)
 *   SANITY_API_TOKEN                  (a token with WRITE/Editor permission)
 */

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Every route that calls cmsOrStatic(), with a friendly title.
const pages = [
  { slug: 'home', title: 'Home' },
  { slug: 'hypnobirthing', title: 'Hypnobirthing' },
  { slug: 'doula', title: 'Doula Support' },
  { slug: 'birth-doula', title: 'Birth Doula' },
  { slug: 'postnatal-doula', title: 'Postnatal Doula' },
  { slug: 'virtual-doula', title: 'Virtual Doula' },
  { slug: 'doula-feedback', title: 'Doula Feedback' },
  { slug: 'yoga', title: 'Prenatal Yoga' },
  { slug: 'birth-trauma', title: 'Birth Trauma Support' },
  { slug: 'masterclass', title: 'Masterclass' },
  { slug: 'course-info', title: 'Course Info' },
  { slug: 'session-outlines', title: 'Session Outlines' },
  { slug: 'meet-leanne', title: 'Meet Leanne' },
  { slug: 'booking', title: 'Booking' },
  { slug: 'contact', title: 'Contact' },
  { slug: 'faq', title: 'FAQ' },
  { slug: 'reviews', title: 'Reviews' },
  { slug: 'podcast', title: 'Podcast' },
  { slug: 'links', title: 'Links' },
  { slug: 'terms', title: 'Terms' },
]

async function main() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
    console.error('❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN.')
    console.error('   Run with: node --env-file=.env.local scripts/seed-pages.mjs')
    process.exit(1)
  }

  let tx = client.transaction()
  for (const { slug, title } of pages) {
    tx = tx.createIfNotExists({
      _id: `page.${slug}`,
      _type: 'page',
      title,
      slug: { _type: 'slug', current: slug },
      sections: [],
    })
  }

  await tx.commit()
  console.log(`✅ Seeded ${pages.length} page stubs into Studio › Pages.`)
  console.log('   Live site is unchanged — pages stay static until you add sections.')
}

main().catch((err) => { console.error(err); process.exit(1) })
