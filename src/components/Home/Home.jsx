
import React from 'react'

export const Home = () => {
  return (
    <section className="relative w-full h-[90vh] flex flex-col justify-center text-white ">

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-black/90"></div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        A Place to Belong
      </h1>

      <p className="text-lg md:text-xl text-gray-200 mb-8">
        Whether you're exploring faith for the first time or looking for a
        church home, you're welcome here. Join our community of believers as
        we grow together.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold">
          Plan Your Visit
        </button>

        <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full font-semibold">
          Watch Online
        </button>
      </div>
    </div>

    {/* Weekly Schedule */}
    <div className="relative z-10 bg-[#0A0F1A] text-white mt-16 py-12 mx-100 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-10">
        Join Us This Week
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Sunday */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700">SUNDAY</h3>
          <p className="font-bold mt-2">Sunday Worship</p>
          <p className="text-gray-600">9:00 AM & 11:00 AM</p>
        </div>

        {/* Wednesday */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700">WEDNESDAY</h3>
          <p className="font-bold mt-2">Wednesday Bible Study</p>
          <p className="text-gray-600">7:00 PM</p>
        </div>

        {/* Friday */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700">FRIDAY</h3>
          <p className="font-bold mt-2">Youth Group</p>
          <p className="text-gray-600">6:30 PM</p>
        </div>
      </div>
    </div>
  </section>
  )
}


////////////////////////////////////////////////////////////////////////////////////


