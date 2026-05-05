import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type Props = {
  eyebrow?: string
  heading: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
  image?: { asset?: unknown; alt?: string }
}

export default function HeroSection({ eyebrow, heading, subheading, ctaLabel, ctaHref, image }: Props) {
  const imgUrl = image?.asset ? urlFor(image as never).width(1200).url() : null
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div>
          {eyebrow && <div className="page-eyebrow">{eyebrow}</div>}
          <h1 className="page-title">{heading}</h1>
          {subheading && <p className="page-subtitle">{subheading}</p>}
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className="btn-primary" style={{ marginTop: '1rem' }}>
              {ctaLabel}
            </a>
          )}
        </div>
        {imgUrl && (
          <div>
            <Image src={imgUrl} alt={image?.alt ?? ''} width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
          </div>
        )}
      </div>
    </section>
  )
}
