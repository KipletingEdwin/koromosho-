
import React from 'react'
import { CalendarDays, MapPin, Clock } from "lucide-react";

const Events = () => {
    return (
        <section className="w-full bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
    
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
              <p className="text-gray-600 mt-3">
                Join us for fellowship, growth, and community.
              </p>
            </div>
    
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    
              {/* Featured Event */}
              <div className="p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Easter Sunday Celebration
                </h3>
    
                <div className="flex items-center gap-3 text-purple-700 font-medium mb-2">
                  <CalendarDays className="w-5 h-5" />
                  <span>April 20, 2025</span>
                </div>
    
                <div className="flex items-center gap-3 text-purple-700 font-medium mb-2">
                  <Clock className="w-5 h-5" />
                  <span>9:00 AM & 11:00 AM</span>
                </div>
    
                <div className="flex items-center gap-3 text-purple-700 font-medium mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>Main Sanctuary</span>
                </div>
    
                <p className="text-gray-600 mb-6">
                  Join us for a special Easter celebration with worship, a powerful
                  message of hope, and activities for the whole family.
                </p>
    
                <button className="px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition">
                  Learn More
                </button>
              </div>
    
              {/* Right Column Events */}
              <div className="grid grid-cols-1 gap-8">
    
                {/* Event 1 */}
                <div className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Community Service Day
                  </h3>
    
                  <div className="flex items-center gap-3 text-purple-700 font-medium mt-2">
                    <CalendarDays className="w-5 h-5" />
                    <span>March 15, 2025</span>
                  </div>
    
                  <p className="text-gray-600 mt-3">
                    Serve our community together! Projects include park cleanup,
                    food bank service, and visiting nursing homes.
                  </p>
                </div>
    
                {/* Event 2 */}
                <div className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Marriage Enrichment Workshop
                  </h3>
    
                  <div className="flex items-center gap-3 text-purple-700 font-medium mt-2">
                    <CalendarDays className="w-5 h-5" />
                    <span>March 22, 2025</span>
                  </div>
    
                  <p className="text-gray-600 mt-3">
                    A day for couples to strengthen their relationship through
                    biblical principles, practical tools, and quality time together.
                  </p>
                </div>
    
                {/* Event 3 */}
                <div className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Vacation Bible School
                  </h3>
    
                  <div className="flex items-center gap-3 text-purple-700 font-medium mt-2">
                    <CalendarDays className="w-5 h-5" />
                    <span>June 16–20, 2025</span>
                  </div>
    
                  <p className="text-gray-600 mt-3">
                    A week of fun, games, crafts, and Bible stories for kids ages
                    4–12. Registration opens May 1st.
                  </p>
                </div>
    
              </div>
            </div>
    
            {/* CTA Button */}
            <div className="text-center mt-14">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-md text-lg font-semibold hover:bg-purple-700 transition">
                View All Events
              </button>
            </div>
    
          </div>
        </section>
      );


}

export default Events