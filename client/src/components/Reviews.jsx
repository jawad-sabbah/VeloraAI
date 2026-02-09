import React from 'react';
import { Star } from 'lucide-react';
import { dummyTestimonialData } from '../assets/assets.js'; 

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FAFAFE] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Loved by Creators
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users are saying about the Velora experience.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyTestimonialData.map((review, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(88,80,236,0.1)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={18}
                      fill={i < review.rating ? "#5850EC" : "transparent"}
                      className={i < review.rating ? "text-[#5850EC]" : "text-gray-200"}
                    />
                  ))}
                </div>

               
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{review.content}"
                </p>
              </div>

              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;