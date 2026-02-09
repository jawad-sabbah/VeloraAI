import React, { useState } from 'react';
import { Hash, Sparkles, Wand2, PlusCircle, CheckCircle2 } from 'lucide-react';

const BlogTitles = () => {
  const [selectedCategory, setSelectedCategory] = useState('General');
  
  const categories = [
    'General', 'Technology', 'Business', 'Health', 
    'Lifestyle', 'Education', 'Travel', 'Food', 'Marketing'
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Left Input Panel */}
      <div className="flex-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
            <Hash size={22} strokeWidth={2.5} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">AI Title Engine</h2>
        </div>

        <div className="space-y-8">
          {/* Keyword Input */}
          <div>
            <label className="block text-[12px] font-bold text-gray-400 mb-3 ml-1 uppercase tracking-[0.15em]">
              Primary Keyword
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g., Artificial Intelligence in 2026"
                className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-purple-500/5 focus:border-purple-500 transition-all"
              />
              <Sparkles className="absolute right-4 top-4 text-purple-300" size={18} />
            </div>
          </div>

          {/* Category Cloud Selector */}
          <div>
            <label className="block text-[12px] font-bold text-gray-400 mb-4 ml-1 uppercase tracking-[0.15em]">
              Content Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all border ${
                    selectedCategory === cat
                      ? 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-100'
                      : 'bg-white border-gray-100 text-gray-500 hover:border-purple-200 hover:text-purple-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl font-bold text-[15px] shadow-lg shadow-purple-100 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] mt-4">
            <Wand2 size={20} />
            Generate Viral Titles
          </button>
        </div>
      </div>

      {/* 2. Right Result Panel */}
      <div className="flex-1 bg-[#F8F9FF] rounded-[2rem] border-2 border-dashed border-indigo-100 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[450px]">
        
        {/* Decorative element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[320px]">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-indigo-100/50 flex items-center justify-center text-indigo-500 mb-6 mx-auto border border-indigo-50">
            <PlusCircle size={32} strokeWidth={1.5} className="animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Create?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Enter your keywords and select a category to generate SEO-optimized titles for your next big blog post.
          </p>
          
          <div className="space-y-3">
             <div className="flex items-center gap-2 text-[11px] font-bold text-indigo-400 uppercase tracking-widest justify-center">
                <CheckCircle2 size={14} /> SEO Optimized
             </div>
             <div className="flex items-center gap-2 text-[11px] font-bold text-indigo-400 uppercase tracking-widest justify-center">
                <CheckCircle2 size={14} /> Click-Through Ready
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;