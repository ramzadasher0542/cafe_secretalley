/**
 * ============================================================================
 *  CAFE SECRET ALLEY — GALLERY DATA
 * ============================================================================
 *  This is the SINGLE source of truth for the masonry gallery.
 *
 *  ── TO ADD A NEW GALLERY PHOTO ──────────────────────────────────────────
 *  1. Drop your photo into /public/images-raw/
 *  2. Run:  node scripts/optimize-images.js  (see instructions.md)
 *  3. Copy any object below and edit the fields:
 *
 *    {
 *      src: "/images-optimized/your-photo.webp",
 *      alt: "Describe the photo for screen readers",
 *      caption: "shown in chalk handwriting",
 *      tall: true,    // optional — makes it portrait (3:4)
 *      wide: true,    // optional — makes it landscape (4:3)
 *      // (omit both for square aspect)
 *    },
 *
 *  The masonry grid auto-reflows — no layout code to touch.
 * ============================================================================
 */

export type GalleryTile = {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
  wide?: boolean;
};

export const GALLERY_TILES: GalleryTile[] = [
  {
    src: "/images-optimized/hero-exterior.webp",
    alt: "Outdoor blue wall with large yellow SECRET text at Cafe Secret Alley",
    caption: "the blue & yellow wall",
    tall: true,
  },
  {
    src: "/images-optimized/hero-interior.webp",
    alt: "Bright yellow cafe interior with wooden accents",
    caption: "the sunshine room",
  },
  {
    src: "/images-optimized/alley-minions.webp",
    alt: "Colorful artsy alleyway with vibrant street art",
    caption: "the alleyway",
    wide: true,
  },
  {
    src: "/images-optimized/foreign-women.webp",
    alt: "Visitor enjoying coffee at Cafe Secret Alley",
    caption: "good company",
  },
  {
    src: "/images-optimized/coffee-cake.webp",
    alt: "Coffee and cake served at Cafe Secret Alley",
    caption: "coffee + cake = love",
    tall: true,
  },
  {
    src: "/images-optimized/sl-women.webp",
    alt: "Friends relaxing inside Cafe Secret Alley",
    caption: "stay a while",
  },
  {
    src: "/images-optimized/baby-visit.webp",
    alt: "Family visit at Cafe Secret Alley in Kandy",
    caption: "kandy moments",
  },
  {
    src: "/images-optimized/chalkboard.webp",
    alt: "Chalkboard menu at Cafe Secret Alley",
    caption: "today&rsquo;s menu",
    wide: true,
  },
];
