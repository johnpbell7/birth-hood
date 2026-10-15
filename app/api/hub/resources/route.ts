import { NextRequest, NextResponse } from 'next/server'
import { HUB_COOKIE, hasHubCookie } from '@/lib/hub-access'
import { getHubResources } from '@/lib/sanity-queries'

export const dynamic = 'force-dynamic'

const NO_STORE = { 'Cache-Control': 'private, no-store' }

/** The hub's files, only for a browser that has unlocked it (see app/api/hub/unlock). */
export async function GET(req: NextRequest) {
  if (!(await hasHubCookie(req.cookies.get(HUB_COOKIE)?.value))) {
    return NextResponse.json({ ok: false }, { status: 401, headers: NO_STORE })
  }
  return NextResponse.json({ ok: true, resources: await getHubResources() }, { headers: NO_STORE })
}
