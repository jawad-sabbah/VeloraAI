import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for hobbyists and students exploring AI tools.",
      features: ["10 AI Generations / month", "Standard Image Quality", "Community Support", "Basic Templates"],
      buttonText: "Get Started",
      premium: false
    },
    {
      name: "Premium",
      price: "19",
      description: "For professionals who need unlimited power and speed.",
      features: ["Unlimited AI Generations", "Ultra HD Image Export", "Priority 24/7 Support", "Advanced Custom Templates", "Commercial Usage License"],
      buttonText: "Go Premium",
      premium: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Ready to scale?</h2>
          <p className="text-gray-500 text-lg">Choose the plan that fits your creative needs.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-10 rounded-[2.5rem] transition-all duration-500 ${
                plan.premium 
                ? 'bg-[#5850EC] text-white shadow-2xl shadow-indigo-200 scale-105 z-10' 
                : 'bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.premium && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-extrabold">${plan.price}</span>
                  <span className={`text-sm ${plan.premium ? 'text-indigo-100' : 'text-gray-500'}`}>/month</span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.premium ? 'text-indigo-50' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.premium ? 'bg-white/20' : 'bg-indigo-50'}`}>
                      <Check size={14} className={plan.premium ? 'text-white' : 'text-[#5850EC]'} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
                plan.premium 
                ? 'bg-white text-[#5850EC] hover:bg-indigo-50 shadow-lg' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;