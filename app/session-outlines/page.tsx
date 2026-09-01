import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Session Outlines',
  description: 'A session-by-session breakdown of the birth-hood hypnobirthing course, from the mind-body connection to breathing, relaxation and birth preferences.',
}

const sessions = [
  {
    num: '01',
    label: 'Session one',
    title: 'Understanding birth & the mind-body connection',
    body: 'We start at the very beginning — exploring the physiology of birth and understanding exactly how the mind and body work together. This session is often described as "the session that changes everything".',
    topics: [
      'Current mindset and why', 'Uterus', 'Science', 'Fear Tension Pain',
      'Mind Body Connection', 'Positive mindset', 'Breathing techniques',
      'Hypnosis', 'Anchoring', 'Visualisation', 'Affirmations', 'Mp3s',
    ],
  },
  {
    num: '02',
    label: 'Session two',
    title: 'Breathing techniques & relaxation',
    body: "This is the practical heart of hypnobirthing. You'll learn and practise the breathing techniques that will carry you through every stage of labour — and that many people say felt like a superpower.",
    topics: [
      'Birth Plans', 'Hormones', 'The Performance',
      'Positioning in Pregnancy and Birth', 'Birth Partners',
      'Where to have your baby', 'Birthing environment',
      'Pelvic Floor', 'Perineal Massage',
    ],
  },
  {
    num: '03',
    label: 'Session three',
    title: 'Birth preferences & working with your care team',
    body: 'Knowledge is power. This session is all about understanding your rights, making informed decisions and creating a birth plan that will work in any situation — including the unexpected.',
    topics: [
      'Your Rights', 'Language and Birth Rights', 'Is Intervention Making Us Safer?',
      'Risk', 'Our Own Stories', 'Chilled Out Breathing', 'BRAIN Tool',
      'Decisions and Advocacy Tips', 'Distraction Techniques', 'Induction',
      'Estimated Due Dates', "'Natural' Induction Method",
      'Signs Your Body is Getting Ready', 'Early Labour',
    ],
  },
  {
    num: '04',
    label: 'Session four',
    title: 'Birth partner tools & preparation for the unexpected',
    body: 'The final session brings everything together and ensures your birth partner feels fully equipped to support you. We also cover preparation for the unexpected — so that you feel confident no matter how your birth unfolds.',
    topics: [
      'Making Contact with a Midwife', 'The Journey', 'Arriving There / Them Getting to You',
      'Active Labour', 'Slow Or Stopped Labour', 'Caesarean Birth', 'Assisted Birth',
      'Pain Relief', 'Pushing Stage', 'Birth', '3rd Stage', 'Golden Hour',
      'Vitamin K', 'The 4th Trimester',
    ],
  },
]

function SessionOutlinesPageStatic() {
  return (
    <>
      <PageHero
        ctaLabel="View Course Dates"
        ctaHref="/course-info"
        eyebrow="Hypnobirthing course"
        title={<>Session <em>Outlines</em></>}
        subtitle="A detailed breakdown of everything covered in the four-session hypnobirthing course."
        img1={{ src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class' }}
        img2={{ src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking' }}
        actions={
          <Link href="/course-info" className="btn-primary">
            View Course Dates
          </Link>
        }
      />

      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '860px' }}>

          {/* Intro */}
          <div className="so-intro">
            <p>The birth-hood hypnobirthing course follows the KGHypnobirthing curriculum — the UK&apos;s leading hypnobirthing method — delivered over four sessions of approximately 2.5 hours each. Each session builds on the last, creating a comprehensive foundation of knowledge, skills and confidence.</p>
            <p>Sessions are available as a group course, private course, or online course. All course types cover the same content.</p>
          </div>

          {/* Sessions */}
          <div className="so-list">
            {sessions.map((s, idx) => (
              <div key={s.num} className="so-session">
                <div className="so-num">{s.num}</div>
                <div className="so-body">
                  <div className="section-label">{s.label}</div>
                  <h2 className="so-title">{s.title}</h2>
                  <p className="so-desc">{s.body}</p>
                  <div className="so-topics">
                    <div className="so-topics-label">What&apos;s covered</div>
                    <div className="so-pills">
                      {s.topics.map((t) => (
                        <span key={t} className="so-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Practice note */}
          <div className="so-note">
            <div className="section-label" style={{ marginBottom: '0.6rem' }}>A note on practice</div>
            <p>Between each session you&apos;ll be given relaxation audio tracks and practice exercises. The more you practise the breathing and relaxation techniques, the more effective they will be during birth. Most people practise for around 15–20 minutes per day — it quickly becomes a lovely part of your pregnancy routine.</p>
          </div>

        </div>
      </section>

      <CtaBand
        heading="Ready to start your hypnobirthing journey?"
        body="Book a free consultation to discuss course dates and find the right option for you."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function SessionOutlinesPage() {
  return cmsOrStatic('session-outlines', <SessionOutlinesPageStatic />)
}
