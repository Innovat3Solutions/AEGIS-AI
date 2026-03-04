export function LogoCloud() {
  const frameworks = [
    {
      name: "HIPAA",
      subtitle: "Healthcare",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
          <path d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "HITECH",
      subtitle: "Health IT",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "GLBA",
      subtitle: "Financial",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "FTC Safeguards",
      subtitle: "Federal",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "SOC 2 Type II",
      subtitle: "Audit",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "Attorney Client",
      subtitle: "Legal",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
          <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
  ];

  // Duplicate for seamless loop
  const allFrameworks = [...frameworks, ...frameworks, ...frameworks];

  return (
    <section className="py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="container-max mb-8">
        <p className="text-center text-sm text-brand-green uppercase tracking-[0.2em] font-medium">
          Compliance Ready
        </p>
        <p className="text-center text-zinc-500 text-sm mt-2 max-w-md mx-auto">
          Built to meet the strictest regulatory requirements
        </p>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative mt-10">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {allFrameworks.map((framework, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-4 mx-4 rounded-2xl border border-[#262626] bg-[#0f0f0f] hover:border-brand-green/30 hover:bg-[#141414] transition-all duration-300 whitespace-nowrap group shadow-lg hover:shadow-brand-green/5 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:bg-brand-green/10 group-hover:border-brand-green/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                <framework.icon />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  {framework.name}
                </span>
                <span className="text-[10px] text-zinc-600 font-medium tracking-wide uppercase">
                  {framework.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
