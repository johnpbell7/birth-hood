import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Prenatal & Postnatal Yoga',
}

const faqItems = [
  {
    q: 'Is prenatal yoga safe throughout pregnancy?',
    a: 'Yes — Leanne\'s classes are specifically designed for pregnancy and are safe from the first trimester through to birth. The classes are adapted for each trimester, with modifications offered at every stage. As always, if you have any concerns or complications, please check with your midwife or doctor before joining.',
  },
  {
    q: 'Do I need prior yoga experience?',
    a: 'Absolutely not. The classes are suitable for complete beginners and experienced yogis alike. Everything is taught from scratch with clear instructions, and there is no expectation of any prior yoga knowledge or flexibility. If you\'ve never done yoga in your life, you are very welcome.',
  },
  {
    q: 'When should I start prenatal yoga?',
    a: 'You can start prenatal yoga at any point in your pregnancy, though many people find the second trimester (from around 14 weeks) the most comfortable time to begin. However, if you are already a regular yoga practitioner, you can continue adapted classes from the very beginning.',
  },
  {
    q: 'What do I need to bring to class?',
    a: 'Wear comfortable, stretchy clothing. Yoga mats are provided, but you are welcome to bring your own if you prefer. A water bottle is recommended. Some people also like to bring a small cushion or pillow for relaxation at the end of class.',
  },
]

