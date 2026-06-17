import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

// Public, indexable routes (studio + gated hub are excluded — see robots.ts)
const routes = [
  '', 'hypnobirthing', 'yoga', 'doula', 'birth-doula', 'postnatal-doula',
  'virtual-doula', 'doula-feedback', 'birth-trauma', 'meet-leanne',
  'masterclass', 'course-info', 'session-outlines', 'booking', 'contact',
  'faq', 'reviews', 'podcast', 'links', 'terms', 'freebies', 'blog',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((r) => ({
    url: `${SITE_URL}${r ? `/${r}` : ''}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }))
}
