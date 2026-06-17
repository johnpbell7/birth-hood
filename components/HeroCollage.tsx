'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const photos = [
  { src: '/images/leanne-portrait.jpg',     alt: 'Leanne — birth-hood founder',   label: 'Leanne',        rotation: -8 },
  { src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class',            label: 'Hypnobirthing', rotation:  7 },
  { src: '/images/doula-support.jpg',       alt: 'Doula support',                  label: 'Doula Support', rotation: -3 },
  { src: '/images/yoga-class.jpg',          alt: 'Prenatal yoga',                  label: 'Prenatal Yoga', rotation: -6 },
  { src: '/images/leanne-speaking.jpg',     alt: 'Leanne speaking at birth event', label: 'Birth Events',  rotation:  5 },
]

// Pentagon slot positions as fractions of container size, offset from centre.
// Desktop uses wider spread; mobile uses tighter fractions so cards stay within the container.
const SLOT_FRACTIONS_DESKTOP: [number, number][] = [
  [-0.29, -0.29],  // top-left
  [ 0.29, -0.31],  // top-right
  [ 0,     0   ],  // centre — starting active slot
  [-0.29,  0.31],  // bottom-left
  [ 0.29,  0.29],  // bottom-right
]
const SLOT_FRACTIONS_MOBILE: [number, number][] = [
  [-0.22, -0.20],  // top-left
  [ 0.22, -0.22],  // top-right
  [ 0,     0   ],  // centre
  [-0.22,  0.22],  // bottom-left
  [ 0.22,  0.20],  // bottom-right
]

const ACTIVE_SCALE         = 1.55
const ACTIVE_SCALE_MOBILE  = 1.25  // smaller scale so active card doesn't dominate on mobile
const ACTIVE_Z             = 20
const CYCLE_MS             = 4500
const MOBILE_BREAKPOINT    = 880

export default function HeroCollage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRefs    = useRef<(HTMLDivElement | null)[]>([])
  const activeRef    = useRef(2) // index 2 starts centre

  // Tracks where each card actually is right now (x, y in pixels from centre).
  // This is the source of truth — not a fixed slot map — because cards swap
  // positions on each transition rather than returning to their own slot.
  const posRef        = useRef<[number, number][]>([])
  const activeScaleRef = useRef(ACTIVE_SCALE)

  const { contextSafe } = useGSAP(() => {
    const container = containerRef.current
    if (!container) return

    const W = container.offsetWidth
    const H = container.offsetHeight

    const isMobile = W < MOBILE_BREAKPOINT
    const slotFractions = isMobile ? SLOT_FRACTIONS_MOBILE : SLOT_FRACTIONS_DESKTOP
    activeScaleRef.current = isMobile ? ACTIVE_SCALE_MOBILE : ACTIVE_SCALE

    // Convert fractions → pixels
    const slots: [number, number][] = slotFractions.map(([fx, fy]) => [W * fx, H * fy])

    // Seed posRef: active card is at (0,0), others at their initial slot
    posRef.current = slots.map(([sx, sy], i) =>
      i === activeRef.current ? [0, 0] : [sx, sy]
    )

    // Place all frames
    frameRefs.current.forEach((frame, i) => {
      if (!frame) return
      const [x, y] = posRef.current[i]
      const isActive = i === activeRef.current
      gsap.set(frame, {
        xPercent: -50,
        yPercent: -50,
        x, y,
        rotation: isActive ? -1 : photos[i].rotation,
        scale:    isActive ? activeScaleRef.current : 1,
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

    // Snapshot the incoming card's current position BEFORE updating anything
    const [fromX, fromY] = posRef.current[nextIndex]

    // Update position tracking: cards swap positions
    posRef.current[prevIndex] = [fromX, fromY]  // outgoing goes to where incoming was
    posRef.current[nextIndex] = [0, 0]           // incoming goes to centre

    activeRef.current = nextIndex

    gsap.killTweensOf([prevFrame, nextFrame])

    // Incoming on top during the transition
    gsap.set(nextFrame, { zIndex: ACTIVE_Z })
    gsap.set(prevFrame, { zIndex: ACTIVE_Z - 1 })

    const tl = gsap.timeline()

    // Incoming: fly from its current position to centre, grow and straighten
    tl.fromTo(
      nextFrame,
      { x: fromX, y: fromY, scale: 1, rotation: photos[nextIndex].rotation },
      { x: 0, y: 0, scale: activeScaleRef.current, rotation: -1, duration: 1.1, ease: 'expo.out' },
      0
    )

    // Outgoing: swap to where the incoming card was, shrink back down
    tl.to(
      prevFrame,
      { x: fromX, y: fromY, scale: 1, rotation: photos[prevIndex].rotation, duration: 0.9, ease: 'power2.inOut' },
      0.1
    )

    // Restore outgoing card's z-index after it settles
    tl.set(prevFrame, { zIndex: prevIndex + 1 }, '>')
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
