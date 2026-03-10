import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Birth Masterclass',
}

export default function MasterclassPage() {
  return (
    <>
      <PageHero
        eyebrow="One session. Total transformation."
        title={<>Birth <em>Masterclass</em></>}
        subtitle="A 2-hour deep dive into birth preparation — everything you need to know to approach your birth with confidence."
        actions={
          <>
            <a
              href="https://calendly.com/birthhood"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Place — £65
            </a>
            <Link href="/hypnobirthing" className="btn-ghost">
              Explore the full course →
            </Link>
          </>
        }
      />

      <MarqueeStrip />

      {/* ABOUT THE MASTERCLASS */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What is it?</div>
              <h2>Birth confidence in two hours</h2>
              <p>
                The birth-hood Birth Masterclass is a single, powerful 2-hour session that gives you
                a comprehensive overview of everything you need to know to feel confident and prepared
                for birth — without the commitment of a full four-session course.
              </p>
              <p>
                Whether you&apos;re short on time, looking for a powerful top-up to work you&apos;ve
                already done, or simply want a taste of what hypnobirthing has to offer, the masterclass
                delivers real, life-changing knowledge in a single session.
              </p>
              <p>
                Delivered by Leanne in a small group format (maximum 8 couples) or as a private session,
                the masterclass is relaxed, interactive and full of practical tools you can use right away.
              </p>
            </div>

            {/* Pricing card */}
            <div>
              <div className="price-card featured" style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '1.5rem' }}>
                  Birth Masterclass
                </div>
                <div className="price-amount">£65</div>
                <div className="price-period">per couple · 2 hours</div>
                <ul className="price-features" style={{ margin: '1.5rem 0' }}>
                  <li>2-hour group session</li>
                  <li>Maximum 8 couples</li>
                  <li>Comprehensive workbook included</li>
                  <li>Relaxation audio download</li>
                  <li>Q&A with Leanne</li>
                  <li>Leicester venue or online</li>
                </ul>
                <a
                  href="https://calendly.com/birthhood"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', marginBottom: '1rem' }}
                >
                  Book Your Place
                </a>
                <p style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', textAlign: 'center', fontWeight: 300 }}>
                  Private sessions also available — enquire for pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">What&apos;s covered</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Everything you need in <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>two hours</em>
          </h2>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {[
              {
                num: '01',
                title: 'Understanding birth',
                desc: 'The physiology of birth, the fear-tension-pain cycle, and how your mindset shapes your experience. The foundational knowledge that changes everything.',
              },
              {
                num: '02',
                title: 'Your rights in the maternity system',
                desc: 'What you can and cannot be told, the BRAIN framework for decision-making, and how to ensure your voice is heard at every stage.',
              },
              {
                num: '03',
                title: 'Writing a birth plan that gets read',
                desc: 'How to write a birth plan that your midwife and care team will actually engage with — covering all your preferences and preparing for alternatives.',
              },
              {
                num: '04',
                title: 'The birth partner\'s role',
                desc: 'How birth partners can actively support during labour — including comfort measures, environmental management and gentle advocacy.',
              },
            ].map(item => (
              <div key={item.num} className="card" style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{
                  fontFamily: 'Abril Fatface, serif', fontSize: '2.5rem', color: 'var(--pink-pale)',
                  lineHeight: 1, flexShrink: 0, width: '3rem',
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Is this right for me?</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Perfect for <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>anyone who…</em>
          </h2>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              {
                label: 'Can\'t commit to a full course',
                desc: 'Life is busy. The masterclass gives you the most important knowledge in a single powerful session — no four-week commitment needed.',
              },
              {
                label: 'Has done hypnobirthing before',
                desc: 'A brilliant refresher for a second pregnancy, or a top-up for those who want to revisit and reinforce their knowledge.',
              },
              {
                label: 'Wants to focus on birth partners',
                desc: 'Birth partners can attend the masterclass alone to understand their role and learn how to provide practical, active support.',
              },
            ].map(item => (
              <div key={item.label} className="card card-pink">
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {item.label}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                Want more than the masterclass?
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>
                Explore the full four-session hypnobirthing course for a comprehensive birth education experience.
              </p>
            </div>
            <Link href="/hypnobirthing" className="btn-outline">
              Explore Full Course
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to transform your birth confidence?"
        body="Book your masterclass place today — just £65 per couple."
        href="https://calendly.com/birthhood"
        label="Book Your Place — £65"
      />
    </>
  )
}
