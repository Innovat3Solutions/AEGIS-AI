import { Server, Bot, FileText, Database, Shield, Lock, ArrowUpRight, Search, Award } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";

export function BentoGrid() {
  return (
    <section id="platform" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container-max">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4 animate-fade-up">
            Your Local AI Partner
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 animate-fade-up delay-100">
            Enterprise AI, locally supported
          </h2>
          <p className="text-lg text-zinc-500 animate-fade-up delay-200">
            We bring Fortune 500 AI capabilities to South Florida businesses. Complete private infrastructure with hands-on local support no call centers, no tickets, just real help from your neighbors.
          </p>
        </div>

        {/* Bento Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Large Card - Local LLM */}
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-2xl overflow-hidden animate-fade-up delay-100 card-shine hover:scale-[1.01] transition-transform duration-500">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-[#0f0f0f] to-[#0f0f0f] transition-all duration-500 group-hover:from-brand-green/15" />
            <div className="absolute inset-0 border border-brand-green/20 rounded-2xl group-hover:border-brand-green/30 transition-colors duration-300" />

            {/* Content */}
            <div className="relative p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-7 h-7 text-brand-green" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-brand-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Local LLM Deployment
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg">
                  A fully functional LLM running inside your infrastructure. Inject files, folders, and documents then query your data through natural conversation. Everything stays within your network.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["On Premise", "Private Cloud", "Hybrid", "Air-Gapped"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs text-zinc-500 border border-[#262626] rounded-full bg-[#0a0a0a]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-tl from-brand-green/10 to-transparent rounded-full blur-3xl" />
              </div>
            </div>
          </div>

          {/* AI Agents */}
          <BentoCard
            icon={Bot}
            title="AI Agent Framework"
            description="Create AI-powered agents that automate internal tasks research assistants, contract review, documentation."
            delay="200ms"
          />

          {/* Document Processing */}
          <BentoCard
            icon={FileText}
            title="Document Processing"
            description="Ingest and analyze PDFs, contracts, medical records, financial statements. Documents never leave your network."
            delay="300ms"
          />

          {/* Knowledge Base */}
          <BentoCard
            icon={Database}
            title="Private Knowledge Base"
            description="Train on your internal data company documents, policies, records. Create a private AI assistant."
            delay="400ms"
          />

          {/* Security Card - Wide */}
          <div className="lg:col-span-2 group relative bg-[#0f0f0f] border border-[#262626] rounded-2xl p-8 hover:border-brand-green/30 transition-all duration-300 animate-fade-up delay-500 card-shine">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-brand-green/10 group-hover:scale-105 transition-all duration-300">
                  <Shield className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Enterprise Security</h3>
                  <p className="text-sm text-zinc-600">Compliance ready architecture</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Lock, label: "Data Encryption" },
                  { icon: Lock, label: "Network Isolation" },
                  { icon: Lock, label: "Access Control" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] rounded-full border border-[#262626]">
                    <item.icon className="w-3.5 h-3.5 text-brand-green" />
                    <span className="text-xs text-zinc-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bento Grid - Mobile Carousel */}
        <div className="md:hidden">
          <MobileCarousel>
            {[
              <MobileBentoCard
                icon={Server}
                title="Local LLM Deployment"
                description="A fully functional LLM running inside your infrastructure. Inject files, folders, and documents then query your data through natural conversation."
                tags={["On Premise", "Private Cloud", "Hybrid"]}
                featured
              />,
              <MobileBentoCard
                icon={Bot}
                title="AI Agent Framework"
                description="Create AI-powered agents that automate internal tasks research assistants, contract review, documentation."
              />,
              <MobileBentoCard
                icon={FileText}
                title="Document Processing"
                description="Ingest and analyze PDFs, contracts, medical records, financial statements. Documents never leave your network."
              />,
              <MobileBentoCard
                icon={Database}
                title="Private Knowledge Base"
                description="Train on your internal data company documents, policies, records. Create a private AI assistant."
              />,
              <MobileBentoCard
                icon={Shield}
                title="Enterprise Security"
                description="Compliance ready architecture with data encryption, network isolation, and access control."
                tags={["Encryption", "Isolation", "Access Control"]}
              />
            ]}
          </MobileCarousel>
        </div>

        {/* Optional Services */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
            <span className="text-xs text-zinc-600 uppercase tracking-widest">Optional Add ons</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Network Audit */}
            <div className="group relative flex items-start gap-5 p-6 rounded-xl bg-[#0f0f0f]/50 border border-[#1a1a1a] hover:border-brand-green/20 hover:bg-[#0f0f0f] transition-all duration-300 animate-fade-up delay-[600ms]">
              <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:bg-brand-green/10 group-hover:scale-110 transition-all duration-300">
                <Search className="w-5 h-5 text-zinc-600 group-hover:text-brand-green transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold text-white">Network Audit</h3>
                  <span className="text-[10px] text-brand-green px-2 py-0.5 rounded bg-brand-green/10 border border-brand-green/20">Optional</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  We audit your cloud or local network to ensure there are no existing compromises prior to deployment.
                </p>
              </div>
            </div>

            {/* WISP Certification */}
            <div className="group relative flex items-start gap-5 p-6 rounded-xl bg-[#0f0f0f]/50 border border-[#1a1a1a] hover:border-brand-green/20 hover:bg-[#0f0f0f] transition-all duration-300 animate-fade-up delay-[700ms]">
              <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:bg-brand-green/10 group-hover:scale-110 transition-all duration-300">
                <Award className="w-5 h-5 text-zinc-600 group-hover:text-brand-green transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold text-white">WISP Certification</h3>
                  <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20">Certification</span>
                  <span className="text-[10px] text-brand-green px-2 py-0.5 rounded bg-brand-green/10 border border-brand-green/20">Optional</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  We'll help you get WISP Certified a formalized document detailing your organization's security controls, policies, and procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: typeof Server;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div
      className="group relative bg-[#0f0f0f] border border-[#262626] rounded-2xl p-6 hover:border-brand-green/30 transition-all duration-300 animate-fade-up card-glow card-shine"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-brand-green/10 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-5 h-5 text-zinc-600 group-hover:text-brand-green transition-colors duration-300" />
        </div>
        <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-brand-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>

      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-brand-green/90 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
    </div>
  );
}

function MobileBentoCard({
  icon: Icon,
  title,
  description,
  tags,
  featured,
}: {
  icon: typeof Server;
  title: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden h-full ${featured ? "bg-gradient-to-br from-brand-green/10 via-[#0f0f0f] to-[#0f0f0f] border border-brand-green/20" : "bg-[#0f0f0f] border border-[#262626]"}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${featured ? "bg-brand-green/20" : "bg-[#1a1a1a]"}`}>
            <Icon className={`w-6 h-6 ${featured ? "text-brand-green" : "text-zinc-500"}`} />
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600" />
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">{description}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs text-zinc-500 border border-[#262626] rounded-full bg-[#0a0a0a]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
