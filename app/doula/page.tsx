import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import PackageComparison from '@/components/PackageComparison'
import PackageQuizModal from '@/components/PackageQuizModal'
import AreasCovered from '@/components/AreasCovered'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Doula Services',
  description: 'Compassionate birth, virtual and postnatal doula support in Leicester and the Midlands. Continuous, non-medical care before, during and after birth.',
}

const SITE = 'https://www.birth-hood.co.uk'
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Birth doula support',
  name: 'Doula Services',
  description: 'Continuous, compassionate non-medical birth, virtual and postnatal doula support in Leicester and the Midlands — before, during and after birth.',
  url: `${SITE}/doula`,
  provider: { '@type': 'HealthAndBeautyBusiness', name: 'birth-hood', url: SITE },
  areaServed: ['Leicester', 'Leicestershire', 'Midlands', 'United Kingdom (online)'],
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Doula Services', item: `${SITE}/doula` },
  ],
}

function DoulaPageStatic() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Professional doula support"
        title={<>Doula <em>Services</em></>}
        subtitle="Continuous, compassionate non-medical support before, during and after your birth. For every pregnancy, every birth, every person."
        img1={{ src: '/images/doula-support.jpg', alt: 'Doula support' }}
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
                  <div className="stat-label">Rated by every client I have supported</div>
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
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Choose the support that&apos;s <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>right for you</em>
          </h2>
          <div className="grid-2" style={{ gap: '1.5rem' }}>

            {/* Birth Doula */}
            <div className="card" style={{ borderTop: '3px solid var(--pink)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>In-person support</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.2 }}>
                Birth Doula
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
                Continuous in-person support from early labour through to after your baby arrives.
                Pre-birth antenatal meetings, birth plan help, and a postnatal debrief.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                {['1–4 antenatal sessions', 'Continuous labour support', 'Birth plan guidance', 'Postnatal debrief', '24/7 on-call (from 38 weeks)'].map(item => (
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
            <div className="card" style={{ borderTop: '3px solid var(--pink-deep)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Online support</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.2 }}>
                Virtual Doula
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
                Full doula support delivered entirely online — perfect for those outside NW Leicestershire, expats,
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
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.2 }}>
                Postnatal Support
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
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
              <Link href="/postnatal-doula" className="btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                Learn More
              </Link>
            </div>

            {/* Overnight Doula */}
            <div className="card" style={{ borderTop: '3px solid var(--pink-deep)' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Through the night</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.2 }}>
                Overnight Support
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
                Rest through the night while your baby is cared for with compassion and expertise.
                Overnight shifts run 10pm–8am, tailored to your family.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                {['10-hour overnight shifts (10pm–8am)', 'Feeding & settling support', 'Newborn care through the night', 'Three levels of support from £250', 'Block booking discounts'].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.4rem', fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.6em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/overnight-doula" className="btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BIRTH SUPPORT PACKAGES — COMPARISON */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Birth doula packages</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.1 }}>
            Compare your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>support</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '640px' }}>
            Three levels of birth doula support — from essential cover to a fully comprehensive,
            highly personalised service. Every package includes continuous in-person support throughout
            labour and birth; the difference is how much preparation, access and aftercare comes with it.
          </p>
          <div style={{ marginTop: '1.3rem' }}>
            <PackageQuizModal label="Not sure? Find your package →" />
          </div>
          <PackageComparison />
        </div>
      </section>

      <AreasCovered service="doula support" />

      {/* TESTIMONIAL */}
      <section className="testimonials" style={{ padding: '5rem 3rem' }}>
        <div className="wrap">
          <div className="reviews-track" style={{ gridTemplateColumns: '1fr' }}>
            <div className="review-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <p className="review-text">
                Just incredible! Leanne was amazing from the moment we booked her. She protected my birth
                space perfectly and advocated for me many times.
              </p>
              <div className="review-author">Bea, Leicestershire ★★★★★</div>
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

export default async function DoulaPage() {
  return cmsOrStatic('doula', <DoulaPageStatic />)
}
