import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import StatBlockImage from '@/components/StatBlockImage'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Overnight Postnatal Doula',
  description: 'Overnight postnatal doula support in Leicester and the Midlands. Rest while your baby is cared for overnight — feeding support, settling and newborn care from 10pm–8am.',
}

const SITE = 'https://www.birth-hood.co.uk'
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Overnight postnatal doula support',
  name: 'Overnight Postnatal Doula Support',
  description: 'Overnight newborn and postnatal support (10pm–8am) in Leicester and the Midlands — feeding support, settling and compassionate care so you can rest and recover.',
  url: `${SITE}/overnight-doula`,
  provider: { '@type': 'HealthAndBeautyBusiness', name: 'birth-hood', url: SITE },
  areaServed: ['Leicester', 'Leicestershire', 'Midlands'],
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Doula Services', item: `${SITE}/doula` },
    { '@type': 'ListItem', position: 3, name: 'Overnight Doula', item: `${SITE}/overnight-doula` },
  ],
}

const termsItems = [
  {
    q: 'Booking',
    a: 'A signed agreement and a 25% non-refundable booking fee are required to secure your dates.',
  },
  {
    q: 'Payment',
    a: 'The remaining balance is due 48 hours before your booked overnight shift, unless otherwise agreed.',
  },
  {
    q: 'Shift times',
    a: 'Standard overnight support runs from 10:00pm–8:00am. Additional hours are charged at the agreed hourly rate.',
  },
  {
    q: 'Cancellations',
    a: "More than 48 hours' notice: your booking may be transferred to another available date where possible. Less than 48 hours' notice: the full fee is payable, as your date has been reserved exclusively for your family.",
  },
  {
    q: 'Travel',
    a: 'Travel within an agreed radius is included. Mileage beyond this may be charged at £0.45 per mile, and any parking costs are payable by the client.',
  },
  {
    q: 'Illness',
    a: 'Please let me know as soon as possible if anyone in the household has a contagious illness so we can discuss whether it is safe to proceed.',
  },
  {
    q: 'Scope of practice',
    a: 'As your doula, I provide emotional, practical and evidence-informed support. I do not provide medical care, clinical assessments, or replace the role of your midwife, health visitor, GP or other healthcare professionals.',
  },
  {
    q: 'Safe working environment',
    a: 'Families are asked to provide a safe, respectful, smoke-free working environment. I reserve the right to end a visit if I feel my safety is compromised.',
  },
  {
    q: 'Confidentiality',
    a: "Your family's privacy is extremely important. All personal information shared during our time together will remain confidential unless disclosure is required by law or there is a serious concern about the safety of you or your baby.",
  },
]

const rightForYou = [
  'Are a first-time parent',
  'Are recovering from a long or complex birth',
  'Have had a caesarean birth',
  'Are feeding frequently overnight',
  'Have twins or multiples',
  'Have limited family support nearby',
  'Simply want extra reassurance during those first few weeks',
]

const extras = [
  'First overnight stay in hospital following birth — from £200',
  'Additional hours before or after your booked shift',
  'Daytime postnatal visits',
  'Twins or multiples support',
  'Block booking discounts available for 5 or more nights',
  'Gift vouchers available for baby showers or new parents',
]

