import { NEXT_COURSE } from '@/lib/booking-links'

/**
 * The next course date, price and place, with a link straight to checkout.
 *
 * "Book the Course" on its own asks people to click through before they can
 * find out when it is or what it costs — the two things that decide whether
 * they book at all. Renders nothing when there is no date set.
 */
export default function NextCourse() {
  if (!NEXT_COURSE.date) return null
  return (
    <div className="next-course">
      <div className="next-course-body">
        <span className="next-course-tag">Next course</span>
        <h3 className="next-course-title">{NEXT_COURSE.name}</h3>
        <dl className="next-course-facts">
          <div><dt>When</dt><dd>{NEXT_COURSE.date}, {NEXT_COURSE.time}</dd></div>
          <div><dt>Where</dt><dd>{NEXT_COURSE.place}</dd></div>
          <div><dt>Price</dt><dd>{NEXT_COURSE.price}</dd></div>
        </dl>
      </div>
      <a
        className="btn-primary next-course-cta"
        href={NEXT_COURSE.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book your place
      </a>
    </div>
  )
}
