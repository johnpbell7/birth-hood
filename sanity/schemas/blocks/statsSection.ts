import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Stats grid',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading (optional)', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            { name: 'value', title: 'Value (e.g. "25%")', type: 'string', validation: (R) => R.required() },
            { name: 'label', title: 'Label', type: 'string', validation: (R) => R.required() },
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'Stats grid', subtitle: 'Stats section' }),
  },
})
