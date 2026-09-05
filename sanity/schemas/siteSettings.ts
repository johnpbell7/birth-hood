import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  description: 'Global settings and home page text — edit here to update the live site.',
  groups: [
    { name: 'global', title: 'Global' },
    { name: 'home', title: 'Home page' },
    { name: 'homeServices', title: 'Home — Services' },
    { name: 'homeAbout', title: 'Home — About' },
    { name: 'homeTestimonials', title: 'Home — Testimonials' },
    { name: 'homeFreebies', title: 'Home — Free Resources' },
  ],
  fields: [
    // ── Global ──────────────────────────────────────────────────────────────
    defineField({ name: 'siteName', title: 'Site name', type: 'string', group: 'global' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', group: 'global' }),
    defineField({ name: 'contactEmail', title: 'Contact email', type: 'string', group: 'global' }),
    defineField({ name: 'phone', title: 'Phone number', type: 'string', group: 'global' }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'object',
      group: 'global',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'tiktok', title: 'TikTok URL', type: 'url' },
        { name: 'calendly', title: 'Calendly booking URL', type: 'url' },
      ],
    }),
    defineField({ name: 'footerText', title: 'Footer text', type: 'text', rows: 2, group: 'global' }),
    defineField({
      name: 'marqueeWords',
      title: 'Scrolling marquee words',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short labels shown in the scrolling strip across the site.',
      group: 'global',
    }),

    // ── Areas covered ────────────────────────────────────────────────────────
    defineField({
      name: 'areasCounties',
      title: 'Areas covered — counties',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Shown as the chips on the "where I work" card. Leave empty to use the built-in list.',
      group: 'global',
    }),
    defineField({
      name: 'areasTowns',
      title: 'Areas covered — towns & cities',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'These are NOT listed on the page. They go into the hidden location data Google reads, and the first few are named in the sentence on the doula page. Add a town here and you start showing up for it — no need for a separate page per town.',
      group: 'global',
    }),

    // ── Home — Hero ──────────────────────────────────────────────────────────
    defineField({
      name: 'homeHeroTitle',
      title: 'Hero — Headline',
      type: 'string',
      description:
        'The big headline at the very top of the home page. Leave empty to use "Welcome to birth-hood".',
      placeholder: 'Welcome to birth-hood',
      group: 'home',
    }),
    // Superseded by homeHeroTitle. Kept in the schema (hidden) so the stale
    // value saved in Sanity does not show up as an "unknown field" warning.
    defineField({
      name: 'homeHeroHeadline',
      title: 'Hero — Headline (old, unused)',
      type: 'string',
      hidden: true,
      group: 'home',
    }),
    defineField({
      name: 'homeHeroSubtitle',
      title: 'Hero — Subtitle',
      type: 'text',
      rows: 3,
      group: 'home',
    }),
    defineField({
      name: 'homeHeroCta',
      title: 'Hero — Button label',
      type: 'string',
      group: 'home',
    }),
    defineField({
      name: 'homeHeroCtaHref',
      title: 'Hero — Button link',
      type: 'string',
      group: 'home',
    }),
    defineField({
      name: 'homeSignatureImage',
      title: 'Hero — Signature graphic',
      type: 'image',
      options: { hotspot: true },
      description: 'Handwritten signature shown under the hero text. A PNG with a transparent background works best. Leave empty to use the styled "with Leanne x" text.',
      group: 'home',
    }),

    // ── Home — Hero collage photos ───────────────────────────────────────────
    defineField({
      name: 'homeHeroCollage',
      title: 'Hero — Collage photos',
      type: 'array',
      group: 'home',
      description: 'The rotating polaroid photos in the hero (up to 5). Leave empty to use the defaults. Order matches the on-screen layout.',
      validation: (R) => R.max(5),
      of: [
        {
          type: 'object',
          name: 'collagePhoto',
          fields: [
            { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
            { name: 'label', title: 'Label (shown under the photo)', type: 'string' },
            { name: 'alt', title: 'Alt text (for accessibility)', type: 'string' },
          ],
          preview: { select: { title: 'label', media: 'image' } },
        },
      ],
    }),

    // ── Home — Welcome intro (under the hero) ────────────────────────────────
    defineField({
      name: 'homeWelcomeTitle',
      title: 'Welcome — Heading',
      type: 'string',
      description:
        'Heading of the intro block below the hero. Leave empty to use "Hi, I\'m Leanne". The words "birth-hood" are shown in pink italics automatically.',
      placeholder: "Hi, I'm Leanne",
      group: 'home',
    }),
    // Superseded by homeWelcomeTitle — see the note above.
    defineField({
      name: 'homeWelcomeHeading',
      title: 'Welcome — Heading (old, unused)',
      type: 'string',
      hidden: true,
      group: 'home',
    }),
    defineField({
      name: 'homeWelcomeBody',
      title: 'Welcome — Body paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'One entry per paragraph.',
      group: 'home',
    }),
    defineField({
      name: 'homeWelcomeImage',
      title: 'Welcome — Image (right side)',
      type: 'image',
      options: { hotspot: true },
      description: 'Shown to the right of the welcome text. A cut-out photo (transparent background) works best.',
      group: 'home',
    }),

    // ── Home — Services section ──────────────────────────────────────────────
    defineField({ name: 'homeServicesEyebrow', title: 'Services — Eyebrow', type: 'string', group: 'homeServices' }),
    defineField({ name: 'homeServicesHeading', title: 'Services — Heading', type: 'string', group: 'homeServices' }),
    defineField({
      name: 'homeServices',
      title: 'Service cards',
      type: 'array',
      group: 'homeServices',
      description: 'Exactly 4 service cards shown on the homepage.',
      of: [{
        type: 'object',
        name: 'serviceCard',
        fields: [
          { name: 'name', title: 'Service name', type: 'string', validation: (R) => R.required() },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
          { name: 'href', title: 'Link', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'description' } },
      }],
    }),

    // ── Home — About section ─────────────────────────────────────────────────
    defineField({ name: 'homeAboutEyebrow', title: 'About — Eyebrow', type: 'string', group: 'homeAbout' }),
    defineField({ name: 'homeAboutHeading', title: 'About — Heading', type: 'string', group: 'homeAbout' }),
    defineField({ name: 'homeAboutImage', title: 'About — Photo', type: 'image', options: { hotspot: true }, group: 'homeAbout' }),
    defineField({
      name: 'homeAboutBody',
      title: 'About — Body paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'homeAbout',
      description: 'Each item is one paragraph.',
    }),
    defineField({
      name: 'homeAboutCredentials',
      title: 'About — Credential bullets',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'homeAbout',
    }),
    defineField({ name: 'homeAboutCta', title: 'About — Button label', type: 'string', group: 'homeAbout' }),
    defineField({ name: 'homeAboutCtaHref', title: 'About — Button link', type: 'string', group: 'homeAbout' }),

    // ── Home — Testimonials ──────────────────────────────────────────────────
    defineField({ name: 'homeTestimonialsEyebrow', title: 'Testimonials — Eyebrow', type: 'string', group: 'homeTestimonials' }),
    defineField({ name: 'homeTestimonialsHeading', title: 'Testimonials — Heading', type: 'string', group: 'homeTestimonials' }),
    defineField({
      name: 'homeTestimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'homeTestimonials',
      of: [{
        type: 'object',
        name: 'homeReview',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (R) => R.required() },
          { name: 'attribution', title: 'Attribution (name · location)', type: 'string' },
        ],
        preview: { select: { title: 'attribution', subtitle: 'quote' } },
      }],
    }),

    // ── Home — Free resources teaser ─────────────────────────────────────────
    defineField({ name: 'homeFreebiesHeading', title: 'Free Resources — Heading', type: 'string', group: 'homeFreebies' }),
    defineField({ name: 'homeFreebiesBody', title: 'Free Resources — Body', type: 'text', rows: 3, group: 'homeFreebies' }),
    defineField({
      name: 'homeFreebiesTags',
      title: 'Free Resources — Tag pills',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'homeFreebies',
    }),
    defineField({ name: 'homeFreebiesCta', title: 'Free Resources — Button label', type: 'string', group: 'homeFreebies' }),
    defineField({
      name: 'homeBookingHeading',
      title: 'Booking CTA — Heading',
      type: 'string',
      group: 'homeFreebies',
    }),
    defineField({
      name: 'homeBookingBody',
      title: 'Booking CTA — Body',
      type: 'text',
      rows: 2,
      group: 'homeFreebies',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
