import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import HeroCollage from '@/components/HeroCollage'
import { Sparkles } from '@/components/Decor'
import { DEFAULT_PHOTOS } from '@/lib/hero-photos'
import InstagramSection from '@/components/InstagramSection'
import { cmsOrStatic } from '@/lib/cms-page'
import { getSiteSettings, type SiteSettings } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Hypnobirthing, Doula & Prenatal Yoga | NW Leicestershire & Online',
}

export default async function HomePage() {
  const settings = await getSiteSettings()
  return cmsOrStatic('home', <HomePageStatic settings={settings} />)
}

// ─── Default fallback content ────────────────────────────────────────────────

const DEFAULT_SERVICES = [
  {
    num: '01',
    name: 'Hypnobirthing',
    description:
      'Evidence-based antenatal education using relaxation, breathing and visualisation to help you approach birth with calm confidence.',
    href: '/hypnobirthing',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M2 12h2m16 0h2" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Birth Doula',
    description:
      'Continuous, compassionate non-medical support before, during and after your birth. Your person in the room — always in your corner.',
    href: '/birth-doula',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Prenatal Yoga',
    description:
      'Gentle, evidence-based prenatal yoga for all stages of pregnancy. Nourish your body, calm your mind and build a beautiful community.',
    href: '/yoga',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4l-3 3m3-3l3 3M9 21l3-7 3 7" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Birth Trauma Support',
    description:
      "Trauma-informed support for those processing a difficult birth experience. Your feelings are valid — you don't have to carry them alone.",
    href: '/birth-trauma',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

const DEFAULT_CREDENTIALS = [
  'KGHypnobirthing DipHb (2019)',
  'Badass Birth Trained Doula (2021)',
  '3 Step Rewind Practitioner (2021)',
  'LGBT+ Competency — Queer Birth Club (2021)',
  '85hr Pregnancy/Postnatal Yoga — Sally Parkes (2022)',
  'Featured on BBC Radio Leicester',
]

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      'We instantly felt at ease and comfortable and thoroughly enjoyed learning about the benefits of Hypnobirthing. We are due to have our first baby in 6 weeks and Leanne helped us to feel nothing but calm and excited for this completely unknown experience coming up.',
    attribution: 'Client · Leicestershire ★★★★★',
  },
  {
    quote:
      "From my first contact with Leanne we just clicked. She supported me through my concern about fibroids, and gave me some brilliant yoga positions to try when my SPD started. I can't recommend Leanne highly enough, she's a pro at end-to-end care!",
    attribution: 'Beka · Leicestershire ★★★★★',
  },
  {
    quote:
      'We went on an antenatal course last week, and honestly found the two hours spent with Leanne today were much more helpful than the seven hours there!',
    attribution: 'Client · Leicestershire ★★★★★',
  },
]

const DEFAULT_FREEBIE_TAGS = ['Birth Affirmations', 'Birth Plan Guide', 'Newborn Checklist']

// ─── Static page (with optional CMS overrides) ───────────────────────────────

