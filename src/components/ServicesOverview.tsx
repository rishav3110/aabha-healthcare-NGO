
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Heart, GraduationCap, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesOverview = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Scale,
      title: "24x7 Nursing Care",
      description: "Skilled nursing support available 24/7 at your doorstep for complete peace of mind.",
      color: "green"
    },
    {
      icon: Heart,
      title: "Baby Care",
      description: "Compassionate and trained caregivers for newborns and infants, right at home.",
      color: "emerald"
    },
    {
      icon: GraduationCap,
      title: "Elderly Patient Care",
      description: "Personalized care for aging loved ones, ensuring comfort, dignity, and safety.",
      color: "green"
    },
    {
      icon: Shield,
      title: "Nursing Home Attendance",
      description: "Reliable attendants to stay with patients at hospitals or nursing homes when you can't.",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600 group-hover:bg-green-200",
      emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-200"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">How We Help</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We provide trusted home healthcare services — from newborn to elderly care — with compassion, professionalism, and the lowest cost across Assam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${getColorClasses(service.color)}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" onClick={scrollToTop}>
            <Button size="lg" className="bg-green-600 hover:bg-stone-900 text-lg px-8 py-3">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
