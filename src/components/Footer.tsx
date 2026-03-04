import { Plus, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-brand-border/50 bg-brand-bg pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-20">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
              <Plus className="w-5 h-5 text-brand-bg stroke-[3]" />
            </div>
            <span className="text-xl font-semibold tracking-tight">Clandestine</span>
          </div>
          <p className="text-brand-text-muted text-sm leading-relaxed">
            Next-generation AI cybersecurity protecting your data with intelligent threat detection and real-time response.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-2">Product</h4>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Features</a>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Integrations</a>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Pricing</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-2">Company</h4>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Our team</a>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Our values</a>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Blog</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-2">Resources</h4>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Downloads</a>
            <a href="#" className="text-brand-text-muted hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-brand-text-muted text-sm">
          Â© 2025 Clandestine. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-brand-text-muted">
          <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
