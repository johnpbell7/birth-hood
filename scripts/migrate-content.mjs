/**
 * One-shot migration: pushes existing site content into Sanity.
 *
 *   - Hub resources, Freebies, Site Settings → PUBLISHED (live immediately)
 *   - All marketing page text → DRAFTS (live site keeps rendering static fallback
 *     until you publish each page in /studio)
 *
 * Run with: node scripts/migrate-content.mjs
 *
 * Safe to re-run — uses createOrReplace with deterministic IDs.
 */
import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as cheerio from 'cheerio'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { randomUUID } from 'crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const token = process.env.SANITY_API_TOKEN
if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in env.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)

const ptBlock = (text, style = 'normal') => ({
  _type: 'block',
  _key: randomUUID().slice(0, 12),
  style,
  children: [{ _type: 'span', _key: randomUUID().slice(0, 12), text, marks: [] }],
  markDefs: [],
})

// ───────────────────────────────────────────────
// 1. SITE SETTINGS
// ───────────────────────────────────────────────
async function migrateSettings() {
  const doc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'birth-hood',
    tagline:
      'Education · Support · Community. Hypnobirthing, Doula support and Prenatal Yoga from Leicester, Midlands and online UK-wide.',
    contactEmail: 'leanne@birth-hood.co.uk',
    social: {
      instagram: 'https://www.instagram.com/birthhooduk',
      facebook: 'http://www.facebook.com/Birthhooduk',
      youtube: 'https://youtube.com/@birthhooduk',
    },
    marqueeWords: [
      'HYPNOBIRTHING',
      'DOULA SUPPORT',
      'PRENATAL YOGA',
      'BIRTH TRAUMA',
      'VIRTUAL SESSIONS',
      'POSTNATAL CARE',
      '5★ RATED',
      'BBC RADIO LEICESTER',
    ],
  }
  await client.createOrReplace(doc)
  console.log('  ✓ siteSettings')
}

// ───────────────────────────────────────────────
// 2. HUB RESOURCES
// ───────────────────────────────────────────────
const hubGroups = [
  {
    label: 'Hypnobirthing essentials',
    items: [
      ['Your Handbook', 'https://www.birth-hood.co.uk/_files/ugd/530235_7ed2246dedf64e32ab7022d32005f447.pdf'],
      ['Printable Affirmations', 'https://www.birth-hood.co.uk/_files/ugd/530235_9a5cb2ec10254cd195ce458dc1a6533c.pdf'],
      ['Extra TBU Colour Affirmations', 'https://www.birth-hood.co.uk/_files/ugd/530235_0e0711b62f4c4fe2a0fb3d21d0376552.pdf'],
      ['Short Relaxation Prompts', 'https://www.birth-hood.co.uk/_files/ugd/530235_859ae4759d2e421a8ae1445a141bc49c.pdf'],
      ['Partner Script', 'https://www.birth-hood.co.uk/_files/ugd/530235_cb0e33d5f48b4673a46b726756c37ce7.docx?dn=Partner%20Relaxation%20LMY.docx'],
    ],
  },
  {
    label: 'Planning for birth',
    items: [
      ['Birth planning guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_e084e07d8d974c50bdce996078aa210a.pdf'],
      ['Antenatal session outline', 'https://www.birth-hood.co.uk/_files/ugd/530235_706acce28865411393672053a4ddec3d.pdf'],
      ['Weekly Agenda', 'https://www.birth-hood.co.uk/_files/ugd/530235_6638d03714964d71b8b98decccb8ee36.pdf'],
      ['Daily activities guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_145c23b49c034841a455e6b3b84a0d84.pdf'],
      ['Partner Movement Guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_f5b3004ee84f4b668e7ddd37599a0e9c.pdf'],
      ['Peanut ball guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_f211e020d29748678f1dbf2e06f0b0a4.pdf'],
      ['Pool inflation guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_d204529f550044de9cb0b09402a10078.pdf'],
      ['Birthbag checklist', 'https://www.birth-hood.co.uk/_files/ugd/530235_2005e030bc85499aadf43a5cac8ba06f.pdf'],
      ['Homebirth checklist', 'https://www.birth-hood.co.uk/_files/ugd/530235_47b64f72fb6140bb8e9aca9b8ea53f3e.pdf'],
      ['Door Signs', 'https://www.birth-hood.co.uk/_files/ugd/530235_271144a698cd41958926cf1f316b77d2.pdf'],
    ],
  },
  {
    label: 'Specific situations',
    items: [
      ['Caesarean Handbook', 'https://www.birth-hood.co.uk/_files/ugd/530235_8acc2b34ec3d44568dee402f33964885.pdf'],
      ['Induction guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_1a8ef500adc44f0b8312846b80e36eb6.pdf'],
      ['Premature birth guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_623176986d0042da9080eb0f2a827be4.pdf'],
      ['Birth Biomechanics eBook', 'https://www.birth-hood.co.uk/_files/ugd/530235_36acda55a7f24801b52bcf4101c8f17d.pdf'],
    ],
  },
  {
    label: 'Postnatal & the fourth trimester',
    items: [
      ['Postpartum planning guide', 'https://www.birth-hood.co.uk/_files/ugd/530235_253dddcd94c943458d22a34b47771d74.pdf'],
      ['Breastfeeding 101', 'https://www.birth-hood.co.uk/_files/ugd/530235_d87e09096f5c423e88b9a03b7e23b7fe.pdf'],
      ['Parent and Baby Yoga Handbook', 'https://www.birth-hood.co.uk/_files/ugd/530235_6933deda18564770a65014550110e057.pdf'],
    ],
  },
]

