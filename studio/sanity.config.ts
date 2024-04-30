import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'

import { documentInternationalization, DeleteTranslationAction } from '@sanity/document-internationalization'


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
      { id: 'de', title: 'German' },
      { id: 'en', title: 'English' }
    ],
    schemaTypes: ['home', 'blog'],
  })
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter((template) => !['home', 'blog'].includes(template.id)),
  },
  document: {
    actions: (prev, { schemaType }) => {
      // Add to the same schema types you use for internationalization
      if (['home'].includes(schemaType)) {
        // You might also like to filter out the built-in "delete" action
        return [...prev, DeleteTranslationAction]
      }

      return prev
    },
  },
})
