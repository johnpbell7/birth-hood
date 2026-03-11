import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Meet Leanne',
}

export default function MeetLeannePage() {
  return (
    <>
      <PageHero
        eyebrow="Your guide"
        title={<>Meet <em>Leanne</em></>}
        subtitle="Certified hypnobirthing practitioner, birth doula, yoga teacher, and passionate advocate for positive birth experiences."
      />

      <MarqueeStrip />

      {/* MAIN CONTENT */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>

            {/* Photo */}
            <div>
              <div className="about-photo-frame" style={{ maxWidth: '480px', marginBottom: '2rem' }}>
                <Image src="/images/leanne-portrait.jpg" alt="Leanne — birth-hood founder and birth educator" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>

              {/* Quote block */}
              <blockquote style={{
                borderLeft: '3px solid var(--pink)',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
              }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--black)', marginBottom: '0.8rem' }}>
                  &ldquo;Every person deserves to feel powerful, prepared and genuinely excited about their
                  birth experience — regardless of how it unfolds.&rdquo;
                </p>
                <cite style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)', fontStyle: 'normal' }}>
                  — Leanne, birth-hood
                </cite>
              </blockquote>
            </div>

            {/* Story */}
            <div>
              <div className="section-label">My story</div>

              <div className="prose">
                <h2>How it all began</h2>
                <p>
                  My journey into birth work started with my own experiences and a deep frustration at
                  how little preparation most people receive for one of the most significant events of
                  their lives. I trained in hypnobirthing and was instantly passionate about sharing
                  these powerful techniques with others.
                </p>
                <p>
                  From there, I went on to train as a birth doula, prenatal yoga teacher and perinatal
                  mental health support worker — building a holistic set of skills to support people
                  throughout pregnancy and beyond.
                </p>
                <p>
                  Over five years and 200+ families later, I&apos;ve supported births in hospital, at home,
                  in birthing centres, by caesarean, in water and everywhere in between. Every single
                  birth has reinforced my belief that knowledge and support are transformative.
                </p>

                <h2>My approach</h2>
                <p>
                  I believe in evidence-based education, informed consent and the absolute power of a
                  calm, supported environment. I work with all pregnancies, all birth choices and all
                  types of families — LGBTQ+ inclusive, solo parents, those with complex pregnancies.
                  Everyone is welcome here.
                </p>
                <p>
                  I&apos;m not here to tell you what to do. I&apos;m here to give you the knowledge and
                  confidence to make the decisions that are right for you.
                </p>
              </div>

              {/* Credentials */}
              <div style={{ marginTop: '2.5rem' }}>
                <div className="section-label">Qualifications & training</div>
                <div className="credentials" style={{ marginTop: '1rem' }}>
                  <div className="credential">
                    <span className="credential-dot" />
                    KGHypnobirthing Certified Practitioner
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Doula UK Recognised Member
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    BirthLight Prenatal Yoga Teacher
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Perinatal Mental Health Trained
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Paediatric First Aid Certified
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Featured on BBC Radio Leicester
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    5+ years, 200+ families supported
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">As featured in</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Media & <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>appearances</em>
          </h2>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>BBC Radio Leicester</div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                Featured discussing hypnobirthing techniques and the importance of birth preparation for
                expectant parents across the Midlands.
              </p>
            </div>
            <div className="card">
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>Local press</div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                Regular contributor to local parenting publications and community events across
                Leicester and the wider Midlands region.
              </p>
            </div>
            <div className="card">
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>Community events</div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                Speaker at pregnancy fairs, NCT events and maternity unit workshops — spreading the
                message about positive birth preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to work together?"
        body="Book a free 30-minute consultation and let's chat about how I can support you on your birth journey."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
