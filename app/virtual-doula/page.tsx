import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Antenatal & Virtual Doula Support UK-wide',
  description:
    'Antenatal and virtual doula support anywhere in the UK. Birth education, confidence and a doula in your pocket — from £600. Online sessions to suit you.',
}

function VirtualDoulaPageStatic() {
  return (
    <>
      <CmsPageHero
        page="virtual-doula"
        eyebrow="Support wherever you are"
        title={<>Antenatal &amp; Virtual <em>Doula</em></>}
        subtitle="Two ways to work together — comprehensive antenatal preparation in person, or full doula support delivered online wherever you are."
        img1={{ src: '/images/private-session-102.jpg', alt: 'Private session' }}
        img2={{ src: '/images/leanne-peace-111.jpg', alt: 'Leanne' }}
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

      {/* WHAT IS VIRTUAL DOULA */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <h2>All the support, none of the distance</h2>
              <p>
                A virtual doula offers the same compassionate, evidence-based support as in-person
                doula care — delivered entirely online. From your first antenatal session to your
                postnatal debrief, I&apos;m with you every step of the way via video call,
                phone and message.
              </p>
              <p>
                During labour, I&apos;m available by phone and video call to provide guidance,
                encouragement and calm support — coaching you and your birth partner in real time
                through breathing techniques, comfort measures and decision-making.
              </p>
              <p>
                Virtual doula support is ideal for those who prefer the convenience of online sessions,
                those who aren&apos;t local to Leicester, or those looking for more affordable support
                without compromising on quality.
              </p>
            </div>
            {/* Virtual doula keeps the package summary in this slot (the other
                doula pages carry a photo here) — asked for so the investment is
                visible next to the explanation, stacking below it on mobile. */}
            <aside className="pkg-glance">
              <div className="section-label">The packages</div>
              <h3 className="pkg-glance-title">Two ways to work together</h3>

              <div className="pkg-glance-row">
                <p className="pkg-glance-name">Antenatal Doula</p>
                <p className="pkg-glance-desc">
                  3x private antenatal sessions, full birth education and message support
                  right through pregnancy.
                </p>
              </div>

              <div className="pkg-glance-row">
                <p className="pkg-glance-name">Virtual Doula</p>
                <p className="pkg-glance-desc">
                  A doula in your pocket — virtual antenatal sessions, contact through
                  pregnancy and birth, a postnatal debrief and 4 weeks of support after.
                </p>
              </div>

              <p className="pkg-glance-note">
                Full 1-2-1 text/call/email support (24/7 from 39 weeks).
              </p>

              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-primary pkg-glance-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
              <a href="#packages" className="pkg-glance-link">See everything that&apos;s included ↓</a>
            </aside>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Antenatal <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>&amp; virtual</em> support
          </h2>

          <div className="grid-2" style={{ gap: '1.5rem', alignItems: 'stretch' }}>
            {/* Antenatal */}
            <div className="pkg-card">
              <div className="section-label" style={{ marginBottom: '0.6rem' }}>Antenatal Doula package</div>
              <p className="pkg-card-price">From £600</p>
              <p className="pkg-card-lead">
                Your comprehensive birth education and confidence-building pregnancy antenatal support.
              </p>

              <h3 className="pkg-card-label">Includes</h3>
              <ul className="pkg-card-list">
                <li>3x private antenatal sessions (2 hours each)</li>
                <li>
                  Education on:
                  <ul className="pkg-card-sublist">
                    <li>how labour works</li>
                    <li>pain coping strategies</li>
                    <li>medical options and informed consent</li>
                    <li>partner support during labour</li>
                    <li>birth planning support (and so much more)</li>
                  </ul>
                </li>
                <li>Email/WhatsApp support throughout pregnancy</li>
                <li>Digital birth preparation resources, including hypnobirthing resources</li>
              </ul>

              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-primary pkg-card-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Virtual */}
            <div className="pkg-card">
              <div className="section-label" style={{ marginBottom: '0.6rem' }}>Virtual Doula package</div>
              <p className="pkg-card-price">£800</p>
              <p className="pkg-card-lead">
                Similar to the foundation birth package, but virtual rather than face to face — think of it
                as having a doula in your pocket!
              </p>

              <h3 className="pkg-card-label">Includes</h3>
              <ul className="pkg-card-list">
                <li>2x virtual antenatal sessions</li>
                <li>Virtual doula contact throughout pregnancy (9&ndash;5 until on call) and during the birth</li>
                <li>Postnatal debrief</li>
                <li>Virtual support for 4 weeks post birth</li>
              </ul>

              <p className="pkg-card-note">
                Includes full 1-2-1 text/call/email support (24/7 from 39 weeks). For more details on this
                service, please get in touch.
              </p>

              <a
                href="https://calendly.com/birthhood/free-consultation"
                className="btn-primary pkg-card-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Ideal for <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>anyone who…</em>
          </h2>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {[
              { label: 'Lives outside NW Leicestershire', desc: 'Get full doula support wherever you are in the UK or internationally.' },
              { label: 'Prefers the comfort of home', desc: 'All sessions happen in your own space — comfortable, convenient, no travel.' },
              { label: 'Is looking for affordable support', desc: 'Virtual packages are more accessible whilst maintaining the same quality of care.' },
              { label: 'Is an expat or living abroad', desc: 'Get full doula support wherever you are in the world — online sessions work across time zones.' },
            ].map(item => (
              <div key={item.label} className="card card-pink">
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                  {item.label}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to get started online?"
        body="Book your free virtual consultation and let's talk about how I can support you from wherever you are."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function VirtualDoulaPage() {
  return cmsOrStatic('virtual-doula', <VirtualDoulaPageStatic />)
}
