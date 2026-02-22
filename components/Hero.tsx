
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
      {/* Dynamic light background accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-yellow-50/50 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl pt-32 md:pt-36 pb-12">
        <div className="mb-12">
          <span className="px-6 py-2.5 rounded-full border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] bg-orange-50/50 shadow-sm backdrop-blur-sm">
            We Are a Full Service SEO Company
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.95] mb-12 text-zinc-900">
          Get the <span className="wax-text-gradient">Traffic</span> <br /> 
          You <span className="italic font-light text-zinc-300">Deserve.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-zinc-500 mb-16 leading-relaxed font-bold tracking-tight">
          Let us help you dominate the search engine rankings with proven SEO strategies and high-impact digital intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#services" className="px-14 py-6 rounded-2xl bg-zinc-900 text-white font-black text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all duration-500 shadow-2xl shadow-zinc-900/10 uppercase active:scale-95">
            LEARN MORE
          </a>
          <a href="#test-your-site" className="px-14 py-6 rounded-2xl bg-white border-2 border-zinc-100 text-zinc-900 font-black text-[11px] tracking-[0.3em] hover:border-orange-500 hover:text-orange-600 transition-all duration-500 shadow-sm uppercase active:scale-95">
            TEST YOUR SITE
          </a>
        </div>
      </div>

      <div className="mt-auto py-14 border-t border-zinc-50 w-full bg-white/50 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0">
            <img src="/logos/google.png" alt="Google" className="h-6 w-auto object-contain" />
            <img src="/logos/bing-48.png" alt="Bing" className="h-8 w-auto object-contain" />
            <img src="/logos/yahoo.png" alt="Yahoo" className="h-12 w-auto object-contain" />
            <img src="/logos/duckduckgo-48.png" alt="DuckDuckGo" className="h-8 w-auto object-contain" />
         </div>
      </div>
    </div>
  );
};

export default Hero;
