import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Birth Doula',
}

export default function BirthDoulaPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional birth support"
        title={<>Birth <em>Doula</em> Support</>}
        subtitle="Continuous, compassionate non-medical support before, during and after your birth."
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

      {/* WHAT DOES A BIRTH DOULA DO */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What does a birth doula do?</div>
              <h2>Your advocate, your support, your person</h2>
              <p>
                A birth doula provides continuous non-medical support throughout your birth experience.
                Unlike your midwife or doctor, a doula has no clinical responsibilities — their entire
                focus is on you and your wellbeing.
              </p>
              <p>
                Research from the Cochrane Review — the gold standard in medical evidence — consistently
                shows that continuous support during labour leads to significantly better outcomes for
                birthing people and babies.
              </p>
              <p>
                A doula is not there to make decisions for you. They are there to ensure you have the
                information you need to make your own informed decisions, and to support whatever
                choices you make.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">25%</div>
                  <div className="stat-label">Fewer caesarean sections (Cochrane Review)</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">31%</div>
                  <div className="stat-label">Less pain relief requested with doula support</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">34%</div>
                  <div className="stat-label">Less likely to have a negative birth experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Families supported by Leanne</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">What&apos;s included</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Full support <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>before, during & after</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Before birth */}
            <div className="card" style={{ borderTop: '3px solid var(--pink)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Before birth</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>
                Antenatal support
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  '2 in-depth antenatal meetings (in person or online)',
                  'Comprehensive birth plan support',
                  'Evidence-based information about your choices',
                  'Preparation for all possible birth scenarios',
                  'Partner preparation & coaching',
                  '24/7 contact from 38 weeks',
                ].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* During birth */}
            <div className="card card-pink" style={{ borderTop: '3px solid var(--pink-deep)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>During birth</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>
                Birth support
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Continuous in-person presence throughout labour',
                  'Physical comfort techniques (massage, positions, breathing)',
                  'Emotional support & reassurance',
                  'Gentle advocacy — ensuring your wishes are heard',
                  'Supporting your birth partner to support you',
                  'Calm, experienced presence for any situation',
                ].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After birth */}
            <div className="card" style={{ borderTop: '3px solid var(--pink)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>After birth</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>
                Postnatal debrief
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Postnatal debrief session (in person or online)',
                  'Space to process your birth experience',
                  'Signposting to specialist support if needed',
                  'Infant feeding guidance and resources',
                  'Ongoing WhatsApp support',
                  'A proper celebration of what you achieved',
                ].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">Investment</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
                Pricing
              </h2>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '1.5rem' }}>
                Birth doula fees are offered on a price-on-application basis, as every birth journey
                is unique. Prices reflect my experience, qualifications, time and the level of
                continuous support provided.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '2rem' }}>
                Payment plans are available, and I am committed to making birth support accessible.
                Please get in touch to discuss what works for you.
              </p>
              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </div>

            <div className="card card-pink" style={{ padding: '3rem' }}>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>What&apos;s included</div>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Free initial consultation',
                  '2 antenatal meetings',
                  'Birth plan support',
                  'On-call from 38 weeks',
                  'Continuous birth support',
                  'Postnatal debrief',
                  'Ongoing WhatsApp support',
                  'Payment plans available',
                ].map(item => (
                  <li key={item} style={{ fontSize: '0.9rem', color: 'var(--grey-mid)', paddingLeft: '1.4rem', position: 'relative', marginBottom: '0.7rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonials" style={{ padding: '5rem 3rem' }}>
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              &ldquo;Having Leanne at my birth was the most incredible thing. She held space, kept me
              grounded and made sure my wishes were respected throughout.&rdquo;
            </p>
            <div className="review-author">Jess · Leicester ★★★★★</div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to have your person in the room?"
        body="Book a free consultation to discuss birth doula support for your birth."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