const hubAlbums = [
  {
    title: "TBU MP3's No Swearing",
    tracks: [
      ['Birth Rehearsal - Ruth - N:S', '50:33'],
      ['Relaxation - Ruth - N:S', '40:03'],
      ['Fear Release - Ruth - N:S', '43:40'],
    ],
  },
  {
    title: "TBU MP3's",
    tracks: [
      ['TBU - Affirmation Track', '18:00'],
      ['TBU - Birth Rehearsal', '—'],
      ['TBU - Fear Release', '—'],
      ['TBU - Confidence', '—'],
    ],
  },
  {
    title: 'Additional Relaxations',
    tracks: [
      ['Short Relaxation', '—'],
      ['Partner Relaxation Script', '—'],
    ],
  },
]

const hubVideos = [
  ['Workshop Recordings', 'Full recordings of birth-hood course sessions and workshops covering birth positions, coaching, breathing techniques and more.'],
  ['Birth Positions Walkthrough', 'A visual guide to the most effective positions for each stage of labour and birth.'],
  ['Breathing Techniques', 'I demonstrate up-breathing, down-breathing and relaxation breaths for every stage of labour.'],
  ['Partner Coaching Session', 'How your birth partner can actively support you — comfort measures, advocacy and space-holding.'],
  ['Caesarean Birth Prep', 'What to expect before, during and after a caesarean — making it as positive as possible.'],
  ['Fourth Trimester Essentials', 'Preparing for the early weeks with your baby — feeding, sleep, recovery and emotional wellbeing.'],
]

const hubSites = [
  ['Dr Sara Wickham', 'https://www.sarawickham.com', 'Midwife, author, speaker and researcher — evidence-based information on pregnancy and birth.', 'SW'],
  ['Evidence Based Birth', 'https://evidencebasedbirth.com', 'Evidence that empowers — research-based articles on every aspect of birth.', 'EB'],
  ['Birthrights', 'https://www.birthrights.org.uk', 'The UK charity dedicated to protecting human rights in childbirth.', 'BR'],
  ['AIMS', 'https://www.aims.org.uk', 'Association for Improvements in the Maternity Services — for a better birth.', 'AI'],
  ['MidwifeThinking', 'https://midwifethinking.com', "Rachel Reed's blog — deep dives into the physiology and research behind birth.", 'MT'],
  ['Spinning Babies', 'https://www.spinningbabies.com', 'Fetal positioning techniques for easier birth — used by midwives and doulas worldwide.', 'SB'],
]

