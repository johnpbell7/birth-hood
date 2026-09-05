/**
 * One-shot migration: pushes existing site content into Sanity.
 *
 *   - Site Settings, Hub resources, Freebies → PUBLISHED (live immediately)
 *   - All marketing page text → DRAFTS (live site keeps rendering static fallback
 *     until you publish each page in /studio)
 *
 * It also:
 *   - Uploads every file in public/images/ as a Sanity IMAGE asset (filename → assetId map)
 *   - Uploads every file in .migration-assets/hub/ as a Sanity FILE asset and creates
 *     one hubResource doc per entry in manifest.json (when that directory is present)
 *
 * Run with: node scripts/migrate-content.mjs
 *
 * Safe to re-run — uses createOrReplace with deterministic IDs.
 */
import 'dotenv/config'
import { createClient } from '@sanity/client'
import { readFileSync, readdirSync, existsSync, statSync, createReadStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join, basename, extname } from 'path'
import { randomUUID } from 'crypto'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const IMAGES_DIR = join(ROOT, 'public', 'images')
const HUB_ASSETS_DIR = join(ROOT, '.migration-assets', 'hub')

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

const k = () => randomUUID().slice(0, 12)

// Portable-text block helper. Accepts an array of {text, marks?} spans or a plain string.
const ptBlock = (content, style = 'normal') => {
  const spans = Array.isArray(content)
    ? content.map((c) => ({ _type: 'span', _key: k(), text: c.text, marks: c.marks || [] }))
    : [{ _type: 'span', _key: k(), text: content, marks: [] }]
  return { _type: 'block', _key: k(), style, markDefs: [], children: spans }
}
// Convenience: build a body array from an array of paragraph strings.
const ptParas = (paras, style = 'normal') => paras.map((p) => ptBlock(p, style))

// Image reference helper (asset must already be uploaded → imageMap[filename])
const imageField = (assetId, alt) =>
  assetId
    ? { _type: 'image', alt, asset: { _type: 'reference', _ref: assetId } }
    : undefined

// ───────────────────────────────────────────────
// 0. UPLOAD IMAGE ASSETS  (public/images → image asset map)
// ───────────────────────────────────────────────
const imageMap = {} // filename → assetId

async function uploadImages() {
  if (!existsSync(IMAGES_DIR)) {
    console.log('  (no public/images dir — skipping image upload)')
    return
  }
  const files = readdirSync(IMAGES_DIR).filter((f) => statSync(join(IMAGES_DIR, f)).isFile())
  for (const file of files) {
    const ext = extname(file).toLowerCase()
    // Only raster/vector images that Sanity accepts as image assets.
    if (!['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext)) continue
    const asset = await client.assets.upload('image', createReadStream(join(IMAGES_DIR, file)), {
      filename: file,
    })
    imageMap[file] = asset._id
  }
  console.log(`  ✓ images (${Object.keys(imageMap).length})`)
}

const img = (filename, alt) => imageField(imageMap[filename], alt)

// ───────────────────────────────────────────────
// 1. SITE SETTINGS  (reuses seed-site-settings.mjs content)
// ───────────────────────────────────────────────
async function migrateSettings() {
  const doc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'birth-hood',
    tagline: 'Your birth, your way.',
    contactEmail: 'leanne@birth-hood.co.uk',
    phone: '07814 504865',
    social: {
      instagram: 'https://www.instagram.com/birthhooduk',
      facebook: 'http://www.facebook.com/Birthhooduk',
      youtube: 'https://youtube.com/@birthhooduk',
      tiktok: '',
      calendly: 'https://calendly.com/birthhood',
    },
    footerText: '© birth-hood. All rights reserved.',
    marqueeWords: [
      'Hypnobirthing',
      'Birth Doula',
      'Prenatal Yoga',
      'Birth Trauma',
      'Postnatal Support',
      'Online & In-Person',
    ],
    // Home — Hero
    homeHeroTitle: 'Welcome to birth-hood',
    homeHeroSubtitle:
      'Hypnobirthing, Doula support and Yoga — helping you feel powerful, prepared and genuinely excited for birth. All pregnancies, all modes of birth, all people.',
    homeHeroCta: 'Book Free Consultation',
    homeHeroCtaHref: 'https://calendly.com/birthhood',
    // Home — Services
    homeServicesEyebrow: 'What I offer',
    homeServicesHeading: 'Everything you need for a positive birth',
    homeServices: [
      {
        _type: 'serviceCard',
        _key: 'hypnobirthing',
        name: 'Hypnobirthing',
        description:
          'Evidence-based antenatal education using relaxation, breathing and visualisation to help you approach birth with calm confidence.',
        href: '/hypnobirthing',
      },
      {
        _type: 'serviceCard',
        _key: 'birth-doula',
        name: 'Birth Doula',
        description:
          'Continuous, compassionate non-medical support before, during and after your birth. Your person in the room — always in your corner.',
        href: '/birth-doula',
      },
      {
        _type: 'serviceCard',
        _key: 'prenatal-yoga',
        name: 'Prenatal Yoga',
        description:
          'Gentle, evidence-based prenatal yoga for all stages of pregnancy. Nourish your body, calm your mind and build a beautiful community.',
        href: '/yoga',
      },
      {
        _type: 'serviceCard',
        _key: 'birth-trauma',
        name: 'Birth Trauma Support',
        description:
          "Trauma-informed support for those processing a difficult birth experience. Your feelings are valid — you don't have to carry them alone.",
        href: '/birth-trauma',
      },
    ],
    // Home — About
    homeAboutEyebrow: 'About Leanne',
    homeAboutHeading: 'A passionate advocate for positive birth',
    homeAboutBody: [
      "Hi, I'm Leanne — a certified hypnobirthing practitioner, birth doula and yoga teacher based in NW Leicestershire. Since 2019 I've been helping families across the Midlands and online feel genuinely prepared and excited for birth.",
      "I believe that every person deserves to feel powerful in their birth experience — regardless of how it unfolds. Whether you're planning a home birth, a hospital birth, a caesarean or anything in between, I'm here to give you the knowledge, tools and support you need.",
    ],
    homeAboutCredentials: [
      'KGHypnobirthing DipHb (2019)',
      'Badass Birth Trained Doula (2021)',
      '3 Step Rewind Practitioner (2021)',
      'LGBT+ Competency — Queer Birth Club (2021)',
      '85hr Pregnancy/Postnatal Yoga — Sally Parkes (2022)',
      'Featured on BBC Radio Leicester',
    ],
    homeAboutCta: 'Meet Leanne',
    homeAboutCtaHref: '/meet-leanne',
    // Home — Testimonials
    homeTestimonialsEyebrow: 'Real words',
    homeTestimonialsHeading: 'What clients say',
    homeTestimonials: [
      {
        _type: 'homeReview',
        _key: 'review-1',
        quote:
          'We instantly felt at ease and comfortable and thoroughly enjoyed learning about the benefits of Hypnobirthing. We are due to have our first baby in 6 weeks and Leanne helped us to feel nothing but calm and excited for this completely unknown experience coming up.',
        attribution: 'Client · Leicestershire ★★★★★',
      },
      {
        _type: 'homeReview',
        _key: 'review-2',
        quote:
          "From my first contact with Leanne we just clicked. She supported me through my concern about fibroids, and gave me some brilliant yoga positions to try when my SPD started. I can't recommend Leanne highly enough, she's a pro at end-to-end care!",
        attribution: 'Beka · Leicestershire ★★★★★',
      },
      {
        _type: 'homeReview',
        _key: 'review-3',
        quote:
          'We went on an antenatal course last week, and honestly found the two hours spent with Leanne today were much more helpful than the seven hours there!',
        attribution: 'Client · Leicestershire ★★★★★',
      },
    ],
    // Home — Free Resources
    homeFreebiesHeading: 'Free resources to get you started',
    homeFreebiesBody:
      'Download my free birth affirmations, birth plan guide and newborn checklist — no email required, no strings attached. Plus a FREE Hypnobirthing MP3 and ELLE TENS machine discount code!',
    homeFreebiesTags: ['Birth Affirmations', 'Birth Plan Guide', 'Newborn Checklist'],
    homeFreebiesCta: 'Download Free Resources',
    homeBookingHeading: 'Ready to feel excited about your birth?',
    homeBookingBody: 'Book a free 30-minute consultation — no obligation, just a friendly chat.',
  }
  await client.createOrReplace(doc)
  console.log('  ✓ siteSettings')
}

// ───────────────────────────────────────────────
// 2. HUB RESOURCES (from .migration-assets/hub/manifest.json + uploaded files)
// ───────────────────────────────────────────────
async function migrateHub() {
  const manifestPath = join(HUB_ASSETS_DIR, 'manifest.json')
  if (!existsSync(manifestPath)) {
    console.log('  (no .migration-assets/hub/manifest.json — skipping hub PDF upload)')
    return
  }
  let manifest
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  } catch (err) {
    console.error(`  ✗ could not parse manifest.json: ${err.message}`)
    return
  }
  const entries = Array.isArray(manifest) ? manifest : manifest.files || manifest.items || []
  let n = 0,
    order = 0
  for (const entry of entries) {
    const { title, group, filename } = entry
    if (!filename) continue
    const filePath = join(HUB_ASSETS_DIR, filename)
    if (!existsSync(filePath)) {
      console.error(`  ✗ hub file missing: ${filename}`)
      continue
    }
    const fileAsset = await client.assets.upload('file', createReadStream(filePath), { filename })
    const id = `hub-pdf-${slugify(title || filename)}`
    await client.createOrReplace({
      _id: id,
      _type: 'hubResource',
      title: title || basename(filename, extname(filename)),
      type: 'pdf',
      subgroup: group || undefined,
      file: { _type: 'file', asset: { _type: 'reference', _ref: fileAsset._id } },
      order: order++,
    })
    n++
  }
  console.log(`  ✓ hubResources (${n})`)
}

// ───────────────────────────────────────────────
// 3. FREEBIES (static fallback array from app/freebies/page.tsx)
// ───────────────────────────────────────────────
const freebies = [
  ['Colouring Affirmations', '✦', 'Printable colouring birth affirmations — colour them in and display them around your home for daily positive reminders.', 'pdf'],
  ['Birth Plan Guide', '◻', 'A complimentary birth plan guide to help you plan your A, B & C birth preferences.', 'pdf'],
  ['Newborn Checklist', '○', 'Everything you need for your new arrival — a comprehensive newborn essentials checklist.', 'pdf'],
  ['15 Ready Made Affirmations', '◈', '15 ready-made birth-hood affirmations — print them out and use them throughout your pregnancy and birth.', 'pdf'],
  ['FREE Hypnobirthing MP3', '♫', 'A free hypnobirthing relaxation MP3 to help you practise deep relaxation during pregnancy.', 'audio'],
  ['ELLE TENS Discount', '◇', 'A discount code for an ELLE TENS machine — great for managing contractions in early labour.', 'external'],
]

async function migrateFreebies() {
  for (const [title, emoji, description, type] of freebies) {
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
      // downloadFile left null/placeholder — re-upload via Studio (file refs need
      // Sanity asset IDs, can't reference local paths).
    }
    await client.createOrReplace(doc)
  }
  console.log(`  ✓ freebies (${freebies.length})`)
}

// ───────────────────────────────────────────────
// 4. MARKETING PAGES (DRAFTS)
// ───────────────────────────────────────────────
const cal = 'https://calendly.com/birthhood'

