import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, CheckCircle, Zap } from 'lucide-react';

const AIDataIntelligence = () => {
  const keyServices = [
    'Predictive Analytics & BI',
    'Machine Learning Models',
    'Data Warehousing & Lakehouse',
    'Cognitive Process Automation',
    'Natural Language Processing',
    'Computer Vision Solutions'
  ];

  const techStack = [
    'Python & R',
    'TensorFlow & PyTorch',
    'AWS SageMaker & Azure ML',
    'Snowflake & Databricks',
    'Apache Spark & Kafka',
    'SAP Analytics Cloud',
    'Power BI & Tableau'
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
            <Brain size={64} />
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            AI & DATA INTELLIGENCE
          </h1>
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Turn data into decisions with AI-powered insights. Unlock the full potential of your data with advanced analytics, machine learning, and artificial intelligence solutions.
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
            Transform your business with intelligent data solutions that drive informed decision-making and automate complex processes. Our AI and data intelligence services help organizations extract valuable insights from their data, predict future trends, and optimize operations through advanced analytics and machine learning.
          </p>
          <p 
            className="text-gray-300 text-lg leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            From building predictive models to implementing cognitive automation, we deliver end-to-end AI solutions that enhance productivity, reduce costs, and create competitive advantages in your industry.
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
            AI Impact & Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
              <div className="text-gray-300">Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
              <div className="text-gray-300">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3x</div>
              <div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-500/10 border border-blue-500/20 rounded-lg p-8">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Unlock Your Data's Potential
          </h3>
          <p 
            className="text-gray-300 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Discover how AI can transform your business operations and drive intelligent decision-making.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 mr-4">
            Explore AI Solutions
          </button>
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Schedule AI Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIDataIntelligence;