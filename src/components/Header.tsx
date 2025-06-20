
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <Heart className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-stone-800">AABHA HEALTHCARE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-stone-700   hover:text-green-600 transition-colors" onClick={scrollToTop}>Home</Link>
            <Link to="/about" className="text-stone-700  hover:text-green-600 transition-colors" onClick={scrollToTop}>About Us</Link>
            <Link to="/services" className="text-stone-700  hover:text-green-600 transition-colors" onClick={scrollToTop}>Services</Link>
            <Link to="/contact" className="text-stone-700  hover:text-green-600 transition-colors" onClick={scrollToTop}>Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-stone-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-stone-700 hover:text-green-600 transition-colors" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}>Home</Link>
              <Link to="/about" className="text-stone-700 hover:text-green-600 transition-colors" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}>About Us</Link>
              <Link to="/services" className="text-stone-700 hover:text-green-600 transition-colors" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}>Services</Link>
              <Link to="/contact" className="text-stone-700 hover:text-green-600 transition-colors" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}>Contact</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Contact
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
