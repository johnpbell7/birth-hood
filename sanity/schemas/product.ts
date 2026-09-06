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
      name: 'kind',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Individual resource', value: 'single' },
          { title: 'Bundle', value: 'bundle' },
        ],
        layout: 'radio',
      },
      initialValue: 'single',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Your own reference code, e.g. BH-BIRTHPREP or BH-BUNDLE-HYPNO. Not shown to buyers.',
    }),
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
      name: 'files',
      title: 'Download files',
      type: 'array',
      description:
        'Everything the buyer receives. Add as many as you like — each one is emailed as its own download link, so a set of MP3s does not need zipping.',
      of: [
        {
          type: 'file',
          options: { accept: '.pdf,.docx,.mp3,.m4a,.wav,.mp4,.mov,.zip,.epub' },
          fields: [
            {
              name: 'label',
              title: 'Name shown to the buyer',
              type: 'string',
              description: 'Optional. Defaults to the filename.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'includes',
      title: 'Bundle contains',
      type: 'array',
      hidden: ({ document }) => document?.kind !== 'bundle',
      description:
        'Pick the individual resources this bundle contains. Their files are delivered automatically — there is no need to upload them again here.',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    // Kept so products created before bundles existed keep working.
    defineField({
      name: 'file',
      title: 'Download file (old single-file field)',
      type: 'file',
      options: { accept: '.pdf,.docx,.mp3,.m4a,.wav,.mp4,.mov,.zip,.epub' },
      description: 'Older products used this. New ones should use "Download files" above.',
      hidden: ({ document }) => !document?.file,
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking link',
      type: 'url',
      description:
        'For services that are booked rather than downloaded (e.g. a Power Hour). ' +
        'If set, the card links straight to this URL instead of going through the cart.',
    }),
    defineField({
      name: 'bookingLabel',
      title: 'Booking button text',
      type: 'string',
      description: 'Defaults to "Book now" when a booking link is set.',
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
    select: { title: 'title', price: 'price', media: 'image', active: 'active', kind: 'kind', sku: 'sku' },
    prepare: ({ title, price, media, active, kind, sku }) => ({
      title,
      subtitle: [
        active === false ? '(hidden)' : null,
        kind === 'bundle' ? 'Bundle' : null,
        sku,
        `£${(price ?? 0).toFixed(2)}`,
      ]
        .filter(Boolean)
        .join(' · '),
      media,
    }),
  },
})
