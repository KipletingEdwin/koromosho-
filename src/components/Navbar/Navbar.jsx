import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { Menu, Moon, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "About",
    "Services",
    "Events",
    "Ministries",
    "Sermons",
    "Contact",
  ];
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="ACK St James Koromosho" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              ACK St James Koromosho
            </h1>
            <p className="text-sm text-purple-600 -mt-1">
              Love God. Love People.
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item} className="hover:text-purple-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
            Give
          </button>
          <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50">
            Plan Your Visit
          </button>
          <Moon className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="w-7 h-7 text-gray-800" />
          ) : (
            <Menu className="w-7 h-7 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-md">
              Give
            </button>
            <button className="w-full px-4 py-2 border border-purple-600 text-purple-600 rounded-md">
              Plan Your Visit
            </button>
            <Moon className="w-6 h-6 text-gray-700 mt-2" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
