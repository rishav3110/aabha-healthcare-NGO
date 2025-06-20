
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Mr. Amulya Borah",
      role: "Founder & Director",
      image: "https://res.cloudinary.com/dznsayyvw/image/upload/v1750450535/WhatsApp_Image_2025-06-20_at_10.28.36_PM_yi8na2.jpg",
      bio: "Social worker and community organizer passionate about grassroots development."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of collective action and mutual support."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on creating measurable, lasting change in people's lives."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and services."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-stone-800 mb-6">About Aabha Healthcare</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              We are committed to supporting elderly patients with dignity and care, offering trusted nursing assistance, regular health monitoring, and compassionate companionship every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The visionary who started this movement and continue to lead with passion and dedication.
            </p>
          </div>

          <div className="flex justify-center">
            {founders.map((founder, index) => (
              <div key={index} className="text-center max-w-md">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-lg"
                />
                <h3 className="text-2xl font-bold text-stone-800 mb-2">{founder.name}</h3>
                <p className="text-green-600 font-medium mb-4">{founder.role}</p>
                <p className="text-stone-600 leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Aabha Healthcare began with a simple mission—to bring comfort and dignity to elderly patients in need of consistent, compassionate care. Inspired by the challenges faced by aging individuals without dependable support, founder Mr. Amulya Borah started by connecting caregivers to families within his community.
                </p>
                <p>
                  What started as a small local initiative has grown into a trusted elder care service, offering in-home nursing, medical monitoring, and emotional companionship tailored to each patient’s unique needs.
                </p>
                <p>
                  Today, Aabha Healthcare provides services throughout Assam at the lowest possible cost, ensuring that even economically challenged families can access quality elder care. We remain committed to delivering care with compassion, respect, and a deep sense of responsibility.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=300&h=200&fit=crop" 
                alt="Workers at construction site"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" 
                alt="Community meeting"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=200&fit=crop" 
                alt="Skill training session"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop" 
                alt="Health checkup camp"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we interact with the 
              communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default About;
