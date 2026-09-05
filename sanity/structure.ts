import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Page Heroes (top-of-page photos & wording)')
        .child(S.documentTypeList('pageHero').title('Page Heroes')),
      S.divider(),
      S.listItem()
        .title('Hub Library')
        .child(S.documentTypeList('hubResource').title('Hub Library')),
      S.listItem()
        .title('Freebies')
        .child(S.documentTypeList('freebie').title('Freebies')),
      S.listItem()
        .title('Shop — Paid Resources')
        .child(S.documentTypeList('product').title('Shop — Paid Resources')),
      S.divider(),
      S.listItem()
        .title('Blog Posts')
        .child(S.documentTypeList('blogPost').title('Blog Posts')),
      S.listItem()
        .title('Birth Stories')
        .child(S.documentTypeList('birthStory').title('Birth Stories')),
      S.listItem()
        .title('Reviews')
        .child(S.documentTypeList('review').title('Reviews')),
      S.divider(),
      S.listItem()
        .title('Navigation (main menu)')
        .child(
          S.editor()
            .id('navigation')
            .schemaType('navigation')
            .documentId('navigation'),
        ),
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
    ])
