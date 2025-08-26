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
      
      {/* Hero Content - Perfectly Centered */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Company Name */}
        <div className="mb-8 fade-in">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-luxury-gold mb-4 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {language === 'en' ? 'Space Language' : 'لغة المساحة'}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold to-primary mx-auto slide-up delay-200"></div>
        </div>

        {/* Animated Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
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
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 fade-in delay-500 max-w-3xl mx-auto">
          {heroContent.subheadline}
        </p>
        
        {/* CTA Button */}
        <div className="fade-in delay-700">
          <Button 
            size="lg" 
            className="btn-luxury text-xl px-12 py-6 shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-500"
            onClick={() => {
              const phoneNumber = '+966 11 123 4567';
              const message = language === 'en' 
                ? 'Hello! I would like to book a consultation for interior design services.'
                : 'مرحباً! أود حجز استشارة لخدمات التصميم الداخلي.';
              const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            {heroContent.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;