
import React from 'react'
import { User, Users, HeartHandshake, Music, Globe, HelpingHand } from "lucide-react";

const Ministries = () => {
    const ministries = [
        {
          title: "Children's Ministry",
          description:
            "Age-appropriate programs for infants through 5th grade, helping kids discover God’s love through fun, interactive lessons.",
          leader: "Sarah Johnson",
          when: "Sundays during services",
          image: "/ministries/children.jpg",
          icon: User,
        },
        {
          title: "Youth Ministry",
          description:
            "A community for middle and high school students to grow in faith, build friendships, and make a difference.",
          leader: "Pastor Mike Davis",
          when: "Fridays 6:30 PM",
          image: "/ministries/youth.jpg",
          icon: Users,
        },
        {
          title: "Small Groups",
          description:
            "Connect with others in a smaller setting for Bible study, prayer, and authentic community. Groups meet throughout the week.",
          leader: null,
          when: "Various times",
          image: "/ministries/smallgroups.jpg",
          icon: HeartHandshake,
        },
        {
          title: "Worship Team",
          description:
            "Use your musical gifts to lead our congregation in worship. Auditions held quarterly.",
          leader: "David Chen",
          when: "Thursdays 7:00 PM",
          image: "/ministries/worship.jpg",
          icon: Music,
        },
        {
          title: "Outreach & Missions",
          description:
            "Serve locally and globally through community service projects, mission trips, and partner support.",
          leader: "Pastor Rachel Kim",
          when: null,
          image: "/ministries/outreach.jpg",
          icon: Globe,
        },
        {
          title: "Care Ministry",
          description:
            "Providing practical support to those in need through meals, visits, prayer, and encouragement.",
          leader: "Linda Martinez",
          when: null,
          image: "/ministries/care.jpg",
          icon: HelpingHand,
        },
      ];


      return (
        <section className="w-full bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
    
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900">Get Connected</h2>
              <p className="text-gray-600 mt-3">
                Find your place in our church family through one of our ministries.
              </p>
            </div>
    
            {/* Ministries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ministries.map((ministry, index) => {
                const Icon = ministry.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white overflow-hidden"
                  >
                    {/* Image */}
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={ministry.image}
                        alt={ministry.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-7 h-7 text-purple-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {ministry.title}
                        </h3>
                      </div>
    
                      <p className="text-gray-600 mb-4">{ministry.description}</p>
    
                      {ministry.leader && (
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Leader:</span>{" "}
                          {ministry.leader}
                        </p>
                      )}
    
                      {ministry.when && (
                        <p className="text-sm text-gray-700 mt-1">
                          <span className="font-semibold">When:</span>{" "}
                          {ministry.when}
                        </p>
                      )}
    
                      <button className="mt-4 text-purple-600 font-semibold hover:underline">
                        Learn More →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
    
            {/* CTA Button */}
            <div className="text-center mt-14">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-md text-lg font-semibold hover:bg-purple-700 transition">
                View All Ministries
              </button>
            </div>
          </div>
        </section>
      );


}

export default Ministries



