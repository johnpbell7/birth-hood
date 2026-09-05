import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import StatBlockImage from '@/components/StatBlockImage'
import CtaBand from '@/components/CtaBand'
import PackageQuizModal from '@/components/PackageQuizModal'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Birth Doula in Leicester & the Midlands',
  description:
    'Continuous in-person birth doula support across Leicestershire and the Midlands. Antenatal planning, comfort in labour and a calm postnatal debrief.',
}

function BirthDoulaPageStatic() {
  return (
    <>
      <CmsPageHero
        page="birth-doula"
        eyebrow="Professional birth support"
        title={<>Birth <em>Doula</em> Support</>}
        subtitle="Continuous, compassionate non-medical support before, during and after your birth."
        img1={{ src: '/images/birth-pool-partner-316.jpg', alt: 'Partner support' }}
        img2={{ src: '/images/birth-pool-rest-299.jpg', alt: 'In the pool' }}
        actions={
          <a
            href="https://calendly.com/birthhood/free-consultation"
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
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontStyle: 'italic', color: 'var(--grey-dark)', lineHeight: 1.6, marginBottom: '1rem' }}>
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
              <StatBlockImage src="/images/birth-pool-partner-316.jpg" alt="Leanne supporting a couple through labour" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Full support <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>before, during &amp; after</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Before birth */}
            <div className="card" style={{ borderTop: '3px solid var(--pink)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Before birth</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 500, marginBottom: '1rem' }}>
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
                  'On-call support (from 38 weeks — varies by package)',
                ].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* During birth */}
            <div className="card" style={{ borderTop: '3px solid var(--pink-deep)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>During birth</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 500, marginBottom: '1rem' }}>
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
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 500, marginBottom: '1rem' }}>
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
      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>package</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.3rem', maxWidth: '600px' }}>
            Every package includes a free initial consultation so we can make sure we&apos;re the right fit before you commit.
          </p>
          <div style={{ marginBottom: '3rem' }}>
            <PackageQuizModal label="Not sure? Find your package →" />
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Foundation */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Foundation · Essential
              </div>
              <div className="price-amount">£1,095</div>
              <div className="price-period">streamlined but essential</div>
              <ul className="price-features">
                <li>1 antenatal session (2 hours)</li>
                <li>Personalised birth planning (discussion)</li>
                <li>On-call from 39 weeks</li>
                <li>Full continuous in-person birth support</li>
                <li>1 hour immediate post-birth support</li>
                <li>1 postnatal visit (90 minutes)</li>
                <li>Phone &amp; email support for 2 weeks postpartum</li>
                <li>Optional birth pool hire (additional cost)</li>
              </ul>
              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>

            {/* Balanced (featured) */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Most popular
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Balanced · Enhanced
              </div>
              <div className="price-amount">£1,495</div>
              <div className="price-period">solid support, perfectly balanced</div>
              <ul className="price-features">
                <li>2 antenatal sessions (2–3 hours each)</li>
                <li>Personalised birth planning &amp; hypnobirthing resources</li>
                <li>On-call from 10 days before your due date</li>
                <li>Full continuous in-person birth support</li>
                <li>2 hours immediate post-birth support</li>
                <li>1 postnatal visit (2 hours)</li>
                <li>Ongoing phone &amp; email support for 6 weeks</li>
                <li>Birth pool &amp; TENS machine hire included</li>
                <li>Full online Hub &amp; hypnobirthing access</li>
              </ul>
              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>

            {/* Ultimate */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Ultimate · Comprehensive
              </div>
              <div className="price-amount">£2,000</div>
              <div className="price-period">the most comprehensive package!</div>
              <ul className="price-features">
                <li>4 antenatal sessions (2–3 hours each)</li>
                <li>Dedicated, bespoke birth planning</li>
                <li>On-call from 38 weeks</li>
                <li>Full continuous in-person birth support</li>
                <li>3 hours immediate post-birth support</li>
                <li>3 postnatal visits (2 hours each)</li>
                <li>Unlimited phone &amp; email support for 12 weeks</li>
                <li>Birth pool &amp; TENS hire + all digital resources</li>
                <li>Appointment accompaniment &amp; flexible sessions</li>
                <li>Bespoke postpartum recovery kit + doula gift bag</li>
              </ul>
              <a
                href="https://calendly.com/birthhood/free-consultation"
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
            <a href="https://calendly.com/birthhood/free-consultation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)' }}>Book a free consultation →</a>
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonials" style={{ padding: '5rem 3rem' }}>
        <div className="wrap">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              &ldquo;My advice to anyone thinking to book Leanne would be to not hesitate as she&apos;s definitely &lsquo;worth every penny&rsquo; as one of the home birth midwives rightly said! She knows her job inside out and ensures she creates a loving and strong relationship with all her clients. I&apos;m so glad I found her. My Husband and I could not have been happier with what we achieved. Thank you!&rdquo;
            </p>
            <div className="review-author">Birth-hood client ★★★★★</div>
          </div>
        </div>
      </section>


      <CtaBand
        heading="Ready to have your person in the room?"
        body="Book a free consultation to discuss birth doula support for your birth."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function BirthDoulaPage() {
  return cmsOrStatic('birth-doula', <BirthDoulaPageStatic />)
}
