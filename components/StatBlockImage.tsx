import Image from 'next/image'

/**
 * Section photo that fills the right-hand column of a `.grid-2` where the
 * doula service pages would otherwise repeat the same stats panel.
 * /doula keeps its stats; the individual service pages use this instead.
 */
export default function StatBlockImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 5',
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
