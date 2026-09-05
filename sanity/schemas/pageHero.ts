import { defineType, defineField } from 'sanity'

/**
 * Overrides for the hero at the top of a fixed page (the eyebrow, the big
 * heading, the intro line and the two polaroid photos).
 *
 * Each field is optional — anything left empty keeps the built-in default, so
 * Leanne can swap just one photo without having to re-enter the wording.
 */
export const PAGE_HERO_TARGETS: { title: string; value: string }[] = [
  { title: 'Meet Leanne', value: 'meet-leanne' },
  { title: 'Hypnobirthing', value: 'hypnobirthing' },
  { title: 'Courses', value: 'course-info' },
  { title: 'Session Outlines', value: 'session-outlines' },
  { title: 'Doula Support', value: 'doula' },
  { title: 'Birth Doula', value: 'birth-doula' },
  { title: 'Postnatal Doula', value: 'postnatal-doula' },
  { title: 'Overnight Doula', value: 'overnight-doula' },
  { title: 'Virtual & Antenatal Doula', value: 'virtual-doula' },
  { title: 'Birth Trauma (3 Step Rewind)', value: 'birth-trauma' },
  { title: 'Yoga', value: 'yoga' },
  { title: 'Shop', value: 'shop' },
  { title: 'Free Resources', value: 'freebies' },
  { title: 'Blog', value: 'blog' },
  { title: 'Birth Stories', value: 'birth-stories' },
  { title: 'Reviews', value: 'reviews' },
  { title: 'Podcast', value: 'podcast' },
  { title: 'Booking', value: 'booking' },
  { title: 'Find Your Package', value: 'find-your-package' },
  { title: 'Contact', value: 'contact' },
  { title: 'FAQ', value: 'faq' },
  { title: 'Terms', value: 'terms' },
]

const photo = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    description,
    fields: [
      {
        name: 'alt',
        title: 'Caption / alt text',
        type: 'string',
        description: 'Shown under the photo in the polaroid frame, and read by screen readers.',
      },
    ],
  })

export default defineType({
  name: 'pageHero',
  title: 'Page Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      description: 'Which page this hero belongs to. One entry per page.',
      options: { list: PAGE_HERO_TARGETS },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow (small label above the heading)',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Wrap a word in *asterisks* to show it in the pink italic style, e.g. Meet *Leanne*.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Intro paragraph',
      type: 'text',
      rows: 4,
    }),
    photo('photo1', 'Photo 1 — large polaroid', 'The bigger photo on the left of the pair.'),
    photo('photo2', 'Photo 2 — small polaroid', 'The smaller photo that overlaps the first one.'),
  ],
  preview: {
    select: { page: 'page', heading: 'heading', media: 'photo1' },
    prepare: ({ page, heading, media }) => ({
      title: PAGE_HERO_TARGETS.find((t) => t.value === page)?.title ?? page ?? 'Page hero',
      subtitle: heading ? `Heading: ${heading}` : 'Photos only',
      media,
    }),
  },
})
