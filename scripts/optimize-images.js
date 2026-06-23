/* eslint-disable @typescript-eslint/no-require-imports */
// Image optimization script — uses sharp to resize + convert to WebP with warm color grade
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = '/home/z/my-project/public/images';
const outDir = '/home/z/my-project/public/images-optimized';

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Warm color grade — slight saturation boost, warm temperature
const warmGrade = (img) => img
  .modulate({ brightness: 1.02, saturation: 1.18, hue: -4 })
  .linear(1.05, -(0.02 * 255))
  .tint({ r: 255, g: 240, b: 210 });

const jobs = [
  { in: 'hero-exterior.png',  out: 'hero-exterior.webp',  width: 2400 },
  { in: 'hero-interior.png',  out: 'hero-interior.webp',  width: 2400 },
  { in: 'dashboard.png',      out: 'dashboard.webp',      width: 1600 },
  { in: 'chalkboard.png',     out: 'chalkboard.webp',     width: 1600 },
  { in: 'coffee-cake.jpg',    out: 'coffee-cake.webp',    width: 1400 },
  { in: 'logo.jpg',           out: 'logo.webp',           width: 600 },
  { in: 'sl-women.jpg',       out: 'sl-women.webp',       width: 1200 },
  { in: 'foreign-women.jpg',  out: 'foreign-women.webp',  width: 1200 },
  { in: 'alley-minions.jpg',  out: 'alley-minions.webp',  width: 1400 },
  { in: 'baby-visit.jpg',     out: 'baby-visit.webp',     width: 1400 },
];

(async () => {
  for (const job of jobs) {
    const inPath = path.join(srcDir, job.in);
    const outPath = path.join(outDir, job.out);
    if (!fs.existsSync(inPath)) {
      console.warn(`SKIP (missing): ${job.in}`);
      continue;
    }
    let pipeline = sharp(inPath, { failOn: 'none' })
      .rotate()
      .resize({ width: job.width, withoutEnlargement: true, fit: 'cover' })
      .removeAlpha();

    if (job.in !== 'logo.jpg') {
      pipeline = warmGrade(pipeline);
    }

    await pipeline
      .webp({ quality: 82, effort: 4 })
      .toFile(outPath);

    const sizeMB = (fs.statSync(outPath).size / 1024 / 1024).toFixed(2);
    console.log(`OK ${job.out} (${sizeMB} MB)`);
  }
  console.log('Done.');
})();
