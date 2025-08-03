import React from 'react';
import { CheckCircle, Globe, Award, Users, Clock, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Automation & Digital Transformation Experts',
    description: 'Leading the way in business automation and digital innovation'
  },
  {
    icon: Users,
    title: 'AMAZING IT Professionals',
    description: 'World-class talent delivering exceptional results'
  },
  {
    icon: Globe,
    title: 'GLOBAL PRESENCE',
    description: 'Serving clients worldwide with local expertise'
  },
  {
    icon: Award,
    title: 'ISO 27001 CERTIFIED',
    description: 'Highest standards of information security management'
  },
  {
    icon: CheckCircle,
    title: '100% Client Satisfaction',
    description: 'End-to-end project management and support'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock maintenance and support services'
  }
];

const benefits = [
  'Cutting-edge technology solutions',
  'Scalable and future-ready architectures',
  'Industry-specific expertise and insights',
  '24/7 support and maintenance services'
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            WHY CHOOSE US
          </h2>
          <p 
            className="text-xl text-gray-300 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Your Trusted Technology Partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2"
              >
                <div className="text-blue-400 mb-4">
                  <IconComponent size={48} />
                </div>
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-gray-400"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <h3 
            className="text-2xl font-bold text-white mb-6 text-center"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            What You Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="text-blue-400 mr-3" size={20} />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;