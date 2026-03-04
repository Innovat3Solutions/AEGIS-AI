import { ArrowRight, Shield, FileText, Users, Lock, CheckCircle, Stethoscope, ClipboardList, Brain, Activity, Building2, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQ, healthcareFAQs } from "../components/FAQ";
import { MobileCarousel } from "../components/MobileCarousel";

const healthcareUseCases = [
  {
    icon: ClipboardList,
    title: "Clinical Documentation",
    description: "Automate progress notes, discharge summaries, and clinical reports. AI assists physicians in real time without exposing patient data.",
    features: ["Progress notes", "Discharge summaries", "Referral letters"]
  },
  {
    icon: FileText,
    title: "Medical Records Analysis",
    description: "Query years of patient history in seconds. Extract relevant information for treatment decisions without manual chart review.",
    features: ["Chart review automation", "History extraction", "Pattern identification"]
  },
  {
    icon: Brain,
    title: "Clinical Decision Support",
    description: "AI-powered insights for diagnosis support, drug interactions, and treatment recommendations all within your secure network.",
    features: ["Diagnostic assistance", "Drug interaction checks", "Treatment protocols"]
  },
  {
    icon: Users,
    title: "Care Coordination",
    description: "Streamline communication between care teams. AI summarizes handoffs and ensures continuity of care documentation.",
    features: ["Handoff summaries", "Team communication", "Care transitions"]
  },
  {
    icon: Activity,
    title: "Population Health",
    description: "Analyze patient populations for risk stratification and preventive care opportunities while maintaining PHI protection.",
    features: ["Risk stratification", "Preventive care alerts", "Outcome tracking"]
  },
  {
    icon: Building2,
    title: "Administrative Automation",
    description: "Reduce administrative burden with AI-assisted prior authorizations, coding assistance, and documentation compliance.",
    features: ["Prior auth support", "Coding assistance", "Compliance checks"]
  }
];

function UseCaseCard({ useCase }: { useCase: { icon: LucideIcon; title: string; description: string; features: string[] } }) {
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

export function HealthcareSolution() {
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
            <span className="text-brand-green">Healthcare</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/20 bg-brand-green/10 mb-8 animate-fade-up">
                <Stethoscope className="w-4 h-4 text-brand-green" />
                <span className="text-sm text-brand-green font-medium">Healthcare Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-up delay-100">
                HIPAA-Compliant AI for
                <span className="text-brand-green"> Healthcare</span>
              </h1>

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed animate-fade-up delay-200">
                Deploy powerful AI assistants that process patient records, clinical documentation, and medical research all within your HIPAA compliant network. Zero PHI exposure, complete regulatory compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
                <button className="btn-primary">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="btn-secondary">
                  Download HIPAA Guide
                </button>
              </div>

              {/* Compliance badges */}
              <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
                {["HIPAA", "HITECH", "42 CFR Part 2", "FDA 21 CFR Part 11"].map((badge, i) => (
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
                    <Stethoscope className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Clinical AI Assistant</p>
                    <p className="text-xs text-zinc-500">HIPAA Secure • PHI Protected</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#141414] border border-[#262626]">
                    <p className="text-sm text-zinc-300 mb-2">"Summarize the cardiac history for patient in room 412"</p>
                    <p className="text-xs text-zinc-600">Query processed locally • No external transmission</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-green/5 border border-brand-green/20">
                    <p className="text-sm text-zinc-300 mb-3">Patient shows history of atrial fibrillation with 3 documented episodes since 2021. Current medications include...</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-brand-green px-2 py-1 rounded bg-brand-green/10">PHI Protected</span>
                      <span className="text-[10px] text-zinc-600">Processed in 0.3s</span>
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
              AI-powered healthcare workflows
            </h2>
            <p className="text-zinc-500">
              Transform clinical operations while maintaining strict HIPAA compliance and protecting patient privacy.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareUseCases.map((useCase) => (
              <UseCaseCard useCase={useCase} />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              {healthcareUseCases.map((useCase) => (
                <UseCaseCard useCase={useCase} />
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
                Built for HIPAA from day one
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Avenix AI is architected specifically for healthcare compliance. Every component from data processing to storage is designed to meet and exceed HIPAA requirements.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Zero External Transmission", desc: "PHI never leaves your network. All AI processing happens on premise." },
                  { title: "Audit Trail & Access Logs", desc: "Complete logging of all AI interactions for compliance audits." },
                  { title: "Role-Based Access Control", desc: "Granular permissions ensure only authorized personnel access patient data." },
                  { title: "BAA Ready", desc: "We sign Business Associate Agreements as part of every healthcare deployment." }
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
                  HIPAA Violation Penalties
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-[#262626]">
                    <span className="text-zinc-400">Tier 1 (Unaware)</span>
                    <span className="text-brand-green font-semibold">$100 to $50K</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#262626]">
                    <span className="text-zinc-400">Tier 2 (Reasonable Cause)</span>
                    <span className="text-brand-green font-semibold">$1K to $50K</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#262626]">
                    <span className="text-zinc-400">Tier 3 (Willful Neglect)</span>
                    <span className="text-brand-green font-semibold">$10K to $50K</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-zinc-400">Tier 4 (Uncorrected)</span>
                    <span className="text-brand-green font-semibold">$50K+</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500">
                  Annual maximum: $1.5M per violation category. Avenix AI eliminates this risk entirely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Healthcare AI Questions"
        subtitle="Common questions about HIPAA compliant AI deployment."
        faqs={healthcareFAQs}
        accentColor="green"
      />
    </div>
  );
}
