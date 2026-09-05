import type { Metadata } from 'next'
import type { Review } from '@/lib/reviews'
import type { BirthStory } from '@/lib/birth-stories'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import BirthStoryCards from '@/components/BirthStoryCards'
import { loadBirthStories } from '@/lib/birth-stories-source'
import ReviewCard from '@/components/ReviewCard'
import { loadReviews } from '@/lib/reviews-source'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Reviews — Rated 5.0 on Google',
  description:
    'Real reviews from birth-hood families across Leicestershire — hypnobirthing, doula support and pregnancy yoga with Leanne. Rated 5.0 from 69 Google reviews.',
}


function ReviewsPageStatic({ reviews, birthStories }: { reviews: Review[]; birthStories: BirthStory[] }) {
  return (
    <>
      <CmsPageHero
        page="reviews"
        eyebrow="What clients say"
        title={<>Real <em>Reviews</em></>}
        subtitle="From real clients, unfiltered and unedited. These words mean everything."
        img1={{ src: '/images/parent-baby-150.jpg', alt: 'Parent & baby' }}
        img2={{ src: '/images/class-group-257.jpg', alt: 'Group course' }}
      />

      <MarqueeStrip />

      {/* RATING SUMMARY */}
      <section style={{ background: 'var(--pink-ultra)', padding: '3rem' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '5rem', color: 'var(--black)', lineHeight: 1 }}>5.0</div>
              <div style={{ color: 'var(--pink)', fontSize: '1.4rem', letterSpacing: '0.15em', margin: '0.3rem 0' }}>★★★★★</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', fontWeight: 300, letterSpacing: '0.05em' }}>Rated 5.0 from 69 Google reviews</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '5rem', color: 'var(--black)', lineHeight: 1 }}>100's</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', fontWeight: 300, letterSpacing: '0.05em', marginTop: '0.3rem' }}>of families supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="section-pad" style={{ background: 'var(--black)' }}>
        <div className="wrap">
          <div className="reviews-track">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.1 }}>
            Worked with <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>me?</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2rem' }}>
            Your review helps other families find the support they&apos;re looking for. It would
            mean the world.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://g.page/r/birthhood/review"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>


      {/* BIRTH STORIES */}
      <section className="section-pad" id="birth-stories">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.1 }}>
            Stories from <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>real births</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem', maxWidth: '640px' }}>
            A collection of positive birth stories shared by my clients, in their own words — every
            birth, every path, every outcome is valid.
          </p>

          <BirthStoryCards stories={birthStories} />
        </div>
      </section>

      <CtaBand
        heading="Ready to add your own story?"
        body="Book a free consultation and start your birth-hood journey today."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function ReviewsPage() {
  const [reviews, birthStories] = await Promise.all([loadReviews(), loadBirthStories()])
  return cmsOrStatic('reviews', <ReviewsPageStatic reviews={reviews} birthStories={birthStories} />)
}
