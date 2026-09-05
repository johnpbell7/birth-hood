import Link from 'next/link'

/**
 * "Where I work" — local coverage, shown on Meet Leanne only.
 *
 * It used to sit on four service pages, which duplicated the same paragraph
 * and town list across the site. The machine-readable version of this signal
 * lives in the LocalBusiness `areaServed` schema in app/layout.tsx (every page)
 * and in each service page's own Service schema, so nothing is lost by showing
 * the human-readable version once.
 */

const COUNTIES = [
  'North West Leicestershire',
  'Leicestershire',
  'Derbyshire',
  'Warwickshire',
  'Nottinghamshire',
]

const TOWNS = [
  'Coalville',
  'Ashby-de-la-Zouch',
  'Loughborough',
  'Leicester',
  'Swadlincote',
  'Nuneaton',
  'Nottingham',
  'Derby',
]

export default function AreasCovered() {
  return (
    <section className="areas" aria-labelledby="areas-heading">
      <div className="wrap">
        <div className="areas-grid">
          {/* Left — the story */}
          <div>
            <h2 id="areas-heading" className="areas-title">
              Based in Leicestershire,
              <br />
              <em>working across the Midlands</em>
            </h2>
            <p className="areas-intro">
              I&apos;m based in <strong>North West Leicestershire</strong> and support families in
              person right across the Midlands. I travel around an hour for births — so if
              you&apos;re within reach, just ask.
            </p>
            <p className="areas-intro">
              Not local? <Link href="/virtual-doula">Virtual support</Link> means we can still work
              together from anywhere in the UK or abroad.
            </p>
          </div>

          {/* Right — the coverage itself */}
          <div className="areas-card">
            <div className="areas-group">
              <h3 className="areas-group-label">Counties</h3>
              <ul className="areas-chips">
                {COUNTIES.map((a) => (
                  <li key={a} className="areas-chip areas-chip--county">{a}</li>
                ))}
              </ul>
            </div>

            <div className="areas-group">
              <h3 className="areas-group-label">Towns &amp; cities</h3>
              <ul className="areas-chips">
                {TOWNS.map((a) => (
                  <li key={a} className="areas-chip">{a}</li>
                ))}
              </ul>
            </div>

            <p className="areas-online">
              <span className="areas-online-dot" aria-hidden="true" />
              Online sessions available UK-wide &amp; internationally
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
