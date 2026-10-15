import { createHash, createHmac, timingSafeEqual } from 'node:crypto'
import { hubPassword } from '@/lib/hub-password'

// After the right password, app/api/hub/unlock sets this cookie, and the hub's files are only sent to a browser
// that has it (app/api/hub/resources). The browser's scripts can't read it, and it only goes to /api/hub.
export const HUB_COOKIE = 'bh_hub'
export const HUB_COOKIE_PATH = '/api/hub'
const TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days, then the password again

// Signed with a key made from the current password, so changing it in the Studio signs everyone out and nobody can
// make a cookie without knowing it. The server's Sanity read key is mixed in too (when it's there), so a copied
// cookie can't be used to guess the password.
async function signingKey(): Promise<Buffer> {
  const serverKey = process.env.SANITY_HUB_TOKEN || process.env.SANITY_API_TOKEN || ''
  return createHash('sha256').update(`birth-hood hub\0${serverKey}\0${await hubPassword()}`).digest()
}

function sign(key: Buffer, exp: string): string {
  return createHmac('sha256', key).update(exp).digest('base64url')
}

export async function makeHubCookie(): Promise<string> {
  const exp = String(Date.now() + TTL_MS)
  return `${exp}.${sign(await signingKey(), exp)}`
}

export async function hasHubCookie(value: string | undefined): Promise<boolean> {
  const [exp, sig] = (value ?? '').split('.')
  if (!exp || !sig || !(Number(exp) > Date.now())) return false
  const a = Buffer.from(sig)
  const b = Buffer.from(sign(await signingKey(), exp))
  return a.length === b.length && timingSafeEqual(a, b)
}
