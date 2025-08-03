import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, CheckCircle, Zap } from 'lucide-react';

const AIPoweredRobotics = () => {
  const services = [
    'Autonomous Warehouse Bots',
    'Delivery Drones',
    'Vision-based Quality Inspection',
    'Robotic Process Automation',
    'Smart Manufacturing Systems',
    'Collaborative Robots (Cobots)'
  ];

  const poweredBy = [
    'Computer Vision',
    'Machine Learning',
    'ROS (Robot Operating System)',
    'TensorFlow & PyTorch',
    'NVIDIA Jetson',
    'Intel RealSense',
    'OpenCV'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to AI Hub
        </Link>

        <div className="text-center mb-16">
          <div className="text-blue-400 mb-6 flex justify-center">
            <Bot size={64} />
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            AI-POWERED ROBOTICS
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Smart automation for industrial and retail spaces. Transform your operations with intelligent robotics solutions that enhance efficiency, safety, and productivity.
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
            Revolutionize your operations with AI-powered robotics solutions that combine advanced computer vision, machine learning, and autonomous navigation. Our robotic systems are designed to work alongside humans, enhancing productivity while ensuring safety and precision in industrial and commercial environments.
          </p>
          <p 
            className="text-gray-300 text-lg leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            From autonomous warehouse management to quality inspection systems, we deliver intelligent robotics solutions that adapt to your specific operational needs and integrate seamlessly with existing workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-black border border-gray-800 rounded-lg p-8">
            <h3 
              className="text-2xl font-bold mb-6 text-blue-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
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
              Powered By
            </h3>
            <ul className="space-y-4">
              {poweredBy.map((tech, index) => (
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
            Robotics Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">75%</div>
              <div className="text-gray-300">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Operation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Zero</div>
              <div className="text-gray-300">Safety Incidents</div>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-500/10 border border-blue-500/20 rounded-lg p-8">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Automate with Intelligence
          </h3>
          <p 
            className="text-gray-300 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Discover how AI-powered robotics can transform your operations and boost productivity.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 mr-4">
            Explore Robotics
          </button>
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Schedule Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredRobotics;