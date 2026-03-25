
import React from 'react'
import { Plus } from "lucide-react";

const Welcome = () => {

    return (
        <section className="w-full bg-purple-700 py-24 px-6 relative overflow-hidden">
    
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('/patterns/cross-pattern.png')] bg-cover bg-center"></div>
    
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
    
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/20 flex items-center justify-center">
              <Plus className="w-10 h-10 text-white" />
            </div>
    
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-4">You're Welcome Here</h2>
    
            {/* Description */}
            <p className="text-lg text-purple-100 mb-10 leading-relaxed">
              Whether you're exploring faith or looking for a church home, we'd love to meet you.
              Join us this Sunday!
            </p>
    
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-purple-50 transition">
                Plan Your Visit
              </button>
    
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
    
          </div>
        </section>
      );

}

export default Welcome

