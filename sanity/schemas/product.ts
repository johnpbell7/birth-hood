import { defineType, defineField } from 'sanity'

// A downloadable resource sold on the /shop page. Buyers pay per item via
// Stripe; on payment they're emailed secure download links.
export default defineType({
  name: 'product',
  title: 'Paid Resource (Shop)',
  type: 'document',
  description: 'A downloadable resource sold on the Shop page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 3,
      description: 'Shown on the product card in the shop.',
    }),
    defineField({
      name: 'image',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional. A cover/preview image for the product card.',
    }),
    defineField({
      name: 'price',
      title: 'Price (£)',
      type: 'number',
      description: 'Price in pounds, e.g. 12.50. Buyers are charged this amount.',
      validation: (R) => R.required().min(0.5).precision(2),
    }),
    defineField({
      name: 'file',
      title: 'Download file',
      type: 'file',
      options: { accept: '.pdf,.docx,.mp3,.m4a,.wav,.mp4,.mov,.zip,.epub' },
      description: 'The file the buyer receives after payment (PDF, MP3, ZIP, etc.).',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'active',
      title: 'Show in shop',
      type: 'boolean',
      description: 'Uncheck to hide this product without deleting it.',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'Order (default)',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', price: 'price', media: 'image', active: 'active' },
    prepare: ({ title, price, media, active }) => ({
      title,
      subtitle: `${active === false ? '(hidden) ' : ''}£${(price ?? 0).toFixed(2)}`,
      media,
    }),
  },
})
