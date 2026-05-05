import { PortableText, type PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type Props = {
  eyebrow?: string
  heading?: string
  body?: unknown[]
  align?: 'left' | 'center'
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const url = urlFor(value).width(900).url()
      return (
        <figure style={{ margin: '1.5rem 0' }}>
          <Image src={url} alt={value.alt ?? ''} width={900} height={600} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
          {value.caption && <figcaption style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', marginTop: '0.5rem', textAlign: 'center' }}>{value.caption}</figcaption>}
        </figure>
      )
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href ?? '#'} style={{ color: 'var(--pink-deep)' }} target={value?.href?.startsWith('http') ? '_blank' : undefined} rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
  },
}

export default function RichTextSection({ eyebrow, heading, body, align = 'left' }: Props) {
  return (
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: '760px', textAlign: align }}>
        {eyebrow && <div className="section-label" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start', marginBottom: '0.6rem' }}>{eyebrow}</div>}
        {heading && (
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.15 }}>
            {heading}
          </h2>
        )}
        {body && (
          <div className="prose" style={{ color: 'var(--grey-mid)', fontSize: '0.97rem', lineHeight: 1.85, fontWeight: 300 }}>
            <PortableText value={body as never} components={components} />
          </div>
        )}
      </div>
    </section>
  )
}
