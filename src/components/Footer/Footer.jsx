
import React from 'react'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {

    return (
        <footer className="w-full bg-gray-900 text-gray-300 pt-20 pb-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
    
            {/* Left Column – Mission */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Grace Community Church
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A welcoming community of faith helping people know God, find freedom,
                discover purpose, and make a difference.
              </p>
    
              {/* Social Icons */}
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 hover:text-white transition cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-white transition cursor-pointer" />
                <Youtube className="w-6 h-6 hover:text-white transition cursor-pointer" />
              </div>
            </div>
    
            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li className="hover:text-white transition cursor-pointer">Plan Your Visit</li>
                <li className="hover:text-white transition cursor-pointer">Service Times</li>
                <li className="hover:text-white transition cursor-pointer">Small Groups</li>
                <li className="hover:text-white transition cursor-pointer">Contact Us</li>
              </ul>
            </div>
    
            {/* Grow */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Grow</h3>
              <ul className="space-y-2">
                <li className="hover:text-white transition cursor-pointer">Sermons</li>
                <li className="hover:text-white transition cursor-pointer">Events</li>
                <li className="hover:text-white transition cursor-pointer">Ministries</li>
                <li className="hover:text-white transition cursor-pointer">Give Online</li>
              </ul>
            </div>
    
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li className="hover:text-white transition cursor-pointer">About Us</li>
                <li className="hover:text-white transition cursor-pointer">Our Beliefs</li>
                <li className="hover:text-white transition cursor-pointer">Leadership</li>
                <li className="hover:text-white transition cursor-pointer">Prayer Request</li>
              </ul>
            </div>
          </div>
    
          {/* Divider */}
          <div className="border-t border-gray-700 my-12"></div>
    
          {/* Bottom Info Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400">
    
            {/* Service Times */}
            <div>
              <h4 className="text-white font-semibold mb-3">Service Times</h4>
              <p>Sunday: 9:00 AM & 11:00 AM</p>
              <p>Wednesday: 7:00 PM</p>
            </div>
    
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@gracecommunity.church
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4" /> (512) 555-1234
              </p>
            </div>
    
            {/* Location */}
            <div>
              <h4 className="text-white font-semibold mb-3">Location</h4>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 1200 Faith Avenue
              </p>
              <p>Austin, TX 78701</p>
            </div>
          </div>
    
          {/* Bottom Bar */}
          <div className="text-center text-gray-500 text-sm mt-12">
            © 2026 Grace Community Church. All rights reserved.
            <div className="mt-2 flex justify-center gap-6">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </footer>
      );

}

export default Footer

///////////////////////////////////////////////////
