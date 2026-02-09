import React, { useState } from 'react';
import { Sparkles, PenTool, Wand2, Info } from 'lucide-react';

const WriteArticle = () => {
  const [length, setLength] = useState('concise');

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Left Side: Form Parameters */}
      <div className="flex-1 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
        
        {/* Header & Credits */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <Sparkles size={22} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">AI Article Composer</h2>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl text-xs font-bold transition-all border border-gray-100">
            <Wand2 size={14} />
            History
          </button>
        </div>

        {/* Credit Meter */}
        <div className="mb-10 p-5 bg-gray-50/50 rounded-3xl border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Word Credits</span>
            <span className="text-[11px] font-bold text-indigo-600">75% Available</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-3 ml-1 uppercase tracking-wider">Article Focus / Topic</label>
            <input 
              type="text" 
              placeholder="e.g., The future of sustainable architecture"
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-300"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-3 ml-1 uppercase tracking-wider">Target Keywords</label>
            <input 
              type="text" 
              placeholder="Enter keywords separated by commas"
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-300"
            />
          </div>

          {/* Length Toggle */}
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-3 ml-1 uppercase tracking-wider">Content Length</label>
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
              <button 
                onClick={() => setLength('concise')}
                className={`py-3 rounded-xl text-xs font-bold transition-all ${length === 'concise' ? 'bg-white shadow-sm text-indigo-600 border border-indigo-50' : 'text-gray-400'}`}
              >
                Concise (300-500 words)
              </button>
              <button 
                onClick={() => setLength('long')}
                className={`py-3 rounded-xl text-xs font-bold transition-all ${length === 'long' ? 'bg-white shadow-sm text-indigo-600 border border-indigo-50' : 'text-gray-400'}`}
              >
                Detailed (800+ words)
              </button>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full mt-4 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]">
            <PenTool size={18} />
            Compose Article
          </button>
        </div>
      </div>

      {/* 2. Right Side: Draft Article Preview */}
      <div className="flex-1 min-h-[500px] bg-[#1E1E2E] rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col items-center justify-center text-center">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4F46E5 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 flex flex-col items-center max-w-[280px]">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 flex items-center justify-center text-white mb-6 animate-pulse">
            <PenTool size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Draft Article Preview</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Configure your parameters on the left and click <span className="text-indigo-400 font-bold">"Compose"</span> to watch the AI magic happen.
          </p>
        </div>

        {/* Floating Tooltip */}
        <div className="absolute bottom-8 flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-gray-300 font-medium uppercase tracking-widest">
          <Info size={12} className="text-indigo-400" />
          Real-time AI Generation
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;