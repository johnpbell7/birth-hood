import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Keep non-production hosts (e.g. the *.vercel.app preview/deployment URL) out
// of Google so they never compete with the live domain as duplicate content.
// The production domain (birth-hood.co.uk) is unaffected and stays indexable.
export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const res = NextResponse.next()
  if (host.endsWith('.vercel.app')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)$).*)'],
}
