import { createElement } from 'react'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'
import { structure } from './sanity/structure'
import { birthHoodTheme } from './sanity/theme'

export default defineConfig({
  name: 'birth-hood',
  title: 'birth-hood CMS',
  // the birth-hood logo in the Studio's top-left corner (the site's own copy, so nothing extra to upload)
  icon: () => createElement('img', { src: '/images/logo.jpg', alt: '', style: { width: '100%', height: '100%', objectFit: 'cover', background: '#fff' } }),
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'your_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  theme: birthHoodTheme,

  plugins: [
    structureTool({ structure }),
  ],

  schema: {
    types: schemaTypes,
    // the Hub Password is a single entry (in the menu), never a new document
    templates: (prev) => prev.filter((t) => t.schemaType !== 'hubSettings'),
  },
})
