import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'
import { hubPassword } from '@/lib/hub-password'
import { HUB_COOKIE, HUB_COOKIE_PATH, makeHubCookie } from '@/lib/hub-access'
import { getHubResources } from '@/lib/sanity-queries'

export const dynamic = 'force-dynamic'

const NO_STORE = { 'Cache-Control': 'private, no-store' }

/** Checks a Client Hub password on the server, so the password itself never reaches the browser. The right
    password gets the hub's files back and a signed cookie, so a reload in the same tab gets them again. */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const given = Buffer.from(String(body?.password ?? '').trim())
  const wanted = Buffer.from(await hubPassword())
  const ok = given.length === wanted.length && timingSafeEqual(given, wanted)
  if (!ok) {
    // a short pause after a wrong guess makes trying lots of passwords slow
    await new Promise((r) => setTimeout(r, 600))
    return NextResponse.json({ ok }, { status: 401, headers: NO_STORE })
  }
  const res = NextResponse.json({ ok, resources: await getHubResources() }, { headers: NO_STORE })
  res.cookies.set(HUB_COOKIE, await makeHubCookie(), {
    httpOnly: true,
    secure: req.nextUrl.protocol === 'https:',
    sameSite: 'strict',
    path: HUB_COOKIE_PATH,
  })
  return res
}

/** Lock Hub: forgets the cookie. */
export async function DELETE() {
  const res = NextResponse.json({ ok: true }, { headers: NO_STORE })
  res.cookies.set(HUB_COOKIE, '', { httpOnly: true, sameSite: 'strict', path: HUB_COOKIE_PATH, maxAge: 0 })
  return res
}
