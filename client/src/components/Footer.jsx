import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#5850EC] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">Velora.ai</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              Empowering creators with next-generation AI tools to write, design, and innovate faster than ever before.
            </p>
            <div className="flex gap-4">
              {/* Simple Social Icons Placeholder */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-indigo-50 hover:text-[#5850EC] cursor-pointer transition-all">
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">AI Writer</li>
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">Image Gen</li>
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-[#5850EC] cursor-pointer transition-colors">Cookies</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Velora AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;