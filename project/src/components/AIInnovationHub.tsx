import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Bot, Truck, Factory, ArrowRight } from 'lucide-react';

const aiServices = [
  {
    id: 'generative-ai',
    icon: Brain,
    title: 'Generative AI',
    description: 'Content creation, intelligent agents, automation',
    services: ['Copywriting Bots', 'AI Assistants', 'Image & Video Generation'],
    poweredBy: 'GPT Models, Stable Diffusion',
    link: '/ai/generative-ai'
  },
  {
    id: 'ai-robotics',
    icon: Bot,
    title: 'AI-Powered Robotics',
    description: 'Smart automation for industrial and retail spaces',
    services: ['Autonomous Warehouse Bots', 'Delivery Drones', 'Vision-based Quality Inspection'],
    poweredBy: 'Computer Vision, ML',
    link: '/ai/ai-powered-robotics'
  },
  {
    id: 'autonomous-supply',
    icon: Truck,
    title: 'Autonomous Supply Chains',
    description: 'Self-optimizing and self-healing supply chains',
    services: ['Demand Forecasting', 'Inventory Optimization', 'AI Logistics Routing'],
    poweredBy: 'Predictive Analytics',
    link: '/ai/autonomous-supply-chains'
  },
  {
    id: 'ai-refinery',
    icon: Factory,
    title: 'AI Refinery',
    description: 'AI-enhanced marketing and process optimization',
    services: ['Smart Campaign Management', 'Production Intelligence', 'Predictive Maintenance'],
    poweredBy: 'Machine Learning',
    link: '/ai/ai-refinery'
  }
];

const AIInnovationHub = () => {
  return (
    <section id="ai-hub" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            AI INNOVATION HUB
          </h2>
          <p 
            className="text-xl text-gray-300 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Leading the AI Revolution
          </p>
          <p 
            className="text-lg text-gray-400 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Harness the power of artificial intelligence to transform your business operations, enhance customer experiences, and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  <IconComponent size={48} />
                </div>
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-gray-400 mb-4"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Services:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.services.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Powered by:</h4>
                  <p className="text-sm text-gray-300">{service.poweredBy}</p>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Process Automation</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationHub;