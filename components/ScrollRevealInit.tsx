'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Auto-animates sections and `.reveal` elements with a smooth GSAP
 * scroll-triggered fade + slide-up. Re-runs on route change.
 *
 * Targets:
 *  - any element with className "reveal" (with optional reveal-d{1-4} delay)
 *  - <section> elements inside <main>, except the first hero/page-hero
 *
 * Respects prefers-reduced-motion.
 */
export default function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      document
        .querySelectorAll<HTMLElement>('.reveal, main section')
        .forEach(el => {
          el.style.opacity = '1'
          el.style.transform = 'none'
        })
      return
    }

    // Small delay so layout settles
    const timer = window.setTimeout(() => {
      const triggers: ScrollTrigger[] = []

      // 1. Explicit .reveal elements (with optional delay class)
      document.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
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

      // 2. Auto-target sections inside <main>
      // Skip the first section (usually a hero) and any element that's
      // a hero (has class "page-hero" / "home-hero-split" / "page-hero-inner")
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('main section')
      )

      sections.forEach((section, idx) => {
        if (section.dataset.gsapInit === '1') return

        // Skip heroes and the very first section on the page
        if (
          idx === 0 ||
          section.classList.contains('page-hero') ||
          section.classList.contains('home-hero-split')
        ) {
          return
        }

        section.dataset.gsapInit = '1'

        gsap.set(section, { opacity: 0, y: 40 })

        const tween = gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      })

      ScrollTrigger.refresh()

      ;(window as unknown as { __birthHoodTriggers?: ScrollTrigger[] }).__birthHoodTriggers = triggers
    }, 50)

    return () => {
      window.clearTimeout(timer)
      const stored = (window as unknown as { __birthHoodTriggers?: ScrollTrigger[] }).__birthHoodTriggers
      if (stored) {
        stored.forEach(t => t.kill())
      }
      // reset init flag so next route animates again
      document
        .querySelectorAll<HTMLElement>('[data-gsap-init]')
        .forEach(el => {
          delete el.dataset.gsapInit
        })
    }
  }, [pathname])

  return null
}
