import type { Metadata } from "next";
import { Bungee, Caveat, Permanent_Marker, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const permanent = Permanent_Marker({
  variable: "--font-permanent",
  subsets: ["latin"],
  weight: "400",
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
    icon: "/images-optimized/logo.webp",
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
        className={`${jakarta.variable} ${bungee.variable} ${caveat.variable} ${permanent.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
