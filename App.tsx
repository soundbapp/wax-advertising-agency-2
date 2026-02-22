
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import InteractiveAI from './components/InteractiveAI';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Careers from './components/Careers';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy' || hash === 'terms' || hash === 'careers') {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render legal pages
  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500 selection:text-white antialiased">
        <Navbar scrolled={scrolled} />
        <Privacy />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500 selection:text-white antialiased">
        <Navbar scrolled={scrolled} />
        <Terms />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'careers') {
    return (
      <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500 selection:text-white antialiased">
        <Navbar scrolled={scrolled} />
        <Careers />
        <Footer />
      </div>
    );
  }

  // Render main homepage
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500 selection:text-white antialiased">
      <Navbar scrolled={scrolled} />
      
      <main className="relative flex flex-col">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col bg-white">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-50 border-y border-zinc-100 scroll-mt-20 block overflow-hidden">
          <About />
        </section>
        
        {/* Services Section - The target reported as failing */}
        <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white scroll-mt-20 block overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-4xl mx-auto">
               <span className="px-5 py-2 rounded-full border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] bg-orange-50/50">
                  Agency Expertise
                </span>
                <h2 className="mt-8 text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter text-zinc-900">
                  Molding <span className="wax-text-gradient">Brand Power.</span>
                </h2>
                <p className="mt-6 text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                  Full-service SEO, SEM, and Brand Reputation strategies engineered to dominate your market rankings.
                </p>
            </div>
            <Services />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-50 border-y border-zinc-100 scroll-mt-20 block">
           <Pricing />
        </section>

        {/* Audit Tool Section */}
        <section id="test-your-site" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white scroll-mt-20 block">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <span className="px-5 py-2 rounded-full border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] bg-orange-50/30">
                Performance Lab
              </span>
              <h2 className="mt-8 text-5xl md:text-6xl font-display font-black text-zinc-900 tracking-tight">
                Audit Your <span className="wax-text-gradient">Potential.</span>
              </h2>
              <p className="mt-6 text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                Our WAX Intelligence engine identifies ranking gaps and conversion bottlenecks in seconds.
              </p>
            </div>
            <InteractiveAI />
          </div>
        </section>

        {/* Portfolio Section */}
        {/*
        <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-50 border-y border-zinc-100 scroll-mt-20 block">
          <Portfolio />
        </section>
        */}

        {/* Testimonials Section */}
        {/*
        <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white scroll-mt-20 block">
          <Testimonials />
        </section>
        */}

        {/* Contact Section - The dark section that was likely appearing as the "black page" */}
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-zinc-900 text-white rounded-t-[60px] md:rounded-t-[100px] scroll-mt-20 block min-h-[600px]">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
