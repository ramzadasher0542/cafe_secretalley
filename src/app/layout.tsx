import type { Metadata } from "next";
import { Bungee, Caveat, Kalam, Outfit, Permanent_Marker, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const permanent = Permanent_Marker({
  variable: "--font-permanent",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafesecretalley.lk"),
  title: "Cafe Secret Alley · Kandy's Best Kept Secret",
  description:
    "A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of Kandy. Micro-roasted specialty coffee, all-day brunch, and curated cocktails.",
  keywords: [
    "Cafe Secret Alley",
    "Kandy cafe",
    "Sri Lanka coffee",
    "Australian Sri Lankan fusion",
    "brunch Kandy",
    "specialty coffee Kandy",
    "micro roastery",
  ],
  authors: [{ name: "Cafe Secret Alley" }],
  icons: {
    icon: "/images-optimized/favicon.png",
  },
  openGraph: {
    title: "Cafe Secret Alley · Kandy's Best Kept Secret",
    description:
      "A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of Kandy.",
    url: "https://cafesecretalley.lk",
    siteName: "Cafe Secret Alley",
    type: "website",
    images: [{ url: "/images-optimized/hero-exterior.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Secret Alley · Kandy's Best Kept Secret",
    description:
      "A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of Kandy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jakarta.variable} ${bungee.variable} ${kalam.variable} ${permanent.variable} ${caveat.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}

      </body>
    </html>
  );
}
