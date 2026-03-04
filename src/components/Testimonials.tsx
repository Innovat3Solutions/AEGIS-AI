import { Quote } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";

const testimonials = [
  {
    quote: "We've been hesitant to adopt AI because of HIPAA concerns. Avenix AI gave us a solution that keeps patient data completely within our network.",
    author: "Yipsi Martin",
    role: "CEO",
    company: "Estrella Medical Centers",
    industry: "Healthcare"
  },
  {
    quote: "The attorney-client privilege protection was our primary concern. With Avenix AI, we can analyze case documents without ever exposing confidential client information.",
    author: "Santino Ruiz, Esq.",
    role: "Founder",
    company: "Ruiz Legal",
    industry: "Legal"
  },
  {
    quote: "FTC Safeguards Rule compliance was a major hurdle. Avenix AI not only solved that but also helped us establish our WISP documentation.",
    author: "Orencio Ruiz",
    role: "CEO",
    company: "Best Vision Accounting",
    industry: "Financial"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-y border-[#1a1a1a]">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-brand-green font-medium uppercase tracking-widest mb-4 animate-fade-up">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 animate-fade-up delay-100">
            Trusted by regulated industries
          </h2>
          <p className="text-zinc-500 animate-fade-up delay-200">
            Healthcare providers, law firms, and financial institutions trust Avenix AI to safely adopt AI while maintaining compliance.
          </p>
        </div>

        {/* Testimonials grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Testimonials carousel - Mobile */}
        <div className="md:hidden">
          <MobileCarousel>
            {testimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} index={0} />
            ))}
          </MobileCarousel>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-up delay-400">
          <p className="text-zinc-600 text-sm mb-4">
            Join organizations that prioritize data privacy
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:underline">
            See more case studies →
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <div
      className="group relative bg-[#0f0f0f] border border-[#262626] rounded-2xl p-8 hover:border-[#404040] transition-all duration-300 animate-fade-up hover-lift h-full"
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6">
        <Quote className="w-5 h-5 text-brand-green" />
      </div>

      {/* Industry tag */}
      <div className="inline-flex px-3 py-1 text-xs text-brand-green bg-brand-green/10 rounded-full mb-4">
        {testimonial.industry}
      </div>

      {/* Quote */}
      <p className="text-zinc-400 leading-relaxed mb-8">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-[#1a1a1a]">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-green/20 to-emerald-600/10 flex items-center justify-center border border-brand-green/20">
          <span className="text-brand-green font-medium text-xs">
            {testimonial.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </span>
        </div>
        <div>
          <p className="font-medium text-white text-sm">{testimonial.author}</p>
          <p className="text-zinc-600 text-xs">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
