'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const photos = [
  { src: '/images/leanne-portrait.jpg',     alt: 'Leanne — birth-hood founder',   position: 'center top', label: 'Leanne',        rotation: -7, zIndex: 2 },
  { src: '/images/hypnobirthing-class.png', alt: 'Hypnobirthing class',            position: 'center',     label: 'Hypnobirthing', rotation: 8,  zIndex: 1 },
  { src: '/images/doula-support.png',       alt: 'Doula support',                  position: 'center top', label: 'Doula Support', rotation: -2, zIndex: 4 },
  { src: '/images/yoga-class.jpg',          alt: 'Prenatal yoga',                  position: 'center',     label: 'Prenatal Yoga', rotation: -5, zIndex: 2 },
  { src: '/images/leanne-speaking.jpg',     alt: 'Leanne speaking at birth event', position: 'center top', label: 'Birth Events',  rotation: 6,  zIndex: 3 },
]

const CYCLE_MS = 4500
const ACTIVE_Z = 20
const CENTER_WIDTH = 280 // visual width of the dominant center frame

export default function HeroCollage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRefs = useRef<(HTMLDivElement | null)[]>([])
  const activeRef = useRef(2)
  // home center positions relative to container (captured before any GSAP transforms)
  const homesRef = useRef<{ cx: number; cy: number; w: number }[]>([])

  const { contextSafe } = useGSAP(() => {
    const container = containerRef.current
    if (!container) return
    const cRect = container.getBoundingClientRect()

    // 1. Capture CSS home positions before any transforms
    frameRefs.current.forEach((frame, i) => {
      if (!frame) return
      const r = frame.getBoundingClientRect()
      homesRef.current[i] = {
        cx: r.left - cRect.left + r.width / 2,
        cy: r.top - cRect.top + r.height / 2,
        w: r.width,
      }
    })

    // 2. Apply initial GSAP state (overrides CSS transforms)
    frameRefs.current.forEach((frame, i) => {
      if (!frame) return
      const isCenter = i === 2
      gsap.set(frame, {
        xPercent: isCenter ? -50 : 0,
        yPercent: isCenter ? -50 : 0,
        rotation: photos[i].rotation,
        zIndex: photos[i].zIndex,
        scale: isCenter ? 1.05 : 1,
      })
    })

    // Frame 3 starts as active
    gsap.set(frameRefs.current[2], {
      rotation: -1,
      zIndex: ACTIVE_Z,
    })
  }, { scope: containerRef })

  const transitionTo = contextSafe((nextIndex: number) => {
    const prevIndex = activeRef.current
    if (nextIndex === prevIndex) return

    const container = containerRef.current
    const prevFrame = frameRefs.current[prevIndex]
    const nextFrame = frameRefs.current[nextIndex]
    if (!container || !prevFrame || !nextFrame) return

    activeRef.current = nextIndex

    const cx = container.offsetWidth / 2
    const cy = container.offsetHeight / 2
    const nextHome = homesRef.current[nextIndex]
    const prev = photos[prevIndex]

    // Target x/y offsets to bring nextFrame's center to container center
    const toX = cx - nextHome.cx
    const toY = cy - nextHome.cy
    const toScale = (CENTER_WIDTH / nextHome.w) * 1.0

    gsap.killTweensOf([prevFrame, nextFrame])

    // Immediately set z-indices so incoming is on top from the first frame
    gsap.set(nextFrame, { zIndex: ACTIVE_Z })
    gsap.set(prevFrame, { zIndex: ACTIVE_Z - 1 })

    const tl = gsap.timeline()

    // Incoming: fly from corner to center and grow
    tl.to(nextFrame, {
      x: toX,
      y: toY,
      xPercent: 0,
      yPercent: 0,
      scale: toScale,
      rotation: -1,
      duration: 1.1,
      ease: 'expo.out',
    }, 0)

    // Outgoing: shrink back to CSS home position (slightly delayed so incoming leads)
    tl.to(prevFrame, {
      x: 0,
      y: 0,
      xPercent: prevIndex === 2 ? -50 : 0,
      yPercent: prevIndex === 2 ? -50 : 0,
      scale: 1,
      rotation: prev.rotation,
      zIndex: prev.zIndex,
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
