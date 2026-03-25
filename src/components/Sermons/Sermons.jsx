
import React from 'react'
import { PlayCircle } from "lucide-react";

const Sermons = () => {

    const sermons = [
        {
          theme: "FAITH OVER FEAR",
          title: "Finding Peace in Uncertain Times",
          speaker: "Pastor James Thompson",
          date: "March 3, 2025",
          image: "/sermons/faith-over-fear.jpg",
        },
        {
          theme: "BETTER TOGETHER",
          title: "The Power of Community",
          speaker: "Pastor Rachel Kim",
          date: "February 24, 2025",
          image: "/sermons/better-together.jpg",
        },
        {
          theme: "CREATED FOR MORE",
          title: "Living with Purpose",
          speaker: "Pastor James Thompson",
          date: "February 17, 2025",
          image: "/sermons/created-for-more.jpg",
          hasPlayButton: true,
        },
        {
          theme: null,
          title: "Grace That Changes Everything",
          speaker: "Pastor James Thompson",
          date: "February 10, 2025",
          image: "/sermons/grace-that-changes.jpg",
        },
      ];
    
      return (
        <section className="w-full bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
    
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900">Recent Sermons</h2>
              <p className="text-gray-600 mt-3">
                Missed a Sunday? Catch up on our latest messages.
              </p>
            </div>
    
            {/* Sermons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {sermons.map((sermon, index) => (
                <div
                  key={index}
                  className="rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={sermon.image}
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                    />
    
                    {/* Optional Play Button */}
                    {sermon.hasPlayButton && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <PlayCircle className="w-14 h-14 text-white drop-shadow-lg" />
                      </div>
                    )}
                  </div>
    
                  {/* Content */}
                  <div className="p-6">
                    {sermon.theme && (
                      <p className="text-xs font-bold text-purple-600 tracking-wide mb-2">
                        {sermon.theme}
                      </p>
                    )}
    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {sermon.title}
                    </h3>
    
                    <p className="text-sm text-gray-700">
                      {sermon.speaker}
                    </p>
    
                    <p className="text-sm text-gray-500 mt-1">
                      {sermon.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
    
            {/* CTA Button */}
            <div className="text-center mt-14">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-md text-lg font-semibold hover:bg-purple-700 transition">
                View All Sermons
              </button>
            </div>
    
          </div>
        </section>
      );

}

export default Sermons
