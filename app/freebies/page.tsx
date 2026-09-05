import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { getFreebies } from '@/lib/sanity-queries'

export const metadata: Metadata = {
  title: 'Free Resources',
  description: 'Free birth resources from birth-hood, including a hypnobirthing MP3, newborn checklist and ready-made birth affirmations to download.',
}

const fallbackResources = [
  {
    emoji: '◈',
    title: '20 Ready Made Affirmations',
    desc: '20 ready-made birth-hood affirmations — print them out, cut them up and put them where you will see them throughout pregnancy and birth.',
    href: '/downloads/birth-affirmations.pdf',
    type: 'PDF Download',
    tag: 'Most popular',
  },
  {
    emoji: '♫',
    title: 'FREE Hypnobirthing MP3',
    desc: 'A free hypnobirthing relaxation MP3 to help you practise deep relaxation during pregnancy.',
    href: '/downloads/hypnobirthing-relaxation.mp3',
    type: 'Audio Download',
    tag: null,
  },
  {
    emoji: '○',
    title: 'Newborn Checklist',
    desc: 'Everything you need for your new arrival — a comprehensive newborn essentials checklist.',
    href: '/downloads/newborn-checklist.pdf',
    type: 'PDF Download',
    tag: null,
  },
]

const typeLabel = (t?: string) => {
  if (t === 'pdf') return 'PDF Download'
  if (t === 'audio') return 'Audio Download'
  if (t === 'external') return 'External Link'
  return 'Download'
}

export default async function FreebiesPage() {
  const sanityFreebies = await getFreebies()

  const resources = sanityFreebies.length > 0
    ? sanityFreebies.map((f) => ({
        emoji: f.emoji ?? '✦',
        title: f.title,
        desc: f.description ?? '',
        href: f.fileUrl ?? f.externalUrl ?? '#',
        type: typeLabel(f.type),
        tag: null as string | null,
      }))
    : fallbackResources

  return (
    <>
      <PageHero
        eyebrow="Yours. For free. No strings."
        title={<><em>Free</em> Resources</>}
        subtitle="Birth affirmations, guides, templates and audio — all created by me, all completely free."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class' }}
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
