
import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Construction Worker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Aabha healthcare helped me get fair wages when my employer was refusing to pay. Their legal aid team fought for my rights and won. Now I can support my family with dignity."
    },
    {
      name: "Priya Sharma",
      role: "Domestic Worker",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "The skill development program changed my life. I learned tailoring and now run my own small business. My children will have a better future because of Aabha healthcare."
    },
    {
      name: "Mohammed Ali",
      role: "Day Laborer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "When I got injured at work, Aabha healthcare provided immediate medical help and supported my family during recovery. They truly care about workers like us."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Voices of Hope</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Real stories from the workers whose lives have been transformed through our programs and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              
              <p className="text-stone-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-stone-800">{testimonial.name}</div>
                  <div className="text-stone-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
