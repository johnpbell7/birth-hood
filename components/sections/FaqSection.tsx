'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'

type Item = { question: string; answer?: unknown[] }

type Props = {
  eyebrow?: string
  heading?: string
  items?: Item[]
}

export default function FaqSection({ eyebrow, heading, items = [] }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: '780px' }}>
        {eyebrow && <div className="section-label" style={{ marginBottom: '0.6rem' }}>{eyebrow}</div>}
        {heading && (
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '2rem', lineHeight: 1.1 }}>
            {heading}
          </h2>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '1.2rem 1.4rem',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 500, color: 'var(--black)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span style={{ color: 'var(--pink-deep)', fontSize: '1.4rem', flexShrink: 0 }}>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && item.answer && (
                  <div style={{ padding: '0 1.4rem 1.4rem', color: 'var(--grey-mid)', fontSize: '0.92rem', lineHeight: 1.8, fontWeight: 300 }}>
                    <PortableText value={item.answer as never} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
