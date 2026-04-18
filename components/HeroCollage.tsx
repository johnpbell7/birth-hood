'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/images/leanne-portrait.jpg', alt: 'Leanne — birth-hood founder', position: 'center top' },
  { src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class in Leicester', position: 'center' },
  { src: '/images/yoga-class.jpg', alt: 'Prenatal yoga class', position: 'center' },
  { src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking at a birth event', position: 'center top' },
]

export default function HeroCollage() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % photos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-photo-collage">
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className={`hero-frame hero-frame-${i + 1}${active === i ? ' is-active' : ''}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: photo.position }}
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  )
}
