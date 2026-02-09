import React, { useState } from 'react';
import { Eraser, Upload, Image as ImageIcon, CheckCircle2, AlertCircle, X } from 'lucide-react';

const RemoveBackground = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Upload & Action Panel */}
      <div className="flex-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
            <Eraser size={22} strokeWidth={2.5} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">AI Background Eraser</h2>
        </div>

        <div className="space-y-6">
          {/* Enhanced Drag & Drop Zone */}
          <div className="relative group">
            <input 
              type="file" 
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              accept="image/*"
            />
            <div className={`
              border-2 border-dashed rounded-[2rem] p-10 flex flex-col items-center justify-center transition-all
              ${file ? 'border-orange-200 bg-orange-50/30' : 'border-gray-200 bg-gray-50/50 group-hover:border-orange-300 group-hover:bg-orange-50/10'}
            `}>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-500 mb-4 border border-gray-100">
                <Upload size={28} />
              </div>
              
              {file ? (
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-800 mb-1">{file.name}</p>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">File Ready for processing</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-800 mb-1">Drop your image here</p>
                  <p className="text-xs text-gray-400">Supports JPG, PNG, and WebP formats</p>
                </div>
              )}
            </div>
          </div>

          {/* Guidelines Section */}
          <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex gap-3">
             <AlertCircle size={18} className="text-blue-500 shrink-0" />
             <p className="text-[11px] text-blue-700 leading-relaxed font-medium">
               For best results, ensure the subject has clear edges and a distinct contrast from the background.
             </p>
          </div>

          {/* Action Button */}
          <button 
            disabled={!file}
            className={`
              w-full py-4 rounded-2xl font-bold text-[15px] flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] mt-4
              ${file 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-100 hover:from-orange-600 hover:to-red-600' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
          >
            <Eraser size={20} />
            Remove Background
          </button>
        </div>
      </div>

      {/* 2. Processed Result Preview */}
      <div className="flex-1 bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col shadow-sm min-h-[450px]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" />
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Processed Result</h3>
          </div>
          {file && (
            <button 
              onClick={() => setFile(null)}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        {/* Preview Content Area */}
        <div className="flex-1 rounded-[1.5rem] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center p-10 relative">
          <div className="relative z-10 max-w-[240px]">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-200 mb-6 mx-auto border border-gray-50">
              <ImageIcon size={32} strokeWidth={1.5} />
            </div>
            <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase tracking-[0.15em]">
              Result will appear here after processing
            </p>
          </div>
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gray-200 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gray-200 rounded-br-lg" />
        </div>

        {/* Pro Tip Footer */}
        <div className="mt-6 flex items-center justify-center gap-2">
           <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
           <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
             High Resolution Output Enabled
           </p>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;