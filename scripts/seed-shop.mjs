// Creates the shop catalogue in Sanity: the 8 individual resources and the
// 8 bundles from Leanne's shop document, plus the two Power Hour sessions.
//
// What it does NOT do: upload files or set prices. Those are Leanne's to add —
// the products are created with the right titles, descriptions, types and
// bundle links so she only has to drop in a file and type a price.
//
// Requires in .env.local:
//   NEXT_PUBLIC_SANITY_PROJECT_ID
//   NEXT_PUBLIC_SANITY_DATASET      (defaults to "production")
//   SANITY_API_TOKEN                a token with Editor permissions
//
// Run:  node scripts/seed-shop.mjs            dry run — shows what it would write
//       node scripts/seed-shop.mjs --commit   actually writes
//
// Safe to re-run: deterministic _ids mean a second run updates rather than
// duplicating. Re-running does NOT wipe files or prices already added in the
// Studio — it only patches the descriptive fields.

import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'node:fs'

const envPath = '.env.local'
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}

const commit = process.argv.includes('--commit')
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const token = process.env.SANITY_API_TOKEN

if (!projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
  process.exit(1)
}
if (commit && !token) {
  console.error('Missing SANITY_API_TOKEN (needs Editor permissions)')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const id = (slug) => `product-${slug}`

/** Individual resources — order matches the shop document. */
const SINGLES = [
  ['birth-prep-handbook', 'Birth-hood Birth Prep / Hypnobirthing Handbook', 'Your no-BS guide to preparing for birth, whatever your birth looks like.'],
  ['birth-plan-toolkit', 'Birth-hood Birth Plan Tool Kit', 'Because your birth plan should cover more than Plan A.'],
  ['fourth-trimester-guide', 'Birth-hood Fourth Trimester Planning Guide', 'Because everyone prepares for the birth. Not enough people prepare for what comes after.'],
  ['peanut-ball-guide', 'Birth-hood Peanut Ball Guide', 'Practical positions for anyone planning to use a peanut ball during labour, particularly with an epidural.'],
  ['prenatal-movement-guide', 'Birth-hood Prenatal Movement Guide', '10 minutes of movement to keep you moving through pregnancy.'],
  ['postpartum-core-stability', 'Birth-hood Postpartum Core & Stability', 'A gentle way to reconnect with your body and rebuild strength after birth.'],
  ['induction-guide', 'Birth-hood Induction Guide', "Understand your options before you're asked to make a decision."],
  ['caesarean-handbook', 'Birth-hood Caesarean Hypnobirthing Handbook', "Preparing for a caesarean doesn't mean giving up on the birth you want."],
]

/**
 * Resources named inside bundles that aren't sold individually in the shop
 * document. They're created too, hidden from the shop, so the bundles have
 * something real to point at and each file is still only uploaded once.
 */
const BUNDLE_ONLY = [
  ['partner-script', 'Birth-hood Partner Script', 'A script for your birth partner to read from when it counts.'],
  ['partner-quick-guide', 'Birth-hood Partner Quick Guide', 'The short version, for the day itself.'],
  ['pillars-birth-partner', 'Birth-hood Pillars of a Birth Partner', 'What a birth partner is actually there to do.'],
  ['birth-partner-guide', 'Birth-hood Birth Partner Guide', 'The full guide for whoever is supporting you.'],
  ['daily-birth-ball-guide', 'Birth-hood Daily Birth Ball Guide', 'Daily birth ball movement through pregnancy.'],
  ['biomechanics', 'Birth-hood Biomechanics', 'How your body and your baby move together in labour.'],
  ['birth-planning-guide', 'Birth-hood Birth Planning Guide', 'Planning your birth, including the parts nobody plans for.'],
  ['meditation-scripts', 'Birth-hood Meditation for Birth Scripts', 'Scripts to read aloud or record for your own practice.'],
  ['weekly-agenda', 'Birth-hood Weekly Agenda', 'A week-by-week plan for your birth preparation.'],
  ['colouring-affirmations', 'Birth-hood Printable Colouring Affirmations', 'Affirmations to colour in, print and put up.'],
  ['mp3-set', 'Birth-hood Relaxation MP3s', 'The four birth-hood relaxation tracks.'],
]

const BUNDLES = [
  ['bundle-birth-partner', 'Birth-hood Birth Partner Bundle', 'Because birth partners need preparing too.',
    ['partner-script', 'partner-quick-guide', 'pillars-birth-partner']],
  ['bundle-birth-prep', 'Birth-hood Birth Prep Bundle', 'Everything you need to feel informed, prepared and ready for the unexpected.',
    ['birth-prep-handbook', 'birth-plan-toolkit', 'birth-partner-guide', 'peanut-ball-guide', 'daily-birth-ball-guide']],
  ['bundle-postpartum', 'Birth-hood Postpartum Bundle', 'Prepare for the bit that comes after birth.',
    ['fourth-trimester-guide', 'postpartum-core-stability']],
  ['bundle-caesarean', 'Birth-hood Caesarean Bundle', 'Prepare for your caesarean. Protect the parts of your birth that matter to you.',
    ['caesarean-handbook', 'fourth-trimester-guide']],
  ['bundle-induction', 'Birth-hood Induction Bundle', 'Know your options. Prepare your body. Go into induction informed.',
    ['induction-guide', 'peanut-ball-guide', 'fourth-trimester-guide']],
  ['bundle-movement', 'Birth-hood Movement Bundle', 'Move through pregnancy, birth and recovery with confidence.',
    ['peanut-ball-guide', 'prenatal-movement-guide', 'postpartum-core-stability', 'biomechanics']],
  ['bundle-hypnobirthing', 'Birth-hood Hypnobirthing Bundle', 'Train your brain, calm your body and prepare for birth on your terms.',
    ['birth-prep-handbook', 'partner-script', 'birth-planning-guide', 'meditation-scripts', 'weekly-agenda', 'colouring-affirmations', 'mp3-set']],
  ['bundle-complete', 'Complete Birth-Hood Toolkit', 'The whole bloody lot. Birth prep, hypnobirthing, movement and postpartum — all in one place.',
    ['birth-prep-handbook', 'induction-guide', 'partner-script', 'birth-planning-guide', 'meditation-scripts',
     'weekly-agenda', 'colouring-affirmations', 'mp3-set', 'fourth-trimester-guide', 'postpartum-core-stability',
     'partner-quick-guide', 'pillars-birth-partner', 'birth-plan-toolkit', 'birth-partner-guide',
     'peanut-ball-guide', 'daily-birth-ball-guide']],
]

const SESSIONS = [
  ['power-hour', '⚡ Birth-Hood Power Hour', "60 minutes of personalised birth support. You've read the guides. You've Googled. You've got questions. Now let's actually talk it through — bring your birth plan, induction options, previous birth experience, worries or whatever is currently making you go \"hang on… what?\". We'll spend an hour working through your situation, your options and what matters to you.", 50, 'Book Power Hour'],
  ['power-session', '⚡ Birth-Hood Power Session', 'Two hours of personalised birth support. Got a LOT to unpack? Two hours to properly work through your birth preparation, preferences, questions and decision-making — without trying to cram everything into 60 minutes.', 80, 'Book Power Session'],
]

const docs = []
let order = 0

for (const [slug, title, description, price, bookingLabel] of SESSIONS) {
  docs.push({
    _id: id(slug), _type: 'product', kind: 'single', title, description, price,
    bookingUrl: 'https://calendly.com/birthhood/power-hour', bookingLabel,
    active: true, order: (order += 10),
  })
}
for (const [slug, title, description] of SINGLES) {
  docs.push({ _id: id(slug), _type: 'product', kind: 'single', title, description, active: true, order: (order += 10) })
}
for (const [slug, title, description] of BUNDLE_ONLY) {
  // Hidden from the shop — these exist so bundles can reference one upload.
  docs.push({ _id: id(slug), _type: 'product', kind: 'single', title, description, active: false, order: (order += 10) })
}
for (const [slug, title, description, includes] of BUNDLES) {
  docs.push({
    _id: id(slug), _type: 'product', kind: 'bundle', title, description, active: true, order: (order += 10),
    includes: includes.map((s) => ({ _type: 'reference', _key: s, _ref: id(s) })),
  })
}

console.log(`${docs.length} products (${SINGLES.length} individual, ${BUNDLE_ONLY.length} bundle-only, ${BUNDLES.length} bundles, ${SESSIONS.length} sessions)`)

if (!commit) {
  for (const d of docs) console.log(`  ${d.kind === 'bundle' ? 'bundle' : d.active ? 'single' : 'hidden'}  ${d.title}`)
  console.log('\nDry run. Re-run with --commit to write.')
  process.exit(0)
}

const tx = client.transaction()
for (const d of docs) {
  // createIfNotExists + patch: never clobbers a file or price added in the Studio.
  const { _id, _type, ...rest } = d
  tx.createIfNotExists({ _id, _type, ...rest })
  const patch = { ...rest }
  delete patch.price // whatever Leanne has typed wins
  tx.patch(_id, (p) => p.set(patch))
}
await tx.commit()
console.log('Done. Add files and prices in the Studio under Shop — Paid Resources.')
