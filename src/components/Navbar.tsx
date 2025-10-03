import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-primary-600 font-bold text-xl">
              Sky Pixel Hub
            </span>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md font-medium">
                Services
              </a>
              <a href="#why-us" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md font-medium">
                Why Us
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md font-medium">
                Testimonials
              </a>
              <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700">
                Contact Us
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#about" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md font-medium">
              Services
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md font-medium">
              Why Us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md font-medium">
              Testimonials
            </a>
            <a href="#contact" className="bg-primary-600 text-white block px-3 py-2 rounded-md font-medium hover:bg-primary-700">
              Contact Us
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;