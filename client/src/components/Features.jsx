import React from 'react';
import { AiToolsData } from '../assets/assets.js'; // Ensure this points to your data file

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white scroll-mt-24 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-24 left-10 w-64 h-64 bg-indigo-200 rounded-full blur-[100px]" />
        <div className="absolute bottom-24 right-10 w-64 h-64 bg-purple-200 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with a different alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Unlock the Power of <br />
              <span className="text-[#5850EC]">Next-Gen AI</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-md text-left md:text-right">
            Streamline your creative workflow with professional tools designed for the modern creator.
          </p>
        </div>

        {/* The Unique Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {AiToolsData.map((tool, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              {/* Floating Icon Logic */}
              <div 
                className="absolute -top-6 left-8 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transform transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})`,
                  boxShadow: `0 10px 20px -5px ${tool.bg.from}66` // Dynamic shadow color
                }}
              >
                <tool.Icon size={28} strokeWidth={2} />
              </div>

              {/* Content with padding adjustment for the floating icon */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#5850EC] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-500 leading-relaxed line-clamp-3">
                  {tool.description}
                </p>
              </div>

              {/* Bottom "Learn More" link that appears on hover */}
              <div className="mt-6 pt-6 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-bold text-[#5850EC] flex items-center gap-2">
                  Explore Tool 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;