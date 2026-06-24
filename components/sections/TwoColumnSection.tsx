import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

interface Stat {
  _key?: string
  label?: string
  value?: string
}

type Props = {
  eyebrow?: string
  heading?: string
  body?: unknown[]
  sidePanelTitle?: string
  stats?: Stat[]
  callout?: string
  image?: { asset?: unknown; alt?: string }
  imagePosition?: 'left' | 'right'
}

export default function TwoColumnSection({
  eyebrow,
  heading,
  body,
  sidePanelTitle,
  stats = [],
  callout,
  image,
  imagePosition = 'right',
}: Props) {
  const imgUrl = image?.asset ? urlFor(image as never).width(900).url() : null

  const mainEl = (
    <div>
      {eyebrow && <div className="section-label" style={{ marginBottom: '0.6rem' }}>{eyebrow}</div>}
      {heading && (
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, marginBottom: '1.25rem', lineHeight: 1.15 }}>
          {heading}
        </h2>
      )}
      {body && (
        <div className="prose" style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.6, fontWeight: 300 }}>
          <PortableText value={body as never} />
        </div>
      )}
    </div>
  )

  const sideEl = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {imgUrl && (
        <Image src={imgUrl} alt={image?.alt ?? ''} width={700} height={500} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
      )}
      {(sidePanelTitle || stats.length > 0) && (
        <div className="card">
          {sidePanelTitle && (
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '1rem' }}>
              {sidePanelTitle}
            </h3>
          )}
          {stats.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {stats.map((s, i) => (
                <div key={s._key ?? i}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', color: 'var(--pink-deep)' }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey-mid)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {callout && (
        <div style={{ background: 'var(--pink-ultra)', borderRadius: '4px', padding: '1.5rem', color: 'var(--black)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300 }}>
          {callout}
        </div>
      )}
    </div>
  )

  return (
    <section className="section-pad">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        {imagePosition === 'left' ? <>{sideEl}{mainEl}</> : <>{mainEl}{sideEl}</>}
      </div>
    </section>
  )
}
