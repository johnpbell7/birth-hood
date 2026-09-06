import { NextRequest, NextResponse } from 'next/server'
import { verifyDownload, isDownloadConfigured } from '@/lib/download-token'
import { getShopProductsByIds } from '@/lib/sanity-queries'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!isDownloadConfigured()) {
    return new NextResponse('Downloads not configured.', { status: 503 })
  }

  const token = req.nextUrl.searchParams.get('token') ?? ''
  const payload = verifyDownload(token)
  if (!payload) {
    return new NextResponse('This download link is invalid or has expired.', { status: 403 })
  }

  const [product] = await getShopProductsByIds([payload.pid])
  const file = product?.files?.[payload.idx ?? 0]
  if (!file?.url) {
    return new NextResponse('File not found.', { status: 404 })
  }

  // Stream the file through so the underlying CDN URL is never exposed, and
  // the browser downloads it with a friendly filename.
  const fileRes = await fetch(file.url)
  if (!fileRes.ok || !fileRes.body) {
    return new NextResponse('Could not fetch the file.', { status: 502 })
  }

  // Buyers should get a file named after the resource, not whatever the upload
  // happened to be called. The label wins, then the original filename.
  const ext = (file.name?.match(/\.[a-z0-9]+$/i)?.[0] ?? '').toLowerCase()
  const base = (file.label || product.title || 'birth-hood')
    .replace(/[\\/:*?"<>|]+/g, '')
    .trim()
  const fileName = file.label ? `${base}${ext}` : file.name || `${base}${ext}`
  const headers = new Headers()
  headers.set('Content-Type', fileRes.headers.get('content-type') || 'application/octet-stream')
  const len = fileRes.headers.get('content-length')
  if (len) headers.set('Content-Length', len)
  headers.set('Content-Disposition', `attachment; filename="${fileName}"`)
  headers.set('Cache-Control', 'private, no-store')

  return new NextResponse(fileRes.body, { status: 200, headers })
}
