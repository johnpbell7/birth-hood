import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

type Props = {
  image: { asset?: unknown; alt?: string }
  caption?: string
  width?: 'full' | 'wide' | 'narrow'
}

const widths = { full: '100%', wide: '900px', narrow: '600px' }

export default function ImageSection({ image, caption, width = 'wide' }: Props) {
  if (!image?.asset) return null
  const url = urlFor(image as never).width(1600).url()
  return (
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: widths[width] }}>
        <figure style={{ margin: 0 }}>
          <Image src={url} alt={image.alt ?? ''} width={1600} height={900} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
          {caption && (
            <figcaption style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', marginTop: '0.6rem', textAlign: 'center', fontWeight: 300 }}>
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  )
}
