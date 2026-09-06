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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'files',
      title: 'Files the buyer downloads',
      type: 'array',
      description:
        'Upload the actual PDFs, MP3s and so on here. Add as many as you like — each one is emailed as its own download link, so a set of MP3s does not need zipping. For a BUNDLE, leave this empty and use the box below instead.',
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
      title: 'What is in this bundle',
      type: 'array',
      hidden: ({ document }) => document?.kind !== 'bundle',
      description:
        'Tick the individual resources this bundle is made of — pick them from the list, no typing. Their files are sent to the buyer automatically, so you never upload the same MP3 or PDF twice. The buyer sees this list on the shop card.',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    defineField({
      name: 'file',
      title: 'Download file (old single-file field)',
      type: 'file',
      options: { accept: '.pdf,.docx,.mp3,.m4a,.wav,.mp4,.mov,.zip,.epub' },
      description: 'Older products used this. New ones should use "Download files" above.',
      hidden: ({ document }) => !document?.file,
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 3,
      description:
        'The selling line shown on the shop card, e.g. "Your no-BS guide to preparing for birth, whatever your birth looks like." For a bundle you do NOT need to list what is inside — that list builds itself from the box below.',
    }),
    defineField({
      name: 'price',
      title: 'Price (£)',
      type: 'number',
      description: 'Price in pounds, e.g. 12.50. Buyers are charged this amount.',
      validation: (R) => R.required().min(0.5).precision(2),
    }),
    defineField({
      name: 'image',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional. A cover/preview image for the product card.',
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
      name: 'sku',
      title: 'SKU (optional)',
      type: 'string',
      description:
        'Just a reference code for your own records, e.g. BH-BIRTHPREP or BH-BUNDLE-HYPNO. Buyers never see it, and you can leave it blank.',
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
