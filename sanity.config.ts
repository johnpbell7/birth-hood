import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'
import { structure } from './sanity/structure'
import { birthHoodTheme } from './sanity/theme'

export default defineConfig({
  name: 'birth-hood',
  title: 'birth-hood CMS',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'your_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  theme: birthHoodTheme,

  plugins: [
    structureTool({ structure }),
  ],

  schema: {
    types: schemaTypes,
  },
})
