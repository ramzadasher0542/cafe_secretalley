/* eslint-disable @typescript-eslint/no-require-imports */
// Generate a small nav-friendly logo (96px) and a favicon
const sharp = require('sharp');
const fs = require('fs');

(async () => {
  // Small logo for nav (96x96)
  await sharp('/home/z/my-project/public/images/logo.jpg')
    .resize({ width: 192, height: 192, fit: 'cover', position: 'center' })
    .webp({ quality: 90, effort: 4 })
    .toFile('/home/z/my-project/public/images-optimized/logo-nav.webp');

  const sizeNav = (fs.statSync('/home/z/my-project/public/images-optimized/logo-nav.webp').size / 1024).toFixed(1);
  console.log(`OK logo-nav.webp (${sizeNav} KB)`);

  // Favicon (32x32 PNG)
  await sharp('/home/z/my-project/public/images/logo.jpg')
    .resize({ width: 64, height: 64, fit: 'cover', position: 'center' })
    .png()
    .toFile('/home/z/my-project/public/images-optimized/favicon.png');

  const sizeFav = (fs.statSync('/home/z/my-project/public/images-optimized/favicon.png').size / 1024).toFixed(1);
  console.log(`OK favicon.png (${sizeFav} KB)`);
})();
