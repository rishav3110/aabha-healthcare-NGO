
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-stone-800 mb-6">Get In Touch</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              We're here to help. Whether you need our services, want to volunteer, 
              or wish to support our cause, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6">Contact Information</h2>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Our doors are always open for those who need help or want to contribute 
                  to our mission of empowering daily wage workers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Our Office</h3>
                    <p className="text-stone-600">GNB Road, Fauzdaripatty<br />Nagaon- 782001 Assam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Phone Numbers</h3>
                    <p className="text-stone-600">
                      Office: +91 9435699995<br />
                      Helpline: +91 9085820999
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                    <p className="text-stone-600">
                      General: amulyaborah3@gmail.com<br />
                      Help: aabha.health01@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Office Hours</h3>
                    <p className="text-stone-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      <span className="text-green-600 font-medium">24/7 Emergency Helpline Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Please describe how we can help you or how you'd like to help us..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 ">Find Us</h2>
            <p className="text-xl text-stone-600">Visit our office for in-person assistance</p>
            <MapPin className="w-16 h-16 mx-auto  text-green-600 mt-2" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">GNB Road, Fauzdaripatty Nagaon- 782001 Assam</p>
                <p className="text-sm mt-2 text-green-600">Click here to open in Google Maps</p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-stone-200 flex items-center justify-center">
              <div className="text-center text-stone-600 w-full h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d475.9557890583891!2d92.69013769510545!3d26.35508592751895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750409970014!5m2!1sen!2sin"loading="lazy"  width="100%" 
    height="100%"></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-br from-green-400 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl max-w-3xl mx-auto">
              There are many ways to support our mission and make a difference in the lives of workers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-8 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Donate</h3>
              <p className="mb-6">
                Your financial support helps us provide essential services and expand our reach 
                to more workers in need.
              </p>
              <Button className="bg-white text-green-600 hover:bg-stone-100">
                Make a Donation
              </Button>
            </div>

            <div className="bg-white/10 rounded-xl p-8 text-center">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
              <p className="mb-6">
                Join our team of dedicated volunteers and contribute your time and skills 
                to help workers in your community.
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-stone-100">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
