import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'

import { documentInternationalization } from '@sanity/document-internationalization'


export default defineConfig({
  name: 'default',
  title: 'astro-sanity',

  projectId: 't9cmnozc',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool(),
  documentInternationalization({
    // Required configuration
    supportedLanguages: [
      { id: 'fr', title: 'French' },
      { id: 'de', title: 'Deutsch' },
      { id: 'en', title: 'English' }
    ],
    schemaTypes: ['home'],
  })
  ],

  schema: {
    types: schemaTypes,
  },
})
