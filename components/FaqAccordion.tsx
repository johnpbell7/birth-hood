'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
          </div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  )
}
