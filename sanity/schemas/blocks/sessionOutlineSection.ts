import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sessionOutlineSection',
  title: 'Session outline',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 2 }),
    defineField({
      name: 'sessions',
      title: 'Sessions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'session',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            {
              name: 'topics',
              title: 'Topics',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
    }),
    defineField({ name: 'note', title: 'Note', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'Session outline', subtitle: 'Session outline section' }),
  },
})