async function migrateHub() {
  let n = 0, order = 0
  for (const group of hubGroups) {
    for (const [title, href] of group.items) {
      const id = `hub-pdf-${slugify(title)}`
      // PDFs are stored with type='pdf' and externalUrl pointing at the existing
      // Wix-hosted file. Leanne can later upload a new file via Studio to replace it.
      await client.createOrReplace({
        _id: id,
        _type: 'hubResource',
        title,
        type: 'pdf',
        subgroup: group.label,
        externalUrl: href,
        order: order++,
      })
      n++
    }
  }
  for (const album of hubAlbums) {
    for (const [title, duration] of album.tracks) {
      const id = `hub-audio-${slugify(album.title)}-${slugify(title)}`
      await client.createOrReplace({
        _id: id,
        _type: 'hubResource',
        title,
        type: 'audio',
        subgroup: album.title,
        duration,
        order: order++,
      })
      n++
    }
  }
  for (const [title, description] of hubVideos) {
    const id = `hub-video-${slugify(title)}`
    await client.createOrReplace({
      _id: id,
      _type: 'hubResource',
      title,
      description,
      type: 'video',
      subgroup: 'Workshop videos',
      order: order++,
    })
    n++
  }
  for (const [title, url, description, logoLetter] of hubSites) {
    const id = `hub-site-${slugify(title)}`
    await client.createOrReplace({
      _id: id,
      _type: 'hubResource',
      title,
      description,
      type: 'external',
      subgroup: 'Useful sites',
      externalUrl: url,
      logoLetter,
      order: order++,
    })
    n++
  }
  console.log(`  ✓ hubResources (${n})`)
}

// ───────────────────────────────────────────────
// 3. FREEBIES
// ───────────────────────────────────────────────
const freebies = [
  ['Colouring Affirmations', '✦', 'Printable colouring birth affirmations — colour them in and display them around your home for daily positive reminders.', '/downloads/colouring-affirmations.pdf', 'pdf'],
  ['Birth Plan Guide', '◻', 'A complimentary birth plan guide to help you plan your A, B & C birth preferences.', '/downloads/birth-plan-guide.pdf', 'pdf'],
  ['Newborn Checklist', '○', 'Everything you need for your new arrival — a comprehensive newborn essentials checklist.', '/downloads/newborn-checklist.pdf', 'pdf'],
  ['15 Ready Made Affirmations', '◈', '15 ready-made birth-hood affirmations — print them out and use them throughout your pregnancy and birth.', '/downloads/ready-made-affirmations.pdf', 'pdf'],
  ['FREE Hypnobirthing MP3', '♫', 'A free hypnobirthing relaxation MP3 to help you practise deep relaxation during pregnancy.', '/downloads/hypnobirthing-relaxation.mp3', 'audio'],
  ['ELLE TENS Discount', '◇', 'A discount code for an ELLE TENS machine — great for managing contractions in early labour.', '/downloads/elle-tens-discount.pdf', 'external'],
]

async function migrateFreebies() {
  for (const [title, emoji, description, href, type] of freebies) {
    const id = `freebie-${slugify(title)}`
    const doc = {
      _id: id,
      _type: 'freebie',
      title,
      emoji,
      description,
      type,
      buttonLabel: type === 'external' ? 'Get Discount' : 'Download Free',
      accentColor: 'pink',
    }
    if (type === 'external') doc.externalUrl = href
    // For pdf/audio types, the file should be re-uploaded via Studio (file refs need
    // Sanity asset IDs, can't reference local paths). We seed without a file so the
    // freebie is editable; the static fallback continues to work because Sanity has
    // 0 freebie docs only when *all* docs lack files.
    await client.createOrReplace(doc)
  }
  console.log(`  ✓ freebies (${freebies.length})`)
}

