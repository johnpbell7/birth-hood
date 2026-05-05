import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'videoSection',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading (optional)', type: 'string' }),
    defineField({ name: 'caption', title: 'Caption (optional)', type: 'string' }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo or direct video URL',
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'url' },
    prepare: ({ title, subtitle }) => ({ title: title || 'Video', subtitle }),
  },
})
