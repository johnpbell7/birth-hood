import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Birth Trauma Support',
}

export default function BirthTraumaPage() {
  return (
    <>
      <PageHero
        eyebrow="Healing is possible."
        title={<>Birth <em>Trauma</em> Support</>}
        subtitle="Whether your birth was frightening, overwhelming or just not what you hoped — your feelings are valid, and you don't have to carry them alone."
        img1={{ src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        actions={
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Conversation
          </a>
        }
      />

      <MarqueeStrip />

      {/* WHAT IS BIRTH TRAUMA */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">Understanding birth trauma</div>
              <h2>What is birth trauma?</h2>
              <p>
                Birth trauma occurs when a birth experience leaves you feeling frightened, out of
                control, unheard or overwhelmed — regardless of whether the birth was medically
                &ldquo;straightforward&rdquo;. Trauma is defined by your experience, not by what
                happened on a medical chart.
              </p>
              <p>
                Birth trauma is more common than many people realise. Research suggests that around
                1 in 3 women describe their birth as traumatic, and around 4–6% go on to develop
                post-traumatic stress disorder (PTSD).
              </p>
              <p>
                You do not need to have had a complicated birth to be affected. A birth that others
                describe as &ldquo;fine&rdquo; can still be deeply traumatic for you — and your
                experience deserves to be acknowledged.
              </p>

              <h2>Signs you may be affected</h2>
              <p>
                Birth trauma can present in many different ways. You may recognise some of the following:
              </p>
              <ul>
                <li>Flashbacks or intrusive memories of the birth</li>
                <li>Nightmares or disturbed sleep</li>
                <li>Anxiety, panic or hypervigilance</li>
                <li>Feeling disconnected from your baby</li>
                <li>Difficulty talking about the birth, or avoiding reminders of it</li>
                <li>Feeling angry, guilty or like you failed</li>
                <li>Fear of future pregnancy or birth</li>
                <li>Relationship difficulties with your partner or care team</li>
              </ul>
              <p>
                If any of these resonate, please know that help is available — and that healing
                is absolutely possible.
              </p>
            </div>

            {/* SUPPORT CARDS */}
            <div>
              <div className="card card-pink" style={{ marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Important note</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
                  Leanne is not a therapist or mental health professional. Her support is
                  trauma-informed and compassionate, but she is not a replacement for specialist
                  psychological care. Where appropriate, she will always refer you to the right
                  specialist support.
                </p>
              </div>

              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>It&apos;s never too late</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
                  You may be processing a birth that happened recently — or one that was years ago.
                  Birth trauma does not have a time limit. Whether your baby is six weeks or six
                  years old, your experience is valid and deserves to be heard.
                </p>
              </div>

              <blockquote style={{
                borderLeft: '3px solid var(--pink)',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
              }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--black)', marginBottom: '0.8rem' }}>
                  &ldquo;Your birth story deserves to be told and heard. You deserve to feel better.&rdquo;
                </p>
                <cite style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)', fontStyle: 'normal' }}>
                  — Leanne
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* HOW LEANNE CAN HELP */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">How I can help</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1.1 }}>
            Trauma-informed <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>support</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <div className="card">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Birth story listening</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.7rem' }}>
                A space to be heard
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                Sometimes, the most powerful thing is having someone truly listen to your birth story
                without judgement, minimising or fixing. Leanne offers a safe, non-judgemental space
                to share your experience at your own pace.
              </p>
            </div>

            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Trauma-informed care</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.7rem' }}>
                Skilled support
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                With specialist perinatal mental health training, Leanne understands the complexity of
                birth trauma and provides support that is sensitive, gentle and empowering — never
                retraumatising.
              </p>
            </div>

            <div className="card">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Onward referral</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.7rem' }}>
                Connecting you to specialists
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
                If Leanne feels you would benefit from specialist psychological support, she can
                refer you to trusted therapists, EMDR practitioners, Birth Trauma Association
                resources and NHS services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div className="section-label">Helpful resources</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
            You are <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>not alone</em>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                name: 'Birth Trauma Association',
                url: 'https://www.birthtraumaassociation.org.uk',
                desc: 'The leading UK charity supporting people affected by birth trauma. Free resources, peer support and professional directory.',
              },
              {
                name: 'Make Birth Better',
                url: 'https://www.makebirthbetter.org',
                desc: 'A collaborative network of professionals working to support those affected by traumatic birth.',
              },
              {
                name: 'PANDAS Foundation',
                url: 'https://pandasfoundation.org.uk',
                desc: 'Perinatal mental health support for those experiencing depression, anxiety and PTSD during and after pregnancy.',
              },
            ].map(resource => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--pink-deep)' }}>
                      {resource.name} →
                    </h3>
                    <p style={{ color: 'var(--grey-mid)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>
                      {resource.desc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="card card-pink" style={{ marginTop: '2rem' }}>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
              If you are in crisis, please contact your GP, midwife, health visitor, or call the
              Samaritans on <strong style={{ color: 'var(--black)' }}>116 123</strong> (free, 24/7).
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to start healing?"
        body="Book a gentle, no-obligation conversation with Leanne to talk about your experience and how she can support you."
        href="https://calendly.com/birthhood"
        label="Book a Conversation"
      />
    </>
  )
}
