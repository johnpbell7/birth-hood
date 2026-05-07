import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function main() {
  // Check if siteSettings already exists
  const existing = await client.fetch(`*[_type == "siteSettings"][0]._id`)
  
  const doc = {
    _type: 'siteSettings',
    // ── Global ────────────────────────────────────────────────────
    siteName: 'birth-hood',
    tagline: 'Your birth, your way.',
    contactEmail: 'hello@birth-hood.co.uk',
    phone: '',
    social: {
      instagram: 'https://www.instagram.com/birthhooduk',
      facebook: '',
      youtube: '',
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

    // ── Home — Hero ────────────────────────────────────────────────
    homeHeroHeadline: 'Your birth, your way.',
    homeHeroSubtitle:
      'Hypnobirthing, Doula support and Yoga — helping you feel powerful, prepared and genuinely excited for birth. All pregnancies, all modes of birth, all people.',
    homeHeroCta: 'Book Free Consultation',
    homeHeroCtaHref: 'https://calendly.com/birthhood',

    // ── Home — Services ────────────────────────────────────────────
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

    // ── Home — About ───────────────────────────────────────────────
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

    // ── Home — Testimonials ────────────────────────────────────────
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

    // ── Home — Free Resources ──────────────────────────────────────
    homeFreebiesHeading: 'Free resources to get you started',
    homeFreebiesBody:
      'Download my free birth affirmations, birth plan guide and newborn checklist — no email required, no strings attached. Plus a FREE Hypnobirthing MP3 and ELLE TENS machine discount code!',
    homeFreebiesTags: ['Birth Affirmations', 'Birth Plan Guide', 'Newborn Checklist'],
    homeFreebiesCta: 'Download Free Resources',
    homeBookingHeading: 'Ready to feel excited about your birth?',
    homeBookingBody: 'Book a free 30-minute consultation — no obligation, just a friendly chat.',
  }

  if (existing) {
    console.log('siteSettings already exists, patching with new fields...')
    await client.patch(existing).set(doc).commit()
    console.log('✅ siteSettings updated:', existing)
  } else {
    console.log('Creating new siteSettings document...')
    const result = await client.create(doc)
    console.log('✅ siteSettings created:', result._id)
  }
}

main().catch((err) => { console.error(err); process.exit(1) })
