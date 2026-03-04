import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* Main Footer */}
      <div>
        <div className="container-max py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <a href="/" className="inline-block mb-5">
                <img
                  src="/logo.png"
                  alt="Avenix AI"
                  className="h-10 w-auto"
                />
              </a>
              <p className="text-zinc-600 text-sm max-w-sm leading-relaxed mb-4">
                Private AI infrastructure for South Florida businesses. Enterprise capabilities with local, hands-on support.
              </p>
              <p className="text-xs text-zinc-700">
                Based in South Florida
              </p>
            </div>

            {/* Solutions */}
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">Solutions</p>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions/healthcare" className="text-sm text-zinc-500 hover:text-white transition-colors">Healthcare</Link>
                </li>
                <li>
                  <Link to="/solutions/legal" className="text-sm text-zinc-500 hover:text-white transition-colors">Legal</Link>
                </li>
                <li>
                  <Link to="/solutions/financial" className="text-sm text-zinc-500 hover:text-white transition-colors">Financial</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">Company</p>
              <ul className="space-y-3">
                <li>
                  <Link to="/get-started" className="text-sm text-zinc-500 hover:text-white transition-colors">How to Get Started</Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-zinc-500 hover:text-white transition-colors">About Us</Link>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-zinc-500 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-xs">
              © 2026 Avenix AI. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Powered By Section */}
      <div className="border-t border-[#141414]">
        <div className="container-max py-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] text-zinc-700 uppercase tracking-[0.2em]">
              Powered by South Florida Companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://innovat3solutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a1a1a] hover:border-[#262626] bg-[#0a0a0a] transition-all duration-300"
              >
                <span className="text-xs font-medium text-zinc-500 group-hover:text-white transition-colors">
                  INNOVAT3 Solutions
                </span>
              </a>
              <a
                href="https://noxtechnology.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a1a1a] hover:border-[#262626] bg-[#0a0a0a] transition-all duration-300"
              >
                <span className="text-xs font-medium text-zinc-500 group-hover:text-white transition-colors">
                  Nox Technology
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
