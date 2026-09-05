'use client'

import { useState, useEffect, FormEvent } from 'react'
import type { HubResource } from '@/lib/sanity-queries'

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

type AudioTrack = {
  title: string
  duration?: string
  src?: string // to be filled in with uploaded MP3 URLs
}

type AudioAlbum = {
  title: string
  subtitle: string
  tracks: AudioTrack[]
}

type UsefulSite = {
  name: string
  url: string
  description: string
  logoLetter: string
}

const groups: ResourceGroup[] = [
  {
    label: 'Hypnobirthing essentials',
    intro: "Your core hypnobirthing toolkit — handbook, affirmations and relaxation tools to practise alongside your course.",
    items: [
      { title: 'Your Handbook', href: '/downloads/hypnobirthing-handbook.pdf' },
      { title: 'Printable Affirmations', href: '/downloads/printable-affirmations.pdf' },
      { title: 'Extra TBU Colour Affirmations', href: '/downloads/tbu-colour-affirmations.pdf' },
      { title: 'Short Relaxation Prompts', href: '/downloads/short-relaxation-prompts.pdf' },
      { title: 'Partner Script', href: '/downloads/partner-script.pdf' },
      { title: 'Birth Meditations', href: '/downloads/birth-meditations.pdf' },
    ],
  },
  {
    label: 'Planning for birth',
    intro: "Everything you need to prepare for the big day — from your birth plan to what to pack and how to use the tools around you.",
    items: [
      { title: 'Birth planning guide', href: '/downloads/birth-planning-guide.pdf' },
      { title: 'Antenatal session outline', href: '/downloads/antenatal-session-outline.pdf' },
      { title: 'Weekly Agenda', href: '/downloads/weekly-agenda.pdf' },
      { title: 'Daily activities guide', href: '/downloads/daily-activities-guide.pdf' },
      { title: 'Partner Movement Guide', href: '/downloads/partner-movement-guide.pdf' },
      { title: 'Peanut ball guide', href: '/downloads/peanut-ball-guide.pdf' },
      { title: 'Pool inflation guide', href: '/downloads/pool-inflation-guide.pdf' },
      { title: 'Birth bag & homebirth checklists', href: '/downloads/checklists.pdf' },
      { title: 'Door Signs', href: '/downloads/door-signs.pdf' },
      { title: 'Door counterweight (rebozo)', href: '/downloads/door-counterweight.pdf' },
      { title: 'Pillars of a birth partner', href: '/downloads/pillars-of-a-birth-partner.pdf' },
    ],
  },
  {
    label: 'Specific situations',
    intro: "In-depth guides for specific birth pathways — including caesarean, induction, premature birth, freebirth and biomechanics.",
    items: [
      { title: 'Caesarean Handbook', href: '/downloads/caesarean-workbook.pdf' },
      { title: 'Induction guide', href: '/downloads/induction-guide.pdf' },
      { title: 'Premature birth guide', href: '/downloads/preterm-birth-guide.pdf' },
      { title: 'Birth Biomechanics eBook', href: '/downloads/birth-biomechanics.pdf' },
      { title: 'Freebirth guide', href: '/downloads/birth-hood-freebirth-guide.pdf' },
    ],
  },
  {
    label: 'Postnatal & the fourth trimester',
    intro: "Support for the weeks after birth — postpartum planning, feeding, and yoga with your baby.",
    items: [
      { title: 'Postpartum planning guide', href: '/downloads/postpartum-planning-guide.pdf' },
      { title: 'Breastfeeding 101', href: '/downloads/breastfeeding-101.pdf' },
      { title: 'Parent and Baby Yoga Handbook', href: '/downloads/parent-baby-yoga-handbook.pdf' },
      { title: 'Postpartum core & stability yoga', href: '/downloads/postpartum-yoga-guide.pdf' },
    ],
  },
]

const albums: AudioAlbum[] = [
  {
    title: "TBU MP3's No Swearing",
    subtitle: "Birth-hood relaxation tracks — family friendly edition",
    tracks: [
      { title: 'Birth Rehearsal - Ruth - N:S', duration: '50:33' },
      { title: 'Relaxation - Ruth - N:S', duration: '40:03' },
      { title: 'Fear Release - Ruth - N:S', duration: '43:40' },
    ],
  },
  {
    title: "TBU MP3's",
    subtitle: "Birth-hood relaxation tracks — original edition",
    tracks: [
      { title: 'TBU - Affirmation Track', duration: '18:00' },
      { title: 'TBU - Birth Rehearsal', duration: '—' },
      { title: 'TBU - Fear Release', duration: '—' },
      { title: 'TBU - Confidence', duration: '—' },
    ],
  },
  {
    title: "Additional Relaxations",
    subtitle: "Extra tracks to support your practice",
    tracks: [
      { title: 'Short Relaxation', duration: '—' },
      { title: 'Partner Relaxation Script', duration: '—' },
    ],
  },
]

