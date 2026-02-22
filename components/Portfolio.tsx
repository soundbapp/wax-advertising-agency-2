
import React from 'react';

const projects = [
  {
    title: "NEO CAR",
    category: "Automotive / Campaign",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "VIRTUAL BAZAAR",
    category: "Web3 / Identity",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "OXYGEN 2.0",
    category: "Sustainable / Film",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    title: "GLITCH BEATS",
    category: "Music / Social",
    image: "https://picsum.photos/800/600?random=4"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-orange-500 text-sm font-bold tracking-[0.3em] uppercase">The Archives</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Selected Works.</h2>
        </div>
        <button className="hidden md:block px-6 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
          All Projects
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] mb-8">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <button className="px-6 py-3 bg-white text-black font-bold rounded-full">View Study</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-display font-bold">{p.title}</h3>
                <p className="text-zinc-500 text-sm mt-1">{p.category}</p>
              </div>
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
