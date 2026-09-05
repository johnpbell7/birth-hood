// Site navigation model + built-in default menu.
// Plain module (no 'use client') so both server components (layout) and the
// client Nav component can import it.

export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href?: string; children?: NavChild[] }

// The default main menu — used whenever the CMS Navigation document is empty
// or unreachable, so the nav can never break.
export const DEFAULT_NAV: NavItem[] = [
  { label: 'Meet Leanne', href: '/meet-leanne' },
  {
    label: 'Doula',
    href: '/doula',
    children: [
      { label: 'All Doula Services', href: '/doula' },
      { label: 'Birth Doula', href: '/birth-doula' },
      { label: 'Antenatal & Virtual Doula', href: '/virtual-doula' },
      { label: 'Postnatal Doula', href: '/postnatal-doula' },
      { label: 'Overnight Doula', href: '/overnight-doula' },
    ],
  },
  {
    label: 'Hypnobirthing',
    href: '/hypnobirthing',
    children: [
      { label: 'About Hypnobirthing', href: '/hypnobirthing' },
      { label: 'Courses', href: '/course-info' },
      { label: 'Session Outlines', href: '/session-outlines' },
    ],
  },
  { label: 'Birth Trauma', href: '/birth-trauma' },
  { label: 'Yoga', href: '/yoga' },
  {
    label: 'More',
    href: '/blog',
    children: [
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
      { label: 'Dou-La-La Podcast', href: '/podcast' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Free Resources', href: '/freebies' },
      { label: 'Shop', href: '/shop' },
      { label: 'Booking', href: '/booking' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
]