const usefulSites: UsefulSite[] = [
  {
    name: 'Dr Sara Wickham',
    url: 'https://www.sarawickham.com',
    description: 'Midwife, author, speaker and researcher — evidence-based information on pregnancy and birth.',
    logoLetter: 'SW',
  },
  {
    name: 'Evidence Based Birth',
    url: 'https://evidencebasedbirth.com',
    description: 'Evidence that empowers — research-based articles on every aspect of birth.',
    logoLetter: 'EB',
  },
  {
    name: 'Birthrights',
    url: 'https://www.birthrights.org.uk',
    description: 'The UK charity dedicated to protecting human rights in childbirth.',
    logoLetter: 'BR',
  },
  {
    name: 'AIMS',
    url: 'https://www.aims.org.uk',
    description: 'Association for Improvements in the Maternity Services — for a better birth.',
    logoLetter: 'AI',
  },
  {
    name: 'MidwifeThinking',
    url: 'https://midwifethinking.com',
    description: 'Rachel Reed\u2019s blog — deep dives into the physiology and research behind birth.',
    logoLetter: 'MT',
  },
  {
    name: 'Spinning Babies',
    url: 'https://www.spinningbabies.com',
    description: 'Fetal positioning techniques for easier birth — used by midwives and doulas worldwide.',
    logoLetter: 'SB',
  },
]

function getFileType(href: string): 'PDF' | 'DOCX' {
  return href.toLowerCase().includes('.docx') ? 'DOCX' : 'PDF'
}

function buildPdfGroups(resources: HubResource[]): ResourceGroup[] {
  const pdfs = resources.filter((r) => r.type === 'pdf')
  if (pdfs.length === 0) return []
  const map = new Map<string, HubResource[]>()
  for (const r of pdfs) {
    const key = r.subgroup || 'Resources'
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(r)
  }
  return Array.from(map.entries()).map(([label, items]) => ({
    label,
    intro: '',
    items: items.map((r) => {
      const href = r.fileUrl || r.externalUrl || '#'
      return {
        title: r.title,
        href,
        type: href.toLowerCase().includes('.docx') ? 'DOCX' : 'PDF' as 'PDF' | 'DOCX',
      }
    }),
  }))
}

function buildAudioAlbums(resources: HubResource[]): AudioAlbum[] {
  const audio = resources.filter((r) => r.type === 'audio')
  if (audio.length === 0) return []
  const map = new Map<string, HubResource[]>()
  for (const r of audio) {
    const key = r.subgroup || 'Audio tracks'
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(r)
  }
  return Array.from(map.entries()).map(([title, tracks]) => ({
    title,
    subtitle: '',
    tracks: tracks.map((r) => ({
      title: r.title,
      duration: r.duration,
      src: r.fileUrl || r.externalUrl,
    })),
  }))
}

function buildUsefulSites(resources: HubResource[]): UsefulSite[] {
  return resources
    .filter((r) => r.type === 'external')
    .map((r) => ({
      name: r.title,
      url: r.externalUrl || '#',
      description: r.description || '',
      logoLetter: r.logoLetter || r.title.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase(),
    }))
}

type HubClientProps = { sanityResources?: HubResource[] }

