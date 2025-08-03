import React from 'react';
import { Users, Lightbulb, Monitor, Heart, MapPin, Briefcase, ArrowRight } from 'lucide-react';

const benefits = [
  'Competitive salary and equity',
  'Comprehensive health insurance',
  'Flexible work arrangements',
  'Professional development budget',
  'Unlimited PTO policy',
  'State-of-the-art equipment',
  'Team building events',
  'Wellness programs'
];

const positions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    experience: '5+ years',
    type: 'Full-time'
  },
  {
    title: 'AI/ML Engineer',
    department: 'Data Science',
    location: 'Remote',
    experience: '3+ years',
    type: 'Full-time'
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Infrastructure',
    location: 'Remote',
    experience: '7+ years',
    type: 'Full-time'
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    experience: '4+ years',
    type: 'Full-time'
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    experience: '4+ years',
    type: 'Full-time'
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    experience: '5+ years',
    type: 'Full-time'
  }
];

const culturePoints = [
  {
    icon: Users,
    title: 'Collaborative Teams',
    description: 'Work with diverse, talented individuals'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Cutting-edge projects and technologies'
  },
  {
    icon: Monitor,
    title: 'Latest Technology',
    description: 'Access to modern tools and platforms'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and remote work'
  }
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            JOIN OUR INNOVATIVE TEAM
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Be part of a dynamic team that's shaping the future of technology. We're looking for passionate individuals who want to make a real impact.
          </p>
        </div>

        {/* Culture Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {culturePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <IconComponent size={48} />
                </div>
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {point.title}
                </h3>
                <p 
                  className="text-gray-400"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h3 
            className="text-2xl font-bold text-white mb-6 text-center"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Work With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Open Positions
          </h3>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {position.location}
                      </div>
                      <div>
                        {position.experience}
                      </div>
                      <div>
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center">
                    Apply Now <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Application */}
        <div className="text-center bg-gray-900 rounded-lg p-8">
          <h3 
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Don't see a position that fits?
          </h3>
          <p 
            className="text-gray-400 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            We're always looking for talented individuals to join our team.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;