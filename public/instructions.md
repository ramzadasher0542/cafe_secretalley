# Cafe Secret Alley — How to Add New Photos & Menu Items

> A friendly, no-code-required guide for the café owner.
> Estimated time per new photo: **2 minutes**.

---

## Table of Contents
1. [Where things live](#1-where-things-live)
2. [Adding a new gallery photo](#2-adding-a-new-gallery-photo)
3. [Adding a new menu item](#3-adding-a-new-menu-item)
4. [Adding a whole new menu category](#4-adding-a-whole-new-menu-category)
5. [Image size & quality guidelines](#5-image-size--quality-guidelines)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Where things live

| Folder / File | What it is |
|---------------|------------|
| `/public/images-raw/` | Drop your new photos here (JPG or PNG, any size) |
| `/public/images-optimized/` | The optimized WebP versions used by the website (auto-generated) |
| `/scripts/optimize-images.js` | The script that converts your raw photos → optimized WebP |
| `/src/lib/gallery-data.ts` | The list of photos shown in the Gallery section |
| `/src/lib/cafe-data.ts` | The list of menu items, prices, contact info |

> **Tip:** Create the `images-raw` folder if it doesn't exist yet: just right-click → New Folder.

---

## 2. Adding a new gallery photo

### Step 1 — Drop your photo
Put your photo (e.g., `my-new-coffee.jpg`) into `/public/images-raw/`.

### Step 2 — Add it to the optimize script
Open `/scripts/optimize-images.js` in any text editor. Find the `jobs` list (it looks like this):

```js
const jobs = [
  { in: 'hero-exterior.png',  out: 'hero-exterior.webp',  width: 2400 },
  { in: 'hero-interior.png',  out: 'hero-interior.webp',  width: 2400 },
  // ...more entries...
];
```

Add a new line at the bottom of the list (before the closing `];`):

```js
  { in: 'my-new-coffee.jpg', out: 'my-new-coffee.webp', width: 1400 },
```

### Step 3 — Run the optimizer
Open a terminal in the project folder and run:

```bash
node scripts/optimize-images.js
```

You should see `OK my-new-coffee.webp (0.X MB)`. The optimized file now lives in `/public/images-optimized/`.

### Step 4 — Add it to the gallery list
Open `/src/lib/gallery-data.ts`. Scroll to the `GALLERY_TILES` array — it looks like this:

```ts
export const GALLERY_TILES: GalleryTile[] = [
  {
    src: "/images-optimized/hero-exterior.webp",
    alt: "Outdoor blue wall with large yellow SECRET text at Cafe Secret Alley",
    caption: "the blue & yellow wall",
    tall: true,    // optional — makes it portrait (3:4)
  },
  // ...more entries...
];
```

Copy any block and edit it. For example, paste this at the end (before the closing `];`):

```ts
  {
    src: "/images-optimized/my-new-coffee.webp",
    alt: "A close-up of our micro-roasted flat white",
    caption: "morning fuel",
    wide: true,    // optional — makes it landscape (4:3)
  },
```

### Step 5 — Save & check the preview
Save the file. The dev server auto-reloads — check the Preview Panel. Your new photo will appear in the masonry grid automatically. The layout reflows on its own.

---

## 3. Adding a new menu item

### Step 1 — Open the menu data file
Open `/src/lib/cafe-data.ts`. Find the category you want to add to (e.g., "Caffeine Supply"):

```ts
{
  id: "caffeine-supply",
  title: "Caffeine Supply",
  subtitle: "Micro-roasted in-house. Pulled with care.",
  items: [
    { name: "Americano", price: "350", tag: "signature" },
    { name: "Cappuccino", note: "Micro-roasted specialty coffee" },
    { name: "Latte with Coconut Milk", note: "Oat · soy also available" },
  ],
},
```

### Step 2 — Add your item
Inside the `items: [ ... ]` list, add a new line. Copy the format of an existing item. Examples:

**With price:**
```ts
    { name: "Flat White", price: "450", note: "Double ristretto · silky microfoam" },
```

**With signature tag:**
```ts
    { name: "Magic", price: "480", tag: "signature", note: "Melbourne-style double ristretto" },
```

**Just a name (no price):**
```ts
    { name: "Filter Coffee" },
```

### Step 3 — Save & check
Save the file. The new item appears instantly in the chalkboard menu card. No layout changes needed.

### Field reference

| Field | Required? | What it does |
|-------|-----------|--------------|
| `name` | ✅ Yes | The item name, shown in chalk font |
| `price` | ❌ Optional | LKR amount as a string (e.g., `"350"` or `"1,290"`) |
| `note` | ❌ Optional | Small description shown below the name |
| `tag` | ❌ Optional | One of: `"signature"`, `"veg"`, `"spicy"`, `"new"` — adds a colored badge |

---

## 4. Adding a whole new menu category

This is a two-step change: add the data, then add a card to the bento grid.

### Step 1 — Add the category to the data file
In `/src/lib/cafe-data.ts`, add a new category to the `MENU` array:

```ts
{
  id: "cocktails",                  // unique id
  title: "Curated Cocktails",
  subtitle: "Evening pours. Local spirits.",
  items: [
    { name: "Arrack Sour", price: "1,500", tag: "signature", note: "Sri Lankan arrack · lime · egg white" },
    { name: "G&T Kandy", price: "1,400", note: "Gin · tonic · kaffir lime" },
  ],
},
```

### Step 2 — Add a card to the bento grid
Open `/src/components/site/MenuSection.tsx`. Near the top, after the existing `const drinks = ...` line, add:

```ts
const cocktails = MENU.find((c) => c.id === "cocktails")!;
```

Then scroll down to the bento grid (search for `{/* Bento box grid`). After the last `<motion.div>` block (the Drinks card), add a new one:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
  className="lg:col-span-2"
>
  {renderCard(cocktails, "#FEF852")}
</motion.div>
```

> **Layout tip:** `lg:col-span-1` = narrow card (1 of 4 columns). `lg:col-span-2` = wide card (2 of 4 columns). `lg:row-span-2` = tall card (spans 2 rows, like Caffeine Supply).

Save both files. Your new category appears in the bento grid.

---

## 5. Image size & quality guidelines

| Where it goes | Recommended dimensions | Recommended `width` in script |
|---------------|------------------------|-------------------------------|
| Hero slider | 2400 × 1600 px (landscape) | `2400` |
| Gallery (landscape) | 1600 × 1200 px | `1400` |
| Gallery (portrait) | 1200 × 1600 px | `1000` |
| Menu item photo | 800 × 600 px | `800` |

**Good to know:**
- The optimizer automatically applies a warm color grade so all photos feel cohesive.
- Source photos up to ~10MB are fine — the optimizer gets them under 1MB.
- Photos are converted to WebP for fast loading on mobile.
- The optimizer auto-rotates phone photos based on EXIF data.
- Filenames are case-sensitive — `My-Photo.jpg` and `my-photo.jpg` are different.

---

## 6. Troubleshooting

**"My new photo doesn't show up"**
- Check the `src` path matches exactly (case-sensitive).
- Confirm the file exists in `/public/images-optimized/`.
- Check the browser console (F12 → Console) for 404 errors.
- Make sure you ran `node scripts/optimize-images.js` after adding the file.

**"The optimize script says SKIP (missing)"**
- The `in:` filename doesn't match a file in `/public/images-raw/`. Check spelling and extension.

**"My photo looks blurry"**
- Increase the `width` value in the optimize script (e.g., from `1400` to `2000`).
- Re-run `node scripts/optimize-images.js`.

**"The bento grid looks weird after I added a category"**
- Check that you copied the `<motion.div>` block exactly.
- Make sure the `className` value is one of: `lg:col-span-1`, `lg:col-span-2`, or `lg:row-span-2`.
- Each card needs a unique `key` if you add motion divs.

**"I broke the code and don't know how to fix it"**
- Don't panic. The original files are in version control. Ask your developer friend to run `git diff` to see what changed.

---

## Quick command reference

```bash
# Optimize all raw photos → WebP
node scripts/optimize-images.js

# Run the website locally (if not already running)
bun run dev

# Check for code errors
bun run lint
```

---

Happy updating! ☕🇱🇰
If you get stuck, just send a screenshot of the error to your dev friend — they'll know what to do.
