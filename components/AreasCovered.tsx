import Image from 'next/image'
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
  'Leicestershire',
  'Northamptonshire',
  'Derbyshire',
  'Nottinghamshire',
  'Warwickshire',
  'Staffordshire',
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

            <div className="areas-photo">
              <Image
                src="/images/leanne-van-wide-22.jpg"
                alt="Leanne and the birth-hood van, ready to head out to a client"
                width={900}
                height={600}
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Right — the coverage itself */}
          <div className="areas-card">
            <div className="areas-group">
              <h3 className="areas-group-label">Counties covered in person</h3>
              <ul className="areas-chips">
                {COUNTIES.map((a) => (
                  <li key={a} className="areas-chip areas-chip--county">{a}</li>
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
