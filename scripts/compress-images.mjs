import sharp from 'sharp'
import { readdirSync, statSync, unlinkSync } from 'fs'

const DIR = 'public/images'
const kb = (n) => (n / 1024).toFixed(0) + ' KB'

// Big photos → resize + recompress JPEG (overwrite in place)
const bigJpegs = ['yoga-class.jpg', 'leanne-portrait.jpg', 'leanne-speaking.jpg']
// Photo PNGs (wasteful format) → convert to JPEG, flattened on white
const pngToJpeg = ['doula-support.png', 'hypnobirthing-class.png']

let before = 0, after = 0
for (const f of readdirSync(DIR)) {
  const p = `${DIR}/${f}`
  if (!statSync(p).isFile()) continue
  before += statSync(p).size
}

async function run() {
  // 1. Resize + recompress the oversized JPEGs
  for (const f of bigJpegs) {
    const p = `${DIR}/${f}`
    const buf = await sharp(p)
      .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer()
    await sharp(buf).toFile(p + '.tmp')
    unlinkSync(p); await sharp(p + '.tmp').toFile(p); unlinkSync(p + '.tmp')
    console.log(`✓ ${f} → ${kb(statSync(p).size)}`)
  }

  // 2. Convert photo PNGs → JPEG (flatten on white), resize, delete the PNG
  for (const f of pngToJpeg) {
    const src = `${DIR}/${f}`
    const out = `${DIR}/${f.replace(/\.png$/, '.jpg')}`
    await sharp(src)
      .flatten({ background: '#ffffff' })
      .resize({ width: 1280, height: 1280, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(out)
    unlinkSync(src)
    console.log(`✓ ${f} → ${out.split('/').pop()} ${kb(statSync(out).size)} (was PNG)`)
  }

  // 3. Optimise the dots pattern (keep PNG)
  const dots = `${DIR}/dots-pattern.png`
  try {
    const buf = await sharp(dots).png({ compressionLevel: 9, palette: true, quality: 80 }).toBuffer()
    await sharp(buf).toFile(dots + '.tmp'); unlinkSync(dots); await sharp(dots + '.tmp').toFile(dots); unlinkSync(dots + '.tmp')
    console.log(`✓ dots-pattern.png → ${kb(statSync(dots).size)}`)
  } catch (e) { console.log('dots-pattern skipped:', e.message) }

  for (const f of readdirSync(DIR)) {
    const p = `${DIR}/${f}`
    if (statSync(p).isFile()) after += statSync(p).size
  }
  console.log(`\nTotal: ${kb(before)} → ${kb(after)}  (saved ${((1 - after / before) * 100).toFixed(0)}%)`)
}
run().catch((e) => { console.error(e); process.exit(1) })