export default function YogaPage() {
  return (
    <>
      <PageHero
        eyebrow="Move. Breathe. Connect."
        title={<>Prenatal &amp; Postnatal <em>Yoga</em></>}
        subtitle="Prenatal/Postnatal and Parent and Yoga Classes in NW Leicestershire. Nourish your body, calm your mind and prepare for birth."
        img1={{ src: '/images/yoga-class.jpg', alt: 'Prenatal yoga class' }}
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

      <MarqueeStrip />

      {/* WHAT TO EXPECT */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What to expect</div>
              <h2>birth-hood yoga</h2>
              <p style={{ fontStyle: 'italic', color: 'var(--pink-deep)', marginBottom: '0.5rem', fontWeight: 500 }}>
                Prenatal/Postnatal and Parent and Yoga Classes in NW Leicestershire
              </p>
              <p>
                Leanne&apos;s prenatal yoga classes are gentle, welcoming and specifically designed for
                pregnant bodies. Drawing on her 85hr Pregnancy/Postnatal Yoga training with Sally
                Parkes, each class combines breathwork, gentle movement, deep relaxation and community
                — creating a beautiful space for you to connect with your body and your baby.
              </p>
              <p>
                Classes are suitable for all stages of pregnancy and all levels of yoga experience —
                including complete beginners. Modifications are always offered, and you are encouraged
                to move at your own pace and honour what your body needs on any given day.
              </p>
              <p>
                Each session includes a guided relaxation and breathing section — directly preparing
                your body and mind for birth. You may find some of the techniques feel familiar if
                you&apos;ve also done hypnobirthing.
              </p>

              <h3>Each class includes</h3>
              <ul>
                <li>Gentle warm-up and body awareness</li>
                <li>Adapted asana (poses) for pregnancy</li>
                <li>Pranayama (breathing) techniques</li>
                <li>Pelvic floor awareness and activation</li>
                <li>Birth preparation positions and movements</li>
                <li>Guided relaxation and visualisation</li>
                <li>Community time and pregnancy conversation</li>
              </ul>

              <h3>Weekly birth preparation themes</h3>
              <ul>
                <li>Breathing</li>
                <li>Uterus and contractions</li>
                <li>Releasing fears / hypnobirthing</li>
                <li>Practical labour tips</li>
                <li>Birth positions</li>
                <li>Postnatal expectations</li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Benefits of prenatal yoga</div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">↓</div>
                  <div className="stat-label">Reduces anxiety and stress during pregnancy</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">↑</div>
                  <div className="stat-label">Improves sleep quality and physical comfort</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">♥</div>
                  <div className="stat-label">Strengthens the mind-body connection</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">✿</div>
                  <div className="stat-label">Builds community with other expectant parents</div>
                </div>
              </div>

              <div className="card card-pink" style={{ marginTop: '2rem' }}>
                <div className="section-label" style={{ marginBottom: '0.8rem' }}>Qualified &amp; trained</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                  85hr Pregnancy/Postnatal Yoga teaching — Sally Parkes 2022. Leanne is trained in
                  evidence-based approaches to prenatal and postnatal yoga, equipping her to safely
                  support you at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASS OPTIONS */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">Classes &amp; Pricing</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>yoga experience</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem' }}>
            Course cost varies depending on the length of the course.
          </p>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Prenatal Group classes */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Prenatal
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Group classes
              </div>
              <div className="price-amount">£10</div>
              <div className="price-period">PAYG · drop-in welcome</div>
              <ul className="price-features">
                <li>Weekly group classes</li>
                <li>NW Leicestershire venue</li>
                <li>All trimesters welcome</li>
                <li>No prior yoga experience needed</li>
                <li>Mat and props provided</li>
                <li>Community of expectant parents</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Class
              </a>
            </div>

            {/* Postnatal Group classes */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Postnatal
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Group classes
              </div>
              <div className="price-amount">£10</div>
              <div className="price-period">PAYG · drop-in welcome</div>
              <ul className="price-features">
                <li>Suitable from 6 weeks postpartum</li>
                <li>12 weeks for C-section / instrumental</li>
                <li>Restore core and pelvic floor</li>
                <li>Gentle return to exercise</li>
                <li>Supportive community space</li>
                <li>NW Leicestershire venue</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Class
              </a>
            </div>

            {/* Private / Online */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Private or online
              </div>
              <div className="price-amount">POA</div>
              <div className="price-period">tailored to you</div>
              <ul className="price-features">
                <li>One-to-one sessions</li>
                <li>Fully personalised practice</li>
                <li>In-person or online</li>
                <li>Flexible scheduling</li>
                <li>Ideal for complex pregnancies</li>
                <li>Partner welcome to join</li>
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
        </div>
      </section>

      {/* POSTNATAL YOGA */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">Postnatal yoga</div>
              <h2>Reconnect with your body after birth</h2>
              <p>
                This session aims to create a nurturing space to replenish energy, release stress,
                feel supported, restore the core and pelvic floor, improving strength, stamina and
                well-being.
              </p>
              <p>
                Postnatal Yoga is suitable for anyone who has given birth and needs to reconnect
                with their body, release and stretch muscles, rebalancing the pelvic and sacroiliac
                areas to gently get back into exercise.
              </p>
              <p>
                It takes approximately 12–24 months for your body to return to its pre-pregnancy
                state, and our hormonal change can affect the strength and mobility of our joints so
                it&apos;s really important to progressively adapt as opposed to carry on as if nothing
                has happened.
              </p>

              <div className="card card-pink" style={{ marginTop: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '0.8rem' }}>When can I start?</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                  This class is suitable from <strong style={{ color: 'var(--black)' }}>6 weeks postpartum</strong> (vaginal birth) and{' '}
                  <strong style={{ color: 'var(--black)' }}>12 weeks postpartum</strong> for caesarean or instrumental birth / 3rd or 4th degree tears.
                </p>
              </div>
            </div>

            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Benefits of postnatal yoga</div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">↑</div>
                  <div className="stat-label">Restores core strength and pelvic floor</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">↓</div>
                  <div className="stat-label">Releases stress and replenishes energy</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">♥</div>
                  <div className="stat-label">Rebalances pelvic and sacroiliac areas</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">✿</div>
                  <div className="stat-label">Improves strength, stamina and well-being</div>
                </div>
              </div>

              <div className="card" style={{ marginTop: '2rem' }}>
                <div className="section-label" style={{ marginBottom: '0.8rem' }}>PAYG pricing</div>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 900, color: 'var(--black)', marginBottom: '0.2rem' }}>£10</p>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                  Per class — drop-in welcome. Course cost varies depending on the length of the course.
                </p>
                <a
                  href="https://calendly.com/birthhood"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '1rem' }}
                >
                  Book Your Place
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Common questions</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Yoga <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>FAQs</em>
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CtaBand
        heading="Ready to move, breathe and connect?"
        body="Book your first prenatal or postnatal yoga class — all levels welcome."
        href="https://calendly.com/birthhood"
        label="Book Your Place"
      />
    </>
  )
}
