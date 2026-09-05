import type { Metadata } from 'next'
import Link from 'next/link'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Hypnobirthing Course Dates & Prices',
  description:
    'Hypnobirthing course options, prices and upcoming dates in Leicestershire and online. Group, private and online courses, plus caesarean preparation.',
}

/** Line icons for the "everything you need" cards — same weight as the tool
    icons on the hypnobirthing page so the two sets read as one family. */
function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

const INCLUDED = [
  {
    title: 'Full hypnobirthing & birth preparation course',
    desc: 'Designed by birth-hood using training from both The Birth Uprising (TBU) and KGHypnobirthing (KGH), to provide everything you need to prepare for all births.',
    icon: (
      <CardIcon>
        <path d="M12 6.5C10.5 5 8.5 4.2 6 4.2H3.5v13.6H6c2.5 0 4.5.8 6 2.3 1.5-1.5 3.5-2.3 6-2.3h2.5V4.2H18c-2.5 0-4.5.8-6 2.3Z" />
        <path d="M12 6.5V20" />
      </CardIcon>
    ),
  },
  {
    title: 'Comprehensive workbook',
    desc: 'A beautifully designed birth-hood workbook to accompany each session, full of notes, exercises and resources to keep.',
    icon: (
      <CardIcon>
        <path d="M5.5 3.5h11a2 2 0 0 1 2 2v15a1 1 0 0 1-1 1h-12a2 2 0 0 1 0-4h13" />
        <path d="M8.5 8h7M8.5 11.5h5" />
      </CardIcon>
    ),
  },
  {
    title: 'Relaxation audio downloads',
    desc: 'A curated collection of relaxation and visualisation audio tracks for you to practise throughout your pregnancy and use during birth.',
    icon: (
      <CardIcon>
        <path d="M12 3.5v11.2" />
        <path d="M8.5 11.5 12 15l3.5-3.5" />
        <path d="M4.5 16.5v2a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2" />
      </CardIcon>
    ),
  },
  {
    title: 'Birth plan support',
    desc: 'Dedicated time to create a birth plan that reflects your wishes and is written in a way that your care team will read and respect.',
    icon: (
      <CardIcon>
        <path d="M8.5 3.5h7a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path d="m9.8 11.8 1.6 1.6 3.2-3.6" />
        <path d="M9.5 3.5v1.2a.8.8 0 0 0 .8.8h3.4a.8.8 0 0 0 .8-.8V3.5" />
      </CardIcon>
    ),
  },
  {
    title: 'WhatsApp support group',
    desc: 'Join the birth-hood community — a supportive group of like-minded parents going through the same journey, moderated by me.',
    icon: (
      <CardIcon>
        <path d="M20.5 11.8a8 8 0 0 1-11.6 7.1L4 20.5l1.7-4.7a8 8 0 1 1 14.8-4Z" />
        <path d="M9.5 12h.01M12.5 12h.01M15.5 12h.01" />
      </CardIcon>
    ),
  },
  {
    title: 'Postnatal debrief',
    desc: 'A dedicated session after your baby arrives to process your birth experience, celebrate your achievement and get any support you need.',
    icon: (
      <CardIcon>
        <path d="M20.5 12.6c0 1.7-2.1 3.9-7.6 8.6a1.4 1.4 0 0 1-1.8 0C5.6 16.5 3.5 14.3 3.5 12.6a4.6 4.6 0 0 1 8.5-2.5 4.6 4.6 0 0 1 8.5 2.5Z" />
      </CardIcon>
    ),
  },
]

