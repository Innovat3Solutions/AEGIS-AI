const testimonials = [
  {
    quote: "Great app for protection! I feel much more secure knowing that my data is protected. Threat notifications work instantly!",
    author: "Sophie L. Brown",
    avatar: "https://picsum.photos/seed/sophie/100/100"
  },
  {
    quote: "The best cybersecurity solution. Tried a lot of different apps, but this one really stands out for its features and quality of work.",
    author: "Noah R. Smith",
    avatar: "https://picsum.photos/seed/noah/100/100"
  },
  {
    quote: "This platform really surprised me! Everything is intuitive, but at the same time the protection is really reliable. Artificial intelligence works discreetly, but with maximum efficiency. Even if you don't know anything about cybersecurity, this app will be your best assistant.",
    author: "Ella M. Wilson",
    avatar: "https://picsum.photos/seed/ella/100/100"
  },
  {
    quote: "When I first installed the app, there were a few questions. Support helped me figure it out in just a few minutes. This is a huge plus for me, as I often encountered indifferent attitudes in other services. Here you can feel that customers really want to help.",
    author: "Aiden J. Lee",
    avatar: "https://picsum.photos/seed/aiden/100/100"
  },
  {
    quote: "Our company has been using the application for several months now, and the results are impressive. The level of data security has improved significantly, and weekly analytical reports help us identify potential vulnerabilities. We would also like to mention the support team, which is always ready to help.",
    author: "Chloe S. Taylor",
    avatar: "https://picsum.photos/seed/chloe/100/100"
  },
  {
    quote: "Immediately after installation, I noticed how the app optimized the protection. Now I am confident in my security.",
    author: "Lucas K. Davis",
    avatar: "https://picsum.photos/seed/lucas/100/100"
  },
  {
    quote: "Tech support is top-notch - always answer questions quickly and clearly. Very grateful for the help!",
    author: "Maya T. Johnson",
    avatar: "https://picsum.photos/seed/maya/100/100"
  },
  {
    quote: "Great app for protection! I feel much more secure knowing that my data is protected. Threat notifications work instantly!",
    author: "Liam A. Carter",
    avatar: "https://picsum.photos/seed/liam/100/100"
  },
  {
    quote: "The interface is user-friendly and easy to understand, even for beginners. Perfect balance between simplicity and functionality.",
    author: "Oliver P. Martinez",
    avatar: "https://picsum.photos/seed/oliver/100/100"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <span className="text-xs font-bold tracking-widest text-brand-text-muted uppercase mb-4">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">What our customers<br/>say about us</h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="break-inside-avoid bg-brand-card border border-brand-border rounded-3xl p-8 flex flex-col">
            <p className="text-brand-text-muted leading-relaxed mb-8">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author} 
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-medium text-sm text-white">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
