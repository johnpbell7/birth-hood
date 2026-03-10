import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'freebie',
  title: 'Free Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emoji',
      title: 'Emoji',
      type: 'string',
      description: 'Single emoji for the card icon (e.g. 💫, 📋)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'PDF Download', value: 'pdf' },
          { title: 'Audio', value: 'audio' },
          { title: 'External Link', value: 'external' },
        ],
      },
    }),
    defineField({
      name: 'downloadFile',
      title: 'File (for PDF/audio)',
      type: 'file',
      options: { accept: '.pdf,.mp3,.m4a' },
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL (if not a file)',
      type: 'url',
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Download Free',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          { title: 'Pink', value: 'pink' },
          { title: 'Black', value: 'black' },
        ],
      },
      initialValue: 'pink',
    }),
  ],
})
