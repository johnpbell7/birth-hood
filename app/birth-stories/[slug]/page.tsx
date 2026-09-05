import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaBand from '@/components/CtaBand'
import BirthStoryCards from '@/components/BirthStoryCards'
import { birthStories, getBirthStory } from '@/lib/birth-stories'

type Params = { slug: string }

export function generateStaticParams() {
  return birthStories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const story = getBirthStory(slug)
  if (!story) return { title: 'Story not found' }
  return {
    title: story.title,
    description: story.excerpt,
  }
}

export default async function BirthStoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const story = getBirthStory(slug)
  if (!story) notFound()

  // Show up to three other stories at the foot of the page.
  const more = birthStories.filter((s) => s.slug !== story.slug).slice(0, 3)

  // Drop the pull quote in after the third paragraph, or halfway for short stories.
  const quoteAfter = Math.min(3, Math.floor(story.body.length / 2))

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-text">
            <div className="page-eyebrow">{story.type}</div>
            <h1 className="page-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              {story.title}
            </h1>
            <p className="page-subtitle" style={{ marginBottom: '0.6rem' }}>{story.baby}</p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)', fontWeight: 300, letterSpacing: '0.04em' }}>
              {story.place}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 3rem' }}>
          <article className="prose">
            {story.body.map((para, i) => (
              <div key={i}>
                <p>{para}</p>
                {i === quoteAfter && (
                  <blockquote
                    style={{
                      borderLeft: '3px solid var(--pink)',
                      paddingLeft: '1.5rem',
                      margin: '2.5rem 0',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.15rem',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      lineHeight: 1.5,
                      color: 'var(--black)',
                    }}
                  >
                    {story.pullQuote}
                  </blockquote>
                )}
              </div>
            ))}
          </article>

          <p
            style={{
              marginTop: '3rem',
              fontSize: '0.8rem',
              color: 'var(--grey-light)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
            }}
          >
            Shared with permission. Every birth, every path, every outcome is valid.
          </p>

          <div
            style={{
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(0,0,0,0.07)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Link
              href="/birth-stories"
              style={{
                fontSize: '0.78rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--grey-mid)',
                textDecoration: 'none',
              }}
            >
              ← All birth stories
            </Link>
            <a
              href="https://calendly.com/birthhood/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.75rem' }}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
          <div className="wrap">
            <div className="section-label">More birth stories</div>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)',
                fontWeight: 600,
                marginBottom: '2.5rem',
                lineHeight: 1.1,
              }}
            >
              Keep <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>reading</em>
            </h2>
            <BirthStoryCards stories={more} />
          </div>
        </section>
      )}

      <CtaBand
        heading={<>Ready to write <em style={{ fontStyle: 'italic' }}>your own?</em></>}
        body="Book a free consultation and start your birth-hood journey today."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}
