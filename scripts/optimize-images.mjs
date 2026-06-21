import sharp from 'sharp'
import { readdir, stat, rename } from 'fs/promises'
import { join, extname, basename } from 'path'

const INPUT_DIR = 'public/images'

// Max width by image role — height scales proportionally
const WIDTH_MAP = {
  'hero':         1920,
  'page-header':  1920,
  'facility':     1400,
  'schooling':    1400,
  'venue':        1400,
  'vendors':      1400,
  'news':          900,
  'prize-list':    900,
  'team':          700,
}

function maxWidth(filename) {
  for (const [prefix, w] of Object.entries(WIDTH_MAP)) {
    if (filename.startsWith(prefix)) return w
  }
  return 1400
}

const files = (await readdir(INPUT_DIR)).filter(f =>
  /\.(jpe?g|png|webp)$/i.test(f)
)

let savedTotal = 0

for (const file of files) {
  const input = join(INPUT_DIR, file)
  const ext = extname(file)
  const base = basename(file, ext)
  const output = join(INPUT_DIR, `${base}.webp`)

  const before = (await stat(input)).size
  const width = maxWidth(base)

  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output)

  const after = (await stat(output)).size
  const saving = ((1 - after / before) * 100).toFixed(0)
  savedTotal += (before - after)

  console.log(`${file.padEnd(40)} ${(before/1e6).toFixed(1)}MB → ${(after/1e6).toFixed(2)}MB  (${saving}% smaller)`)

  // Keep original as .bak so you can verify before deleting
  if (output !== input) await rename(input, `${input}.bak`)
}

console.log(`\nTotal saved: ${(savedTotal/1e6).toFixed(1)} MB`)
console.log('Original files renamed to .bak — delete them once you verify the site looks good.')
