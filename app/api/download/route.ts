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
  if (!product?.fileUrl) {
    return new NextResponse('File not found.', { status: 404 })
  }

  // Stream the file through so the underlying CDN URL is never exposed, and
  // the browser downloads it with a friendly filename.
  const fileRes = await fetch(product.fileUrl)
  if (!fileRes.ok || !fileRes.body) {
    return new NextResponse('Could not fetch the file.', { status: 502 })
  }

  const fileName = product.fileName || `${product.title}`.replace(/[^\w.-]+/g, '-')
  const headers = new Headers()
  headers.set('Content-Type', fileRes.headers.get('content-type') || 'application/octet-stream')
  const len = fileRes.headers.get('content-length')
  if (len) headers.set('Content-Length', len)
  headers.set('Content-Disposition', `attachment; filename="${fileName}"`)
  headers.set('Cache-Control', 'private, no-store')

  return new NextResponse(fileRes.body, { status: 200, headers })
}
