import { ArrowUpRight, Bell, MoreVertical, ShieldAlert, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-green/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      {/* Circuit lines background (simplified with CSS) */}
      <div className="absolute inset-0 opacity-10 -z-10" style={{
        backgroundImage: `radial-gradient(circle at center, transparent 0%, var(--color-brand-bg) 70%), linear-gradient(to right, var(--color-brand-green) 1px, transparent 1px), linear-gradient(to bottom, var(--color-brand-green) 1px, transparent 1px)`,
        backgroundSize: `100% 100%, 40px 40px, 40px 40px`
      }} />

      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
        Protect your data with <br className="hidden md:block" />
        <span className="text-brand-text-muted">next-generation AI</span>
      </h1>
      
      <p className="text-brand-text-muted text-lg max-w-2xl mx-auto mb-10">
        Our AI-powered cybersecurity system identifies and neutralizes threats in real time, protecting personal and corporate data.
      </p>

      <button className="px-8 py-3 rounded-full bg-brand-green text-brand-bg font-semibold hover:bg-brand-green/90 transition-colors shadow-[0_0_20px_rgba(0,208,132,0.4)] mb-24">
        Launch app
      </button>

      {/* Visual Centerpiece */}
      <div className="relative w-full max-w-5xl mx-auto h-[500px] flex justify-center items-center">
        
        {/* Central Phone Mockup */}
        <div className="relative z-20 w-[280px] h-[580px] bg-white rounded-[40px] p-2 shadow-2xl border-4 border-gray-800">
          <div className="w-full h-full bg-gray-50 rounded-[32px] overflow-hidden flex flex-col relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-30"></div>
            
            {/* Phone Header */}
            <div className="pt-10 px-6 pb-4 flex justify-between items-center bg-white">
              <div className="w-6 h-1 bg-gray-300 rounded-full" />
              <div className="flex gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <div className="w-6 h-6 rounded-full bg-gray-200" />
              </div>
            </div>

            {/* Phone Content */}
            <div className="flex-1 px-6 flex flex-col items-center pt-8 bg-white">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Circular Progress */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" strokeDasharray="282" strokeDashoffset="100" className="opacity-50" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-brand-green)" strokeWidth="8" strokeDasharray="282" strokeDashoffset="50" strokeLinecap="round" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Score</span>
                  <span className="text-4xl font-bold text-gray-900">80.9<span className="text-brand-green text-lg">â</span></span>
                  <span className="text-[10px] text-gray-400 mt-1">Last update: 30s ago</span>
                </div>
              </div>

              <div className="w-full mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-900 font-semibold">Data security</h3>
                  <span className="text-xs text-gray-400">Details</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">New<br/>detections</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">136</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">Prevented<br/>attacks</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">32</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fade out bottom of phone */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent z-40 pointer-events-none" />
          </div>
        </div>

        {/* Floating Cards */}
        
        {/* Top Left: Prevented Attacks */}
        <div className="absolute top-10 left-0 md:left-[10%] z-10 bg-brand-card border border-brand-border rounded-2xl p-5 w-64 shadow-2xl backdrop-blur-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="text-brand-text-muted font-medium">Prevented<br/>attacks</span>
            <ArrowUpRight className="w-5 h-5 text-brand-text-muted" />
          </div>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-semibold text-white">172</span>
            <span className="px-2 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-medium mb-1">+11.5%</span>
          </div>
        </div>

        {/* Bottom Left: Alerts Chart */}
        <div className="absolute bottom-20 left-4 md:left-[15%] z-10 bg-brand-card border border-brand-border rounded-2xl p-5 w-64 shadow-2xl backdrop-blur-sm">
          <div className="flex justify-between items-start mb-6">
            <span className="text-white font-medium">Alerts</span>
            <ArrowUpRight className="w-5 h-5 text-brand-text-muted" />
          </div>
          <div className="flex items-end gap-2 h-16 mb-2">
            <div className="w-1/3 bg-brand-green rounded-t-sm h-full relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-brand-text-muted opacity-0 group-hover:opacity-100 transition-opacity">Critical</div>
            </div>
            <div className="w-1/3 bg-brand-green/50 rounded-t-sm h-2/3 relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-brand-text-muted opacity-0 group-hover:opacity-100 transition-opacity">High</div>
            </div>
            <div className="w-1/3 bg-brand-green/20 rounded-t-sm h-1/3 relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-brand-text-muted opacity-0 group-hover:opacity-100 transition-opacity">Low</div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-brand-text-muted">
            <span>â 45%</span>
            <span>â 33%</span>
            <span>â 22%</span>
          </div>
        </div>

        {/* Top Right: Top 3 Alerts */}
        <div className="absolute top-4 right-0 md:right-[10%] z-10 bg-brand-card border border-brand-border rounded-2xl p-5 w-72 shadow-2xl backdrop-blur-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Top 3 Alerts</span>
            <MoreVertical className="w-5 h-5 text-brand-text-muted" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs text-brand-text-muted w-12">Critical</span>
              <span className="text-sm text-white">Multi-stage attack</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs text-brand-text-muted w-12">High</span>
              <span className="text-sm text-white">Phishing Emails</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs text-brand-text-muted w-12">High</span>
              <span className="text-sm text-white">API abuse for data theft</span>
            </div>
          </div>
        </div>

        {/* Bottom Right: Remediated detections */}
        <div className="absolute bottom-32 right-4 md:right-[15%] z-10 bg-brand-card border border-brand-border rounded-2xl p-5 w-64 shadow-2xl backdrop-blur-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="text-white font-medium">Remediated<br/>detections</span>
            <ArrowUpRight className="w-5 h-5 text-brand-text-muted" />
          </div>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-semibold text-brand-green">73</span>
            <span className="px-2 py-1 rounded-full bg-brand-border text-white text-xs font-medium mb-1">+10.7%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
