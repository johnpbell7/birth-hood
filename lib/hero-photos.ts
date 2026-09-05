// Default hero collage photos — plain module (no 'use client') so it can be
// imported by both the server component (app/page.tsx) and the client
// component (components/HeroCollage.tsx) and stay a real array in both.
// On mobile only the first three cards are shown, so the strongest images lead.
export const DEFAULT_PHOTOS = [
  { src: '/images/leanne-van-14.jpg',           alt: 'Leanne laughing out of the birth-hood van window', label: 'Leanne',         rotation: -8 },
  { src: '/images/class-teaching-291.jpg',      alt: 'Leanne teaching a group hypnobirthing class',      label: 'Hypnobirthing',  rotation:  7 },
  { src: '/images/parent-baby-150.jpg',         alt: 'Leanne holding a baby at a parent and baby class', label: 'Parent & Baby',  rotation: -3 },
  { src: '/images/yoga-class-189.jpg',          alt: 'Pregnancy yoga class stretching together',         label: 'Pregnancy Yoga', rotation: -6 },
  { src: '/images/birth-pool-overhead-308.jpg', alt: 'Doula support during labour in a birth pool',      label: 'Doula Support',  rotation:  5 },
]
