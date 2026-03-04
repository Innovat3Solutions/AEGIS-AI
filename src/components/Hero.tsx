import { ArrowRight, Stethoscope, Scale, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileCarousel } from "./MobileCarousel";

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-green/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Decorative corner curves */}
        <svg className="absolute top-20 right-0 w-[400px] h-[400px] text-brand-green/10" viewBox="0 0 400 400" fill="none">
          <path d="M400 0C400 220.914 220.914 400 0 400" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[300px] h-[300px] text-brand-green/10" viewBox="0 0 300 300" fill="none">
          <path d="M0 300C0 134.315 134.315 0 300 0" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-max">
        {/* Main Hero Content - Centered */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#262626] bg-[#141414] mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-sm text-zinc-400">Serving South Florida Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 animate-fade-up delay-100">
            <span className="text-white">Private AI for</span>
            <br />
            <span className="text-gradient">Local Businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            We deploy a private LLM directly into your network. Feed it your files, documents, and data then chat with it securely. Local support from a South Florida team. Nothing ever leaves your infrastructure.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fade-up delay-300">
            {["On Premise Deploy", "HIPAA Compliant", "Zero Data Transmission", "SOC 2 Ready"].map((feature, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm text-zinc-500 border border-[#262626] rounded-full bg-[#0a0a0a]"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center mb-20 animate-fade-up delay-400">
            <button className="btn-primary text-base px-10 py-4">
              Schedule Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dashboard Preview - Legal Chat Interface */}
        <div className="relative max-w-3xl mx-auto animate-fade-up delay-500">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-t from-brand-green/20 via-brand-green/5 to-transparent rounded-3xl blur-2xl" />

          {/* Corner markers */}
          <div className="absolute -top-px -left-px w-6 h-6 border-t border-l border-brand-green/50" />
          <div className="absolute -top-px -right-px w-6 h-6 border-t border-r border-brand-green/50" />
          <div className="absolute -bottom-px -left-px w-6 h-6 border-b border-l border-brand-green/50" />
          <div className="absolute -bottom-px -right-px w-6 h-6 border-b border-r border-brand-green/50" />

          {/* Application UI */}
          <div className="relative bg-[#0f0f0f] rounded-2xl border border-[#262626] overflow-hidden flex flex-col shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-5 py-4 bg-[#141414] border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#0a0a0a] border border-[#262626]">
                  <span className="text-xs text-zinc-400 font-medium">Avenix Workspace Case 1234</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-brand-green px-2 py-0.5 rounded bg-brand-green/10 border border-brand-green/20">Privileged</span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-6 md:p-8 flex flex-col gap-8 bg-[#0a0a0a]">

              {/* User Message */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-xs font-semibold text-zinc-300">You</span>
                </div>
                <div className="flex-1">
                  <div className="bg-[#141414] border border-[#262626] rounded-2xl rounded-tl-none p-4 md:p-5 inline-block">
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                      Hey I want you to go through all my documents in this case pertaining to case 1234 and pull any information that I need to know for a motion that I am drafting.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Agent Analysis & Response */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-green to-emerald-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  <span className="text-[#0a0a0a] text-xs font-bold">AI</span>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 text-xs font-medium text-brand-green">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1 h-1 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1 h-1 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span>Analyzing 342 documents for Case 1234...</span>
                  </div>

                  {/* Response bubble */}
                  <div className="bg-[#141414] border border-brand-green/20 rounded-2xl rounded-tl-none p-5 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl -z-10 rounded-full" />

                    <p className="text-sm md:text-base text-zinc-200 leading-relaxed mb-5">
                      In the files here are attachments that are associated with your motion and here's the information associated with it:
                    </p>

                    <ul className="space-y-3">
                      <li className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-brand-green mt-0.5">✓</span>
                        Identified 4 key precedents within the local court documents that support the defense motion.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4 animate-fade-up">
              Built for South Florida
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white animate-fade-up delay-100">
              Enterprise AI for Local Businesses
            </h2>
            <p className="text-zinc-500 mt-4 max-w-xl mx-auto animate-fade-up delay-200">
              Giving small and medium-sized businesses the same AI capabilities as Fortune 500 companies with local support you can trust.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            <IndustryCard
              icon={Stethoscope}
              title="Healthcare"
              description="HIPAA compliant AI for patient records, clinical documentation, and medical research."
              features={["Patient Record Analysis", "Clinical Documentation", "Medical Research"]}
              delay="200ms"
              link="/solutions/healthcare"
            />
            <IndustryCard
              icon={Scale}
              title="Legal"
              description="Attorney client privilege protection for case research, contracts, and legal analysis."
              features={["Case Research", "Contract Review", "Legal Documentation"]}
              delay="300ms"
              link="/solutions/legal"
            />
            <IndustryCard
              icon={Landmark}
              title="Financial"
              description="GLBA & FTC Safeguards compliant for wealth management and financial analysis."
              features={["Wealth Management", "Tax Planning", "Financial Analysis"]}
              delay="400ms"
              link="/solutions/financial"
            />
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              {[
                <IndustryCard
                  icon={Stethoscope}
                  title="Healthcare"
                  description="HIPAA compliant AI for patient records, clinical documentation, and medical research."
                  features={["Patient Record Analysis", "Clinical Documentation", "Medical Research"]}
                  delay="0ms"
                  link="/solutions/healthcare"
                />,
                <IndustryCard
                  icon={Scale}
                  title="Legal"
                  description="Attorney client privilege protection for case research, contracts, and legal analysis."
                  features={["Case Research", "Contract Review", "Legal Documentation"]}
                  delay="0ms"
                  link="/solutions/legal"
                />,
                <IndustryCard
                  icon={Landmark}
                  title="Financial"
                  description="GLBA & FTC Safeguards compliant for wealth management and financial analysis."
                  features={["Wealth Management", "Tax Planning", "Financial Analysis"]}
                  delay="0ms"
                  link="/solutions/financial"
                />
              ]}
            </MobileCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  icon: Icon,
  title,
  description,
  features,
  delay,
  link,
}: {
  icon: typeof Stethoscope;
  title: string;
  description: string;
  features: string[];
  delay: string;
  link: string;
}) {
  return (
    <div
      className="group p-8 rounded-2xl bg-[#0f0f0f] border border-[#262626] hover:border-brand-green/30 transition-all duration-300 animate-fade-up card-glow card-shine"
      style={{ animationDelay: delay }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 group-hover:scale-110 group-hover:border-brand-green/40 transition-all duration-300">
        <Icon className="w-7 h-7 text-brand-green" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-green/90 transition-colors duration-300">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green group-hover:scale-125 transition-transform duration-300" />
            {feature}
          </li>
        ))}
      </ul>

      <Link to={link} className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-brand-green group-hover:gap-3 transition-all duration-300">
        Learn more
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
}
