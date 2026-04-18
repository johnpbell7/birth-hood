'use client'

import { useState, useEffect, FormEvent } from 'react'

const HUB_PASSWORD = 'BHCLIENT26'
const STORAGE_KEY = 'birthhood_hub_unlocked'

type Resource = {
  title: string
  href: string
  type?: 'PDF' | 'DOCX'
}

type ResourceGroup = {
  label: string
  intro: string
  items: Resource[]
}

const groups: ResourceGroup[] = [
  {
    label: 'Hypnobirthing essentials',
    intro: "Your core hypnobirthing toolkit — handbook, affirmations and relaxation tools to practise alongside your course.",
    items: [
      { title: 'Your Handbook', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_7ed2246dedf64e32ab7022d32005f447.pdf' },
      { title: 'Printable Affirmations', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_9a5cb2ec10254cd195ce458dc1a6533c.pdf' },
      { title: 'Extra TBU Colour Affirmations', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_0e0711b62f4c4fe2a0fb3d21d0376552.pdf' },
      { title: 'Short Relaxation Prompts', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_859ae4759d2e421a8ae1445a141bc49c.pdf' },
      { title: 'Partner Script', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_cb0e33d5f48b4673a46b726756c37ce7.docx?dn=Partner%20Relaxation%20LMY.docx', type: 'DOCX' },
    ],
  },
  {
    label: 'Planning for birth',
    intro: "Everything you need to prepare for the big day — from your birth plan to what to pack and how to use the tools around you.",
    items: [
      { title: 'Birth planning guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_e084e07d8d974c50bdce996078aa210a.pdf' },
      { title: 'Antenatal session outline', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_706acce28865411393672053a4ddec3d.pdf' },
      { title: 'Weekly Agenda', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_6638d03714964d71b8b98decccb8ee36.pdf' },
      { title: 'Daily activities guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_145c23b49c034841a455e6b3b84a0d84.pdf' },
      { title: 'Partner Movement Guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_f5b3004ee84f4b668e7ddd37599a0e9c.pdf' },
      { title: 'Peanut ball guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_f211e020d29748678f1dbf2e06f0b0a4.pdf' },
      { title: 'Pool inflation guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_d204529f550044de9cb0b09402a10078.pdf' },
      { title: 'Birthbag checklist', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_2005e030bc85499aadf43a5cac8ba06f.pdf' },
      { title: 'Homebirth checklist', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_47b64f72fb6140bb8e9aca9b8ea53f3e.pdf' },
      { title: 'Door Signs', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_271144a698cd41958926cf1f316b77d2.pdf' },
    ],
  },
  {
    label: 'Specific situations',
    intro: "In-depth guides for specific birth pathways — including caesarean, induction, premature birth and biomechanics.",
    items: [
      { title: 'Caesarean Handbook', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_8acc2b34ec3d44568dee402f33964885.pdf' },
      { title: 'Induction guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_1a8ef500adc44f0b8312846b80e36eb6.pdf' },
      { title: 'Premature birth guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_623176986d0042da9080eb0f2a827be4.pdf' },
      { title: 'Birth Biomechanics eBook', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_36acda55a7f24801b52bcf4101c8f17d.pdf' },
    ],
  },
  {
    label: 'Postnatal & the fourth trimester',
    intro: "Support for the weeks after birth — postpartum planning, feeding, and yoga with your baby.",
    items: [
      { title: 'Postpartum planning guide', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_253dddcd94c943458d22a34b47771d74.pdf' },
      { title: 'Breastfeeding 101', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_d87e09096f5c423e88b9a03b7e23b7fe.pdf' },
      { title: 'Parent and Baby Yoga Handbook', href: 'https://www.birth-hood.co.uk/_files/ugd/530235_6933deda18564770a65014550110e057.pdf' },
    ],
  },
]

function getFileType(href: string): 'PDF' | 'DOCX' {
  return href.toLowerCase().includes('.docx') ? 'DOCX' : 'PDF'
}

export default function HubClient() {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true)
    }
    setChecked(true)
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (password === HUB_PASSWORD) {
      setUnlocked(true)
      setError(false)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(STORAGE_KEY, '1')
      }
    } else {
      setError(true)
    }
  }

  function handleLogout() {
    setUnlocked(false)
    setPassword('')
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(STORAGE_KEY)
    }
  }

  if (!checked) {
    return <div style={{ minHeight: '60vh' }} />
  }

  if (!unlocked) {
    return (
      <section className="page-hero" style={{ minHeight: '72vh', display: 'flex', alignItems: 'center' }}>
        <div className="page-hero-inner" style={{ display: 'block' }}>
          <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            <div className="page-eyebrow" style={{ justifyContent: 'center' }}>Private · Clients only</div>
            <h1 className="page-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Client <em>Hub</em>
            </h1>
            <p className="page-subtitle" style={{ marginBottom: '2rem' }}>
              Welcome. Please enter your password below to access your resources.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false) }}
                placeholder="Enter password"
                aria-label="Hub password"
                autoFocus
                style={{
                  padding: '1rem 1.2rem',
                  fontSize: '1rem',
                  fontFamily: 'DM Sans, sans-serif',
                  border: `2px solid ${error ? '#d43a3a' : 'rgba(0,0,0,0.12)'}`,
                  borderRadius: '3px',
                  background: 'var(--white)',
                  color: 'var(--black)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
              />
              {error && (
                <div style={{ fontSize: '0.85rem', color: '#b02a2a', fontWeight: 500 }}>
                  Incorrect password. Please try again.
                </div>
              )}
              <button type="submit" className="btn-dark" style={{ padding: '1rem', fontSize: '0.85rem' }}>
                Unlock Hub
              </button>
            </form>
            <p style={{ marginTop: '2rem', fontSize: '0.82rem', color: 'var(--grey-mid)', fontWeight: 300 }}>
              Not a client yet?{' '}
              <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)', textDecoration: 'underline' }}>
                Book a free consultation
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    )
  }

  const totalResources = groups.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
          <div>
            <div className="page-eyebrow" style={{ justifyContent: 'center' }}>Your resources</div>
            <h1 className="page-title" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}>
              Welcome to your <em>Client Hub</em>
            </h1>
            <p className="page-subtitle" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
              Everything you need, all in one place. Click any resource below to open or download it.
            </p>
            <button
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(0,0,0,0.2)',
                color: 'var(--black)',
                padding: '0.6rem 1.4rem',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: '3px',
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Lock Hub
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: 'var(--black)', padding: '2rem 3rem', color: 'var(--white)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', textAlign: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Abril Fatface, serif', fontSize: '2.2rem', color: 'var(--pink)', lineHeight: 1 }}>{totalResources}</div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem' }}>Resources</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Abril Fatface, serif', fontSize: '2.2rem', color: 'var(--pink)', lineHeight: 1 }}>{groups.length}</div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem' }}>Categories</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Abril Fatface, serif', fontSize: '2.2rem', color: 'var(--pink)', lineHeight: 1 }}>∞</div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem' }}>Access anytime</div>
          </div>
        </div>
      </section>

      {/* RESOURCE GROUPS */}
      <section className="section-pad">
        <div className="wrap">
          {groups.map((group, gi) => (
            <div key={group.label} style={{ marginBottom: gi === groups.length - 1 ? 0 : '4rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="section-label">Category {String(gi + 1).padStart(2, '0')}</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, marginTop: '0.6rem', marginBottom: '0.6rem', lineHeight: 1.1 }}>
                  {group.label}
                </h2>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '680px' }}>
                  {group.intro}
                </p>
              </div>

              <div className="grid-3" style={{ gap: '1rem' }}>
                {group.items.map((item) => {
                  const type = item.type || getFileType(item.href)
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.2rem',
                        border: '1px solid rgba(0,0,0,0.08)',
                        borderRadius: '3px',
                        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          background: 'var(--pink-ultra)',
                          border: '1px solid rgba(232,123,195,0.3)',
                          borderRadius: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--pink-deep)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: 'var(--black)', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-light)' }}>
                          {type} · Download
                        </div>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--pink-deep)', flexShrink: 0 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HELP NOTICE */}
      <section className="section-pad-sm" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.8rem' }}>Need help?</div>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem' }}>
            Can&apos;t access a resource?
          </h3>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.92rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            If any of these files won&apos;t open or you need something that isn&apos;t here, drop Leanne a message and she&apos;ll sort it straight away.
          </p>
          <a
            href="mailto:leanne@birth-hood.co.uk"
            className="btn-outline"
          >
            Email Leanne
          </a>
        </div>
      </section>
    </>
  )
}
