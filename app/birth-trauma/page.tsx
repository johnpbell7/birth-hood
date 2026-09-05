import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Birth Trauma Support & 3 Step Rewind',
  description:
    'Gentle birth trauma support and 3 Step Rewind in Leicestershire and online UK. If your birth left you overwhelmed, healing is possible and you are not alone.',
}

function BirthTraumaPageStatic() {
  return (
    <>
      <CmsPageHero
        page="birth-trauma"
        ctaLabel="Book a Conversation"
        eyebrow="Healing is possible."
        title={<>Birth <em>Trauma</em> Support</>}
        subtitle="Whether your birth was frightening, overwhelming or just not what you hoped — your feelings are valid, and you don't have to carry them alone."
        img1={{ src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        actions={
          <a
            href="https://calendly.com/birthhood/free-consultation"
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

              <h2>What are feelings of traumatic birth?</h2>
              <p>
                Feelings of traumatic birth may look like, but not limited to, hypervigilance,
                tearfulness, flashbacks, panic, changes to relationships, numbness surrounding the
                event and anger.
              </p>
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

              <h2>Why does it happen?</h2>
              <p>
                The fight or flight response is one of our most primitive survival systems and is
                designed to allow us to act in the face of life threatening danger. The highly
                aroused emotions of fear experienced during the event are &lsquo;frozen&rsquo; in
                the brain.
              </p>
            </div>

            {/* SUPPORT CARDS */}
            <div>
              <div className="card card-pink" style={{ marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Important note</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>
                  I am not a therapist or mental health professional. My support is
                  trauma-informed and compassionate, but I am not a replacement for specialist
                  psychological care. Where appropriate, I will always refer you to the right
                  specialist support.
                </p>
              </div>

              <div className="card card-pink" style={{ marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>It&apos;s never too late</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>
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
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--black)', marginBottom: '0.8rem' }}>
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

      {/* HOW LEANNE CAN HELP — 3 STEP REWIND */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">How I can help</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            The 3 Step <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>Rewind</em>
          </h2>

          <p style={{ color: 'var(--grey-mid)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '700px', marginBottom: '3rem' }}>
            If this is something you&apos;d like to explore — please contact me for a complimentary
            consultation. Here we can discuss if this is the right option for you, or if I need to
            signpost you elsewhere.
          </p>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Session 1 · 1–2 hours</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.7rem' }}>
                Understanding &amp; Relaxation
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300 }}>
                I will ask you some questions about the event and gain an understanding of how it is
                affecting your life now. We will explore your experience through telling it, and
                establish how it is affecting your life now. Together we will build a picture of what
                you would like for the future and what you would like to experience with your symptoms
                lifted. I will then take you through a guided relaxation and provide you with a
                recording of this to listen to regularly before session 2.
              </p>
            </div>

            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Session 2 · 1 hour</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.7rem' }}>
                The Rewind Process
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300 }}>
                We will do the rewind process. I will ease you into a state of relaxation before
                guiding you through remembering the event in a specific way. You will be able to
                remain calm and feeling completely safe and secure throughout.
              </p>
            </div>

            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '1rem' }}>Session 3 · Up to 1 hour</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.7rem' }}>
                Reflection &amp; Moving Forward
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300 }}>
                I will check in with how you have been since session 2 and giving you the opportunity
                to describe any changes that have taken place. We will then focus on visualising the
                future and building your confidence in moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div className="section-label">Helpful resources</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)', fontWeight: 600, marginBottom: '2rem', lineHeight: 1.1 }}>
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
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 500, marginBottom: '0.4rem', color: 'var(--pink-deep)' }}>
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
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>
              If you are in crisis, please contact your GP, midwife, health visitor, or call the
              Samaritans on <strong style={{ color: 'var(--black)' }}>116 123</strong> (free, 24/7).
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to start healing?"
        body="Book a gentle, no-obligation conversation with me to talk about your experience and how I can support you."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book a Conversation"
      />
    </>
  )
}

export default async function BirthTraumaPage() {
  return cmsOrStatic('birth-trauma', <BirthTraumaPageStatic />)
}
