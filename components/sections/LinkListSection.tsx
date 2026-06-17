interface LinkItem {
  _key?: string
  label: string
  url?: string
  description?: string
  featured?: boolean
}

type Props = {
  heading?: string
  intro?: string
  links?: LinkItem[]
}

export default function LinkListSection({ heading, intro, links = [] }: Props) {
  return (
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: '640px' }}>
        {heading && (
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 900, marginBottom: intro ? '0.75rem' : '2rem', lineHeight: 1.1, textAlign: 'center' }}>
            {heading}
          </h2>
        )}
        {intro && (
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', textAlign: 'center' }}>
            {intro}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {links.map((link, i) => (
            <a
              key={link._key ?? i}
              href={link.url ?? '#'}
              className={link.featured ? 'btn-primary' : 'card'}
              target={link.url?.startsWith('http') ? '_blank' : undefined}
              rel={link.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{ textDecoration: 'none', color: link.featured ? undefined : 'inherit', display: 'block', textAlign: 'center' }}
            >
              <span style={{ fontWeight: 700 }}>{link.label}</span>
              {link.description && (
                <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 300, color: link.featured ? undefined : 'var(--grey-mid)', marginTop: '0.25rem' }}>
                  {link.description}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
