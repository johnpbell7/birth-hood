import crypto from 'crypto'

// Signs short-lived download links so a purchased file can only be fetched via
// a valid, unexpired, tamper-proof token (not by guessing the raw CDN URL).
const SECRET = process.env.DOWNLOAD_SIGNING_SECRET || ''
const DEFAULT_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

export type DownloadPayload = { pid: string; email: string; exp: number; idx?: number }

export function isDownloadConfigured() {
  return SECRET.length >= 16
}

/** `idx` picks one file out of the product's flattened file list — a bundle
    sends one signed link per file rather than a zip. */
export function signDownload(pid: string, email: string, idx = 0, ttlMs = DEFAULT_TTL_MS): string {
  const payload = Buffer.from(
    JSON.stringify({ pid, email, idx, exp: Date.now() + ttlMs } satisfies DownloadPayload),
  ).toString('base64url')
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function verifyDownload(token: string): DownloadPayload | null {
  try {
    const [payload, sig] = token.split('.')
    if (!payload || !sig) return null
    const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url')
    const a = Buffer.from(sig)
    const b = Buffer.from(expected)
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString()) as DownloadPayload
    if (!data.pid || typeof data.exp !== 'number' || Date.now() > data.exp) return null
    return data
  } catch {
    return null
  }
}
