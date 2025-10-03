import React, { useState } from 'react';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "Sky Pixel Hub completely transformed our restaurant's online presence. Their food photography made our dishes look incredible, and we saw an increase in bookings within weeks of working with them.",
    author: 'Emma Chen',
    role: 'Owner, Spice Garden Restaurant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
  }, {
    quote: "Working with Sky Pixel Hub was the best decision we made for our new bistro. Their social media strategy helped us build a loyal following even before our grand opening. Now we're booked solid every weekend!",
    author: 'Marcus Johnson',
    role: 'Chef & Co-owner, Rustic Table',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    quote: 'Our Instagram following has tripled since working with Sky Pixel Hub. The food photography is stunning and our engagement rates are through the roof. They understand restaurant marketing like no other agency.',
    author: 'Sofia Patel',
    role: 'Marketing Director, Urban Plates Group',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  const current = testimonials[currentIndex];
  return <section id="testimonials" className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <QuoteIcon className="h-8 w-8 text-primary-500 mb-4" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img src={current.image} alt={current.author} className="w-32 h-32 object-cover rounded-full border-4 border-primary-100 mx-auto" />
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "{current.quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {current.author}
                </div>
                <div className="text-primary-600">{current.role}</div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button onClick={prevTestimonial} className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors" aria-label="Previous testimonial">
                <ChevronLeftIcon className="h-6 w-6 text-primary-600" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary-600' : 'bg-primary-200'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
              </div>
              <button onClick={nextTestimonial} className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors" aria-label="Next testimonial">
                <ChevronRightIcon className="h-6 w-6 text-primary-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;