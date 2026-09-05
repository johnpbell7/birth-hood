import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Book a Course, Class or Consultation',
  description:
    'Book a hypnobirthing course, pregnancy yoga class or free consultation with birth-hood in Leicestershire and online UK. Secure your place today.',
}

// Courses & classes are booked via Ticket Tailor; consultations via Calendly.
const TICKETS = 'https://www.tickettailor.com/events/birthhood/'
const CALENDLY = 'https://calendly.com/birthhood/free-consultation'

const bookingOptions = [
  {
    title: 'Hypnobirthing Course',
    desc: 'Group or 1-1 hypnobirthing courses — booked through Ticket Tailor. If there are no dates showing, just get in touch and I\'ll sort something.',
    href: TICKETS,
    cta: 'Book Hypnobirthing',
    featured: false,
  },
  {
    title: 'Yoga',
    desc: 'Drop-in class or block booking — booked through Ticket Tailor. Pick your class, pick your date and secure your spot.',
    href: TICKETS,
    cta: 'Book Yoga Class',
    featured: true,
  },
  {
    title: 'Free Consultation',
    desc: 'Not sure which service is right for you? Book a free 30-minute consultation with me via Calendly.',
    href: CALENDLY,
    cta: 'Book Free Call',
    featured: false,
  },
]

function BookingPageStatic() {
  return (
    <>
      <CmsPageHero
        page="booking"
        ctaLabel="View All Availability"
        title={<>Class <em>Booking</em></>}
        subtitle="Book your place on a hypnobirthing course, prenatal yoga class or a free consultation — all in one place."
        img1={{ src: '/images/class-group-257.jpg', alt: 'Group course' }}
        img2={{ src: '/images/leanne-ball-121.jpg', alt: 'Birth ball' }}
        actions={
          <a
            href={TICKETS}
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
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>booking type</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {bookingOptions.map(option => (
              <div
                key={option.title}
                className={option.featured ? 'price-card featured' : 'price-card'}
              >
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 500, marginBottom: '0.8rem' }}>
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

          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--grey-mid)', fontSize: '0.92rem', fontWeight: 300 }}>
            Can&apos;t see a date that suits you, or nothing showing yet?{' '}
            <Link href="/contact" style={{ color: 'var(--pink-deep)', fontWeight: 500 }}>Contact me</Link>{' '}
            and I&apos;ll always do my best to find something that works.
          </p>
        </div>
      </section>

      {/* WHERE TO BOOK */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Book directly <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>online</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '600px', margin: '0 auto 2.2rem' }}>
            Yoga and hypnobirthing courses are booked through <strong>Ticket Tailor</strong>. Free consultations
            are booked through <strong>Calendly</strong>. Both confirm instantly with a confirmation email.
          </p>
          <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={TICKETS} className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem' }}>
              Courses &amp; Classes →
            </a>
            <a href={CALENDLY} className="btn-outline" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem' }}>
              Free Consultation →
            </a>
          </div>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', fontWeight: 300, marginTop: '1.8rem' }}>
            No dates showing for the course you want? <Link href="/contact" style={{ color: 'var(--pink-deep)', fontWeight: 500 }}>Just contact me.</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <h2>Good to know</h2>
              <p>
                Yoga and hypnobirthing courses are booked through <strong>Ticket Tailor</strong>, and free
                consultations through <strong>Calendly</strong> — both let you choose your slot and pay securely online.
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
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
                If you&apos;re not sure where to start, a free consultation is always the best first step.
                There&apos;s no obligation, no pressure and no hard sell — just an honest conversation
                about what kind of support would work best for you.
              </p>
              <a
                href="https://calendly.com/birthhood/free-consultation"
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
        href={TICKETS}
        label="View All Availability"
      />
    </>
  )
}

export default async function BookingPage() {
  return cmsOrStatic('booking', <BookingPageStatic />)
}
