
import React, { useState } from 'react';
import { Search, Target, Smartphone, ShieldCheck, Brain, Zap, type LucideIcon } from 'lucide-react';
import Modal from './Modal';

interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  details: string;
  benefits: string[];
}

const iconClassName = 'w-6 h-6 text-zinc-700 group-hover:text-orange-600 transition-colors duration-300';
const iconContainerClassName = 'inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-100 group-hover:bg-orange-50 transition-all duration-300 group-hover:scale-105';

const services: Service[] = [
  {
    title: "SEO & SEM SERVICES",
    desc: "When potential clients search online, do you appear at the top? We optimize your presence for Google, Yahoo, and Bing.",
    icon: Search,
    details: "Our comprehensive SEO and SEM services ensure your business dominates search engine results. We combine technical optimization, keyword strategy, and content marketing to drive organic traffic and maximize your online visibility across all major search platforms.",
    benefits: [
      "Guaranteed first-page listings on major search engines",
      "Comprehensive keyword research and optimization",
      "Technical SEO audits and fixes",
      "Content strategy and optimization",
      "Link building and authority development",
      "Ongoing monitoring and performance tracking"
    ]
  },
  {
    title: "PPC MANAGEMENT",
    desc: "Whether your campaign is up and running or needs a fresh start, we manage your paid spend for maximum qualified leads.",
    icon: Target,
    details: "Maximize your return on ad spend with our expert PPC management. We create, optimize, and manage your paid advertising campaigns across Google, Bing, and social platforms to deliver qualified leads at the lowest cost per acquisition.",
    benefits: [
      "Campaign setup and optimization",
      "Keyword research and bid management",
      "Ad copy creation and A/B testing",
      "Landing page optimization",
      "Conversion tracking and analytics",
      "Monthly performance reports and strategy adjustments"
    ]
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    desc: "Our staff writes your articles and posts at your direction, managing your social links and engagement seamlessly.",
    icon: Smartphone,
    details: "Build and maintain a strong social media presence that engages your audience and drives business results. Our team creates compelling content, manages your social accounts, and fosters meaningful connections with your customers.",
    benefits: [
      "Content creation and scheduling",
      "Multi-platform management",
      "Community engagement and response",
      "Social media strategy development",
      "Performance analytics and reporting",
      "Crisis management and reputation protection"
    ]
  },
  {
    title: "REPUTATION MANAGEMENT",
    desc: "Negative information appearing in searches? We help you manage your name and company's reputation effectively.",
    icon: ShieldCheck,
    details: "Protect and enhance your online reputation with our comprehensive reputation management services. We monitor your digital presence, address negative content, and build positive visibility to ensure your brand maintains a stellar online image.",
    benefits: [
      "24/7 reputation monitoring",
      "Negative content suppression",
      "Positive content creation and promotion",
      "Review management and response",
      "Crisis communication strategies",
      "Brand protection and defense"
    ]
  },
  {
    title: "AI BRAND SOLUTIONS",
    desc: "Harness Gen-AI to create intelligent brand molding strategies and automate creative campaign workflows.",
    icon: Brain,
    details: "Leverage cutting-edge AI technology to revolutionize your marketing efforts. Our AI-powered solutions automate workflows, generate creative content, and provide intelligent insights to optimize your brand strategy and campaign performance.",
    benefits: [
      "AI-powered content generation",
      "Automated campaign optimization",
      "Predictive analytics and insights",
      "Intelligent audience targeting",
      "Workflow automation",
      "Custom AI solutions for your brand"
    ]
  },
  {
    title: "HOSTING & OPTIMIZATION",
    desc: "Full website hosting and updating services to ensure your site stays 90-100% compliant with search criteria.",
    icon: Zap,
    details: "Keep your website fast, secure, and fully optimized for search engines. Our hosting and optimization services ensure your site maintains peak performance, security, and SEO compliance at all times.",
    benefits: [
      "Reliable website hosting",
      "Regular security updates",
      "Performance optimization",
      "SEO compliance monitoring",
      "Backup and disaster recovery",
      "Technical support and maintenance"
    ]
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleContactClick = () => {
    setSelectedService(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-zinc-100 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 group">
              <div className={`${iconContainerClassName} mb-6`}>
                <s.icon className={iconClassName} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-display font-bold mb-4 tracking-tight">{s.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-8">
                <button
                  onClick={() => handleViewDetails(s)}
                  className="text-[10px] font-bold tracking-widest text-orange-600 hover:text-orange-700 flex items-center gap-2 uppercase"
                >
                  View Details
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={handleCloseModal}
        title={selectedService?.title}
        size="lg"
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center">
                <selectedService.icon className="w-7 h-7 text-zinc-700" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <p className="text-zinc-600 leading-relaxed text-base font-medium">
                  {selectedService.details}
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100">
              <h4 className="text-lg font-display font-bold text-zinc-900 mb-4">Key Benefits:</h4>
              <ul className="space-y-3">
                {selectedService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                    <span className="text-zinc-600 text-sm font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-zinc-100">
              <button
                onClick={handleContactClick}
                className="w-full py-5 rounded-2xl bg-orange-600 text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-orange-500 transition-all duration-500 shadow-xl shadow-orange-600/20 active:scale-95"
              >
                GET STARTED WITH {selectedService.title}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Services;
