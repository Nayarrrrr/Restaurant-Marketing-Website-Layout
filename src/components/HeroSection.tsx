import React from 'react';
const HeroSection = () => {
  return <section className="bg-gradient-to-b from-white to-primary-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sky Pixel Hub Ltd
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-6">
              We Make Restaurants <span className="italic">Irresistible</span>{' '}
              Online
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              From mouthwatering food photography to reservation-driving social
              media campaigns, we're the secret ingredient behind restaurants
              that stand out in a crowded digital market.
              <span className="block mt-3 font-medium">
                Because empty tables are the only thing we don't serve.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Book a Free Consultation
              </a>
              <a href="#portfolio" className="inline-block border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-md transition duration-300">
                View Our Work
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Beautifully plated restaurant dish" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-gray-500">
                Our client's posts get
              </p>
              <p className="text-2xl font-bold text-primary-600">
                3.4x More Engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;