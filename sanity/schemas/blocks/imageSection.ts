import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageSection',
  title: 'Single image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
      validation: (R) => R.required(),
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      options: { list: ['full', 'wide', 'narrow'] },
      initialValue: 'wide',
    }),
  ],
  preview: {
    select: { title: 'caption', media: 'image' },
    prepare: ({ title, media }) => ({ title: title || 'Image', subtitle: 'Image', media }),
  },
})
