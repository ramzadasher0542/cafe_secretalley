// Menu data — single source of truth for the chalkboard menu
export type MenuItem = {
  name: string;
  price?: string;
  note?: string;
  tag?: "signature" | "veg" | "spicy" | "new";
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "smoothie-bowls",
    title: "Smoothie Bowls",
    subtitle: "Tropical. Bright. Built for the Kandy heat.",
    items: [
      { name: "Tropical Smoothie Bowl", tag: "signature", note: "Mango · banana · granola · coconut" },
      { name: "Sunshine Bliss", price: "1,990", note: "Papaya · passionfruit · honeycomb" },
    ],
  },
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
  {
    id: "all-day-breakfast",
    title: "All Day Breakfast",
    subtitle: "Served 7am to close. No clock-watching.",
    items: [
      { name: "Turkish Eggs", price: "2,090", tag: "signature", note: "Garlic yoghurt · chilli butter · sourdough" },
      { name: "Pumpkin Toast with Scrambled Eggs", note: "Roast pumpkin · feta · dukkah" },
      { name: "Avo Sandwiches", note: "Smashed avo · lime · chilli · seeded bread" },
      { name: "Pancake with Chocolate Sauce", price: "1,990", note: "Stacked · vanilla cream · cocoa nibs" },
    ],
  },
  {
    id: "cakes-and-bakes",
    title: "Cakes & Bakes",
    subtitle: "Baked in-house, daily.",
    items: [
      { name: "Chocolate Brownie with Ice Cream", price: "990", tag: "signature", note: "Warm fudge · vanilla bean scoop" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle: "Cool down. Pour over. Sip slow.",
    items: [
      { name: "Lime Iced Tea", note: "Mint · raw sugar · lemon wheel" },
      { name: "Mango Lassi", price: "890", note: "House-cultured yoghurt · Alphonso" },
      { name: "Brownie Shake", note: "Blended brownie · vanilla ice cream" },
    ],
  },
];

export const NAV_LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export const CONTACT = {
  address: "10/1/1/1, E L Senanayake Veediya, Kandy 20000",
  addressShort: "E L Senanayake Veediya, Kandy",
  hours: "Open Daily · 7:00 AM – 9:00 PM",
  hoursShort: "7 AM – 9 PM · Daily",
  phone: "0817 474 933",
  phoneIntl: "+94817474933",
  priceRange: "Rs 1,000 – 5,000",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Secret+Alley+Kandy",
  mapsEmbed:
    "https://www.google.com/maps?q=Cafe%20Secret%20Alley%2C%20E%20L%20Senanayake%20Veediya%2C%20Kandy%2020000&output=embed",
  instagram: "https://www.instagram.com/cafesecretalley",
  facebook: "https://www.facebook.com/cafesecretalley",
  ubereats: "https://www.ubereats.com/lk",
  rating: 4.7,
  reviewCount: 2026,
  avgStay: "45 min – 4 hrs",
  instagramFollowers: "6.3K+",
};
