import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Real, unfiltered reviews from birth-hood clients across Leicester and the Midlands on hypnobirthing, doula support and pregnancy yoga with Leanne.',
}

const reviews = [
  {
    text: 'We instantly felt at ease and comfortable and thoroughly enjoyed learning about the benefits of Hypnobirthing. We are due to have our first baby in 6 weeks and Leanne helped us to feel nothing but calm and excited for this completely unknown experience coming up.',
    author: 'Client',
    location: 'Leicestershire',
    service: 'Hypnobirthing',
  },
  {
    text: 'Leanne helped us look at birth in a different way to how it can often be portrayed, and we have come away with loads of affirmations and exercises to do that make me feel totally in control and relaxed!',
    author: 'Client',
    location: 'Leicestershire',
    service: 'Hypnobirthing',
  },
  {
    text: "Thank you so much for everything! I've noticed a massive difference in Lucy and I really am excited to support her, and I know how to now! You gave us invaluable information all the way through with reasoning and justifications. We know we have choice and I feel confident now and expressing our choices to the midwife team!",
    author: 'Birth Partner',
    location: 'Leicester',
    service: 'Hypnobirthing',
  },
  {
    text: "We went on an antenatal course last week, and honestly found the two hours spent with Leanne today were much more helpful than the seven hours there!",
    author: 'Client',
    location: 'Leicestershire',
    service: 'Hypnobirthing',
  },
  {
    text: "Our birth experience was nothing short of amazing, and something we are both extremely proud of. Using everything we learnt from our course, we got the birth we had in mind and we are so proud.",
    author: 'Client',
    location: 'Leicestershire',
    service: 'Hypnobirthing',
  },
  {
    text: "Out of all the things we've spent money on for our little one, this I feel is the most important. We've had an amazing 1-1 course with Leanne, who from our first session has made us feel so calm, comfortable and relaxed, we feel like we've known her for years.",
    author: 'Client',
    location: 'Leicestershire',
    service: 'Private 1-1 Course',
  },
  {
    text: "From my first contact with Leanne we just clicked. She supported me through my concern about fibroids, and gave me some brilliant yoga positions to try when my SPD started. She kept in contact through my pregnancy and made me feel like I really had amazing support whenever I needed it. I can't recommend Leanne highly enough, she's a pro at end-to-end care!",
    author: 'Beka',
    location: 'Leicestershire',
    service: 'Birth Doula',
  },
  {
    text: "Just incredible! Leanne was amazing from the moment we booked her. She protected my birth space perfectly and advocated for me many times. She was especially helpful when things didn't quite go to plan.",
    author: 'Bea',
    location: 'Leicestershire',
    service: 'Birth Doula',
  },
  {
    text: "My advice to anyone thinking to book Leanne would be to not hesitate — she's definitely 'worth every penny' as one of the home birth midwives rightly said! She knows her job inside out and ensures she creates a loving and strong relationship with all her clients.",
    author: 'Home Birth Client',
    location: 'Leicestershire',
    service: 'Birth Doula',
  },
]

function ReviewsPageStatic() {
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
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '5rem', color: 'var(--black)', lineHeight: 1 }}>5.0</div>
              <div style={{ color: 'var(--pink)', fontSize: '1.4rem', letterSpacing: '0.15em', margin: '0.3rem 0' }}>★★★★★</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', fontWeight: 300, letterSpacing: '0.05em' }}>5 Star rated on Google</div>
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
  return cmsOrStatic('reviews', <ReviewsPageStatic />)
}
