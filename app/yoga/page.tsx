import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Prenatal Yoga',
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
        title={<>Prenatal <em>Yoga</em></>}
        subtitle="Gentle, evidence-based prenatal yoga designed for all stages of pregnancy. Nourish your body, calm your mind and prepare for birth."
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
              <h2>Yoga designed for pregnancy</h2>
              <p>
                Leanne&apos;s prenatal yoga classes are gentle, welcoming and specifically designed for
                pregnant bodies. Drawing on her BirthLight training, each class combines breathwork,
                gentle movement, deep relaxation and community — creating a beautiful space for you
                to connect with your body and your baby.
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
                <div className="section-label" style={{ marginBottom: '0.8rem' }}>BirthLight trained</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                  Leanne is a BirthLight certified prenatal yoga teacher — trained in the UK&apos;s
                  leading evidence-based approach to prenatal and postnatal yoga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASS OPTIONS */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">Classes</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>yoga experience</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Group classes */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Group classes
              </div>
              <div className="price-amount">£12</div>
              <div className="price-period">per class · drop-in welcome</div>
              <ul className="price-features">
                <li>Weekly group classes</li>
                <li>Leicester venue (central)</li>
                <li>All trimesters welcome</li>
                <li>No prior yoga experience needed</li>
                <li>Mat and props provided</li>
                <li>Community of expectant parents</li>
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

            {/* Block booking (featured) */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Best value
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Block booking
              </div>
              <div className="price-amount">£95</div>
              <div className="price-period">10 classes · save £25</div>
              <ul className="price-features">
                <li>10 group classes</li>
                <li>Flexible — use when you like</li>
                <li>Transferable to a friend</li>
                <li>Ideal for the second trimester</li>
                <li>Community WhatsApp group</li>
                <li>All trimesters welcome</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Block
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

      {/* TESTIMONIAL */}
      <section className="testimonials" style={{ padding: '4rem 3rem' }}>
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              &ldquo;The yoga classes were the highlight of my pregnancy. A beautiful mix of movement,
              breathing and community. I wish I&apos;d found Leanne sooner!&rdquo;
            </p>
            <div className="review-author">Priya · Nottingham ★★★★★</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Common questions</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Prenatal yoga <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>FAQs</em>
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CtaBand
        heading="Ready to move, breathe and connect?"
        body="Book your first prenatal yoga class — all levels and all trimesters welcome."
        href="https://calendly.com/birthhood"
        label="Book Your Place"
      />
    </>
  )
}
