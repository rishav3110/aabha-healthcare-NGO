
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scale, Heart, GraduationCap, Shield, Users, Briefcase, Home, Phone, Baby, Stethoscope, HelpingHand } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "24 x 7 Nursing care",
      description: "Round-the-Clock Professional Nursing Care for Your Loved Ones, Anytime, Anywhere",
      features: [
        "In-home nursing tailored to individual needs",
        "Compassionate support for elderly patients",
        "Skilled care for post-surgery recovery",
        "Regular health updates"
        
      ],
      image: "https://res.cloudinary.com/dznsayyvw/image/upload/v1750405820/2147861497_oksyip.webp"
    },
    {
      icon: Baby,
      title: "Baby Care",
      description: "Medical care and health support newborns and their families",
      features: [
        "Regular health checkups",
        "Emergency medical assistance",
        "Trained caregivers for infants",
        "Postnatal care for both mother and child",
        "Safe, nurturing environment "
      ],
      image: "https://images.pexels.com/photos/6849571/pexels-photo-6849571.jpeg"
    },
    {
      icon: Heart,
      title: "Elderly Patient Care",
      description: "Training programs to enhance employability and earning potential",
      features: [
        "Daily assistance with personal needs",
        "Medication and health monitoring",
        "Chronic care support",
        "Emotional companionship",
        "Trained caregivers"
      ],
      image: "https://res.cloudinary.com/dznsayyvw/image/upload/v1750405516/2148239041_lar3cl.webp"
    },
    {
      icon: HelpingHand,
      title: "Nursing Home Attendance",
      description: "Immediate assistance during crises and difficult times",
      features: [
        "Mobility and hygiene assistance",
        "Safe and attentive care",
        "Coordination with medical staff",
        "Medication support",
        "Companionship and support"
      ],
      image: "https://res.cloudinary.com/dznsayyvw/image/upload/v1750406133/45331_qmdwl5.webp"
    }
    
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Our Services</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              We provide trusted home healthcare services — from newborn to elderly care — with compassion, professionalism, and the lowest cost across Assam.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">{service.title}</h3>
                    <p className="text-stone-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-stone-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our services are designed to support the unique needs of elderly as well as newborns. 
            Reach out to us today to learn more about how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors"
            >
              Call Our Helpline: +91 9435699995
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Visit Our Office
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
