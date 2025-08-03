import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              KINNOVEX
            </h3>
            <p 
              className="text-gray-400 mb-4"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Empowering transformation through innovative technology solutions.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>contact@kinnovex.com</p>
              <p>+91 99899 46655</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/cloud-solutions" className="hover:text-blue-400 transition-colors duration-300">Cloud Solutions</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-blue-400 transition-colors duration-300">Cybersecurity</Link></li>
              <li><Link to="/services/ai-data-intelligence" className="hover:text-blue-400 transition-colors duration-300">AI & Data Intelligence</Link></li>
              <li><Link to="/services/digital-engineering" className="hover:text-blue-400 transition-colors duration-300">Digital Engineering</Link></li>
              <li><Link to="/services/customer-experience" className="hover:text-blue-400 transition-colors duration-300">Customer Experience</Link></li>
              <li><Link to="/services/emerging-technology" className="hover:text-blue-400 transition-colors duration-300">Emerging Technology</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Industries
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Automotive</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Banking & Financial Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Manufacturing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Healthcare & Life Sciences</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">High Tech & IT</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Insurance</a></li>
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h4 
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Office Address
            </h4>
            <div className="text-gray-400">
              <p>Flat No: 326, 3rd Floor</p>
              <p>Urban Studio Lake Front Apartments</p>
              <p>Mahalanknapur, Manikonda</p>
              <p>Gachibowli, Hyderabad</p>
              <p>Telangana 500075</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Kinnovex. All Rights Reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;