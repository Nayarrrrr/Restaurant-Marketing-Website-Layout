import React from 'react';
const AboutSection = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Marketing team meeting" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              At Sky Pixel Hub, we specialize in digital marketing tailored
              exclusively for the restaurant and hospitality industry. Our team
              of creative strategists, designers, and marketing experts
              understands what it takes to turn your restaurant into a
              must-visit destination—online and in person.
            </p>
            <p className="text-lg text-gray-700">
              From high-quality content creation to targeted ad campaigns, we're
              here to connect your brand with hungry customers searching for
              their next favorite spot.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;