// Each builder returns { title, metaTitle, metaDescription, sections }
const pageBuilders = {
  hypnobirthing: () => ({
    title: 'Hypnobirthing',
    metaTitle: 'Hypnobirthing',
    metaDescription:
      'Evidence-based hypnobirthing courses in NW Leicestershire and online — release fear, trust your body and approach birth with calm confidence.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Calm. Confident. Prepared.',
        heading: 'Hypnobirthing',
        subheading:
          'Evidence-based techniques to help you release fear, trust your body and step into birth feeling genuinely excited — not terrified.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal,
        image: img('hypnobirthing-class.png', 'Hypnobirthing class'),
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: "What is it?",
        heading: "It's not about being hypnotised",
        body: [
          ...ptParas([
            'Hypnobirthing is a complete antenatal education programme. It combines evidence-based information about how birth works with practical relaxation, breathing and visualisation techniques to help you approach your birth with calm confidence.',
            'Far from putting you into a trance, hypnobirthing teaches you how to work with your body — understanding the physiology of birth, releasing fear and tension, and accessing your body’s natural ability to birth comfortably.',
            'It works for all birth types — vaginal, caesarean, water birth, hospital, home or birth centre — and all families.',
          ]),
          ptBlock("What you'll learn", 'h3'),
          ...ptParas([
            'How birth works physiologically and how your mindset affects your experience',
            'Breathing techniques for each stage of labour',
            'Deep relaxation and self-hypnosis skills',
            'Visualisation and affirmation practices',
            'How to write a birth plan that your care team will respect',
            'Your rights in the maternity system and how to advocate for yourself',
            'How birth partners can actively support you',
            'Preparation for birth in any setting or situation',
          ]),
        ],
        sidePanelTitle: 'KGHypnobirthing',
        stats: [
          { _key: k(), value: '25%', label: 'Fewer requests for pain relief (Cochrane Review)' },
          { _key: k(), value: "100's", label: 'of families I’ve supported' },
          { _key: k(), value: '5★', label: '5 Star rated on Google' },
          { _key: k(), value: '5+', label: 'Years of experience teaching hypnobirthing' },
        ],
        callout:
          "I'm a certified KGHypnobirthing practitioner, trained in the UK's leading hypnobirthing method — developed by Katharine Graves, widely regarded as the gold standard in birth preparation.",
        imagePosition: 'right',
      },
      {
        _type: 'pricingSection', _key: k(),
        eyebrow: 'Choose your course',
        heading: 'Course options',
        items: [
          {
            _key: k(), label: 'Group Course', price: '£225', period: 'per couple · face to face',
            features: ['4 weekly group sessions (2.5hrs each)', 'KGHypnobirthing full programme', 'Relaxation audio downloads', 'Comprehensive course workbook', 'Supportive WhatsApp group', 'Post-birth debrief session', 'Online: £200'],
            ctaLabel: 'Book Now', ctaHref: cal, highlighted: false,
          },
          {
            _key: k(), label: 'Private 121 Course', badge: 'Most popular', price: '£345', period: 'per couple · face to face',
            features: ['10 hour fully interactive, fully evidence based birth preparation course', 'Flexible scheduling at your home or online', 'Full KGHypnobirthing programme', 'Personalised birth plan support', 'Relaxation audio downloads', 'Unlimited WhatsApp support', 'Post-birth debrief session', 'Online: £325'],
            ctaLabel: 'Book Now', ctaHref: cal, highlighted: true,
          },
          {
            _key: k(), label: 'Online Course', price: '£200', period: 'per couple · group online',
            features: ['4 sessions via video call', 'All the same content as in-person', 'UK-wide availability', 'Relaxation audio downloads', 'Comprehensive course workbook', 'Post-birth debrief session', '121 online: £325'],
            ctaLabel: 'Book Now', ctaHref: cal, highlighted: false,
          },
        ],
        footnote:
          '£50 deposit upon booking. Remainder of payment due before first session. Antenatal Package upgrade: you can also upgrade a Hypnobirthing package to include virtual doula support throughout pregnancy, following all antenatal appointments etc (not including the birth) as an Antenatal Package (£425).',
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: "Curious what's covered each week?",
        subheading: 'Read the full session-by-session breakdown of the hypnobirthing course.',
        ctaLabel: 'View Session Outlines', ctaHref: '/session-outlines', theme: 'pink',
      },
      {
        _type: 'faqSection', _key: k(),
        eyebrow: 'Common questions',
        heading: 'Hypnobirthing FAQs',
        items: [
          { _key: k(), question: 'When should I start hypnobirthing?', answer: ptParas(['The ideal time to start is from 20-30 weeks gestation, as this gives you enough time to practise the techniques before your birth. However, it’s never too late — even starting at 36+ weeks will give you valuable tools. Some people do the course in early pregnancy and then revisit the materials closer to their due date.']) },
          { _key: k(), question: 'Does hypnobirthing work for caesarean births?', answer: ptParas(['Absolutely. Hypnobirthing techniques are incredibly effective for caesarean births — both planned and unplanned. The breathing, relaxation and mindset tools help you feel calm and in control in the theatre environment. Many of my clients specifically choose hypnobirthing because they’re planning or preparing for a caesarean.']) },
          { _key: k(), question: 'Can I still have an epidural if I do hypnobirthing?', answer: ptParas(['Yes, 100%. Hypnobirthing is about giving you tools and knowledge — not prescribing a particular type of birth. If you choose an epidural, that is absolutely your right and your choice. Hypnobirthing actually helps you make more informed decisions about pain relief because you fully understand your options.']) },
          { _key: k(), question: 'Does my birth partner need to come?', answer: ptParas(['It’s highly recommended, but not essential. Birth partners play a really important role in hypnobirthing — they learn practical techniques to support you during labour and understand how to create the right environment. If your birth partner can’t make some sessions, I can record them or provide notes. Single parents are also very welcome.']) },
          { _key: k(), question: "I'm a first-time parent — is hypnobirthing right for me?", answer: ptParas(['Hypnobirthing is wonderful for first-time parents because it gives you a thorough, evidence-based education alongside powerful relaxation tools. You’ll understand exactly how birth works, what to expect at each stage, and how to work with your body rather than against it. Many of my clients say they wished they’d known this for a previous birth!']) },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to feel genuinely excited about birth?',
        subheading: 'Book a free consultation to find the right hypnobirthing course for you.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  yoga: () => ({
    title: 'Prenatal & Postnatal Yoga',
    metaTitle: 'Prenatal & Postnatal Yoga',
    metaDescription:
      'Prenatal, postnatal and parent & baby yoga classes in NW Leicestershire. Nourish your body, calm your mind and prepare for birth.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Move. Breathe. Connect.',
        heading: 'Prenatal & Postnatal Yoga',
        subheading:
          'Prenatal/Postnatal and Parent and Baby Yoga Classes in NW Leicestershire. Nourish your body, calm your mind and prepare for birth.',
        ctaLabel: 'Book Your Place', ctaHref: cal,
        image: img('yoga-class.jpg', 'Prenatal yoga class'),
      },
      {
        _type: 'twoColumnSection', _key: k(),
        heading: 'birth-hood yoga',
        body: [
          ...ptParas([
            'Pregnancy yoga has many benefits, both physical and emotional, these include providing a safe space to relaxation and connection to your baby, meeting other new mums to be, help manage anxiety, improved sleep, improved mobility, stamina and strength, plus so much more!',
            'Each session will include Pregnancy Yoga activities suitable for both second and third trimester (with adaptations to suit most contraindications in pregnancy).',
            'The class is 60 minutes which includes Yoga, Relaxation and weekly birth preparation themes (please see below).',
            'The course cost varies depending on the length of the course, but includes use of all equipment (though feel free to bring own mat etc).',
            'If you wish to join as a one off session (£10 PAYG), please contact me for space availability. Please drop me a message if you want to chat anything through.',
          ]),
          ptBlock('Weekly birth preparation themes', 'h3'),
          ...ptParas(['Breathing', 'Uterus and contractions', 'Releasing fears', 'Hypnobirthing', 'Practical labour tips', 'Birth positions', 'Postnatal expectations']),
        ],
        sidePanelTitle: 'Benefits of prenatal yoga',
        stats: [
          { _key: k(), value: '↓', label: 'Reduces anxiety and stress during pregnancy' },
          { _key: k(), value: '↑', label: 'Improves sleep quality and physical comfort' },
          { _key: k(), value: '♥', label: 'Strengthens the mind-body connection' },
          { _key: k(), value: '✿', label: 'Builds community with other expectant parents' },
        ],
        callout:
          '85hr Pregnancy/Postnatal Yoga teaching — Sally Parkes 2022. I’m trained in evidence-based approaches to prenatal and postnatal yoga, and I’ll safely support you at every stage.',
        imagePosition: 'right',
      },
      {
        _type: 'twoColumnSection', _key: k(),
        heading: 'Connect with your body and your baby',
        body: ptParas([
          'Each session will include Postnatal yoga, Baby Yoga and Parent and Baby Yoga activities, both allowing time to connect with your body and your baby.',
          'The class is 90 minutes which includes Yoga, Relaxation/Story time and Social time with refreshments, to chat all things postnatal and socialise with other parents!',
          'Course cost varies depending on the length of the course but includes use of all equipment (though feel free to bring own mat etc) and refreshments (please let me know of any allergies).',
          'You will also get yourselves a snazzy birth-hood Yoga Handbook to use outside of the sessions!',
          'If you wish to join as a one off session, please contact me for space availability.',
          'There will be plenty of age appropriate toys to help stimulate and distract your baby also! Please bring your own baby blankets.',
        ]),
        sidePanelTitle: 'When can I start?',
        callout:
          'Suitable for babies who are not yet mobile, and parents who are 6 weeks postpartum (vaginal birth) and 12 weeks postpartum for caesarean or instrumental birth / 3rd or 4th degree tears. Please drop me a message if you want to chat anything through.',
        imagePosition: 'right',
      },
      {
        _type: 'pricingSection', _key: k(),
        eyebrow: 'Classes & Pricing',
        heading: 'Choose your yoga experience',
        subheading: 'Course cost varies depending on the length of the course. Every class includes use of all equipment.',
        items: [
          { _key: k(), label: 'Private or online', price: 'POA', period: 'tailored to you', features: ['One-to-one sessions', 'Fully personalised practice', 'In-person or online', 'Flexible scheduling', 'Ideal for complex pregnancies', 'Partner welcome to join'], ctaLabel: 'Enquire', ctaHref: cal, highlighted: false },
          { _key: k(), label: 'Prenatal group classes', badge: 'Most popular', price: '£10', period: 'PAYG · drop-in welcome', features: ['Weekly group classes', 'NW Leicestershire venue', 'All trimesters welcome', 'No prior yoga experience needed', 'Mat and props provided', 'Community of expectant parents'], ctaLabel: 'Book Class', ctaHref: cal, highlighted: true },
          { _key: k(), label: 'Postnatal group classes', price: '£10', period: 'PAYG · drop-in welcome', features: ['Suitable from 6 weeks postpartum', '12 weeks for C-section / instrumental', 'Restore core and pelvic floor', 'Gentle return to exercise', 'Supportive community space', 'NW Leicestershire venue'], ctaLabel: 'Book Class', ctaHref: cal, highlighted: false },
        ],
      },
      {
        _type: 'twoColumnSection', _key: k(),
        heading: 'Reconnect with your body after birth',
        body: ptParas([
          'This session aims to create a nurturing space to replenish energy, release stress, feel supported, restore the core and pelvic floor, improving strength, stamina and well-being.',
          'Postnatal Yoga is suitable for anyone who has given birth and needs to reconnect with their body, release and stretch muscles, rebalancing the pelvic and sacroiliac areas to gently get back into exercise.',
          'It takes approximately 12–24 months for your body to return to its pre-pregnancy state, and our hormonal change can affect the strength and mobility of our joints so it’s really important to progressively adapt as opposed to carry on as if nothing has happened.',
        ]),
        sidePanelTitle: 'Benefits of postnatal yoga',
        stats: [
          { _key: k(), value: '↑', label: 'Restores core strength and pelvic floor' },
          { _key: k(), value: '↓', label: 'Releases stress and replenishes energy' },
          { _key: k(), value: '♥', label: 'Rebalances pelvic and sacroiliac areas' },
          { _key: k(), value: '✿', label: 'Improves strength, stamina and well-being' },
        ],
        callout:
          'This class is suitable from 6 weeks postpartum (vaginal birth) and 12 weeks postpartum for caesarean or instrumental birth / 3rd or 4th degree tears. £10 per class — drop-in welcome.',
        imagePosition: 'right',
      },
      {
        _type: 'faqSection', _key: k(),
        eyebrow: 'Common questions',
        heading: 'Yoga FAQs',
        items: [
          { _key: k(), question: 'Is prenatal yoga safe throughout pregnancy?', answer: ptParas(['Yes — my classes are specifically designed for pregnancy and are safe from the first trimester through to birth. The classes are adapted for each trimester, with modifications offered at every stage. As always, if you have any concerns or complications, please check with your midwife or doctor before joining.']) },
          { _key: k(), question: 'Do I need prior yoga experience?', answer: ptParas(['Absolutely not. The classes are suitable for complete beginners and experienced yogis alike. Everything is taught from scratch with clear instructions, and there is no expectation of any prior yoga knowledge or flexibility. If you’ve never done yoga in your life, you are very welcome.']) },
          { _key: k(), question: 'When should I start prenatal yoga?', answer: ptParas(['You can start prenatal yoga at any point in your pregnancy, though many people find the second trimester (from around 14 weeks) the most comfortable time to begin. However, if you are already a regular yoga practitioner, you can continue adapted classes from the very beginning.']) },
          { _key: k(), question: 'What do I need to bring to class?', answer: ptParas(['Wear comfortable, stretchy clothing. Yoga mats are provided, but you are welcome to bring your own if you prefer. A water bottle is recommended. Some people also like to bring a small cushion or pillow for relaxation at the end of class.']) },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to move, breathe and connect?',
        subheading: 'Book your first prenatal or postnatal yoga class — all levels welcome.',
        ctaLabel: 'Book Your Place', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  doula: () => ({
    title: 'Doula Services',
    metaTitle: 'Doula Services',
    metaDescription:
      'Continuous, compassionate non-medical doula support before, during and after your birth. For every pregnancy, every birth, every person.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Professional doula support',
        heading: 'Doula Services',
        subheading:
          'Continuous, compassionate non-medical support before, during and after your birth. For every pregnancy, every birth, every person.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal,
        image: img('doula-support.png', 'Doula support'),
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'What is a doula?',
        heading: 'Your person in the room',
        body: ptParas([
          'A doula is a trained, non-medical birth professional who provides continuous physical, emotional and informational support to a birthing person before, during and after birth.',
          'Unlike midwives and doctors, a doula’s sole focus is you. They don’t have clinical responsibilities — they are there entirely in your service. Research consistently shows that having a doula present leads to better outcomes for both birthing people and babies.',
          'A doula never replaces your medical team — they complement them, helping you navigate the system and ensuring your voice is heard.',
        ]),
        sidePanelTitle: 'The evidence',
        stats: [
          { _key: k(), value: '25%', label: 'Fewer c-sections with continuous doula support (Cochrane Review)' },
          { _key: k(), value: '31%', label: 'Less pain relief requested when a doula is present' },
          { _key: k(), value: '34%', label: 'Less likely to have a negative birth experience' },
          { _key: k(), value: '5★', label: 'Rated by every client I have supported' },
        ],
        imagePosition: 'right',
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'Services',
        heading: "Choose the support that's right for you",
        items: [
          { _key: k(), number: 'In-person', title: 'Birth Doula', description: 'Continuous in-person support from early labour through to after your baby arrives. Pre-birth antenatal meetings, birth plan help, and a postnatal debrief. 2 antenatal meetings · continuous labour support · birth plan guidance · postnatal debrief · 24/7 on-call from 39 weeks.', href: '/birth-doula', linkLabel: 'Learn more' },
          { _key: k(), number: 'Online', title: 'Virtual Doula', description: 'Full doula support delivered entirely online — perfect for those outside NW Leicestershire, expats, or anyone who prefers remote sessions. Online antenatal sessions · video check-ins · phone/text support during labour · online postnatal debrief · UK-wide & international.', href: '/virtual-doula', linkLabel: 'Learn more' },
          { _key: k(), number: 'After', title: 'Postnatal Support', description: 'Support in the fourth trimester — the weeks after birth when you’re adjusting to parenthood. Birth debrief & story-listening · feeding support · emotional wellbeing check-ins · signposting · available in-person or online.', href: cal, linkLabel: 'Book Consultation' },
        ],
      },
      {
        _type: 'testimonialsSection', _key: k(),
        items: [
          { _key: k(), quote: 'Just incredible! Leanne was amazing from the moment we booked her. She protected my birth space perfectly and advocated for me many times.', attribution: 'Bea, Leicestershire', rating: 5 },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to have your person in the room?',
        subheading: 'Book a free 30-minute consultation to discuss the right doula support for your birth.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  'birth-doula': () => ({
    title: 'Birth Doula',
    metaTitle: 'Birth Doula',
    metaDescription:
      'Continuous, compassionate non-medical birth doula support before, during and after your birth in NW Leicestershire and the Midlands.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Professional birth support',
        heading: 'Birth Doula Support',
        subheading: 'Continuous, compassionate non-medical support before, during and after your birth.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal,
        image: img('doula-support.png', 'Doula support'),
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: "I'm taking bookings for births due December 2026 onwards",
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'light',
      },
      {
        _type: 'testimonialsSection', _key: k(),
        items: [
          { _key: k(), quote: "My advice to anyone thinking to book Leanne would be to not hesitate as she's definitely 'worth every penny' as one of the home birth midwives rightly said! She knows her job inside out and ensures she creates a loving and strong relationship with all her clients. I'm so glad I found her. My Husband and I could not have been happier with what we achieved. Thank you!", attribution: 'Birth-hood client', rating: 5 },
        ],
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'What does a birth doula do?',
        heading: 'Your advocate, your support, your person',
        body: ptParas([
          'A birth doula provides continuous, compassionate non-medical support throughout your entire birth journey — from pregnancy all the way through to your postnatal recovery. Unlike your midwife or doctor, a doula has no clinical responsibilities; their entire focus is on you and your wellbeing.',
          'I build a genuine relationship with you and your partner before birth so that when the day arrives, you have someone who truly knows you, your wishes and your fears. Someone who will hold your hand, remind you of your strength, and make sure your voice is heard.',
          'Research from the Cochrane Review — the gold standard in medical evidence — consistently shows that continuous support during labour leads to significantly better outcomes for birthing people and babies.',
        ]),
        sidePanelTitle: 'The evidence',
        stats: [
          { _key: k(), value: '25%', label: 'Fewer caesarean sections (Cochrane Review)' },
          { _key: k(), value: '31%', label: 'Less pain relief requested with doula support' },
          { _key: k(), value: '34%', label: 'Less likely to have a negative birth experience' },
          { _key: k(), value: "100's", label: 'of families I’ve supported' },
        ],
        imagePosition: 'right',
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: "What's included",
        heading: 'Full support before, during & after',
        items: [
          { _key: k(), number: 'Before', title: 'Antenatal support', description: 'Personalised birth planning sessions · evidence-based information about all your options · preparation for all possible birth scenarios · partner preparation & coaching · hypnobirthing booklet & relaxation techniques · access to the birth-hood online Hub · on-call support from 39 weeks.' },
          { _key: k(), number: 'During', title: 'Birth support', description: 'Continuous in-person presence throughout labour · physical comfort techniques (massage, positions, breathing) · emotional support & reassurance · gentle advocacy — ensuring your wishes are heard · supporting your birth partner to support you · free birth pool hire (Ultimate package) · free TENS machine hire (Ultimate package).' },
          { _key: k(), number: 'After', title: 'Postnatal support', description: 'Postnatal debrief & recovery visit · postpartum recovery tips & guidance · bespoke postpartum care kit (Ultimate package) · space to process your birth experience · signposting to specialist support if needed · infant feeding guidance and resources · ongoing phone & email support.' },
        ],
      },
      {
        _type: 'pricingSection', _key: k(),
        eyebrow: 'Investment',
        heading: 'Choose your package',
        subheading: "Every package includes a free initial consultation so we can make sure we're the right fit before you commit.",
        items: [
          { _key: k(), label: 'Essential Support', price: '£995', period: 'streamlined but essential', features: ['1 prenatal session (2 hours)', 'On-call from 39 weeks', 'Full continuous birth support', '1 hour post-birth support', '1 postnatal visit (90 minutes)', 'Phone & email support for 2 weeks postpartum', 'Optional birth pool hire (additional cost)'], ctaLabel: 'Book Now', ctaHref: cal, highlighted: false },
          { _key: k(), label: 'Ultimate Support', badge: 'Most popular', price: '£2,000', period: 'the most comprehensive package!', features: ['Best for first-time parents wanting in-depth preparation', 'birth-hood doula gift bag', 'Free birth pool hire', 'Free TENS machine hire', 'Personalised birth planning', 'Postpartum recovery tips & bespoke care kit', 'Hypnobirthing booklet', 'Digital access to the online Hub', 'Min. 2 antenatal & 1 postnatal — sessions can be personalised'], ctaLabel: 'Book Now', ctaHref: cal, highlighted: true },
          { _key: k(), label: 'Balanced Support', price: '£1,495', period: 'solid support, perfectly balanced', features: ['2 prenatal sessions (2–3 hours each)', 'Birth planning, comfort & emotional readiness', 'On-call from 39 weeks', 'Full continuous birth attendance', 'Postnatal debrief visit', 'Ongoing email & phone support'], ctaLabel: 'Book Now', ctaHref: cal, highlighted: false },
        ],
        footnote: 'Payment plans available for all doula services, just let me know!',
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to have your person in the room?',
        subheading: 'Book a free consultation to discuss birth doula support for your birth.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  'postnatal-doula': () => ({
    title: 'Postnatal Doula',
    metaTitle: 'Postnatal Doula',
    metaDescription:
      'Practical and emotional postnatal doula support in the fourth trimester — flexible hours in your own home across NW Leicestershire.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'The fourth trimester',
        heading: 'Postnatal Doula',
        subheading: "Support in the fourth trimester — the weeks after birth when you're adjusting to parenthood.",
        ctaLabel: 'Book Free Consultation', ctaHref: cal,
        image: img('doula-support.png', 'Postnatal doula support'),
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'What is a postnatal doula?',
        heading: 'Caring for you after birth',
        body: ptParas([
          'The weeks after birth can be overwhelming, exhausting and emotional — even when things go well. A postnatal doula provides practical and emotional support in your own home, helping you settle into your new role with confidence.',
          'I’m there to take care of you, so you can take care of your baby. Whether that means holding baby while you sleep, helping with older siblings, making a meal or simply being a calm, experienced presence to talk to — I adapt to whatever you need most.',
          'Postnatal doula support is completely flexible. Hours can be spread across days, weeks or months — structured around your family, your recovery and your life.',
        ]),
        sidePanelTitle: 'Good to know',
        stats: [
          { _key: k(), value: 'Free', label: 'Initial consultation — no obligation' },
          { _key: k(), value: 'Flex', label: 'Hours spread across days, weeks or months' },
          { _key: k(), value: '2hr', label: 'Minimum visit length — no rushed drop-ins' },
          { _key: k(), value: '£40', label: 'Per hour for additional visits (minimum 2 hours)' },
        ],
        imagePosition: 'right',
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'What postnatal doula support includes',
        heading: 'Practical & emotional support',
        items: [
          { _key: k(), title: 'Practical help', description: 'Helping around the house · looking after baby while you nap · helping with older siblings · making meals and light cooking · helping with dinner time or the school run · light household tasks.' },
          { _key: k(), title: 'Emotional & feeding support', description: 'Supporting your feeding choices (breast or bottle) · listening to your birth experience · emotional support and reassurance · guidance on newborn care · signposting to specialist services · a calm, experienced presence throughout.' },
        ],
      },
      {
        _type: 'pricingSection', _key: k(),
        heading: 'Choose your support package',
        items: [
          { _key: k(), label: 'Starter package', price: '£250', period: '10 hours of support', features: ['Free initial consultation', '1 hour Zoom postpartum planning session', '10 hours postnatal support', 'Minimum 2 hour visits', 'Flexible scheduling', 'Use across days, weeks or months'], ctaLabel: 'Book Consultation', ctaHref: cal, highlighted: false },
          { _key: k(), label: 'Full package', badge: 'Best value', price: '£400', period: '20 hours of support', features: ['Free initial consultation', '1 hour Zoom postpartum planning session', '20 hours postnatal support', 'Minimum 2 hour visits', 'Flexible scheduling', 'Use across days, weeks or months'], ctaLabel: 'Book Consultation', ctaHref: cal, highlighted: true },
          { _key: k(), label: 'Additional visits', price: '£40', period: 'per hour · minimum 2 hours', features: ['Top up your package anytime', 'Same flexible approach', 'Minimum 2 hours per visit', 'Mileage: 45p/mile over 10 miles', 'Billed at end of each visit', 'No long-term commitment'], ctaLabel: 'Enquire', ctaHref: cal, highlighted: false },
        ],
        footnote: 'Please note: Additional mileage is charged at 45p/mile for distances over 10 miles from my base. All visits are a minimum of 2 hours. Hours can be distributed in any way that suits your family.',
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready for support in the fourth trimester?',
        subheading: 'Book a free consultation to discuss postnatal doula support tailored to your family.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  'virtual-doula': () => ({
    title: 'Virtual Doula',
    metaTitle: 'Virtual Doula',
    metaDescription:
      'Full doula support online — antenatal preparation, real-time labour support and postnatal care, UK-wide and international.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Support wherever you are',
        heading: 'Virtual Doula',
        subheading: 'Full doula support online — from antenatal preparation through to postnatal care, without leaving your home.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal,
        image: img('leanne-portrait.jpg', 'Leanne'),
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'How it works',
        heading: 'All the support, none of the distance',
        body: ptParas([
          'A virtual doula offers the same compassionate, evidence-based support as in-person doula care — delivered entirely online. From your first antenatal session to your postnatal debrief, I’m with you every step of the way via video call, phone and message.',
          'During labour, I’m available by phone and video call to provide guidance, encouragement and calm support — coaching you and your birth partner in real time through breathing techniques, comfort measures and decision-making.',
          'Virtual doula support is ideal for those who prefer the convenience of online sessions, those who aren’t local to Leicester, or those looking for more affordable support without compromising on quality.',
        ]),
        sidePanelTitle: 'At a glance',
        stats: [
          { _key: k(), value: 'UK-wide', label: 'Available to families anywhere in the UK and internationally' },
          { _key: k(), value: '24/7', label: 'On-call support from 39 weeks via phone and message' },
          { _key: k(), value: '5★', label: 'Rated by every virtual doula client' },
          { _key: k(), value: '£600', label: 'Virtual doula package — full support from pregnancy to postnatal' },
        ],
        imagePosition: 'right',
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: "What's included",
        heading: 'Full online doula support',
        items: [
          { _key: k(), title: 'During pregnancy', description: '2 online antenatal sessions (video call) · comprehensive birth plan guidance · evidence-based information about your choices · partner coaching for birth support · preparation for all birth scenarios · unlimited WhatsApp support throughout pregnancy.' },
          { _key: k(), title: 'During & after birth', description: 'Phone/video support throughout early labour · real-time coaching via call during active labour · text support available throughout · post-birth check-in call · online postnatal debrief session · signposting to local and specialist services.' },
        ],
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'Is virtual doula right for me?',
        heading: 'Ideal for anyone who…',
        items: [
          { _key: k(), title: 'Lives outside NW Leicestershire', description: 'Get full doula support wherever you are in the UK or internationally.' },
          { _key: k(), title: 'Prefers the comfort of home', description: 'All sessions happen in your own space — comfortable, convenient, no travel.' },
          { _key: k(), title: 'Is looking for affordable support', description: 'Virtual packages are more accessible whilst maintaining the same quality of care.' },
          { _key: k(), title: 'Is an expat or living abroad', description: 'Get full doula support wherever you are in the world — online sessions work across time zones.' },
        ],
      },
      {
        _type: 'richTextSection', _key: k(),
        eyebrow: 'Investment',
        heading: 'Virtual Doula Package: £600',
        body: ptParas([
          'This service is similar to a birth package, but will be virtual and not face to face, think about having a doula in your pocket!',
          'It will include 2x virtual antenatal sessions, virtual doula contact throughout pregnancy (9-5 until on call) and during the birth plus a Postnatal debrief and virtual support for 4 weeks post birth.',
          'This includes full 121 text/call/email support (24/7 from 39 weeks).',
        ]),
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to get started online?',
        subheading: "Book your free virtual consultation and let's talk about how I can support you from wherever you are.",
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  'doula-feedback': () => ({
    title: 'Doula Feedback',
    metaTitle: 'Doula Feedback',
    metaDescription:
      'Share your birth-hood doula experience. Your words help other families find the birth support they need.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Share your experience',
        heading: 'Your Feedback',
        subheading: 'Thank you for allowing me to be part of your birth journey. Your words mean everything — and help other families find the support they need.',
        ctaLabel: 'Book your FREE Consultation here!', ctaHref: cal,
        image: img('leanne-portrait.jpg', 'Leanne'),
      },
      {
        _type: 'richTextSection', _key: k(),
        align: 'center',
        body: [ptBlock('Being a doula is an honour and a privilege. Supporting you as you journey through pregnancy, birth and postpartum is something I do not take lightly and to receive the feedback I do is just beyond words.', 'blockquote')],
      },
      {
        _type: 'testimonialsSection', _key: k(),
        eyebrow: 'Client testimonials',
        items: [
          { _key: k(), quote: "From my first contact with Leanne we just clicked, she's proudly inclusive and has experience in a wide range of pregnancies and birth situations. She supported me through my concern about fibroids, and gave me some brilliant yoga positions to try when my SPD started. She kept in contact through my pregnancy and made me feel like I really had amazing support whenever I needed it. The prenatal sessions were so brilliant to run through my birth plans of a physiological homebirth. Leanne supported me every step of the way and made me feel so confident and excited for my homebirth. She also helped with some latch issues and supported our undisturbed golden hour. It felt so natural having her there and I didn't want her to leave! Post natally, I felt really looked after by Leanne both in person & virtually. I can't recommend Leanne highly enough, she's a pro at end-to-end care and if you're reading this, book her!!!", attribution: 'Beka & Matt · First baby · Homebirth', rating: 5 },
          { _key: k(), quote: "Just incredible! Leanne was amazing from the moment we booked her. She was always on hand for any questions and me and my husband loved our antenatal sessions with her and getting to know her, gaining knowledge. Postnatally she was excellent, always a message away and for our sessions. However, I couldn't have done the birth without her. She protected my birth space perfectly and advocated for me many times. She was especially helpful when things didn't quite go to plan.", attribution: 'Bea & Duane · Second baby · Homebirth', rating: 5 },
        ],
      },
      {
        _type: 'richTextSection', _key: k(),
        heading: 'Thank you',
        body: ptParas([
          'It has been an absolute honour to support you. Every birth is unique, and I am so grateful that you trusted me to be part of yours. I hope you are settling in beautifully with your new baby.',
          'Your feedback is incredibly valuable — not just to me personally, but to other families who are looking for birth support and trying to make their decision. An honest review from a real client makes all the difference.',
        ]),
      },
      {
        _type: 'linkListSection', _key: k(),
        heading: 'Leave a review',
        intro: 'An honest review from a real client makes all the difference to families looking for support.',
        links: [
          { _key: k(), label: 'Leave Google Review', url: 'https://g.page/r/birthhood/review', description: 'Leave a Google review to help other local families find birth support.', featured: true },
          { _key: k(), label: 'Leave Facebook Review', url: 'https://www.facebook.com/Birthhooduk', description: 'Leave a review on the birth-hood Facebook page to help other families find support.', featured: false },
          { _key: k(), label: 'Find us on Instagram', url: 'https://instagram.com/birthhooduk', description: 'If you’re happy to share your experience on social media, please tag @birthhooduk — it means so much.', featured: false },
        ],
      },
      {
        _type: 'richTextSection', _key: k(),
        align: 'center',
        body: [ptBlock('Thank you for trusting me to be part of one of the most significant moments of your life. It is a privilege I never take for granted. — Leanne', 'blockquote')],
      },
    ],
  }),

  'birth-trauma': () => ({
    title: 'Birth Trauma Support',
    metaTitle: 'Birth Trauma Support',
    metaDescription:
      'Trauma-informed support for difficult or traumatic birth experiences, including the 3 Step Rewind process. Healing is possible.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Healing is possible.',
        heading: 'Birth Trauma Support',
        subheading: "Whether your birth was frightening, overwhelming or just not what you hoped — your feelings are valid, and you don't have to carry them alone.",
        ctaLabel: 'Book a Conversation', ctaHref: cal,
        image: img('leanne-speaking.jpg', 'Leanne speaking'),
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'Understanding birth trauma',
        heading: 'What is birth trauma?',
        body: [
          ...ptParas([
            'Birth trauma occurs when a birth experience leaves you feeling frightened, out of control, unheard or overwhelmed — regardless of whether the birth was medically "straightforward". Trauma is defined by your experience, not by what happened on a medical chart.',
            'Birth trauma is more common than many people realise. Research suggests that around 1 in 3 women describe their birth as traumatic, and around 4–6% go on to develop post-traumatic stress disorder (PTSD).',
            'You do not need to have had a complicated birth to be affected. A birth that others describe as "fine" can still be deeply traumatic for you — and your experience deserves to be acknowledged.',
          ]),
          ptBlock('What are feelings of traumatic birth?', 'h3'),
          ...ptParas([
            'Feelings of traumatic birth may look like, but not limited to, hypervigilance, tearfulness, flashbacks, panic, changes to relationships, numbness surrounding the event and anger. Birth trauma can present in many different ways. You may recognise some of the following:',
            'Flashbacks or intrusive memories of the birth',
            'Nightmares or disturbed sleep',
            'Anxiety, panic or hypervigilance',
            'Feeling disconnected from your baby',
            'Difficulty talking about the birth, or avoiding reminders of it',
            'Feeling angry, guilty or like you failed',
            'Fear of future pregnancy or birth',
            'Relationship difficulties with your partner or care team',
            'If any of these resonate, please know that help is available — and that healing is absolutely possible.',
          ]),
          ptBlock('Why does it happen?', 'h3'),
          ptBlock('The fight or flight response is one of our most primitive survival systems and is designed to allow us to act in the face of life threatening danger. The highly aroused emotions of fear experienced during the event are ‘frozen’ in the brain.'),
        ],
        sidePanelTitle: 'It’s never too late',
        callout:
          'You may be processing a birth that happened recently — or one that was years ago. Birth trauma does not have a time limit. Whether your baby is six weeks or six years old, your experience is valid and deserves to be heard. Note: I am not a therapist or mental health professional. My support is trauma-informed and compassionate, but where appropriate I will always refer you to the right specialist support.',
        imagePosition: 'right',
      },
      {
        _type: 'sessionOutlineSection', _key: k(),
        heading: 'The 3 Step Rewind',
        intro: "If this is something you'd like to explore — please contact me for a complimentary consultation. Here we can discuss if this is the right option for you, or if I need to signpost you elsewhere.",
        sessions: [
          { _key: k(), number: 'Session 1', title: 'Understanding & Relaxation', description: 'I will ask you some questions about the event and gain an understanding of how it is affecting your life now. We will explore your experience through telling it, and establish how it is affecting your life now. Together we will build a picture of what you would like for the future and what you would like to experience with your symptoms lifted. I will then take you through a guided relaxation and provide you with a recording of this to listen to regularly before session 2.', topics: ['1–2 hours'] },
          { _key: k(), number: 'Session 2', title: 'The Rewind Process', description: 'We will do the rewind process. I will ease you into a state of relaxation before guiding you through remembering the event in a specific way. You will be able to remain calm and feeling completely safe and secure throughout.', topics: ['1 hour'] },
          { _key: k(), number: 'Session 3', title: 'Reflection & Moving Forward', description: 'I will check in with how you have been since session 2 and giving you the opportunity to describe any changes that have taken place. We will then focus on visualising the future and building your confidence in moving forward.', topics: ['Up to 1 hour'] },
        ],
      },
      {
        _type: 'linkListSection', _key: k(),
        heading: 'You are not alone',
        intro: 'Helpful resources and specialist support.',
        links: [
          { _key: k(), label: 'Birth Trauma Association', url: 'https://www.birthtraumaassociation.org.uk', description: 'The leading UK charity supporting people affected by birth trauma. Free resources, peer support and professional directory.', featured: false },
          { _key: k(), label: 'Make Birth Better', url: 'https://www.makebirthbetter.org', description: 'A collaborative network of professionals working to support those affected by traumatic birth.', featured: false },
          { _key: k(), label: 'PANDAS Foundation', url: 'https://pandasfoundation.org.uk', description: 'Perinatal mental health support for those experiencing depression, anxiety and PTSD during and after pregnancy.', featured: false },
        ],
      },
      {
        _type: 'richTextSection', _key: k(),
        body: [ptBlock('If you are in crisis, please contact your GP, midwife, health visitor, or call the Samaritans on 116 123 (free, 24/7).')],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to start healing?',
        subheading: 'Book a gentle, no-obligation conversation with me to talk about your experience and how I can support you.',
        ctaLabel: 'Book a Conversation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  'meet-leanne': () => ({
    title: 'Meet Leanne',
    metaTitle: 'Meet Leanne',
    metaDescription:
      'Meet Leanne (DipHb) — hypnobirthing teacher, birth doula, pregnancy & postnatal yoga teacher and 3 Step Rewind practitioner in NW Leicestershire.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Your guide',
        heading: 'Meet Leanne',
        subheading: "I'm Leanne (DipHb) — a mum of two Hypnobirth babies and a badass birth nerd! Hypnobirthing teacher, birth doula, Pregnancy & Postnatal yoga teacher, and 3 Step Rewind practitioner, proudly based in NW Leicestershire.",
        image: img('leanne-portrait.jpg', 'Leanne'),
      },
      {
        _type: 'splitSection', _key: k(),
        eyebrow: 'My story',
        heading: "Hi, I'm your doula!",
        body: ptParas([
          "I'm Leanne (DipHb), I am a mum of two Hypnobirth babies and a badass birth nerd! I am a proud no-nonsense hypnobirthing teacher, doula, Pregnancy/Postnatal yoga teacher and a 3 Step Rewind practitioner.",
          'Born and raised in Leicestershire, I now reside in NW Leicestershire with my 2 daughters, my dogs Ron and Delphi and my cat Albus!',
          'My core values are that everyone is entitled to person centred care, immeasurable support and education that means they can feel in control throughout their perinatal experiences.',
        ]),
        image: img('leanne-portrait.jpg', 'Leanne — birth-hood founder and birth educator'),
        imageSide: 'left',
      },
      {
        _type: 'richTextSection', _key: k(),
        heading: 'Why I chose Hypnobirthing?',
        body: ptParas([
          "I first became interested in hypnobirthing when I started to research birth stories when I was expecting my first baby and found how positive it could be, much different to the scarefest I'd been treated to before this from everyone around me. I found a course, which I left feeling extremely informed, calm and confident about my birth. I found my passion, something I wanted others to feel, the 'I CAN DO THIS' moment.",
          'I am a HUGE advocate for Hypnobirthing and want to help enable parents to have the birth they want, being aware of their choices through delivering a full antenatal programme.',
          "Following working with 100's of families, I was regularly approached to attend births, which was something I'd always dreamt of. This led me to following my dreams to become a doula and now I absolutely adore what I do every day!",
          'I am so proud to be rated as your 5 STAR Doula — by welcoming me as your Doula, I am a part of your birth team, to be on your side and by your side.',
        ]),
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'Qualifications & training',
        heading: 'Qualifications & training',
        items: [
          { _key: k(), icon: '✦', title: 'Hypnobirthing — KGHypnobirthing 2019 DipHb', description: 'The Birth Uprising conversion 2020.' },
          { _key: k(), icon: '✦', title: 'Doula — Badass Birth 2021', description: 'Doula Enhancement — TBU Academy 2023.' },
          { _key: k(), icon: '✦', title: '3 Step Rewind (Birth Trauma) — Ruth Olayinka 2021', description: 'Trauma-informed support training.' },
          { _key: k(), icon: '✦', title: 'LGBT+ Competency — The Queer Birth Club (AJ Silver) 2021', description: 'Advocacy training — Illy Morrison 2021.' },
          { _key: k(), icon: '✦', title: 'Birth Biomechanics — Molly O’Brien 2022', description: '85hr Pregnancy/Postnatal Yoga teaching — Sally Parkes 2022.' },
          { _key: k(), icon: '✦', title: 'Currently completing', description: 'Baby Massage, Baby Reflexology & Toddler Yoga.' },
        ],
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'Why choose me?',
        heading: 'What you get with me',
        items: [
          { _key: k(), number: '01', title: 'A fully unadulterated antenatal course', description: 'A fully unadulterated and interactive hypnobirthing antenatal course, from a birth nerd and advocate for empowered birth.' },
          { _key: k(), number: '02', title: 'Full 121 support', description: 'Full 121 support throughout the course, pregnancy and 4th trimester, always on the end of a text or call!' },
          { _key: k(), number: '03', title: 'Research and evidence based', description: 'Research and evidenced based knowledge specific to your needs and wishes.' },
          { _key: k(), number: '04', title: 'Non-judgemental support', description: "Non-judgemental support and a realistic approach that's tailored to you." },
          { _key: k(), number: '05', title: 'A fierce advocate', description: "A fierce advocate for you, if or when you need me to. You'll have me in your corner." },
          { _key: k(), number: '06', title: 'A huge support network', description: 'I am someone who has used the tools and techniques and has a huge support network of badass birth workers, so if there is something I don’t know, I sure will do soon enough!' },
          { _key: k(), number: '07', title: 'A collective of birth workers', description: "As a doula and someone who is part of a collective of birth workers, you won't get better support elsewhere." },
          { _key: k(), number: '08', title: 'Fully inclusive', description: 'I aim to be fully inclusive, and that means all births, all people!' },
          { _key: k(), number: '09', title: 'Accessible support', description: 'If you are struggling to access the course, due to finances, or are in a marginalised group, please contact me to see how I can support you!' },
          { _key: k(), number: '10', title: 'The birth you deserve', description: 'Birth is the one day in your life you will remember — you deserve to have the best experience possible and I truly believe that investing in my course will bring you SO much closer to the birth you deserve.' },
        ],
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'As featured in',
        heading: 'Media & appearances',
        items: [
          { _key: k(), title: 'BBC Radio Leicester', description: 'Featured discussing hypnobirthing techniques and the importance of birth preparation for expectant parents across the Midlands.' },
          { _key: k(), title: 'Local press', description: 'Regular contributor to local parenting publications and community events across Leicester and the wider Midlands region.' },
          { _key: k(), title: 'Community events', description: 'Speaker at pregnancy fairs, NCT events and maternity unit workshops — spreading the message about positive birth preparation.' },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to work together?',
        subheading: "Book a free 30-minute consultation and let's chat about how I can support you on your birth journey.",
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  masterclass: () => ({
    title: 'Birth Masterclass',
    metaTitle: 'Birth Masterclass',
    metaDescription:
      'A 2-hour deep dive into birth preparation — everything you need to approach your birth with confidence. £65 per couple.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'One session. Total transformation.',
        heading: 'Birth Masterclass',
        subheading: 'A 2-hour deep dive into birth preparation — everything you need to know to approach your birth with confidence.',
        ctaLabel: 'Book Your Place — £65', ctaHref: cal,
        image: img('leanne-speaking.jpg', 'Leanne speaking'),
      },
      {
        _type: 'richTextSection', _key: k(),
        eyebrow: 'What is it?',
        heading: 'Birth confidence in two hours',
        body: ptParas([
          'The birth-hood Birth Masterclass is a single, powerful 2-hour session that gives you a comprehensive overview of everything you need to know to feel confident and prepared for birth — without the commitment of a full four-session course.',
          "Whether you're short on time, looking for a powerful top-up to work you've already done, or simply want a taste of what hypnobirthing has to offer, the masterclass delivers real, life-changing knowledge in a single session.",
          'I deliver this in a small group format (maximum 8 couples) or as a private session — relaxed, interactive and full of practical tools you can use right away.',
        ]),
      },
      {
        _type: 'pricingSection', _key: k(),
        items: [
          { _key: k(), label: 'Birth Masterclass', price: '£65', period: 'per couple · 2 hours', features: ['2-hour group session', 'Maximum 8 couples', 'Comprehensive workbook included', 'Relaxation audio download', 'Q&A with me', 'Leicester venue or online'], ctaLabel: 'Book Your Place', ctaHref: cal, highlighted: true },
        ],
        footnote: 'Private sessions also available — enquire for pricing.',
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: "What's covered",
        heading: 'Everything you need in two hours',
        items: [
          { _key: k(), number: '01', title: 'Understanding birth', description: 'The physiology of birth, the fear-tension-pain cycle, and how your mindset shapes your experience. The foundational knowledge that changes everything.' },
          { _key: k(), number: '02', title: 'Your rights in the maternity system', description: 'What you can and cannot be told, the BRAIN framework for decision-making, and how to ensure your voice is heard at every stage.' },
          { _key: k(), number: '03', title: 'Writing a birth plan that gets read', description: 'How to write a birth plan that your midwife and care team will actually engage with — covering all your preferences and preparing for alternatives.' },
          { _key: k(), number: '04', title: "The birth partner's role", description: 'How birth partners can actively support during labour — including comfort measures, environmental management and gentle advocacy.' },
        ],
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'Is this right for me?',
        heading: 'Perfect for anyone who…',
        items: [
          { _key: k(), title: "Can't commit to a full course", description: 'Life is busy. The masterclass gives you the most important knowledge in a single powerful session — no four-week commitment needed.' },
          { _key: k(), title: 'Has done hypnobirthing before', description: 'A brilliant refresher for a second pregnancy, or a top-up for those who want to revisit and reinforce their knowledge.' },
          { _key: k(), title: 'Wants to focus on birth partners', description: 'Birth partners can attend the masterclass alone to understand their role and learn how to provide practical, active support.' },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Want more than the masterclass?',
        subheading: 'Explore the full four-session hypnobirthing course for a comprehensive birth education experience.',
        ctaLabel: 'Explore Full Course', ctaHref: '/hypnobirthing', theme: 'light',
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to transform your birth confidence?',
        subheading: 'Book your masterclass place today — just £65 per couple.',
        ctaLabel: 'Book Your Place — £65', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  'course-info': () => ({
    title: 'Course Info & Dates',
    metaTitle: 'Course Info & Dates',
    metaDescription:
      'Find your perfect hypnobirthing course date and everything you need to know before you book.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Hypnobirthing courses',
        heading: 'Course Info & Dates',
        subheading: 'Find your perfect course date and everything you need to know before you book.',
        ctaLabel: 'Book Your Place', ctaHref: cal,
        image: img('hypnobirthing-class.png', 'Hypnobirthing class'),
      },
      {
        _type: 'courseDatesSection', _key: k(),
        heading: 'Group course dates',
        intro: "Can't find a date that works? Private and online courses are available at a time to suit you — no fixed schedule, just 4 sessions whenever works best. Book a free consultation to discuss.",
        courses: [
          { _key: k(), name: 'Spring 2026 — dates TBC', dates: 'Sundays, 10am–12:30pm', format: 'NW Leicestershire · 4 sessions', availability: 'Registering interest', featured: false, ctaLabel: 'Register Interest', ctaHref: cal },
          { _key: k(), name: 'Summer 2026 — dates TBC', dates: 'Saturdays, 1pm–3:30pm', format: 'NW Leicestershire · 4 sessions', availability: 'Registering interest · Popular', featured: true, ctaLabel: 'Register Interest', ctaHref: cal },
          { _key: k(), name: 'Autumn 2026 — dates TBC', dates: 'Midweek evenings, 7pm–9:30pm', format: 'NW Leicestershire · 4 sessions', availability: 'Registering interest', featured: false, ctaLabel: 'Register Interest', ctaHref: cal },
        ],
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: "What's included",
        heading: 'Everything you need for birth preparation',
        items: [
          { _key: k(), title: 'KGHypnobirthing full programme', description: "The complete KGHypnobirthing course — the UK's leading hypnobirthing method, covering everything from the physiology of birth to deep relaxation techniques." },
          { _key: k(), title: 'Comprehensive workbook', description: 'A beautifully designed birth-hood workbook to accompany each session, full of notes, exercises and resources to keep.' },
          { _key: k(), title: 'Relaxation audio downloads', description: 'A curated collection of relaxation and visualisation audio tracks for you to practise throughout your pregnancy and use during birth.' },
          { _key: k(), title: 'Birth plan support', description: 'Dedicated time to create a birth plan that reflects your wishes and is written in a way that your care team will read and respect.' },
          { _key: k(), title: 'WhatsApp support group', description: 'Join the birth-hood community — a supportive group of like-minded parents going through the same journey, moderated by me.' },
          { _key: k(), title: 'Postnatal debrief', description: 'A dedicated session after your baby arrives to process your birth experience, celebrate your achievement and get any support you need.' },
        ],
      },
      {
        _type: 'pricingSection', _key: k(),
        eyebrow: 'More options',
        heading: 'Specialist courses',
        items: [
          { _key: k(), label: 'Caesarean Birth Preparation', price: 'From £145', period: '3 hour session · with Hypnobirthing', features: ['Are you planning an elective or having a scheduled caesarean?', 'Not sure what to expect? Want to make it as positive as possible?', 'Your 3 hour session will include all you need to prepare before, during and post surgery.'], ctaLabel: 'Book Now', ctaHref: cal, highlighted: false },
          { _key: k(), label: 'Hasty Hypnobirthing', price: 'From £145', period: '37 weeks plus', features: ['In a rush? 37 weeks plus?', 'Learn some basics, have a whistle stop tour and gain your tools for your awesome birth.', "We'll cover what hypnobirthing is, breathing, relaxation, birth positions and more!"], ctaLabel: 'Book Now', ctaHref: cal, highlighted: false },
        ],
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'How to book',
        heading: 'Booking information',
        body: [
          ptBlock('How to secure your place', 'h3'),
          ptBlock('Click the "Book Your Place" button to book a free 30-minute consultation. During this call, we’ll confirm your dates, discuss any questions you have and take the details for your booking.'),
          ptBlock('Payment', 'h3'),
          ptBlock('A £50 deposit is required upon booking to secure your place. The remainder is due before your first session. Payment plans are available — just let me know at the consultation.'),
          ptBlock('Location', 'h3'),
          ptBlock('Group courses are held at a NW Leicestershire venue (address confirmed on booking). Private courses can be held at your home, online, or at a mutually agreed location.'),
          ptBlock('What to bring', 'h3'),
          ptBlock("Just yourselves. Wear something comfortable. All materials are provided. If you'd like to bring a yoga mat or cushion for relaxation sessions, you're very welcome to."),
        ],
        sidePanelTitle: 'Next steps',
        callout: 'Book your place via the free consultation, then view the full session outlines to see exactly what each week covers.',
        imagePosition: 'right',
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to book your place?',
        subheading: "Start with a free 30-minute consultation — no pressure, just a friendly chat to see if we're the right fit.",
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  'session-outlines': () => ({
    title: 'Session Outlines',
    metaTitle: 'Session Outlines',
    metaDescription:
      'A detailed breakdown of everything covered in the four-session birth-hood hypnobirthing course.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Hypnobirthing course',
        heading: 'Session Outlines',
        subheading: 'A detailed breakdown of everything covered in the four-session hypnobirthing course.',
        ctaLabel: 'View Course Dates', ctaHref: '/course-info',
        image: img('hypnobirthing-class.png', 'Hypnobirthing class'),
      },
      {
        _type: 'sessionOutlineSection', _key: k(),
        heading: 'Course session outlines',
        intro: "The birth-hood hypnobirthing course follows the KGHypnobirthing curriculum — the UK's leading hypnobirthing method — delivered over four sessions of approximately 2.5 hours each. Each session builds on the last, creating a comprehensive foundation of knowledge, skills and confidence. Sessions are available as a group course, private course, or online course. All course types cover the same content.",
        sessions: [
          { _key: k(), number: '01', title: 'Understanding birth & the mind-body connection', description: 'We start at the very beginning — exploring the physiology of birth and understanding exactly how the mind and body work together. This session is often described as "the session that changes everything".', topics: ['Current mindset and why', 'Uterus', 'Science', 'Fear Tension Pain', 'Mind Body Connection', 'Positive mindset', 'Breathing techniques', 'Hypnosis', 'Anchoring', 'Visualisation', 'Affirmations', 'Mp3s'] },
          { _key: k(), number: '02', title: 'Breathing techniques & relaxation', description: 'This is the practical heart of hypnobirthing. You’ll learn and practise the breathing techniques that will carry you through every stage of labour — and that many people say felt like a superpower.', topics: ['Birth Plans', 'Hormones', 'The Performance', 'Positioning in Pregnancy and Birth', 'Birth Partners', 'Where to have your baby', 'Birthing environment', 'Pelvic Floor', 'Perineal Massage'] },
          { _key: k(), number: '03', title: 'Birth preferences & working with your care team', description: 'Knowledge is power. This session is all about understanding your rights, making informed decisions and creating a birth plan that will work in any situation — including the unexpected.', topics: ['Your Rights', 'Language and Birth Rights', 'Is Intervention Making Us Safer?', 'Risk', 'Our Own Stories', 'Chilled Out Breathing', 'BRAIN Tool', 'Decisions and Advocacy Tips', 'Distraction Techniques', 'Induction', 'Estimated Due Dates', "'Natural' Induction Method", 'Signs Your Body is Getting Ready', 'Early Labour'] },
          { _key: k(), number: '04', title: 'Birth partner tools & preparation for the unexpected', description: 'The final session brings everything together and ensures your birth partner feels fully equipped to support you. We also cover preparation for the unexpected — so that you feel confident no matter how your birth unfolds.', topics: ['Making Contact with a Midwife', 'The Journey', 'Arriving There / Them Getting to You', 'Active Labour', 'Slow Or Stopped Labour', 'Caesarean Birth', 'Assisted Birth', 'Pain Relief', 'Pushing Stage', 'Birth', '3rd Stage', 'Golden Hour', 'Vitamin K', 'The 4th Trimester'] },
        ],
        note: "A note on practice: Between each session you'll be given relaxation audio tracks and practice exercises. The more you practise the breathing and relaxation techniques, the more effective they will be during birth. Most people practise for around 15–20 minutes per day — it quickly becomes a lovely part of your pregnancy routine.",
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to start your hypnobirthing journey?',
        subheading: 'Book a free consultation to discuss course dates and find the right option for you.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  booking: () => ({
    title: 'Class Booking',
    metaTitle: 'Class Booking',
    metaDescription:
      'Book your place on a hypnobirthing course, prenatal yoga class or a free consultation — all in one place.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Secure your place',
        heading: 'Class Booking',
        subheading: 'Book your place on a hypnobirthing course, prenatal yoga class or a free consultation — all in one place.',
        ctaLabel: 'View All Availability', ctaHref: cal,
        image: img('hypnobirthing-class.png', 'Hypnobirthing class'),
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'What would you like to book?',
        heading: 'Choose your booking type',
        items: [
          { _key: k(), title: 'Hypnobirthing Course', description: 'Group or 1-1 hypnobirthing sessions — choose your format and book your preferred dates.', href: cal, linkLabel: 'Book Hypnobirthing' },
          { _key: k(), title: 'Prenatal Yoga', description: 'Drop-in class or block booking — choose your class, pick your date and secure your spot.', href: cal, linkLabel: 'Book Yoga Class' },
          { _key: k(), title: 'Free Consultation', description: 'Not sure which service is right for you? Book a free 30-minute consultation with me.', href: cal, linkLabel: 'Book Free Call' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'Before you book',
        heading: 'Good to know',
        body: ptParas([
          'All bookings are handled through Calendly — a simple, secure booking platform that lets you choose your preferred time slot and pay online.',
          "After booking you'll receive an automatic confirmation email with all the details you need. For in-person bookings, I'll send the venue address separately.",
          'Not sure which service is right for you? Book a free 30-minute consultation and I’ll help you figure out the best fit for your pregnancy, budget and goals.',
        ]),
        sidePanelTitle: 'Need help choosing?',
        callout:
          "If you're not sure where to start, a free consultation is always the best first step. There's no obligation, no pressure and no hard sell — just an honest conversation about what kind of support would work best for you.",
        imagePosition: 'right',
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to book your place?',
        subheading: 'Spaces fill up quickly — secure your spot on my next hypnobirthing course or yoga class.',
        ctaLabel: 'View All Availability', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  contact: () => ({
    title: 'Contact',
    metaTitle: 'Contact',
    metaDescription:
      "Get in touch with Leanne at birth-hood. Whether you have a question, want to make a booking or just want to say hello — she'd love to hear from you.",
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: "Let's talk",
        heading: 'Get in Touch',
        subheading: "For enquiries, please contact me directly via this page. I'll get back to you ASAP! I can't wait to help you prepare for your birth, knowing your rights, your options, and feeling like you did everything you could to prepare to start parenthood positively.",
        image: img('leanne-portrait.jpg', 'Leanne'),
      },
      {
        _type: 'linkListSection', _key: k(),
        heading: 'Ways to connect',
        intro: 'NW Leicestershire · Online UK-wide.',
        links: [
          { _key: k(), label: 'Email — leanne@birth-hood.co.uk', url: 'mailto:leanne@birth-hood.co.uk', description: 'Drop me an email and I’ll get back to you ASAP.', featured: false },
          { _key: k(), label: 'Phone — 07814 504865', url: 'tel:07814504865', description: 'Call or text me directly.', featured: false },
          { _key: k(), label: 'Instagram — @birthhooduk', url: 'https://www.instagram.com/birthhooduk', description: 'Follow along on Instagram.', featured: false },
          { _key: k(), label: 'Facebook — Birthhooduk', url: 'http://www.facebook.com/Birthhooduk', description: 'Find birth-hood on Facebook.', featured: false },
          { _key: k(), label: 'Book Free Consultation', url: cal, description: 'Skip the form and book a free consultation call straight into my diary.', featured: true },
        ],
      },
    ],
  }),

  faq: () => ({
    title: 'FAQ',
    metaTitle: 'FAQ',
    metaDescription:
      'Everything you need to know about hypnobirthing, doula support, yoga and working with Leanne at birth-hood.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Got questions?',
        heading: 'Frequently Asked Questions',
        subheading: 'Everything you need to know about hypnobirthing, doula support, yoga and working with me.',
        image: img('leanne-portrait.jpg', 'Leanne'),
      },
      {
        _type: 'faqSection', _key: k(), eyebrow: 'General', heading: 'General questions',
        items: [
          { _key: k(), question: 'What areas do you cover?', answer: ptParas(['I am based in NW Leicestershire (LE67 area) and serve Leicestershire, the Midlands and beyond for in-person services (hypnobirthing, yoga, birth doula). I also offer online services — hypnobirthing courses, virtual doula support and consultations — to clients anywhere in the UK and internationally.']) },
          { _key: k(), question: 'How do I book?', answer: ptParas(['The easiest way to get started is to book a free 30-minute consultation via Calendly. This is a no-obligation, friendly chat where we can discuss your needs, answer any questions and figure out the right support for you. You can book at calendly.com/birthhood.']) },
          { _key: k(), question: 'Do you work with all types of families?', answer: ptParas(['Absolutely. I work with all pregnancies, all birth choices and all types of families — including LGBTQ+ families, solo parents and those with complex pregnancies. Everyone is welcome and will receive the same warmth and care.']) },
          { _key: k(), question: "I'm expecting twins — can you still help?", answer: ptParas(['Yes. I have experience supporting twin pregnancies and can adapt all services accordingly. Twin pregnancies often have a different pathway through the maternity system, and my knowledge of birth choices and rights is particularly valuable in these situations.']) },
        ],
      },
      {
        _type: 'faqSection', _key: k(), eyebrow: 'Hypnobirthing', heading: 'Hypnobirthing questions',
        items: [
          { _key: k(), question: 'When should I start hypnobirthing?', answer: ptParas(['The ideal time to start is from 20–30 weeks gestation, as this gives you plenty of time to practise the techniques. However, it is never too late to start — even at 36+ weeks you will gain valuable knowledge and tools. Some people also choose to start early in pregnancy.']) },
          { _key: k(), question: 'Does hypnobirthing work for caesarean births?', answer: ptParas(['Yes, absolutely. Hypnobirthing is highly effective for planned and unplanned caesarean births. The breathing techniques, relaxation skills and positive mindset tools all translate directly to the theatre environment. Many of my clients specifically choose hypnobirthing in preparation for a caesarean.']) },
          { _key: k(), question: 'Can I still have an epidural if I do hypnobirthing?', answer: ptParas(['Yes, 100%. Hypnobirthing is not about prescribing a particular type of birth. You can use hypnobirthing alongside any pain relief, including an epidural. In fact, the techniques are useful for managing anxiety even if you plan to use all available pain relief — and the knowledge helps you make truly informed decisions.']) },
          { _key: k(), question: 'Does my birth partner need to attend?', answer: ptParas(["It's strongly recommended but not essential. Birth partners play an active role in hypnobirthing and learn specific techniques to support you. However, if your partner cannot attend some sessions, I can record sessions or provide detailed notes. Solo parents are absolutely welcome and I tailor the content accordingly."]) },
          { _key: k(), question: 'Is hypnobirthing evidence-based?', answer: ptParas(['Yes. The KGHypnobirthing method is grounded in evidence from birth physiology, psychology and neuroscience. Cochrane Review research consistently shows that continuous labour support, calm birthing environments and breathing techniques lead to measurably better outcomes for birthing people and babies.']) },
          { _key: k(), question: 'Is hypnobirthing suitable for first-time parents?', answer: ptParas(["It's perfect for first-time parents. Hypnobirthing gives you a thorough, evidence-based education in what to expect from birth — alongside the practical tools to manage it calmly. Many of my clients who come back for a second baby say they wish they'd had this for their first birth."]) },
          { _key: k(), question: 'How many couples are in a group course?', answer: ptParas(['I teach groups between 4–6 couples only, keeping classes small and personal. I also offer semi-private sessions — so if you and a friend want to book together, you both get £50 off using code MATESRATES.']) },
        ],
      },
      {
        _type: 'faqSection', _key: k(), eyebrow: 'Doula support', heading: 'Doula questions',
        items: [
          { _key: k(), question: 'What does a birth doula do?', answer: ptParas(["A birth doula provides continuous non-medical support — physical, emotional and informational — throughout your birth experience. This includes antenatal preparation, being present throughout labour and birth, and providing postnatal support and debrief. A doula's sole focus is on you and your wellbeing."]) },
          { _key: k(), question: 'Will you definitely be at my birth?', answer: ptParas(['I am on call for you from 39 weeks of pregnancy and will be there for your birth. In the very rare event that I am unable to attend due to illness or emergency, I have a network of experienced backup doulas who are briefed on your wishes and available to step in.']) },
          { _key: k(), question: 'What if my labour is very fast?', answer: ptParas(['I will always do everything I can to be with you, and I live within the NW Leicestershire area so can typically arrive quickly. In the event your birth is very fast, I will support you and your partner by phone until I arrive. The breathing and relaxation techniques you’ll have practised will be invaluable in this situation.']) },
          { _key: k(), question: 'Does having a doula mean my midwife will be less involved?', answer: ptParas(['Not at all. A doula is complementary to your midwife and medical team — never a replacement. I work alongside your care team and help you communicate your wishes effectively. Most midwives welcome the presence of a doula and find it helpful.']) },
        ],
      },
      {
        _type: 'faqSection', _key: k(), eyebrow: 'Prenatal yoga', heading: 'Yoga questions',
        items: [
          { _key: k(), question: 'Is prenatal yoga safe throughout pregnancy?', answer: ptParas(['Yes — my classes are specifically designed for pregnant bodies at all stages and are safe from the first trimester through to birth. All poses are adapted for pregnancy, modifications are always offered, and you are encouraged to move at your own pace. If you have complications or concerns, always check with your midwife or GP first.']) },
          { _key: k(), question: 'Do I need prior yoga experience?', answer: ptParas(["Absolutely not. The classes are suitable for complete beginners. Everything is explained clearly and from scratch. Your flexibility or fitness level doesn't matter at all — the classes are about moving mindfully in a way that is comfortable and nourishing for you."]) },
          { _key: k(), question: 'How often should I come to class?', answer: ptParas(['Once a week is wonderful — many clients find it becomes a lovely anchor in their pregnancy week. However, there is no obligation to attend every week. Drop-in passes and block bookings are available so you can come as often as suits your schedule.']) },
        ],
      },
      {
        _type: 'faqSection', _key: k(), eyebrow: 'Booking & payment', heading: 'Booking & payment',
        items: [
          { _key: k(), question: 'Are payment plans available?', answer: ptParas(['Yes. I am committed to making birth support as accessible as possible. Payment plans can be arranged for all services — usually split into two or three instalments. Please discuss this at your free consultation and we will find something that works for you.']) },
          { _key: k(), question: 'Is a deposit required to secure my place?', answer: ptParas(['Yes. A £50 deposit is required to secure your place upon booking. The remainder is due before your first session. For doula services, the balance is due at the start of the on-call period (around 39 weeks).']) },
          { _key: k(), question: 'What is your cancellation policy?', answer: ptParas(['Please see the full cancellation policy on the Terms & Conditions page. In brief: cancellations made 14 or more days before the start date receive a full refund; 7–14 days receive a 50% refund; under 7 days are non-refundable. Exceptions may be made in exceptional circumstances — please get in touch.']) },
          { _key: k(), question: 'Do you offer any discounts?', answer: ptParas(['Discounts are occasionally available for NHS workers and for those booking multiple services. Please ask at your consultation.']) },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to get started?',
        subheading: "Book your free consultation and let's find the right support for your birth journey.",
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  reviews: () => ({
    title: 'Reviews',
    metaTitle: 'Reviews',
    metaDescription:
      'Real reviews from real birth-hood clients — unfiltered and unedited. 5 star rated on Google.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'What clients say',
        heading: 'Real Reviews',
        subheading: 'From real clients, unfiltered and unedited. These words mean everything.',
        image: img('leanne-portrait.jpg', 'Leanne'),
      },
      {
        _type: 'statsSection', _key: k(),
        items: [
          { _key: k(), value: '5.0', label: '5 Star rated on Google' },
          { _key: k(), value: "100's", label: 'of families supported' },
        ],
      },
      {
        _type: 'testimonialsSection', _key: k(),
        eyebrow: 'Client reviews',
        heading: 'What clients say',
        items: [
          { _key: k(), quote: 'We instantly felt at ease and comfortable and thoroughly enjoyed learning about the benefits of Hypnobirthing. We are due to have our first baby in 6 weeks and Leanne helped us to feel nothing but calm and excited for this completely unknown experience coming up.', attribution: 'Client · Leicestershire · Hypnobirthing', rating: 5 },
          { _key: k(), quote: 'Leanne helped us look at birth in a different way to how it can often be portrayed, and we have come away with loads of affirmations and exercises to do that make me feel totally in control and relaxed!', attribution: 'Client · Leicestershire · Hypnobirthing', rating: 5 },
          { _key: k(), quote: "Thank you so much for everything! I've noticed a massive difference in Lucy and I really am excited to support her, and I know how to now! You gave us invaluable information all the way through with reasoning and justifications. We know we have choice and I feel confident now and expressing our choices to the midwife team!", attribution: 'Birth Partner · Leicester · Hypnobirthing', rating: 5 },
          { _key: k(), quote: 'We went on an antenatal course last week, and honestly found the two hours spent with Leanne today were much more helpful than the seven hours there!', attribution: 'Client · Leicestershire · Hypnobirthing', rating: 5 },
          { _key: k(), quote: 'Our birth experience was nothing short of amazing, and something we are both extremely proud of. Using everything we learnt from our course, we got the birth we had in mind and we are so proud.', attribution: 'Client · Leicestershire · Hypnobirthing', rating: 5 },
          { _key: k(), quote: "Out of all the things we've spent money on for our little one, this I feel is the most important. We've had an amazing 1-1 course with Leanne, who from our first session has made us feel so calm, comfortable and relaxed, we feel like we've known her for years.", attribution: 'Client · Leicestershire · Private 1-1 Course', rating: 5 },
          { _key: k(), quote: "From my first contact with Leanne we just clicked. She supported me through my concern about fibroids, and gave me some brilliant yoga positions to try when my SPD started. She kept in contact through my pregnancy and made me feel like I really had amazing support whenever I needed it. I can't recommend Leanne highly enough, she's a pro at end-to-end care!", attribution: 'Beka · Leicestershire · Birth Doula', rating: 5 },
          { _key: k(), quote: "Just incredible! Leanne was amazing from the moment we booked her. She protected my birth space perfectly and advocated for me many times. She was especially helpful when things didn't quite go to plan.", attribution: 'Bea · Leicestershire · Birth Doula', rating: 5 },
          { _key: k(), quote: "My advice to anyone thinking to book Leanne would be to not hesitate — she's definitely 'worth every penny' as one of the home birth midwives rightly said! She knows her job inside out and ensures she creates a loving and strong relationship with all her clients.", attribution: 'Home Birth Client · Leicestershire · Birth Doula', rating: 5 },
        ],
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'Birth stories',
        heading: 'Stories from real births',
        subheading: 'A collection of positive birth stories shared by my clients — every birth, every path, every outcome is valid.',
        items: [
          { _key: k(), title: "Britt's Homebirth", description: 'Homebirth' },
          { _key: k(), title: "Hannah's FMU Birth", description: 'FMU Birth' },
          { _key: k(), title: "Emma's Positive Induction", description: 'Induction' },
          { _key: k(), title: "Stacie's Hospital birth", description: 'Hospital' },
          { _key: k(), title: "Tom's 'dad' story", description: 'Birth Partner' },
          { _key: k(), title: "Amy's Positive Induction", description: 'Induction' },
          { _key: k(), title: "Hannah's Water Birth", description: 'Water Birth' },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Ready to add your own story?',
        subheading: 'Book a free consultation and start your birth-hood journey today.',
        ctaLabel: 'Book Free Consultation', ctaHref: cal, theme: 'pink',
      },
    ],
  }),

  podcast: () => ({
    title: 'Dou-La-La the Birthy Podcast',
    metaTitle: 'Dou-La-La the Birthy Podcast',
    metaDescription:
      'Two doulas in conversation — honest birth talk, myth busting and real chat about pregnancy, birth and beyond.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Honest birth talk',
        heading: 'Dou-La-La the Birthy Podcast',
        subheading: 'Two doulas in conversation giving you honest birth talk, myth busting and just generally having a good chat!',
        image: img('leanne-portrait.jpg', 'Leanne'),
      },
      {
        _type: 'twoColumnSection', _key: k(),
        eyebrow: 'About the show',
        heading: 'Real talk about birth, pregnancy and beyond',
        body: ptParas([
          'Join me and Meg (Birth Evolution) as we explore all areas of pregnancy, birth and the postnatal period. This is honest, unfiltered conversation from two doulas who have been in the room, heard the stories and know what really matters.',
          'So let’s deep dive into birth — bringing you knowledge, experience and tips in a way that supports you, whether you are pregnant, a birth partner or just a birth nerd like us!',
          'Expect myth-busting, real stories, evidence-based insights and the kind of conversation you wish you could have with your midwife but never quite find the time for. No topic is off limits.',
        ]),
        sidePanelTitle: 'At a glance',
        stats: [
          { _key: k(), value: '2', label: 'Doulas — me & Meg from Birth Evolution' },
          { _key: k(), value: 'Real', label: 'Honest, unfiltered conversations about birth' },
          { _key: k(), value: 'Free', label: 'Available on all major podcast platforms' },
          { _key: k(), value: 'All', label: 'For parents, partners and birth nerds alike' },
        ],
        imagePosition: 'right',
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'Listen on',
        heading: 'Find us on your favourite platform',
        items: [
          { _key: k(), icon: '♫', title: 'Spotify', description: 'Open Spotify and search "Dou-La-La" to find and subscribe to the podcast.' },
          { _key: k(), icon: '◎', title: 'Apple Podcasts', description: 'Open Apple Podcasts and search "Dou-La-La" to subscribe and get notified when new episodes drop.' },
          { _key: k(), icon: '◈', title: 'Amazon Music', description: 'Search "Dou-La-La" on Amazon Music or Audible to listen wherever you are.' },
        ],
      },
      {
        _type: 'featureGridSection', _key: k(),
        eyebrow: 'What we talk about',
        heading: 'Topics we explore',
        items: [
          { _key: k(), title: 'Pregnancy & birth', description: 'Evidence-based information on all things pregnancy, labour and birth — without the fear.' },
          { _key: k(), title: 'Birth myth-busting', description: 'We call out the myths, misinformation and outdated advice that does more harm than good.' },
          { _key: k(), title: 'Postnatal period', description: 'The fourth trimester — what no one tells you about life after birth and how to get the support you deserve.' },
          { _key: k(), title: 'Birth stories', description: 'Real stories from real people — every type of birth, told with honesty and compassion.' },
        ],
      },
      {
        _type: 'ctaBandSection', _key: k(),
        heading: 'Subscribe so you never miss an episode',
        subheading: "Search 'Dou-La-La' on Spotify, Apple Podcasts or Amazon Music — honest birth talk, myth busting and real conversations about pregnancy and beyond.",
        ctaLabel: 'How to find the podcast', ctaHref: '/podcast', theme: 'pink',
      },
    ],
  }),

  links: () => ({
    title: 'Links',
    metaTitle: 'Links — Birth Hood',
    metaDescription:
      'Doula support, hypnobirthing, prenatal yoga and more — based in NW Leicestershire.',
    sections: [
      {
        _type: 'linkListSection', _key: k(),
        heading: 'Birth Hood',
        intro: 'Doula support, hypnobirthing, prenatal yoga and more — based in NW Leicestershire.',
        links: [
          { _key: k(), label: 'Book a 1-1 Consultation', url: cal, description: 'Book directly via Calendly', featured: true },
          { _key: k(), label: 'Course Booking', url: '/booking', description: 'Book a hypnobirthing course or yoga class', featured: false },
          { _key: k(), label: 'Free Resources', url: '/freebies', description: 'Birth affirmations, guides and templates — completely free', featured: false },
          { _key: k(), label: 'Doula Support', url: '/doula', description: 'Learn about birth doula packages', featured: false },
          { _key: k(), label: 'Prenatal Yoga', url: '/yoga', description: 'Weekly classes and block bookings', featured: false },
          { _key: k(), label: 'Birth Trauma Support', url: '/birth-trauma', description: 'Compassionate support for difficult birth experiences', featured: false },
          { _key: k(), label: 'Dou-La-La Podcast', url: '/podcast', description: 'Honest birth talk with me & Meg', featured: false },
          { _key: k(), label: 'Blog', url: '/blog', description: 'Articles, guides and birth knowledge', featured: false },
          { _key: k(), label: 'Reviews', url: '/reviews', description: 'What families say about working with me', featured: false },
          { _key: k(), label: 'Contact Leanne', url: '/contact', description: 'Get in touch with any questions', featured: false },
          { _key: k(), label: 'Leave a Google Review', url: 'https://g.page/r/birthhood', description: 'Share your experience — it means the world', featured: false },
        ],
      },
    ],
  }),

  terms: () => ({
    title: 'Terms & Conditions',
    metaTitle: 'Terms & Conditions',
    metaDescription:
      'Please read these terms carefully before booking any services with birth-hood.',
    sections: [
      {
        _type: 'heroSection', _key: k(),
        eyebrow: 'Legal stuff',
        heading: 'Terms & Conditions',
        subheading: 'Please read these terms carefully before booking any services with birth-hood.',
      },
      {
        _type: 'richTextSection', _key: k(),
        body: [
          ptBlock('Last updated: March 2026. These terms apply to all services provided by birth-hood (Leanne, birth educator and doula). By booking a service you agree to these terms.', 'blockquote'),

          ptBlock('1. Booking & Payment', 'h2'),
          ptBlock('1.1 Securing a place', 'h3'),
          ptBlock('All bookings are confirmed on receipt of a £50 non-refundable deposit. Your place is not secured until the deposit has been received. The remaining balance is due at the start of your first session (or, for doula services, at the beginning of the on-call period at 39 weeks of pregnancy).'),
          ptBlock('1.2 Payment methods', 'h3'),
          ptBlock('Payment can be made by bank transfer (BACS). Payment details will be provided at the time of booking. Cheques are not accepted.'),
          ptBlock('1.3 Payment plans', 'h3'),
          ptBlock('Payment plans are available on request. Please discuss this at your free consultation. Where a payment plan is agreed, all instalments must be made by the agreed dates. Failure to make an agreed payment may result in cancellation of your booking.'),

          ptBlock('2. Cancellation Policy', 'h2'),
          ptBlock('2.1 Cancellations by the client', 'h3'),
          ptBlock('The following cancellation policy applies to all services:'),
          ptBlock('14 or more days before the start date: Full refund of any amounts paid beyond the initial £50 deposit. The deposit itself is non-refundable.'),
          ptBlock('7–14 days before the start date: 50% refund of the total amount paid (including the deposit portion). The remaining 50% is retained.'),
          ptBlock('Under 7 days before the start date: No refund. The full amount is retained.'),
          ptBlock('Exceptions may be made at my discretion in cases of exceptional circumstances (such as pregnancy complications or bereavement). Please get in touch as soon as possible in these situations.'),
          ptBlock('2.2 Cancellations by birth-hood', 'h3'),
          ptBlock('In the unlikely event that I need to cancel a session or service, every effort will be made to reschedule to a mutually convenient time. If rescheduling is not possible, a full refund of all amounts paid will be issued within 14 days.'),
          ptBlock('2.3 Group courses — missed sessions', 'h3'),
          ptBlock('For group courses, missed sessions cannot be refunded or rescheduled individually. If you miss a session, I will provide notes and recordings where possible, and you are welcome to ask questions via WhatsApp or at the next session.'),

          ptBlock('3. Doula Services', 'h2'),
          ptBlock('3.1 On-call period', 'h3'),
          ptBlock('I am on call for birth doula clients from 39 weeks of pregnancy. I will make every reasonable effort to attend your birth. In the event that I am unable to attend due to illness, personal emergency or simultaneous births, I will arrange for a fully briefed backup doula to attend in my place.'),
          ptBlock('3.2 Professional boundaries', 'h3'),
          ptBlock('As a birth doula, I provide non-medical support only. I will not perform any clinical tasks, give medical advice, or make clinical decisions. All clinical care remains the responsibility of your midwife and medical team.'),
          ptBlock('3.3 Photography and recording', 'h3'),
          ptBlock('I will not take photographs or make recordings during your birth unless explicitly requested by you. Any photography or recording equipment must be agreed in advance with your midwife and birth unit.'),

          ptBlock('4. Privacy & Confidentiality', 'h2'),
          ptBlock('4.1 Your information', 'h3'),
          ptBlock('All personal and medical information shared with me is held in strict confidence. Information will not be shared with third parties without your explicit consent, except where required by law or where there is a serious safeguarding concern.'),
          ptBlock('4.2 Data retention', 'h3'),
          ptBlock('Client records are retained for a period of 3 years following the end of the service, in line with professional guidance for birth workers. After this period, records are securely destroyed.'),
          ptBlock('4.3 Testimonials and reviews', 'h3'),
          ptBlock('Any testimonials shared with birth-hood may be used in marketing materials (website, social media). Your name and location will only be shared with your explicit written permission. You may request removal of any testimonial at any time.'),

          ptBlock('5. Professional Standards', 'h2'),
          ptBlock('5.1 Qualifications and insurance', 'h3'),
          ptBlock('I hold current professional indemnity and public liability insurance appropriate to all services provided. All qualifications are maintained and renewed in line with the requirements of the relevant certifying bodies (KGHypnobirthing, Badass Birth, Sally Parkes).'),
          ptBlock('5.2 Limitations of service', 'h3'),
          ptBlock('Birth-hood services are educational and supportive in nature. They are not medical services and are not a substitute for professional medical care. All clients are encouraged to maintain regular contact with their NHS midwife or care team throughout their pregnancy.'),
          ptBlock('5.3 Scope of practice', 'h3'),
          ptBlock("I work strictly within my scope of practice as defined by my training and professional bodies. I will always refer clients to appropriate specialist services — including NHS services, mental health support, or other specialists — when this is in the client's best interests."),

          ptBlock('6. Contact', 'h2'),
          ptBlock('If you have any questions about these terms, or if you would like to discuss anything relating to your booking, please get in touch via the Calendly booking form or through Instagram at @birthhooduk.'),
          ptBlock('These terms were last updated in March 2026 and may be updated from time to time. The current version will always be available on this page.'),
        ],
      },
    ],
  }),
}

const PAGE_SLUGS = Object.keys(pageBuilders)

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
      const built = pageBuilders[slug]()
      const id = `drafts.page-${slug}`
      await client.createOrReplace({
        _id: id,
        _type: 'page',
        title: built.title || titleFromSlug(slug),
        slug: { _type: 'slug', current: slug },
        metaTitle: built.metaTitle,
        metaDescription: built.metaDescription,
        sections: built.sections,
      })
      console.log(`  ✓ draft: ${slug} (${built.sections.length} sections)`)
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
  console.log('0. Image assets (public/images)')
  await uploadImages()
  console.log('\n1. Site Settings (published)')
  await migrateSettings()
  console.log('\n2. Hub resources (published)')
  await migrateHub()
  console.log('\n3. Freebies (published)')
  await migrateFreebies()
  console.log("\n4. Marketing pages (DRAFTS — won't render until you publish each one in Studio)")
  await migratePages()
  console.log('\n✓ Migration complete\n')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
