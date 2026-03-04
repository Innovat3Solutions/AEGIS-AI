import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileCarousel } from "../components/MobileCarousel";

export function GetStarted() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero - Minimal & Clean */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container-max">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors mb-12"
          >
            <ArrowRight className="w-3 h-3 rotate-180" />
            Back to home
          </Link>

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Three steps to
              <br />
              <span className="text-brand-green">private AI.</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed animate-fade-up delay-100">
              From consultation to deployment in 90 days. Local support from a team you can actually meet.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey - Vertical Timeline */}
      <section className="pb-32">
        <div className="container-max">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-green via-brand-green/50 to-transparent" />

            {/* Step 1 */}
            <div className="relative pl-16 md:pl-24 pb-24 animate-fade-up delay-200">
              {/* Number marker */}
              <div className="absolute left-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-brand-green flex items-center justify-center">
                <span className="text-[#0a0a0a] font-semibold text-lg md:text-xl">01</span>
              </div>

              <div className="pt-2">
                <p className="text-xs text-brand-green uppercase tracking-[0.2em] mb-3">Assessment</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  We learn your infrastructure
                </h2>
                <p className="text-zinc-500 leading-relaxed max-w-xl mb-8">
                  Before deploying anything, we understand what you have. An optional network and security assessment ensures your environment is ready.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Network topology", "Security posture", "Compliance needs", "Hardware inventory"].map((item, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-[#0f0f0f] border border-[#1a1a1a]">
                      <p className="text-sm text-zinc-400">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs text-zinc-600 italic">Typically 1-2 weeks. Optional but recommended.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-16 md:pl-24 pb-24 animate-fade-up delay-300">
              {/* Number marker */}
              <div className="absolute left-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-brand-green flex items-center justify-center">
                <span className="text-[#0a0a0a] font-semibold text-lg md:text-xl">02</span>
              </div>

              <div className="pt-2">
                <p className="text-xs text-brand-green uppercase tracking-[0.2em] mb-3">Planning</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  We design your deployment
                </h2>
                <p className="text-zinc-500 leading-relaxed max-w-xl mb-8">
                  Based on your needs, we create a deployment strategy. You choose the model that fits your security requirements and budget.
                </p>

                {/* Desktop grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "On-Premise",
                      desc: "Hardware installed directly in your facility. Maximum control, air-gapped capability.",
                    },
                    {
                      title: "Private Cloud",
                      desc: "Deploy on your existing cloud infrastructure. Same privacy, flexible scaling.",
                    },
                    {
                      title: "Hybrid",
                      desc: "Combine both approaches. Sensitive data stays local, scale with cloud.",
                    },
                  ].map((option, i) => (
                    <div key={i} className="group p-6 rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] hover:border-brand-green/30 transition-colors">
                      <h3 className="text-white font-medium mb-2 group-hover:text-brand-green transition-colors">{option.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{option.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Mobile carousel */}
                <div className="md:hidden">
                  <MobileCarousel>
                    {[
                      {
                        title: "On-Premise",
                        desc: "Hardware installed directly in your facility. Maximum control, air-gapped capability.",
                      },
                      {
                        title: "Private Cloud",
                        desc: "Deploy on your existing cloud infrastructure. Same privacy, flexible scaling.",
                      },
                      {
                        title: "Hybrid",
                        desc: "Combine both approaches. Sensitive data stays local, scale with cloud.",
                      },
                    ].map((option, i) => (
                      <div key={i} className="p-6 rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] h-full">
                        <h3 className="text-white font-medium mb-2">{option.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{option.desc}</p>
                      </div>
                    ))}
                  </MobileCarousel>
                </div>

                <p className="mt-6 text-xs text-zinc-600 italic">Your data never leaves your controlled environment.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-16 md:pl-24 animate-fade-up delay-400">
              {/* Number marker */}
              <div className="absolute left-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-brand-green flex items-center justify-center">
                <span className="text-[#0a0a0a] font-semibold text-lg md:text-xl">03</span>
              </div>

              <div className="pt-2">
                <p className="text-xs text-brand-green uppercase tracking-[0.2em] mb-3">Launch</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  We deploy and support you
                </h2>
                <p className="text-zinc-500 leading-relaxed max-w-xl mb-8">
                  Full installation, integration with your existing tools, hands-on training for your team, and ongoing local support.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["Installation", "Configuration", "Integration", "Training", "Custom agents", "24/7 support"].map((item, i) => (
                    <span key={i} className="px-4 py-2 text-sm text-zinc-400 rounded-full border border-[#262626] bg-[#0a0a0a]">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Timeline visual */}
                <div className="p-6 rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] max-w-2xl">
                  <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">Typical Timeline</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-gradient-to-r from-brand-green to-brand-green/50" />
                      <div className="flex justify-between mt-2">
                        <span className="text-[10px] text-zinc-600">Week 1</span>
                        <span className="text-[10px] text-zinc-600">Week 12</span>
                      </div>
                    </div>
                    <div className="text-right pl-4 border-l border-[#262626]">
                      <p className="text-2xl font-semibold text-brand-green">90</p>
                      <p className="text-[10px] text-zinc-600 uppercase">Days max</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="border-t border-[#1a1a1a]">
        <div className="container-max py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Start the conversation.
              </h2>
              <p className="text-zinc-500">
                No commitment. Just a conversation about what's possible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="tel:+1234567890" className="btn-secondary px-8 py-4 justify-center">
                <Phone className="w-4 h-4" />
                Call directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust footer */}
      <section className="border-t border-[#141414] bg-[#0a0a0a]">
        <div className="container-max py-12">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl md:text-3xl font-semibold text-white">100%</p>
              <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-wider leading-tight">On your network</p>
            </div>
            <div className="border-l border-r border-[#1a1a1a] px-4">
              <p className="text-xl md:text-3xl font-semibold text-white">Local</p>
              <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-wider leading-tight">South Florida team</p>
            </div>
            <div>
              <p className="text-xl md:text-3xl font-semibold text-white">90 days</p>
              <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-wider leading-tight">To deployment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
