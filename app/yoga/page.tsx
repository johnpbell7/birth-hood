import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Pregnancy & Baby Yoga in NW Leicestershire',
  description:
    'Pregnancy yoga and parent & baby yoga classes in NW Leicestershire. Move safely, meet other parents and prepare your body for birth and beyond.',
}

const SITE = 'https://www.birth-hood.co.uk'
// All yoga bookings go through Ticket Tailor.
const TICKET_TAILOR = 'https://www.tickettailor.com/events/birthhood/'
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Pregnancy & parent and baby yoga classes',
  name: 'Pregnancy & Baby Yoga',
  description: 'Pregnancy yoga and parent & baby yoga classes in NW Leicestershire — safe, adapted movement to nourish your body and calm your mind.',
  url: `${SITE}/yoga`,
  provider: { '@type': 'HealthAndBeautyBusiness', name: 'birth-hood', url: SITE },
  areaServed: [
    'Leicestershire', 'North West Leicestershire', 'Northamptonshire', 'Derbyshire',
    'Nottinghamshire', 'Warwickshire', 'Staffordshire',
    'Coalville', 'Ashby-de-la-Zouch', 'Loughborough', 'Leicester', 'Swadlincote', 'Nuneaton',
    'Nottingham', 'Derby', 'Burton upon Trent', 'Tamworth', 'Hinckley', 'Market Harborough',
    'Northampton', 'Lichfield',
    'Midlands', 'United Kingdom (online)',
  ],
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Pregnancy & Baby Yoga', item: `${SITE}/yoga` },
  ],
}

const faqItems = [
  {
    q: 'Is prenatal yoga safe throughout pregnancy?',
    a: 'Yes — my classes are specifically designed for pregnancy and are safe from 12 weeks through to birth. The classes are adapted for each trimester, with modifications offered at every stage. As always, if you have any concerns or complications, please check with your midwife or doctor before joining.',
  },
  {
    q: 'Do I need prior yoga experience?',
    a: 'Absolutely not. The classes are suitable for complete beginners and experienced yogis alike. Everything is taught from scratch with clear instructions, and there is no expectation of any prior yoga knowledge or flexibility. If you\'ve never done yoga in your life, you are very welcome.',
  },
  {
    q: 'When should I start prenatal yoga?',
    a: 'Classes are open from 12 weeks, and you can join at any point after that right through to birth. Many people find the second trimester the most comfortable time to start, but there is no wrong moment — come whenever you are ready.',
  },
  {
    q: 'What do I need to bring to class?',
    a: 'Wear comfortable, stretchy clothing. Yoga mats are provided, but you are welcome to bring your own if you prefer. A water bottle is recommended. Some people also like to bring a small cushion or pillow for relaxation at the end of class.',
  },
]

function YogaPageStatic() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CmsPageHero
        page="yoga"
        ctaLabel="Book Your Place"
        ctaHref={TICKET_TAILOR}
        title={<>Pregnancy &amp; Baby <em>Yoga</em></>}
        subtitle="Two classes in NW Leicestershire — pregnancy yoga to prepare for birth, and parent &amp; baby yoga for afterwards."
        img1={{ src: '/images/yoga-class-189.jpg', alt: 'Pregnancy yoga' }}
        img2={{ src: '/images/baby-sensory-113.jpg', alt: 'Parent & baby' }}
        actions={
          <a
            href={TICKET_TAILOR}
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
              <h2>Pregnancy Yoga</h2>
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
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300 }}>
                  85hr Pregnancy/Postnatal Yoga teaching — Sally Parkes 2022. I&apos;m trained in
                  evidence-based approaches to prenatal and postnatal yoga, and I&apos;ll safely
                  support you at every stage.
                </p>
              </div>

              <a
                href={TICKET_TAILOR}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem' }}
              >
                Book Pregnancy Yoga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARENT AND BABY YOGA */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <h2>Parent &amp; Baby Yoga</h2>
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
                You will also get yourselves a snazzy birth-hood digital Yoga Handbook to use outside of the
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
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300 }}>
                  This is suitable for babies who are not yet mobile, and parents who are{' '}
                  <strong style={{ color: 'var(--black)' }}>6 weeks postpartum</strong> (vaginal birth) and{' '}
                  <strong style={{ color: 'var(--black)' }}>12 weeks postpartum</strong> for caesarean or
                  instrumental birth / 3rd or 4th degree tears. Please drop me a message if you want to
                  chat anything through.
                </p>
              </div>

              <div className="card card-pink">
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
                href={TICKET_TAILOR}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem' }}
              >
                Book Parent &amp; Baby Yoga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Yoga <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>FAQs</em>
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>


      <CtaBand
        heading="Ready to move, breathe and connect?"
        body="Book your place in pregnancy yoga or parent & baby yoga — all levels welcome."
        href={TICKET_TAILOR}
        label="Book Your Place"
      />
    </>
  )
}

export default async function YogaPage() {
  return cmsOrStatic('yoga', <YogaPageStatic />)
}
