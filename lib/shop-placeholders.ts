import type { ShopProduct } from '@/lib/sanity-queries'

// Placeholder shop items shown until real products are added in the Studio.
// (Descriptions/prices are examples — swap for real ones in Sanity.)
// No imageUrl on purpose: the cards render a "placeholder" block plus a
// PDF/Audio tag derived from fileExt.
export const PLACEHOLDER_PRODUCTS: ShopProduct[] = [
  // Booked, not downloaded — these link straight to Calendly and stay out of
  // the cart, so they work whether or not Stripe checkout is switched on.
  {
    _id: 'power-hour',
    title: '⚡ Birth-Hood Power Hour',
    description:
      "60 minutes of personalised birth support. You've read the guides. You've Googled. You've got questions. Now let's actually talk it through — bring your birth plan, induction options, previous birth experience, worries or whatever is currently making you go \"hang on… what?\". We'll spend an hour working through your situation, your options and what matters to you.",
    price: 50,
    imageUrl: '/images/shop/power-hour.jpg',
    bookingUrl: 'https://calendly.com/birthhood/power-hour',
    bookingLabel: 'Book Power Hour',
  },
  {
    _id: 'power-session',
    title: '⚡ Birth-Hood Power Session',
    description:
      'Two hours of personalised birth support. Got a LOT to unpack? Two hours to properly work through your birth preparation, preferences, questions and decision-making — without trying to cram everything into 60 minutes.',
    price: 80,
    imageUrl: '/images/shop/power-session.jpg',
    bookingUrl: 'https://calendly.com/birthhood/power-hour',
    bookingLabel: 'Book Power Session',
  },
  {
    _id: 'demo-hypno-mp3',
    title: 'Complete Hypnobirthing MP3 Bundle',
    description:
      'Five guided relaxation, breathing and visualisation tracks to listen to throughout pregnancy and during labour.',
    price: 15,
    fileExt: 'mp3',
  },
  {
    _id: 'demo-birth-plan',
    title: 'Birth Plan Builder & Guide',
    description:
      'An editable birth plan template plus a plain-English guide to your options and rights — for every type of birth.',
    price: 12,
    fileExt: 'pdf',
  },
  {
    _id: 'demo-affirmations',
    title: 'Positive Birth Affirmations',
    description:
      'Calming affirmations to release fear and build confidence — a soothing audio track to listen to daily.',
    price: 10,
    fileExt: 'mp3',
  },
  {
    _id: 'demo-newborn-checklist',
    title: 'Newborn & Fourth Trimester Checklist',
    description:
      'Everything you actually need for the early weeks — feeding, sleep, recovery, and when to ask for help.',
    price: 10,
    fileExt: 'pdf',
  },
  {
    _id: 'demo-rewind-workbook',
    title: '3 Step Rewind — Self-Guided Workbook',
    description:
      'A gentle workbook to begin processing a difficult birth experience in your own time and space.',
    price: 15,
    fileExt: 'pdf',
  },
  {
    _id: 'demo-comfort-measures',
    title: 'Comfort Measures for Labour (Audio Guide)',
    description:
      'Positions, breathing and partner techniques to help you stay calm and in control during labour.',
    price: 14,
    fileExt: 'mp3',
  },
]
