import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroCarousel from './components/HeroCarousel';
import AIInnovationHub from './components/AIInnovationHub';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import CompanyInfo from './components/CompanyInfo';
import WhyChooseUs from './components/WhyChooseUs';
import LatestInsights from './components/LatestInsights';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Service sub-pages
import CloudSolutions from './pages/services/CloudSolutions';
import Cybersecurity from './pages/services/Cybersecurity';
import AIDataIntelligence from './pages/services/AIDataIntelligence';
import DigitalEngineering from './pages/services/DigitalEngineering';
import CustomerExperience from './pages/services/CustomerExperience';
import EmergingTechnology from './pages/services/EmergingTechnology';

// AI Innovation sub-pages
import GenerativeAI from './pages/ai/GenerativeAI';
import AIPoweredRobotics from './pages/ai/AIPoweredRobotics';
import AutonomousSupplyChains from './pages/ai/AutonomousSupplyChains';
import AIRefinery from './pages/ai/AIRefinery';

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AIInnovationHub />
      <ServicesSection />
      <IndustriesSection />
      <CompanyInfo />
      <WhyChooseUs />
      <LatestInsights />
      <CareersSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Service Routes */}
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/ai-data-intelligence" element={<AIDataIntelligence />} />
          <Route path="/services/digital-engineering" element={<DigitalEngineering />} />
          <Route path="/services/customer-experience" element={<CustomerExperience />} />
          <Route path="/services/emerging-technology" element={<EmergingTechnology />} />
          
          {/* AI Innovation Routes */}
          <Route path="/ai/generative-ai" element={<GenerativeAI />} />
          <Route path="/ai/ai-powered-robotics" element={<AIPoweredRobotics />} />
          <Route path="/ai/autonomous-supply-chains" element={<AutonomousSupplyChains />} />
          <Route path="/ai/ai-refinery" element={<AIRefinery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;