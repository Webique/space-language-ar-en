import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/cf943f51-56ce-438a-b32d-5c76ab4f1f0a.jpg';
import logoWhite from '@/assets/logo space language - white-01.png';

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
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/80 via-primary-dark/60 to-transparent"></div>
      </div>
      
      {/* Hero Content - Perfectly Centered */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animated Headline with Logo */}
        <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
          <div className="flex items-center justify-center gap-2 mb-16">
            <img 
              src={logoWhite} 
              alt="Space Language Logo" 
              className="w-72 h-32 sm:w-80 sm:h-40 md:w-96 md:h-48 lg:w-[32rem] lg:h-56"
            />
          </div>
          <div className="text-center">
            {words.slice(2).map((word, index) => (
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
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="fade-in delay-700">
          <Button 
            size="lg" 
            className={`btn-luxury text-xl px-12 py-6 shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-500 ${isRTL ? 'font-cairo' : 'font-playfair'}`}
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