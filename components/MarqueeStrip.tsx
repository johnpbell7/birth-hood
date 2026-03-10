const ITEMS = [
  'Hypnobirthing', 'Doula Support', 'Prenatal Yoga', 'Birth Trauma',
  'Virtual Sessions', 'Postnatal Care', '5★ Rated', 'BBC Radio Leicester',
]

export default function MarqueeStrip({ dark = false }: { dark?: boolean }) {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={`strip${dark ? ' strip--dark' : ''}`}>
      <div className="strip-inner">
        {doubled.map((item, i) => (
          <div key={i} className="strip-item">
            <span className="strip-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
