interface CtaBandProps {
  heading: React.ReactNode
  body: string
  href?: string
  label?: string
}

export default function CtaBand({
  heading,
  body,
  href = 'https://calendly.com/birthhood',
  label = 'Book Free Consultation',
}: CtaBandProps) {
  return (
    <div className="cta-band reveal">
      <h2>{heading}</h2>
      <p>{body}</p>
      <a href={href} className="btn-dark" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {label}
      </a>
    </div>
  )
}
