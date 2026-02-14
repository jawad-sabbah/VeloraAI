import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4" 
         style={{ backgroundImage: 'radial-gradient(at top right, #EEF2FF 0%, #FFFFFF 50%)' }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Enter your details to access your AI tools</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent outline-none transition"
              placeholder="name@company.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-[#5D5FEF] hover:underline">Forgot password?</a>
            </div>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-[#5D5FEF] hover:bg-[#4A4CCF] text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-100">
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            Don't have an account? <a href="/register" className="text-[#5D5FEF] font-semibold hover:underline">Start creating now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;