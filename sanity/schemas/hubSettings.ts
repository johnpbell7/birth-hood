import { defineType, defineField } from 'sanity'

// The Client Hub password, edited in the Studio. It lives in the document "secrets.hubSettings": Sanity never
// shows documents with a dot in their id to the public, so only people signed in to the Studio and the
// website's server (with its Sanity read key) can see it. See lib/hub-password.ts.
export default defineType({
  name: 'hubSettings',
  title: 'Client Hub password',
  type: 'document',
  fields: [
    defineField({
      name: 'password',
      title: 'Client Hub password',
      type: 'string',
      description:
        'What your clients type to open the Client Hub (birth-hood.co.uk/hub). Change it here and press Publish: ' +
        'the new one works straight away and the old one stops working, so let your clients know.',
      validation: (R) => R.required().min(4).error('Use at least 4 characters'),
    }),
  ],
  preview: { prepare: () => ({ title: 'Client Hub password' }) },
})
