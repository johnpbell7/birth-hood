import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Session Outlines',
}

export default function SessionOutlinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hypnobirthing course"
        title={<>Session <em>Outlines</em></>}
        subtitle="A detailed breakdown of everything covered in the four-session hypnobirthing course."
        img1={{ src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class' }}
        img2={{ src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking' }}
        actions={
          <Link href="/course-info" className="btn-primary">
            View Course Dates
          </Link>
        }
      />

      {/* INTRO */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <div className="prose" style={{ marginBottom: '3rem' }}>
            <p>
              The birth-hood hypnobirthing course follows the KGHypnobirthing curriculum — the
              UK&apos;s leading hypnobirthing method — and is delivered over four sessions of
              approximately 2.5 hours each. Each session builds on the last, creating a comprehensive
              foundation of knowledge, skills and confidence.
            </p>
            <p>
              Sessions are available as a group course, private course, or online course. All
              course types cover the same content.
            </p>
          </div>

          {/* SESSION 1 */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{
                background: 'var(--black)', color: 'var(--pink)', padding: '1rem 1.5rem',
                fontFamily: 'Abril Fatface, serif', fontSize: '2rem', lineHeight: 1,
                borderRadius: '3px', flexShrink: 0, minWidth: '80px', textAlign: 'center',
              }}>
                01
              </div>
              <div style={{ flex: 1 }}>
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>Session one</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
                  Understanding birth & the mind-body connection
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.5rem' }}>
                  We start at the very beginning — exploring the physiology of birth and understanding
                  exactly how the mind and body work together. This session is often described as
                  &ldquo;the session that changes everything&rdquo;.
                </p>
                <div style={{ background: 'var(--pink-ultra)', border: '1px solid rgba(232,123,195,0.3)', borderRadius: '3px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '1rem' }}>
                    What&apos;s covered
                  </div>
                  <ul style={{ listStyle: 'none' }}>
                    {[
                      'Current mindset and why',
                      'Uterus',
                      'Science',
                      'Fear Tension Pain',
                      'Mind Body Connection',
                      'Positive mindset',
                      'Breathing techniques',
                      'Hypnosis',
                      'Anchoring',
                      'Visualisation',
                      'Affirmations',
                      'Mp3s',
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', paddingLeft: '1.4rem', position: 'relative', marginBottom: '0.55rem', lineHeight: 1.65, fontWeight: 300 }}>
                        <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '1px', height: '2rem', background: 'var(--pink-pale)', margin: '0 auto' }} />

          {/* SESSION 2 */}
          <div style={{ margin: '2rem 0 3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{
                background: 'var(--pink)', color: 'var(--black)', padding: '1rem 1.5rem',
                fontFamily: 'Abril Fatface, serif', fontSize: '2rem', lineHeight: 1,
                borderRadius: '3px', flexShrink: 0, minWidth: '80px', textAlign: 'center',
              }}>
                02
              </div>
              <div style={{ flex: 1 }}>
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>Session two</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
                  Breathing techniques & relaxation
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.5rem' }}>
                  This is the practical heart of hypnobirthing. You&apos;ll learn and practise the
                  breathing techniques that will carry you through every stage of labour — and that
                  many people say felt like a superpower.
                </p>
                <div style={{ background: 'var(--pink-ultra)', border: '1px solid rgba(232,123,195,0.3)', borderRadius: '3px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '1rem' }}>
                    What&apos;s covered
                  </div>
                  <ul style={{ listStyle: 'none' }}>
                    {[
                      'Birth Plans',
                      'Hormones',
                      'The Performance',
                      'Positioning in Pregnancy and Birth',
                      'Birth Partners',
                      'Where to have your baby',
                      'Birthing environment',
                      'Pelvic Floor',
                      'Perineal Massage',
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', paddingLeft: '1.4rem', position: 'relative', marginBottom: '0.55rem', lineHeight: 1.65, fontWeight: 300 }}>
                        <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '1px', height: '2rem', background: 'var(--pink-pale)', margin: '0 auto' }} />

          {/* SESSION 3 */}
          <div style={{ margin: '2rem 0 3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{
                background: 'var(--black)', color: 'var(--pink)', padding: '1rem 1.5rem',
                fontFamily: 'Abril Fatface, serif', fontSize: '2rem', lineHeight: 1,
                borderRadius: '3px', flexShrink: 0, minWidth: '80px', textAlign: 'center',
              }}>
                03
              </div>
              <div style={{ flex: 1 }}>
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>Session three</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
                  Birth preferences & working with your care team
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.5rem' }}>
                  Knowledge is power. This session is all about understanding your rights, making
                  informed decisions and creating a birth plan that will work in any situation —
                  including the unexpected.
                </p>
                <div style={{ background: 'var(--pink-ultra)', border: '1px solid rgba(232,123,195,0.3)', borderRadius: '3px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '1rem' }}>
                    What&apos;s covered
                  </div>
                  <ul style={{ listStyle: 'none' }}>
                    {[
                      'Your Rights',
                      'Language and Birth Rights',
                      'Is Intervention Making Us Safer?',
                      'Risk',
                      'Our Own Stories',
                      'Chilled Out Breathing',
                      'BRAIN Tool',
                      'Decisions and Advocacy Tips',
                      'Distraction Techniques',
                      'Induction',
                      'Estimated Due Dates',
                      '\u2018Natural\u2019 Induction Method',
                      'Signs Your Body is Getting Ready',
                      'Early Labour',
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', paddingLeft: '1.4rem', position: 'relative', marginBottom: '0.55rem', lineHeight: 1.65, fontWeight: 300 }}>
                        <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '1px', height: '2rem', background: 'var(--pink-pale)', margin: '0 auto' }} />

          {/* SESSION 4 */}
          <div style={{ margin: '2rem 0 3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{
                background: 'var(--pink)', color: 'var(--black)', padding: '1rem 1.5rem',
                fontFamily: 'Abril Fatface, serif', fontSize: '2rem', lineHeight: 1,
                borderRadius: '3px', flexShrink: 0, minWidth: '80px', textAlign: 'center',
              }}>
                04
              </div>
              <div style={{ flex: 1 }}>
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>Session four</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
                  Birth partner tools & preparation for the unexpected
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.5rem' }}>
                  The final session brings everything together and ensures your birth partner
                  feels fully equipped to support you. We also cover preparation for the unexpected —
                  so that you feel confident no matter how your birth unfolds.
                </p>
                <div style={{ background: 'var(--pink-ultra)', border: '1px solid rgba(232,123,195,0.3)', borderRadius: '3px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '1rem' }}>
                    What&apos;s covered
                  </div>
                  <ul style={{ listStyle: 'none' }}>
                    {[
                      'Making Contact with a Midwife',
                      'The Journey',
                      'Arriving There/Them Getting to You',
                      'Active Labour',
                      'Slow Or Stopped Labour',
                      'Caesarean Birth',
                      'Assisted Birth',
                      'Pain Relief',
                      'Pushing Stage',
                      'Birth',
                      '3rd Stage',
                      'Golden Hour',
                      'Vitamin K',
                      'The 4th Trimester',
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', paddingLeft: '1.4rem', position: 'relative', marginBottom: '0.55rem', lineHeight: 1.65, fontWeight: 300 }}>
                        <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--pink)', display: 'block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PRACTICE NOTE */}
          <div className="card card-pink" style={{ marginTop: '2rem' }}>
            <div className="section-label" style={{ marginBottom: '0.8rem' }}>A note on practice</div>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
              Between each session, you&apos;ll be given relaxation audio tracks and practice exercises.
              The more you practise the breathing and relaxation techniques, the more effective they
              will be during birth. Most people practise for around 15–20 minutes per day — it quickly
              becomes a lovely part of your pregnancy routine.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to start your hypnobirthing journey?"
        body="Book a free consultation to discuss course dates and find the right option for you."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}
