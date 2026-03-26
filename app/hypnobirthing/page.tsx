import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Hypnobirthing',
}

const faqItems = [
  {
    q: 'When should I start hypnobirthing?',
    a: 'The ideal time to start is between 24 and 28 weeks, as this gives you enough time to practise the techniques before your birth. However, it\'s never too late — even starting at 36+ weeks will give you valuable tools. Some people do the course in early pregnancy and then revisit the materials closer to their due date.',
  },
  {
    q: 'Does hypnobirthing work for caesarean births?',
    a: 'Absolutely. Hypnobirthing techniques are incredibly effective for caesarean births — both planned and unplanned. The breathing, relaxation and mindset tools help you feel calm and in control in the theatre environment. Many of my clients specifically choose hypnobirthing because they\'re planning or preparing for a caesarean.',
  },
  {
    q: 'Can I still have an epidural if I do hypnobirthing?',
    a: 'Yes, 100%. Hypnobirthing is about giving you tools and knowledge — not prescribing a particular type of birth. If you choose an epidural, that is absolutely your right and your choice. Hypnobirthing actually helps you make more informed decisions about pain relief because you fully understand your options.',
  },
  {
    q: 'Does my birth partner need to come?',
    a: 'It\'s highly recommended, but not essential. Birth partners play a really important role in hypnobirthing — they learn practical techniques to support you during labour and understand how to create the right environment. If your birth partner can\'t make some sessions, I can record them or provide notes. Single parents are also very welcome.',
  },
  {
    q: 'I\'m a first-time parent — is hypnobirthing right for me?',
    a: 'Hypnobirthing is wonderful for first-time parents because it gives you a thorough, evidence-based education alongside powerful relaxation tools. You\'ll understand exactly how birth works, what to expect at each stage, and how to work with your body rather than against it. Many of my clients say they wished they\'d known this for a previous birth!',
  },
]

export default function HypnobirthingPage() {
  return (
    <>
      <PageHero
        eyebrow="Calm. Confident. Prepared."
        title={<>Hypno<em>birthing</em></>}
        subtitle="Evidence-based techniques to help you release fear, trust your body and step into birth feeling genuinely excited — not terrified."
        img1={{ src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
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

      {/* WHAT IS HYPNOBIRTHING */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What is it?</div>
              <h2>It&apos;s not about being hypnotised</h2>
              <p>
                Hypnobirthing is a complete antenatal education programme. It combines evidence-based
                information about how birth works with practical relaxation, breathing and visualisation
                techniques to help you approach your birth with calm confidence.
              </p>
              <p>
                Far from putting you into a trance, hypnobirthing teaches you how to work with your
                body — understanding the physiology of birth, releasing fear and tension, and accessing
                your body&apos;s natural ability to birth comfortably.
              </p>
              <p>
                It works for all birth types — vaginal, caesarean, water birth, hospital, home or
                birth centre — and all families.
              </p>
              <h3>What you&apos;ll learn</h3>
              <ul>
                <li>How birth works physiologically and how your mindset affects your experience</li>
                <li>Breathing techniques for each stage of labour</li>
                <li>Deep relaxation and self-hypnosis skills</li>
                <li>Visualisation and affirmation practices</li>
                <li>How to write a birth plan that your care team will respect</li>
                <li>Your rights in the maternity system and how to advocate for yourself</li>
                <li>How birth partners can actively support you</li>
                <li>Preparation for birth in any setting or situation</li>
              </ul>
            </div>

            {/* Stats */}
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">25%</div>
                  <div className="stat-label">Fewer requests for pain relief (Cochrane Review)</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Families supported by Leanne</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">Rated 5 stars from 50+ reviews</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years of experience teaching hypnobirthing</div>
                </div>
              </div>

              <div className="card card-pink" style={{ marginTop: '2rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>KGHypnobirthing</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                  Leanne is a certified KGHypnobirthing practitioner, trained in the UK&apos;s leading
                  hypnobirthing method — developed by Katharine Graves, widely regarded as the gold
                  standard in birth preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE OPTIONS */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">Choose your course</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Course <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>options</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Group Course */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Group Course
              </div>
              <div className="price-amount">£350</div>
              <div className="price-period">per couple · 4 sessions</div>
              <ul className="price-features">
                <li>4 weekly group sessions (2.5hrs each)</li>
                <li>KGHypnobirthing full programme</li>
                <li>Relaxation audio downloads</li>
                <li>Comprehensive course workbook</li>
                <li>Supportive WhatsApp group</li>
                <li>Post-birth debrief session</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>

            {/* Private Course (featured) */}
            <div className="price-card featured">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                Most popular
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Private Course
              </div>
              <div className="price-amount">£550</div>
              <div className="price-period">per couple · your schedule</div>
              <ul className="price-features">
                <li>4 private sessions tailored to you</li>
                <li>Flexible scheduling at your home or online</li>
                <li>Full KGHypnobirthing programme</li>
                <li>Personalised birth plan support</li>
                <li>Relaxation audio downloads</li>
                <li>Unlimited WhatsApp support</li>
                <li>Post-birth debrief session</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>

            {/* Online Course */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Online Course
              </div>
              <div className="price-amount">£350</div>
              <div className="price-period">per couple · fully online</div>
              <ul className="price-features">
                <li>4 sessions via video call</li>
                <li>All the same content as in-person</li>
                <li>UK-wide availability</li>
                <li>Relaxation audio downloads</li>
                <li>Comprehensive course workbook</li>
                <li>Post-birth debrief session</li>
              </ul>
              <a
                href="https://calendly.com/birthhood"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--grey-mid)', fontSize: '0.88rem', fontWeight: 300 }}>
            Payment plans available. Deposit of 50% secures your place.{' '}
            <Link href="/course-info" style={{ color: 'var(--pink-deep)' }}>View current dates →</Link>
          </p>
        </div>
      </section>

      {/* SESSION OUTLINES LINK */}
      <section className="section-pad-sm" style={{ background: 'var(--pink-pale)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Curious what&apos;s covered each week?
            </h3>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>
              Read the full session-by-session breakdown of the hypnobirthing course.
            </p>
          </div>
          <Link href="/session-outlines" className="btn-outline">
            View Session Outlines
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Common questions</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Hypnobirthing <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>FAQs</em>
          </h2>
          <FaqAccordion items={faqItems} />
          <p style={{ marginTop: '2rem', color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>
            More questions?{' '}
            <Link href="/faq" style={{ color: 'var(--pink-deep)' }}>Visit the full FAQ page →</Link>
          </p>
        </div>
      </section>

      <CtaBand
        heading="Ready to feel genuinely excited about birth?"
        body="Book a free consultation to find the right hypnobirthing course for you."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
