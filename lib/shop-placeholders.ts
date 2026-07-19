import type { ShopProduct } from '@/lib/sanity-queries'

// Placeholder shop items shown until real products are added in the Studio.
// (Descriptions/prices are examples — swap for real ones in Sanity.)
// No imageUrl on purpose: the cards render a "placeholder" block plus a
// PDF/Audio tag derived from fileExt.
export const PLACEHOLDER_PRODUCTS: ShopProduct[] = [
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
