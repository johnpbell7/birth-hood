import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client, blogPostQuery, isSanityConfigured, urlFor } from '@/lib/sanity'
import { blogPosts, getBlogPost, type PostBlock } from '@/lib/blog-posts'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

async function fetchCmsPost(slug: string) {
  if (!isSanityConfigured || !client) return null
  return client.fetch(blogPostQuery, { slug }).catch(() => null)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cms = await fetchCmsPost(slug)
  const local = getBlogPost(slug)
  const title = cms?.title ?? local?.title
  if (!title) return { title: 'Post not found' }
  return { title, description: cms?.excerpt ?? local?.excerpt }
}

/** Renders the migrated post body — groups consecutive <li> blocks into one list. */
function StaticBody({ body }: { body: PostBlock[] }) {
  const out: React.ReactNode[] = []
  let i = 0
  while (i < body.length) {
    const block = body[i]

    if (block.type === 'affirmation') {
      const cards: string[] = []
      while (i < body.length && body[i].type === 'affirmation') {
        cards.push(body[i].value)
        i += 1
      }
      out.push(
        <div key={`aff-${i}`} className="affirmation-grid">
          {cards.map((card, n) => (
            <p key={n} className="affirmation-card">{card}</p>
          ))}
        </div>,
      )
      continue
    }

    if (block.type === 'li') {
      const items: string[] = []
      while (i < body.length && body[i].type === 'li') {
        items.push(body[i].value)
        i += 1
      }
      out.push(
        <ul key={`ul-${i}`}>
          {items.map((item, n) => <li key={n}>{item}</li>)}
        </ul>,
      )
      continue
    }

    if (block.type === 'img') {
      out.push(
        <figure key={i} style={{ margin: '2.5rem 0' }}>
          <Image
            src={block.value}
            alt={block.alt || ''}
            width={900}
            height={600}
            sizes="(max-width: 780px) 100vw, 720px"
            style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
          />
        </figure>,
      )
    } else if (block.type === 'h2') {
      out.push(<h2 key={i}>{block.value}</h2>)
    } else if (block.type === 'h3') {
      out.push(<h3 key={i}>{block.value}</h3>)
    } else if (block.type === 'ref') {
      out.push(
        <p key={i} style={{ fontSize: '0.78rem', lineHeight: 1.7, color: 'var(--grey-light)', wordBreak: 'break-word' }}>
          {block.value}
        </p>,
      )
    } else {
      out.push(<p key={i}>{block.value}</p>)
    }
    i += 1
  }
  return <>{out}</>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const cms = await fetchCmsPost(slug)
  const local = getBlogPost(slug)
  if (!cms && !local) notFound()

  const title = cms?.title ?? local!.title
  const category = cms?.category ?? local?.category
  const publishedAt = cms?.publishedAt ?? local?.publishedAt
  const readingTime = cms?.estimatedReadingTime ?? local?.readingTime

  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          {/* Wrapped so the hero text sits in the grid's first column rather than
              spilling one element per cell. */}
          <div className="page-hero-text">
            {category && <div className="page-eyebrow">{category.replace(/-/g, ' ')}</div>}
            <h1 className="page-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>{title}</h1>
            <p style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.5)', fontWeight: 300 }}>
              {date}
              {readingTime ? `${date ? ' · ' : ''}${readingTime} min read` : ''}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 3rem' }}>
          <article className="prose">
            {cms?.body ? (
              <PortableText
                value={cms.body}
                components={{
                  types: {
                    image: ({ value }) => (
                      <figure style={{ margin: '2.5rem 0' }}>
                        <Image
                          src={urlFor(value).width(1440).url()}
                          alt={value?.alt || ''}
                          width={900}
                          height={600}
                          sizes="(max-width: 780px) 100vw, 720px"
                          style={{ width: '100%', height: 'auto', borderRadius: '2px' }}
                        />
                      </figure>
                    ),
                  },
                  block: {
                    h2: ({ children }) => <h2>{children}</h2>,
                    h3: ({ children }) => <h3>{children}</h3>,
                    blockquote: ({ children }) => (
                      <blockquote style={{ borderLeft: '3px solid var(--pink)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--grey-mid)' }}>
                        {children}
                      </blockquote>
                    ),
                  },
                }}
              />
            ) : (
              <StaticBody body={local!.body} />
            )}
          </article>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/blog" style={{ fontSize: '0.78rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--grey-mid)', textDecoration: 'none' }}>
              ← Back to Blog
            </Link>
            <a href="https://calendly.com/birthhood/free-consultation" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.75rem' }}>
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
