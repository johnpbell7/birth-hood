import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Hypnobirthing, Doula & Prenatal Yoga | Leicester & Online',
}

export default function HomePage() {
  return (
    <>
      {/* HOME HERO */}
      <section className="home-hero-split">
        <div className="home-hero-content">
          <div className="hero-eyebrow">Leicester · Midlands · Online</div>
          <h1 className="hero-title">Your birth,<br /><em>your way.</em></h1>
          <p className="hero-sub">
            Hypnobirthing, Doula support and Yoga — helping you feel powerful, prepared and genuinely
            excited for birth. All pregnancies, all modes of birth, all people.
          </p>
          <div className="hero-actions">
            <a
              href="https://calendly.com/birthhood"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Consultation
            </a>
            <a href="#services" className="btn-ghost">Explore services ↓</a>
          </div>
        </div>

        <div className="hero-photo-collage">
          <div className="hero-frame hero-frame-1">
            <Image src="/images/leanne-portrait.jpg" alt="Leanne — birth-hood founder" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
          </div>
          <div className="hero-frame hero-frame-2">
            <Image src="/images/hypnobirthing-class.png" alt="Hypnobirthing class in Leicester" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="hero-frame hero-frame-3">
            <Image src="/images/yoga-class.jpg" alt="Prenatal yoga class" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="hero-frame hero-frame-4">
            <Image src="/images/leanne-speaking.jpg" alt="Leanne speaking at a birth event" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip dark />

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="services-header">
          <div className="section-label">What I offer</div>
          <h2 className="services-title">
            Everything you need<br />for a <em>positive birth</em>
          </h2>
        </div>

        <div className="services-grid">
          {/* Hypnobirthing */}
          <Link href="/hypnobirthing" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="service-card">
              <span className="service-num">01</span>
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M2 12h2m16 0h2" />
              </svg>
              <div className="service-name">Hypnobirthing</div>
              <p className="service-desc">
                Evidence-based antenatal education using relaxation, breathing and visualisation to help
                you approach birth with calm confidence.
              </p>
              <span className="service-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Birth Doula */}
          <Link href="/birth-doula" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="service-card">
              <span className="service-num">02</span>
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <div className="service-name">Birth Doula</div>
              <p className="service-desc">
                Continuous, compassionate non-medical support before, during and after your birth.
                Your person in the room — always in your corner.
              </p>
              <span className="service-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Prenatal Yoga */}
          <Link href="/yoga" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="service-card">
              <span className="service-num">03</span>
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="5" r="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4l-3 3m3-3l3 3M9 21l3-7 3 7" />
              </svg>
              <div className="service-name">Prenatal Yoga</div>
              <p className="service-desc">
                Gentle, evidence-based prenatal yoga for all stages of pregnancy. Nourish your body,
                calm your mind and build a beautiful community.
              </p>
              <span className="service-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Birth Trauma */}
          <Link href="/birth-trauma" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="service-card">
              <span className="service-num">04</span>
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <div className="service-name">Birth Trauma Support</div>
              <p className="service-desc">
                Trauma-informed support for those processing a difficult birth experience. Your feelings
                are valid — you don&apos;t have to carry them alone.
              </p>
              <span className="service-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="about">
          <div className="about-visual">
            <div className="about-photo-frame">
              <Image src="/images/leanne-portrait.jpg" alt="Leanne — birth-hood founder" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="about-accent-box">
              <span className="big-num">200+</span>
              <span className="big-label">Families supported</span>
            </div>
          </div>

          <div>
            <div className="section-label">About Leanne</div>
            <h2 className="about-heading">
              A passionate advocate for <em>positive birth</em>
            </h2>
            <p className="about-body">
              Hi, I&apos;m Leanne — a certified hypnobirthing practitioner, birth doula and yoga teacher
              based in Leicester. For over five years I&apos;ve been helping families across the Midlands
              and online feel genuinely prepared and excited for birth.
            </p>
            <p className="about-body">
              I believe that every person deserves to feel powerful in their birth experience — regardless
              of how it unfolds. Whether you&apos;re planning a home birth, a hospital birth, a caesarean
              or anything in between, I&apos;m here to give you the knowledge, tools and support you need.
            </p>
            <div className="credentials">
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
            </div>
            <Link href="/meet-leanne" className="btn-outline">
              Meet Leanne
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-header">
          <div>
            <div className="section-label light">Real words</div>
            <h2 className="testimonials-title">
              What clients <em>say</em>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="stars">★★★★★</div>
            <div className="stars-label">5.0 from 50+ reviews</div>
          </div>
        </div>

        <div className="reviews-track">
          <div className="review-card">
            <p className="review-text">
              Leanne&apos;s hypnobirthing course completely changed how I felt about labour — I went from
              petrified to actually excited. My birth was everything I hoped for.
            </p>
            <div className="review-author">Sophie · Loughborough ★★★★★</div>
          </div>
          <div className="review-card">
            <p className="review-text">
              Having Leanne as my doula was the best decision I made. She was calm, reassuring and
              exactly who I needed in that room. I couldn&apos;t have done it without her.
            </p>
            <div className="review-author">Emma · Leicester ★★★★★</div>
          </div>
          <div className="review-card">
            <p className="review-text">
              The yoga classes were the highlight of my pregnancy. A beautiful mix of movement, breathing
              and community. I wish I&apos;d found Leanne sooner!
            </p>
            <div className="review-author">Priya · Nottingham ★★★★★</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/reviews" className="btn-outline" style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.2)' }}>
            Read all reviews
          </Link>
        </div>
      </section>

      {/* FREE RESOURCES TEASER */}
      <section className="freebies">
        <div className="freebies-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Completely free</div>
          <h2 className="freebies-heading">
            Free resources to get you started
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.8 }}>
            Download Leanne&apos;s free birth affirmations, birth plan template and breathing guide —
            no email required, no strings attached.
          </p>
          <div className="freebies-items">
            <span className="freebie-tag">Birth Affirmations</span>
            <span className="freebie-tag">Birth Plan Template</span>
            <span className="freebie-tag">Breathing Guide</span>
          </div>
          <Link href="/freebies" className="btn-primary">
            Download Free Resources
          </Link>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="booking-cta">
        <div className="booking-cta-inner">
          <div>
            <h2 className="booking-heading">
              Ready to feel <em>excited</em><br />about your birth?
            </h2>
            <p className="booking-note">
              Book a free 30-minute consultation — no obligation, just a friendly chat.
            </p>
          </div>
          <a
            href="https://calendly.com/birthhood"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ whiteSpace: 'nowrap' }}
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  )
}
