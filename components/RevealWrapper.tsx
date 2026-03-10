'use client'

import { useEffect, useRef } from 'react'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className = '' }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    if (r.top >= window.innerHeight - 20) {
      el.classList.add('will-animate')
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )
    if (el.classList.contains('will-animate')) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` reveal-d${delay}` : ''

  return (
    <div ref={ref} className={`reveal${delayClass}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
