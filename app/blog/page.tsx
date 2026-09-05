import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client, blogPostsQuery, isSanityConfigured, urlFor } from '@/lib/sanity'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Birth, Hypnobirthing & Doula Blog',
  description:
    'Honest articles on hypnobirthing, doula support, birth physiology and the postnatal period, from Leanne at birth-hood in Leicestershire.',
}

// Refresh every 60 seconds
export const revalidate = 60

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  category?: string
  estimatedReadingTime?: number
  coverImage?: string
  coverAlt?: string
  /** Sanity image object — resolved to a URL below. */
  mainImage?: { alt?: string } | null
}

// Brand palette only — the previous set drifted into plum, green and slate.
const CATEGORY_COLORS: Record<string, string> = {
  hypnobirthing: 'var(--pink)',
  doula: 'var(--black)',
  'birth-trauma': 'var(--pink-deep)',
  yoga: 'var(--pink)',
  'birth-rights': 'var(--charcoal)',
  postnatal: 'var(--pink-deep)',
  general: 'var(--grey-mid)',
}

// Posts carried over from the old Wix site — shown until Sanity has posts of its own.
const FALLBACK_POSTS: Post[] = blogPosts.map((p) => ({
  _id: p.slug,
  title: p.title,
  slug: { current: p.slug },
  publishedAt: p.publishedAt,
  excerpt: p.excerpt,
  category: p.category,
  estimatedReadingTime: p.readingTime,
  coverImage: p.coverImage,
  coverAlt: p.coverAlt,
}))

export default async function BlogPage() {
  let posts: Post[] = []
  try {
    if (isSanityConfigured && client) {
      posts = await client.fetch<Post[]>(blogPostsQuery)
    }
  } catch {
    // CMS not configured yet — fall back to the migrated posts
  }

  // Sanity posts carry a mainImage object; the committed ones carry a path.
  // Normalise to coverImage so the card markup does not care which it got.
  const displayPosts: Post[] = posts.length > 0
    ? posts.map((p) => ({
        ...p,
        coverImage: p.mainImage ? urlFor(p.mainImage).width(900).height(600).fit('crop').url() : undefined,
        coverAlt: p.mainImage?.alt ?? '',
      }))
    : FALLBACK_POSTS

  return (
    <>
      <CmsPageHero
        page="blog"
        title={<>The <em>Blog</em></>}
        subtitle="Articles, tips and real talk on birth, hypnobirthing, doula support and everything in between."
        img1={{ src: '/images/private-session-102.jpg', alt: 'Private session' }}
        img2={{ src: '/images/leanne-ball-121.jpg', alt: 'Birth ball' }}
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          {/* Posts grid */}
          <div className="grid-3" style={{ gap: '2rem' }}>
            {displayPosts.map((post, i) => {
              const href = post.slug.current === '#' ? '#' : `/blog/${post.slug.current}`
              const catColor = CATEGORY_COLORS[post.category ?? 'general'] ?? 'var(--grey-mid)'
              const date = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
                : ''
              return (
                <article key={post._id} className={`reveal reveal-d${(i % 3) + 1}`} style={{ borderTop: `3px solid ${catColor}`, padding: '0 0 2rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  {post.coverImage && (
                    <Link href={href} style={{ display: 'block', position: 'relative', width: '100%', aspectRatio: '3 / 2', marginTop: '1.5rem', overflow: 'hidden', borderRadius: '2px', background: 'var(--pink-ultra)' }}>
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt || ''}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>
                  )}

                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', margin: '1.5rem 0 1rem' }}>
                    {post.category && (
                      <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: catColor }}>
                        {post.category.replace(/-/g, ' ')}
                      </span>
                    )}
                    {post.estimatedReadingTime && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--grey-light)' }}>{post.estimatedReadingTime} min read</span>
                    )}
                  </div>

                  <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.25, marginBottom: '0.8rem' }}>
                    <Link href={href} style={{ textDecoration: 'none', color: 'var(--black)', transition: 'color 0.3s' }}>
                      {post.title}
                    </Link>
                  </h2>

                  {post.excerpt && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.75, marginBottom: '1.2rem' }}>
                      {post.excerpt}
                    </p>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <Link href={href} style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--black)', textDecoration: 'none', borderBottom: '1.5px solid var(--pink)', paddingBottom: '2px' }}>
                      Read more →
                    </Link>
                    {date && <span style={{ fontSize: '0.72rem', color: 'var(--grey-light)', fontWeight: 300 }}>{date}</span>}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <div className="cta-band reveal">
        <h2>Want personalised advice? <em style={{ fontStyle: 'italic' }}>Book a chat.</em></h2>
        <p>A free 20-minute consultation with me — no obligation, just a helpful conversation.</p>
        <a href="https://calendly.com/birthhood/free-consultation" target="_blank" rel="noopener noreferrer" className="btn-dark">Book Free Consultation</a>
      </div>
    </>
  )
}
