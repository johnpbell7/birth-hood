import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hubResource',
  title: 'Hub Resource',
  type: 'document',
  description: 'Items shown in the password-protected Client Hub.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'type',
      title: 'Resource type',
      type: 'string',
      options: {
        list: [
          { title: 'Document (PDF/DOCX)', value: 'pdf' },
          { title: 'Audio (MP3)', value: 'audio' },
          { title: 'Video', value: 'video' },
          { title: 'External link', value: 'external' },
        ],
        layout: 'radio',
      },
      description: 'Determines which section of the Hub it appears in.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'subgroup',
      title: 'Subgroup',
      type: 'string',
      description:
        'Optional. Items with the same subgroup are grouped together in the Hub. ' +
        'Examples: "Hypnobirthing essentials" for documents, or "TBU MP3 No Swearing" for an audio album.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Shown for videos and external sites. Optional for PDFs.',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: { accept: '.pdf,.docx,.mp3,.m4a,.wav,.mp4,.mov' },
      description: 'Upload the PDF, DOCX, MP3 or video file.',
      hidden: ({ parent }) =>
        parent?.type !== 'pdf' && parent?.type !== 'audio' && parent?.type !== 'video',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (alternative to file upload)',
      type: 'url',
      description: 'YouTube, Vimeo or direct video URL — leave blank if you uploaded a file.',
      hidden: ({ parent }) => parent?.type !== 'video',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL (or alternative to file upload)',
      type: 'url',
      description:
        'For "External link" type this is required. For PDF/audio you can use this as ' +
        'an alternative to uploading a file (e.g. linking to a file hosted elsewhere).',
      hidden: ({ parent }) => parent?.type === 'video',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (audio)',
      type: 'string',
      description: 'e.g. "50:33" — shown next to audio tracks.',
      hidden: ({ parent }) => parent?.type !== 'audio',
    }),
    defineField({
      name: 'logoLetter',
      title: 'Logo letters',
      type: 'string',
      description: '2 letters shown on the logo tile for external sites (e.g. "SW" for Sara Wickham).',
      validation: (R) => R.max(3),
      hidden: ({ parent }) => parent?.type !== 'external',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first within their group.',
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
    select: { title: 'title', type: 'type', subgroup: 'subgroup' },
    prepare: ({ title, type, subgroup }) => ({
      title,
      subtitle: [type?.toUpperCase(), subgroup].filter(Boolean).join(' · '),
    }),
  },
})
