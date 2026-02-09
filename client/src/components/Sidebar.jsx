import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  SquarePen, 
  Hash, 
  Image as ImageIcon, 
  Eraser, 
  Scissors, 
  FileText, 
  LogOut 
} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/ai' },
    { title: 'Write Article', icon: SquarePen, path: '/ai/write-article' },
    { title: 'Blog Titles', icon: Hash, path: '/ai/blog-titles' },
    { title: 'Generate Images', icon: ImageIcon, path: '/ai/generate-images' },
    { title: 'Remove Background', icon: Eraser, path: '/ai/remove-background' },
    { title: 'Remove Object', icon: Scissors, path: '/ai/remove-object' },
    { title: 'Review Resume', icon: FileText, path: '/ai/review-resume' },
  ]

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-100 flex flex-col py-10">
      
      {/* 1. Profile Section */}
      <div className="flex flex-col items-center mb-10 px-6 text-center">
        <div className="w-16 h-16 rounded-full p-1 border border-indigo-50 mb-3 shadow-sm">
          <img 
            src="https://i.pravatar.cc/150?img=12" 
            alt="User" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {/* Name: 15px with tight tracking */}
        <h4 className="text-[15px] font-bold text-gray-900 tracking-tight">William Mark</h4>
        {/* Subtitle: 11px uppercase with wide tracking for luxury feel */}
        <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-[0.1em] mt-1">Pro Member</p>
      </div>

      {/* 2. Navigation Menu */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            end={item.path === '/ai'}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group
              ${isActive 
                ? 'bg-gradient-to-r from-[#5850EC] to-[#9F7AEA] text-white shadow-md shadow-indigo-100/50' 
                : 'text-gray-500 hover:bg-indigo-50/50 hover:text-[#5850EC]'}
            `}
          >
            {/* Proper ESLint Destructuring within the child function */}
            {({ isActive }) => (
              <>
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                {/* Menu Text: 14px (text-sm) is the sweet spot for sidebars */}
                <span className="text-sm font-semibold tracking-tight">
                  {item.title}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 3. Logout */}
      <div className="px-4 mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 hover:bg-red-50/50 rounded-xl transition-all">
          <LogOut size={18} strokeWidth={2} />
          <span className="text-sm font-bold tracking-tight">Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar