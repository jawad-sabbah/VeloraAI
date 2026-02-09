import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] bg-pink-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
     
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-medium text-indigo-700">New: AI Video Generation</span>
        </div>

        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Elevate your brand with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
            Intelligent Content
          </span>
        </h1>

        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          The all-in-one platform to write, design, and automate your creative workflow. 
          Stop staring at blank pages and start scaling your ideas today.
        </p>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to="/ai" className='w-full sm:w-auto bg-[#5850EC] hover:bg-[#453fca] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-indigo-200 active:scale-95'>
            Get Started
          </Link>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95">
            View examples
          </button>
        </div>

        
        <div className="flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="User"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-500">
            Joined by <span className="text-gray-900 font-bold">12,000+</span> creators worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;