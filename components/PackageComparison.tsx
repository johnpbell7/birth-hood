'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'

type Row = { feat: string; vals: [string, string, string] }
type Group = { label: string; rows: Row[] }

const PACKAGES = [
  { name: 'Foundation', price: '£1,095', tag: 'Essential', popular: false },
  { name: 'Balanced', price: '£1,495', tag: 'Enhanced', popular: true },
  { name: 'Ultimate', price: '£2,000', tag: 'Comprehensive', popular: false },
] as const

const GROUPS: Group[] = [
  {
    label: 'Before birth',
    rows: [
      { feat: 'Antenatal sessions', vals: ['1 × 2-hour', '2 × 2–3-hour', '4 × 2–3-hour'] },
      { feat: 'Virtual support between sessions', vals: ['Limited (9–5)', 'Increased from 3rd trimester', 'Ongoing & continuous'] },
      { feat: 'Personalised birth planning', vals: ['Basic discussion', 'Included in sessions', 'Dedicated bespoke planning'] },
      { feat: 'Online resource hub', vals: ['Resource library', 'Hub + hypnobirthing', 'Full hub + all digital resources'] },
      { feat: 'Birth pool hire', vals: ['Optional (extra cost)', 'Included', 'Included'] },
      { feat: 'TENS machine hire', vals: ['—', 'Included', 'Included'] },
    ],
  },
  {
    label: 'During birth',
    rows: [
      { feat: 'On-call from', vals: ['39 weeks', '10 days before due date', '38 weeks'] },
      { feat: 'Continuous labour & birth support', vals: ['✓', '✓', '✓'] },
    ],
  },
  {
    label: 'After birth',
    rows: [
      { feat: 'Immediate post-birth support', vals: ['1 hour', '2 hours', '3 hours'] },
      { feat: 'Postnatal visits', vals: ['1 × 90-min', '1 × 2-hour', '3 × 2-hour'] },
      { feat: 'Phone & email support', vals: ['Limited · 2 weeks', 'Ongoing · 6 weeks', 'Unlimited · 12 weeks'] },
      { feat: 'Postpartum recovery kit', vals: ['—', '—', 'Included'] },
    ],
  },
  {
    label: 'Extras & flexibility',
    rows: [
      { feat: 'Extra appointments & accompaniment', vals: ['—', '—', 'Included'] },
      { feat: 'Flexible allocation of sessions', vals: ['—', '—', '✓'] },
    ],
  },
]

function Cell({ value }: { value: string }) {
  if (value === '—') return <span className="pkg-dash" aria-label="Not included">—</span>
  if (value === '✓') return <span className="pkg-check" aria-label="Included">✓</span>
  if (value === 'Included')
    return (
      <span className="pkg-inc">
        <span className="pkg-check" aria-hidden="true">✓</span> Included
      </span>
    )
  return <>{value}</>
}

/* Mobile value: a labelled row with the value on the right */
function MobileValue({ value }: { value: string }) {
  const neg = value === '—'
  return (
    <span className={`pkgm-v${neg ? ' pkgm-v--neg' : ''}`}>
      {neg ? 'Not included' : value === '✓' ? <><span className="pkg-check">✓</span> Included</> : value}
    </span>
  )
}

export default function PackageComparison() {
  const [sel, setSel] = useState(1) // default: Balanced

  return (
    <div className="pkg-compare">
      {/* ---------- DESKTOP TABLE ---------- */}
      <div className="pkg-desktop">
        <div className="pkg-scroll">
          <table className="pkg-table">
            <thead>
              <tr>
                <th className="pkg-corner" scope="col">
                  <span className="pkg-corner-label">Compare packages</span>
                </th>
                {PACKAGES.map((p) => (
                  <th key={p.name} scope="col" className={`pkg-head${p.popular ? ' pkg-head--pop' : ''}`}>
                    <span className="pkg-name">{p.name}</span>
                    <span className="pkg-price">{p.price}</span>
                    <span className="pkg-tag">{p.tag}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((g) => (
                <Fragment key={g.label}>
                  <tr className="pkg-group">
                    <td colSpan={4}>{g.label}</td>
                  </tr>
                  {g.rows.map((r) => (
                    <tr key={r.feat}>
                      <th scope="row" className="pkg-feat">{r.feat}</th>
                      {r.vals.map((v, i) => (
                        <td key={i} className={`pkg-val${PACKAGES[i].popular ? ' pkg-col-pop' : ''}`}>
                          <Cell value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr className="pkg-cta-row">
                <td className="pkg-feat" aria-hidden="true" />
                {PACKAGES.map((p) => (
                  <td key={p.name} className={`pkg-val${p.popular ? ' pkg-col-pop' : ''}`}>
                    <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className={p.popular ? 'btn-primary pkg-btn' : 'btn-outline pkg-btn'}>
                      Enquire
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------- MOBILE: TAB SWITCHER ---------- */}
      <div className="pkg-mobile">
        <div className="pkgm-tabs" role="tablist" aria-label="Choose a package to view">
          {PACKAGES.map((p, i) => (
            <button
              key={p.name}
              role="tab"
              aria-selected={sel === i}
              className={`pkgm-tab${sel === i ? ' is-active' : ''}`}
              onClick={() => setSel(i)}
            >
              <span className="pkgm-tab-name">{p.name}</span>
              <span className="pkgm-tab-price">{p.price}</span>
            </button>
          ))}
        </div>

        <div className="pkgm-panel">
          <div className={`pkgm-head${PACKAGES[sel].popular ? ' is-pop' : ''}`}>
            <div>
              <span className="pkgm-head-name">{PACKAGES[sel].name}</span>
              <span className="pkgm-head-tag">{PACKAGES[sel].tag}</span>
            </div>
            <span className="pkgm-head-price">{PACKAGES[sel].price}</span>
          </div>

          {GROUPS.map((g) => (
            <div className="pkgm-group" key={g.label}>
              <div className="pkgm-group-label">{g.label}</div>
              {g.rows.map((r) => (
                <div className="pkgm-row" key={r.feat}>
                  <span className="pkgm-k">{r.feat}</span>
                  <MobileValue value={r.vals[sel]} />
                </div>
              ))}
            </div>
          ))}

          <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="btn-primary pkgm-btn">
            Enquire about {PACKAGES[sel].name}
          </a>
        </div>
        <p className="pkgm-hint">Tap a package above to compare what&apos;s included.</p>
      </div>

      <p className="pkg-note">
        Every package includes full, continuous <strong>in-person support throughout labour and birth</strong>.
        Not sure which fits? <Link href="/find-your-package">Take the 1-minute package finder</Link> or{' '}
        <Link href="https://calendly.com/birthhood">book a free consultation</Link>.
      </p>
    </div>
  )
}
