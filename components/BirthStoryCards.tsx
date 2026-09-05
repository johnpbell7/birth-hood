import Link from 'next/link'
import type { BirthStory } from '@/lib/birth-stories'

/**
 * Grid of birth story cards. Used on the Reviews page and on /birth-stories.
 * Each card links through to the full story.
 */
export default function BirthStoryCards({ stories }: { stories: BirthStory[] }) {
  return (
    <div className="grid-3" style={{ gap: '1.5rem' }}>
      {stories.map((story, i) => (
        <Link
          key={story.slug}
          href={`/birth-stories/${story.slug}`}
          className={`card reveal reveal-d${(i % 3) + 1}`}
          style={{
            padding: '1.6rem 1.7rem',
            borderTop: '3px solid var(--pink)',
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
          }}
        >
          <div
            style={{
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--pink-deep)',
            }}
          >
            {story.type}
          </div>

          <h3
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'var(--black)',
              lineHeight: 1.3,
            }}
          >
            {story.title}
          </h3>

          <p
            style={{
              color: 'var(--grey-mid)',
              fontSize: '0.87rem',
              lineHeight: 1.7,
              fontWeight: 300,
              margin: 0,
            }}
          >
            {story.excerpt}
          </p>

          <span
            style={{
              marginTop: 'auto',
              paddingTop: '0.5rem',
              fontSize: '0.72rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--black)',
            }}
          >
            Read {story.title.split("'")[0]}&apos;s story →
          </span>
        </Link>
      ))}
    </div>
  )
}
