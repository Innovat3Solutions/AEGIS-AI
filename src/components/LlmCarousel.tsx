export function LlmCarousel() {
    const models = [
        {
            name: "ChatGPT",
            company: "OpenAI",
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                </svg>
            )
        },
        {
            name: "Gemini",
            company: "Google",
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
            )
        },
        {
            name: "Llama",
            company: "Meta",
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.763.665-1.467 1.59-2.087 2.726-.106.196-.212.403-.32.631l-.191.39-.553-1.006c-.931-1.694-1.963-2.94-3.182-3.612-.864-.476-1.686-.645-2.536-.645zm-.07 2.066c.463 0 .86.097 1.25.328.96.57 1.754 1.672 2.674 3.424l.473.899-.29.5c-.58 1.001-1.005 1.722-1.32 2.143-.623.835-1.178 1.535-1.727 2.024-.548.49-1.026.715-1.483.715-.944 0-1.442-.467-1.736-.965-.192-.327-.278-.63-.278-.959 0-.764.126-1.752.378-2.727.252-.975.623-1.937 1.065-2.723.44-.784.97-1.416 1.537-1.659h.002c.158-.074.303-.074.455 0zm10.097 0c.463 0 .973.201 1.47.63.496.428.95 1.048 1.317 1.792a11.588 11.588 0 0 1 1.087 3.844c.07.604.098 1.176.098 1.69 0 1.017-.15 1.74-.405 2.2-.195.352-.379.502-.603.602-.224.1-.46.149-.748.149-.596 0-1.089-.202-1.606-.542-.517-.34-1.064-.829-1.715-1.51-.397-.415-.903-1.058-1.57-2.003l-1.04-1.484-.16-.233.278-.478c.618-1.063 1.08-1.795 1.376-2.241.295-.446.594-.852.89-1.16.295-.308.605-.553.932-.715.326-.161.664-.241 1.019-.241h-.015l.245-.001z"/>
                </svg>
            )
        },
        {
            name: "Claude",
            company: "Anthropic",
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M17.304 3.541l-5.296 16.918h-3.208L14.096 3.541h3.208zm-7.398 0L4.61 20.459H1.402L6.698 3.541h3.208z"/>
                </svg>
            )
        },
        {
            name: "Copilot",
            company: "Microsoft",
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                </svg>
            )
        },
        {
            name: "Qwen",
            company: "Alibaba",
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M16.5 1h-9C5.015 1 3 3.015 3 5.5v13C3 20.985 5.015 23 7.5 23h9c2.485 0 4.5-2.015 4.5-4.5v-13C21 3.015 18.985 1 16.5 1zM11 18H9v-2h2v2zm0-4H9V6h2v8zm4 4h-2v-2h2v2zm0-4h-2V6h2v8z" />
                </svg>
            )
        },
    ];

    // Duplicate for seamless loop
    const allModels = [...models, ...models, ...models];

    return (
        <section className="py-16 bg-[#0a0a0a] overflow-hidden">
            <div className="container-max mb-8">
                <p className="text-center text-sm text-brand-green uppercase tracking-[0.2em] font-medium">
                    We Deploy Any Model You Need
                </p>
                <p className="text-center text-zinc-500 text-sm mt-2 max-w-md mx-auto">
                    Your choice of LLM, deployed locally in your network
                </p>
            </div>

            {/* Infinite scroll marquee */}
            <div className="relative mt-10">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                {/* Scrolling content */}
                <div className="flex animate-marquee">
                    {allModels.map((model, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 px-8 py-4 mx-4 rounded-2xl border border-[#262626] bg-[#0f0f0f] hover:border-brand-green/30 hover:bg-[#141414] transition-all duration-300 whitespace-nowrap group shadow-lg hover:shadow-brand-green/5 hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:bg-brand-green/10 group-hover:border-brand-green/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                                <model.icon />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
                                    {model.name}
                                </span>
                                <span className="text-[10px] text-zinc-600 group-hover:text-zinc-500 font-medium tracking-wide uppercase transition-colors duration-300">
                                    {model.company}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
