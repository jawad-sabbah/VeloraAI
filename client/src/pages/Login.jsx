import { loginUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

   const navigate=useNavigate();
   const[formData,setFormData]=useState({
    email:'',
    password:''
   })
   //start error state with an empty string. This state will be used to store any error messages that occur during the login process, allowing us to display them to the user if needed.
   const [error,setError]=useState('');

   //handle input change
   const handleChange=async (e) => {
     //take values
     const{name,value}=e.target;
     setFormData({
      ...formData,
      [name]:value
     })
   }

   const handleLogin=async (e) => {
    //we use preventDefault to prevent the default form submission behavior, which would cause a page reload. This allows us to handle the login logic asynchronously without refreshing the page.
    e.preventDefault();
    setError('');
    try {
      const response=await loginUser(formData);
      console.log('login response:',response);

      //store token in local storage
      localStorage.setItem('token', response.data.token);
      if (response.success) {
        navigate('/ai');
      }


      
    } catch (err) {
        setError(
      err.response?.data?.message ||
      err.message ||
      "Login failed"
    );
    }
   }


  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4" 
         style={{ backgroundImage: 'radial-gradient(at top right, #EEF2FF 0%, #FFFFFF 50%)' }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Enter your details to access your AI tools</p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              name='email'
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-[#5D5FEF] hover:bg-[#4A4CCF] text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-100">
            Sign In
          </button>
                     {/* add error message */}
          { error && <p className="text-red-500 text-sm mt-2">{error}</p> }
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