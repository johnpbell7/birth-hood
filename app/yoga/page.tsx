import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Prenatal & Postnatal Yoga',
}

const faqItems = [
  {
    q: 'Is prenatal yoga safe throughout pregnancy?',
    a: 'Yes — my classes are specifically designed for pregnancy and are safe from the first trimester through to birth. The classes are adapted for each trimester, with modifications offered at every stage. As always, if you have any concerns or complications, please check with your midwife or doctor before joining.',
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

function YogaPageStatic() {
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

      {/* PREGNANCY YOGA */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">Pregnancy Yoga</div>
              <h2>birth-hood yoga</h2>
              <p>
                Pregnancy yoga has many benefits, both physical and emotional, these include providing
                a safe space to relaxation and connection to your baby, meeting other new mums to be,
                help manage anxiety, improved sleep, improved mobility, stamina and strength, plus so
                much more!
              </p>
              <p>
                Each session will include Pregnancy Yoga activities suitable for both second and third
                trimester (with adaptations to suit most contraindications in pregnancy).
              </p>
              <p>
                The class is 60 minutes which includes Yoga, Relaxation and weekly birth preparation
                themes (please see below).
              </p>
              <p>
                The course cost varies depending on the length of the course, but includes use of all
                equipment (though feel free to bring own mat etc).
              </p>
              <p>
                If you wish to join as a one off session (<strong>&pound;10 PAYG</strong>), please contact
                me for space availability. Please drop me a message if you want to chat anything through.
              </p>

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

            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Benefits of prenatal yoga</div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">&darr;</div>
                  <div className="stat-label">Reduces anxiety and stress during pregnancy</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">&uarr;</div>
                  <div className="stat-label">Improves sleep quality and physical comfort</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">&hearts;</div>
                  <div className="stat-label">Strengthens the mind-body connection</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">&#10047;</div>
                  <div className="stat-label">Builds community with other expectant parents</div>
                </div>
              </div>

              <div className="card card-pink" style={{ marginTop: '2rem' }}>
                <div className="section-label" style={{ marginBottom: '0.8rem' }}>Qualified &amp; trained</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                  85hr Pregnancy/Postnatal Yoga teaching — Sally Parkes 2022. I&apos;m trained in
                  evidence-based approaches to prenatal and postnatal yoga, and I&apos;ll safely
                  support you at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARENT AND BABY YOGA */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">Parent &amp; Baby Yoga</div>
              <h2>Connect with your body and your baby</h2>
              <p>
                Each session will include Postnatal yoga, Baby Yoga and Parent and Baby Yoga activities,
                both allowing time to connect with your body and your baby.
              </p>
              <p>
                The class is 90 minutes which includes Yoga, Relaxation/Story time and Social time with
                refreshments, to chat all things postnatal and socialise with other parents!
              </p>
              <p>
                Course cost varies depending on the length of the course but includes use of all
                equipment (though feel free to bring own mat etc) and refreshments (please let me know
                of any allergies).
              </p>
              <p>
                You will also get yourselves a snazzy birth-hood Yoga Handbook to use outside of the
                sessions!
              </p>
              <p>
                If you wish to join as a one off session, please contact me for space availability.
              </p>
              <p>
                There will be plenty of age appropriate toys to help stimulate and distract your baby
                also! Please bring your own baby blankets.
              </p>
            </div>

            <div>
              <div className="card card-pink" style={{ marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '0.8rem' }}>When can I start?</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                  This is suitable for babies who are not yet mobile, and parents who are{' '}
                  <strong style={{ color: 'var(--black)' }}>6 weeks postpartum</strong> (vaginal birth) and{' '}
                  <strong style={{ color: 'var(--black)' }}>12 weeks postpartum</strong> for caesarean or
                  instrumental birth / 3rd or 4th degree tears. Please drop me a message if you want to
                  chat anything through.
                </p>
              </div>

              <div className="card">
                <div className="section-label" style={{ marginBottom: '0.8rem' }}>What&apos;s included</div>
                <ul style={{ listStyle: 'none' }}>
                  {[
                    '90 minute sessions',
                    'Postnatal yoga, Baby Yoga & Parent and Baby Yoga',
                    'Relaxation / Story time',
                    'Social time with refreshments',
                    'birth-hood Yoga Handbook',
                    'Age appropriate toys provided',
                    'All equipment included',
                  ].map(item => (
                    <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem', lineHeight: 1.6, fontWeight: 300 }}>
                      <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem' }}
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLASS OPTIONS */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Classes &amp; Pricing</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>yoga experience</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '3rem', maxWidth: '600px' }}>
            Course cost varies depending on the length of the course. Every class includes use of all equipment.
          </p>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Private / Online (left) */}
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

            {/* Prenatal Group classes (featured middle) */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Most popular
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Prenatal group classes
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

            {/* Postnatal Group classes (right) */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Postnatal group classes
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

export default async function YogaPage() {
  return cmsOrStatic('yoga', <YogaPageStatic />)
}
