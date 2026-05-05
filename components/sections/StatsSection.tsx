interface StatItem {
  _key?: string
  value: string
  label: string
}

interface Props {
  eyebrow?: string
  heading?: string
  items?: StatItem[]
}

export default function StatsSection({ eyebrow, heading, items }: Props) {
  if (!items?.length) return null

  return (
    <section className="section-pad">
      <div className="wrap">
        {eyebrow && <div className="section-label">{eyebrow}</div>}
        {heading && (
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            {heading}
          </h2>
        )}
        <div className="stat-grid">
          {items.map((item, i) => (
            <div key={item._key ?? i} className="stat-card">
              <div className="stat-number">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
