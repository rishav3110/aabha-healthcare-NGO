
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Purpose</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We aim to bring dependable health support to every household — ensuring comfort for infants, assurance for families, and companionship for the elderly. By reaching homes across Assam at minimal cost, we work toward a healthier, more caring society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <Target className="w-10 h-10 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              To make essential healthcare accessible and affordable for all people, delivered with care where it’s needed most — at home.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
              <Eye className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed">
            To be Assam’s most trusted home healthcare provider, reaching every corner of the state with dependable service, genuine care, and a commitment to quality.
            </p>
          </div>

          {/* Values */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <Heart className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Values</h3>
            <p className="text-stone-600 leading-relaxed">
              Compassion, integrity, and respect guide everything we do. 
              We believe in the dignity of work and the power of community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
