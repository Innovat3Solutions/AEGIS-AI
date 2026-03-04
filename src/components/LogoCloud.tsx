export function LogoCloud() {
  return (
    <section className="py-12 border-t border-b border-brand-border/50 bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simple text logos for now, can be replaced with actual SVGs */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-bg rounded-sm" />
            </div>
            Discord
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-6 h-6 rounded-full border-4 border-white" />
            loom
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="flex gap-1">
              <div className="w-2 h-6 bg-white rounded-full" />
              <div className="w-2 h-6 bg-white rounded-full" />
              <div className="w-2 h-6 bg-white rounded-full" />
            </div>
            miro
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-6 h-6 bg-green-500 rounded-sm rotate-45" />
            shopify
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-6 h-6 rounded-full border-4 border-t-transparent border-white rotate-45" />
            Culture Amp
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter uppercase">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-blue-500" />
            Atlassian
          </div>
        </div>
      </div>
    </section>
  );
}
