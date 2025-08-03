import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Zap } from 'lucide-react';

const Cybersecurity = () => {
  const keyServices = [
    'Threat Detection & Response',
    'Cloud & Network Security',
    'Compliance Management',
    'Zero Trust Architecture',
    'Security Audits & Assessments',
    'Incident Response & Recovery'
  ];

  const techStack = [
    'Microsoft Security Suite',
    'CrowdStrike & SentinelOne',
    'Splunk & ELK Stack',
    'Palo Alto Networks',
    'Okta & Azure AD',
    'AWS & Azure Security Services',
    'Managed Security Services'
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
            <Shield size={64} />
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            CYBERSECURITY
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            End-to-end security for your digital assets and business continuity. Protect your organization with comprehensive cybersecurity solutions designed for the modern threat landscape.
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
            In today's digital landscape, cybersecurity is not optional—it's essential. Our comprehensive cybersecurity services protect your organization from evolving threats while ensuring compliance with industry regulations. We provide 24/7 monitoring, advanced threat detection, and rapid incident response to keep your business secure.
          </p>
          <p 
            className="text-gray-300 text-lg leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            From implementing Zero Trust architectures to managing security operations centers, we deliver enterprise-grade security solutions that adapt to your business needs and scale with your growth.
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
            Security Metrics & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">&lt;5min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">ISO 27001</div>
              <div className="text-gray-300">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-500/10 border border-blue-500/20 rounded-lg p-8">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Secure Your Digital Assets Today
          </h3>
          <p 
            className="text-gray-300 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Get a comprehensive security assessment and risk analysis for your organization.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 mr-4">
            Security Assessment
          </button>
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Contact Security Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;