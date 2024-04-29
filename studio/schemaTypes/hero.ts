import { defineField, defineType } from "sanity";
import { LemonIcon } from '@sanity/icons'
export default defineType({
    name: "hero",
    title: "Hero",
    type: "object",
    icon: LemonIcon,
    fields: [
        defineField({
            name: "title",
            title: 'Title',
            type: "string"
        }),
        defineField({
            name: 'text',
            title: "Text",
            type: "text"
        })
    ],
    preview: {
        select: {
            title: 'title',

        }
    }
})