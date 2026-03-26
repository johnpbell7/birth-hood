import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Doula Services',
}

export default function DoulaPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional doula support"
        title={<>Doula <em>Services</em></>}
        subtitle="Continuous, compassionate non-medical support before, during and after your birth. For every pregnancy, every birth, every person."
        img1={{ src: '/images/doula-support.png', alt: 'Doula support' }}
        img2={{ src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking' }}
        actions={
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Consultation
          </a>
        }
      />

      <MarqueeStrip />

      {/* WHAT IS A DOULA */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What is a doula?</div>
              <h2>Your person in the room</h2>
              <p>
                A doula is a trained, non-medical birth professional who provides continuous physical,
                emotional and informational support to a birthing person before, during and after birth.
              </p>
              <p>
                Unlike midwives and doctors, a doula&apos;s sole focus is you. They don&apos;t have clinical
                responsibilities — they are there entirely in your service. Research consistently shows
                that having a doula present leads to better outcomes for both birthing people and babies.
              </p>
              <p>
                A doula never replaces your medical team — they complement them, helping you navigate
                the system and ensuring your voice is heard.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">25%</div>
                  <div className="stat-label">Fewer c-sections with continuous doula support (Cochrane Review)</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">31%</div>
                  <div className="stat-label">Less pain relief requested when a doula is present</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">34%</div>
                  <div className="stat-label">Less likely to have a negative birth experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">Rated by every client Leanne has supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">Services</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Choose the support that&apos;s <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>right for you</em>
          </h2>
          <div className="grid-3" style={{ gap: '1.5rem' }}>

            {/* Birth Doula */}
            <div className="card" style={{ borderTop: '3px solid var(--pink)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>In-person support</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
                Birth Doula
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                Continuous in-person support from early labour through to after your baby arrives.
                Pre-birth antenatal meetings, birth plan help, and a postnatal debrief.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                {['2 antenatal meetings', 'Continuous labour support', 'Birth plan guidance', 'Postnatal debrief', '24/7 on-call from 38 weeks'].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.4rem', fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.6em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/birth-doula" className="btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                Learn More
              </Link>
            </div>

            {/* Virtual Doula */}
            <div className="card card-pink" style={{ borderTop: '3px solid var(--pink-deep)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Online support</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
                Virtual Doula
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                Full doula support delivered entirely online — perfect for those outside Leicester, expats,
                or anyone who prefers remote sessions.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                {['Online antenatal sessions', 'Video check-ins throughout pregnancy', 'Phone/text support during labour', 'Online postnatal debrief', 'UK-wide & international'].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.4rem', fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.6em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/virtual-doula" className="btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                Learn More
              </Link>
            </div>

            {/* Postnatal Doula */}
            <div className="card" style={{ borderTop: '3px solid var(--pink)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>After birth</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
                Postnatal Support
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                Support in the fourth trimester — the weeks after birth when you&apos;re adjusting to
                parenthood. Practical help, emotional support and a listening ear.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                {['Birth debrief & story-listening', 'Breastfeeding/feeding support', 'Emotional wellbeing check-ins', 'Signposting to specialist services', 'Available in-person or online'].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.4rem', fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.6em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonials" style={{ padding: '5rem 3rem' }}>
        <div className="wrap">
          <div className="reviews-track" style={{ gridTemplateColumns: '1fr' }}>
            <div className="review-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <p className="review-text">
                Having Leanne at my birth was the most incredible thing. She held space, kept me grounded
                and made sure my wishes were respected throughout. I couldn&apos;t have done it without her.
              </p>
              <div className="review-author">Jess · Leicester ★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to have your person in the room?"
        body="Book a free 30-minute consultation to discuss the right doula support for your birth."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
