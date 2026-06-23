# Cafe Secret Alley — How to Add Your Own Photos

This guide walks you through adding your own menu item photos and gallery images to the Cafe Secret Alley website. No coding experience needed — just follow the steps below.

---

## 📁 Where things live

| Folder | What goes here |
|--------|----------------|
| `/public/images-optimized/` | All current optimized WebP images used on the live site |
| `/public/images-raw/` | (Create this) — drop your original photos here before optimizing |
| `/scripts/optimize-images.js` | Script that converts + color-grades your photos to WebP |

---

## ☕ Adding Menu Item Photos

The current menu is a stylized **digital chalkboard** with text-only items. If you want to add a photo for a specific menu item (e.g., Turkish Eggs), follow these steps:

### Step 1 — Add your photo
1. Drop your photo (`.jpg` or `.png`) into `/public/images-raw/`
   - If the folder doesn't exist, create it.
2. Name it clearly, e.g., `turkish-eggs.jpg`, `tropical-smoothie-bowl.jpg`.

### Step 2 — Optimize it
Open `/scripts/optimize-images.js` and add a new entry to the `jobs` array:

```js
{ in: 'turkish-eggs.jpg', out: 'turkish-eggs.webp', width: 800 },
```

Then run from the project root:

```bash
node scripts/optimize-images.js
```

The optimized WebP will appear in `/public/images-optimized/`.

### Step 3 — Wire it into the menu
Open `/src/lib/cafe-data.ts`. Find the menu item you want to update and add an `image` field:

```ts
{ name: "Turkish Eggs", price: "2,090", tag: "signature",
  note: "Garlic yoghurt · chilli butter · sourdough",
  image: "/images-optimized/turkish-eggs.webp" },
```

Then open `/src/components/site/MenuSection.tsx` and update the item renderer to show the image when present. Look for the `<li key={item.name}>` block and add at the top of the `<div>` content:

```tsx
{item.image && (
  <img
    src={item.image}
    alt={item.name}
    loading="lazy"
    className="w-full h-32 object-cover rounded-xl mb-2"
  />
)}
```

### Step 4 — Save and refresh
The dev server auto-reloads. Check the Preview Panel to see your photo live in the menu.

---

## 🖼️ Adding Gallery Photos

The gallery is a masonry layout in `/src/components/site/Gallery.tsx`. Each tile is defined in the `TILES` array at the top of the file.

### Step 1 — Add and optimize your photo
Same as menu steps 1 & 2 above. Use width `1400` for landscape photos, `1000` for portrait.

### Step 2 — Add a tile
Open `/src/components/site/Gallery.tsx` and find the `TILES` array. Add a new entry:

```ts
{
  src: "/images-optimized/your-new-photo.webp",
  alt: "Description of the photo for screen readers",
  caption: "the caption shown in chalk handwriting",
  tall: true,  // optional: makes it 3:4 portrait
  // wide: true,  // optional: makes it 4:3 landscape
},
```

### Step 3 — Save and refresh
The new tile will automatically appear in the masonry grid. The layout re-flows on its own.

---

## 🎨 Tips for best results

- **Resolution**: Aim for at least 1200px wide. The optimizer will downscale if needed.
- **Aspect ratio**: Crop close to 4:3 (landscape) or 3:4 (portrait) for the cleanest layout.
- **Color tone**: The optimizer applies a warm grade automatically. If your photo is already color-graded, you may want to skip the tint — see the `if (job.in !== 'logo.jpg')` line in the script for how to skip.
- **File size**: Source photos up to ~10MB are fine. The optimizer will get them under 1MB.
- **Alt text**: Always write a descriptive `alt` for accessibility and SEO.

---

## 🚀 Re-deploying

After you've added photos and confirmed they look good in the Preview Panel, run:

```bash
bun run build
```

This produces a production build. The deploy step depends on your hosting (Vercel / Netlify / custom Node server).

---

## 🆘 Troubleshooting

**Photo doesn't show up**
- Check the `src` path matches exactly (case-sensitive).
- Confirm the file exists in `/public/images-optimized/`.
- Check the browser console (F12) for 404 errors.

**Photo looks blurry**
- Increase the `width` value in the optimize script (e.g., from 800 to 1200).
- Re-run `node scripts/optimize-images.js`.

**Layout looks broken**
- Make sure you didn't break the JSX structure when editing `Gallery.tsx` or `MenuSection.tsx`.
- Check the terminal where the dev server runs for compile errors.

---

Happy photo-adding! 📸☕
