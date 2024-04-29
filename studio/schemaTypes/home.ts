import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'


export default defineType({
    name: 'home',
    title: 'Home    ',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            readOnly: true,
            initialValue: 'Home'
        }),
        defineField({
            name: 'section',
            title: 'Sections',
            type: 'array',
            of: [
                { type: 'hero' }
            ]
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: false,
        })
        // defineField({
        //     name: 'section',
        //     title: 'Sections',
        //     type: 'array',

        // }),

    ],

})