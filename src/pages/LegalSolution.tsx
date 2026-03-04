import { ArrowRight, Shield, Scale, FileText, Users, Lock, CheckCircle, Gavel, BookOpen, Search, FileSearch, Briefcase, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQ, legalFAQs } from "../components/FAQ";
import { MobileCarousel } from "../components/MobileCarousel";

const legalUseCases = [
  {
    icon: Search,
    title: "Legal Research",
    description: "Search case law, statutes, and internal precedents using natural language. AI finds relevant authorities in seconds, not hours.",
    features: ["Case law search", "Statute analysis", "Precedent matching"]
  },
  {
    icon: FileText,
    title: "Contract Analysis",
    description: "Review contracts at scale. Identify risks, unusual clauses, and negotiation points across thousands of pages instantly.",
    features: ["Risk identification", "Clause extraction", "Comparison analysis"]
  },
  {
    icon: FileSearch,
    title: "Discovery Review",
    description: "Process massive document productions efficiently. AI categorizes, prioritizes, and highlights key evidence automatically.",
    features: ["Document coding", "Privilege review", "Evidence extraction"]
  },
  {
    icon: BookOpen,
    title: "Brief Drafting",
    description: "AI-assisted drafting for motions, briefs, and memoranda. Generate first drafts based on your case files and preferred style.",
    features: ["Motion drafting", "Legal memos", "Citation checking"]
  },
  {
    icon: Users,
    title: "Due Diligence",
    description: "Accelerate M&A due diligence with AI that reviews data rooms, identifies issues, and generates comprehensive reports.",
    features: ["Data room review", "Issue spotting", "Report generation"]
  },
  {
    icon: Briefcase,
    title: "Matter Management",
    description: "AI assistant for matter intake, conflict checks, and case status updates. Streamline administrative workflows.",
    features: ["Conflict checking", "Status summaries", "Timeline tracking"]
  }
];

function LegalUseCaseCard({ useCase }: { useCase: { icon: LucideIcon; title: string; description: string; features: string[] } }) {
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

export function LegalSolution() {
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
            <span className="text-brand-green">Legal</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/20 bg-brand-green/10 mb-8 animate-fade-up">
                <Scale className="w-4 h-4 text-brand-green" />
                <span className="text-sm text-brand-green font-medium">Legal Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-up delay-100">
                AI That Protects
                <span className="text-brand-green"> Attorney Client Privilege</span>
              </h1>

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed animate-fade-up delay-200">
                Leverage AI for case research, contract analysis, and legal documentation without risking privileged information. Deploy secure LLMs that never expose client data to external servers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
                <button className="btn-primary">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="btn-secondary">
                  View Case Studies
                </button>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
                {["Attorney Client Privilege", "Work Product Protection", "ABA Model Rules", "State Bar Compliant"].map((badge, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs text-brand-green bg-brand-green/10 rounded-full border border-brand-green/20">
                    {badge}
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
                    <Gavel className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Legal AI Assistant</p>
                    <p className="text-xs text-zinc-500">Privileged • Confidential</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#141414] border border-[#262626]">
                    <p className="text-sm text-zinc-300 mb-2">"Analyze the discovery documents and identify potential weaknesses in plaintiff's timeline"</p>
                    <p className="text-xs text-zinc-600">342 documents analyzed • No external access</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-green/5 border border-brand-green/20">
                    <p className="text-sm text-zinc-300 mb-3">Analysis complete. Identified 4 significant timeline inconsistencies in plaintiff's deposition testimony...</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-brand-green px-2 py-1 rounded bg-brand-green/10">Privileged</span>
                      <span className="text-[10px] text-zinc-600">Work Product Protected</span>
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
              AI-powered legal workflows
            </h2>
            <p className="text-zinc-500">
              Accelerate legal work while maintaining the highest standards of confidentiality and privilege protection.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalUseCases.map((useCase) => (
              <LegalUseCaseCard useCase={useCase} />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              {legalUseCases.map((useCase) => (
                <LegalUseCaseCard useCase={useCase} />
              ))}
            </MobileCarousel>
          </div>
        </div>
      </section>

      {/* Ethics & Privilege Section */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4">Ethics & Compliance</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Protecting privilege in the AI era
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Using cloud AI with client data creates serious privilege risks. Avenix AI eliminates these concerns entirely by keeping all processing within your controlled environment.
              </p>

              <div className="space-y-4">
                {[
                  { title: "No Third-Party Access", desc: "Client data never touches external servers. Privilege remains intact." },
                  { title: "Work Product Protection", desc: "AI-generated analysis is protected work product when kept on premise." },
                  { title: "Ethical Compliance", desc: "Meets ABA Model Rules 1.6 (Confidentiality) and 1.1 (Competence) requirements." },
                  { title: "State Bar Alignment", desc: "Designed to comply with state bar ethics opinions on AI and client data." }
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
                  The Risk of Cloud AI
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 font-medium mb-2">Privilege Waiver Risk</p>
                    <p className="text-sm text-zinc-400">Sending client data to cloud AI may constitute voluntary disclosure, waiving privilege.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 font-medium mb-2">Malpractice Exposure</p>
                    <p className="text-sm text-zinc-400">Data breaches involving cloud AI could lead to malpractice claims and bar discipline.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 font-medium mb-2">Client Trust</p>
                    <p className="text-sm text-zinc-400">Clients increasingly demand assurance that their data isn't processed by third parties.</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500">
                  Avenix AI eliminates all three risks with fully on premise AI infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Legal AI Questions"
        subtitle="Common questions about privilege-protected AI deployment."
        faqs={legalFAQs}
        accentColor="green"
      />
    </div>
  );
}
