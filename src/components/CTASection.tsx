import React from 'react';
const CTASection = () => {
  return <section id="contact" className="py-16 bg-white relative overflow-hidden">
      {/* Decorative food elements */}
      <div className="absolute -right-16 -top-10 opacity-10">
        <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-64 h-64 object-cover rounded-full" />
      </div>
      <div className="absolute -left-16 -bottom-10 opacity-10">
        <img src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="w-64 h-64 object-cover rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary-50 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-100">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to be the talk of the town?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let's cook up a marketing strategy that fills your tables and
              grows your restaurant brand. Book your free 30-minute consultation
              today.
            </p>
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-1">
                      Restaurant Name
                    </label>
                    <input type="text" id="restaurant" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="Your restaurant" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?
                  </label>
                  <textarea id="message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about your restaurant and marketing goals"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Book Your Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;