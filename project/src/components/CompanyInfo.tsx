import React from 'react';
import { Target, Compass, Heart, Users, Lightbulb, Zap } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation-Driven',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
  },
  {
    icon: Heart,
    title: 'Client Obsession',
    description: 'Our clients\' success is our success. We go above and beyond to exceed expectations.'
  },
  {
    icon: Target,
    title: 'Integrity & Transparency',
    description: 'We build trust through honest communication and ethical business practices.'
  },
  {
    icon: Users,
    title: 'Operational Excellence',
    description: 'We deliver consistent, high-quality results through proven methodologies and best practices.'
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'We foster teamwork, knowledge sharing, and inclusive environments for innovation.'
  },
  {
    icon: Zap,
    title: 'Agility & Growth Mindset',
    description: 'We adapt quickly to change and continuously learn to stay ahead of the curve.'
  }
];

const CompanyInfo = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-black rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="text-blue-400 mr-4" size={32} />
              <h3 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                OUR VISION
              </h3>
            </div>
            <p 
              className="text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              To be a globally trusted technology partner, empowering businesses of all sizes through innovative, scalable, and future-ready solutions that accelerate digital transformation and sustainable growth.
            </p>
          </div>

          <div className="bg-black rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Compass className="text-blue-400 mr-4" size={32} />
              <h3 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                OUR MISSION
              </h3>
            </div>
            <p 
              className="text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              At Kinnovex, our mission is to simplify complexity and enable transformation. We deliver bespoke, end-to-end digital solutions that address real-world challenges, drive innovation, and create lasting value. Backed by cutting-edge technology, a skilled and passionate team, and an unwavering client-first approach, we transform ideas into impactful digital realities.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            OUR VALUES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2"
              >
                <div className="text-blue-400 mb-4">
                  <IconComponent size={40} />
                </div>
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-gray-400"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;