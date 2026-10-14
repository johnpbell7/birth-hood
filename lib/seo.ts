import type { Metadata } from 'next'

/** The share picture used until a page has its own. */
export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'birth-hood — hypnobirthing, doula & prenatal yoga',
}

type PageSeo = {
  /** The page's own address, starting with a slash, e.g. '/birth-doula'. */
  path: string
  title: string
  description: string
  /** 'article' for blog posts and birth stories. */
  ogType?: 'website' | 'article'
}

/**
 * Title, description, canonical address and share preview for one page.
 *
 * Next.js replaces the parent's whole `openGraph` object when a page sets its
 * own, so the site-wide picture is repeated here: without `images` the share
 * picture would vanish from that page.
 */
export function pageMetadata({ path, title, description, ogType = 'website' }: PageSeo): Metadata {
  const share = {
    siteName: 'birth-hood',
    locale: 'en_GB',
    title: `${title} | birth-hood`,
    description,
    url: path,
    images: [OG_IMAGE],
  }
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: ogType === 'article' ? { type: 'article', ...share } : { type: 'website', ...share },
  }
}
