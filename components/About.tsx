
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-orange-600 text-[10px] font-black tracking-[0.5em] uppercase">Core Mission</span>
          <h2 className="text-5xl md:text-6xl font-display font-black mt-6 leading-tight text-zinc-900 tracking-tight">Full Service <br /><span className="wax-text-gradient">SEO Company.</span></h2>
          <div className="mt-8 space-y-6 text-zinc-500 leading-relaxed text-lg font-medium">
            <p>
              WAX ADVERTISING AGENCY uses the internet to grow businesses and create success stories. We have the dedication, creativity and energy to develop effective campaigns for our clients.
            </p>
            <p>
              We start by learning about each client’s business model, the competition they are up against and what strategies will help them attract valuable leads. Our dedicated marketing consultants create customized strategies that drive traffic, conversions and sales.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="relative p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm transition-transform hover:scale-105">
              <h4 className="text-4xl font-display font-black text-zinc-900">100%</h4>
              <p className="text-[10px] font-black text-orange-600 mt-2 uppercase tracking-widest">Successful Track Record</p>
            </div>
            <div className="relative p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm transition-transform hover:scale-105">
              <h4 className="text-4xl font-display font-black text-zinc-900">Guaranteed</h4>
              <p className="text-[10px] font-black text-orange-600 mt-2 uppercase tracking-widest">First Page Listings</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-12 rounded-[40px] border border-zinc-200 shadow-2xl shadow-zinc-100/50">
            <h3 className="text-xl font-black font-display mb-10 text-zinc-900 tracking-tight">Why Hire Our Experts?</h3>
            <ul className="space-y-6">
              {[
                "Save time and focus attention on your business",
                "Expert knowledge of the latest SEO & AI trends",
                "Prepared for ever-changing algorithm updates",
                "Avoid costly mistakes and penalizations",
                "Obtain easy-to-understand performance reports"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="text-sm text-zinc-600 font-bold leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-12 bg-zinc-900 rounded-[40px] text-white shadow-2xl">
            <p className="text-zinc-400 italic text-2xl leading-relaxed mb-8">
              "Placement is crucial to your success. If your website isn’t featured at the top, it becomes increasingly difficult for your audience to find you."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-600" />
              <div>
                <p className="text-sm font-black tracking-widest uppercase">WAX LEADERSHIP</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Growth Strategists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