export default function HubClient({ sanityResources = [] }: HubClientProps) {
  const liveGroups = buildPdfGroups(sanityResources)
  const liveAlbums = buildAudioAlbums(sanityResources)
  const liveSites = buildUsefulSites(sanityResources)

  // Per-section: use Sanity data if present for that type, otherwise fall back to static
  const displayGroups = liveGroups.length > 0 ? liveGroups : groups
  const displayAlbums = liveAlbums.length > 0 ? liveAlbums : albums
  const displaySites = liveSites.length > 0 ? liveSites : usefulSites

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
                  fontFamily: 'Poppins, sans-serif',
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
              <a href="https://calendly.com/birthhood/free-consultation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)', textDecoration: 'underline' }}>
                Book a free consultation
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    )
  }

  const totalResources = displayGroups.reduce((sum, g) => sum + g.items.length, 0)

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
              Everything you need, all in one place — documents, relaxation audio and useful links.
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
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Lock Hub
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="hub-stats-strip">
        <div className="wrap hub-stats-row">
          <div className="hub-stat">
            <div className="hub-stat-num">{totalResources}</div>
            <div className="hub-stat-label">Documents</div>
          </div>
          <div className="hub-stat">
            <div className="hub-stat-num">{displayAlbums.reduce((s, a) => s + a.tracks.length, 0)}</div>
            <div className="hub-stat-label">Audio tracks</div>
          </div>
          <div className="hub-stat">
            <div className="hub-stat-num">{displaySites.length}</div>
            <div className="hub-stat-label">Useful sites</div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>documents</em>
          </h2>

          {displayGroups.map((group, gi) => (
            <div key={group.label} style={{ marginBottom: gi === displayGroups.length - 1 ? 0 : '3.5rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.4rem, 2vw, 1.7rem)', fontWeight: 500, marginBottom: '0.5rem', lineHeight: 1.2 }}>
                  {group.label}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '680px' }}>
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
                          border: '1px solid rgba(254,127,204,0.3)',
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
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 500, color: 'var(--black)', lineHeight: 1.3, marginBottom: '0.2rem' }}>
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

      {/* AUDIO */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.1 }}>
            Relaxation <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>audio</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem', maxWidth: '680px' }}>
            Play these relaxation tracks during pregnancy and your birth. Use headphones for the deepest practice, or play out loud in your birth space.
          </p>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {displayAlbums.map((album) => (
              <div key={album.title} className="card" style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '3px' }}>
                {/* Album header */}
                <div style={{ marginBottom: '1.2rem', paddingBottom: '1.2rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pink-deep)', marginBottom: '0.4rem' }}>
                    birth-hood album
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--black)', marginBottom: '0.3rem', lineHeight: 1.2 }}>
                    {album.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.5 }}>
                    {album.subtitle}
                  </p>
                </div>

                {/* Tracks with HTML5 audio */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {album.tracks.map((track, ti) => (
                    <div key={track.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', minWidth: 0, flex: 1 }}>
                          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: 'var(--pink-deep)', flexShrink: 0 }}>
                            {String(ti + 1).padStart(2, '0')}
                          </span>
                          <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--black)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {track.title}
                          </span>
                        </div>
                        {track.duration && (
                          <span style={{ fontSize: '0.72rem', color: 'var(--grey-light)', fontWeight: 500, flexShrink: 0 }}>
                            {track.duration}
                          </span>
                        )}
                      </div>
                      {track.src ? (
                        <audio controls preload="none" style={{ width: '100%', height: '36px' }}>
                          <source src={track.src} type="audio/mpeg" />
                          Your browser does not support audio playback.
                        </audio>
                      ) : (
                        <div style={{ fontSize: '0.72rem', fontStyle: 'italic', color: 'var(--grey-light)', padding: '0.5rem 0.8rem', background: 'var(--pink-ultra)', borderRadius: '3px' }}>
                          Audio file coming soon
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem 1.5rem', background: 'var(--white)', border: '1px dashed rgba(254,127,204,0.5)', borderRadius: '3px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: 'var(--black)' }}>Tip:</strong> Upload MP3 files to the project (or a hosting service) and set each track&apos;s <code>src</code> in <code>app/hub/HubClient.tsx</code> to enable the players.
            </p>
          </div>
        </div>
      </section>

      {/* USEFUL WEBSITES */}
      <section className="section-pad" style={{ background: 'var(--black)', color: 'var(--white)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.1, color: 'var(--white)' }}>
            Useful <em style={{ fontStyle: 'italic', color: 'var(--pink)' }}>websites</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem', maxWidth: '680px' }}>
            Trusted external resources I recommend for deeper reading on birth choices, rights, physiology and evidence-based research.
          </p>

          <div className="grid-3" style={{ gap: '1rem' }}>
            {displaySites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.2rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '3px',
                  transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--pink)',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    color: 'var(--black)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {site.logoLetter}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 500, color: 'var(--white)' }}>
                      {site.name}
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--pink)', flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
                    {site.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Padlet feature */}
          <div style={{ marginTop: '2rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(254,127,204,0.12), rgba(254,127,204,0.04))', border: '1px solid rgba(254,127,204,0.3)', borderRadius: '3px' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pink)', marginBottom: '0.6rem' }}>
              Featured board
            </div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.6rem' }}>
              My fierce birth padlet
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.2rem' }}>
              My curated board of articles and research — pre-labour rupture of membranes, asynclitism, anterior cervical lip, vaginal examinations, fibroids evidence and more. Made with love to support your birthing needs.
            </p>
            <a
              href="https://padlet.com/birthhood"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Open Padlet board
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* HELP NOTICE */}
      <section className="section-pad-sm" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.8rem' }}>
            Can&apos;t access a resource?
          </h3>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
            If any of these files won&apos;t open or you need something that isn&apos;t here, drop me a message and I&apos;ll sort it straight away.
          </p>
          <a href="mailto:leanne@birth-hood.co.uk" className="btn-outline">
            Email me
          </a>
        </div>
      </section>
    </>
  )
}
