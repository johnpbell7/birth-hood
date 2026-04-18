import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Postnatal Doula',
}

export default function PostnatalDoulaPage() {
  return (
    <>
      <PageHero
        eyebrow="The fourth trimester"
        title={<>Postnatal <em>Doula</em></>}
        subtitle="Support in the fourth trimester — the weeks after birth when you're adjusting to parenthood."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/doula-support.png', alt: 'Postnatal doula support' }}
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

      {/* WHAT IS A POSTNATAL DOULA */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What is a postnatal doula?</div>
              <h2>Caring for you after birth</h2>
              <p>
                The weeks after birth can be overwhelming, exhausting and emotional — even when
                things go well. A postnatal doula provides practical and emotional support in
                your own home, helping you settle into your new role with confidence.
              </p>
              <p>
                I&apos;m there to take care of you, so you can take care of your baby. Whether
                that means holding baby while you sleep, helping with older siblings, making a
                meal or simply being a calm, experienced presence to talk to — I adapt to
                whatever you need most.
              </p>
              <p>
                Postnatal doula support is completely flexible. Hours can be spread across days,
                weeks or months — structured around your family, your recovery and your life.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">Free</div>
                  <div className="stat-label">Initial consultation — no obligation</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">Flex</div>
                  <div className="stat-label">Hours spread across days, weeks or months</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">2hr</div>
                  <div className="stat-label">Minimum visit length — no rushed drop-ins</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">£40</div>
                  <div className="stat-label">Per hour for additional visits (minimum 2 hours)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">What postnatal doula support includes</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Practical <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>& emotional support</em>
          </h2>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            <div className="card">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Practical help</div>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Helping around the house',
                  'Looking after baby while you nap',
                  'Helping with older siblings',
                  'Making meals and light cooking',
                  'Helping with dinner time or the school run',
                  'Light household tasks',
                ].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Emotional & feeding support</div>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Supporting your feeding choices (breast or bottle)',
                  'Listening to your birth experience',
                  'Emotional support and reassurance',
                  'Guidance on newborn care',
                  'Signposting to specialist services',
                  'A calm, experienced presence throughout',
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

      {/* PACKAGES */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Packages</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>support package</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* 10 hours */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Starter package
              </div>
              <div className="price-amount">£250</div>
              <div className="price-period">10 hours of support</div>
              <ul className="price-features">
                <li>Free initial consultation</li>
                <li>1 hour Zoom postpartum planning session</li>
                <li>10 hours postnatal support</li>
                <li>Minimum 2 hour visits</li>
                <li>Flexible scheduling</li>
                <li>Use across days, weeks or months</li>
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

            {/* 20 hours (featured) */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Best value
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Full package
              </div>
              <div className="price-amount">£400</div>
              <div className="price-period">20 hours of support</div>
              <ul className="price-features">
                <li>Free initial consultation</li>
                <li>1 hour Zoom postpartum planning session</li>
                <li>20 hours postnatal support</li>
                <li>Minimum 2 hour visits</li>
                <li>Flexible scheduling</li>
                <li>Use across days, weeks or months</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Consultation
              </a>
            </div>

            {/* Additional */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Additional visits
              </div>
              <div className="price-amount">£40</div>
              <div className="price-period">per hour · minimum 2 hours</div>
              <ul className="price-features">
                <li>Top up your package anytime</li>
                <li>Same flexible approach</li>
                <li>Minimum 2 hours per visit</li>
                <li>Mileage: 45p/mile over 10 miles</li>
                <li>Billed at end of each visit</li>
                <li>No long-term commitment</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Enquire
              </a>
            </div>
          </div>

          <div className="card card-pink" style={{ marginTop: '2rem', padding: '1.5rem 2rem' }}>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
              <strong style={{ fontWeight: 600 }}>Please note:</strong> Additional mileage is charged at 45p/mile for distances over 10 miles from my base. All visits are a minimum of 2 hours. Hours can be distributed in any way that suits your family.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready for support in the fourth trimester?"
        body="Book a free consultation to discuss postnatal doula support tailored to your family."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
