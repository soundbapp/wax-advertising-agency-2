
import React from 'react';
import Contact from './Contact';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-5 py-2 rounded-full border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] bg-orange-50/50">
            Join Our Team
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl font-display font-black leading-tight text-zinc-900">
            Careers at <span className="wax-text-gradient">WAX</span>
          </h1>
          <p className="mt-6 text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for digital marketing excellence.
          </p>
        </div>
      </div>

      <div className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-[40px] p-12 md:p-16 text-center">
            <div className="text-6xl mb-6">📋</div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-zinc-900 mb-6">
              No Open Positions at This Time
            </h2>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              We're not currently hiring, but we're always interested in connecting with exceptional talent. 
              If you're passionate about SEO, digital marketing, or brand strategy, we'd love to hear from you.
            </p>
            <p className="text-base text-zinc-500 font-medium mb-8">
              Check back with us soon, or reach out to introduce yourself. When opportunities arise, 
              we'll be looking for people who are driven, creative, and committed to delivering exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-orange-600 text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-orange-500 transition-all duration-500 shadow-xl shadow-orange-600/20 active:scale-95"
              >
                GET IN TOUCH
              </a>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'home';
                  window.scrollTo(0, 0);
                }}
                className="px-8 py-4 rounded-2xl bg-white border-2 border-zinc-200 text-zinc-900 font-bold text-xs tracking-[0.3em] uppercase hover:border-orange-500 hover:text-orange-600 transition-all duration-500 active:scale-95"
              >
                BACK TO HOME
              </a>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
              <h3 className="text-xl font-display font-bold text-zinc-900 mb-4">What We Look For</h3>
              <ul className="space-y-3 text-zinc-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Passion for digital marketing and SEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Strong analytical and problem-solving skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Excellent communication abilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Commitment to continuous learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Team player mindset</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
              <h3 className="text-xl font-display font-bold text-zinc-900 mb-4">Why Work With Us</h3>
              <ul className="space-y-3 text-zinc-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Work with industry-leading clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Opportunity to shape brand strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Access to cutting-edge tools and AI technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Collaborative and supportive team environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                  <span>Professional growth opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-900 text-white rounded-t-[60px] md:rounded-t-[100px] scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Careers;
