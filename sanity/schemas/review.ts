import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  description: 'Google reviews shown on the Reviews page.',
  fields: [
    defineField({
      name: 'name',
      title: 'Reviewer name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
      description: 'The label on the card — e.g. Birth Doula, Hypnobirthing, Pregnancy Yoga.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'when',
      title: 'When',
      type: 'string',
      description: 'As Google shows it, e.g. "2 months ago". Approximate is fine.',
    }),
    defineField({
      name: 'text',
      title: 'Review',
      type: 'text',
      rows: 10,
      description:
        'Leave a blank line between paragraphs. Anything over ~320 characters is ' +
        'collapsed behind a "Read more" on the site.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first. Mix the services up rather than sorting by date.',
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'service' } },
})
