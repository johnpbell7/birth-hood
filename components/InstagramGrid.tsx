import type { InstagramPost } from '@/lib/instagram'

/**
 * The real feed, when INSTAGRAM_ACCESS_TOKEN is set. Until it is, we show a
 * plain follow panel rather than a grid of shoot photos — those aren't
 * Instagram posts and shouldn't be dressed up as them.
 */
export default function InstagramGrid({ posts }: { posts: InstagramPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="insta-empty">
        <p className="insta-empty-text">
          Classes, births, yoga, the odd rant and a lot of babies — it all goes on Instagram first.
        </p>
      </div>
    )
  }

  return (
    <div className="insta-grid-v2">
      {posts.map((post) => {
        const imgSrc = post.media_type === 'VIDEO' ? (post.thumbnail_url ?? '') : post.media_url
        return (
          <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="insta-tile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc} alt={post.caption?.slice(0, 80) ?? '@birthhooduk'} className="insta-tile-img" />
            <div className="insta-tile-overlay">
              <span className="insta-tile-cta">View on Instagram</span>
            </div>
          </a>
        )
      })}
    </div>
  )
}
