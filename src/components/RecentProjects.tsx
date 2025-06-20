
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const RecentProjects = () => {
  const projects = [
    {
      title: "Mobile Health Clinic Launch",
      date: "December 2024",
      location: "Rural Maharashtra",
      beneficiaries: "500+ workers",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      description: "Launched a mobile health clinic to provide regular medical checkups and emergency care to workers in remote areas."
    },
    {
      title: "Digital Literacy Program",
      date: "November 2024",
      location: "Urban Delhi",
      beneficiaries: "200+ workers",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      description: "Teaching essential digital skills to help workers access online job opportunities and government services."
    },
    {
      title: "Legal Aid Workshop",
      date: "October 2024",
      location: "Bangalore",
      beneficiaries: "150+ workers",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop",
      description: "Educational workshop on labor rights, helping workers understand their legal protections and how to seek help."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Recent Impact</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            See how we're making a difference in communities across the country through our latest initiatives and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  New
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-3">{project.title}</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-stone-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                  <div className="flex items-center text-sm text-stone-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-stone-500">
                    <Users className="w-4 h-4 mr-2" />
                    {project.beneficiaries}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
