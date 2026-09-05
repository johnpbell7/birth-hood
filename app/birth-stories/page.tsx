import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import BirthStoryCards from '@/components/BirthStoryCards'
import { birthStories } from '@/lib/birth-stories'

export const metadata: Metadata = {
  title: 'Birth Stories',
  description:
    'Real birth stories from birth-hood clients — home births, water births, inductions, hospital births and a dad’s story. Every birth, every path, every outcome is valid.',
}

export default function BirthStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="In their own words"
        title={<>Birth <em>Stories</em></>}
        subtitle="Real stories from real families — home births, water births, inductions and everything in between. Told honestly, start to finish."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class' }}
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Every birth is valid</div>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)',
              fontWeight: 600,
              marginBottom: '0.8rem',
              lineHeight: 1.1,
            }}
          >
            Stories from <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>real births</em>
          </h2>
          <p
            style={{
              color: 'var(--grey-mid)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              fontWeight: 300,
              marginBottom: '2.5rem',
              maxWidth: '640px',
            }}
          >
            These are shared by clients in their own words — the plans that changed, the moments that
            went exactly right, and everything they learnt along the way.
          </p>

          <BirthStoryCards stories={birthStories} />
        </div>
      </section>

      <CtaBand
        heading={<>Ready to add <em style={{ fontStyle: 'italic' }}>your own story?</em></>}
        body="Book a free consultation and start your birth-hood journey today."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}
