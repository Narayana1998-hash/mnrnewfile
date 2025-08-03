import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Linkedin, Youtube, Instagram, Twitter, Facebook, Shield } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    projectDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            LET'S START YOUR DIGITAL JOURNEY
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Transforming ideas into impactful digital realities through innovative, scalable, and future-ready technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Mail className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Email Us
                  </h3>
                  <p className="text-gray-400">Get a response within 24 hours</p>
                </div>
              </div>
              <p className="text-blue-400 font-semibold">contact@kinnovex.com</p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Phone className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Call Us
                  </h3>
                  <p className="text-gray-400">Speak with our experts directly</p>
                </div>
              </div>
              <p className="text-blue-400 font-semibold">+91 99899 46655</p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Schedule Meeting
                  </h3>
                  <p className="text-gray-400">Free 30-minute strategy session</p>
                </div>
              </div>
              <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">
                Book Consultation
              </button>
            </div>

            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Office Address
                  </h3>
                </div>
              </div>
              <p className="text-gray-400">
                Flat No: 326, 3rd Floor<br />
                Urban Studio Lake Front Apartments<br />
                Mahalanknapur, Manikonda<br />
                Gachibowli, Hyderabad<br />
                Telangana 500075
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-black rounded-lg p-6">
              <h3 
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Connect with us
              </h3>
              <div className="flex space-x-4">
                <Linkedin className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300" size={24} />
                <Youtube className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300" size={24} />
                <Instagram className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300" size={24} />
                <Twitter className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300" size={24} />
                <Facebook className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300" size={24} />
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
              <h3 
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Quick Response Guarantee
              </h3>
              <p className="text-gray-400">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly for immediate assistance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black rounded-lg p-8">
            <h3 
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Send Message & Get Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="ai-data-intelligence">AI & Data Intelligence</option>
                  <option value="digital-engineering">Digital Engineering</option>
                  <option value="customer-experience">Customer Experience</option>
                  <option value="emerging-technology">Emerging Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                ></textarea>
                <div className="text-right text-gray-400 text-sm mt-1">
                  {formData.projectDetails.length}/500
                </div>
              </div>

              <div className="flex items-center">
                <Shield className="text-blue-400 mr-2" size={16} />
                <span className="text-gray-400 text-sm">
                  Your information is secure and will never be shared with third parties
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Send Message & Get Free Consultation
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-black rounded-lg p-8 text-center">
          <h3 
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Stay Ahead of the Curve
          </h3>
          <p 
            className="text-gray-400 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Subscribe to our newsletter for the latest insights on technology trends, industry updates, and innovative solutions.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Join 10,000+ technology leaders • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;