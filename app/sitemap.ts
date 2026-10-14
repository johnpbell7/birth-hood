import type { MetadataRoute } from 'next'
import { birthStories } from '@/lib/birth-stories'
import { blogPosts } from '@/lib/blog-posts'
import { loadBirthStories } from '@/lib/birth-stories-source'
import { client, blogPostsQuery, isSanityConfigured } from '@/lib/sanity'
import { getAllPageSlugs, getPage } from '@/lib/sanity-queries'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

// Rebuilt hourly so pages added in the Studio appear without a new deploy.
export const revalidate = 3600

// Public, indexable routes (studio + gated hub are excluded — see robots.ts)
const routes = [
  '', 'hypnobirthing', 'yoga', 'doula', 'birth-doula', 'postnatal-doula',
  'overnight-doula', 'virtual-doula', 'birth-trauma', 'meet-leanne',
  'course-info', 'session-outlines', 'booking', 'contact',
  'faq', 'find-your-package', 'reviews', 'podcast', 'links', 'terms',
  'freebies', 'shop', 'blog', 'birth-stories',
  ...birthStories.map((s) => `birth-stories/${s.slug}`),
  ...blogPosts.map((p) => `blog/${p.slug}`),
]

/** Slugs the Studio has added on top of the committed pages, so a new story, post or page is listed without a code change. */
async function studioRoutes(): Promise<string[]> {
  const extra: string[] = []
  try {
    const stories = await loadBirthStories()
    extra.push(...stories.map((s) => `birth-stories/${s.slug}`))
  } catch {}
  try {
    if (isSanityConfigured && client) {
      const posts = await client.fetch<{ slug?: { current?: string } }[]>(blogPostsQuery)
      extra.push(...posts.flatMap((p) => (p.slug?.current ? [`blog/${p.slug.current}`] : [])))
    }
  } catch {}
  try {
    // A Studio page only exists on the site once it has sections (otherwise it is a 404).
    for (const slug of await getAllPageSlugs()) {
      if (slug === 'home') continue
      const page = await getPage(slug)
      if (page?.sections?.length) extra.push(slug)
    }
  } catch {}
  return extra
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const all = Array.from(new Set([...routes, ...(await studioRoutes())]))
  // lastModified is intentionally omitted for these static pages: stamping every
  // route with the build date marks the whole site "modified today" on each
  // deploy, which is misleading. Google falls back to its own crawl signals.
  return all.map((r) => ({
    url: `${SITE_URL}${r ? `/${r}` : ''}`,
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.7,
  }))
}
