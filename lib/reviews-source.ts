import { reviews as staticReviews, type Review } from '@/lib/reviews'
import { getReviews } from '@/lib/sanity-queries'

/**
 * Reviews, preferring Sanity and falling back to the set committed in
 * lib/reviews.ts, so the Reviews page is never empty.
 */
export async function loadReviews(): Promise<Review[]> {
  const cms = await getReviews()
  if (cms.length === 0) return staticReviews
  return cms.map((r) => ({
    name: r.name,
    service: r.service,
    when: r.when ?? '',
    text: r.text,
  }))
}
