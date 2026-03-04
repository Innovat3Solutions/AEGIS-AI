import { ArrowRight, Shield, Landmark, FileText, Users, Lock, CheckCircle, TrendingUp, Calculator, PieChart, Building, Receipt, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQ, financialFAQs } from "../components/FAQ";
import { MobileCarousel } from "../components/MobileCarousel";

const financialUseCases = [
  {
    icon: PieChart,
    title: "Wealth Management",
    description: "AI-assisted portfolio analysis, rebalancing recommendations, and client reporting without exposing sensitive financial data.",
    features: ["Portfolio analysis", "Rebalancing alerts", "Client reporting"]
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Analyze client financials for tax optimization opportunities. Generate recommendations while protecting client NPI.",
    features: ["Tax-loss harvesting", "Deduction analysis", "Planning strategies"]
  },
  {
    icon: FileText,
    title: "Financial Planning",
    description: "Comprehensive financial planning with AI analysis of retirement, estate, and insurance needs all processed locally.",
    features: ["Retirement modeling", "Estate analysis", "Insurance review"]
  },
  {
    icon: Receipt,
    title: "Document Processing",
    description: "Extract and analyze data from tax returns, financial statements, and account documents automatically.",
    features: ["Tax return analysis", "Statement parsing", "Data extraction"]
  },
  {
    icon: Users,
    title: "Client Communication",
    description: "AI-generated client summaries, meeting prep, and follow-up documentation that respects confidentiality.",
    features: ["Meeting summaries", "Client updates", "Review preparation"]
  },
  {
    icon: Building,
    title: "Compliance Monitoring",
    description: "Monitor accounts for compliance issues, suspicious activity, and regulatory requirements automatically.",
    features: ["AML monitoring", "Compliance alerts", "Audit support"]
  }
];

function FinancialUseCaseCard({ useCase }: { useCase: { icon: LucideIcon; title: string; description: string; features: string[] } }) {
  return (
    <div className="group p-8 rounded-2xl bg-[#0f0f0f] border border-[#262626] hover:border-brand-green/30 transition-all duration-300 h-full">
      <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
        <useCase.icon className="w-6 h-6 text-brand-green" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-4">{useCase.description}</p>
      <ul className="space-y-2">
        {useCase.features.map((feature, j) => (
          <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
            <CheckCircle className="w-4 h-4 text-brand-green" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FinancialSolution() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-green/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-max">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8 animate-fade-up">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-green">Financial</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/20 bg-brand-green/10 mb-8 animate-fade-up">
                <Landmark className="w-4 h-4 text-brand-green" />
                <span className="text-sm text-brand-green font-medium">Financial Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-up delay-100">
                GLBA & FTC Safeguards
                <span className="text-brand-green"> Compliant AI</span>
              </h1>

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed animate-fade-up delay-200">
                Deploy AI for wealth management, tax planning, and financial analysis without exposing client financial data. Meet GLBA and FTC Safeguards Rule requirements with on premise AI infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
                <button className="btn-primary">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="btn-secondary">
                  WISP Assessment
                </button>
              </div>

              {/* Compliance badges */}
              <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
                {["GLBA", "FTC Safeguards", "SEC Rule 30", "WISP Certified"].map((badge, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs text-brand-green bg-brand-green/10 rounded-full border border-brand-green/20">
                    {badge} Compliant
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-up delay-300">
              <div className="absolute -inset-4 bg-gradient-to-t from-brand-green/20 via-brand-green/5 to-transparent rounded-3xl blur-2xl" />

              <div className="relative bg-[#0f0f0f] rounded-2xl border border-brand-green/20 p-8">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#262626]">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Financial AI Assistant</p>
                    <p className="text-xs text-zinc-500">GLBA Secure • NPI Protected</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#141414] border border-[#262626]">
                    <p className="text-sm text-zinc-300 mb-2">"Analyze the Johnson family portfolio and identify tax loss harvesting opportunities"</p>
                    <p className="text-xs text-zinc-600">Client NPI protected • Local processing</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-green/5 border border-brand-green/20">
                    <p className="text-sm text-zinc-300 mb-3">Analysis complete. Identified $47,000 in tax loss harvesting opportunities across 3 positions while maintaining target allocation...</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-brand-green px-2 py-1 rounded bg-brand-green/10">NPI Protected</span>
                      <span className="text-[10px] text-zinc-600">FTC Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 border-t border-[#1a1a1a]">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              AI-powered financial workflows
            </h2>
            <p className="text-zinc-500">
              Transform client service and operational efficiency while maintaining strict regulatory compliance.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialUseCases.map((useCase) => (
              <FinancialUseCaseCard useCase={useCase} />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              {financialUseCases.map((useCase) => (
                <FinancialUseCaseCard useCase={useCase} />
              ))}
            </MobileCarousel>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4">Compliance</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                FTC Safeguards Rule compliance
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                The FTC Safeguards Rule requires financial institutions to develop, implement, and maintain a comprehensive security program. Avenix AI helps you meet these requirements while gaining AI capabilities.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Written Information Security Program", desc: "Our optional WISP certification service ensures you have documented security policies." },
                  { title: "Access Controls", desc: "Role-based access ensures only authorized personnel can access client NPI through AI." },
                  { title: "Encryption & Security", desc: "All data is encrypted at rest and in transit within your controlled environment." },
                  { title: "Audit & Monitoring", desc: "Complete logging of all AI interactions for regulatory examination support." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-[#262626]">
                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">{item.title}</p>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative p-10 rounded-2xl bg-[#0a0a0a] border border-brand-green/20">
                <Shield className="w-16 h-16 text-brand-green mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  FTC Safeguards Penalties
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-[#262626]">
                    <span className="text-zinc-400">Per Violation</span>
                    <span className="text-brand-green font-semibold">Up to $50,120</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#262626]">
                    <span className="text-zinc-400">Pattern of Violations</span>
                    <span className="text-brand-green font-semibold">$50,120+ per day</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#262626]">
                    <span className="text-zinc-400">Civil Penalties</span>
                    <span className="text-brand-green font-semibold">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-zinc-400">Class Action Risk</span>
                    <span className="text-brand-green font-semibold">Multi Million</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500">
                  Beyond fines, data breaches can destroy client trust and your firm's reputation. Avenix AI eliminates this risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WISP Section */}
      <section className="py-24 border-t border-[#1a1a1a]">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4">WISP Certification</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Get WISP certified with Avenix AI
            </h2>
            <p className="text-zinc-500">
              Our optional WISP certification service helps you create a comprehensive Written Information Security Program that meets FTC Safeguards requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "We assess your current security posture and identify gaps in your information security program."
              },
              {
                step: "02",
                title: "Documentation",
                desc: "We create comprehensive WISP documentation including policies, procedures, and incident response plans."
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Deploy Avenix AI with security controls that align with your documented WISP requirements."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0f0f0f] border border-[#262626]">
                <span className="text-4xl font-bold text-brand-green/30">{item.step}</span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Financial AI Questions"
        subtitle="Common questions about GLBA and FTC compliant AI deployment."
        faqs={financialFAQs}
        accentColor="green"
      />
    </div>
  );
}
