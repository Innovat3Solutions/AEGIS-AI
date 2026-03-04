import { Shield, Globe, Clock, Sparkles, Grid, Brackets } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-6 h-6 text-brand-text-muted" />,
    title: "Intelligent threat detection",
    description: "AI analyzes system behavior and reacts instantly to suspicious activity."
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-text-muted" />,
    title: "Personalized protection",
    description: "The algorithms are customized to fit your data and infrastructure."
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-text-muted" />,
    title: "Real-time response",
    description: "Detect and remediate threats without delay, preventing potential damage."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-text-muted" />,
    title: "Easy integration",
    description: "Easily connects to your system without the need for complex customization."
  },
  {
    icon: <Grid className="w-6 h-6 text-brand-text-muted" />,
    title: "Constant evolution",
    description: "AI is learning every day to stay one step ahead of cyber threats."
  },
  {
    icon: <Brackets className="w-6 h-6 text-brand-text-muted" />,
    title: "Save time and resources",
    description: "Automating security tasks allows you to focus on what's important."
  }
];

export function Features() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="w-16 h-16 bg-brand-card border border-brand-border rounded-2xl flex items-center justify-center mb-8 shadow-lg">
          <Shield className="w-8 h-8 text-brand-text-muted" />
        </div>
        <span className="text-xs font-bold tracking-widest text-brand-text-muted uppercase mb-4">Loved by users</span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Why choose us?</h2>
        <p className="text-brand-text-muted text-lg max-w-2xl">
          The ultimate tool for those who value security, innovation, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            <div className="mb-6 p-3 rounded-xl bg-brand-card border border-brand-border">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-brand-text-muted leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
