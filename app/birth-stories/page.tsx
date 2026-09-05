import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import BirthStoryCards from '@/components/BirthStoryCards'
import { loadBirthStories } from '@/lib/birth-stories-source'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Real Birth Stories from birth-hood Clients',
  description:
    'Home births, water births, inductions, hospital births and a dad’s story — told by birth-hood clients in their own words. Every birth, every path, valid.',
}

export default async function BirthStoriesPage() {
  const birthStories = await loadBirthStories()
  return (
    <>
      <CmsPageHero
        page="birth-stories"
        eyebrow="In their own words"
        title={<>Birth <em>Stories</em></>}
        subtitle="Real stories from real families — home births, water births, inductions and everything in between. Told honestly, start to finish."
        img1={{ src: '/images/birth-pool-rest-299.jpg', alt: 'In the pool' }}
        img2={{ src: '/images/newborn-held-170.jpg', alt: 'Newborn days' }}
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
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
