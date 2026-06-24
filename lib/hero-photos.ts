// Default hero collage photos — plain module (no 'use client') so it can be
// imported by both the server component (app/page.tsx) and the client
// component (components/HeroCollage.tsx) and stay a real array in both.
export const DEFAULT_PHOTOS = [
  { src: '/images/leanne-portrait.jpg',     alt: 'Leanne — birth-hood founder',   label: 'Leanne',        rotation: -8 },
  { src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class',            label: 'Hypnobirthing', rotation:  7 },
  { src: '/images/doula-support.jpg',       alt: 'Doula support',                  label: 'Doula Support', rotation: -3 },
  { src: '/images/yoga-class.jpg',          alt: 'Prenatal yoga',                  label: 'Prenatal Yoga', rotation: -6 },
  { src: '/images/leanne-speaking.jpg',     alt: 'Leanne speaking at birth event', label: 'Birth Events',  rotation:  5 },
]
