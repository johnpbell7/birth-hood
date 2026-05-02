'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Auto-animates any element with className "reveal" or `reveal reveal-d{1-4}`
 * with a scroll-triggered fade + slide-up via GSAP.
 *
 * Replaces the old CSS class-toggle reveal which was janky on slow devices.
 * Re-runs whenever the route changes so newly mounted pages get animated.
 */
export default function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    // Small delay so any layout shifts settle first
    const timer = window.setTimeout(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
      const triggers: ScrollTrigger[] = []

      elements.forEach(el => {
        // skip if already animated by RevealWrapper internal state
        if (el.dataset.gsapInit === '1') return
        el.dataset.gsapInit = '1'

        let delay = 0
        if (el.classList.contains('reveal-d1')) delay = 0.1
        else if (el.classList.contains('reveal-d2')) delay = 0.2
        else if (el.classList.contains('reveal-d3')) delay = 0.3
        else if (el.classList.contains('reveal-d4')) delay = 0.4

        gsap.set(el, { opacity: 0, y: 32 })

        const tween = gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })

        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })

      // Refresh once everything is set up
      ScrollTrigger.refresh()

      // store cleanup
      ;(window as unknown as { __birthHoodTriggers?: ScrollTrigger[] }).__birthHoodTriggers = triggers
    }, 50)

    return () => {
      window.clearTimeout(timer)
      const stored = (window as unknown as { __birthHoodTriggers?: ScrollTrigger[] }).__birthHoodTriggers
      if (stored) {
        stored.forEach(t => t.kill())
      }
      // mark all reveals as not init so they animate again on next route
      document.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
        delete el.dataset.gsapInit
      })
    }
  }, [pathname])

  return null
}
