import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    headline: "INNOVATE WITH KINNOVEX",
    subtext: "Empowering enterprises with cutting-edge technology solutions and strategic innovation to drive digital transformation and sustainable growth.",
    cta: "Your Partner in Next-Generation Technology Transform, Lead, Driving Digital Evolution",
    background: "bg-black"
  },
  {
    id: 2,
    headline: "Transforming Business Through Innovation",
    subtext: "We empower enterprises to thrive in the digital age. We are a leading technology solutions and strategic innovation partner, committed to driving impactful digital transformation and sustainable growth for businesses worldwide.",
    cta: "We build, innovate, and connect Engineering Tomorrow's Digital Reality",
    background: "bg-black"
  },
  {
    id: 3,
    headline: "Unleash the Power of Quantum AI",
    subtext: "Fusing the power of Artificial Intelligence and Quantum Computing to unlock next-generation optimization, prediction, and simulation—accelerating breakthroughs in science, business, and technology with Speed, precision, and next-gen intelligence redefined.",
    cta: "innovation, digital transformation, future-readiness",
    background: "bg-black"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full ${slide.background} flex items-center justify-center transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 transform translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {slide.headline}
            </h1>
            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {slide.subtext}
            </p>
            <button className="bg-black border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
      >
        <ChevronRight size={48} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;