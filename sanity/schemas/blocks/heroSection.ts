import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow text (small label above heading)', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text', rows: 3 }),
    defineField({
      name: 'ctaLabel',
      title: 'Button label',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Button link',
      type: 'string',
      description: 'Internal path like /booking or full URL like https://...',
    }),
    defineField({
      name: 'image',
      title: 'Hero image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'subheading', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({
      title: title || 'Hero (no heading)',
      subtitle: subtitle ? `Hero · ${subtitle.slice(0, 60)}` : 'Hero section',
      media,
    }),
  },
})
