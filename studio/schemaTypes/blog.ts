import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'


export default defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Image caption',
                            description: 'Caption displayed below the image.',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for SEO and accessiblity.',
                        },
                    ],
                },
            ],
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