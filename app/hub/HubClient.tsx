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

type Video = {
  title: string
  description?: string
  src?: string
  poster?: string
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

const videos: Video[] = [
  {
    title: 'Workshop Recordings',
    description: 'Full recordings of birth-hood course sessions and workshops covering birth positions, coaching, breathing techniques and more.',
  },
  {
    title: 'Birth Positions Walkthrough',
    description: 'A visual guide to the most effective positions for each stage of labour and birth.',
  },
  {
    title: 'Breathing Techniques',
    description: 'I demonstrate up-breathing, down-breathing and relaxation breaths for every stage of labour.',
  },
  {
    title: 'Partner Coaching Session',
    description: 'How your birth partner can actively support you — comfort measures, advocacy and space-holding.',
  },
  {
    title: 'Caesarean Birth Prep',
    description: 'What to expect before, during and after a caesarean — making it as positive as possible.',
  },
  {
    title: 'Fourth Trimester Essentials',
    description: 'Preparing for the early weeks with your baby — feeding, sleep, recovery and emotional wellbeing.',
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

function buildVideos(resources: HubResource[]): Video[] {
  return resources
    .filter((r) => r.type === 'video')
    .map((r) => ({
      title: r.title,
      description: r.description,
      src: r.fileUrl || r.videoUrl,
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
  const liveVideos = buildVideos(sanityResources)
  const liveSites = buildUsefulSites(sanityResources)

  // Per-section: use Sanity data if present for that type, otherwise fall back to static
  const displayGroups = liveGroups.length > 0 ? liveGroups : groups
  const displayAlbums = liveAlbums.length > 0 ? liveAlbums : albums
  const displayVideos = liveVideos.length > 0 ? liveVideos : videos
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
              Everything you need, all in one place — documents, relaxation audio, workshop videos and useful links.
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
            <div className="hub-stat-num">{displayVideos.length}</div>
            <div className="hub-stat-label">Videos</div>
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
          <div className="section-label" style={{ marginBottom: '0.6rem' }}>Section 01</div>
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
          <div className="section-label" style={{ marginBottom: '0.6rem' }}>Section 02</div>
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

          <div style={{ marginTop: '2rem', padding: '1rem 1.5rem', background: 'var(--white)', border: '1px dashed rgba(232,123,195,0.5)', borderRadius: '3px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: 'var(--black)' }}>Tip:</strong> Upload MP3 files to the project (or a hosting service) and set each track&apos;s <code>src</code> in <code>app/hub/HubClient.tsx</code> to enable the players.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label" style={{ marginBottom: '0.6rem' }}>Section 03</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.1 }}>
            Workshop <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>videos</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem', maxWidth: '680px' }}>
            Watch back full recordings of birth-hood sessions and workshops, covering birth positions, coaching, breathing and more.
          </p>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {displayVideos.map((video) => (
              <div key={video.title} className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '3px' }}>
                {video.src ? (
                  <video controls poster={video.poster} style={{ width: '100%', display: 'block', background: 'var(--black)' }}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <div style={{
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg, var(--black) 0%, #2a2a2a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    position: 'relative',
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        border: '2px solid var(--pink)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem',
                      }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--pink)">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                        Video coming soon
                      </div>
                    </div>
                  </div>
                )}
                <div style={{ padding: '1.2rem 1.5rem' }}>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontWeight: 500, color: 'var(--black)', marginBottom: '0.4rem' }}>
                    {video.title}
                  </h3>
                  {video.description && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.65, margin: 0 }}>
                      {video.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem 1.5rem', background: 'var(--pink-ultra)', border: '1px dashed rgba(232,123,195,0.5)', borderRadius: '3px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: 'var(--black)' }}>Tip:</strong> Upload video files or add a YouTube/Vimeo embed URL as the video <code>src</code> in <code>app/hub/HubClient.tsx</code>.
            </p>
          </div>
        </div>
      </section>

      {/* USEFUL WEBSITES */}
      <section className="section-pad" style={{ background: 'var(--black)', color: 'var(--white)' }}>
        <div className="wrap">
          <div className="section-label" style={{ marginBottom: '0.6rem', color: 'var(--pink)' }}>Section 04</div>
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
          <div style={{ marginTop: '2rem', padding: '2rem', background: 'linear-gradient(135deg, rgba(232,123,195,0.12), rgba(232,123,195,0.04))', border: '1px solid rgba(232,123,195,0.3)', borderRadius: '3px' }}>
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
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.8rem' }}>Need help?</div>
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
