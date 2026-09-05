import type { Metadata } from 'next'
import type { Review } from '@/lib/reviews'
import type { BirthStory } from '@/lib/birth-stories'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import BirthStoryCards from '@/components/BirthStoryCards'
import { loadBirthStories } from '@/lib/birth-stories-source'
import ReviewsGrid from '@/components/ReviewsGrid'
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
        title={<>Real <em>Reviews</em></>}
        subtitle="From real clients, unfiltered and unedited. These words mean everything."
        img1={{ src: '/images/parent-baby-150.jpg', alt: 'Parent & baby' }}
        img2={{ src: '/images/class-group-257.jpg', alt: 'Group course' }}
      />

      <MarqueeStrip />

      {/* RATING SUMMARY */}
      <section className="rating-band">
        <div className="wrap">
          <div className="rating-grid">
            {/* The Google rating, given the room it deserves */}
            <div className="rating-hero">
              <div className="rating-hero-top">
                <span className="rating-score">5.0</span>
                <span className="rating-stars" aria-hidden="true">★★★★★</span>
              </div>
              <p className="rating-hero-label">
                <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" style={{ verticalAlign: '-2px', marginRight: '0.45rem' }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Rated <strong>5.0 from 69 reviews</strong> on Google
              </p>
              <a
                href="https://g.page/r/CfzJur7y_9nhEAE/review"
                className="rating-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a review →
              </a>
            </div>

            {/* The rest of the picture */}
            <ul className="rating-facts">
              <li className="rating-fact">
                <span className="rating-fact-figure">100&apos;s</span>
                <span className="rating-fact-label">of families supported since 2019</span>
              </li>
              <li className="rating-fact">
                <span className="rating-fact-figure">4</span>
                <span className="rating-fact-label">counties covered in person, plus online UK-wide</span>
              </li>
              <li className="rating-fact">
                <span className="rating-fact-figure">BBC</span>
                <span className="rating-fact-label">Radio Leicester &mdash; birth-hood has been on air</span>
              </li>
              <li className="rating-fact">
                <span className="rating-fact-figure">5</span>
                <span className="rating-fact-label">services: hypnobirthing, doula, yoga, rewind, postnatal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="section-pad has-dots" style={{ background: 'var(--black)' }}>
        <div className="wrap">
          <ReviewsGrid reviews={reviews} />
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

      {/* LEAVE A REVIEW */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div className="prose">
            <h2>Worked with me? Thank you</h2>
            <p>
              It is an absolute honour to support the families I work with. Every birth is unique,
              and I am so grateful to everyone who has trusted me to be part of theirs.
            </p>
            <p>
              Your feedback is incredibly valuable — not just to me personally, but to other families
              who are looking for birth support and trying to make their decision. An honest review
              from a real client makes all the difference.
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              {/* Google */}
              <div className="card card-pink" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto', display: 'block' }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.7rem' }}>
                  Google Review
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
                  Leave a Google review to help other local families find birth support.
                </p>
                <a
                  href="https://g.page/r/CfzJur7y_9nhEAE/review"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block' }}
                >
                  Leave Google Review
                </a>
              </div>

              {/* Facebook */}
              <div className="card card-pink" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
                <div style={{ marginBottom: '1rem', color: 'var(--pink-deep)' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto', display: 'block' }}>
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.7rem' }}>
                  Facebook Review
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
                  Leave a review on the birth-hood Facebook page to help other families find support.
                </p>
                <a
                  href="https://www.facebook.com/Birthhooduk"
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block' }}
                >
                  Leave Facebook Review
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL SHARE */}
          <div className="card" style={{ marginTop: '2.5rem', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.7rem' }}>
              Share on Instagram
            </h3>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
              If you&apos;re happy to share your experience on social media, please tag{' '}
              <strong>@birthhooduk</strong> — it means so much and helps other families find us.
            </p>
            <a
              href="https://instagram.com/birthhooduk"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on Instagram
            </a>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', borderLeft: '3px solid var(--pink)', background: 'var(--white)', borderRadius: '0 3px 3px 0' }}>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--black)', marginBottom: '0.5rem' }}>
              &ldquo;Thank you for trusting me to be part of one of the most significant moments of your
              life. It is a privilege I never take for granted.&rdquo;
            </p>
            <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)' }}>
              — Leanne
            </p>
          </div>
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
