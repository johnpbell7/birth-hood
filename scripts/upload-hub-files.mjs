// Uploads the client hub PDFs from public/downloads into Sanity, so the files
// live in the CMS rather than the git repo — and so Leanne can swap a document
// in the Studio without a code change.
//
// The Hub already prefers Sanity: HubClient uses buildPdfGroups(sanityResources)
// and only falls back to its hardcoded list when Sanity returns nothing. So once
// this has run, the hub serves Sanity URLs with no further code change, and the
// PDFs can be deleted from public/downloads.
//
// Requires (in .env.local):
//   NEXT_PUBLIC_SANITY_PROJECT_ID
//   NEXT_PUBLIC_SANITY_DATASET          (defaults to "production")
//   SANITY_API_TOKEN                    a token with write access
//
// Run:  node scripts/upload-hub-files.mjs           (dry run — lists what it would do)
//       node scripts/upload-hub-files.mjs --commit  (actually uploads)

import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'

const COMMIT = process.argv.includes('--commit')
const DIR = 'public/downloads'

// title -> file, grouped exactly as the Hub renders them.
const RESOURCES = [
  ['Hypnobirthing essentials', 'Your Handbook',                     'hypnobirthing-handbook.pdf'],
  ['Hypnobirthing essentials', 'Printable Affirmations',            'printable-affirmations.pdf'],
  ['Hypnobirthing essentials', 'Extra TBU Colour Affirmations',     'tbu-colour-affirmations.pdf'],
  ['Hypnobirthing essentials', 'Short Relaxation Prompts',          'short-relaxation-prompts.pdf'],
  ['Hypnobirthing essentials', 'Partner Script',                    'partner-script.pdf'],
  ['Hypnobirthing essentials', 'Birth Meditations',                 'birth-meditations.pdf'],

  ['Planning for birth',       'Birth planning guide',              'birth-planning-guide.pdf'],
  ['Planning for birth',       'Antenatal session outline',         'antenatal-session-outline.pdf'],
  ['Planning for birth',       'Weekly Agenda',                     'weekly-agenda.pdf'],
  ['Planning for birth',       'Daily activities guide',            'daily-activities-guide.pdf'],
  ['Planning for birth',       'Partner Movement Guide',            'partner-movement-guide.pdf'],
  ['Planning for birth',       'Peanut ball guide',                 'peanut-ball-guide.pdf'],
  ['Planning for birth',       'Pool inflation guide',              'pool-inflation-guide.pdf'],
  ['Planning for birth',       'Birth bag & homebirth checklists',  'checklists.pdf'],
  ['Planning for birth',       'Door Signs',                        'door-signs.pdf'],
  ['Planning for birth',       'Door counterweight (rebozo)',       'door-counterweight.pdf'],
  ['Planning for birth',       'Pillars of a birth partner',        'pillars-of-a-birth-partner.pdf'],

  ['Specific situations',      'Caesarean Handbook',                'caesarean-workbook.pdf'],
  ['Specific situations',      'Induction guide',                   'induction-guide.pdf'],
  ['Specific situations',      'Premature birth guide',             'preterm-birth-guide.pdf'],
  ['Specific situations',      'Birth Biomechanics eBook',          'birth-biomechanics.pdf'],
  ['Specific situations',      'Freebirth guide',                   'birth-hood-freebirth-guide.pdf'],

  ['Postnatal & the fourth trimester', 'Postpartum planning guide',        'postpartum-planning-guide.pdf'],
  ['Postnatal & the fourth trimester', 'Breastfeeding 101',                'breastfeeding-101.pdf'],
  ['Postnatal & the fourth trimester', 'Parent and Baby Yoga Handbook',    'parent-baby-yoga-handbook.pdf'],
  ['Postnatal & the fourth trimester', 'Postpartum core & stability yoga', 'postpartum-yoga-guide.pdf'],
]

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN — set them in .env.local first.')
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })

let missing = 0
let bytes = 0
for (const [, , file] of RESOURCES) {
  const p = path.join(DIR, file)
  if (!fs.existsSync(p)) { console.error(`  MISSING  ${file}`); missing++; continue }
  bytes += fs.statSync(p).size
}
if (missing) { console.error(`\n${missing} file(s) missing — aborting.`); process.exit(1) }

console.log(`${RESOURCES.length} documents, ${(bytes / 1024 / 1024).toFixed(1)}MB total`)
if (!COMMIT) {
  console.log('\nDRY RUN — nothing uploaded. Re-run with --commit to upload.\n')
  for (const [group, title, file] of RESOURCES) console.log(`  [${group}] ${title}  <-  ${file}`)
  process.exit(0)
}

for (const [i, [group, title, file]] of RESOURCES.entries()) {
  const p = path.join(DIR, file)
  process.stdout.write(`(${i + 1}/${RESOURCES.length}) ${title} … `)

  const asset = await client.assets.upload('file', fs.createReadStream(p), { filename: file })

  // Deterministic id so re-running updates rather than duplicating.
  const _id = `hubResource-${file.replace(/\.pdf$/, '')}`
  await client.createOrReplace({
    _id,
    _type: 'hubResource',
    title,
    type: 'pdf',
    subgroup: group,
    order: i,
    file: { _type: 'file', asset: { _type: 'reference', _ref: asset._id } },
  })
  console.log('ok')
}

console.log(`\nDone. ${RESOURCES.length} hub resources are now in Sanity.`)
console.log('The Hub will use them automatically. You can then delete the PDFs from public/downloads.')
