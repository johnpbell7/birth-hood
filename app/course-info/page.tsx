import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Course Info & Dates',
}

export default function CourseInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Hypnobirthing courses"
        title={<>Course <em>Info & Dates</em></>}
        subtitle="Find your perfect course date and everything you need to know before you book."
        img1={{ src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        actions={
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Place
          </a>
        }
      />

      {/* UPCOMING DATES */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Upcoming group courses</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Group <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>course dates</em>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginBottom: '2.5rem' }}>
            {[
              { date: 'Spring 2026 — dates TBC', time: 'Sundays, 10am–12:30pm', location: 'Leicester · 4 sessions', spaces: 'Registering interest', featured: false },
              { date: 'Summer 2026 — dates TBC', time: 'Saturdays, 1pm–3:30pm', location: 'Leicester · 4 sessions', spaces: 'Registering interest', featured: true },
              { date: 'Autumn 2026 — dates TBC', time: 'Midweek evenings, 7pm–9:30pm', location: 'Leicester · 4 sessions', spaces: 'Registering interest', featured: false },
            ].map((course, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.5rem 2rem', flexWrap: 'wrap', gap: '1rem',
                background: course.featured ? 'var(--pink-ultra)' : 'var(--white)',
                border: course.featured ? '1px solid rgba(232,123,195,0.4)' : '1px solid rgba(0,0,0,0.07)',
                borderRadius: '3px',
              }}>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    {course.date}
                    {course.featured && (
                      <span style={{ marginLeft: '0.8rem', background: 'var(--pink)', color: 'var(--black)', fontSize: '0.65rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>
                        Popular
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', fontWeight: 300 }}>
                    {course.time} · {course.location}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--pink-deep)', fontWeight: 500 }}>{course.spaces}</span>
                  <a
                    href="https://calendly.com/birthhood"
                    className="btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Interest
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="card card-pink">
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
              <strong style={{ color: 'var(--black)' }}>Can&apos;t find a date that works?</strong>{' '}
              Private and online courses are available at a time to suit you. No fixed schedule — just
              4 sessions whenever works best.{' '}
              <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)' }}>
                Book a free consultation to discuss →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">What&apos;s included</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Everything you need for <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>birth preparation</em>
          </h2>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {[
              {
                title: 'KGHypnobirthing full programme',
                desc: 'The complete KGHypnobirthing course — the UK\'s leading hypnobirthing method, covering everything from the physiology of birth to deep relaxation techniques.',
              },
              {
                title: 'Comprehensive workbook',
                desc: 'A beautifully designed birth-hood workbook to accompany each session, full of notes, exercises and resources to keep.',
              },
              {
                title: 'Relaxation audio downloads',
                desc: 'A curated collection of relaxation and visualisation audio tracks for you to practise throughout your pregnancy and use during birth.',
              },
              {
                title: 'Birth plan support',
                desc: 'Dedicated time to create a birth plan that reflects your wishes and is written in a way that your care team will read and respect.',
              },
              {
                title: 'WhatsApp support group',
                desc: 'Join the birth-hood community — a supportive group of like-minded parents going through the same journey, moderated by Leanne.',
              },
              {
                title: 'Postnatal debrief',
                desc: 'A dedicated session after your baby arrives to process your birth experience, celebrate your achievement and get any support you need.',
              },
            ].map(item => (
              <div key={item.title} className="card">
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--black)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING INFO */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div className="section-label">How to book</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
            Booking <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>information</em>
          </h2>

          <div className="prose">
            <h3>How to secure your place</h3>
            <p>
              Click the &ldquo;Book Your Place&rdquo; button to book a free 30-minute consultation.
              During this call, we&apos;ll confirm your dates, discuss any questions you have and take
              the details for your booking.
            </p>
            <h3>Payment</h3>
            <p>
              A 50% deposit is required to secure your place. The balance is due at your first session.
              Payment plans are available — just let me know at the consultation.
            </p>
            <h3>Location</h3>
            <p>
              Group courses are held at a central Leicester venue (address confirmed on booking).
              Private courses can be held at your home, online, or at a mutually agreed location.
            </p>
            <h3>What to bring</h3>
            <p>
              Just yourselves. Wear something comfortable. All materials are provided. If you&apos;d
              like to bring a yoga mat or cushion for relaxation sessions, you&apos;re very welcome to.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://calendly.com/birthhood"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Place
            </a>
            <Link href="/session-outlines" className="btn-outline">
              View Session Outlines
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to book your place?"
        body="Start with a free 30-minute consultation — no pressure, just a friendly chat to see if we&apos;re the right fit."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
