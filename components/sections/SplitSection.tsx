import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

type Props = {
  eyebrow?: string
  heading?: string
  body?: unknown[]
  bullets?: string[]
  ctaLabel?: string
  ctaHref?: string
  image?: { asset?: unknown; alt?: string }
  imageSide?: 'left' | 'right'
}

export default function SplitSection({ eyebrow, heading, body, bullets, ctaLabel, ctaHref, image, imageSide = 'left' }: Props) {
  const imgUrl = image?.asset ? urlFor(image as never).width(900).url() : null
  const imageEl = imgUrl ? (
    <div>
      <Image src={imgUrl} alt={image?.alt ?? ''} width={700} height={700} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
    </div>
  ) : null
  const textEl = (
    <div>
      {eyebrow && <div className="section-label" style={{ marginBottom: '0.6rem' }}>{eyebrow}</div>}
      {heading && (
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.15 }}>
          {heading}
        </h2>
      )}
      {body && (
        <div style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: bullets?.length ? '1.5rem' : 0 }}>
          <PortableText value={body as never} />
        </div>
      )}
      {bullets && bullets.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ fontSize: '0.92rem', color: 'var(--black)', display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--pink-deep)' }}>✦</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {ctaLabel && ctaHref && (
        <a href={ctaHref} className="btn-primary">{ctaLabel}</a>
      )}
    </div>
  )
  return (
    <section className="section-pad">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        {imageSide === 'left' ? <>{imageEl}{textEl}</> : <>{textEl}{imageEl}</>}
      </div>
    </section>
  )
}
