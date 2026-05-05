'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/images/leanne-portrait.jpg',     alt: 'Leanne — birth-hood founder',   position: 'center top', label: 'Leanne' },
  { src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class',            position: 'center',     label: 'Hypnobirthing' },
  { src: '/images/doula-support.png',       alt: 'Doula support',                  position: 'center top', label: 'Doula Support' },
  { src: '/images/yoga-class.jpg',          alt: 'Prenatal yoga',                  position: 'center',     label: 'Prenatal Yoga' },
  { src: '/images/leanne-speaking.jpg',     alt: 'Leanne speaking at birth event', position: 'center top', label: 'Birth Events' },
]

export default function HeroCollage() {
  const [active, setActive] = useState(2) // start on the center frame

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(a => (a + 1) % photos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-photo-collage">
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className={`hero-frame hero-frame-${i + 1}${active === i ? ' is-active' : ''}`}
          onClick={() => setActive(i)}
        >
          <div className="hero-frame-img">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: 'cover', objectPosition: photo.position }}
              priority={i === 2}
            />
          </div>
          <span className="hero-frame-label">{photo.label}</span>
        </div>
      ))}
    </div>
  )
}