function HomePageStatic({ settings }: { settings: SiteSettings | null }) {
  const s = settings ?? {}

  // Hero
  // NB: a stale value ("Your birth, your way.") is still saved in Sanity and
  // was overriding the intended headline on the live site. Treat that old
  // default (and any empty value) as unset so "Welcome to birth-hood" wins,
  // while still allowing a genuinely new headline set in the Studio.
  const heroHeadline =
    !s.homeHeroHeadline || s.homeHeroHeadline.trim() === 'Your birth, your way.'
      ? 'Welcome to birth-hood'
      : s.homeHeroHeadline
  const heroSubtitle =
    s.homeHeroSubtitle ??
    'Hypnobirthing, Doula support and Yoga — helping you feel powerful, prepared and genuinely excited for birth. All pregnancies, all modes of birth, all people.'
  const heroCta = s.homeHeroCta ?? 'Book Free Consultation'
  const heroCtaHref = s.homeHeroCtaHref ?? s.social?.calendly ?? 'https://calendly.com/birthhood'

  // Services
  const servicesEyebrow = s.homeServicesEyebrow ?? 'What I offer'
  const servicesHeading = s.homeServicesHeading ?? 'Everything you need for a positive birth'

  // Welcome intro (under the hero)
  // Same guard as the hero: the old default here was "Welcome to birth-hood",
  // which is now the hero text — treat it (and empty) as unset so this shows
  // "Hi, I'm Leanne".
  const welcomeHeading =
    !s.homeWelcomeHeading || s.homeWelcomeHeading.trim() === 'Welcome to birth-hood'
      ? "Hi, I'm Leanne"
      : s.homeWelcomeHeading
  const welcomeBody = s.homeWelcomeBody ?? [
    'At birth-hood, I believe every family deserves to enter parenthood feeling informed, supported, connected, and confident. Through education, compassionate care, and community, I help people navigate pregnancy, birth, and beyond in a way that feels right for them.',
    "From Doula support, Hypnobirthing, 3 Step Rewind Traumatic Birth resolution support, and Yoga you're covered (as featured on BBC Radio Leicester).",
    'Based in Leicestershire and covering the Midlands (plus online).',
  ]
  const welcomeImage = s.homeWelcomeImage
    ? urlFor(s.homeWelcomeImage).width(1100).url()
    : '/images/leanne-speaking.jpg'

  // Optional handwritten signature graphic (falls back to the script-font text)
  const signatureImage = s.homeSignatureImage
    ? urlFor(s.homeSignatureImage).width(480).url()
    : null

  // Hero collage — per-slot CMS image/label/alt, falling back to the defaults
  const collagePhotos = DEFAULT_PHOTOS.map((def, i) => {
    const cms = s.homeHeroCollage?.[i]
    return {
      src: cms?.image ? urlFor(cms.image).width(600).url() : def.src,
      alt: cms?.alt || def.alt,
      label: cms?.label || def.label,
    }
  })

  // Merge CMS services with hardcoded icons (CMS overrides name/desc/href; icons stay)
  const services = DEFAULT_SERVICES.map((def, i) => {
    const cms = s.homeServices?.[i]
    return {
      ...def,
      name: cms?.name ?? def.name,
      description: cms?.description ?? def.description,
      href: cms?.href ?? def.href,
    }
  })

  // About
  const aboutEyebrow = s.homeAboutEyebrow ?? 'About Leanne'
  const aboutHeading = s.homeAboutHeading ?? 'A passionate advocate for positive birth'
  const aboutImage = s.homeAboutImage ? urlFor(s.homeAboutImage).width(900).url() : '/images/leanne-portrait.jpg'
  const aboutBody = s.homeAboutBody ?? [
    "Hi, I'm Leanne — a certified hypnobirthing practitioner, birth doula and yoga teacher based in NW Leicestershire. Since 2019 I've been helping families across the Midlands and online feel genuinely prepared and excited for birth.",
    "I believe that every person deserves to feel powerful in their birth experience — regardless of how it unfolds. Whether you're planning a home birth, a hospital birth, a caesarean or anything in between, I'm here to give you the knowledge, tools and support you need.",
  ]
  const credentials = s.homeAboutCredentials ?? DEFAULT_CREDENTIALS
  const aboutCta = s.homeAboutCta ?? 'Meet Leanne'
  const aboutCtaHref = s.homeAboutCtaHref ?? '/meet-leanne'

  // Testimonials
  const testimonialsEyebrow = s.homeTestimonialsEyebrow ?? 'Real words'
  const testimonialsHeading = s.homeTestimonialsHeading ?? 'What clients say'
  const testimonials =
    s.homeTestimonials && s.homeTestimonials.length > 0 ? s.homeTestimonials : DEFAULT_TESTIMONIALS

  // Freebies
  const freebiesHeading = s.homeFreebiesHeading ?? 'Free resources to get you started'
  const freebiesBody =
    s.homeFreebiesBody ??
    'Download my free birth affirmations, birth plan guide and newborn checklist — no email required, no strings attached. Plus a FREE Hypnobirthing MP3 and ELLE TENS machine discount code!'
  const freebiesTags =
    s.homeFreebiesTags && s.homeFreebiesTags.length > 0 ? s.homeFreebiesTags : DEFAULT_FREEBIE_TAGS
  const freebiesCta = s.homeFreebiesCta ?? 'Download Free Resources'

  // Booking CTA
  const bookingHeading = s.homeBookingHeading ?? 'Ready to feel excited about your birth?'
  const bookingBody =
    s.homeBookingBody ?? 'Book a free 30-minute consultation — no obligation, just a friendly chat.'

  return (
    <>
      {/* Mobile floating CTA — mirrors the hero button */}
      <a
        href={heroCtaHref}
        className="mobile-book-fab"
        target="_blank"
        rel="noopener noreferrer"
      >
        {heroCta}
      </a>

      {/* HOME HERO */}
      <section className="home-hero-split">
        {/* extra stars — desktop: scattered */}
        <Sparkles
          className="hero-decor decor-desktop"
          items={[
            { top: '10%', left: '46%', size: 30, delay: 0.3, dur: 3.1, white: true },
            { bottom: '16%', left: '40%', size: 20, delay: 1.4, dur: 2.7, white: true },
            { top: '70%', right: '40%', size: 24, delay: 0.8, dur: 3.4, white: true },
          ]}
        />
        {/* mobile: a cluster tucked into the top-right corner */}
        <Sparkles
          className="hero-decor decor-mobile"
          items={[
            { top: '3%', right: '7%', size: 30, delay: 0.2, dur: 3.1, white: true },
            { top: '1%', right: '21%', size: 15, delay: 1.1, dur: 2.5, white: true },
            { top: '11%', right: '17%', size: 13, delay: 0.7, dur: 2.8, white: true },
          ]}
        />
        <div className="home-hero-content">
          <h1 className="hero-title">
            {heroHeadline.includes('birth-hood') ? (
              <>
                {heroHeadline.split('birth-hood')[0].trim()}<br />
                {/* keep "birth-hood" together on one line (non-breaking hyphen) */}
                <em style={{ whiteSpace: 'nowrap' }}>birth{'‑'}hood</em>
                {heroHeadline.split('birth-hood').slice(1).join('birth-hood')}
              </>
            ) : heroHeadline.includes(',') ? (
              <>
                {heroHeadline.split(',')[0]},<br />
                <em>{heroHeadline.split(',').slice(1).join(',').trim()}</em>
              </>
            ) : (
              heroHeadline
            )}
          </h1>
          <p className="hero-sub">{heroSubtitle}</p>
          {signatureImage ? (
            <img src={signatureImage} alt="With Leanne" className="hero-signature-img" />
          ) : (
            <span className="hero-signature">with Leanne x</span>
          )}
          <div className="hero-actions">
            <a
              href={heroCtaHref}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {heroCta}
            </a>
          </div>
        </div>

        <HeroCollage photos={collagePhotos} />
      </section>

      {/* MARQUEE */}
      <MarqueeStrip dark />

      {/* WELCOME INTRO */}
      <section className="section-pad" style={{ paddingTop: '3.25rem', paddingBottom: 0 }}>
        <div className="wrap welcome-intro">
          <div className="welcome-intro-text">
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '1.6rem' }}>
              {welcomeHeading.includes('birth-hood') ? (
                <>
                  {welcomeHeading.split('birth-hood')[0]}
                  <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>birth-hood</em>
                  {welcomeHeading.split('birth-hood').slice(1).join('birth-hood')}
                </>
              ) : welcomeHeading.includes('Leanne') ? (
                <>
                  {welcomeHeading.split('Leanne')[0]}
                  <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>Leanne</em>
                  {welcomeHeading.split('Leanne').slice(1).join('Leanne')}
                </>
              ) : (
                welcomeHeading
              )}
            </h2>
            {welcomeBody.map((para, i) => (
              <p
                key={i}
                className="welcome-intro-body"
                style={{ marginBottom: i === welcomeBody.length - 1 ? 0 : '1.1rem' }}
              >
                {para}
              </p>
            ))}
          </div>
          <div className="welcome-intro-media">
            <Image
              src={welcomeImage}
              alt="Leanne at birth-hood"
              fill
              sizes="(max-width: 820px) 100vw, 40vw"
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
            {/* stars twinkling over Leanne */}
            <Sparkles
              className="welcome-sparkles"
              items={[
                { top: '2%', left: '4%', size: 40, delay: 0.2, dur: 3 },
                { top: '14%', right: '8%', size: 28, delay: 1.1, dur: 2.6 },
                { top: '38%', left: '-3%', size: 24, delay: 1.8, dur: 3.4 },
                { bottom: '16%', right: '2%', size: 34, delay: 0.6, dur: 2.9 },
                { top: '28%', right: '22%', size: 18, delay: 2.2, dur: 2.3, white: true },
                { bottom: '34%', left: '10%', size: 16, delay: 1.5, dur: 2.8, white: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <Sparkles
          className="sec-decor"
          items={[
            { top: '8%', right: '6%', size: 30, delay: 0.2, dur: 3.1 },
            { top: '40%', left: '3%', size: 22, delay: 1.2, dur: 2.6 },
            { bottom: '10%', right: '12%', size: 26, delay: 0.7, dur: 3.4 },
            { bottom: '22%', left: '8%', size: 16, delay: 1.9, dur: 2.4 },
          ]}
        />
        <div className="services-header">
          <div className="section-label">{servicesEyebrow}</div>
          <h2 className="services-title">
            {servicesHeading.includes('positive birth') ? (
              <>
                {servicesHeading.split('positive birth')[0]}
                <em>positive birth</em>
                {servicesHeading.split('positive birth')[1]}
              </>
            ) : (
              servicesHeading
            )}
          </h2>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <Link key={svc.href} href={svc.href} className="service-cell">
              <span className="scallop-shadow" aria-hidden="true" />
              <div className="service-card">
                <span className="service-num">{svc.num}</span>
                {svc.icon}
                <div className="service-name">{svc.name}</div>
                <p className="service-desc">{svc.description}</p>
                <span className="service-link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="about">
          <div className="about-visual">
            <div className="about-photo-frame">
              <Image
                src={aboutImage}
                alt="Leanne — birth-hood founder"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className="about-accent-box">
              <span className="big-num">100&apos;s</span>
              <span className="big-label">of families supported</span>
            </div>
          </div>

          <div>
            <div className="section-label">{aboutEyebrow}</div>
            <h2 className="about-heading">
              {aboutHeading.includes('positive birth') ? (
                <>
                  {aboutHeading.split('positive birth')[0]}
                  <em>positive birth</em>
                  {aboutHeading.split('positive birth')[1]}
                </>
              ) : (
                aboutHeading
              )}
            </h2>
            {aboutBody.map((para, i) => (
              <p key={i} className="about-body">
                {para}
              </p>
            ))}
            <div className="credentials">
              {credentials.map((cred, i) => (
                <div key={i} className="credential">
                  <span className="credential-dot" />
                  {cred}
                </div>
              ))}
            </div>
            <div className="trust-badges">
              <a
                href="https://bgi.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="trust-badge"
                aria-label="Insured by BGI UK"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bgi-logo.svg" alt="BGI UK — Professional Insurance" className="trust-badge-logo" />
              </a>
            </div>
            <Link href={aboutCtaHref} className="btn-outline">
              {aboutCta}
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials has-dots">
        <Sparkles
          className="sec-decor"
          items={[
            { top: '7%', right: '8%', size: 34, delay: 0.3, dur: 3 },
            { top: '46%', left: '4%', size: 24, delay: 1.3, dur: 2.7, white: true },
            { bottom: '12%', right: '6%', size: 28, delay: 0.8, dur: 3.3 },
            { top: '24%', left: '46%', size: 16, delay: 2, dur: 2.5, white: true },
          ]}
        />
        <div className="testimonials-header">
          <div>
            <div className="section-label light">{testimonialsEyebrow}</div>
            <h2 className="testimonials-title">
              {testimonialsHeading.includes('say') ? (
                <>
                  {testimonialsHeading.split('say')[0]}
                  <em>say</em>
                  {testimonialsHeading.split('say')[1]}
                </>
              ) : (
                testimonialsHeading
              )}
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="stars">★★★★★</div>
            <div className="stars-label">5 Star rated on Google</div>
          </div>
        </div>

        <div className="reviews-track">
          {testimonials.map((t, i) => (
            <div key={i} className="review-card">
              <p className="review-text">{t.quote}</p>
              <div className="review-author">{t.attribution}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href="/reviews"
            className="btn-primary"
            style={{ background: 'var(--pink)', color: 'var(--black)' }}
          >
            Read all reviews
          </Link>
        </div>
      </section>

      {/* FREE RESOURCES TEASER */}
      <section className="freebies">
        <Sparkles
          className="sec-decor"
          items={[
            { top: '14%', left: '8%', size: 30, delay: 0.4, dur: 3.1, white: true },
            { top: '20%', right: '10%', size: 24, delay: 1.4, dur: 2.7, white: true },
            { bottom: '16%', left: '14%', size: 20, delay: 0.9, dur: 3.4, white: true },
            { bottom: '22%', right: '12%', size: 28, delay: 1.8, dur: 2.5, white: true },
          ]}
        />
        <div className="freebies-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Completely free
          </div>
          <h2 className="freebies-heading">{freebiesHeading}</h2>
          <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.6 }}>
            {freebiesBody}
          </p>
          <div className="freebies-items">
            {freebiesTags.map((tag, i) => (
              <span key={i} className="freebie-tag">
                {tag}
              </span>
            ))}
          </div>
          <Link href="/freebies" className="btn-primary">
            {freebiesCta}
          </Link>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="insta-section">
        <div className="insta-profile-header">
          <div className="insta-profile-avatar">
            <Image
              src="/images/leanne-portrait.jpg"
              alt="@birthhooduk on Instagram"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div className="insta-profile-info">
            <div className="section-label">Follow along</div>
            <h2 className="insta-heading">
              Follow me on <em>Instagram</em>
            </h2>
            <p className="insta-tagline">
              @birthhooduk — real moments from my day-to-day work supporting families
            </p>
          </div>
          <a
            href={s.social?.instagram ?? 'https://www.instagram.com/birthhooduk'}
            className="btn-primary insta-follow-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @birthhooduk ↗
          </a>
        </div>

        <InstagramSection />

        <div className="insta-cta-row">
          <a
            href={s.social?.instagram ?? 'https://www.instagram.com/birthhooduk'}
            className="btn-outline insta-view-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more on Instagram @birthhooduk ↗
          </a>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="booking-cta">
        <div className="booking-cta-inner">
          <div>
            <h2 className="booking-heading">
              {bookingHeading.includes('excited') ? (
                <>
                  {bookingHeading.split('excited')[0]}
                  <em>excited</em>
                  {bookingHeading.split('excited')[1]}
                </>
              ) : (
                bookingHeading
              )}
            </h2>
            <p className="booking-note">{bookingBody}</p>
          </div>
          <a
            href={heroCtaHref}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ whiteSpace: 'nowrap' }}
          >
            {heroCta}
          </a>
        </div>
      </section>
    </>
  )
}
