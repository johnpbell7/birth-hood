import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Free Resources',
}

const resources = [
  {
    emoji: '✦',
    title: 'Birth Affirmations',
    desc: 'A beautiful collection of positive birth affirmations to read, display and use throughout pregnancy and labour. Evidence-backed and created by Leanne.',
    href: '/downloads/birth-affirmations.pdf',
    type: 'PDF Download',
    tag: 'Most popular',
  },
  {
    emoji: '◻',
    title: 'Birth Plan Template',
    desc: 'A comprehensive birth plan template that covers all your preferences — from environment and pain relief to caesarean preferences and the third stage.',
    href: '/downloads/birth-plan-template.pdf',
    type: 'PDF Download',
    tag: null,
  },
  {
    emoji: '○',
    title: 'Breathing Guide',
    desc: 'Step-by-step guide to the key breathing techniques used in birth — including up breathing for surges and down breathing for the second stage.',
    href: '/downloads/breathing-guide.pdf',
    type: 'PDF Download',
    tag: null,
  },
  {
    emoji: '◈',
    title: 'Relaxation Audio',
    desc: 'A guided relaxation and visualisation audio track — perfect for practising during pregnancy and using during labour. Recorded by Leanne.',
    href: '/downloads/relaxation-audio.mp3',
    type: 'Audio Download',
    tag: null,
  },
  {
    emoji: '▣',
    title: 'Reading List',
    desc: 'Leanne\'s curated list of the best books, podcasts and resources for pregnancy, birth and the fourth trimester — all personally recommended.',
    href: '/downloads/reading-list.pdf',
    type: 'PDF Download',
    tag: null,
  },
  {
    emoji: '◇',
    title: 'Questions to Ask Your Midwife',
    desc: 'The questions you didn\'t know to ask — covering everything from growth scans and induction to your rights around interventions.',
    href: '/downloads/midwife-questions.pdf',
    type: 'PDF Download',
    tag: null,
  },
]

export default function FreebiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Yours. For free. No strings."
        title={<><em>Free</em> Resources</>}
        subtitle="Birth affirmations, guides, templates and audio — all created by Leanne, all completely free."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class' }}
      />

      <MarqueeStrip />

      {/* INTRO */}
      <section style={{ background: 'var(--pink-ultra)', padding: '3rem' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '620px' }}>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.9, fontWeight: 300 }}>
            These resources are completely free — no email address required, no opt-in, no strings.
            Just Leanne&apos;s knowledge, packaged up and ready for you to use whenever you need them.
            PDFs will open in a new tab or download directly to your device.
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

                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.3 }}>
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

          {/* Note */}
          <div className="card card-pink" style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
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
