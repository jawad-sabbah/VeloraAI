import React, { useState } from 'react';
import { Scissors, Upload, Sparkles, X, ChevronRight, Image as ImageIcon, Info } from 'lucide-react';

const RemoveObject = () => {
  const [file, setFile] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(true);

  return (
    <div className="flex h-[calc(100vh-120px)] gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Main Workspace (The "Command Center") */}
      <div className={`flex-1 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col transition-all duration-500`}>
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <Scissors size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Smart Object Eraser</h2>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">AI-Powered Inpainting</p>
            </div>
          </div>
          
          {!previewOpen && (
            <button 
              onClick={() => setPreviewOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-all"
            >
              Show Preview <ChevronRight size={14} />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Step 1: Upload */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 ml-1">
               <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-[10px] flex items-center justify-center font-bold">01</span>
               <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Upload Source Image</label>
            </div>
            <div className="relative group border-2 border-dashed border-gray-200 rounded-[2rem] p-12 hover:border-indigo-400 hover:bg-indigo-50/10 transition-all cursor-pointer text-center">
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setFile(e.target.files[0])} />
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Upload size={28} />
              </div>
              <p className="text-sm font-bold text-gray-800">{file ? file.name : 'Click to select or drag and drop'}</p>
              <p className="text-xs text-gray-400 mt-1">High-res PNG or JPG preferred</p>
            </div>
          </div>

          {/* Step 2: Instruction */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 ml-1">
               <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-[10px] flex items-center justify-center font-bold">02</span>
               <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">What should we remove?</label>
            </div>
            <textarea 
              placeholder="e.g., Remove the red car in the background and the power lines..."
              className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-[1.5rem] text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all min-h-[120px] resize-none"
            />
          </div>

          <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex gap-4">
             <Info className="text-indigo-500 shrink-0" size={20} />
             <p className="text-[12px] text-indigo-700 font-medium leading-relaxed">
               Our AI works best when you describe the object and its location relative to other things in the photo.
             </p>
          </div>
        </div>

        <div className="p-8 bg-gray-50/50 border-t border-gray-50">
          <button className="w-full py-5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95">
            <Sparkles size={18} className="text-indigo-400" />
            Process Image
          </button>
        </div>
      </div>

      {/* 2. Side Preview Drawer */}
      <div className={`bg-[#1E1E2E] rounded-[2.5rem] transition-all duration-500 relative overflow-hidden flex flex-col ${previewOpen ? 'w-[400px] opacity-100' : 'w-0 opacity-0'}`}>
        <div className="p-8 flex items-center justify-between border-b border-white/5 relative z-10">
          <h3 className="text-white font-bold tracking-tight">Real-time Preview</h3>
          <button onClick={() => setPreviewOpen(false)} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10">
          <div className="w-24 h-24 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center text-gray-600 mb-6">
            <ImageIcon size={40} strokeWidth={1} />
          </div>
          <p className="text-white font-bold text-lg mb-2">Awaiting Image</p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
            Once you upload a file, the processed version will appear here instantly.
          </p>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4F46E5 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>
    </div>
  );
};

export default RemoveObject;