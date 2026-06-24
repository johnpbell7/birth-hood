interface Course {
  _key?: string
  name: string
  dates?: string
  format?: string
  price?: string
  availability?: string
  featured?: boolean
  ctaLabel?: string
  ctaHref?: string
}

type Props = {
  heading?: string
  intro?: string
  courses?: Course[]
}

export default function CourseDatesSection({ heading, intro, courses = [] }: Props) {
  return (
    <section className="section-pad">
      <div className="wrap">
        {heading && (
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: intro ? '0.75rem' : '2.5rem', lineHeight: 1.1 }}>
            {heading}
          </h2>
        )}
        {intro && (
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2.5rem', maxWidth: '680px' }}>
            {intro}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {courses.map((course, i) => (
            <div key={course._key ?? i} className={`card${course.featured ? ' featured' : ''}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: '1 1 260px' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.4rem' }}>
                  {course.name}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', color: 'var(--grey-mid)', fontSize: '0.85rem', fontWeight: 300 }}>
                  {course.dates && <span>{course.dates}</span>}
                  {course.format && <span>{course.format}</span>}
                  {course.availability && <span style={{ color: 'var(--pink-deep)' }}>{course.availability}</span>}
                </div>
              </div>
              {course.price && (
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', color: 'var(--pink-deep)' }}>
                  {course.price}
                </div>
              )}
              {course.ctaHref && (
                <a
                  href={course.ctaHref}
                  className={course.featured ? 'btn-primary' : 'btn-outline'}
                  target={course.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={course.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {course.ctaLabel ?? 'Book Now'}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
