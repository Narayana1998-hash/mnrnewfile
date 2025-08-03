import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cloud, CheckCircle, Zap } from 'lucide-react';

const CloudSolutions = () => {
  const keyServices = [
    'Cloud Architecture & Deployment',
    'Hybrid & Multi-cloud Solutions',
    'Cloud Migration Services',
    'DevOps & CI/CD Integration',
    'Cloud Security & Compliance',
    'Cost Optimization & Management'
  ];

  const techStack = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform (GCP)',
    'Kubernetes & Docker',
    'Terraform & CloudFormation',
    'Jenkins & GitLab CI',
    'SAP Cloud Integration'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-400 mb-6 flex justify-center">
            <Cloud size={64} />
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            CLOUD SOLUTIONS
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Scalable infrastructure and cloud migration for the modern enterprise. Transform your business with secure, flexible, and cost-effective cloud solutions.
          </p>
        </div>

        {/* Service Overview */}
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
            Our cloud solutions empower businesses to achieve unprecedented scalability, flexibility, and efficiency. We provide comprehensive cloud services from strategy and migration to management and optimization, ensuring your infrastructure supports your business goals while reducing costs and improving performance.
          </p>
          <p 
            className="text-gray-300 text-lg leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Whether you're looking to migrate existing applications, build cloud-native solutions, or optimize your current cloud environment, our expert team delivers tailored solutions that drive digital transformation and business growth.
          </p>
        </div>

        {/* Key Services */}
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

        {/* Benefits */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Benefits & Value Proposition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Deployment</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-500/10 border border-blue-500/20 rounded-lg p-8">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ready to Transform Your Infrastructure?
          </h3>
          <p 
            className="text-gray-300 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Get a comprehensive cloud assessment and migration strategy tailored to your business needs.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 mr-4">
            Get Cloud Assessment
          </button>
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;