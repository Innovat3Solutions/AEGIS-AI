import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <span className="text-xs font-bold tracking-widest text-brand-text-muted uppercase mb-4">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Choose the perfect plan</h2>
        <p className="text-brand-text-muted text-lg max-w-2xl">
          Whatever your challenges, we offer plans that are right for you.<br/>Start with basic or unlock the full potential with premium solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Basic Plan */}
        <div className="bg-brand-card border border-brand-border rounded-[32px] p-10 flex flex-col">
          <h3 className="text-xl font-semibold mb-6">Basic plan</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl font-bold">$10</span>
            <span className="text-brand-text-muted">per month</span>
          </div>
          <p className="text-brand-text-muted text-sm mb-8">Starter protection for your data.</p>
          <button className="w-full py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors mb-10">
            Get started
          </button>
          <div className="space-y-4">
            <h4 className="text-sm font-medium mb-4">Basic plan includes</h4>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Real-time data protection</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Threat alerts</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Monthly security report</span>
            </div>
          </div>
        </div>

        {/* Advanced Plan */}
        <div className="bg-brand-green-dark border-2 border-brand-green rounded-[32px] p-10 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(0,208,132,0.15)] transform md:-translate-y-4">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-6 text-white">Advanced plan</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-white">$20</span>
              <span className="text-white/80">per month</span>
            </div>
            <p className="text-white/80 text-sm mb-8">Expanded opportunities for confidence.</p>
            <button className="w-full py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors mb-10">
              Get started
            </button>
            <div className="space-y-4">
              <h4 className="text-sm font-medium mb-4 text-white">Advanced plan includes</h4>
              <div className="flex items-center gap-3 text-white/90 text-sm">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span>All features of the Basic plan</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 text-sm">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span>Advanced AI algorithms for threat analysis</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 text-sm">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span>Personalized recommendations</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 text-sm">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span>Weekly reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-brand-card border border-brand-border rounded-[32px] p-10 flex flex-col">
          <h3 className="text-xl font-semibold mb-6">Premium plan</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl font-bold">$40</span>
            <span className="text-brand-text-muted">per month</span>
          </div>
          <p className="text-brand-text-muted text-sm mb-8">Maximum protection and support.</p>
          <button className="w-full py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors mb-10">
            Get started
          </button>
          <div className="space-y-4">
            <h4 className="text-sm font-medium mb-4">Premium plan includes</h4>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>All features of the Advanced plan</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>24/7 expert support</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Customized protection settings</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Integration with corporate systems</span>
            </div>
            <div className="flex items-center gap-3 text-brand-text-muted text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Unlimited analytical reports</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
