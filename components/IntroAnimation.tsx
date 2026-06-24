'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const STAR =
  'M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z'

const STARS = [
  { top: '16%', left: '13%', size: 34 },
  { top: '22%', right: '15%', size: 26 },
  { top: '60%', left: '17%', size: 24 },
  { bottom: '15%', right: '20%', size: 34 },
  { top: '40%', left: '7%', size: 18 },
  { bottom: '22%', left: '38%', size: 16 },
  { top: '13%', right: '34%', size: 18 },
  { bottom: '12%', right: '9%', size: 22 },
  { top: '52%', right: '10%', size: 16 },
]

// First-visit-per-session brand intro: logo + tagline + bursting stars, then
// slides up to reveal the page. Client-only (no SSR overlay) so content/SEO
// are untouched; respects prefers-reduced-motion.
export default function IntroAnimation() {
  const [play, setPlay] = useState(false)
  const [done, setDone] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const seen = sessionStorage.getItem('bh_intro_seen')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!seen && !reduce) {
      sessionStorage.setItem('bh_intro_seen', '1')
      setPlay(true)
    }
  }, [])

  useGSAP(
    () => {
      if (!play || !root.current) return
      const tl = gsap.timeline({ onComplete: () => setDone(true) })
      tl.set(root.current, { autoAlpha: 1 })
        .from('.intro-logo', { scale: 0.8, autoAlpha: 0, duration: 0.7, ease: 'back.out(1.6)' })
        .from('.intro-line', { y: 24, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25')
        .from(
          '.intro-star',
          { scale: 0, autoAlpha: 0, transformOrigin: 'center', stagger: 0.06, duration: 0.5, ease: 'back.out(2.2)' },
          '-=0.55'
        )
        .to(
          '.intro-star',
          { scale: 1.18, stagger: { each: 0.09, repeat: 1, yoyo: true }, duration: 0.45, ease: 'sine.inOut' },
          '-=0.2'
        )
        .to(root.current, { yPercent: -100, duration: 0.85, ease: 'power3.inOut' }, '+=0.55')
      return () => { tl.kill() }
    },
    { dependencies: [play], scope: root }
  )

  if (!play || done) return null

  return (
    <div ref={root} className="intro-overlay" style={{ visibility: 'hidden' }} aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="intro-star"
          style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom, width: s.size, height: s.size }}
        >
          <svg viewBox="0 0 24 24"><path d={STAR} fill="currentColor" /></svg>
        </span>
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.jpg" alt="birth-hood" className="intro-logo" />
      <div className="intro-line">Your birth, <em>your way.</em></div>
    </div>
  )
}
