import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Hypnobirthing', value: 'hypnobirthing' },
          { title: 'Doula Support', value: 'doula' },
          { title: 'Birth Trauma', value: 'birth-trauma' },
          { title: 'Prenatal Yoga', value: 'yoga' },
          { title: 'Birth Rights', value: 'birth-rights' },
          { title: 'Postnatal', value: 'postnatal' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO title',
      type: 'string',
      description: 'Shown in browser tabs and Google results. Leave blank to use the post title.',
      validation: (R) => R.max(60).warning('Google shows about 60 characters'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO description',
      type: 'text',
      rows: 2,
      description: 'Shown under the title in Google results and when the link is shared. Leave blank to use the built-in one, or the excerpt.',
      validation: (R) => R.max(160).warning('Google shows about 155 characters'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt text', type: 'string' },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
})
