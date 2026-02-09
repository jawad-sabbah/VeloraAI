import React, { useState } from 'react';
import { FileText, Upload, ShieldCheck, Zap, BarChart3, Search, FileCheck, X } from 'lucide-react';

const ReviewResume = () => {
  const [file, setFile] = useState(null);

  const stats = [
    { label: 'ATS Score', value: '0', icon: BarChart3, color: 'text-blue-500' },
    { label: 'Keywords', value: '0', icon: Search, color: 'text-purple-500' },
    { label: 'Formatting', value: 'Ready', icon: ShieldCheck, color: 'text-emerald-500' },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full">
      
      {/* 1. Analysis Dashboard (Left) */}
      <div className="flex-1 space-y-6">
        {/* Header Card */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <FileText size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">AI Resume Intelligence</h2>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Optimization Engine</p>
              </div>
            </div>
            {file && (
              <button onClick={() => setFile(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                <X size={20} />
              </button>
            )}
          </div>

          {/* Upload Hub */}
          <div className={`
            relative group border-2 border-dashed rounded-[2rem] p-12 transition-all cursor-pointer text-center
            ${file ? 'border-indigo-500 bg-indigo-50/30' : 'border-gray-100 bg-gray-50/50 hover:border-indigo-300 hover:bg-white'}
          `}>
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setFile(e.target.files[0])} />
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-500 mx-auto mb-4 border border-gray-50">
              <Upload size={28} />
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-1">
              {file ? file.name : 'Drop your Resume here'}
            </h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">PDF or DOCX • Max 5MB</p>
          </div>

          <button 
            disabled={!file}
            className={`w-full mt-8 py-5 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95
              ${file ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100' : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'}
            `}
          >
            <Zap size={18} className={file ? 'text-indigo-300' : ''} />
            Analyze Document
          </button>
        </div>

        {/* Real-time Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <stat.icon size={20} className={`${stat.color} mb-2`} />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="text-lg font-bold text-gray-900">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Intelligent Checklist Drawer (Right) */}
      <div className="w-full xl:w-[450px] bg-gray-900 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-2xl">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-indigo-400">
              <FileCheck size={18} />
            </div>
            <h3 className="text-white font-bold tracking-tight">Review Checklist</h3>
          </div>

          <div className="flex-1 space-y-6">
            {[
              'Impactful Action Verbs',
              'Quantifiable Achievements',
              'Contact Info Accuracy',
              'ATS Keyword Density',
              'Structure & Hierarchy'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-5 h-5 rounded-full border-2 border-white/10 flex items-center justify-center transition-colors group-hover:border-indigo-500">
                  <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-indigo-500 transition-colors" />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.1em] group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
            <p className="text-xs text-gray-400 leading-relaxed italic">
              "A professional resume is the bridge between your current skills and your future career."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;