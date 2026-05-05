import { defineType, defineField } from 'sanity'
import { blockReferences } from './blocks'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'The URL path. e.g. "meet-leanne" → /meet-leanne',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO title',
      type: 'string',
      description: 'Shown in browser tabs and Google results. Defaults to Title if blank.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO description',
      type: 'text',
      rows: 2,
      description: 'Shown under the page title in Google results.',
      validation: (R) => R.max(160),
    }),
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      description: 'Build the page by adding sections. Drag to reorder.',
      of: blockReferences,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare: ({ title, subtitle }) => ({ title, subtitle: subtitle ? `/${subtitle}` : 'No slug' }),
  },
})
