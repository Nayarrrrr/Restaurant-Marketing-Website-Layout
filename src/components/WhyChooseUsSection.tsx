import React from 'react';
import { CheckIcon } from 'lucide-react';
const WhyChooseUsSection = () => {
  const reasons = ['Restaurant-Focused Expertise – We know the food industry inside out.', "Tailor-Made Strategies – No cookie-cutter solutions. Every campaign is built around your restaurant's goals.", 'Results That Matter – More customers. More bookings. More brand loyalty.'];
  return <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sky Pixel Hub?
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Team collaboration" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <ul className="space-y-6">
              {reasons.map((reason, index) => <li key={index} className="flex items-start">
                  <span className="mr-3 bg-primary-100 p-1 rounded-full">
                    <CheckIcon className="h-5 w-5 text-primary-600" />
                  </span>
                  <span className="text-lg text-gray-700">{reason}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;