'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)
  const [mobDoula, setMobDoula] = useState(false)
  const [mobHypno, setMobHypno] = useState(false)
  const [mobMore, setMobMore] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
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
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
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
          <li>
            <Link href="/hub" className="nav-hub">Hub</Link>
          </li>
          <li>
            <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="nav-cta">Book Now</a>
          </li>
        </ul>

        <div className="nav-mobile-right">
          <Link href="/hub" className="nav-hub nav-hub-mobile" aria-label="Client Hub">Hub</Link>
          <button className="nav-ham" onClick={() => setMobOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mob" className={`mob-menu${mobOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobOpen(false)} aria-label="Close menu">✕</button>

        <Link href="/" onClick={() => setMobOpen(false)}>Home</Link>
        <Link href="/meet-leanne" onClick={() => setMobOpen(false)}>Meet Leanne</Link>

        {/* Doula dropdown */}
        <button className="mob-section-toggle" onClick={() => setMobDoula(!mobDoula)}>
          Doula {mobDoula ? '▴' : '▾'}
        </button>
        {mobDoula && (
          <div className="mob-sub-links">
            <Link href="/doula" onClick={() => setMobOpen(false)}>All Doula Services</Link>
            <Link href="/birth-doula" onClick={() => setMobOpen(false)}>Birth Doula</Link>
            <Link href="/postnatal-doula" onClick={() => setMobOpen(false)}>Postnatal Doula</Link>
            <Link href="/virtual-doula" onClick={() => setMobOpen(false)}>Virtual Doula</Link>
            <Link href="/doula-feedback" onClick={() => setMobOpen(false)}>Doula Feedback</Link>
          </div>
        )}

        {/* Hypnobirthing dropdown */}
        <button className="mob-section-toggle" onClick={() => setMobHypno(!mobHypno)}>
          Hypnobirthing {mobHypno ? '▴' : '▾'}
        </button>
        {mobHypno && (
          <div className="mob-sub-links">
            <Link href="/hypnobirthing" onClick={() => setMobOpen(false)}>About Hypnobirthing</Link>
            <Link href="/course-info" onClick={() => setMobOpen(false)}>Course Info &amp; Dates</Link>
            <Link href="/session-outlines" onClick={() => setMobOpen(false)}>Session Outlines</Link>
          </div>
        )}

        <Link href="/birth-trauma" onClick={() => setMobOpen(false)}>Birth Trauma</Link>
        <Link href="/yoga" onClick={() => setMobOpen(false)}>Yoga</Link>
        <Link href="/podcast" onClick={() => setMobOpen(false)}>Dou-La-La Podcast</Link>

        {/* More dropdown */}
        <button className="mob-section-toggle" onClick={() => setMobMore(!mobMore)}>
          More {mobMore ? '▴' : '▾'}
        </button>
        {mobMore && (
          <div className="mob-sub-links">
            <Link href="/blog" onClick={() => setMobOpen(false)}>Blog</Link>
            <Link href="/booking" onClick={() => setMobOpen(false)}>Booking</Link>
            <Link href="/reviews" onClick={() => setMobOpen(false)}>Reviews</Link>
            <Link href="/freebies" onClick={() => setMobOpen(false)}>Free Resources</Link>
            <Link href="/faq" onClick={() => setMobOpen(false)}>FAQ</Link>
            <Link href="/contact" onClick={() => setMobOpen(false)}>Contact</Link>
          </div>
        )}

        <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="mob-cta" onClick={() => setMobOpen(false)}>Book Now</a>
      </div>
    </>
  )
}
