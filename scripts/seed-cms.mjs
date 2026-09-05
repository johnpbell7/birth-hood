// Seeds Sanity with everything the site currently renders from committed files:
// the 5 blog posts, the 7 birth stories, the 19 Google reviews, and the 27
// client hub PDFs.
//
// Why this exists: every one of those pages prefers Sanity and falls back to a
// committed copy when the CMS is empty. That keeps the site working before the
// CMS is populated — but it also means Leanne cannot edit any of it. Running
// this moves the content into Sanity, at which point the Studio becomes the
// source of truth and the committed copies stop being used.
//
// Requires in .env.local:
//   NEXT_PUBLIC_SANITY_PROJECT_ID
//   NEXT_PUBLIC_SANITY_DATASET      (defaults to "production")
//   SANITY_API_TOKEN                a token with Editor permissions
//
// Run:  node scripts/seed-cms.mjs            dry run — shows what it would write
//       node scripts/seed-cms.mjs --commit   actually writes
//
// Safe to re-run: every document uses a deterministic _id, so a second run
// updates rather than duplicating.

import { createClient } from '@sanity/client'
import { readFileSync, createReadStream, existsSync } from 'node:fs'
import path from 'node:path'

const COMMIT = process.argv.includes('--commit')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN.')
  console.error('Add them to .env.local, then re-run. See scripts/seed-cms.mjs for details.')
  process.exit(1)
}
const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

// The committed content is TypeScript, so read and strip it rather than import.
function loadArray(file, exportName) {
  const src = readFileSync(file, 'utf8')
  const start = src.indexOf(`export const ${exportName}`)
  if (start === -1) throw new Error(`${exportName} not found in ${file}`)
  // Skip past the type annotation — `export const x: Foo[] = [` contains a
  // bracket of its own, so anchor on the assignment, not the first '['.
  const eq = src.indexOf('=', start)
  const open = src.indexOf('[', eq)
  let depth = 0, i = open
  for (; i < src.length; i++) {
    if (src[i] === '[') depth++
    else if (src[i] === ']') { depth--; if (depth === 0) break }
  }
  // eslint-disable-next-line no-eval
  return eval(src.slice(open, i + 1))
}

const key = () => Math.random().toString(36).slice(2, 10)
const toBlocks = (paras) =>
  paras.map((text) => ({
    _type: 'block', _key: key(), style: 'normal',
    children: [{ _type: 'span', _key: key(), text, marks: [] }],
  }))

const blogPosts = loadArray('lib/blog-posts.ts', 'blogPosts')
const birthStories = loadArray('lib/birth-stories.ts', 'birthStories')
const reviews = loadArray('lib/reviews.ts', 'reviews')

const HUB = [
  ['Hypnobirthing essentials', 'Your Handbook', 'hypnobirthing-handbook.pdf'],
  ['Hypnobirthing essentials', 'Printable Affirmations', 'printable-affirmations.pdf'],
  ['Hypnobirthing essentials', 'Extra TBU Colour Affirmations', 'tbu-colour-affirmations.pdf'],
  ['Hypnobirthing essentials', 'Short Relaxation Prompts', 'short-relaxation-prompts.pdf'],
  ['Hypnobirthing essentials', 'Partner Script', 'partner-script.pdf'],
  ['Hypnobirthing essentials', 'Birth Meditations', 'birth-meditations.pdf'],
  ['Planning for birth', 'Birth planning guide', 'birth-planning-guide.pdf'],
  ['Planning for birth', 'Antenatal session outline', 'antenatal-session-outline.pdf'],
  ['Planning for birth', 'Weekly Agenda', 'weekly-agenda.pdf'],
  ['Planning for birth', 'Daily activities guide', 'daily-activities-guide.pdf'],
  ['Planning for birth', 'Partner Movement Guide', 'partner-movement-guide.pdf'],
  ['Planning for birth', 'Peanut ball guide', 'peanut-ball-guide.pdf'],
  ['Planning for birth', 'Pool inflation guide', 'pool-inflation-guide.pdf'],
  ['Planning for birth', 'Birth bag & homebirth checklists', 'checklists.pdf'],
  ['Planning for birth', 'Door Signs', 'door-signs.pdf'],
  ['Planning for birth', 'Door counterweight (rebozo)', 'door-counterweight.pdf'],
  ['Planning for birth', 'Pillars of a birth partner', 'pillars-of-a-birth-partner.pdf'],
  ['Specific situations', 'Caesarean Handbook', 'caesarean-workbook.pdf'],
  ['Specific situations', 'Induction guide', 'induction-guide.pdf'],
  ['Specific situations', 'Premature birth guide', 'preterm-birth-guide.pdf'],
  ['Specific situations', 'Birth Biomechanics eBook', 'birth-biomechanics.pdf'],
  ['Specific situations', 'Freebirth guide', 'birth-hood-freebirth-guide.pdf'],
  ['Postnatal & the fourth trimester', 'Postpartum planning guide', 'postpartum-planning-guide.pdf'],
  ['Postnatal & the fourth trimester', 'Breastfeeding 101', 'breastfeeding-101.pdf'],
  ['Postnatal & the fourth trimester', 'Parent and Baby Yoga Handbook', 'parent-baby-yoga-handbook.pdf'],
  ['Postnatal & the fourth trimester', 'Postpartum core & stability yoga', 'postpartum-yoga-guide.pdf'],
]

