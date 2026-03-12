'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)

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
          <Image src="/images/logo.jpg" alt="birth-hood" width={120} height={120} style={{ width: 'auto', height: '64px', objectFit: 'contain' }} priority />
        </Link>

        <ul className="nav-links">
          <li><Link href="/meet-leanne">Meet Leanne</Link></li>
          <li className="nav-dropdown">
            <Link href="/doula">Doula ▾</Link>
            <ul className="nav-drop-menu">
              <li><Link href="/doula">All Doula Services</Link></li>
              <li><Link href="/birth-doula">Birth Doula</Link></li>
              <li><Link href="/virtual-doula">Virtual Doula</Link></li>
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
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/masterclass">Masterclass</Link></li>
              <li><Link href="/freebies">Free Resources</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </li>
          <li>
            <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="nav-cta">Book Now</a>
          </li>
        </ul>

        <button className="nav-ham" onClick={() => setMobOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mob" className={`mob-menu${mobOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobOpen(false)} aria-label="Close menu">✕</button>
        {[
          ['/', 'Home'],
          ['/meet-leanne', 'Meet Leanne'],
          ['/doula', 'Doula Services'],
          ['/birth-doula', 'Birth Doula'],
          ['/virtual-doula', 'Virtual Doula'],
          ['/hypnobirthing', 'Hypnobirthing'],
          ['/course-info', 'Course Dates'],
          ['/birth-trauma', 'Birth Trauma'],
          ['/yoga', 'Prenatal Yoga'],
          ['/masterclass', 'Masterclass'],
          ['/blog', 'Blog'],
          ['/reviews', 'Reviews'],
          ['/freebies', 'Free Resources'],
          ['/faq', 'FAQ'],
          ['/contact', 'Contact'],
        ].map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setMobOpen(false)}>{label}</Link>
        ))}
      </div>
    </>
  )
}
