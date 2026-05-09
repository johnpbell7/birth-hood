'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const lastScrollY = useRef(0)
  const isStudio = pathname?.startsWith('/studio')

  useEffect(() => {
    if (isStudio) return
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      // Hide when scrolling down past 120px, reveal when scrolling up
      if (y > 120) {
        setHidden(y > lastScrollY.current)
      } else {
        setHidden(false)
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isStudio])

  // Hide entire nav on studio route
  if (isStudio) return null

  const close = () => { setMobOpen(false); setOpenSection(null) }
  const toggle = (s: string) => setOpenSection(o => o === s ? null : s)

  return (
    <>
      {/* Top bar */}
      <div className={`top-bar${hidden ? ' nav-hidden' : ''}`}>
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <div className="top-bar-insured">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Fully insured professional
            </div>
          </div>
          <div className="top-bar-right">
            <a href="https://youtube.com/@birthhooduk" target="_blank" rel="noopener noreferrer" className="top-bar-yt">
              <svg width="14" height="10" viewBox="0 0 24 17" fill="currentColor">
                <path d="M23.5 2.5S23.2.7 22.4.1C21.5-.7 20.5-.7 20 -.6 16.7-.5 12 -.5 12 -.5S7.3-.5 4-.6C3.5-.7 2.5-.7 1.6.1.8.7.5 2.5.5 2.5S.1 4.7.1 7v2.1c0 2.3.4 4.5.4 4.5s.3 1.8 1.1 2.4c.9.8 2.1.7 2.6.8C5.9 17 12 17 12 17s4.7 0 8-.1c.5-.1 1.5-.1 2.4-.9.8-.6 1.1-2.4 1.1-2.4S24 11.4 24 9V6.9C24 4.7 23.5 2.5 23.5 2.5zM9.7 11.3V5.2l6.5 3.1-6.5 3z"/>
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav id="nav" className={[scrolled && 'scrolled', hidden && 'nav-hidden'].filter(Boolean).join(' ')}>
        <Link href="/" className="nav-logo">
          <Image src="/images/logo.jpg" alt="birth-hood" width={200} height={200} className="nav-logo-image" priority />
        </Link>

        <ul className="nav-links">
          <li><Link href="/meet-leanne">Meet Leanne</Link></li>
          <li className="nav-dropdown">
            <Link href="/doula">Doula ▾</Link>
            <ul className="nav-drop-menu">
              <li><Link href="/doula">All Doula Services</Link></li>
              <li><Link href="/birth-doula">Birth Doula</Link></li>
              <li><Link href="/virtual-doula">Virtual Doula</Link></li>
              <li><Link href="/postnatal-doula">Postnatal Doula</Link></li>
              <li><Link href="/doula-feedback">Doula Feedback</Link></li>
            </ul>
          </li>
          <li className="nav-dropdown">
            <Link href="/hypnobirthing">Hypnobirthing ▾</Link>
            <ul className="nav-drop-menu">
              <li><Link href="/hypnobirthing">About Hypnobirthing</Link></li>
              <li><Link href="/course-info">Course Dates</Link></li>
              <li><Link href="/session-outlines">Session Outlines</Link></li>
            </ul>
          </li>
          <li><Link href="/birth-trauma">Birth Trauma</Link></li>
          <li><Link href="/yoga">Yoga</Link></li>
          <li className="nav-dropdown">
            <Link href="/blog">More ▾</Link>
            <ul className="nav-drop-menu">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/podcast">Dou-La-La Podcast</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/masterclass">Masterclass</Link></li>
              <li><Link href="/freebies">Free Resources</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </li>
          <li><Link href="/hub" className="nav-hub">Hub</Link></li>
          <li><a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="nav-cta">Book Now</a></li>
        </ul>

        <div className="nav-mobile-right">
          <Link href="/hub" className="nav-hub nav-hub-mobile" aria-label="Client Hub">Hub</Link>
          <button className="nav-ham" onClick={() => setMobOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mob" className={`mob-menu${mobOpen ? ' open' : ''}`} aria-hidden={!mobOpen} inert={!mobOpen || undefined}>
        <div className="mob-header">
          <Link href="/" onClick={close}>
            <Image src="/images/logo.jpg" alt="birth-hood" width={56} height={56} className="mob-logo" />
          </Link>
          <button className="mob-close" onClick={close} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="mob-nav">
          <Link href="/" onClick={close} className="mob-link">Home</Link>

          {/* Doula section */}
          <button className="mob-accordion" onClick={() => toggle('doula')} aria-expanded={openSection === 'doula'}>
            Doula
            <svg className={`mob-chevron${openSection === 'doula' ? ' open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {openSection === 'doula' && (
            <div className="mob-dropdown">
              <Link href="/doula" onClick={close} className="mob-link mob-link--sub">All Doula Services</Link>
              <Link href="/birth-doula" onClick={close} className="mob-link mob-link--sub">Birth Doula</Link>
              <Link href="/postnatal-doula" onClick={close} className="mob-link mob-link--sub">Postnatal Doula</Link>
              <Link href="/virtual-doula" onClick={close} className="mob-link mob-link--sub">Virtual Doula</Link>
            </div>
          )}

          {/* Hypnobirthing section */}
          <button className="mob-accordion" onClick={() => toggle('hypno')} aria-expanded={openSection === 'hypno'}>
            Hypnobirthing
            <svg className={`mob-chevron${openSection === 'hypno' ? ' open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {openSection === 'hypno' && (
            <div className="mob-dropdown">
              <Link href="/hypnobirthing" onClick={close} className="mob-link mob-link--sub">About Hypnobirthing</Link>
              <Link href="/course-info" onClick={close} className="mob-link mob-link--sub">Course Dates</Link>
              <Link href="/session-outlines" onClick={close} className="mob-link mob-link--sub">Session Outlines</Link>
            </div>
          )}

          <Link href="/meet-leanne" onClick={close} className="mob-link">Meet Leanne</Link>
          <Link href="/birth-trauma" onClick={close} className="mob-link">Birth Trauma</Link>
          <Link href="/yoga" onClick={close} className="mob-link">Prenatal Yoga</Link>

          {/* More section */}
          <button className="mob-accordion" onClick={() => toggle('more')} aria-expanded={openSection === 'more'}>
            More
            <svg className={`mob-chevron${openSection === 'more' ? ' open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {openSection === 'more' && (
            <div className="mob-dropdown">
              <Link href="/blog" onClick={close} className="mob-link mob-link--sub">Blog</Link>
              <Link href="/podcast" onClick={close} className="mob-link mob-link--sub">Dou-La-La Podcast</Link>
              <Link href="/masterclass" onClick={close} className="mob-link mob-link--sub">Masterclass</Link>
              <Link href="/freebies" onClick={close} className="mob-link mob-link--sub">Free Resources</Link>
              <Link href="/reviews" onClick={close} className="mob-link mob-link--sub">Reviews</Link>
              <Link href="/booking" onClick={close} className="mob-link mob-link--sub">Booking</Link>
              <Link href="/faq" onClick={close} className="mob-link mob-link--sub">FAQ</Link>
              <Link href="/contact" onClick={close} className="mob-link mob-link--sub">Contact</Link>
            </div>
          )}
        </div>

        <div className="mob-footer">
          <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="mob-cta" onClick={close}>
            Book Free Consultation
          </a>
        </div>
      </div>
    </>
  )
}
