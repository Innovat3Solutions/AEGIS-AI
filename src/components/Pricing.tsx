import { ArrowRight, Shield, Search, Server, Cloud, Phone, CheckCircle } from "lucide-react";

export function Pricing() {
  return (
    <section id="get-started" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4 animate-fade-up">
            How to Get Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 animate-fade-up delay-100">
            Your path to private AI
          </h2>
          <p className="text-zinc-500 text-lg animate-fade-up delay-200">
            We make deploying enterprise AI simple. Here's how we work with you to bring private AI to your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Step 1 - Audit */}
          <div className="relative group animate-fade-up delay-100">
            {/* Step number */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-[#0a0a0a] font-bold text-lg z-10 group-hover:scale-110 transition-transform duration-300">
              1
            </div>

            <div className="h-full bg-[#0f0f0f] border border-[#262626] rounded-2xl p-8 pt-12 hover:border-brand-green/30 transition-all duration-300 card-glow card-shine">
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-300">
                <Search className="w-7 h-7 text-brand-green" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                Network & Security Assessment
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                We start with an optional audit to understand your current infrastructure. This helps us ensure your network is ready for AI deployment.
              </p>

              <ul className="space-y-3">
                {[
                  "Cybersecurity posture review",
                  "Network bandwidth assessment",
                  "Infrastructure compatibility check",
                  "Security requirements analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                <span className="text-xs text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                  Optional Add on
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 - Deployment */}
          <div className="relative group animate-fade-up delay-200">
            {/* Step number */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-[#0a0a0a] font-bold text-lg z-10 group-hover:scale-110 transition-transform duration-300">
              2
            </div>

            <div className="h-full bg-[#0f0f0f] border border-[#262626] rounded-2xl p-8 pt-12 hover:border-brand-green/30 transition-all duration-300 card-glow card-shine">
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-300">
                <Server className="w-7 h-7 text-brand-green" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                Custom Deployment Plan
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Based on your needs, we design a deployment strategy that fits your infrastructure and compliance requirements.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
                  <div className="flex items-center gap-3 mb-2">
                    <Server className="w-5 h-5 text-brand-green" />
                    <span className="font-medium text-white text-sm">On Premise Hardware</span>
                  </div>
                  <p className="text-xs text-zinc-500">We install dedicated AI hardware directly in your facility for maximum security and control.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
                  <div className="flex items-center gap-3 mb-2">
                    <Cloud className="w-5 h-5 text-brand-green" />
                    <span className="font-medium text-white text-sm">Private Cloud</span>
                  </div>
                  <p className="text-xs text-zinc-500">Deploy on your private cloud infrastructure with the same security guarantees.</p>
                </div>
              </div>

              <p className="text-xs text-zinc-600">
                Both options keep your data 100% within your network.
              </p>
            </div>
          </div>

          {/* Step 3 - Launch */}
          <div className="relative group animate-fade-up delay-300">
            {/* Step number */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-[#0a0a0a] font-bold text-lg z-10 group-hover:scale-110 transition-transform duration-300">
              3
            </div>

            <div className="h-full bg-[#0f0f0f] border border-[#262626] rounded-2xl p-8 pt-12 hover:border-brand-green/30 transition-all duration-300 card-glow card-shine">
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-7 h-7 text-brand-green" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                Launch & Ongoing Support
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                We handle the full deployment, training, and provide continuous local support to ensure your AI infrastructure runs smoothly.
              </p>

              <ul className="space-y-3">
                {[
                  "Full system installation & configuration",
                  "Team training & onboarding",
                  "Custom AI agent development",
                  "24/7 local support from South Florida"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                <span className="text-xs text-zinc-500">
                  Typical deployment: 90 days or less
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative animate-fade-up delay-400">
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-green/10 via-brand-green/5 to-brand-green/10 rounded-3xl blur-xl" />
          <div className="relative bg-[#0f0f0f] border border-brand-green/20 rounded-2xl p-10 md:p-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Ready to get started?
                  </h3>
                </div>
                <p className="text-zinc-500 max-w-lg">
                  Schedule a free consultation with our South Florida team. We'll discuss your needs, answer your questions, and show you how private AI can transform your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-base px-8 py-4 whitespace-nowrap">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a href="tel:+1234567890" className="btn-secondary text-base px-8 py-4 whitespace-nowrap text-center">
                  Call Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
