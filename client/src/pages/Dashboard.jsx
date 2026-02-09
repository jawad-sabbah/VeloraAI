import React from 'react'
import { Sparkles, Zap } from 'lucide-react'

const Dashboard = () => {
  const recentCreations = [
    { id: 1, title: "Navigating the Technological Frontier: Trends Shaping Our Future", type: "article", date: "6/11/2025" },
    { id: 2, title: "Background removed from an image.", type: "image", date: "6/11/2025" }
  ]

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Total Creations</p>
            <span className="text-4xl font-black text-gray-900">1</span>
          </div>
          <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-100">
            <Sparkles size={28} />
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Plan Status</p>
            <span className="text-2xl font-black text-gray-900">Premium</span>
          </div>
          <div className="w-14 h-14 bg-fuchsia-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-fuchsia-100">
            <Zap size={28} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Creations</h2>
        <div className="space-y-4">
          {recentCreations.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-50 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <h4 className="font-semibold text-gray-700 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.type} - {item.date}</p>
              </div>
              <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                item.type === 'article' ? 'bg-blue-50 text-blue-500' : 'bg-indigo-50 text-indigo-500'
              }`}>
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard