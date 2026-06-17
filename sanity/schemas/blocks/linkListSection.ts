import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'linkListSection',
  title: 'Link list',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 2 }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'linkItem',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (R) => R.required() },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
          ],
          preview: { select: { title: 'label', subtitle: 'url' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'Link list', subtitle: 'Link list section' }),
  },
})
