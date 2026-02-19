import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate(); 
    
  const handleStart = () => {
   const token = localStorage.getItem('token');
 
  if (token) {
    navigate('/ai');
  } else {
    navigate('/login');
  }
};


  return (
   
    <nav className="w-full bg-transparent backdrop-blur-sm absolute top-0 left-0 z-50 transition-all duration-300">
      
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-6">
        
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-[#5850EC] rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-bold text-[#111827] tracking-tight">
            Velora.ai
          </span>
        </div>

        <button  onClick={handleStart}  className="bg-[#5850EC] hover:bg-[#453fca] text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-indigo-200">
          get started
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;