console.log(`Project ${projectId} / dataset ${dataset}`)
console.log(`  ${blogPosts.length} blog posts`)
console.log(`  ${birthStories.length} birth stories`)
console.log(`  ${reviews.length} reviews`)
console.log(`  ${HUB.length} hub documents`)

const missing = HUB.filter(([, , f]) => !existsSync(path.join('public/downloads', f)))
if (missing.length) {
  console.error('\nMissing files:', missing.map(([, , f]) => f).join(', '))
  process.exit(1)
}

if (!COMMIT) {
  console.log('\nDRY RUN — nothing written. Re-run with --commit.')
  process.exit(0)
}

// ── Blog posts ────────────────────────────────────────────────────────────
for (const p of blogPosts) {
  const body = []
  for (const b of p.body) {
    if (b.type === 'img') continue // images are re-attached in the Studio
    const style = b.type === 'h2' ? 'h2' : b.type === 'h3' ? 'h3' : 'normal'
    const text = b.type === 'li' ? `• ${b.value}` : b.value
    body.push({ _type: 'block', _key: key(), style,
      children: [{ _type: 'span', _key: key(), text, marks: [] }] })
  }
  await client.createOrReplace({
    _id: `blogPost-${p.slug}`, _type: 'blogPost',
    title: p.title, slug: { _type: 'slug', current: p.slug },
    publishedAt: `${p.publishedAt}T09:00:00Z`,
    category: p.category, excerpt: p.excerpt, body,
  })
  console.log('  blog   ', p.slug)
}

// ── Birth stories ─────────────────────────────────────────────────────────
for (const [i, s] of birthStories.entries()) {
  await client.createOrReplace({
    _id: `birthStory-${s.slug}`, _type: 'birthStory',
    title: s.title, slug: { _type: 'slug', current: s.slug },
    type: s.type, baby: s.baby, place: s.place,
    excerpt: s.excerpt, pullQuote: s.pullQuote,
    body: toBlocks(s.body), order: i,
  })
  console.log('  story  ', s.slug)
}

// ── Reviews ───────────────────────────────────────────────────────────────
for (const [i, r] of reviews.entries()) {
  const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  await client.createOrReplace({
    _id: `review-${id}`, _type: 'review',
    name: r.name, service: r.service, when: r.when, text: r.text, order: i,
  })
  console.log('  review ', r.name)
}

// ── Hub documents ─────────────────────────────────────────────────────────
// Sanity already holds hub resources with their own ids. Creating fresh ones
// would leave the Studio showing two of everything, so match on title and
// patch the file in place; only genuinely new documents get created.
const existing = await client.fetch(
  `*[_type == "hubResource" && type == "pdf"]{_id, title}`,
)
const byTitle = new Map(existing.map((d) => [d.title, d._id]))

let replaced = 0, created = 0
for (const [i, [group, title, file]] of HUB.entries()) {
  const asset = await client.assets.upload(
    'file', createReadStream(path.join('public/downloads', file)), { filename: file },
  )
  const fileRef = { _type: 'file', asset: { _type: 'reference', _ref: asset._id } }
  const id = byTitle.get(title)

  if (id) {
    await client.patch(id).set({ file: fileRef }).commit()
    console.log(`  hub  replaced  ${title}`)
    replaced++
  } else {
    await client.createOrReplace({
      _id: `hubResource-${file.replace(/\.pdf$/, '')}`, _type: 'hubResource',
      title, type: 'pdf', subgroup: group, order: i, file: fileRef,
    })
    console.log(`  hub  created   ${title}`)
    created++
  }
}
console.log(`\n  ${replaced} hub files replaced, ${created} created.`)

// The single Checklists PDF Leanne supplied covers both of these, so they are
// superseded. Not deleted automatically — say so and let a human decide.
const superseded = existing.filter((d) => ['Birthbag checklist', 'Homebirth checklist'].includes(d.title))
if (superseded.length) {
  console.log('\n  Superseded by "Birth bag & homebirth checklists" — delete these in the Studio:')
  for (const d of superseded) console.log(`    ${d.title}  (${d._id})`)
}

console.log('\nDone. The Studio is now the source of truth for all of the above.')
