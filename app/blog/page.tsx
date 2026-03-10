import type { Metadata } from 'next'
import Link from 'next/link'
import { client, blogPostsQuery } from '@/lib/sanity'
import MarqueeStrip from '@/components/MarqueeStrip'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles, tips and advice from Leanne at birth-hood on hypnobirthing, doula support, prenatal yoga and positive birth experiences.',
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
}

const CATEGORY_COLORS: Record<string, string> = {
  hypnobirthing: 'var(--pink)',
  doula: 'var(--black)',
  'birth-trauma': '#6b4c7a',
  yoga: '#4a7c5e',
  'birth-rights': '#7a4a4a',
  postnatal: '#4a6a7a',
  general: 'var(--grey-mid)',
}

// Sample posts shown when no CMS posts exist yet
const SAMPLE_POSTS = [
  { _id: '1', title: '10 Things Nobody Tells You About Hypnobirthing', slug: { current: '#' }, publishedAt: '2024-09-01', excerpt: 'Hypnobirthing is often misunderstood. Here are ten things that might surprise you...', category: 'hypnobirthing', estimatedReadingTime: 5 },
  { _id: '2', title: 'What Is Birth Trauma — And Am I Affected?', slug: { current: '#' }, publishedAt: '2024-08-15', excerpt: 'Birth trauma is more common than you might think. Here\'s what it is and how to recognise it...', category: 'birth-trauma', estimatedReadingTime: 7 },
  { _id: '3', title: 'Do I Need a Doula? An Honest Answer', slug: { current: '#' }, publishedAt: '2024-07-20', excerpt: 'The honest answer? Not everyone does. But if you\'re wondering, here\'s how to decide...', category: 'doula', estimatedReadingTime: 4 },
]

export default async function BlogPage() {
  let posts: Post[] = []
  try {
    posts = await client.fetch<Post[]>(blogPostsQuery)
  } catch {
    // CMS not configured yet — show sample posts
  }

  const displayPosts = posts.length > 0 ? posts : SAMPLE_POSTS as Post[]
  const isSample = posts.length === 0

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Thoughts · Advice · Stories</div>
          <h1 className="page-title">The <em>Blog</em></h1>
          <p className="page-subtitle">
            Articles, tips and real talk on birth, hypnobirthing, doula support and everything in between.
          </p>
        </div>
      </section>

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          {isSample && (
            <div style={{ background: 'var(--pink-ultra)', border: '1px solid rgba(232,123,195,0.4)', borderRadius: '3px', padding: '1rem 1.5rem', marginBottom: '3rem', fontSize: '0.85rem', color: 'var(--grey-mid)' }}>
              <strong>CMS not yet connected.</strong> Showing sample posts. Set up Sanity and add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your environment to enable real blog content.
            </div>
          )}

          {/* Categories */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {['All', 'Hypnobirthing', 'Doula', 'Birth Trauma', 'Yoga', 'Birth Rights', 'Postnatal'].map(cat => (
              <span
                key={cat}
                style={{ padding: '0.4rem 1rem', background: cat === 'All' ? 'var(--black)' : 'var(--pink-pale)', color: cat === 'All' ? 'var(--white)' : 'var(--black)', borderRadius: '2px', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid-3" style={{ gap: '2rem' }}>
            {displayPosts.map((post, i) => {
              const href = post.slug.current === '#' ? '#' : `/blog/${post.slug.current}`
              const catColor = CATEGORY_COLORS[post.category ?? 'general'] ?? 'var(--grey-mid)'
              return (
                <article key={post._id} className={`reveal reveal-d${(i % 3) + 1}`} style={{ borderTop: `3px solid ${catColor}`, padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem' }}>
                    {post.category && (
                      <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: catColor }}>
                        {post.category.replace(/-/g, ' ')}
                      </span>
                    )}
                    {post.estimatedReadingTime && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--grey-light)' }}>{post.estimatedReadingTime} min read</span>
                    )}
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '0.8rem' }}>
                    <Link href={href} style={{ textDecoration: 'none', color: 'var(--black)', transition: 'color 0.3s' }}>
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.75, marginBottom: '1.2rem' }}>
                      {post.excerpt}
                    </p>
                  )}
                  <Link href={href} style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--black)', textDecoration: 'none', borderBottom: '1.5px solid var(--pink)', paddingBottom: '2px' }}>
                    Read more →
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <div className="cta-band reveal">
        <h2>Want personalised advice? <em style={{ fontStyle: 'italic' }}>Book a chat.</em></h2>
        <p>A free 20-minute consultation with Leanne — no obligation, just a helpful conversation.</p>
        <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="btn-dark">Book Free Consultation</a>
      </div>
    </>
  )
}
