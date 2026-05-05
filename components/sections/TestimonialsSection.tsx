type Item = { quote: string; attribution?: string; rating?: number }

type Props = {
  eyebrow?: string
  heading?: string
  items?: Item[]
}

export default function TestimonialsSection({ eyebrow, heading, items = [] }: Props) {
  return (
    <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
      <div className="wrap">
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          {eyebrow && <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.6rem' }}>{eyebrow}</div>}
          {heading && (
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 900, lineHeight: 1.1 }}>
              {heading}
            </h2>
          )}
        </div>
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {items.map((item, i) => (
            <div key={i} className="card" style={{ background: 'var(--white)', padding: '1.8rem' }}>
              {item.rating && (
                <div style={{ color: 'var(--pink-deep)', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>
                  {'★'.repeat(item.rating)}
                </div>
              )}
              <p style={{ fontSize: '0.95rem', color: 'var(--black)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              {item.attribution && (
                <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey-light)' }}>
                  {item.attribution}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
