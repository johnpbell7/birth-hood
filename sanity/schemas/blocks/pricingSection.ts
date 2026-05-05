import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricingSection',
  title: 'Pricing cards',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading / note', type: 'text', rows: 2 }),
    defineField({
      name: 'items',
      title: 'Pricing cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pricingCard',
          fields: [
            { name: 'label', title: 'Card label (e.g. "Group Course")', type: 'string', validation: (R) => R.required() },
            { name: 'badge', title: 'Badge text (e.g. "Most popular")', type: 'string' },
            { name: 'price', title: 'Price (e.g. "£225")', type: 'string', validation: (R) => R.required() },
            { name: 'period', title: 'Period / subtitle (e.g. "per couple · face to face")', type: 'string' },
            {
              name: 'features',
              title: 'Feature list',
              type: 'array',
              of: [{ type: 'string' }],
            },
            { name: 'ctaLabel', title: 'Button label', type: 'string', initialValue: 'Book Now' },
            { name: 'ctaHref', title: 'Button link', type: 'string', initialValue: 'https://calendly.com/birthhood' },
            { name: 'highlighted', title: 'Highlighted / featured card', type: 'boolean', initialValue: false },
          ],
          preview: {
            select: { title: 'label', subtitle: 'price' },
          },
        },
      ],
    }),
    defineField({ name: 'footnote', title: 'Footnote (below cards)', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'Pricing cards', subtitle: 'Pricing section' }),
  },
})
