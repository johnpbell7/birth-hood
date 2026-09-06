import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import StatBlockImage from '@/components/StatBlockImage'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Overnight Doula in Leicester & the Midlands',
  description:
    'Overnight postnatal doula support in Leicestershire, 10pm to 8am. Actually sleep while your baby is fed, settled and cared for by someone experienced.',
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
    q: 'Booking & payment',
    a: 'Your booking is secured once I have received your completed Overnight Doula Client Agreement and the booking payment. Your booking payment forms part of the total cost of your overnight support.\n\nThe booking payment is due at the time of booking and allows me to reserve the agreed date specifically for you. I will not normally hold an overnight booking date without the completed agreement and booking payment.\n\nThe remaining balance is due 48 hours before your booked overnight shift, unless we have agreed an alternative payment arrangement in writing. If your booking is made less than 48 hours before the planned shift, the full agreed balance will normally be due at the time of booking.\n\nAdditional hours, travel outside the agreed area and any other agreed extras will be charged at the rate confirmed with you before they are booked.\n\nYour booking payment is part-payment towards the service and is not automatically treated as a penalty or forfeited regardless of the circumstances. If you need to cancel or change your booking, the amount payable will be considered in accordance with the cancellation terms below and applicable consumer law.',
  },
  {
    q: 'Shift times',
    a: 'Standard overnight support runs from 10:00pm–8:00am and provides a 10-hour shift. Additional hours before or after your booked shift may be available by prior agreement and are charged at the agreed hourly rate.\n\nOvernight support is not a guarantee that your baby will sleep or that you will get a particular amount of uninterrupted sleep. My role is to provide calm, practical and emotional support and, where agreed, hands-on newborn care so that you have the best opportunity to rest.',
  },
  {
    q: 'Cancellations and changes',
    a: "If you need to cancel or change a booking, please let me know as soon as possible.\n\nWhere you give more than 48 hours' notice, I will normally try to move your booking to another mutually suitable available date, subject to availability.\n\nWhere you give less than 48 hours' notice, I may need to charge some or all of the agreed fee because the time has been reserved specifically for your family and may no longer be reasonably replaceable.\n\nAny cancellation charge will be considered in light of the circumstances, including the amount of notice given, work already carried out, costs already incurred, any savings made, whether I am able to replace the booking and any other relevant circumstances.\n\nCancellation charges are intended to reflect genuine loss or committed professional time rather than operate as a penalty, and all cancellation arrangements remain subject to applicable consumer law and your statutory rights.",
  },
  {
    q: 'Travel',
    a: 'Travel within the agreed area is included. Where your location falls outside the agreed travel area, additional mileage may be charged at £0.45 per mile, together with any reasonable parking or other agreed travel costs. Any additional travel costs will be discussed with you before booking wherever possible.',
  },
  {
    q: 'Illness',
    a: 'Please let me know as soon as possible if you or anyone in your household has a contagious illness. We will discuss whether it is appropriate and safe for the overnight support to go ahead, be rearranged or be adapted.\n\nI may need to decline or rearrange a booking if attending would create an unreasonable risk of infection to me, another family I support or your household.',
  },
  {
    q: 'Safe sleep & baby care',
    a: "Your baby's safety comes first. I will support you to follow current safer-sleep guidance and will not knowingly encourage practices that place your baby at unnecessary risk.\n\nOvernight doula support is not automatically a sleeping shift for the doula. I will not fall asleep while I am the only adult responsible for your baby.\n\nWhere you are sleeping while I provide care for your baby, we will agree in advance how this will work and where your baby will sleep.",
  },
  {
    q: 'Scope of practice',
    a: "As your doula, I provide emotional, practical and evidence-informed support. I do not provide medical care, clinical assessments, diagnosis or treatment, and I do not replace your midwife, health visitor, GP, paediatrician or other healthcare professional.\n\nI can help you understand information, prepare questions, provide practical newborn support and signpost you to appropriate services, but healthcare decisions remain yours and/or those of the relevant healthcare professional.\n\nIf you have an urgent concern about your health or your baby's health, you should contact the appropriate maternity, medical or emergency service.",
  },
  {
    q: 'Safe working environment',
    a: 'I ask families to provide a safe, respectful and smoke-free working environment. I may need to end or pause a visit if I reasonably believe that my safety is compromised, including because of violence, threatening behaviour, unsafe conditions or significant hazards within the home.',
  },
  {
    q: 'Confidentiality',
    a: "Your family's privacy is extremely important. Information shared with me during our work together will be treated confidentially within normal professional and safeguarding boundaries.\n\nThere may be circumstances where I am required to share information by law or where I have a serious safeguarding concern about the safety of you, your baby or another person.",
  },
  {
    q: 'Agreement',
    a: 'Your signed Overnight Doula Client Agreement, together with the birth-hood Master Website Terms & Conditions, forms the agreement between us. The client agreement contains the specific details of your booking, including your chosen package, date, hours and price.',
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
      <CmsPageHero
        page="overnight-doula"
        title={<>Overnight <em>Doula Support</em></>}
        subtitle="The early weeks with your baby are precious — but they can be physically and emotionally demanding. Rest through the night knowing your baby is being cared for with compassion and expertise."
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
              <StatBlockImage src="/images/newborn-cuddle-86.jpg" alt="Newborn cuddles in the early days" />
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
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
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 500, marginBottom: '2rem', lineHeight: 1.1 }}>
            Overnight doula <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>Ts &amp; Cs</em>
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
