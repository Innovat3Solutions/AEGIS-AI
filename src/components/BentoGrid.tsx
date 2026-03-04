import { Fingerprint, Headphones, Shield, Zap } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <span className="text-xs font-bold tracking-widest text-brand-text-muted uppercase mb-4">Data Security</span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">All your security tools<br/>in one place</h2>
        <p className="text-brand-text-muted text-lg max-w-2xl">
          Our app analyzes vulnerabilities and strengthens your defenses,<br/>helping you stay one step ahead of cyber threats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        {/* Left Column */}
        <div className="md:col-span-1 row-span-2 bg-brand-card border border-brand-border rounded-[32px] p-8 flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-32 h-32 rounded-full bg-brand-green/20 flex items-center justify-center relative shadow-[0_0_40px_rgba(0,208,132,0.3)]">
              <div className="w-24 h-24 rounded-full bg-brand-green/40 flex items-center justify-center backdrop-blur-md">
                <span className="text-4xl font-bold text-white">AI</span>
              </div>
            </div>
          </div>
          <div className="mt-8 relative z-10">
            <h3 className="text-2xl font-semibold mb-3">AI for absolute security</h3>
            <p className="text-brand-text-muted">Our platform utilizes the latest AI algorithms to predict threats.</p>
          </div>
        </div>

        {/* Middle Column - Top */}
        <div className="md:col-span-1 row-span-1 bg-brand-card border border-brand-border rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/20 flex items-center justify-center">
              <Fingerprint className="w-6 h-6 text-brand-green" />
            </div>
            <span className="text-4xl font-bold">100%</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Security Guarantee</h3>
          <p className="text-brand-text-muted text-sm">AI encryption keeps your data safe.</p>
        </div>

        {/* Right Column - Top */}
        <div className="md:col-span-1 row-span-1 bg-brand-card border border-brand-border rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')]">
          <div className="bg-brand-bg/80 backdrop-blur-md border border-brand-border rounded-xl p-4 mb-6 shadow-xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-brand-green" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Potential threat detected!</h4>
              <p className="text-xs text-brand-text-muted">Please verify your details or update your security settings.</p>
            </div>
            <span className="text-[10px] text-brand-text-muted shrink-0">36m ago</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Instant threat alerts</h3>
          <p className="text-brand-text-muted text-sm">AI detects threats and notifies you immediately to protect your data.</p>
        </div>

        {/* Left Column - Bottom */}
        <div className="md:col-span-1 row-span-1 bg-brand-card border border-brand-border rounded-[32px] p-8 flex flex-col justify-end relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 mt-[-20px]">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(0,208,132,0.2)" strokeWidth="8" strokeLinecap="round" />
              <path d="M 10 50 A 40 40 0 0 1 70 20" fill="none" stroke="var(--color-brand-green)" strokeWidth="8" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-xs text-brand-text-muted font-medium">km/h</span>
              <span className="text-4xl font-bold">170</span>
            </div>
            <div className="absolute bottom-0 left-4 text-xs text-brand-text-muted">0</div>
            <div className="absolute bottom-0 right-4 text-xs text-brand-text-muted">240</div>
          </div>
          <div className="relative z-10 mt-auto pt-24">
            <h3 className="text-xl font-semibold mb-2">React faster than hackers</h3>
            <p className="text-brand-text-muted text-sm">Get alerts on threats and prevent them before they cause damage.</p>
          </div>
        </div>

        {/* Middle Column - Middle (Phone) */}
        <div className="md:col-span-1 row-span-2 bg-brand-card border border-brand-border rounded-[32px] p-8 flex flex-col relative overflow-hidden items-center justify-center">
          <div className="w-[220px] h-[450px] bg-white rounded-[32px] p-2 shadow-2xl border-4 border-gray-800 relative z-10 scale-90 origin-center">
            <div className="w-full h-full bg-gray-50 rounded-[24px] overflow-hidden flex flex-col relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-30"></div>
              <div className="pt-8 px-4 pb-4 flex justify-between items-center bg-white">
                <div className="w-5 h-1 bg-gray-300 rounded-full" />
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-200" />
                  <div className="w-5 h-5 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="flex-1 px-4 flex flex-col items-center pt-6 bg-white">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" strokeDasharray="282" strokeDashoffset="100" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-brand-green)" strokeWidth="8" strokeDasharray="282" strokeDashoffset="50" strokeLinecap="round" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">Score</span>
                    <span className="text-3xl font-bold text-gray-900">80.9</span>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-gray-900 font-semibold text-sm">Data security</h3>
                    <span className="text-[10px] text-gray-400">Details</span>
                  </div>
                  <div className="h-16 bg-gray-50 rounded-xl w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Bottom */}
        <div className="md:col-span-1 row-span-2 bg-brand-card border border-brand-border rounded-[32px] p-8 flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-32 h-40 rounded-full bg-brand-green/10 flex items-center justify-center relative shadow-[0_0_60px_rgba(0,208,132,0.2)]">
              <div className="absolute inset-0 rounded-full border border-brand-green/30 blur-[2px]" />
              <Shield className="w-16 h-16 text-brand-green" />
            </div>
          </div>
          <div className="mt-8 relative z-10">
            <h3 className="text-2xl font-semibold mb-3">Military-grade encryption</h3>
            <p className="text-brand-text-muted">Your data is protected by technology that meets global security standards.</p>
          </div>
        </div>

        {/* Middle Column - Bottom */}
        <div className="md:col-span-1 row-span-1 bg-brand-card border border-brand-border rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/20 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-brand-green" />
            </div>
            <span className="text-4xl font-bold">24/7</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-time monitoring</h3>
          <p className="text-brand-text-muted text-sm">Track activity and get security analytics 24/7.</p>
        </div>

      </div>
    </section>
  );
}
