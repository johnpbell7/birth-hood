type Props = {
  heading: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
  theme?: 'light' | 'pink' | 'dark'
}

const themes = {
  light: { bg: 'var(--white)', color: 'var(--black)', sub: 'var(--grey-mid)' },
  pink: { bg: 'var(--pink-ultra)', color: 'var(--black)', sub: 'var(--grey-mid)' },
  dark: { bg: 'var(--black)', color: 'var(--white)', sub: 'rgba(255,255,255,0.7)' },
}

export default function CtaBandSection({ heading, subheading, ctaLabel, ctaHref, theme = 'pink' }: Props) {
  const t = themes[theme]
  return (
    <section style={{ background: t.bg, color: t.color, padding: '4rem 0' }}>
      <div className="wrap" style={{ textAlign: 'center', maxWidth: '720px' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.15 }}>
          {heading}
        </h2>
        {subheading && (
          <p style={{ color: t.sub, fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
            {subheading}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <a href={ctaHref} className={theme === 'dark' ? 'btn-primary' : 'btn-dark'}>
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  )
}
