import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'birthStory',
  title: 'Birth Story',
  type: 'document',
  description:
    'Client birth stories. Shown as cards at the foot of the Reviews page, on ' +
    '/birth-stories, and each one gets its own page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "e.g. \"Britt's Homebirth\"",
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'The page address, e.g. britts-homebirth',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type of birth',
      type: 'string',
      description: 'The badge above the title — e.g. Homebirth, Induction, Water Birth.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'baby',
      title: "Baby's name & arrival",
      type: 'string',
      description: 'e.g. "Lexie · born at 9:56am in the birthing pool"',
    }),
    defineField({
      name: 'place',
      title: 'Where',
      type: 'string',
      description: 'e.g. "At home", "Melton Birthing Unit"',
    }),
    defineField({
      name: 'excerpt',
      title: 'Card blurb',
      type: 'text',
      rows: 3,
      description: 'The short summary shown on the card.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'pullQuote',
      title: 'Pull quote',
      type: 'text',
      rows: 2,
      description: 'Highlighted partway down the story page.',
    }),
    defineField({
      name: 'body',
      title: 'The story',
      type: 'array',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }] }],
      description: "The client's own words, one paragraph per block.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
})
