
import React from 'react'
import { Book, Cross, Heart, Users } from "lucide-react";

const About = () => {

    return (
        <section className="w-full bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
            {/* Left Image */}
            <div className="w-full h-95 md:h-112.5 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/about-image.jpg"
                alt="Worship Gathering"
                className="w-full h-full object-cover"
              />
            </div>
    
            {/* Right Content */}
            <div>
              <h4 className="text-purple-600 font-semibold tracking-wide mb-2">
                OUR STORY
              </h4>
    
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
    
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded with a passion to share the love of Christ, our church is a
                community of believers committed to worship, discipleship, and
                service. We exist to help people know God, grow in faith, and live
                out His purpose together.
              </p>
    
              <button className="px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition">
                Learn More About Us
              </button>
            </div>
          </div>
    
          {/* What We Believe Section */}
          <div className="max-w-7xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Believe
            </h2>
    
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    
              {/* Bible */}
              <div className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                <Book className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Bible
                </h3>
                <p className="text-gray-600">
                  We believe the Bible is God’s inspired Word and our guide for
                  faith and life.
                </p>
              </div>
    
              {/* Jesus Christ */}
              <div className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                <Cross className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Jesus Christ
                </h3>
                <p className="text-gray-600">
                  We believe Jesus is the Son of God who died for our sins and rose
                  again.
                </p>
              </div>
    
              {/* Salvation */}
              <div className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                <Heart className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Salvation
                </h3>
                <p className="text-gray-600">
                  We believe salvation comes through faith in Jesus Christ alone.
                </p>
              </div>
    
              {/* Community */}
              <div className="p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                <Users className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community
                </h3>
                <p className="text-gray-600">
                  We believe life is better together and we’re called to love one
                  another.
                </p>
              </div>
    
            </div>
          </div>
        </section>
      );

}

export default About

