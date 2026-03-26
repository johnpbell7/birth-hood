import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Reviews',
}

const reviews = [
  {
    text: 'Leanne was absolutely incredible. Her hypnobirthing course completely changed how I felt about labour — I went from petrified to actually excited. My birth was everything I hoped for.',
    author: 'Sophie',
    location: 'Loughborough',
    service: 'Hypnobirthing',
  },
  {
    text: 'Having Leanne as my doula was the best decision I made. She was calm, reassuring and exactly who I needed in that room. I couldn\'t have done it without her.',
    author: 'Emma',
    location: 'Leicester',
    service: 'Birth Doula',
  },
  {
    text: 'The yoga classes were the highlight of my pregnancy. A beautiful mix of movement, breathing and community. I wish I\'d found Leanne sooner!',
    author: 'Priya',
    location: 'Nottingham',
    service: 'Prenatal Yoga',
  },
  {
    text: 'Leanne helped me process a really difficult previous birth. Her sensitivity and knowledge were invaluable. I felt genuinely heard and supported.',
    author: 'Rachel',
    location: 'Derby',
    service: 'Birth Trauma Support',
  },
  {
    text: 'I did the online hypnobirthing course and it was brilliant. Really comprehensive and Leanne\'s passion comes through in every session. My husband and I both felt so much more confident.',
    author: 'Jess',
    location: 'Birmingham',
    service: 'Hypnobirthing',
  },
  {
    text: 'Best money I spent during my entire pregnancy. I cannot recommend Leanne enough. Would recommend to anyone and everyone.',
    author: 'Charlotte',
    location: 'Leicester',
    service: 'Hypnobirthing',
  },
  {
    text: 'Leanne was at my birth for over 12 hours and never once made me feel like I was a burden. She was constant, calm and completely brilliant. My husband is equally grateful.',
    author: 'Amy',
    location: 'Coventry',
    service: 'Birth Doula',
  },
  {
    text: 'I was so nervous about birth and Leanne just completely transformed my perspective. The breathing techniques alone were worth every penny. I used them throughout my entire labour.',
    author: 'Natasha',
    location: 'Leicester',
    service: 'Hypnobirthing',
  },
  {
    text: 'The prenatal yoga community Leanne has built is so special. I made friends I know I\'ll keep forever. The classes themselves were perfect for my changing body.',
    author: 'Zoe',
    location: 'Loughborough',
    service: 'Prenatal Yoga',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="What clients say"
        title={<>Real <em>Reviews</em></>}
        subtitle="From real clients, unfiltered and unedited. These words mean everything."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/yoga-class.jpg', alt: 'Prenatal yoga class' }}
      />

      <MarqueeStrip />

      {/* RATING SUMMARY */}
      <section style={{ background: 'var(--pink-ultra)', padding: '3rem' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}>
            <div>
              <div style={{ fontFamily: 'Abril Fatface, serif', fontSize: '5rem', color: 'var(--black)', lineHeight: 1 }}>5.0</div>
              <div style={{ color: 'var(--pink)', fontSize: '1.4rem', letterSpacing: '0.15em', margin: '0.3rem 0' }}>★★★★★</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', fontWeight: 300, letterSpacing: '0.05em' }}>Overall rating</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Abril Fatface, serif', fontSize: '5rem', color: 'var(--black)', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', fontWeight: 300, letterSpacing: '0.05em', marginTop: '0.3rem' }}>Verified reviews</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Abril Fatface, serif', fontSize: '5rem', color: 'var(--black)', lineHeight: 1 }}>200+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', fontWeight: 300, letterSpacing: '0.05em', marginTop: '0.3rem' }}>Families supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="section-pad" style={{ background: 'var(--black)' }}>
        <div className="wrap">
          <div className="reviews-track" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pink)', marginBottom: '1rem', opacity: 0.7 }}>
                  {review.service}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-author">{review.author} · {review.location} ★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Share your experience</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            Worked with <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>Leanne?</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
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
            <a
              href="https://doula.org.uk"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Doula UK Review
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to add your own story?"
        body="Book a free consultation and start your birth-hood journey today."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
