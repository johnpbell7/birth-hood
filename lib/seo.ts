import type { Metadata } from 'next'

/** The share picture used until a page has its own. */
export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'birth-hood — hypnobirthing, doula & prenatal yoga',
}

type ShareImage = { url: string; width: number; height: number; alt: string }

/**
 * Each main page's own share picture (1200 x 630, made with the studio's
 * Share images builder). Pages not listed here use OG_IMAGE.
 */
const shareJpg = (file: string, alt: string): ShareImage => ({ url: `/share/${file}.jpg`, width: 1200, height: 630, alt })

const hypnobirthing = shareJpg('hypnobirthing', 'Hypnobirthing with Leanne at birth-hood: evidence-based courses in Leicestershire and online')
const doula = shareJpg('doula', 'Doula support with Leanne at birth-hood: before, during and after birth')

const SHARE_IMAGES: Record<string, ShareImage> = {
  '/': shareJpg('home', 'Welcome to birth-hood: hypnobirthing, doula support and yoga with Leanne'),
  '/hypnobirthing': hypnobirthing,
  '/course-info': hypnobirthing,
  '/session-outlines': hypnobirthing,
  '/doula': doula,
  '/birth-doula': doula,
  '/postnatal-doula': doula,
  '/overnight-doula': doula,
  '/virtual-doula': doula,
  '/find-your-package': doula,
  '/yoga': shareJpg('yoga', 'Pregnancy and baby yoga with Leanne at birth-hood in NW Leicestershire'),
  '/birth-trauma': shareJpg('birth-trauma', 'Gentle birth trauma support and 3 Step Rewind with Leanne at birth-hood'),
  '/meet-leanne': shareJpg('meet-leanne', 'Meet Leanne: birth doula, hypnobirthing teacher and pregnancy yoga teacher'),
  '/reviews': shareJpg('reviews', 'birth-hood reviews: rated 5.0 on Google'),
  '/shop': shareJpg('shop', 'The birth-hood shop: birth guides, relaxation audio and 1-2-1 sessions'),
  '/blog': shareJpg('blog', 'The birth-hood blog: honest articles on hypnobirthing, doula support and birth'),
  '/birth-stories': shareJpg('birth-stories', 'Real birth stories from birth-hood clients, in their own words'),
  '/freebies': shareJpg('freebies', 'Free birth resources from birth-hood: affirmations, a newborn checklist and a relaxation MP3'),
  '/faq': shareJpg('faq', 'Questions about hypnobirthing, doula support and yoga, answered by Leanne at birth-hood'),
  '/contact': shareJpg('contact', 'Get in touch with Leanne at birth-hood'),
  '/podcast': shareJpg('podcast', 'Dou-La-La, the birthy podcast from two doulas'),
}

/** The share picture for a page: its own if it has one, otherwise the site-wide picture. */
export function shareImageFor(path: string): ShareImage {
  return SHARE_IMAGES[path] ?? OG_IMAGE
}

type PageSeo = {
  /** The page's own address, starting with a slash, e.g. '/birth-doula'. */
  path: string
  title: string
  description: string
  /** 'article' for blog posts and birth stories. */
  ogType?: 'website' | 'article'
  /** A picture for this page alone (e.g. a blog post's own main image). Overrides the page's default share picture. */
  image?: ShareImage
  /** Keep the page out of search results but let Google follow its links. */
  noindex?: boolean
}

/**
 * Title, description, canonical address and share preview for one page.
 *
 * Next.js replaces the parent's whole `openGraph` object when a page sets its
 * own, so the site-wide picture is repeated here: without `images` the share
 * picture would vanish from that page.
 */
export function pageMetadata({ path, title, description, ogType = 'website', image, noindex }: PageSeo): Metadata {
  const picture = image ?? shareImageFor(path)
  const share = {
    siteName: 'birth-hood',
    locale: 'en_GB',
    title: `${title} | birth-hood`,
    description,
    url: path,
    images: [picture],
  }
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    twitter: { card: 'summary_large_image', title: share.title, description, images: [picture] },
    openGraph: ogType === 'article' ? { type: 'article', ...share } : { type: 'website', ...share },
  }
}
