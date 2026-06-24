import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type Item = {
  number?: string
  icon?: string
  title: string
  description?: string
  href?: string
  linkLabel?: string
  image?: { asset?: unknown; alt?: string }
}

type Props = {
  eyebrow?: string
  heading?: string
  subheading?: string
  items?: Item[]
}

export default function FeatureGridSection({ eyebrow, heading, subheading, items = [] }: Props) {
  return (
    <section className="section-pad">
      <div className="wrap">
        <div style={{ marginBottom: '2.5rem' }}>
          {eyebrow && <div className="section-label" style={{ marginBottom: '0.6rem' }}>{eyebrow}</div>}
          {heading && (
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.1 }}>
              {heading}
            </h2>
          )}
          {subheading && (
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '680px' }}>
              {subheading}
            </p>
          )}
        </div>
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {items.map((item, i) => {
            const imgUrl = item.image?.asset ? urlFor(item.image as never).width(600).url() : null
            const cardInner = (
              <>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', color: 'var(--pink-deep)', marginBottom: '1rem' }}>
                  {item.icon ? item.icon : (item.number ?? String(i + 1).padStart(2, '0'))}
                </div>
                {imgUrl && (
                  <Image src={imgUrl} alt={item.image?.alt ?? ''} width={400} height={240} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '3px', marginBottom: '1rem' }} />
                )}
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                {item.description && (
                  <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300, marginBottom: item.href ? '1rem' : 0 }}>
                    {item.description}
                  </p>
                )}
                {item.href && (
                  <span style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pink-deep)' }}>
                    {item.linkLabel || 'Learn more'} →
                  </span>
                )}
              </>
            )
            return item.href ? (
              <a key={i} href={item.href} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                {cardInner}
              </a>
            ) : (
              <div key={i} className="card">{cardInner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
