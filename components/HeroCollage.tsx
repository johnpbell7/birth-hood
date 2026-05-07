'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const photos = [
  { src: '/images/leanne-portrait.jpg',     alt: 'Leanne — birth-hood founder',   label: 'Leanne',        rotation: -8 },
  { src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class',            label: 'Hypnobirthing', rotation:  7 },
  { src: '/images/doula-support.png',       alt: 'Doula support',                  label: 'Doula Support', rotation: -3 },
  { src: '/images/yoga-class.jpg',          alt: 'Prenatal yoga',                  label: 'Prenatal Yoga', rotation: -6 },
  { src: '/images/leanne-speaking.jpg',     alt: 'Leanne speaking at birth event', label: 'Birth Events',  rotation:  5 },
]

// Slot positions as fractions of container width/height (from centre).
// [xFraction, yFraction] — e.g. [-0.29, -0.29] means 29% left and 29% up from centre.
const SLOT_FRACTIONS: [number, number][] = [
  [-0.29, -0.29],  // 0 — top-left
  [ 0.29, -0.31],  // 1 — top-right
  [ 0,     0   ],  // 2 — centre (starts active)
  [-0.29,  0.31],  // 3 — bottom-left
  [ 0.29,  0.29],  // 4 — bottom-right
]

const ACTIVE_SCALE = 1.12
const ACTIVE_Z     = 20
const CYCLE_MS     = 4500

export default function HeroCollage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRefs    = useRef<(HTMLDivElement | null)[]>([])
  const activeRef    = useRef(2) // frame-3 starts active
  const slotsRef     = useRef<[number, number][]>([])

  const { contextSafe } = useGSAP(() => {
    const container = containerRef.current
    if (!container) return

    const W = container.offsetWidth
    const H = container.offsetHeight

    // Compute pixel slot positions from fractions
    slotsRef.current = SLOT_FRACTIONS.map(([fx, fy]) => [W * fx, H * fy])

    // Place every frame: anchor all to centre via CSS left:50%/top:50% then
    // offset with x/y. xPercent/yPercent: -50 centres the frame on that point.
    frameRefs.current.forEach((frame, i) => {
      if (!frame) return
      const [sx, sy] = slotsRef.current[i]
      const isActive = i === activeRef.current
      gsap.set(frame, {
        xPercent: -50,
        yPercent: -50,
        x: isActive ? 0 : sx,
        y: isActive ? 0 : sy,
        rotation: isActive ? -1 : photos[i].rotation,
        scale:    isActive ? ACTIVE_SCALE : 1,
        zIndex:   isActive ? ACTIVE_Z : i + 1,
      })
    })
  }, { scope: containerRef })

  const transitionTo = contextSafe((nextIndex: number) => {
    const prevIndex = activeRef.current
    if (nextIndex === prevIndex) return

    const prevFrame = frameRefs.current[prevIndex]
    const nextFrame = frameRefs.current[nextIndex]
    if (!prevFrame || !nextFrame) return

    activeRef.current = nextIndex

    const [sx, sy] = slotsRef.current[nextIndex]
    const [px, py] = slotsRef.current[prevIndex]

    gsap.killTweensOf([prevFrame, nextFrame])
    gsap.set(nextFrame, { zIndex: ACTIVE_Z })
    gsap.set(prevFrame, { zIndex: ACTIVE_Z - 1 })

    const tl = gsap.timeline()

    // Incoming — fly from its slot to centre and grow
    tl.fromTo(nextFrame,
      { x: sx, y: sy, scale: 1, rotation: photos[nextIndex].rotation },
      { x: 0,  y: 0,  scale: ACTIVE_SCALE, rotation: -1,
        duration: 1.1, ease: 'expo.out' },
    0)

    // Outgoing — shrink back to its slot
    tl.to(prevFrame, {
      x: px, y: py,
      scale: 1,
      rotation: photos[prevIndex].rotation,
      zIndex: prevIndex + 1,
      duration: 0.9,
      ease: 'power2.inOut',
    }, 0.1)
  })

  // Auto-cycle
  useGSAP(() => {
    const id = setInterval(() => {
      transitionTo((activeRef.current + 1) % photos.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, { scope: containerRef, dependencies: [transitionTo] })

  return (
    <div className="hero-photo-collage" ref={containerRef}>
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          ref={el => { frameRefs.current[i] = el }}
          className={`hero-frame hero-frame-${i + 1}`}
          onClick={() => transitionTo(i)}
        >
          <div className="hero-frame-img">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority={i === 2}
            />
          </div>
          <span className="hero-frame-label">{photo.label}</span>
        </div>
      ))}
    </div>
  )
}
