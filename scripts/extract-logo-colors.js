/* eslint-disable @typescript-eslint/no-require-imports */
// Extract dominant colors from SA Logo to build the brand palette
const sharp = require('sharp');
const fs = require('fs');

(async () => {
  const { data, info } = await sharp('/home/z/my-project/public/images/logo.jpg')
    .resize({ width: 100, height: 100, fit: 'cover' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Bucket pixels by hue to find dominant blue + dominant yellow
  const buckets = { blue: { count: 0, r: 0, g: 0, b: 0 }, yellow: { count: 0, r: 0, g: 0, b: 0 }, dark: { count: 0, r: 0, g: 0, b: 0 }, other: { count: 0, r: 0, g: 0, b: 0 } };
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // Skip near-white
    if (r > 235 && g > 235 && b > 235) continue;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const delta = max - min;
    // Blue: b is dominant
    if (b > r && b > g && b > 60) {
      buckets.blue.count++; buckets.blue.r += r; buckets.blue.g += g; buckets.blue.b += b;
    }
    // Yellow: r+g high, b low
    else if (r > 150 && g > 120 && b < r * 0.7) {
      buckets.yellow.count++; buckets.yellow.r += r; buckets.yellow.g += g; buckets.yellow.b += b;
    }
    // Dark: low overall
    else if (max < 80) {
      buckets.dark.count++; buckets.dark.r += r; buckets.dark.g += g; buckets.dark.b += b;
    }
    else {
      buckets.other.count++; buckets.other.r += r; buckets.other.g += g; buckets.other.b += b;
    }
  }

  for (const [name, b] of Object.entries(buckets)) {
    if (b.count === 0) continue;
    const r = Math.round(b.r / b.count);
    const g = Math.round(b.g / b.count);
    const bl = Math.round(b.b / b.count);
    const hex = '#' + [r, g, bl].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
    console.log(`${name.padEnd(8)} count=${String(b.count).padStart(5)}  rgb(${r}, ${g}, ${bl})  ${hex}`);
  }
})();