function CourseInfoPageStatic() {
  return (
    <>
      <CmsPageHero
        page="course-info"
        ctaLabel="Book Your Place"
        title={<>Hypnobirthing <em>Courses</em></>}
        subtitle="Course options, prices and upcoming dates — everything you need to know before you book."
        img1={{ src: '/images/class-group-257.jpg', alt: 'Group course' }}
        img2={{ src: '/images/private-session-102.jpg', alt: 'Private session' }}
        actions={
          <a
            href="https://calendly.com/birthhood/free-consultation"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Place
          </a>
        }
      />

      {/* WHAT'S INCLUDED */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Everything you need for <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>birth preparation</em>
          </h2>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {INCLUDED.map(item => (
              <div key={item.title} className="card">
                <span className="tool-icon" aria-hidden="true">{item.icon}</span>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--black)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE OPTIONS */}
      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Course <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>options</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Group Course */}
            <div className="price-card">
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                Group Course
              </div>
              <div className="price-amount">£225</div>
              <div className="price-period">per couple · face to face</div>
              <ul className="price-features">
                <li>4 weekly group sessions (2.5hrs each)</li>
                <li>KGHypnobirthing full programme</li>
                <li>Relaxation audio downloads</li>
                <li>Comprehensive course workbook</li>
                <li>Supportive WhatsApp group</li>
                <li>Post-birth debrief session</li>
                <li>Online: £200</li>
              </ul>
              <a
                href="/booking"
                className="btn-outline"
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
                Private 121 Course
              </div>
              <div className="price-amount">£345</div>
              <div className="price-period">per couple · face to face</div>
              <ul className="price-features">
                <li>10 hour fully interactive, fully evidence based birth preparation course</li>
                <li>Flexible scheduling at your home or online</li>
                <li>Full KGHypnobirthing programme</li>
                <li>Personalised birth plan support</li>
                <li>Relaxation audio downloads</li>
                <li>Unlimited WhatsApp support</li>
                <li>Post-birth debrief session</li>
                <li>Online: £325</li>
              </ul>
              <a
                href="/booking"
                className="btn-primary"
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
              <div className="price-amount">£200</div>
              <div className="price-period">per couple · group online</div>
              <ul className="price-features">
                <li>4 sessions via video call</li>
                <li>All the same content as in-person</li>
                <li>UK-wide availability</li>
                <li>Relaxation audio downloads</li>
                <li>Comprehensive course workbook</li>
                <li>Post-birth debrief session</li>
                <li>121 online: £325</li>
              </ul>
              <a
                href="/booking"
                className="btn-outline"
                style={{ display: 'block', textAlign: 'center' }}
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Antenatal Package upgrade note */}
          <div className="card card-pink" style={{ marginTop: '2rem' }}>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
              <strong style={{ color: 'var(--black)' }}>Antenatal Package upgrade:</strong>{' '}
              You can also upgrade a Hypnobirthing package to include virtual doula support throughout pregnancy,
              following all antenatal appointments etc (not including the birth) as an Antenatal Package{' '}
              <strong style={{ color: 'var(--black)' }}>(£425)</strong>.
            </p>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--grey-mid)', fontSize: '0.88rem', fontWeight: 300 }}>
            £50 deposit upon booking. Remainder of payment due before first session.{' '}
            <Link href="/course-info" style={{ color: 'var(--pink-deep)' }}>View current dates →</Link>
          </p>
        </div>
      </section>

      {/* ADDITIONAL COURSE OPTIONS */}
      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Specialist <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>courses</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {/* Caesarean Birth Preparation */}
            <div className="card card-pink" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.35rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--black)', lineHeight: 1.2 }}>Caesarean Birth Preparation</h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                Are you planning an elective or having a scheduled caesarean? Not sure what to expect?
                Want to make it as positive as possible?
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                Your 3 hour session will include all you need to prepare before, during and post surgery.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
                With Hypnobirthing
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '0.25rem' }}>Investment</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 500 }}>From £145</div>
                </div>
                <a
                  href="https://calendly.com/birthhood/free-consultation"
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Hasty Hypnobirthing */}
            <div className="card card-pink" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.35rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--black)', lineHeight: 1.2 }}>Hasty Hypnobirthing</h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                In a rush? 37 weeks plus?
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                Learn some basics, have a whistle stop tour and gain your tools for your awesome birth.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
                We&apos;ll cover what hypnobirthing is, breathing, relaxation, birth positions and more!
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '0.25rem' }}>Investment</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 500 }}>From £145</div>
                </div>
                <a
                  href="https://calendly.com/birthhood/free-consultation"
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Hypnobirthing Refresher */}
            <div className="card card-pink" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.35rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--black)', lineHeight: 1.2 }}>Hypnobirthing Refresher</h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                For second, third&hellip; time parents who have already completed a hypnobirthing
                course and want a refresh before this baby arrives.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                Get in touch to let me know what you need and we&apos;ll work out the right package,
                tailored specifically to you.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
                Availability: please get in touch.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '0.25rem' }}>Investment</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 500 }}>From £100</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--grey-light)', fontWeight: 300, marginTop: '0.2rem' }}>Depending on your needs</div>
                </div>
                <a
                  href="https://calendly.com/birthhood/free-consultation"
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POWER HOURS */}
      <section className="section-pad-sm" style={{ background: 'var(--black)' }}>
        <div className="wrap">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
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

      {/* BOOKING INFO */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 600, marginBottom: '2rem', lineHeight: 1.1 }}>
            Booking <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>information</em>
          </h2>

          <div className="prose">
            <h3>How to secure your place</h3>
            <p>
              Click the &ldquo;Book Your Place&rdquo; button to book a free 30-minute consultation.
              During this call, we&apos;ll confirm your dates, discuss any questions you have and take
              the details for your booking.
            </p>
            <h3>Payment</h3>
            <p>
              A £50 deposit is required upon booking to secure your place. The remainder is due before your first session.
              Payment plans are available — just let me know at the consultation.
            </p>
            <h3>Location</h3>
            <p>
              Group courses are held at a NW Leicestershire venue (address confirmed on booking).
              Private courses can be held at your home, online, or at a mutually agreed location.
            </p>
            <h3>What to bring</h3>
            <p>
              Just yourselves. Wear something comfortable. All materials are provided. If you&apos;d
              like to bring a yoga mat or cushion for relaxation sessions, you&apos;re very welcome to.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://calendly.com/birthhood/free-consultation"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Place
            </a>
            <Link href="/session-outlines" className="btn-outline">
              View Session Outlines
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to book your place?"
        body="Start with a free 30-minute consultation — no pressure, just a friendly chat to see if we&apos;re the right fit."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function CourseInfoPage() {
  return cmsOrStatic('course-info', <CourseInfoPageStatic />)
}
