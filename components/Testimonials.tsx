
import React from 'react';

const testimonials = [
  {
    quote: "WAX didn't just redesign our site; they redefined how we talk to our customers. The AI integration changed our entire workflow.",
    author: "Elena Vance",
    role: "CMO at Neo Systems"
  },
  {
    quote: "Working with them feels like peering into the next decade of advertising. Sharp, creative, and unapologetically bold.",
    author: "Marcus Thorne",
    role: "Founder, Glitch Beats"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {testimonials.map((t, i) => (
          <div key={i} className="flex-1 space-y-8">
            <div className="text-5xl text-orange-500 font-serif opacity-50">"</div>
            <p className="text-2xl md:text-3xl font-medium leading-tight">
              {t.quote}
            </p>
            <div>
              <p className="font-bold text-lg">{t.author}</p>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
