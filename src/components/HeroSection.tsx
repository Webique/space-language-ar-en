import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-living-room.jpg';

const HeroSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const heroContent = content.hero[language];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = heroContent.headline.split(' ');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/80 via-primary-dark/60 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto ${isRTL ? 'font-tajawal' : 'font-montserrat'}`}>
        {/* Animated Headline */}
        <h1 className="text-cinematic mb-8 leading-tight">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-4 transition-all duration-500 ${
                index <= currentWordIndex 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-30 transform translate-y-4'
              }`}
            >
              {word}
            </span>
          ))}
        </h1>
        
        {/* Subheadline */}
        <p className="text-subtitle mb-12 text-white/90 fade-in delay-500 max-w-3xl mx-auto">
          {heroContent.subheadline}
        </p>
        
        {/* CTA Button */}
        <div className="fade-in delay-700">
          <Button 
            size="lg" 
            className="btn-luxury text-xl px-12 py-6 shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-500"
          >
            {heroContent.cta}
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;