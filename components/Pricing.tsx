
import React, { useState } from 'react';
import Modal from './Modal';
import Contact from './Contact';

const plans = [
  {
    level: "5",
    title: "Corporate Level 5 Plan",
    details: [
      "Optimization of your home page plus 40 additional pages",
      "Target up to 400 keyword phrases",
      "Any additional pages added at no extra charge",
      "Professionally written content for newly written HTML coding",
      "Six press releases submitted over the year",
      "Weekly monitoring for 90-100% compliance",
      "Unlimited consultations with our President",
      "Guaranteed front page listings on major search engines"
    ]
  },
  {
    level: "10",
    title: "Corporate Level 10 Plan",
    details: [
      "Optimization of your home page plus 50 additional pages",
      "Target up to 500 keyword phrases",
      "Optimized text additions for every optimized page",
      "Build, optimize and deploy 10 two-page micro sites",
      "Twelve press releases submitted over the year",
      "Weekly monitoring for 90-100% compliance",
      "Unlimited consultations with our President",
      "Guaranteed front page listings on major search engines"
    ]
  },
  {
    level: "15",
    title: "Corporate Level 15 Plan",
    details: [
      "Optimization of your home page plus 75 additional pages",
      "Target up to 750 keyword phrases",
      "Optimized text additions for every optimized page",
      "Build, optimize and deploy 15 two-page micro sites",
      "Twelve press releases submitted over the year",
      "Weekly monitoring for 90-100% compliance",
      "Unlimited consultations with our President",
      "Guaranteed front page listings on major search engines"
    ]
  },
  {
    level: "25",
    title: "Corporate Level 25 Plan",
    details: [
      "Optimization of 100 pages to target up to 1000 keyword phrases",
      "Build, optimize and deploy 25 two-page micro sites",
      "Twelve press releases submitted over the year",
      "Weekly monitoring for 90-100% compliance",
      "Dedicated SEO specialist & consultations with President",
      "Establish and/or manage client’s Google PPC Campaign",
      "Guaranteed front page listings on major search engines"
    ]
  },
  {
    level: "50",
    title: "Corporate Level 50 Plan",
    details: [
      "Optimization of 200 pages for 2,000 phrases",
      "Ideal for nationwide or multi-service campaigns",
      "Build, optimize and deploy 50 two-page micro sites",
      "Twelve press releases submitted over the year",
      "President acts as your account specialist",
      "Manage client’s Google PPC Campaign",
      "Guaranteed front page listings"
    ]
  },
  {
    level: "100",
    title: "Corporate Level 100 Plan",
    details: [
      "Optimization of 400 pages for 4,000 phrases",
      "Build, optimize and deploy 100 two-page micro sites",
      "Twelve press releases submitted over the year",
      "President acts as your account specialist",
      "Manage client’s Google PPC Campaign",
      "Weekly monitoring for 90-100% compliance",
      "Guaranteed front page listings"
    ]
  },
  {
    level: "150",
    title: "Corporate Level 150 Plan",
    details: [
      "Optimization of 600 pages for 6,000 phrases",
      "Build, optimize and deploy 150 two-page micro sites",
      "Twelve press releases submitted over the year",
      "President acts as your account specialist",
      "Manage client’s Google PPC Campaign",
      "Weekly monitoring for 90-100% compliance",
      "Guaranteed front page listings"
    ]
  },
  {
    level: "200",
    title: "Corporate Level 200 Plan",
    details: [
      "Optimization of 800 pages for 8,000 phrases",
      "Build, optimize and deploy 200 two-page micro sites",
      "Twelve press releases submitted over the year",
      "President acts as your account specialist",
      "Manage client’s Google PPC Campaign",
      "Weekly monitoring for 90-100% compliance",
      "Guaranteed front page listings"
    ]
  }
];

const Pricing: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const visiblePlans = showAll ? plans : plans.slice(0, 4);

  const handleRequestPricing = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleFormSuccess = () => {
    // Close modal after successful submission
    setTimeout(() => {
      setSelectedPlan(null);
    }, 2000);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 text-[10px] font-black tracking-[0.5em] uppercase">Enterprise Scalability</span>
          <h2 className="text-4xl md:text-5xl font-display font-black mt-6 leading-tight">Our Business <span className="wax-text-gradient">Plans.</span></h2>
          <p className="mt-6 text-zinc-500 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            Whatever your placement needs are, we have a solution. We have optimized as many as 19,000 phrases over 1,900 pages for one client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePlans.map((plan, i) => (
            <div key={i} className="group p-8 rounded-[36px] border border-zinc-100 bg-white hover:border-orange-500 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full relative overflow-hidden">
              <h3 className="text-orange-600 font-black text-[11px] tracking-[0.2em] mb-2">LEVEL {plan.level}</h3>
              <h4 className="text-xl font-display font-black text-zinc-900 mb-8 leading-tight">{plan.title}</h4>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.details.map((detail, j) => (
                  <li key={j} className="flex gap-3 text-xs text-zinc-500 font-bold leading-relaxed">
                    <span className="text-orange-500 flex-shrink-0 mt-0.5 opacity-60">●</span>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleRequestPricing(plan)}
                className="w-full py-5 rounded-2xl bg-zinc-900 text-white font-black text-[10px] tracking-[0.2em] uppercase hover:bg-orange-600 transition-all shadow-lg active:scale-95"
              >
                REQUEST PRICING
              </button>
            </div>
          ))}
        </div>

      <div className="mt-16 text-center">
        {!showAll && (
          <button 
            onClick={() => setShowAll(true)}
            className="px-12 py-5 rounded-full border-2 border-zinc-100 text-zinc-900 font-black text-[11px] tracking-[0.3em] hover:border-orange-500 hover:text-orange-600 transition-all uppercase"
          >
            VIEW ALL CORPORATE PLANS
          </button>
        )}
      </div>

      <div className="mt-20 p-12 bg-zinc-900 rounded-[50px] border border-zinc-800 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
        <p className="text-zinc-300 text-lg leading-relaxed mb-6 font-medium italic">
          "After the optimization is uploaded, please keep in mind that it takes 60-90 days to see significant results."
        </p>
        <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">
          Contact us for pricing or questions on our plans.
        </p>
      </div>
    </div>

    <Modal
      isOpen={selectedPlan !== null}
      onClose={handleCloseModal}
      title={selectedPlan ? `Request Pricing - ${selectedPlan.title}` : ''}
      size="xl"
    >
      {selectedPlan && (
        <div className="space-y-6">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-display font-bold text-zinc-900 mb-2">
              {selectedPlan.title}
            </h3>
            <p className="text-sm text-zinc-600 font-medium">
              Fill out the form below to receive pricing information for this plan.
            </p>
          </div>
          
          <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100 mb-6">
            <h4 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-widest">Plan Features:</h4>
            <ul className="space-y-2">
              {selectedPlan.details.map((detail, j) => (
                <li key={j} className="flex gap-3 text-sm text-zinc-600">
                  <span className="text-orange-500 flex-shrink-0 mt-0.5">●</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-zinc-200 pt-6">
            <Contact planLevel={selectedPlan.level} onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}
    </Modal>
    </>
  );
};

export default Pricing;
