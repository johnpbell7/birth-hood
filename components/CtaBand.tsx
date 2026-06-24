import { Sparkles } from '@/components/Decor'

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
      <Sparkles
        className="sec-decor"
        items={[
          { top: '16%', left: '7%', size: 26, delay: 0.2, dur: 3, white: true },
          { top: '24%', right: '9%', size: 18, delay: 1.1, dur: 2.6, white: true },
          { bottom: '20%', left: '12%', size: 20, delay: 0.7, dur: 3.3, white: true },
          { bottom: '26%', right: '8%', size: 28, delay: 1.6, dur: 2.4, white: true },
        ]}
      />
      <h2>{heading}</h2>
      <p>{body}</p>
      <a href={href} className="btn-dark" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {label}
      </a>
    </div>
  )
}
