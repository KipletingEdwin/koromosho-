
import React from 'react'
import { Quote } from "lucide-react";

const Faith = () => {
    const testimonials = [
        {
          text:
            "When we walked through the doors, we immediately felt welcomed. This church has become our family, and our kids love coming every week.",
          name: "The Martinez Family",
          image: "/testimonials/martinez.jpg",
        },
        {
          text:
            "I was skeptical about church, but Grace Community changed my perspective. The teaching is relevant and the people are genuine.",
          name: "Michael Chen",
          image: "/testimonials/michael.jpg",
        },
        {
          text:
            "Being part of a small group here has helped me grow in my faith more than anything else. I've found true community and lifelong friends.",
          name: "Jennifer Wilson",
          image: "/testimonials/jennifer.jpg",
        },
      ];

      return (
        <section className="w-full bg-purple-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
    
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900">Stories of Faith</h2>
              <p className="text-gray-600 mt-3">
                Hear from members of our church family
              </p>
            </div>
    
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-purple-600 mb-4" />
    
                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{item.text}"
                  </p>
    
                  {/* Person */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="font-semibold text-gray-900">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
    
          </div>
        </section>
      );


}

export default Faith



