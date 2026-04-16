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
        img1={{ src: '/images/doula-support.png', alt: 'Doula support' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
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

      {/* AVAILABILITY NOTICE */}
      <section style={{ background: 'var(--pink-ultra)', padding: '1.25rem 0', borderBottom: '1px solid var(--pink-pale)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--pink-deep)', letterSpacing: '0.02em', margin: 0 }}>
            I&apos;m taking bookings for births due December 2026 onwards
          </p>
        </div>
      </section>

      {/* TESTIMONIAL NEAR TOP */}
      <section style={{ background: 'var(--pink-pale)', padding: '3.5rem 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontStyle: 'italic', color: 'var(--grey-dark)', lineHeight: 1.8, marginBottom: '1rem' }}>
              &ldquo;My advice to anyone thinking to book Leanne would be to not hesitate as she&apos;s definitely &lsquo;worth every penny&rsquo; as one of the home birth midwives rightly said! She knows her job inside out and ensures she creates a loving and strong relationship with all her clients. I&apos;m so glad I found her. My Husband and I could not have been happier with what we achieved. Thank you!&rdquo;
            </p>
            <div style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)' }}>
              Birth-hood client ★★★★★
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DOES A BIRTH DOULA DO */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What does a birth doula do?</div>
              <h2>Your advocate, your support, your person</h2>
              <p>
                A birth doula provides continuous, compassionate non-medical support throughout
                your entire birth journey — from pregnancy all the way through to your postnatal
                recovery. Unlike your midwife or doctor, a doula has no clinical responsibilities;
                their entire focus is on you and your wellbeing.
              </p>
              <p>
                I build a genuine relationship with you and your partner before birth so that when
                the day arrives, you have someone who truly knows you, your wishes and your fears.
                Someone who will hold your hand, remind you of your strength, and make sure your
                voice is heard.
              </p>
              <p>
                Research from the Cochrane Review — the gold standard in medical evidence —
                consistently shows that continuous support during labour leads to significantly
                better outcomes for birthing people and babies.
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
            Full support <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>before, during &amp; after</em>
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
                  'Personalised birth planning sessions',
                  'Evidence-based information about all your options',
                  'Preparation for all possible birth scenarios',
                  'Partner preparation & coaching',
                  'Hypnobirthing booklet & relaxation techniques',
                  'Access to the birth-hood online Hub',
                  'On-call support from 39 weeks',
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
                  'Free birth pool hire (Ultimate package)',
                  'Free TENS machine hire (Ultimate package)',
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
                Postnatal support
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Postnatal debrief & recovery visit',
                  'Postpartum recovery tips & guidance',
                  'Bespoke postpartum care kit (Ultimate package)',
                  'Space to process your birth experience',
                  'Signposting to specialist support if needed',
                  'Infant feeding guidance and resources',
                  'Ongoing phone & email support',
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

      {/* PACKAGES / INVESTMENT */}
      <section className="section-pad" style={{ background: 'var(--pink-pale)' }}>
        <div className="wrap">
          <div className="section-label">Investment</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>package</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '3rem', maxWidth: '600px' }}>
            Every package includes a free initial consultation so we can make sure we&apos;re the right fit before you commit.
          </p>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Essential Support */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Essential Support
              </div>
              <div className="price-amount">£995</div>
              <div className="price-period">streamlined but essential</div>
              <ul className="price-features">
                <li>1 prenatal session (2 hours)</li>
                <li>On-call from 39 weeks</li>
                <li>Full continuous birth support</li>
                <li>1 hour post-birth support</li>
                <li>1 postnatal visit (90 minutes)</li>
                <li>Phone &amp; email support for 2 weeks postpartum</li>
                <li>Optional birth pool hire (additional cost)</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>

            {/* Ultimate Support (featured) */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Most popular
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Ultimate Support
              </div>
              <div className="price-amount">£2,000</div>
              <div className="price-period">the most comprehensive package!</div>
              <ul className="price-features">
                <li>Best for first-time parents wanting in-depth preparation</li>
                <li>birth-hood doula gift bag</li>
                <li>Free birth pool hire</li>
                <li>Free TENS machine hire</li>
                <li>Personalised birth planning</li>
                <li>Postpartum recovery tips &amp; bespoke care kit</li>
                <li>Hypnobirthing booklet</li>
                <li>Digital access to the online Hub</li>
                <li style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>Min. 2 antenatal &amp; 1 postnatal — sessions can be personalised</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>

            {/* Balanced Support */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Balanced Support
              </div>
              <div className="price-amount">£1,495</div>
              <div className="price-period">solid support, perfectly balanced</div>
              <ul className="price-features">
                <li>2 prenatal sessions (2–3 hours each)</li>
                <li>Birth planning, comfort &amp; emotional readiness</li>
                <li>On-call from 39 weeks</li>
                <li>Full continuous birth attendance</li>
                <li>Postnatal debrief visit</li>
                <li>Ongoing email &amp; phone support</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--grey-mid)', fontSize: '0.88rem', fontWeight: 300 }}>
            Payment plans available for all doula services, just let me know!{' '}
            <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)' }}>Book a free consultation →</a>
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonials" style={{ padding: '5rem 3rem' }}>
        <div className="wrap">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              &ldquo;My advice to anyone thinking to book Leanne would be to not hesitate as she&apos;s definitely &lsquo;worth every penny&rsquo; as one of the home birth midwives rightly said! She knows her job inside out and ensures she creates a loving and strong relationship with all her clients. I&apos;m so glad I found her. My Husband and I could not have been happier with what we achieved. Thank you!&rdquo;
            </p>
            <div className="review-author">Birth-hood client ★★★★★</div>
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
