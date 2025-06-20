
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">Aabha Healthcare</span>
            </div>
            <p className="text-stone-300 leading-relaxed">
              We provide affordable healthcare and support services across Assam.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-stone-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-stone-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-stone-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-stone-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-stone-300 hover:text-green-500 transition-colors" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about" className="text-stone-300 hover:text-green-500 transition-colors" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/services" className="text-stone-300 hover:text-green-500 transition-colors" onClick={scrollToTop}>Services</Link></li>
              <li><Link to="/contact" className="text-stone-300 hover:text-green-500 transition-colors" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-stone-300">24 x 7 Nursing care</li>
              <li className="text-stone-300">Baby Care</li>
              <li className="text-stone-300">Elderly Patient Care</li>
              <li className="text-stone-300">Nursing Home Attendance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-stone-300">amulyaborah3@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-stone-300">+91 9435699995</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-500 mt-1" />
                <span className="text-stone-300">GNB Road, Fauzdaripatty
Nagaon- 782001 Assam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2025 Aabha healthcare NGO. All rights reserved. | Registration no. RS/NG/254/RFSRS/202400380
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-stone-400 text-sm hover:text-green-500 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-stone-400 text-sm hover:text-green-500 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
