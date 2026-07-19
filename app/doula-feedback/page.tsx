import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Doula Feedback',
  description: 'Share your birth-hood doula experience. Your words help other Leicester and Midlands families find the warm, professional support they need.',
}

function DoulaFeedbackPageStatic() {
  return (
    <>
      <PageHero
        eyebrow="Share your experience"
        title={<>Your <em>Feedback</em></>}
        subtitle="Thank you for allowing me to be part of your birth journey. Your words mean everything — and help other families find the support they need."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/doula-support.jpg', alt: 'Doula support' }}
      />

      {/* INTRO */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', lineHeight: 1.75, color: 'var(--black)', fontStyle: 'italic', marginBottom: '2rem' }}>
            &ldquo;Being a doula is an honour and a privilege. Supporting you as you journey through pregnancy, birth and postpartum is something I do not take lightly and to receive the feedback I do is just beyond words.&rdquo;
          </p>
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your FREE Consultation here!
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <div className="section-label" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>Client testimonials</div>

          {[
            {
              tag: 'First baby · Homebirth',
              quote: 'From my first contact with Leanne we just clicked, she’s proudly inclusive and has experience in a wide range of pregnancies and birth situations. She supported me through my concern about fibroids, and gave me some brilliant yoga positions to try when my SPD started. She kept in contact through my pregnancy and made me feel like I really had amazing support whenever I needed it. The prenatal sessions were so brilliant to run through my birth plans of a physiological homebirth. Leanne supported me every step of the way and made me feel so confident and excited for my homebirth. She also helped with some latch issues and supported our undisturbed golden hour. It felt so natural having her there and I didn’t want her to leave! Post natally, I felt really looked after by Leanne both in person & virtually. I can’t recommend Leanne highly enough, she’s a pro at end-to-end care and if you’re reading this, book her!!!',
              name: 'Beka & Matt',
            },
            {
              tag: 'Second baby · Homebirth',
              quote: 'Just incredible! Leanne was amazing from the moment we booked her. She was always on hand for any questions and me and my husband loved our antenatal sessions with her and getting to know her, gaining knowledge. Postnatally she was excellent, always a message away and for our sessions. However, I couldn’t have done the birth without her. She protected my birth space perfectly and advocated for me many times. She was especially helpful when things didn’t quite go to plan.',
              name: 'Bea & Duane',
            },
          ].map((t, i) => (
            <div key={i} className="df-testimonial">
              <div className="df-quote-mark">&ldquo;</div>
              <div className="df-tag">{t.tag}</div>
              <blockquote className="df-quote">{t.quote}</blockquote>
              <div className="df-attribution">
                <span className="df-name">{t.name}</span>
                <span className="df-stars">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THANK YOU + REVIEW LINKS */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
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
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.7rem' }}>
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

          <div style={{ marginTop: '3rem', padding: '2rem', borderLeft: '3px solid var(--pink)', background: 'var(--pink-ultra)', borderRadius: '0 3px 3px 0' }}>
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
    </>
  )
}

export default async function DoulaFeedbackPage() {
  return cmsOrStatic('doula-feedback', <DoulaFeedbackPageStatic />)
}
