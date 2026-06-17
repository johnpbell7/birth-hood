import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Class Booking',
}

const bookingOptions = [
  {
    title: 'Hypnobirthing Course',
    desc: 'Group or 1-1 hypnobirthing sessions — choose your format and book your preferred dates.',
    href: 'https://calendly.com/birthhood',
    cta: 'Book Hypnobirthing',
    featured: false,
  },
  {
    title: 'Prenatal Yoga',
    desc: 'Drop-in class or block booking — choose your class, pick your date and secure your spot.',
    href: 'https://calendly.com/birthhood',
    cta: 'Book Yoga Class',
    featured: true,
  },
  {
    title: 'Free Consultation',
    desc: 'Not sure which service is right for you? Book a free 30-minute consultation with me.',
    href: 'https://calendly.com/birthhood',
    cta: 'Book Free Call',
    featured: false,
  },
]

function BookingPageStatic() {
  return (
    <>
      <PageHero
        eyebrow="Secure your place"
        title={<>Class <em>Booking</em></>}
        subtitle="Book your place on a hypnobirthing course, prenatal yoga class or a free consultation — all in one place."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class' }}
        actions={
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Availability
          </a>
        }
      />

      <MarqueeStrip />

      {/* BOOKING OPTIONS */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">What would you like to book?</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>booking type</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {bookingOptions.map(option => (
              <div
                key={option.title}
                className={option.featured ? 'price-card featured' : 'price-card'}
              >
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                  {option.title}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem', flexGrow: 1 }}>
                  {option.desc}
                </p>
                <a
                  href={option.href}
                  className={option.featured ? 'btn-primary' : 'btn-outline'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY EMBED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Live availability</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Book directly <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>below</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.9, fontWeight: 300, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
            Choose a time that works for you. All bookings are confirmed instantly — you&apos;ll receive
            a confirmation email with everything you need.
          </p>
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1rem' }}
          >
            Open Booking Calendar →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">Before you book</div>
              <h2>Good to know</h2>
              <p>
                All bookings are handled through Calendly — a simple, secure booking platform
                that lets you choose your preferred time slot and pay online.
              </p>
              <p>
                After booking you&apos;ll receive an automatic confirmation email with all the details
                you need. For in-person bookings, I&apos;ll send the venue address separately.
              </p>
              <p>
                Not sure which service is right for you? Book a free 30-minute consultation
                and I&apos;ll help you figure out the best fit for your pregnancy, budget and goals.
              </p>
            </div>
            <div className="card card-pink" style={{ padding: '2.5rem' }}>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Need help choosing?</div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                If you&apos;re not sure where to start, a free consultation is always the best first step.
                There&apos;s no obligation, no pressure and no hard sell — just an honest conversation
                about what kind of support would work best for you.
              </p>
              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to book your place?"
        body="Spaces fill up quickly — secure your spot on my next hypnobirthing course or yoga class."
        href="https://calendly.com/birthhood"
        label="View All Availability"
      />
    </>
  )
}

export default async function BookingPage() {
  return cmsOrStatic('booking', <BookingPageStatic />)
}
