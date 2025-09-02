// app/page.tsx
import type { ReactNode } from "react";
import cfg from "@/lib/site.config";
import Hero from "@/components/Hero";
import CutsGrid from "@/components/Cortes";
import Specialists from "@/components/Specialists";
import About from "@/components/Nosotros";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  const sections: Record<string, ReactNode> = {
    hero:         <Hero data={cfg.content.hero} brand={cfg.brand} />,
    cuts:         <CutsGrid items={cfg.content.cuts} />,
    specialists:  <Specialists list={cfg.content.specialists} />,
    about:        <About data={cfg.content.about} />,
    reviews:      <Reviews list={cfg.content.reviews} />,
    contact:      <Contact data={cfg.content.contact} brand={cfg.brand} />,
  };

  return <>{cfg.sectionsOrder.map((id) => <div key={id}>{sections[id]}</div>)}</>;
}
