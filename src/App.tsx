/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCloud } from "./components/LogoCloud";
import { Features } from "./components/Features";
import { BentoGrid } from "./components/BentoGrid";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-green/30">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <BentoGrid />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
