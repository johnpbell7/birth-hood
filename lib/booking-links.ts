// The places people book, in one file so a changed link is one edit.
//
// Ticket Tailor hosts the paid courses and classes; Calendly handles the free
// consultation and Power Hours. Course pages send people to the course listing
// rather than to Calendly — someone reading about the hypnobirthing course
// wants to book the course, not a chat about it.

/** The one-day hypnobirthing course. */
export const HYPNOBIRTHING_COURSE = 'https://buytickets.at/birthhood/2404800'

/** Every birth-hood event: courses, classes and any new dates. */
export const ALL_EVENTS = 'https://www.tickettailor.com/events/birthhood/'

/** Free 30-minute chat. */
export const CONSULTATION = 'https://calendly.com/birthhood/free-consultation'

/** Paid 1-2-1 session. */
export const POWER_HOUR = 'https://calendly.com/birthhood/power-hour'

/**
 * The next bookable course, shown as a band on the hypnobirthing pages.
 *
 * This is the one place to change it. When the November course sells out or a
 * new date goes up, edit these five lines — nothing else refers to the date.
 * Set `date` to an empty string to hide the band entirely and fall back to the
 * plain "Book the Course" buttons.
 */
export const NEXT_COURSE = {
  name: 'One Day Hypnobirthing & Birth Prep',
  date: 'Saturday 14 November 2026',
  time: '10am – 5pm',
  place: 'Coalville, Leicestershire',
  price: '£145 per birth team',
  url: HYPNOBIRTHING_COURSE,
}
