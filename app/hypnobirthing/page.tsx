import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Hypnobirthing Courses in Leicester & Online',
  description:
    'Hypnobirthing courses in Leicestershire and online UK-wide. Understand birth, release fear and build real confidence — for every kind of birth.',
}

const SITE = 'https://www.birth-hood.co.uk'
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Hypnobirthing course',
  name: 'KGHypnobirthing Courses',
  description: 'Evidence-based KGHypnobirthing courses in Leicester and online across the UK — releasing fear and building calm, confident birth preparation.',
  url: `${SITE}/hypnobirthing`,
  provider: { '@type': 'HealthAndBeautyBusiness', name: 'birth-hood', url: SITE },
  areaServed: [
    'North West Leicestershire', 'Leicestershire', 'Derbyshire', 'Warwickshire',
    'Nottinghamshire', 'Coalville', 'Ashby-de-la-Zouch', 'Loughborough', 'Leicester',
    'Swadlincote', 'Nuneaton', 'Nottingham', 'Derby', 'Midlands', 'United Kingdom (online)',
  ],
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Hypnobirthing', item: `${SITE}/hypnobirthing` },
  ],
}

const faqItems = [
  {
    q: 'When should I start hypnobirthing?',
    a: 'The ideal time to start is from 20-30 weeks gestation, as this gives you enough time to practise the techniques before your birth. However, it\'s never too late — even starting at 36+ weeks will give you valuable tools. Some people do the course in early pregnancy and then revisit the materials closer to their due date.',
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

function HypnobirthingPageStatic() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CmsPageHero
        page="hypnobirthing"
        eyebrow="Calm. Confident. Prepared."
        title={<>Hypno<em>birthing</em></>}
        subtitle="Evidence-based techniques to help you release fear, trust your body and step into birth feeling genuinely excited — not terrified."
        img1={{ src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class' }}
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

      {/* WHAT IS HYPNOBIRTHING */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">What is it?</div>
              <h2>It&apos;s the name that lets it down</h2>
              <p>
                Hypnobirthing sounds like some &lsquo;hippy&rsquo; thing that only people having home
                births use, or like it&apos;s just breathing. It is so much more than that — and none
                of it involves swinging clocks.
              </p>
              <p>
                It is a complete birth preparation course, built on four things that work together.
                The breathing everyone has heard about is only the last of them.
              </p>

              <h3>It&apos;s getting informed about birth</h3>
              <p>
                Learning how birth actually works — the hormones involved, how to choose your birth
                place, how your environment helps or hinders the process, the role of the birth
                partner, the stages of labour, positions that help your baby find their way, and how
                to write a birth plan. Most of us haven&apos;t been at many births, so you simply
                won&apos;t know this unless someone tells you. The more you know, the more prepared
                you feel.
              </p>

              <h3>It&apos;s a change of mindset</h3>
              <p>
                Knowing what your body is doing, and how, helps you see birth as a bodily function
                like any other — which takes a lot of the fear away. Between getting informed and
                taking in positive information about birth, you can shift from a mindset full of what
                might &lsquo;go wrong&rsquo; to one that expects birth to go right.
              </p>

              <h3>It&apos;s learning decision-making tools</h3>
              <p>
                Knowing your rights, and knowing where to get reliable information, helps you feel
                confident making the decisions needed to birth your baby. Just knowing the questions
                to ask — including whether it&apos;s safe to take 30 minutes to decide — can make an
                enormous difference. Nobody wants to make a decision in a rush when there was time to
                think it through.
              </p>

              <h3>And then the tools you&apos;ve heard about</h3>
              <p>
                Breathing, visualisation, affirmations, relaxation, hypnobirthing tracks and
                anchoring. They are an incredible way to prepare and to stay comfortable — but on
                their own, without everything above, they are not enough. Together, you&apos;ve got
                this.
              </p>
            </div>

            {/* Stats */}
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">25%</div>
                  <div className="stat-label">Fewer requests for pain relief (Cochrane Review)</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100's</div>
                  <div className="stat-label">of families I&apos;ve supported</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">5 Star rated on Google</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years of experience teaching hypnobirthing</div>
                </div>
              </div>

              <div className="card card-pink" style={{ marginTop: '2rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>KGHypnobirthing</div>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                  I&apos;m a certified KGHypnobirthing practitioner, trained in the UK&apos;s leading
                  hypnobirthing method — developed by Katharine Graves, widely regarded as the gold
                  standard in birth preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE TOOLS */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">The toolkit</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.1 }}>
            The tools you&apos;ll <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>actually use</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '3rem', maxWidth: '640px' }}>
            Use all of them, throughout pregnancy and in birth, and see how calm you can feel — in
            any kind of birth.
          </p>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--black)' }}>
                Breathing techniques
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                Big, even breaths keep oxygen flowing so your uterus can do its job as efficiently and comfortably as possible. They also give you something else to focus on. Simple — but practise them in pregnancy and you will feel the benefit on the day.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--black)' }}>
                Visualisation
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                A way of almost practising birth before it happens. Picturing how you would like your birth to go helps you feel more confident in your plans, and tricks your mind into thinking it is nothing new when labour starts for real.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--black)' }}>
                Affirmations
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                Using the law of repetition to convince your brain to believe something. Instead of "I don’t want to tear", you say "my body will stretch to accommodate my baby". After a while it sinks in, and confidence follows.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--black)' }}>
                Relaxation
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                We rarely spend time doing absolutely nothing, so our neocortex — the rational, thinking part of the brain — is almost never switched off. We very much want it out of the way during labour. Practising relaxation in pregnancy makes it far easier to relax on cue.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--black)' }}>
                Hypnobirthing tracks
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                Written by hypnotherapists to induce calm, and full of encouragement about how capable you and your body are. Do not worry if you fall asleep listening — it still goes in. Just never while driving.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--black)' }}>
                Anchoring
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                Cues your brain learns to associate with relaxation — a room spray, an essential oil, a blanket, a particular playlist. Use them while you practise, then bring them to your birth space and they help you relax wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">The evidence</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.1 }}>
            What does the evidence <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>actually say?</em>
          </h2>

          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start', marginTop: '2.5rem' }}>
            <div className="prose">
              <p>
                Hypnobirthing isn&apos;t about guaranteeing a pain-free birth, avoiding interventions
                or promising a particular type of birth. The evidence suggests something much more
                useful: hypnosis and relaxation-based techniques can help you feel calmer, more
                confident and more positive about your birth, while giving you practical tools for
                managing fear, anxiety and sensation during labour.
              </p>
              <p>
                <strong>The evidence around medical interventions is less clear.</strong> A 2024
                systematic review and meta-analysis of 2,937 women across six randomised controlled
                trials found no statistically significant reduction in epidural or other
                pharmacological pain relief.
              </p>
              <p>
                And that&apos;s important. Hypnobirthing isn&apos;t a promise that you won&apos;t need
                pain relief. It&apos;s about giving you another set of tools — breathing, relaxation,
                visualisation, self-hypnosis, understanding what&apos;s happening in your body,
                working with your partner, and staying grounded when things don&apos;t go to plan.
              </p>
              <p>
                Because birth isn&apos;t predictable. But feeling informed, prepared and supported can
                make a huge difference to how you experience it. You don&apos;t have to birth without
                pain relief to have used hypnobirthing successfully — you can use these tools at home,
                in a birth centre or on a labour ward, alongside an epidural, an induction or a
                caesarean birth.
              </p>
              <p>
                <strong>The goal isn&apos;t a perfect birth. It&apos;s feeling like you have the
                tools, knowledge and confidence to navigate yours.</strong>
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { finding: 'Reductions in fear and perceived pain, and improvements in overall experience of childbirth.', source: 'Fernández-Gamero et al. (2024) — systematic review of 7 randomised controlled trials' },
                  { finding: 'Improvements in antenatal depression reported by the majority of included studies, though researchers noted a need for more consistent methods.', source: 'Betriana et al. (2025) — systematic review & meta-analysis' },
                  { finding: 'No statistically significant reduction in epidural or other pharmacological analgesia.', source: 'Lai et al. (2024) — 6 RCTs, 2,937 women' },
                  { finding: 'Potential benefits for anxiety, confidence and emotional wellbeing in pregnancy and after birth.', source: 'Catsaros & Wendland (2022) — systematic review' },
                ].map((s) => (
                  <div key={s.source} className="card" style={{ borderLeft: '3px solid var(--pink)' }}>
                    <p style={{ color: 'var(--black)', fontSize: '0.92rem', lineHeight: 1.65, fontWeight: 400, marginBottom: '0.7rem' }}>
                      {s.finding}
                    </p>
                    <p style={{ color: 'var(--grey-light)', fontSize: '0.75rem', lineHeight: 1.5, fontWeight: 300 }}>
                      {s.source}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '1.4rem', fontSize: '0.78rem', color: 'var(--grey-light)', fontWeight: 300, lineHeight: 1.6 }}>
                All four reviews are available on PubMed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POWER HOURS */}
      <section className="section-pad-sm" style={{ background: 'var(--black)' }}>
        <div className="wrap">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-label light">Not ready for a full course?</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)', fontWeight: 600, lineHeight: 1.15, color: 'var(--white)', marginBottom: '1rem' }}>
                Book a <em style={{ fontStyle: 'italic', color: 'var(--pink)' }}>Power Hour</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 300 }}>
                You&apos;ve read the guides. You&apos;ve Googled. You&apos;ve got questions. Bring your
                birth plan, induction options, previous birth experience or whatever is currently
                making you go &ldquo;hang on&hellip; what?&rdquo;, and we&apos;ll work through it
                together.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="https://calendly.com/birthhood/power-hour" target="_blank" rel="noopener noreferrer" className="power-row">
                <span><strong>Power Hour</strong><br />60 minutes of personalised birth support</span>
                <span className="power-price">£50</span>
              </a>
              <a href="https://calendly.com/birthhood/power-hour" target="_blank" rel="noopener noreferrer" className="power-row">
                <span><strong>Power Session</strong><br />2 hours — for when there&apos;s a lot to unpack</span>
                <span className="power-price">£80</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SESSION OUTLINES LINK */}
      <section className="section-pad-sm" style={{ background: 'var(--pink-pale)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.5rem' }}>
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
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
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
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function HypnobirthingPage() {
  return cmsOrStatic('hypnobirthing', <HypnobirthingPageStatic />)
}
