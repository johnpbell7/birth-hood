import Image from 'next/image'

/**
 * Photo that sits directly beneath a `.stat-grid`, sharing its 3px gutter so the
 * two read as one block. Used on the doula service pages to stop the stats
 * panel looking identical on every page.
 */
export default function StatBlockImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 10',
        marginTop: '3px',
        overflow: 'hidden',
        background: 'var(--pink-ultra)',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 900px) 100vw, 45vw"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
