import Image from 'next/image'
import Link from 'next/link'
import { getAreas, townSentence } from '@/lib/areas'

/**
 * "Where I work" — local coverage, shown on Meet Leanne only.
 *
 * It used to sit on four service pages, which duplicated the same paragraph
 * and town list across the site. The machine-readable version of this signal
 * lives in the LocalBusiness `areaServed` schema in app/layout.tsx (every page)
 * and in each service page's own Service schema, so nothing is lost by showing
 * the human-readable version once.
 */

export default async function AreasCovered() {
  const { counties, towns } = await getAreas()
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
              person across {counties.slice(0, -1).join(', ')} and {counties[counties.length - 1]}
              &nbsp;— including {townSentence(towns, 5)}.
            </p>
            <p className="areas-intro">
              I travel around an hour for births. <strong>Not sure if you&apos;re within reach?</strong>{' '}
              Just <Link href="/contact">get in touch and ask</Link> — the answer is usually yes.
            </p>
            <p className="areas-intro">
              Not local at all? <Link href="/virtual-doula">Virtual support</Link> means we can still
              work together from anywhere in the UK or abroad.
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
                {counties.map((a) => (
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
