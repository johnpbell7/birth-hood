export type InstagramPost = {
  id: string
  permalink: string
  /** Behold's own CDN copy — Instagram's URLs expire, these don't. */
  imageUrl: string
  alt: string
  isVideo: boolean
}

type BeholdSize = { width: number; height: number; mediaUrl: string }

type BeholdPost = {
  id: string
  permalink: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  mediaUrl?: string
  thumbnailUrl?: string
  prunedCaption?: string
  caption?: string
  sizes?: Partial<Record<'small' | 'medium' | 'large' | 'full', BeholdSize>>
}

/**
 * The Instagram grid on the home page.
 *
 * Behold (behold.so) holds the Instagram connection and refreshes the access
 * token itself, so there is nothing here to renew — the feed URL is public and
 * read-only. Set NEXT_PUBLIC_INSTAGRAM_FEED_URL to change or disable it; with
 * no URL the section falls back to a plain follow panel.
 */
const FEED_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_FEED_URL ??
  'https://feeds.behold.so/W7LaZf9bkOzIAS3Dj7yD'

/** Prefer a size big enough for the tile without pulling the 2000px original. */
function pickImage(post: BeholdPost): string | null {
  const sized = post.sizes?.large ?? post.sizes?.medium ?? post.sizes?.full ?? post.sizes?.small
  if (sized?.mediaUrl) return sized.mediaUrl
  // Videos have no image in `sizes` on some feeds; the thumbnail is the still.
  if (post.mediaType === 'VIDEO') return post.thumbnailUrl ?? null
  return post.mediaUrl ?? null
}

export async function getInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  if (!FEED_URL) return []

  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 1800 } })
    if (!res.ok) return []

    const data = (await res.json()) as { posts?: BeholdPost[] }
    return (data.posts ?? [])
      .map((post) => {
        const imageUrl = pickImage(post)
        if (!imageUrl) return null
        const caption = (post.prunedCaption ?? post.caption ?? '').trim()
        return {
          id: post.id,
          permalink: post.permalink,
          imageUrl,
          // First line of the caption makes a reasonable description.
          alt: caption ? caption.split('\n')[0].slice(0, 120) : '@birthhooduk on Instagram',
          isVideo: post.mediaType === 'VIDEO',
        }
      })
      .filter((p): p is InstagramPost => p !== null)
      .slice(0, limit)
  } catch {
    // A quiet fallback beats a broken home page if Behold is unreachable.
    return []
  }
}
