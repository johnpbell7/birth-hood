import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { getFreebies } from '@/lib/sanity-queries'

export const metadata: Metadata = {
  title: 'Free Resources',
  description: 'Free birth resources from birth-hood, including a hypnobirthing MP3, birth plan guide, newborn checklist and ready-made affirmations to download.',
}

const fallbackResources = [
  {
    emoji: '✦',
    title: 'Colouring Affirmations',
    desc: 'Printable colouring birth affirmations — colour them in and display them around your home for daily positive reminders.',
    href: '/downloads/colouring-affirmations.pdf',
    type: 'PDF Download',
    tag: 'Most popular',
  },
  {
    emoji: '◻',
    title: 'Birth Plan Guide',
    desc: 'A complimentary birth plan guide to help you plan your A, B & C birth preferences.',
    href: '/downloads/birth-plan-guide.pdf',
    type: 'PDF Download',
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
  {
    emoji: '◈',
    title: '15 Ready Made Affirmations',
    desc: '15 ready-made birth-hood affirmations — print them out and use them throughout your pregnancy and birth.',
    href: '/downloads/ready-made-affirmations.pdf',
    type: 'PDF Download',
    tag: null,
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
    emoji: '◇',
    title: 'ELLE TENS Discount',
    desc: 'A discount code for an ELLE TENS machine — great for managing contractions in early labour.',
    href: '/downloads/elle-tens-discount.pdf',
    type: 'Discount Code',
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
            Find some printable affirmations (colouring AND ready made birth-hood ones), FREE Hypnobirthing MP3,
            positive birth videos and a complimentary birth plan guide (For your A, B & C!) Plus a BONUS Newborn
            Checklist! Plus an ELLE TENS machine discount code!
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
                  border: '1px solid rgba(232,123,195,0.3)', borderRadius: '3px',
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

          {/* Birth Videos */}
          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.2 }}>
              Positive <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>Birth Videos</em>
            </h2>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '580px', marginBottom: '1.5rem' }}>
              Watching positive birth videos is one of the most powerful things you can do during pregnancy.
              A curated collection of real, positive birth stories is available on YouTube — search
              {' '}&ldquo;birth-hood positive birth videos&rdquo; or visit the birth-hood YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@birth-hood"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Watch on YouTube
            </a>
          </div>

          {/* Note */}
          <div className="card card-pink" style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>
              All PDFs open in a new tab and can be downloaded, printed or saved to your device.
              Audio files will download directly. If you have any trouble accessing these resources,
              please{' '}
              <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)' }}>
                get in touch
              </a>
              .
            </p>
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
