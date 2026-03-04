/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Home } from "./pages/Home";
import { HealthcareSolution } from "./pages/HealthcareSolution";
import { LegalSolution } from "./pages/LegalSolution";
import { FinancialSolution } from "./pages/FinancialSolution";
import { About } from "./pages/About";
import { GetStarted } from "./pages/GetStarted";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-brand-green/30">
      <AnimatedBackground />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
          <Route path="/solutions/legal" element={<LegalSolution />} />
          <Route path="/solutions/financial" element={<FinancialSolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