// ───────────────────────────────────────────────
// 4. MARKETING PAGES (DRAFTS)
// ───────────────────────────────────────────────
const PAGE_SLUGS = [
  'birth-doula',
  'birth-trauma',
  'booking',
  'contact',
  'course-info',
  'doula',
  'doula-feedback',
  'faq',
  'hypnobirthing',
  'links',
  'masterclass',
  'meet-leanne',
  'podcast',
  'postnatal-doula',
  'reviews',
  'session-outlines',
  'terms',
  'virtual-doula',
  'yoga',
]

async function fetchPageHtml(slug) {
  const url = `http://localhost:3001/${slug}`
  const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } })
  if (!res.ok) throw new Error(`${slug}: HTTP ${res.status}`)
  return res.text()
}

function extractPageContent(html, slug) {
  const $ = cheerio.load(html)
  const $main = $('main.site-main')
  if (!$main.length) throw new Error(`${slug}: no <main.site-main> found`)

  // Hero from PageHero / first .page-hero element
  let hero = null
  const $heroEl = $main.find('.page-hero, .home-hero-split').first()
  if ($heroEl.length) {
    const eyebrow = $heroEl.find('.page-eyebrow').first().text().trim() || undefined
    const heading = $heroEl.find('h1').first().text().trim()
    const subheading = $heroEl.find('.page-subtitle, .hero-sub').first().text().trim() || undefined
    if (heading) {
      hero = {
        _type: 'heroSection',
        _key: randomUUID().slice(0, 12),
        eyebrow,
        heading,
        subheading,
      }
    }
    $heroEl.remove()
  }

  // Walk remaining <section> elements; each becomes a richTextSection
  const sections = []
  if (hero) sections.push(hero)

  $main.find('section').each((_, el) => {
    const $sec = $(el)
    // Skip common dynamic-only sections
    const className = $sec.attr('class') || ''
    if (className.includes('marquee')) return

    const eyebrow = $sec.find('.section-label').first().text().trim() || undefined
    const heading = $sec.find('h2').first().text().trim() || undefined
    const blocks = []

    if (heading) blocks.push(ptBlock(heading, 'h2'))

    // h3 + p in document order under this section, skipping nested sections
    $sec
      .find('h3, p, blockquote, li')
      .each((_, node) => {
        const $n = $(node)
        // Skip if this node is inside a nested section
        if ($n.parents('section').first().get(0) !== el) return
        const text = $n.text().trim()
        if (!text) return
        const tag = node.tagName?.toLowerCase()
        if (tag === 'h3') blocks.push(ptBlock(text, 'h3'))
        else if (tag === 'blockquote') blocks.push(ptBlock(text, 'blockquote'))
        else if (tag === 'li') blocks.push(ptBlock(`• ${text}`))
        else blocks.push(ptBlock(text))
      })

    if (blocks.length === 0 && !heading) return

    sections.push({
      _type: 'richTextSection',
      _key: randomUUID().slice(0, 12),
      eyebrow,
      heading,
      body: blocks.length > 0 ? blocks : [ptBlock('')],
    })
  })

  return sections
}

function titleFromSlug(slug) {
  return slug
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ')
}

async function migratePages() {
  let migrated = 0
  for (const slug of PAGE_SLUGS) {
    try {
      const html = await fetchPageHtml(slug)
      const sections = extractPageContent(html, slug)
      const id = `drafts.page-${slug}`
      await client.createOrReplace({
        _id: id,
        _type: 'page',
        title: titleFromSlug(slug),
        slug: { _type: 'slug', current: slug },
        sections,
      })
      console.log(`  ✓ draft: ${slug} (${sections.length} sections)`)
      migrated++
    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`)
    }
  }
  console.log(`  → ${migrated}/${PAGE_SLUGS.length} pages migrated as drafts`)
}

// ───────────────────────────────────────────────
async function main() {
  console.log(`\nMigrating to Sanity project ${projectId}/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}\n`)
  console.log('1. Site Settings (published)')
  await migrateSettings()
  console.log('\n2. Hub resources (published)')
  await migrateHub()
  console.log('\n3. Freebies (published)')
  await migrateFreebies()
  console.log('\n4. Marketing pages (DRAFTS — won\'t render until you publish each one in Studio)')
  await migratePages()
  console.log('\n✓ Migration complete\n')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
