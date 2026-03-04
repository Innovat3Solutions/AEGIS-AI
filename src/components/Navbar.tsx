import { Menu, X, ChevronDown, Stethoscope, Scale, Landmark } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]"
          : "bg-transparent"
        }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-[72px] md:h-[90px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Avenix AI"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/#platform"
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Platform
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-72 bg-[#0f0f0f] border border-[#262626] rounded-xl shadow-2xl overflow-hidden transition-all duration-200 ${solutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                <div className="p-2">
                  <Link
                    to="/solutions/healthcare"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-brand-green transition-colors">Healthcare</p>
                      <p className="text-xs text-zinc-500">HIPAA compliant AI solutions</p>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/legal"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-brand-green transition-colors">Legal</p>
                      <p className="text-xs text-zinc-500">Privilege protected AI</p>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/financial"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                      <Landmark className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-brand-green transition-colors">Financial</p>
                      <p className="text-xs text-zinc-500">GLBA & FTC compliant AI</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/get-started"
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              How to Get Started
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              About
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Contact Sales
            </a>
            <button className="btn-primary text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[600px] border-t border-[#262626]" : "max-h-0"
          }`}
      >
        <div className="container-max py-6 bg-[#0a0a0a]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            <Link
              to="/#platform"
              className="py-3 text-base font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Platform
            </Link>

            {/* Mobile Solutions Section */}
            <div className="py-2">
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-3">Solutions</p>
              <div className="space-y-1 pl-4 border-l border-[#262626]">
                <Link
                  to="/solutions/healthcare"
                  className="flex items-center gap-3 py-2 text-sm text-zinc-400 hover:text-brand-green transition-colors"
                >
                  <Stethoscope className="w-4 h-4 text-brand-green" />
                  Healthcare
                </Link>
                <Link
                  to="/solutions/legal"
                  className="flex items-center gap-3 py-2 text-sm text-zinc-400 hover:text-brand-green transition-colors"
                >
                  <Scale className="w-4 h-4 text-brand-green" />
                  Legal
                </Link>
                <Link
                  to="/solutions/financial"
                  className="flex items-center gap-3 py-2 text-sm text-zinc-400 hover:text-brand-green transition-colors"
                >
                  <Landmark className="w-4 h-4 text-brand-green" />
                  Financial
                </Link>
              </div>
            </div>

            <Link
              to="/get-started"
              className="py-3 text-base font-medium text-zinc-400 hover:text-white transition-colors"
            >
              How to Get Started
            </Link>
            <Link
              to="/about"
              className="py-3 text-base font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[#262626]">
            <a
              href="#contact"
              className="text-center py-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Contact Sales
            </a>
            <button className="btn-primary w-full text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
