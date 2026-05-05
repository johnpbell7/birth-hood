import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  description: 'Global settings that appear across the whole site.',
  fields: [
    defineField({ name: 'siteName', title: 'Site name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone number',
      type: 'string',
    }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'tiktok', title: 'TikTok URL', type: 'url' },
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'marqueeWords',
      title: 'Scrolling marquee words',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short labels shown in the scrolling strip across the site.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
