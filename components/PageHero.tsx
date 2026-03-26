interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle: string
  actions?: React.ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, actions }: PageHeroProps) {
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

        {/* Right — polaroid placeholders */}
        <div className="page-hero-polaroids">
          <div className="ph-frame ph-frame-large">
            <div className="ph-img-area">
              <svg className="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <circle cx="12" cy="12" r="3.5"/>
                <path d="M8.5 5l1-2h5l1 2"/>
              </svg>
            </div>
            <div className="ph-caption">add photo</div>
          </div>
          <div className="ph-frame ph-frame-small">
            <div className="ph-img-area">
              <svg className="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <circle cx="12" cy="12" r="3.5"/>
                <path d="M8.5 5l1-2h5l1 2"/>
              </svg>
            </div>
            <div className="ph-caption">add photo</div>
          </div>
        </div>

      </div>
    </section>
  )
}
