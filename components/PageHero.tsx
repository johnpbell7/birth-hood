import Image from 'next/image'
import { Sparkles } from '@/components/Decor'

interface PolaroidImage {
  src: string
  alt: string
}

interface PageHeroProps {
  /** Optional — heroes run without one unless the CMS supplies it. */
  eyebrow?: string
  title: React.ReactNode
  subtitle: string
  actions?: React.ReactNode
  img1?: PolaroidImage
  img2?: PolaroidImage
  /* Mobile floating button — defaults to the free-consultation CTA.
     Set these to match this page's hero CTA. */
  ctaLabel?: string
  ctaHref?: string
  /* Suppress the mobile floating button entirely (e.g. the Shop, which has its
     own floating cart bar). */
  hideFab?: boolean
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  img1,
  img2,
  ctaLabel = 'Book Free Consultation',
  ctaHref = 'https://calendly.com/birthhood/free-consultation',
  hideFab = false,
}: PageHeroProps) {
  const externalCta = ctaHref.startsWith('http')
  // Pages that pass no photos get a text-only banner rather than a pair of
  // empty polaroid frames.
  const hasPhotos = Boolean(img1 || img2)
  // One photo shows on its own rather than beside an empty second frame.
  const single = Boolean(img1) !== Boolean(img2)
  const solo = img1 ?? img2
  return (
    <>
    <section className="page-hero">
      {/* twinkling brand stars — site-wide hero flair */}
      <Sparkles
        className="page-hero-decor"
        items={[
          { top: '16%', right: '6%', size: 30, delay: 0.2, dur: 3.1, white: true },
          { top: '34%', right: '20%', size: 16, delay: 1.1, dur: 2.6, white: true },
          { bottom: '16%', right: '12%', size: 26, delay: 0.6, dur: 3.4, white: true },
          { top: '18%', left: '3%', size: 22, delay: 1.5, dur: 2.8, white: true },
          { bottom: '24%', left: '7%', size: 15, delay: 0.9, dur: 2.4, white: true },
        ]}
      />
      <div className={`page-hero-inner${hasPhotos ? '' : ' page-hero-inner--no-photos'}`}>

        {/* Left — text */}
        <div className="page-hero-text">
          {eyebrow && <div className="page-eyebrow">{eyebrow}</div>}
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{subtitle}</p>
          {actions && <div className="hero-actions">{actions}</div>}
        </div>

        {/* Right — polaroids */}
        {hasPhotos && single && solo && (
          <div className="page-hero-polaroids page-hero-polaroids--single">
            <div className="ph-frame ph-frame-large">
              <div className="ph-img-area">
                <Image src={solo.src} alt={solo.alt} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div className="ph-caption">{solo.alt}</div>
            </div>
          </div>
        )}

        {hasPhotos && !single && (
        <div className="page-hero-polaroids">

          {/* Large frame */}
          <div className="ph-frame ph-frame-large">
            <div className="ph-img-area">
              {img1 ? (
                <Image src={img1.src} alt={img1.alt} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              ) : (
                <svg className="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <path d="M8.5 5l1-2h5l1 2"/>
                </svg>
              )}
            </div>
            <div className="ph-caption">{img1 ? img1.alt : 'add photo'}</div>
          </div>

          {/* Small frame */}
          <div className="ph-frame ph-frame-small">
            <div className="ph-img-area">
              {img2 ? (
                <Image src={img2.src} alt={img2.alt} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              ) : (
                <svg className="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <path d="M8.5 5l1-2h5l1 2"/>
                </svg>
              )}
            </div>
            <div className="ph-caption">{img2 ? img2.alt : 'add photo'}</div>
          </div>

        </div>
        )}
      </div>
    </section>
    {/* Mobile floating CTA — mirrors this page's hero button */}
    {!hideFab && (
      <a
        href={ctaHref}
        className="mobile-book-fab"
        {...(externalCta ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {ctaLabel}
      </a>
    )}
    </>
  )
}
