import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Links',
  description:
    'All the links you need from birth-hood in one place — book hypnobirthing, doula support and yoga, reach the client hub, and follow Leanne online.',
}

const CALENDLY = 'https://calendly.com/birthhood/free-consultation'
const GOOGLE_REVIEW = 'https://g.page/r/birthhood/review'

const social = {
  instagram: 'https://www.instagram.com/birthhooduk',
  facebook: 'http://www.facebook.com/Birthhooduk',
  youtube: 'https://youtube.com/@birthhooduk',
}

/** Secondary links — rendered two-up so the whole page fits a phone screen. */
const links: { label: string; href: string; external?: boolean }[] = [
  { label: 'Course Booking', href: '/booking' },
  { label: 'Hypnobirthing', href: '/hypnobirthing' },
  { label: 'Doula Support', href: '/doula' },
  { label: 'Pregnancy Yoga', href: '/yoga' },
  { label: 'Birth Trauma', href: '/birth-trauma' },
  { label: 'Freebies', href: '/freebies' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Blog', href: '/blog' },
  { label: 'Reviews & Birth Stories', href: '/reviews' },
  { label: 'Shop', href: '/shop' },
  { label: 'Meet Leanne', href: '/meet-leanne' },
  { label: 'Contact', href: '/contact' },
]

function LinkTile({ label, href, external }: { label: string; href: string; external?: boolean }) {
  const cls = 'links-tile'
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  )
}

function LinksPageStatic() {
  return (
    <main className="links-page">
      <div className="links-inner">
        <header className="links-header">
          <Image
            src="/images/logo.jpg"
            alt="birth-hood"
            width={150}
            height={150}
            className="links-avatar"
            priority
          />
          <h1 className="links-title">birth-hood</h1>
          <p className="links-tagline">
            Education · Support · Community
            <br />
            Hypnobirthing, doula support &amp; pregnancy yoga — Leicestershire &amp; online.
          </p>

          <div className="links-social">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5A2.5 2.5 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12ZM10 15V9l5 3-5 3Z" />
              </svg>
            </a>
          </div>
        </header>

        {/* Primary actions */}
        <a href={CALENDLY} className="links-primary" target="_blank" rel="noopener noreferrer">
          Book a Free Consultation
        </a>

        <Link href="/hub" className="links-secondary">
          Client Hub
          <span>Your resources, videos &amp; downloads</span>
        </Link>

        {/* Everything else, two-up. Deliberately a div, not a <nav>: the site
            stylesheet gives every bare <nav> the fixed site-header treatment. */}
        <div className="links-grid">
          {links.map((l) => (
            <LinkTile key={l.label} {...l} />
          ))}
        </div>

        <a href={GOOGLE_REVIEW} className="links-review" target="_blank" rel="noopener noreferrer">
          ★★★★★ Leave a Google Review
        </a>

        <p className="links-foot">
          birth-hood · Leanne Myles · NW Leicestershire
          <br />
          Doula · Hypnobirthing Teacher · Pregnancy Yoga
        </p>
      </div>
    </main>
  )
}

export default async function LinksPage() {
  return cmsOrStatic('links', <LinksPageStatic />)
}
