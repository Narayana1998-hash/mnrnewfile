import React from 'react';
import { 
  Car, Building2, Factory, Heart, 
  Cpu, Shield, Zap, Truck, 
  TrendingUp, ShoppingBag, MapPin, Monitor 
} from 'lucide-react';

const industries = [
  { icon: Car, title: 'Automotive', description: 'Connected vehicles and smart manufacturing solutions' },
  { icon: Building2, title: 'Banking & Financial Services', description: 'Digital banking and fintech innovations' },
  { icon: Factory, title: 'Manufacturing', description: 'Industry 4.0 and smart factory solutions' },
  { icon: Heart, title: 'Healthcare & Life Sciences', description: 'Digital health and medical technology' },
  { icon: Cpu, title: 'High Tech & IT', description: 'Advanced technology and software solutions' },
  { icon: Shield, title: 'Insurance', description: 'Insurtech and digital transformation' },
  { icon: Zap, title: 'Energy & Utilities', description: 'Smart grid and renewable energy tech' },
  { icon: Truck, title: 'Supply Chain & Logistics', description: 'Intelligent logistics and automation' },
  { icon: TrendingUp, title: 'Capital Markets', description: 'Trading platforms and financial analytics' },
  { icon: ShoppingBag, title: 'Consumer Goods & Retail', description: 'E-commerce and retail technology' },
  { icon: MapPin, title: 'Public Sector & Government', description: 'Digital government and civic tech' },
  { icon: Monitor, title: 'Software & Creative Tech', description: 'Development tools and creative platforms' }
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            INDUSTRIES
          </h2>
          <p 
            className="text-xl text-gray-300 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Tailored Industry Solutions
          </p>
          <p 
            className="text-lg text-gray-400 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Our expertise spans across diverse industries, delivering tailored solutions with deep domain expertise that address unique challenges and opportunities in each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  <IconComponent size={40} />
                </div>
                <h3 
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {industry.title}
                </h3>
                <p 
                  className="text-gray-400 text-sm"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {industry.description}
                </p>
                <div className="mt-4 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;