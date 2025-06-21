
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-stone-800 leading-tight">
              Compassionate Care Right at Your 
              <span className="text-stone-800 block">Doorstep</span>
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed">
              We provide affordable healthcare and support services across Assam — from newborns to the elderly — with dignity, compassion, and a commitment to improving lives at every stage.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5,000+</div>
                <div className="text-stone-600">Workers Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-stone-600">Communities Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-stone-600">Years of Service</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-stone-700 hover:text-green-600 text-lg px-8 py-3">
                <Link to="/about" onClick={scrollToTop}>Learn More</Link>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dznsayyvw/image/upload/v1750432943/hand-drawn-nurse-team_d4nrfj.webp" 
                alt="Workers building together"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-stone-800">RS/NG/254/RFSRS/202400380</div>
                  <div className="font-semibold text-stone-600">REGISTRATION NUMBER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
