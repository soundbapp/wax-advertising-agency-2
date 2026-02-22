
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'AUDIT', href: '#test-your-site' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    
    // If clicking home from a legal page, navigate back to main page
    if (id === 'home' && (window.location.hash === '#privacy' || window.location.hash === '#terms' || window.location.hash === '#careers')) {
      window.location.hash = 'home';
      window.scrollTo(0, 0);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust based on navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update hash in URL without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'py-4 bg-white backdrop-blur-md border-b border-black/5 shadow-sm' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center group cursor-pointer"
        >
          <img src="/logos/wax%20advertising%20logo%20black.png" alt="WAX Advertising" className="h-14 w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[11px] font-black tracking-[0.25em] text-zinc-500 hover:text-orange-600 transition-all uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="px-8 py-3.5 rounded-2xl bg-zinc-900 text-white text-[11px] font-black tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-zinc-900/10 uppercase active:scale-95"
        >
          GET STARTED
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
