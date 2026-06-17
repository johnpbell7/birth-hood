import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Studio is the CMS; hub is a gated client area — keep both out of search
      disallow: ['/studio', '/hub'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
