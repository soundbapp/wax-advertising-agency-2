
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTopAndHash = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = hash;
    window.scrollTo(0, 0);
  };

  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="max-w-sm">
            <div className="flex items-center mb-8">
              <img src="/logos/wax%20advertising%20logo%20black.png" alt="WAX Advertising" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-zinc-500 leading-relaxed mb-10 text-base font-medium">
              We are a full-service SEO agency dedicated to molding brand success through intelligent digital strategy and placement.
            </p>
            <div className="text-zinc-400 text-xs space-y-4">
              <p className="font-black text-zinc-800 tracking-[0.2em] uppercase text-[10px]">Headquarters</p>
              <p className="font-semibold text-zinc-600">7509 Whitecedar Ln, ROWLETT, Texas 75089</p>
              <div className="pt-2">
                <p className="font-black text-zinc-900 text-2xl tracking-tight">214-789-0076</p>
                <p className="text-zinc-500 font-bold mt-1 tracking-wider uppercase text-[10px]">abba@waxadvertisingagency.com</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-900">Navigation</h4>
              <ul className="space-y-5 text-zinc-500 text-[12px] font-bold tracking-widest">
                <li><a href="#home" className="hover:text-orange-600 transition-colors uppercase">HOME</a></li>
                <li><a href="#about" className="hover:text-orange-600 transition-colors uppercase">ABOUT</a></li>
                <li><a href="#services" className="hover:text-orange-600 transition-colors uppercase">SERVICES</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-900">Agency</h4>
              <ul className="space-y-5 text-zinc-500 text-[12px] font-bold tracking-widest">
                <li><a href="#pricing" className="hover:text-orange-600 transition-colors uppercase">PRICING</a></li>
                <li><a href="#test-your-site" className="hover:text-orange-600 transition-colors uppercase">AUDIT TOOL</a></li>
                <li><a href="#contact" className="hover:text-orange-600 transition-colors uppercase">CONTACT</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-900">Legal</h4>
              <ul className="space-y-5 text-zinc-500 text-[12px] font-bold tracking-widest">
                <li><a href="#privacy" onClick={scrollToTopAndHash('privacy')} className="hover:text-orange-600 transition-colors uppercase">PRIVACY POLICY</a></li>
                <li><a href="#terms" onClick={scrollToTopAndHash('terms')} className="hover:text-orange-600 transition-colors uppercase">TERMS OF SERVICE</a></li>
                <li><a href="#careers" onClick={scrollToTopAndHash('careers')} className="hover:text-orange-600 transition-colors uppercase">CAREERS</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-28 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-400 text-[10px] font-black tracking-[0.5em] uppercase">
          <p>© {currentYear} WAX ADVERTISING AGENCY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
