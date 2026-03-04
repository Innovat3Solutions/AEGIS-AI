import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  accentColor?: "green" | "rose" | "violet" | "amber";
}

export function FAQ({ title = "Frequently Asked Questions", subtitle, faqs, accentColor = "green" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const colorClasses = {
    green: {
      accent: "text-brand-green",
      border: "border-brand-green/30",
      bg: "bg-brand-green/10",
      hover: "hover:border-brand-green/30",
    },
    rose: {
      accent: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-500/10",
      hover: "hover:border-rose-500/30",
    },
    violet: {
      accent: "text-violet-400",
      border: "border-violet-500/30",
      bg: "bg-violet-500/10",
      hover: "hover:border-violet-500/30",
    },
    amber: {
      accent: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
      hover: "hover:border-amber-500/30",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className={`text-sm font-medium uppercase tracking-widest mb-4 animate-fade-up ${colors.accent}`}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 animate-fade-up delay-100">
            {title}
          </h2>
          {subtitle && (
            <p className="text-zinc-500 animate-fade-up delay-200">{subtitle}</p>
          )}
        </div>

        {/* FAQ Grid - 2 columns, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-[#262626] ${colors.hover} transition-all duration-300 overflow-hidden animate-fade-up ${
                openIndex === index ? colors.border : ""
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
              >
                <span className="font-medium text-white group-hover:text-white/90 transition-colors pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg ${openIndex === index ? colors.bg : "bg-[#1a1a1a]"} flex items-center justify-center shrink-0 transition-colors`}>
                  {openIndex === index ? (
                    <Minus className={`w-4 h-4 ${colors.accent}`} />
                  ) : (
                    <Plus className="w-4 h-4 text-zinc-500" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-built FAQ data for each page
export const homeFAQs: FAQItem[] = [
  {
    question: "What makes Avenix AI different from cloud based AI solutions?",
    answer: "Avenix AI deploys directly within your network infrastructure, ensuring that sensitive data never leaves your premises. Unlike cloud AI solutions where data is transmitted to external servers, our on premise deployment guarantees complete data sovereignty and regulatory compliance."
  },
  {
    question: "How long does deployment typically take?",
    answer: "Most deployments are completed within 90 days. This includes infrastructure setup, LLM installation, custom agent configuration, knowledge base integration, and team training. We work closely with your IT team throughout the process."
  },
  {
    question: "What compliance standards does Avenix AI support?",
    answer: "Avenix AI is designed to meet HIPAA, HITECH, GLBA, FTC Safeguards Rule, SOC 2, and state-level privacy requirements. Our optional compliance package includes full security audits and WISP certification support."
  },
  {
    question: "Can Avenix AI integrate with our existing systems?",
    answer: "Yes, Avenix AI is designed to integrate with your existing infrastructure including document management systems, EHRs, practice management software, and other enterprise applications through secure APIs and connectors."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide a dedicated support team with 24/7 monitoring of your AI infrastructure. This includes regular LLM updates, security patches, performance optimization, and direct access to our engineering team for custom requirements."
  },
  {
    question: "How do you handle LLM updates and improvements?",
    answer: "As new LLM versions are released, we seamlessly update your on premise deployment without exposing your data. We also continuously train and refine specialized agents based on your organization's specific needs and workflows."
  }
];

export const healthcareFAQs: FAQItem[] = [
  {
    question: "Is Avenix AI HIPAA compliant?",
    answer: "Yes, Avenix AI is designed from the ground up for HIPAA compliance. All PHI processing occurs within your network, with complete audit trails, access controls, and encryption. We sign Business Associate Agreements (BAAs) with all healthcare clients."
  },
  {
    question: "Can Avenix AI integrate with our EHR system?",
    answer: "Yes, we support integration with major EHR systems including Epic, Cerner, Meditech, and others through secure HL7 FHIR APIs and custom connectors. Your patient data remains within your existing infrastructure."
  },
  {
    question: "How does Avenix AI handle patient data privacy?",
    answer: "Patient data never leaves your network. All AI processing, including queries and analysis, happens entirely on premise. There are no external API calls, no cloud processing, and no data transmission outside your controlled environment."
  },
  {
    question: "Can the AI help with clinical documentation?",
    answer: "Absolutely. Avenix AI can assist with progress notes, discharge summaries, referral letters, and other clinical documentation while maintaining complete HIPAA compliance. Physicians can dictate or type naturally and receive structured documentation."
  },
  {
    question: "What about 42 CFR Part 2 for substance abuse records?",
    answer: "Avenix AI supports the stricter privacy requirements of 42 CFR Part 2 for substance use disorder records. Our on premise architecture ensures these sensitive records receive the enhanced protection required by federal law."
  },
  {
    question: "How do you ensure AI accuracy in clinical settings?",
    answer: "We implement robust validation workflows and clearly position AI as an assistant to clinical judgment, not a replacement. All AI outputs can be reviewed and verified by clinicians before being committed to patient records."
  }
];

export const legalFAQs: FAQItem[] = [
  {
    question: "Does using Avenix AI risk waiving attorney-client privilege?",
    answer: "No. Because Avenix AI processes all data entirely within your network with no external transmission, attorney-client privilege is maintained. Unlike cloud AI services where sending data could constitute voluntary disclosure, our on premise solution preserves privilege."
  },
  {
    question: "Can Avenix AI help with document review in discovery?",
    answer: "Yes, Avenix AI excels at large-scale document review. It can categorize documents, identify privileged materials, extract key facts, and flag relevant evidence all while keeping client data secure within your infrastructure."
  },
  {
    question: "How does Avenix AI handle conflicts of interest?",
    answer: "Avenix AI can be configured with firm-wide conflict checking capabilities, searching across matter databases and client records to identify potential conflicts before engagement. Access controls ensure ethical walls are maintained."
  },
  {
    question: "Is Avenix AI compliant with ABA Model Rules?",
    answer: "Yes, our solution is designed to comply with ABA Model Rules 1.6 (Confidentiality) and 1.1 (Competence). By keeping all processing on premise, we help firms meet their ethical obligations while leveraging AI technology."
  },
  {
    question: "Can paralegals and associates access the AI?",
    answer: "Yes, with role-based access controls. You define who can access the AI, what matters they can work on, and what types of queries are permitted. All interactions are logged for compliance and billing purposes."
  },
  {
    question: "What types of legal research can Avenix AI assist with?",
    answer: "Avenix AI can search case law, statutes, regulations, and your firm's internal precedent bank using natural language queries. It identifies relevant authorities, extracts key holdings, and helps build legal arguments all within your secure network."
  }
];

export const financialFAQs: FAQItem[] = [
  {
    question: "How does Avenix AI ensure FTC Safeguards Rule compliance?",
    answer: "Avenix AI operates entirely within your network, meeting the FTC Safeguards Rule requirements for protecting customer Nonpublic Personal Information (NPI). We provide documentation to demonstrate compliance during regulatory examinations."
  },
  {
    question: "Can Avenix AI help with tax planning and analysis?",
    answer: "Yes, Avenix AI can analyze client financials, identify tax optimization opportunities, review prior returns for planning purposes, and help prepare client-facing tax projections all while keeping sensitive financial data secure."
  },
  {
    question: "Do you offer WISP certification assistance?",
    answer: "Yes, our optional compliance package includes full WISP (Written Information Security Program) development and certification support. We help document your security policies, procedures, and incident response plans."
  },
  {
    question: "How does Avenix AI protect client financial data?",
    answer: "All client NPI remains within your network infrastructure. There are no external API calls or data transmission. Access is controlled through role-based permissions with complete audit logging for regulatory compliance."
  },
  {
    question: "Can Avenix AI integrate with our portfolio management software?",
    answer: "Yes, we support integration with major financial planning and portfolio management platforms through secure APIs. This allows AI-powered analysis while maintaining the security boundaries of your existing infrastructure."
  },
  {
    question: "What about SEC and FINRA compliance for RIAs?",
    answer: "Avenix AI supports the recordkeeping and data protection requirements of SEC Rule 204-2 and FINRA regulations. Our audit logging capabilities help demonstrate compliance during regulatory examinations."
  }
];
