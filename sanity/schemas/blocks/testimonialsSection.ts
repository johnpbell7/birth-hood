import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialsSection',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (R) => R.required() },
            { name: 'attribution', title: 'Attribution (e.g. "Client · Leicestershire")', type: 'string' },
            {
              name: 'rating',
              title: 'Star rating',
              type: 'number',
              options: { list: [1, 2, 3, 4, 5] },
              initialValue: 5,
            },
          ],
          preview: { select: { title: 'attribution', subtitle: 'quote' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'Testimonials', subtitle: 'Testimonials' }),
  },
})
