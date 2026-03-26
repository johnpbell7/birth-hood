import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Doula Feedback',
}

export default function DoulaFeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Share your experience"
        title={<>Your <em>Feedback</em></>}
        subtitle="Thank you for allowing me to be part of your birth journey. Your words mean everything — and help other families find the support they need."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/doula-support.png', alt: 'Doula support' }}
      />

      {/* THANK YOU */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div className="prose">
            <h2>Thank you</h2>
            <p>
              It has been an absolute honour to support you. Every birth is unique, and I am so
              grateful that you trusted me to be part of yours. I hope you are settling in beautifully
              with your new baby.
            </p>
            <p>
              Your feedback is incredibly valuable — not just to me personally, but to other families
              who are looking for birth support and trying to make their decision. An honest review
              from a real client makes all the difference.
            </p>
          </div>

          {/* REVIEW LINKS */}
          <div style={{ marginTop: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Leave a review</div>

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
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.7rem' }}>
                  Google Review
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
                  Leave a Google review to help other local families find birth support.
                </p>
                <a
                  href="https://g.page/r/birthhood/review"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block' }}
                >
                  Leave Google Review
                </a>
              </div>

              {/* Doula UK */}
              <div className="card" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
                <div style={{ marginBottom: '1rem', color: 'var(--pink-deep)' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto', display: 'block' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.7rem' }}>
                  Doula UK Review
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
                  Leave a review on the Doula UK directory to support my professional profile.
                </p>
                <a
                  href="https://doula.org.uk"
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block' }}
                >
                  Leave Doula UK Review
                </a>
              </div>
            </div>
          </div>

          {/* SOCIAL SHARE */}
          <div className="card card-pink" style={{ marginTop: '2.5rem', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.7rem' }}>
              Share on Instagram
            </h3>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
              If you&apos;re happy to share your experience on social media, please tag{' '}
              <strong>@birth_hood</strong> — it means so much and helps other families find us.
            </p>
            <a
              href="https://instagram.com/birth_hood"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on Instagram
            </a>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', borderLeft: '3px solid var(--pink)', background: 'var(--pink-ultra)', borderRadius: '0 3px 3px 0' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--black)', marginBottom: '0.5rem' }}>
              &ldquo;Thank you for trusting me to be part of one of the most significant moments of your
              life. It is a privilege I never take for granted.&rdquo;
            </p>
            <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)' }}>
              — Leanne
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
