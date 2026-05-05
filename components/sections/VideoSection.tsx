type Props = {
  heading?: string
  caption?: string
  url: string
}

function getEmbedUrl(url: string): string | null {
  if (!url) return null
  // YouTube
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`
  // Vimeo
  const vm = url.match(/vimeo\.com\/(\d+)/)
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`
  return null
}

export default function VideoSection({ heading, caption, url }: Props) {
  const embed = getEmbedUrl(url)
  return (
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: '900px' }}>
        {heading && (
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.15 }}>
            {heading}
          </h2>
        )}
        <div style={{ aspectRatio: '16/9', background: 'var(--black)', borderRadius: '4px', overflow: 'hidden' }}>
          {embed ? (
            <iframe src={embed} title={heading || 'Video'} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: '100%', height: '100%', border: 0 }} />
          ) : (
            <video controls style={{ width: '100%', height: '100%' }}>
              <source src={url} />
            </video>
          )}
        </div>
        {caption && (
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', textAlign: 'center', marginTop: '0.75rem', fontWeight: 300 }}>{caption}</p>
        )}
      </div>
    </section>
  )
}
