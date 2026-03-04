import { Hero } from "../components/Hero";
import { LogoCloud } from "../components/LogoCloud";
import { Features } from "../components/Features";
import { BentoGrid } from "../components/BentoGrid";
import { LlmCarousel } from "../components/LlmCarousel";
import { Testimonials } from "../components/Testimonials";
import { FAQ, homeFAQs } from "../components/FAQ";

export function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <BentoGrid />
      <LlmCarousel />
      <Testimonials />
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about deploying private AI infrastructure."
        faqs={homeFAQs}
        accentColor="green"
      />
    </>
  );
}
