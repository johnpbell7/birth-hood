import { birthStories as staticStories, type BirthStory } from '@/lib/birth-stories'
import { getBirthStories } from '@/lib/sanity-queries'

/**
 * Birth stories, preferring Sanity and falling back to the versions committed
 * in lib/birth-stories.ts.
 *
 * The fallback is deliberate: the site must render its stories whether or not
 * the CMS is reachable or populated. Once Leanne has stories in the Studio,
 * those win and the committed copies stop being used.
 */
export async function loadBirthStories(): Promise<BirthStory[]> {
  const cms = await getBirthStories()
  if (cms.length === 0) return staticStories

  return cms.map((s) => ({
    slug: s.slug,
    title: s.title,
    type: s.type,
    baby: s.baby ?? '',
    place: s.place ?? '',
    excerpt: s.excerpt,
    pullQuote: s.pullQuote ?? '',
    // Portable Text -> plain paragraphs, which is all a story body needs.
    body: (s.body ?? [])
      .map((b) => (b.children ?? []).map((c) => c.text ?? '').join(''))
      .filter((t) => t.trim().length > 0),
  }))
}

export async function loadBirthStory(slug: string): Promise<BirthStory | undefined> {
  return (await loadBirthStories()).find((s) => s.slug === slug)
}
