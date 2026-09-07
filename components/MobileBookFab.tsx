'use client'

import { useEffect, useState } from 'react'

/**
 * The floating "Book Free Consultation" button on mobile.
 *
 * It hides once the footer comes into view, so it stops covering the contact
 * details and links people scroll to the bottom to read.
 */
export default function MobileBookFab({
  href,
  label,
  external,
}: {
  href: string
  label: string
  external: boolean
}) {
  const [atFooter, setAtFooter] = useState(false)

  useEffect(() => {
    const footer = document.getElementById('footer')
    if (!footer) return
    const io = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      // Fire a little before the footer's top edge arrives, so the button is
      // already gone rather than disappearing over the first line of it.
      { rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  return (
    <a
      href={href}
      className={`mobile-book-fab${atFooter ? ' is-hidden' : ''}`}
      aria-hidden={atFooter}
      tabIndex={atFooter ? -1 : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
    </a>
  )
}
