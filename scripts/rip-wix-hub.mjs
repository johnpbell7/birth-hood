// Downloads the Hub documents that currently live on the old Wix site
// (birth-hood.co.uk/_files/ugd/...) so the migration can upload them to Sanity.
//
// Run: node scripts/rip-wix-hub.mjs
// Saves files to .migration-assets/hub/ and writes manifest.json there.

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT = join(ROOT, '.migration-assets', 'hub')
mkdirSync(OUT, { recursive: true })

const src = readFileSync(join(ROOT, 'app/hub/HubClient.tsx'), 'utf8')

// Capture title + href pairs that point at the Wix file store, with their group label.
const lines = src.split('\n')
let currentGroup = 'Resources'
const items = []
for (const line of lines) {
  const grp = line.match(/label:\s*'([^']+)'/)
  if (grp) currentGroup = grp[1]
  const m = line.match(/title:\s*'([^']+)',\s*href:\s*'(https:\/\/www\.birth-hood\.co\.uk\/_files\/[^']+)'/)
  if (m) items.push({ title: m[1], url: m[2], group: currentGroup })
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const manifest = []
let ok = 0, fail = 0

for (const it of items) {
  const ext = it.url.toLowerCase().includes('.docx') ? 'docx' : 'pdf'
  const filename = `${slug(it.title)}.${ext}`
  try {
    const res = await fetch(it.url, { redirect: 'follow' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    // Guard against Wix returning an HTML error page instead of the file
    const head = buf.subarray(0, 5).toString('latin1')
    const looksBinary = head.startsWith('%PDF') || head.startsWith('PK')
    writeFileSync(join(OUT, filename), buf)
    manifest.push({ title: it.title, group: it.group, filename, bytes: buf.length, ext, ok: looksBinary })
    console.log(`${looksBinary ? '✅' : '⚠️ '} ${filename.padEnd(40)} ${(buf.length/1024).toFixed(0)} KB  (${it.group})`)
    ok++
  } catch (e) {
    manifest.push({ title: it.title, group: it.group, filename, error: String(e) })
    console.log(`❌ ${filename.padEnd(40)} ${e}`)
    fail++
  }
}

writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2))
console.log(`\nDone: ${ok} downloaded, ${fail} failed. Manifest → .migration-assets/hub/manifest.json`)
