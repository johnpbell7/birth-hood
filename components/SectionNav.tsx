import Link from 'next/link'
import { DEFAULT_NAV } from '@/lib/nav'

/**
 * Previous / next links along a service journey, shown at the foot of a page.
 *
 * The order comes from the main menu rather than a second list kept in step by
 * hand, so a page can never advertise a neighbour the nav disagrees with.
 * Only sections with more than one page produce links.
 */
function neighbours(href: string) {
  for (const item of DEFAULT_NAV) {
    const kids = item.children
    if (!kids || kids.length < 2) continue
    const i = kids.findIndex((c) => c.href === href)
    if (i === -1) continue
    return {
      section: item.label,
      prev: i > 0 ? kids[i - 1] : null,
      next: i < kids.length - 1 ? kids[i + 1] : null,
    }
  }
  return null
}

export default function SectionNav({ href }: { href: string }) {
  const n = neighbours(href)
  if (!n || (!n.prev && !n.next)) return null

  return (
    <nav className="section-nav" aria-label={`${n.section} pages`}>
      <div className="wrap section-nav-inner">
        {n.prev ? (
          <Link href={n.prev.href} className="section-nav-link section-nav-prev">
            <span className="section-nav-dir">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Previous
            </span>
            <span className="section-nav-title">{n.prev.label}</span>
          </Link>
        ) : (
          <span />
        )}

        {n.next && (
          <Link href={n.next.href} className="section-nav-link section-nav-next">
            <span className="section-nav-dir">
              Next
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
            <span className="section-nav-title">{n.next.label}</span>
          </Link>
        )}
      </div>
    </nav>
  )
}