function OvernightDoulaPageStatic() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Rest · Recovery · Reassurance"
        title={<>Overnight <em>Doula Support</em></>}
        subtitle="The early weeks with your baby are precious — but they can be physically and emotionally demanding. Rest through the night knowing your baby is being cared for with compassion and expertise."
        img1={{ src: '/images/doula-support.jpg', alt: 'Overnight doula support' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
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

      {/* WHAT IS OVERNIGHT SUPPORT */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">Rest. Recovery. Reassurance.</div>
              <h2>A calm presence through the night</h2>
              <p>
                Whether you&apos;re recovering from birth, navigating feeding, or simply longing
                for a few hours of uninterrupted rest, overnight postnatal support offers a calm,
                experienced presence when you need it most.
              </p>
              <p>
                My overnight support runs from <strong style={{ fontWeight: 600 }}>10:00pm–8:00am</strong>,
                allowing you to rest while knowing your baby is being cared for with compassion
                and expertise.
              </p>
              <p>
                Every family is different, so support is always tailored to your individual needs
                — from gentle reassurance to full hands-on newborn care through the night.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">10hr</div>
                  <div className="stat-label">Overnight shift — 10:00pm to 8:00am</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">£250</div>
                  <div className="stat-label">Per night, from — three support levels</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">Free</div>
                  <div className="stat-label">Initial consultation — no obligation</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Nights — block booking discounts available</div>
                </div>
              </div>
              <StatBlockImage src="/images/leanne-portrait.jpg" alt="Leanne, birth-hood doula" />
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">Overnight packages</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>level of care</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Basic */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Basic Overnight Support
              </div>
              <div className="price-amount">£250</div>
              <div className="price-period">per night · 10-hour shift</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.5, marginBottom: '1.2rem' }}>
                Ideal for families looking for reassurance and gentle support overnight.
              </p>
              <ul className="price-features">
                <li>Bringing baby to you for feeds</li>
                <li>Breastfeeding positioning &amp; encouragement</li>
                <li>General feeding support</li>
                <li>Gentle settling support</li>
                <li>Emotional reassurance</li>
                <li>Newborn care guidance</li>
                <li>A calm, peaceful overnight environment</li>
              </ul>
              <p style={{ fontSize: '0.72rem', color: 'var(--grey-light)', fontWeight: 300, lineHeight: 1.5, marginBottom: '1.2rem' }}>
                Parents remain responsible for most nappy changes and resettling between feeds.
              </p>
              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Consultation
              </a>
            </div>

            {/* Full (featured) */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Most popular
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Full Overnight Support
              </div>
              <div className="price-amount">£350</div>
              <div className="price-period">per night · 10-hour shift</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.5, marginBottom: '1.2rem' }}>
                More hands-on support to maximise your rest and recovery.
              </p>
              <ul className="price-features">
                <li>Everything in Basic, plus:</li>
                <li>All overnight nappy changes</li>
                <li>Bottle feeding (expressed milk or formula)</li>
                <li>Settling &amp; soothing baby after feeds</li>
                <li>Responsive newborn care all night</li>
                <li>Optional feed &amp; nappy log</li>
              </ul>
              <p style={{ fontSize: '0.72rem', color: 'var(--grey-light)', fontWeight: 300, lineHeight: 1.5, marginBottom: '1.2rem' }}>
                Focus on healing and sleep while your baby&apos;s needs are lovingly supported.
              </p>
              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Consultation
              </a>
            </div>

            {/* Premium */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Premium Overnight Recovery
              </div>
              <div className="price-amount">£400</div>
              <div className="price-period">per night · 10-hour shift</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.5, marginBottom: '1.2rem' }}>
                Comprehensive support for extra care during the fourth trimester.
              </p>
              <ul className="price-features">
                <li>Everything in Full, plus:</li>
                <li>Sterilising bottles or pump parts</li>
                <li>Preparing feeding equipment for the morning</li>
                <li>Folding baby&apos;s laundry if time allows</li>
                <li>Birth debrief &amp; emotional support if desired</li>
                <li>Tailored guidance to build your confidence</li>
              </ul>
              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* OPTIONAL EXTRAS */}
          <div className="card card-pink" style={{ marginTop: '2.5rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Optional extras</div>
            <ul style={{ listStyle: 'none' }}>
              {extras.map(item => (
                <li key={item} style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                  <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IS IT RIGHT FOR YOU */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">Is overnight support right for you?</div>
              <h2>Rest isn&apos;t a luxury — it&apos;s part of recovery</h2>
              <p>
                Overnight support isn&apos;t about being unable to cope — it&apos;s about giving
                your body and mind the rest they need to recover well and enjoy these early
                weeks. A well-rested parent has more to give, and those first weeks pass so quickly.
              </p>
              <p>
                Whether it&apos;s one night to catch up on sleep or a block of nights through the
                fourth trimester, support is shaped entirely around your family.
              </p>
            </div>
            <div className="card">
              <div className="section-label" style={{ marginBottom: '1rem' }}>
                Particularly beneficial if you…
              </div>
              <ul style={{ listStyle: 'none' }}>
                {rightForYou.map(item => (
                  <li key={item} style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS & CONDITIONS */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>The practical bits</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 500, marginBottom: '2rem', lineHeight: 1.1 }}>
            Terms &amp; conditions
          </h2>
          <FaqAccordion items={termsItems} />
        </div>
      </section>

      <CtaBand
        heading="Ready to rest?"
        body="If you'd like to discuss overnight support, check availability, or find the package that's right for your family, I'd love to hear from you. Together, we'll create a calm, supported start to life with your baby."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function OvernightDoulaPage() {
  return cmsOrStatic('overnight-doula', <OvernightDoulaPageStatic />)
}
