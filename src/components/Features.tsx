import { Shield, Zap, Lock, RefreshCw, Server, Users, ArrowRight } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";

const features = [
  {
    icon: Shield,
    title: "Zero Data Exposure",
    description: "Your sensitive data never leaves your network. No external APIs, no cloud processing, no data leakage.",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Get up and running in days with our streamlined deployment process for on premise or private cloud.",
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "Built for HIPAA, GLBA, FTC Safeguards, and attorney-client privilege requirements from day one.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Updates",
    description: "Regular LLM updates and security patches delivered to your infrastructure without data exposure.",
  },
  {
    icon: Server,
    title: "Flexible Infrastructure",
    description: "Deploy on premise, private cloud, or hybrid. Your infrastructure, your rules, your control.",
  },
  {
    icon: Users,
    title: "Local Support Team",
    description: "Real people, right here in South Florida. No call centers just hands-on support from your neighbors.",
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4 animate-fade-up">
              Why Avenix AI
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight animate-fade-up delay-100">
              Big business AI
              <br />
              <span className="text-zinc-500">for local businesses</span>
            </h2>
          </div>
          <div className="animate-fade-up delay-200">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:gap-3 transition-all">
              Schedule a demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Features grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} index={index} />
          ))}
        </div>

        {/* Features carousel - Mobile */}
        <div className="md:hidden">
          <MobileCarousel>
            {features.map((feature) => (
              <FeatureCard feature={feature} index={0} />
            ))}
          </MobileCarousel>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 pt-16 border-t border-[#1a1a1a]">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "100%", label: "Data stays on your network" },
              { value: "24/7", label: "Local South Florida support" },
              { value: "Full", label: "Regulatory compliance" },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                <p className="text-2xl md:text-5xl font-semibold text-brand-green mb-1 md:mb-2">{stat.value}</p>
                <p className="text-[10px] md:text-sm text-zinc-500 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <div
      className={`group relative p-8 rounded-2xl border transition-all duration-300 animate-fade-up card-glow card-shine h-full ${
        feature.highlight
          ? "bg-gradient-to-br from-brand-green/10 to-transparent border-brand-green/20"
          : "bg-[#0f0f0f] border-[#262626] hover:border-[#404040]"
      }`}
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Corner accent for highlighted */}
      {feature.highlight && (
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-green to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-brand-green to-transparent" />
        </div>
      )}

      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 icon-glow ${
        feature.highlight
          ? "bg-brand-green/20"
          : "bg-[#1a1a1a] group-hover:bg-brand-green/10"
      }`}>
        <feature.icon className={`w-5 h-5 ${feature.highlight ? "text-brand-green" : "text-zinc-500 group-hover:text-brand-green"} transition-colors`} strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-3">
        {feature.title}
      </h3>

      <p className="text-zinc-500 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
