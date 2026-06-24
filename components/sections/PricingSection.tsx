interface PricingCard {
  _key?: string
  label: string
  badge?: string
  price: string
  period?: string
  features?: string[]
  ctaLabel?: string
  ctaHref?: string
  highlighted?: boolean
}

interface Props {
  eyebrow?: string
  heading?: string
  subheading?: string
  items?: PricingCard[]
  footnote?: string
}

export default function PricingSection({ eyebrow, heading, subheading, items, footnote }: Props) {
  if (!items?.length) return null

  return (
    <section className="section-pad">
      <div className="wrap">
        {eyebrow && <div className="section-label">{eyebrow}</div>}
        {heading && (
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: subheading ? '1rem' : '3rem', lineHeight: 1.1 }}>
            {heading}
          </h2>
        )}
        {subheading && (
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '3rem', maxWidth: '600px' }}>
            {subheading}
          </p>
        )}

        <div className={`grid-${Math.min(items.length, 3)}`} style={{ gap: '1.5rem' }}>
          {items.map((card, i) => (
            <div key={card._key ?? i} className={`price-card${card.highlighted ? ' featured' : ''}`}>
              {card.badge && (
                <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
                  {card.badge}
                </div>
              )}
              <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-mid)', marginBottom: '1rem' }}>
                {card.label}
              </div>
              <div className="price-amount">{card.price}</div>
              {card.period && <div className="price-period">{card.period}</div>}
              {card.features && card.features.length > 0 && (
                <ul className="price-features">
                  {card.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              )}
              {card.ctaHref && (
                <a
                  href={card.ctaHref}
                  className={card.highlighted ? 'btn-primary' : 'btn-outline'}
                  target={card.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={card.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  {card.ctaLabel ?? 'Book Now'}
                </a>
              )}
            </div>
          ))}
        </div>

        {footnote && (
          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--grey-mid)', fontSize: '0.88rem', fontWeight: 300 }}>
            {footnote}
          </p>
        )}
      </div>
    </section>
  )
}
