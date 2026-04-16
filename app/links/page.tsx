import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Links — Birth Hood',
}

const links = [
  {
    label: 'Book a 1-1 Consultation',
    desc: 'Book directly via Calendly',
    href: 'https://calendly.com/birthhood',
    external: true,
    featured: true,
  },
  {
    label: 'Course Booking',
    desc: 'Book a hypnobirthing course or yoga class',
    href: '/booking',
    external: false,
    featured: false,
  },
  {
    label: 'Free Resources',
    desc: 'Birth affirmations, guides and templates — completely free',
    href: '/freebies',
    external: false,
    featured: false,
  },
  {
    label: 'Doula Support',
    desc: 'Learn about birth doula packages',
    href: '/doula',
    external: false,
    featured: false,
  },
  {
    label: 'Prenatal Yoga',
    desc: 'Weekly classes and block bookings',
    href: '/yoga',
    external: false,
    featured: false,
  },
  {
    label: 'Birth Trauma Support',
    desc: 'Compassionate support for difficult birth experiences',
    href: '/birth-trauma',
    external: false,
    featured: false,
  },
  {
    label: 'Dou-La-La Podcast',
    desc: 'Honest birth talk with Leanne &amp; Meg',
    href: '/podcast',
    external: false,
    featured: false,
  },
  {
    label: 'Blog',
    desc: 'Articles, guides and birth knowledge',
    href: '/blog',
    external: false,
    featured: false,
  },
  {
    label: 'Reviews',
    desc: 'What families say about working with Leanne',
    href: '/reviews',
    external: false,
    featured: false,
  },
  {
    label: 'Contact Leanne',
    desc: 'Get in touch with any questions',
    href: '/contact',
    external: false,
    featured: false,
  },
  {
    label: 'Leave a Google Review',
    desc: 'Share your experience — it means the world',
    href: 'https://g.page/r/birthhood',
    external: true,
    featured: false,
  },
]

export default function LinksPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--cream)', paddingBottom: '4rem' }}>
      {/* Header */}
      <div style={{ background: 'var(--black)', paddingTop: '5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '560px' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'var(--pink-ultra)', border: '2px solid var(--pink)',
            margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '2rem',
          }}>
            ✿
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 900, color: '#fff', marginBottom: '0.7rem', lineHeight: 1.1,
          }}>
            Birth <em style={{ fontStyle: 'italic', color: 'var(--pink)' }}>Hood</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.7 }}>
            Doula support, hypnobirthing, prenatal yoga and more — with Leanne, based in Leicester.
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="wrap" style={{ maxWidth: '560px', paddingTop: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {links.map(link => {
            const inner = (
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '1rem',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: link.featured ? '#fff' : 'var(--black)',
                    lineHeight: 1.3,
                  }}>
                    {link.label}
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: link.featured ? 'rgba(255,255,255,0.75)' : 'var(--grey-mid)',
                    marginTop: '0.2rem',
                    lineHeight: 1.4,
                  }}
                    dangerouslySetInnerHTML={{ __html: link.desc }}
                  />
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke={link.featured ? 'rgba(255,255,255,0.7)' : 'var(--grey-light)'}
                  strokeWidth="2" style={{ flexShrink: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </div>
            )

            const sharedStyle: React.CSSProperties = {
              display: 'block',
              padding: '1.2rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              border: link.featured ? 'none' : '1px solid rgba(0,0,0,0.08)',
              background: link.featured ? 'var(--pink-deep)' : '#fff',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              boxShadow: link.featured
                ? '0 4px 16px rgba(197,58,139,0.25)'
                : '0 1px 4px rgba(0,0,0,0.06)',
            }

            if (link.external) {
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={sharedStyle}>
                  {inner}
                </a>
              )
            }
            return (
              <Link key={link.label} href={link.href} style={sharedStyle}>
                {inner}
              </Link>
            )
          })}
        </div>

        {/* Footer note */}
        <p style={{
          textAlign: 'center', color: 'var(--grey-light)', fontSize: '0.75rem',
          fontWeight: 300, marginTop: '3rem', lineHeight: 1.6,
        }}>
          Birth Hood · Leicester · Leanne Bell · Doula, Hypnobirthing Teacher & Prenatal Yoga
        </p>
      </div>
    </main>
  )
}
