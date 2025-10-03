import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">
            Sky Pixel Hub Ltd | Digital Marketing for Restaurants
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300">
            <p>📍 Offices: London | Manchester</p>
            <p>📧 hello@skypixelhub.com</p>
            <p>📞 +44 (0)203 123 4567</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>© Sky Pixel Hub Ltd | All Rights Reserved</p>
          <div className="mt-2">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;