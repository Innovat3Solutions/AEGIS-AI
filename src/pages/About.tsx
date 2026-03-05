import { Shield, Lock, Network, Building2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_50%)]" />

                <div className="container-max relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/20 bg-brand-green/5 mb-8 animate-fade-up">
                            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                            <span className="text-sm text-brand-green font-medium">The Avenix AI Story</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up delay-100">
                            A Joint Partnership Built on <span className="text-gradient">Trust and Innovation</span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed animate-fade-up delay-200">
                            Avenix AI is the result of a powerful collaboration between <strong className="text-white">INNOVAT3 Solutions</strong>, <strong className="text-white">Nox Technology</strong>, and <strong className="text-white">Wolf Tech IT Solutions</strong>. We saw a critical gap in the market and united our expertise to build next generation private Large Language Models directly within your network—with bulletproof cybersecurity and compliance baked in.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Problem & Solution */}
            <section className="py-20 border-t border-[#1a1a1a] relative bg-[#0a0a0a]">
                <div className="container-max">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        <div className="animate-fade-up">
                            <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                                <Lock className="w-7 h-7 text-red-500" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">The Market Need: A Liability Trap</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                Industries driven by strict data compliance like healthcare, legal, and finance are eager to adopt revolutionary AI tools. Unfortunately, utilizing public AI services opens these organizations up to severe liability and data breaches.
                            </p>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                <strong className="text-zinc-200">That risk is inherent</strong> unless you put the proper foundational framework behind it to support and secure it. We saw this massive vulnerability in the market and knew there had to be a better way.
                            </p>
                        </div>

                        <div className="animate-fade-up delay-200">
                            <div className="p-8 md:p-12 rounded-3xl bg-[#0f0f0f] border border-[#262626] relative overflow-hidden group hover:border-brand-green/30 transition-colors">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl group-hover:bg-brand-green/10 transition-colors" />

                                <div className="w-14 h-14 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6">
                                    <Shield className="w-7 h-7 text-brand-green" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6">The Solution: Avenix AI</h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                    We built a solution to completely eliminate the liability while preserving the power of AI. We go in and build the LLM <strong>natively inside your own network</strong>.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Zero external data transmission",
                                        "Complete regulatory compliance framework",
                                        "Seamless local integration",
                                        "Dedicated South Florida support team"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300">
                                            <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* The Partners */}
            <section className="py-20 border-t border-[#1a1a1a] bg-[#050505]">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Partners</h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Combining world class digital innovation with bullet proof network infrastructure securely deployed out of South Florida.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Innovat3 Solutions */}
                        <div className="p-10 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#262626] transition-all flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-[#262626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Network className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">INNOVAT3 Solutions</h3>
                            <p className="text-zinc-500 leading-relaxed mb-8">
                                Leading the charge in digital transformation, UI/UX, and AI workflow integration. We design the intelligent systems and interfaces that make complex AI accessible and actionable.
                            </p>
                            <a
                                href="https://innovat3solutions.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-brand-green hover:text-white transition-colors mt-auto"
                            >
                                Visit INNOVAT3 Solutions &rarr;
                            </a>
                        </div>

                        {/* Nox Technology */}
                        <div className="p-10 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#262626] transition-all flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-[#262626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Building2 className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Nox Technology</h3>
                            <p className="text-zinc-500 leading-relaxed mb-8">
                                The backbone of secure infrastructure. Nox Technology provides the rigorous hardware deployment, network security protocols, and raw computing architecture required to host enterprise grade LLMs directly on premise.
                            </p>
                            <a
                                href="https://noxtechnology.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-brand-green hover:text-white transition-colors mt-auto"
                            >
                                Visit Nox Technology &rarr;
                            </a>
                        </div>

                        {/* Wolf Tech IT Solutions */}
                        <div className="p-10 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#262626] transition-all flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-[#262626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Wolf Tech IT Solutions</h3>
                            <p className="text-zinc-500 leading-relaxed mb-8">
                                Cybersecurity specialists with 25+ years of industry expertise. Wolf Tech provides comprehensive security audits, WISP certification, and compliance management to ensure your AI infrastructure meets all regulatory requirements.
                            </p>
                            <a
                                href="https://wolftechitsolutions.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-brand-green hover:text-white transition-colors mt-auto"
                            >
                                Visit Wolf Tech IT Solutions &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-[#1a1a1a]">
                <div className="container-max text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to secure your AI future?</h2>
                    <Link to="/#contact" className="btn-primary px-8 py-4">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>

        </div>
    );
}
