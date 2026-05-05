import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page').title('Pages')),
      S.divider(),
      S.listItem()
        .title('Hub Library')
        .child(S.documentTypeList('hubResource').title('Hub Library')),
      S.listItem()
        .title('Freebies')
        .child(S.documentTypeList('freebie').title('Freebies')),
      S.divider(),
      S.listItem()
        .title('Blog Posts')
        .child(S.documentTypeList('blogPost').title('Blog Posts')),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
    ])
