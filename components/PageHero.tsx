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
        <div className="page-eyebrow">{eyebrow}</div>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
        {actions && <div className="hero-actions">{actions}</div>}
      </div>
    </section>
  )
}
