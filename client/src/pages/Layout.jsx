import { useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { assets } from '../assets/assets.js'
import { MenuIcon, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSideBarOpen] = useState(false)

  return (
    <div className='flex flex-col h-screen w-full bg-[#F8F9FD] overflow-hidden'>
      {/* 1. Fixed Top Navbar - Flush with Sidebar */}
      <nav className='w-full h-16 px-8 flex items-center justify-between border-b border-gray-100 bg-white z-50 shrink-0'>
        <img 
          src={assets.logo} 
          alt="VeloraAI Logo" 
          className="h-7 cursor-pointer" 
          onClick={() => navigate('/')} 
        />
        
        <div className="sm:hidden">
          {sidebarOpen 
            ? <X onClick={() => setSideBarOpen(false)} className='w-6 h-6 text-gray-600 cursor-pointer' />
            : <MenuIcon onClick={() => setSideBarOpen(true)} className='w-6 h-6 text-gray-600 cursor-pointer' />
          }
        </div>
      </nav>

      {/* 2. Main Body Container */}
      <div className='flex flex-1 overflow-hidden relative'>
        
        {/* Sidebar Wrapper - h-full and relative to remove margins */}
        <div className={`
          absolute inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out 
          sm:relative sm:translate-x-0 shrink-0 h-full
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar />
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 sm:hidden" 
            onClick={() => setSideBarOpen(false)}
          />
        )}

        {/* 3. Scrollable Content Area */}
        <main className='flex-1 overflow-y-auto bg-[#FBFBFF] p-6 md:p-10'>
          <div className="max-w-6xl mx-auto">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout