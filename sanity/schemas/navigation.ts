import { defineField, defineType } from 'sanity'

// Main-menu editor. A singleton: one document drives the site's navigation.
// If the items list is empty (or the document doesn't exist), the site falls
// back to its built-in default menu — so this can never break the nav.
export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Menu items',
      type: 'array',
      description:
        'The main menu, in order. Each item is either a simple link (leave sub-links empty) or a dropdown category (add sub-links). Leave the whole list empty to use the built-in default menu. Links are paths like /doula or /overnight-doula.',
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Menu item',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (R) => R.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              description:
                'Where the item itself links, e.g. /doula. For dropdowns this is where clicking the category name goes (optional).',
            },
            {
              name: 'children',
              title: 'Dropdown sub-links',
              type: 'array',
              description: 'Add sub-links to turn this item into a dropdown category.',
              of: [
                {
                  type: 'object',
                  name: 'navChild',
                  title: 'Sub-link',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string', validation: (R) => R.required() },
                    { name: 'href', title: 'Link', type: 'string', validation: (R) => R.required() },
                  ],
                  preview: { select: { title: 'label', subtitle: 'href' } },
                },
              ],
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Main menu' }) },
})
