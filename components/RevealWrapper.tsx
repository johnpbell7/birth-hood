'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
  /** distance in px to slide up from (default 32) */
  y?: number
  /** duration in seconds (default 0.9) */
  duration?: number
}

const DELAY_MAP: Record<number, number> = { 0: 0, 1: 0.1, 2: 0.2, 3: 0.3, 4: 0.4 }

export default function RevealWrapper({
  children,
  delay = 0,
  className = '',
  y = 32,
  duration = 0.9,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }

    // If already in view at mount, just show it
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }

    gsap.set(el, { opacity: 0, y })

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay: DELAY_MAP[delay] ?? 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [delay, y, duration])

  return (
    <div ref={ref} className={className || undefined}>
      {children}
    </div>
  )
}
