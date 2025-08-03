import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Solutions',
    description: 'Exploring how artificial intelligence is transforming enterprise operations and driving innovation across industries.',
    category: 'AI Enterprise Innovation',
    author: 'Naveen',
    date: 'April 15, 2025',
    readTime: '5 min',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies for Modern Businesses',
    description: 'A comprehensive guide to successful cloud migration strategies and best practices for modern enterprises.',
    category: 'Cloud Migration Strategy',
    author: 'Tech Team',
    date: 'May 1, 2025',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Cybersecurity in the Age of Remote Work',
    description: 'Understanding the evolving cybersecurity landscape and protecting your business in a remote-first world.',
    category: 'Cybersecurity Remote Work Protection',
    author: 'Security Team',
    date: 'May 10, 2025',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Digital Transformation Success Stories',
    description: 'Real-world examples of successful digital transformation initiatives and their impact on business growth.',
    category: 'Digital Transformation Case Studies',
    author: 'Strategy Team',
    date: 'June 15, 2025',
    readTime: '8 min'
  },
  {
    id: 5,
    title: 'The Rise of Low-Code Development Platforms',
    description: 'How low-code platforms are democratizing software development and accelerating digital innovation.',
    category: 'Low-Code Development Innovation',
    author: 'Development Team',
    date: 'July 3, 2025',
    readTime: '4 min'
  },
  {
    id: 6,
    title: 'Sustainable Technology: Green IT Solutions',
    description: 'Exploring sustainable technology solutions and their role in creating a greener digital future.',
    category: 'Sustainability Green Tech Environment',
    author: 'Sustainability Team',
    date: 'July 20, 2025',
    readTime: '6 min'
  }
];

const categories = [
  'Industry Reports',
  'Market Insights', 
  'Innovation Stories'
];

const LatestInsights = () => {
  return (
    <section id="insights" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            LATEST INSIGHTS
          </h2>
          <p 
            className="text-lg text-gray-400 max-w-4xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Stay ahead with our latest thoughts on technology trends, industry insights, and innovative solutions shaping the future of business.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-black rounded-lg px-6 py-3 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map((article) => (
          <div key={article.id} className="bg-black rounded-lg p-8 mb-12 hover:bg-gray-800 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                Featured
              </span>
              <span className="text-blue-400 text-sm">{article.category}</span>
            </div>
            <h3 
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {article.title}
            </h3>
            <p 
              className="text-gray-400 mb-6 text-lg"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {article.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {article.readTime}
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                Read More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        ))}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.filter(article => !article.featured).map((article) => (
            <div
              key={article.id}
              className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <span className="text-blue-400 text-sm">{article.category}</span>
              </div>
              <h3 
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {article.title}
              </h3>
              <p 
                className="text-gray-400 mb-4"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {article.description}
              </p>
              <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {article.readTime}
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                Read More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;