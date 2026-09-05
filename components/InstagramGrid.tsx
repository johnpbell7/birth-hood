import Image from 'next/image'
import type { InstagramPost } from '@/lib/instagram'

/** Play triangle on video posts, so a still doesn't read as a photo. */
function PlayBadge() {
  return (
    <span className="insta-video-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M8 5.5v13l11-6.5z" />
      </svg>
    </span>
  )
}

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
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="insta-tile"
        >
          <Image
            src={post.imageUrl}
            alt={post.alt}
            fill
            sizes="(max-width: 900px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          {post.isVideo && <PlayBadge />}
          <div className="insta-tile-overlay">
            <span className="insta-tile-cta">View on Instagram</span>
          </div>
        </a>
      ))}
    </div>
  )
}
