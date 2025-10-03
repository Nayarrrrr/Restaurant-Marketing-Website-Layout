import React from 'react';
import { CameraIcon, PaletteIcon, InstagramIcon, MonitorSmartphoneIcon, UsersIcon, GlobeIcon } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    icon: <CameraIcon className="h-10 w-10 text-primary-600" />,
    title: 'Food Photography & Videography',
    description: 'Professional food styling and photography that captures the perfect shot of every dish. We make your food look as good as it tastes.'
  }, {
    icon: <PaletteIcon className="h-10 w-10 text-primary-600" />,
    title: 'Restaurant Branding & Design',
    description: "From menus to signage, we create a cohesive visual identity that reflects your restaurant's unique atmosphere and cuisine."
  }, {
    icon: <InstagramIcon className="h-10 w-10 text-primary-600" />,
    title: 'Social Media Management',
    description: 'Daily content, stories, and engagement that turn followers into diners. We handle everything from content calendars to community management.'
  }, {
    icon: <MonitorSmartphoneIcon className="h-10 w-10 text-primary-600" />,
    title: 'Digital Advertising Campaigns',
    description: 'Targeted ads that reach hungry customers at the right time. We specialize in local SEO and geo-targeted campaigns that drive reservations.'
  }, {
    icon: <UsersIcon className="h-10 w-10 text-primary-600" />,
    title: 'Influencer & Community Marketing',
    description: 'Connections with local food bloggers and influencers who can introduce your restaurant to thousands of potential customers.'
  }, {
    icon: <GlobeIcon className="h-10 w-10 text-primary-600" />,
    title: 'Website & Online Ordering Solutions',
    description: 'Beautiful, mobile-optimized websites with integrated reservation and ordering systems that convert visitors into customers.'
  }];
  return <section id="services" className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu of Services
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Everything your restaurant needs to stand out in a competitive
            digital landscape and keep your tables full.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;