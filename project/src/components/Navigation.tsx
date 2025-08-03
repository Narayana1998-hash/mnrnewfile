import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '#services' },
    { label: 'INDUSTRIES WE SERVE', href: '#industries' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'CAREERS', href: '#careers' },
    { label: 'CONTACT US', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            KINNOVEX
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-semibold tracking-wider"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center space-x-2 text-white">
            <Phone size={16} />
            <span className="text-sm font-medium">+91 99899 46655</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300 text-sm font-semibold tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-2 px-3 py-2 text-white">
                <Phone size={16} />
                <span className="text-sm font-medium">+91 99899 46655</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;