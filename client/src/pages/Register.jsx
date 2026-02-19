import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authApi';

const Register = () => {
  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: ''
  });

  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
     await registerUser(formData);
 
      setLoading(false);
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong.');
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4"
      style={{ backgroundImage: 'radial-gradient(at top right, #EEF2FF 0%, #FFFFFF 100%)' }}
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 border border-gray-50">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create account</h2>
          <p className="text-gray-500 mt-2 font-medium">Start creating amazing content with AI</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="John Doe"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-[#5D5FEF]/20 focus:border-[#5D5FEF] outline-none transition-all placeholder:text-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-[#5D5FEF]/20 focus:border-[#5D5FEF] outline-none transition-all placeholder:text-gray-300"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-[#5D5FEF]/20 focus:border-[#5D5FEF] outline-none transition-all placeholder:text-gray-300"
              required
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5D5FEF] hover:bg-[#4A4CCF] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-100 mt-4 flex justify-center items-center gap-2 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Get Started →'}
          </button>
        </form>

        {/* Footer / Social Proof */}
        <div className="mt-10 text-center">
          <div className="flex justify-center -space-x-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" />
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Trusted by 10k+ creators</p>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              Already have an account? <Link to="/login" className="text-[#5D5FEF] font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
