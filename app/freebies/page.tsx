import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import { getFreebies } from '@/lib/sanity-queries'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Free Birth Resources & Affirmations',
  description:
    'Free birth resources from birth-hood — 20 printable birth affirmations, a newborn checklist and a hypnobirthing relaxation MP3. No cost, no catch.',
}

const typeLabel = (t?: string) => {
  if (t === 'pdf') return 'PDF Download'
  if (t === 'audio') return 'Audio Download'
  if (t === 'external') return 'External Link'
  return 'Download'
}

export default async function FreebiesPage() {
  const sanityFreebies = await getFreebies()

  // Sanity is the only source now — the files these used to fall back on were
  // sitting in public/ where anyone could take them, so they were removed.
  // A freebie with nothing attached is skipped rather than shown as a dead link.
  const resources = sanityFreebies
    .filter((f) => f.fileUrl || f.externalUrl)
    .map((f) => ({
      emoji: f.emoji ?? '✦',
      title: f.title,
      desc: f.description ?? '',
      href: (f.fileUrl ?? f.externalUrl) as string,
      type: typeLabel(f.type),
      tag: null as string | null,
    }))

  return (
    <>
      <CmsPageHero
        page="freebies"
        title={<><em>Free</em> Resources</>}
        subtitle="Birth affirmations, guides, templates and audio — all created by me, all completely free."
        img1={{ src: '/images/tote-bag-33.jpg', alt: 'Resources' }}
      />

      <MarqueeStrip />

      {/* INTRO */}
      <section style={{ background: 'var(--pink-ultra)', padding: '3rem' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.6, fontWeight: 300 }}>
            Find ready-made birth-hood affirmations to print, a FREE Hypnobirthing MP3, positive birth videos
            and a BONUS Newborn Checklist — all completely free.
          </p>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {resources.map((resource, i) => (
              <a
                key={i}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative' }}
              >
                {resource.tag && (
                  <div style={{
                    position: 'absolute', top: '-1px', right: '1.5rem',
                    background: 'var(--pink)', color: 'var(--black)',
                    fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '0.25rem 0.7rem',
                    borderRadius: '0 0 3px 3px',
                  }}>
                    {resource.tag}
                  </div>
                )}

                <div style={{
                  width: '44px', height: '44px', background: 'var(--pink-ultra)',
                  border: '1px solid rgba(254,127,204,0.3)', borderRadius: '3px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', color: 'var(--pink-deep)', marginBottom: '1.2rem',
                  fontFamily: 'serif',
                }}>
                  {resource.emoji}
                </div>

                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {resource.title}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.87rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.2rem' }}>
                  {resource.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey-light)' }}>
                    {resource.type}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--pink-deep)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    Download
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      <CtaBand
        heading="Want the full toolkit? Join a course."
        body="The free resources are just the beginning. The full hypnobirthing course gives you everything you need to approach birth with calm, confident preparation."
        href="/hypnobirthing"
        label="Explore Hypnobirthing Courses"
      />
    </>
  )
}
