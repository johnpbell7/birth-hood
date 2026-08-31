import Link from 'next/link'

/**
 * "Where I work" — visible local-SEO section. Real, human-readable coverage
 * content (not just schema) is what actually helps regional searchability.
 * `service` lets each page phrase it naturally ("doula support", "hypnobirthing").
 */
export default function AreasCovered({ service = 'support' }: { service?: string }) {
  const inPerson = [
    'North West Leicestershire',
    'Leicestershire',
    'Derbyshire',
    'Warwickshire',
    'Nottinghamshire',
    'Coalville',
    'Ashby-de-la-Zouch',
    'Loughborough',
    'Leicester',
    'Swadlincote',
    'Nuneaton',
    'Nottingham',
    'Derby',
  ]

  return (
    <section className="areas" aria-labelledby="areas-heading">
      <div className="wrap">
        <div className="section-label">Where I work</div>
        <h2 id="areas-heading" className="areas-title">
          In-person {service} across <em>Leicestershire &amp; the Midlands</em>
        </h2>
        <p className="areas-intro">
          I&apos;m based in <strong>North West Leicestershire</strong> and support families in person across
          <strong> Leicestershire, Derbyshire, Warwickshire and Nottinghamshire</strong> — I travel around an
          hour for births, so if you&apos;re within reach, just ask. Wherever you are, <strong>virtual {service}</strong> is
          available UK-wide and internationally.
        </p>

        <ul className="areas-chips" aria-label="Areas covered in person">
          {inPerson.map((a) => (
            <li key={a} className="areas-chip">{a}</li>
          ))}
        </ul>

        <p className="areas-online">
          <span className="areas-online-dot" aria-hidden="true" />
          Not local? <Link href="/virtual-doula">Virtual support</Link> means you can still work with me from
          anywhere in the UK or abroad.
        </p>
      </div>
    </section>
  )
}
