import type { MetadataRoute } from 'next'
import { birthStories } from '@/lib/birth-stories'
import { blogPosts } from '@/lib/blog-posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

// Public, indexable routes (studio + gated hub are excluded — see robots.ts)
const routes = [
  '', 'hypnobirthing', 'yoga', 'doula', 'birth-doula', 'postnatal-doula',
  'overnight-doula', 'virtual-doula', 'doula-feedback', 'birth-trauma', 'meet-leanne',
  'course-info', 'session-outlines', 'booking', 'contact',
  'faq', 'reviews', 'podcast', 'links', 'terms', 'freebies', 'shop', 'blog',
  'birth-stories',
  ...birthStories.map((s) => `birth-stories/${s.slug}`),
  ...blogPosts.map((p) => `blog/${p.slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified is intentionally omitted for these static pages: stamping every
  // route with the build date marks the whole site "modified today" on each
  // deploy, which is misleading. Google falls back to its own crawl signals.
  return routes.map((r) => ({
    url: `${SITE_URL}${r ? `/${r}` : ''}`,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }))
}
