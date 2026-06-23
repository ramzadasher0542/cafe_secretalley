import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { SocialProof } from "@/components/site/SocialProof";
import { VisitUs } from "@/components/site/VisitUs";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <MenuSection />
        <Gallery />
        <SocialProof />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
