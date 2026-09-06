import type { ShopProduct } from '@/lib/sanity-queries'

/**
 * The shop catalogue, shown until the real products exist in the Studio.
 *
 * Titles, descriptions and bundle contents are Leanne's own — only the prices
 * are missing, because she sets those. A product with no price shows
 * "Price coming soon" rather than £0.00, and checkout stays off in this mode.
 *
 * scripts/seed-shop.mjs creates exactly these in Sanity when a write token is
 * available, so the Studio starts from the same list rather than an empty one.
 */
export const PLACEHOLDER_PRODUCTS: ShopProduct[] = [
  // ── Booked, not downloaded ────────────────────────────────────────────────
  // These link straight to Calendly and stay out of the cart, so they work
  // whether or not Stripe checkout is switched on.
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

  // ── Individual resources ──────────────────────────────────────────────────
  {
    _id: 'birth-prep-handbook',
    title: 'Birth-hood Birth Prep / Hypnobirthing Handbook',
    description: 'Your no-BS guide to preparing for birth, whatever your birth looks like.',
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },
  {
    _id: 'birth-plan-toolkit',
    title: 'Birth-hood Birth Plan Tool Kit',
    description: 'Because your birth plan should cover more than Plan A.',
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },
  {
    _id: 'fourth-trimester-guide',
    title: 'Birth-hood Fourth Trimester Planning Guide',
    description:
      'Because everyone prepares for the birth. Not enough people prepare for what comes after.',
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },
  {
    _id: 'peanut-ball-guide',
    title: 'Birth-hood Peanut Ball Guide',
    description:
      'Practical positions for anyone planning to use a peanut ball during labour, particularly with an epidural.',
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },
  {
    _id: 'prenatal-movement-guide',
    title: 'Birth-hood Prenatal Movement Guide',
    description: '10 minutes of movement to keep you moving through pregnancy.',
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },
  {
    _id: 'postpartum-core-stability',
    title: 'Birth-hood Postpartum Core & Stability',
    description: 'A gentle way to reconnect with your body and rebuild strength after birth.',
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },
  {
    _id: 'induction-guide',
    title: 'Birth-hood Induction Guide',
    description: "Understand your options before you're asked to make a decision.",
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },
  {
    _id: 'caesarean-handbook',
    title: 'Birth-hood Caesarean Hypnobirthing Handbook',
    description: "Preparing for a caesarean doesn't mean giving up on the birth you want.",
    price: 0,
    kind: 'single',
    fileExt: 'pdf',
  },

  // ── Bundles ───────────────────────────────────────────────────────────────
  {
    _id: 'bundle-birth-partner',
    title: 'Birth-hood Birth Partner Bundle',
    description: 'Because birth partners need preparing too.',
    price: 0,
    kind: 'bundle',
    fileCount: 3,
    includes: [
      { _id: 'partner-script', title: 'Partner script' },
      { _id: 'partner-quick-guide', title: 'Partner quick guide' },
      { _id: 'pillars-birth-partner', title: 'Pillars of a birth partner' },
    ],
  },
  {
    _id: 'bundle-birth-prep',
    title: 'Birth-hood Birth Prep Bundle',
    description: 'Everything you need to feel informed, prepared and ready for the unexpected.',
    price: 0,
    kind: 'bundle',
    fileCount: 5,
    includes: [
      { _id: 'birth-prep-handbook', title: 'Birth Prep Handbook' },
      { _id: 'birth-plan-toolkit', title: 'Birth Plan Toolkit' },
      { _id: 'birth-partner-guide', title: 'Birth Partner Guide' },
      { _id: 'peanut-ball-guide', title: 'Peanut Ball Guide' },
      { _id: 'daily-birth-ball-guide', title: 'Daily Birth Ball Guide' },
    ],
  },
  {
    _id: 'bundle-postpartum',
    title: 'Birth-hood Postpartum Bundle',
    description: 'Prepare for the bit that comes after birth.',
    price: 0,
    kind: 'bundle',
    fileCount: 2,
    includes: [
      { _id: 'fourth-trimester-guide', title: 'Fourth Trimester Planning Guide' },
      { _id: 'postpartum-core-stability', title: 'Postpartum Core & Stability' },
    ],
  },
  {
    _id: 'bundle-caesarean',
    title: 'Birth-hood Caesarean Bundle',
    description: 'Prepare for your caesarean. Protect the parts of your birth that matter to you.',
    price: 0,
    kind: 'bundle',
    fileCount: 2,
    includes: [
      { _id: 'caesarean-handbook', title: 'Caesarean Hypnobirthing Handbook' },
      { _id: 'fourth-trimester-guide', title: 'Fourth Trimester Planning Guide' },
    ],
  },
  {
    _id: 'bundle-induction',
    title: 'Birth-hood Induction Bundle',
    description: 'Know your options. Prepare your body. Go into induction informed.',
    price: 0,
    kind: 'bundle',
    fileCount: 3,
    includes: [
      { _id: 'induction-guide', title: 'Induction Guide' },
      { _id: 'peanut-ball-guide', title: 'Peanut Ball Guide' },
      { _id: 'fourth-trimester-guide', title: 'Fourth Trimester Planning Guide' },
    ],
  },
  {
    _id: 'bundle-movement',
    title: 'Birth-hood Movement Bundle',
    description: 'Move through pregnancy, birth and recovery with confidence.',
    price: 0,
    kind: 'bundle',
    fileCount: 4,
    includes: [
      { _id: 'peanut-ball-guide', title: 'Peanut Ball Guide' },
      { _id: 'prenatal-movement-guide', title: 'Prenatal Movement Guide' },
      { _id: 'postpartum-core-stability', title: 'Postpartum Core & Stability' },
      { _id: 'biomechanics', title: 'Birth-hood Biomechanics' },
    ],
  },
  {
    _id: 'bundle-hypnobirthing',
    title: 'Birth-hood Hypnobirthing Bundle',
    description: 'Train your brain, calm your body and prepare for birth on your terms.',
    price: 0,
    kind: 'bundle',
    fileCount: 10,
    includes: [
      { _id: 'birth-prep-handbook', title: 'Birth Prep Handbook' },
      { _id: 'partner-script', title: 'Partner Script' },
      { _id: 'birth-planning-guide', title: 'Birth Planning Guide' },
      { _id: 'meditation-scripts', title: 'Meditation for Birth Scripts' },
      { _id: 'weekly-agenda', title: 'Weekly Agenda' },
      { _id: 'colouring-affirmations', title: 'Printable Colouring Affirmations' },
      { _id: 'mp3-set', title: '4x relaxation MP3s' },
    ],
  },
  {
    _id: 'bundle-complete',
    title: 'Complete Birth-Hood Toolkit',
    description:
      'The whole bloody lot. Birth prep, hypnobirthing, movement and postpartum — all in one place.',
    price: 0,
    kind: 'bundle',
    fileCount: 20,
    includes: [
      { _id: 'birth-prep-handbook', title: 'Birth Prep Handbook' },
      { _id: 'induction-guide', title: 'Induction Guide' },
      { _id: 'partner-script', title: 'Partner Script' },
      { _id: 'birth-planning-guide', title: 'Birth Planning Guide' },
      { _id: 'meditation-scripts', title: 'Meditation for Birth Scripts' },
      { _id: 'weekly-agenda', title: 'Weekly Agenda' },
      { _id: 'colouring-affirmations', title: 'Printable Colouring Affirmations' },
      { _id: 'mp3-set', title: '4x relaxation MP3s' },
      { _id: 'fourth-trimester-guide', title: 'Fourth Trimester Planning Guide' },
      { _id: 'postpartum-core-stability', title: 'Postpartum Core & Stability' },
      { _id: 'partner-quick-guide', title: 'Partner quick guide' },
      { _id: 'pillars-birth-partner', title: 'Pillars of a birth partner' },
      { _id: 'birth-plan-toolkit', title: 'Birth Plan Toolkit' },
      { _id: 'birth-partner-guide', title: 'Birth Partner Guide' },
      { _id: 'peanut-ball-guide', title: 'Peanut Ball Guide' },
      { _id: 'daily-birth-ball-guide', title: 'Daily Birth Ball Guide' },
    ],
  },
]
