import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'courseDatesSection',
  title: 'Course dates',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 2 }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'course',
          fields: [
            { name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() },
            { name: 'dates', title: 'Dates', type: 'string' },
            { name: 'format', title: 'Format', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'availability', title: 'Availability', type: 'string' },
            { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
            { name: 'ctaLabel', title: 'Button label', type: 'string', initialValue: 'Book Now' },
            { name: 'ctaHref', title: 'Button link', type: 'url' },
          ],
          preview: { select: { title: 'name', subtitle: 'dates' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare: ({ title }) => ({ title: title || 'Course dates', subtitle: 'Course dates section' }),
  },
})
