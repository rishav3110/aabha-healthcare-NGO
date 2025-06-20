
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, Wrench, HandHeart, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialsSection from '@/components/TestimonialsSection';
import RecentProjects from '@/components/RecentProjects';

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesOverview />
        <TestimonialsSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
