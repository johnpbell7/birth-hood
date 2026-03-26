import Image from 'next/image'

interface PolaroidImage {
  src: string
  alt: string
}

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle: string
  actions?: React.ReactNode
  img1?: PolaroidImage
  img2?: PolaroidImage
}

export default function PageHero({ eyebrow, title, subtitle, actions, img1, img2 }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">

        {/* Left — text */}
        <div className="page-hero-text">
          <div className="page-eyebrow">{eyebrow}</div>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{subtitle}</p>
          {actions && <div className="hero-actions">{actions}</div>}
        </div>

        {/* Right — polaroids */}
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
      </div>
    </section>
  )
}
