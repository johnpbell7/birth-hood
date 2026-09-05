'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type CarouselPhoto = { src: string; alt: string }

const INTERVAL_MS = 5000

/**
 * A slow crossfade between a handful of photos, sized by whatever frame it is
 * dropped into. Pauses on hover and for anyone who prefers reduced motion, and
 * the dots below let you jump straight to a shot.
 */
export default function PhotoCarousel({
  photos,
  className = '',
}: {
  photos: CarouselPhoto[]
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback(
    (next: number) => setIndex(((next % photos.length) + photos.length) % photos.length),
    [photos.length],
  )

  useEffect(() => {
    if (photos.length < 2 || paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    timer.current = setInterval(() => setIndex((i) => (i + 1) % photos.length), INTERVAL_MS)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [photos.length, paused])

  if (photos.length === 0) return null

  return (
    <div className={`carousel ${className}`.trim()}>
      <div
        className="about-photo-frame carousel-frame"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {photos.map((photo, i) => (
          <div key={photo.src} className="carousel-slide" data-active={i === index} aria-hidden={i !== index}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <div className="carousel-dots" role="tablist" aria-label="Photos of Leanne">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={photo.alt}
              className="carousel-dot"
              data-active={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
