import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client, blogPostQuery } from '@/lib/sanity'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(blogPostQuery, { slug }).catch(() => null)
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(blogPostQuery, { slug }).catch(() => null)
  if (!post) notFound()

  const date = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          {post.category && <div className="page-eyebrow">{post.category.replace(/-/g, ' ')}</div>}
          <h1 className="page-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>{post.title}</h1>
          <p style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.5)', fontWeight: 300 }}>
            {date}
            {post.estimatedReadingTime && ` · ${post.estimatedReadingTime} min read`}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 3rem' }}>
          <article className="prose">
            {post.body && (
              <PortableText
                value={post.body}
                components={{
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
            )}
          </article>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="/blog" style={{ fontSize: '0.78rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--grey-mid)', textDecoration: 'none' }}>
              ← Back to Blog
            </a>
            <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.75rem' }}>
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
