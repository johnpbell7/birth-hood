import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaBandSection',
  title: 'Call-to-action band',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text', rows: 2 }),
    defineField({ name: 'ctaLabel', title: 'Button label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'Button link', type: 'string' }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: { list: ['light', 'pink', 'dark'] },
      initialValue: 'pink',
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'CTA', subtitle: 'CTA band' }),
  },
})
