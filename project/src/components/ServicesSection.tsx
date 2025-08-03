import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Shield, Brain, Code, Users, Cpu, 
  DollarSign, Building, Leaf, Users2, 
  BarChart, ShoppingCart, Server, Palette, 
  UserPlus, GraduationCap, ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable infrastructure and cloud migration for the modern enterprise.',
    keyServices: ['Cloud Architecture & Deployment', 'Hybrid & Multi-cloud Solutions', 'Cloud Migration Services', 'DevOps & CI/CD Integration'],
    techStack: 'AWS, Azure, GCP | UX/UI Design & SAP Cloud Integration',
    cta: 'Get Cloud Assessment',
    link: '/services/cloud-solutions'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    description: 'End-to-end security for your digital assets and business continuity.',
    keyServices: ['Threat Detection & Response', 'Cloud & Network Security', 'Compliance Management', 'Zero Trust Architecture'],
    techStack: 'IT Infrastructure & Managed Security Services',
    cta: 'Security Assessment',
    link: '/services/cybersecurity'
  },
  {
    id: 'ai-data-intelligence',
    icon: Brain,
    title: 'AI & Data Intelligence',
    description: 'Turn data into decisions with AI-powered insights.',
    keyServices: ['Predictive Analytics & BI', 'Machine Learning Models', 'Data Warehousing & Lakehouse', 'Cognitive Process Automation'],
    techStack: 'SAP Analytics & UX Dashboards',
    cta: 'Explore AI Solutions',
    link: '/services/ai-data-intelligence'
  },
  {
    id: 'digital-engineering',
    icon: Code,
    title: 'Digital Engineering',
    description: 'Building scalable, modern applications for every platform.',
    keyServices: ['Web & Mobile App Development', 'UX/UI Design & Prototyping', 'API Integration & DevOps', 'Agile Delivery Model'],
    techStack: 'Design-first Approach | Human-Centered UX',
    cta: 'Start Your Project',
    link: '/services/digital-engineering'
  },
  {
    id: 'customer-experience',
    icon: Users,
    title: 'Customer Experience',
    description: 'Enhance experience and loyalty through digital CX.',
    keyServices: ['Omnichannel Support Systems', 'Chatbots & AI Assistants', 'CRM & Ticketing Solutions'],
    techStack: 'Salesforce, Freshdesk, SAP CX',
    cta: 'Improve CX',
    link: '/services/customer-experience'
  },
  {
    id: 'emerging-technology',
    icon: Cpu,
    title: 'Emerging Technology',
    description: 'Unlock future possibilities with innovation.',
    keyServices: ['Internet of Things (IoT)', 'Blockchain Solutions', 'AR/VR for Enterprises', 'Quantum R&D'],
    techStack: 'Experimental Labs | Prototype Development',
    cta: 'Explore Innovation',
    link: '/services/emerging-technology'
  }
];

const additionalServices = [
  {
    icon: DollarSign,
    title: 'Finance & Risk',
    description: 'Empowering secure, compliant, and agile finance operations.',
    services: ['Fraud Detection with AI', 'Digital Payments', 'Risk Analytics', 'Regulatory Compliance']
  },
  {
    icon: Building,
    title: 'Infrastructure Projects',
    description: 'Tech-led capital project management at scale.',
    services: ['IT Infrastructure Deployment', 'Smart City Solutions', 'Industrial IoT & Automation', 'Cloud-Based PMO Tools']
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Smart tech for a smarter, greener planet.',
    services: ['Carbon Tracking & Reporting', 'Green Data Centers', 'Smart Energy Management']
  },
  {
    icon: Users2,
    title: 'Talent & Organization',
    description: 'Digitally transform your workforce.',
    services: ['Human Capital Management', 'Digital HR Platforms', 'Organizational Change Design']
  },
  {
    icon: BarChart,
    title: 'Strategy & Consulting',
    description: 'Turn disruption into opportunity.',
    services: ['Digital Transformation Roadmaps', 'IT Strategy & Architecture', 'Business Process Reengineering']
  },
  {
    icon: ShoppingCart,
    title: 'Sales & Commerce',
    description: 'Smart commerce for the digital economy.',
    services: ['E-Commerce Platforms', 'Mobile Commerce', 'CPQ & Sales Enablement Tools']
  },
  {
    icon: Server,
    title: 'IT Services & SAP Solutions',
    description: 'Comprehensive IT and SAP expertise.',
    services: ['IT Infrastructure Management', 'SAP ERP, HANA, and Cloud Integration', 'Managed Services & 24/7 Support']
  },
  {
    icon: Palette,
    title: 'UX/UI Design Integration',
    description: 'Human-centered design solutions.',
    services: ['Human-Centered Design', 'Interactive Prototypes', 'Design Systems']
  },
  {
    icon: UserPlus,
    title: 'IT Recruitment Services',
    description: 'Expert technical talent acquisition.',
    services: ['Technical Talent Acquisition', 'Contract & Permanent Placements', 'Skills Assessment & Screening']
  },
  {
    icon: GraduationCap,
    title: 'Education Services',
    description: 'Comprehensive technology training and development.',
    services: ['Technology Training Programs', 'Corporate Learning Solutions', 'Digital Skills Development']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            OUR SERVICES
          </h2>
          <p 
            className="text-xl text-gray-300 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Empowering Digital Transformation
          </p>
          <p 
            className="text-lg text-gray-400 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            From cloud infrastructure to AI innovation, we deliver end-to-end technology services that transform businesses and drive sustainable growth.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2 group"
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
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Services:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.keyServices.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                  <p className="text-sm text-gray-300">{service.techStack}</p>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  {service.cta} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  <IconComponent size={36} />
                </div>
                <h3 
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-gray-400 mb-4 text-sm"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {service.description}
                </p>
                
                <ul className="text-xs text-gray-300 space-y-1">
                  {service.services.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Ready to Transform Your Business?
          </button>
          <p className="text-gray-400 mt-4">
            Let's discuss how our comprehensive technology solutions can accelerate your digital transformation journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;