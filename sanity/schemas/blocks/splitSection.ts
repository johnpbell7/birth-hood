import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'splitSection',
  title: 'Image + text',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }] }],
    }),
    defineField({
      name: 'bullets',
      title: 'Bullet list (optional)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'ctaLabel', title: 'Button label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'Button link', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    }),
    defineField({
      name: 'imageSide',
      title: 'Image side',
      type: 'string',
      options: { list: ['left', 'right'] },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: { title: 'heading', media: 'image' },
    prepare: ({ title, media }) => ({ title: title || 'Image + text', subtitle: 'Image + text', media }),
  },
})
