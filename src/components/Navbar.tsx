import { Plus } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
          <Plus className="w-5 h-5 text-brand-bg stroke-[3]" />
        </div>
        <span className="text-xl font-semibold tracking-tight">Clandestine</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-brand-text-muted">
        <a href="#" className="hover:text-white transition-colors">Product</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Company</a>
        <a href="#" className="hover:text-white transition-colors">Blog</a>
      </div>

      <button className="px-5 py-2 rounded-full border border-brand-green text-brand-green text-sm font-medium hover:bg-brand-green/10 transition-colors">
        Launch app
      </button>
    </nav>
  );
}
