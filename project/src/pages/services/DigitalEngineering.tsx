import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, CheckCircle, Zap } from 'lucide-react';

const DigitalEngineering = () => {
  const keyServices = [
    'Web & Mobile App Development',
    'UX/UI Design & Prototyping',
    'API Integration & DevOps',
    'Agile Delivery Model',
    'Progressive Web Applications',
    'Cross-Platform Development'
  ];

  const techStack = [
    'React & Next.js',
    'React Native & Flutter',
    'Node.js & Express',
    'Python & Django',
    'AWS & Azure DevOps',
    'Docker & Kubernetes',
    'Design-first Approach'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>

        <div className="text-center mb-16">
          <div className="text-blue-400 mb-6 flex justify-center">
            <Code size={64} />
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            DIGITAL ENGINEERING
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Building scalable, modern applications for every platform. Create exceptional digital experiences with our comprehensive engineering and design services.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Service Overview
          </h2>
          <p 
            className="text-gray-300 text-lg leading-relaxed mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Our digital engineering services combine technical expertise with human-centered design to create digital solutions that users love and businesses depend on. We build scalable applications, implement robust architectures, and deliver exceptional user experiences across all platforms and devices.
          </p>
          <p 
            className="text-gray-300 text-lg leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            From concept to deployment, we follow agile methodologies and best practices to ensure your digital products are delivered on time, within budget, and exceed user expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-black border border-gray-800 rounded-lg p-8">
            <h3 
              className="text-2xl font-bold mb-6 text-blue-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Key Services
            </h3>
            <ul className="space-y-4">
              {keyServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-8">
            <h3 
              className="text-2xl font-bold mb-6 text-blue-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Tech Stack
            </h3>
            <ul className="space-y-4">
              {techStack.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <Zap className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Development Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Mobile Responsive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Time-to-Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">A+</div>
              <div className="text-gray-300">Performance Score</div>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-500/10 border border-blue-500/20 rounded-lg p-8">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ready to Build Something Amazing?
          </h3>
          <p 
            className="text-gray-300 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Let's discuss your project requirements and create a digital solution that drives results.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 mr-4">
            Start Your Project
          </button>
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalEngineering;