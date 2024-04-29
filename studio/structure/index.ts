
import type { StructureResolver } from 'sanity/structure'
import { HomeIcon } from '@sanity/icons'
import {
    singletonDocumentListItem,
    singletonDocumentListItems,
    filteredDocumentListItems,
} from 'sanity-plugin-singleton-tools';

export const structure: StructureResolver = (S, context) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            singletonDocumentListItem({
                S,
                context,
                // Schema type
                type: 'home',
                // Required for showing multiple singletons of the same schema type
                title: 'Home',
                // Required for showing multiple singletons of the same schema type
                id: 'home',
                // Specify a custom icon
                icon: HomeIcon,
            }),
            S.divider()

        ])
