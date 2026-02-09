import React, { useState } from 'react';
import { ImageIcon, Sparkles, History, Download, Maximize2, Wand2 } from 'lucide-react';

const GenerateImages = () => {
  const [selectedStyle, setSelectedStyle] = useState('Realistic');

  const styles = [
    'Realistic', 'Anime', 'Cyberpunk', 'Cinematic', 
    'Watercolor', 'Low-Poly 3D', 'Vaporwave', 'Fantasy'
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      
      {/* 1. Configuration Panel */}
      <div className="flex-1 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm h-fit">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
            <Sparkles size={22} strokeWidth={2.5} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Image Syntechyizer</h2>
        </div>

        <div className="space-y-6">
          {/* Keyword Input */}
          <div>
            <label className="block text-[11px] font-black text-gray-400 mb-3 ml-1 uppercase tracking-widest">Keyword</label>
            <input 
              type="text" 
              placeholder="e.g., Flying Cars"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* Prompt Area */}
          <div>
            <label className="block text-[11px] font-black text-gray-400 mb-3 ml-1 uppercase tracking-widest">Image Prompt</label>
            <textarea 
              rows="4"
              placeholder="Describe the scene in detail, e.g., A futuristic city under a double moon, digital art, neon lights..."
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all resize-none"
            />
          </div>

          {/* Style Selector */}
          <div>
            <label className="block text-[11px] font-black text-gray-400 mb-4 ml-1 uppercase tracking-widest">Creative Styles</label>
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedStyle === style
                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100'
                      : 'bg-white border-gray-100 text-gray-500 hover:border-emerald-200'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-100 flex items-center justify-center gap-3 transition-all transform active:scale-95 mt-4">
            <Wand2 size={20} />
            Create Images
          </button>
        </div>
      </div>

      {/* 2. Gallery Results Panel */}
      <div className="flex-[1.2] bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">Generated Gallery</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-[11px] font-bold text-gray-500 hover:bg-gray-100 transition-all border border-gray-100">
            <History size={14} /> HISTORY
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative aspect-square bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center overflow-hidden hover:border-emerald-200 transition-all">
              {/* This acts as a placeholder or result */}
              <div className="text-gray-300 group-hover:text-emerald-400 transition-colors flex flex-col items-center gap-3">
                <ImageIcon size={32} strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Awaiting Generation</span>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button className="p-3 bg-white rounded-xl text-emerald-600 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Download size={18} />
                </button>
                <button className="p-3 bg-white rounded-xl text-emerald-600 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Footer */}
        <div className="mt-8 pt-6 border-t border-gray-50 flex justify-center">
           <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Powered by DALL-E 3
           </p>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;