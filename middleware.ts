import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Keep non-production hosts (e.g. the *.vercel.app preview/deployment URL) out
// of Google so they never compete with the live domain as duplicate content.
// The production domain (birth-hood.co.uk) is unaffected and stays indexable.
// TEMPORARY (14 Nov 2026, one hour): every page shows the 404 page.
// Remove this block to bring the site back.
const TEMP_404 = true
const TEMP_404_KEEP = /^\/(studio|robots\.txt$|sitemap\.xml$)/

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  if (TEMP_404 && !TEMP_404_KEEP.test(req.nextUrl.pathname)) {
    const res = NextResponse.rewrite(new URL('/_closed/404', req.url))
    res.headers.set('Cache-Control', 'no-store')
    return res
  }
  const res = NextResponse.next()
  if (host.endsWith('.vercel.app')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)$).*)'],
}
