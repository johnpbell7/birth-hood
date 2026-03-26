import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Virtual Doula',
}

export default function VirtualDoulaPage() {
  return (
    <>
      <PageHero
        eyebrow="Support wherever you are"
        title={<>Virtual <em>Doula</em></>}
        subtitle="Full doula support online — from antenatal preparation through to postnatal care, without leaving your home."
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
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

      {/* WHAT IS VIRTUAL DOULA */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">How it works</div>
              <h2>All the support, none of the distance</h2>
              <p>
                A virtual doula offers the same compassionate, evidence-based support as in-person
                doula care — delivered entirely online. From your first antenatal session to your
                postnatal debrief, Leanne is with you every step of the way via video call,
                phone and message.
              </p>
              <p>
                During labour, Leanne is available by phone and video call to provide guidance,
                encouragement and calm support — coaching you and your birth partner in real time
                through breathing techniques, comfort measures and decision-making.
              </p>
              <p>
                Virtual doula support is ideal for those who prefer the convenience of online sessions,
                those who aren&apos;t local to Leicester, or those looking for more affordable support
                without compromising on quality.
              </p>
            </div>
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">UK-wide</div>
                  <div className="stat-label">Available to families anywhere in the UK and internationally</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">On-call support from 38 weeks via phone and message</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">Rated by every virtual doula client</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">POA</div>
                  <div className="stat-label">Price on application — affordable packages available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">What&apos;s included</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Full online <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>doula support</em>
          </h2>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            <div className="card">
              <div className="section-label" style={{ marginBottom: '1rem' }}>During pregnancy</div>
              <ul style={{ listStyle: 'none' }}>
                {[
                  '2 online antenatal sessions (video call)',
                  'Comprehensive birth plan guidance',
                  'Evidence-based information about your choices',
                  'Partner coaching for birth support',
                  'Preparation for all birth scenarios',
                  'Unlimited WhatsApp support throughout pregnancy',
                ].map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.6rem', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '1rem' }}>During & after birth</div>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Phone/video support throughout early labour',
                  'Real-time coaching via call during active labour',
                  'Text support available throughout',
                  'Post-birth check-in call',
                  'Online postnatal debrief session',
                  'Signposting to local and specialist services',
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

      {/* WHO IS IT FOR */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Is virtual doula right for me?</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Ideal for <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>anyone who…</em>
          </h2>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {[
              { label: 'Lives outside Leicester', desc: 'Get full doula support wherever you are in the UK or internationally.' },
              { label: 'Prefers the comfort of home', desc: 'All sessions happen in your own space — comfortable, convenient, no travel.' },
              { label: 'Is looking for affordable support', desc: 'Virtual packages are more accessible whilst maintaining the same quality of care.' },
              { label: 'Is an expat or living abroad', desc: 'Bilingual sessions available — Leanne can support families across time zones.' },
            ].map(item => (
              <div key={item.label} className="card card-pink">
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
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

      {/* INVESTMENT */}
      <section className="section-pad-sm" style={{ background: 'var(--pink-pale)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.8rem' }}>Investment</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Price on application
            </h3>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300, maxWidth: '500px' }}>
              Virtual doula packages are tailored to your needs and budget. Book a free consultation
              to discuss pricing and payment plans.
            </p>
          </div>
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Consultation
          </a>
        </div>
      </section>

      <CtaBand
        heading="Ready to get started online?"
        body="Book your free virtual consultation and let's talk about how I can support you from wherever you are."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
