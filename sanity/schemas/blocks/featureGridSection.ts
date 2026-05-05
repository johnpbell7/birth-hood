import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'featureGridSection',
  title: 'Feature grid',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text', rows: 2 }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'href', title: 'Link (optional)', type: 'string' },
            { name: 'linkLabel', title: 'Link label (optional)', type: 'string', initialValue: 'LEARN MORE' },
            {
              name: 'image',
              title: 'Image (optional)',
              type: 'image',
              options: { hotspot: true },
              fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description', media: 'image' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'Feature grid', subtitle: 'Feature grid' }),
  },
})
