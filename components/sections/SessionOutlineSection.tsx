interface SessionItem {
  _key?: string
  number?: string
  title: string
  description?: string
  topics?: string[]
}

type Props = {
  heading?: string
  intro?: string
  sessions?: SessionItem[]
  note?: string
}

export default function SessionOutlineSection({ heading, intro, sessions = [], note }: Props) {
  return (
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: '820px' }}>
        {heading && (
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: intro ? '0.75rem' : '2.5rem', lineHeight: 1.1 }}>
            {heading}
          </h2>
        )}
        {intro && (
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem' }}>
            {intro}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {sessions.map((session, i) => (
            <div key={session._key ?? i} className="card">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: session.description || session.topics?.length ? '0.75rem' : 0 }}>
                {session.number && (
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', color: 'var(--pink-deep)' }}>
                    {session.number}
                  </span>
                )}
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500 }}>
                  {session.title}
                </h3>
              </div>
              {session.description && (
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300, marginBottom: session.topics?.length ? '1rem' : 0 }}>
                  {session.description}
                </p>
              )}
              {session.topics && session.topics.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {session.topics.map((t, j) => (
                    <li key={j} style={{ fontSize: '0.88rem', color: 'var(--black)', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--pink-deep)' }}>✦</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {note && (
          <p style={{ marginTop: '2rem', color: 'var(--grey-mid)', fontSize: '0.88rem', fontWeight: 300, fontStyle: 'italic' }}>
            {note}
          </p>
        )}
      </div>
    </section>
  )
}
