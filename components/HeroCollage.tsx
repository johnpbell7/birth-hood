'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { DEFAULT_PHOTOS } from '@/lib/hero-photos'
import { Sparkles } from '@/components/Decor'

gsap.registerPlugin(useGSAP)

// DESKTOP: 5-card pentagon, active grows in the centre.
const SLOT_FRACTIONS_DESKTOP: [number, number][] = [
  [-0.56, -0.36],  // top-left
  [ 0.56, -0.38],  // top-right
  [ 0,     0   ],  // centre — starting active slot
  [-0.56,  0.38],  // bottom-left
  [ 0.56,  0.36],  // bottom-right
]
// MOBILE: only cards 0,1,2 shown. 0 = left-top, 1 = left-bottom, 2 = right (active home).
// Cluster sits HIGH in the block so the big card clears the floating book button.
const SLOT_FRACTIONS_MOBILE: [number, number][] = [
  [-0.28, -0.24],  // left-top (medium) — kept clear of the top crop
  [-0.24,  0.08],  // left-bottom (medium)
  [ 0.17, -0.04],  // right (large/active home)
  [ 0,     0   ],  // unused (hidden)
  [ 0,     0   ],  // unused (hidden)
]
// Where the active (large) card sits: centre on desktop, shifted right + up on mobile.
const ACTIVE_POS_DESKTOP: [number, number] = [0, 0]
const ACTIVE_POS_MOBILE:  [number, number] = [0.17, -0.04]

const ACTIVE_SCALE          = 1.45  // front card prominent (desktop)
const ACTIVE_SCALE_MOBILE   = 1.35  // big standout card on the right (mobile)
const INACTIVE_SCALE_MOBILE = 0.78  // left cards fairly large too — spread, fanned look
const ACTIVE_Z              = 20
const CYCLE_MS              = 4500
const MOBILE_BREAKPOINT     = 960  // must match the collage CSS @media breakpoint
const MOBILE_CARD_COUNT     = 3      // cycle through 3 images on mobile

type CollagePhoto = { src: string; alt: string; label: string }

export default function HeroCollage({ photos: cmsPhotos }: { photos?: CollagePhoto[] }) {
  const photos = cmsPhotos && cmsPhotos.length === DEFAULT_PHOTOS.length
    ? cmsPhotos.map((p, i) => ({ ...p, rotation: DEFAULT_PHOTOS[i].rotation }))
    : DEFAULT_PHOTOS
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRefs    = useRef<(HTMLDivElement | null)[]>([])
  const activeRef    = useRef(2) // index 2 starts active

  const posRef           = useRef<[number, number][]>([])
  const activeScaleRef   = useRef(ACTIVE_SCALE)
  const inactiveScaleRef = useRef(1)
  const activePosRef     = useRef<[number, number]>([0, 0])
  const countRef         = useRef(DEFAULT_PHOTOS.length)

  const { contextSafe } = useGSAP(() => {
    const container = containerRef.current
    if (!container) return

    const W = container.offsetWidth
    const H = container.offsetHeight
    // Decide mode by the SCREEN width, not the (fixed) container width.
    const vw = typeof window !== 'undefined' ? window.innerWidth : W
    const isMobile = vw < MOBILE_BREAKPOINT

    const slotFractions = isMobile ? SLOT_FRACTIONS_MOBILE : SLOT_FRACTIONS_DESKTOP
    activeScaleRef.current   = isMobile ? ACTIVE_SCALE_MOBILE : ACTIVE_SCALE
    inactiveScaleRef.current = isMobile ? INACTIVE_SCALE_MOBILE : 1
    countRef.current         = isMobile ? MOBILE_CARD_COUNT : photos.length
    const apf = isMobile ? ACTIVE_POS_MOBILE : ACTIVE_POS_DESKTOP
    activePosRef.current = [W * apf[0], H * apf[1]]

    // keep the active index within the cycling set
    if (activeRef.current >= countRef.current) activeRef.current = countRef.current - 1

    const slots: [number, number][] = slotFractions.map(([fx, fy]) => [W * fx, H * fy])

    // Seed posRef: active card sits at the active position, others at their slot
    posRef.current = slots.map(([sx, sy], i) =>
      i === activeRef.current ? [activePosRef.current[0], activePosRef.current[1]] : [sx, sy]
    )

    frameRefs.current.forEach((frame, i) => {
      if (!frame) return
      const [x, y] = posRef.current[i]
      const isActive = i === activeRef.current
      gsap.set(frame, {
        xPercent: -50,
        yPercent: -50,
        x, y,
        rotation: isActive ? -1 : photos[i].rotation,
        scale:    isActive ? activeScaleRef.current : inactiveScaleRef.current,
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

    const [fromX, fromY] = posRef.current[nextIndex]
    const [ax, ay] = activePosRef.current
    const inScale = inactiveScaleRef.current

    // cards swap positions: outgoing takes the incoming's old slot
    posRef.current[prevIndex] = [fromX, fromY]
    posRef.current[nextIndex] = [ax, ay]
    activeRef.current = nextIndex

    gsap.killTweensOf([prevFrame, nextFrame])
    gsap.set(nextFrame, { zIndex: ACTIVE_Z })
    gsap.set(prevFrame, { zIndex: ACTIVE_Z - 1 })

    const tl = gsap.timeline()
    tl.fromTo(
      nextFrame,
      { x: fromX, y: fromY, scale: inScale, rotation: photos[nextIndex].rotation },
      { x: ax, y: ay, scale: activeScaleRef.current, rotation: -1, duration: 1.1, ease: 'expo.out' },
      0
    )
    tl.to(
      prevFrame,
      { x: fromX, y: fromY, scale: inScale, rotation: photos[prevIndex].rotation, duration: 0.9, ease: 'power2.inOut' },
      0.1
    )
    tl.set(prevFrame, { zIndex: prevIndex + 1 }, '>')
  })

  // Auto-cycle (3 on mobile, 5 on desktop)
  useGSAP(() => {
    const id = setInterval(() => {
      transitionTo((activeRef.current + 1) % countRef.current)
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
      {/* twinkling stars over the top of the polaroids */}
      <Sparkles
        className="collage-sparkles"
        items={[
          { top: '6%',  left: '10%', size: 26, delay: 0,   dur: 3.2 },
          { top: '20%', right: '8%', size: 18, delay: 0.9, dur: 2.6 },
          { top: '52%', left: '2%',  size: 22, delay: 1.6, dur: 3.6 },
          { bottom: '12%', right: '14%', size: 28, delay: 0.4, dur: 3 },
          { bottom: '26%', left: '20%', size: 14, delay: 2.1, dur: 2.4, white: true },
          { top: '38%', right: '24%', size: 12, delay: 1.2, dur: 2.8, white: true },
        ]}
      />
    </div>
  )
}
