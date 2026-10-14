import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'
import { hubPassword } from '@/lib/hub-password'

export const dynamic = 'force-dynamic'

/** Checks a Client Hub password on the server, so the password itself never reaches the browser. */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const given = Buffer.from(String(body?.password ?? '').trim())
  const wanted = Buffer.from(await hubPassword())
  const ok = given.length === wanted.length && timingSafeEqual(given, wanted)
  // a short pause after a wrong guess makes trying lots of passwords slow
  if (!ok) await new Promise((r) => setTimeout(r, 600))
  return NextResponse.json({ ok }, { status: ok ? 200 : 401, headers: { 'Cache-Control': 'no-store' } })
}
