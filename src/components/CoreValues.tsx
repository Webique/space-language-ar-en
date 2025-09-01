import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoreValues: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const valuesContent = content.values[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Safety check for content
  if (!valuesContent || !valuesContent.items || valuesContent.items.length === 0) {
    return (
      <section className="py-24 bg-luxury-dark relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">Loading...</p>
        </div>
      </section>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % valuesContent.items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + valuesContent.items.length) % valuesContent.items.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-luxury-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold via-transparent to-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 fade-in ${isRTL ? 'font-cairo rtl-text' : 'font-playfair'}`}>
            {valuesContent.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-luxury-gold to-primary mx-auto slide-up delay-300"></div>
        </div>

        {/* Values Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: isRTL 
                  ? `translateX(${currentSlide * 100}%)` 
                  : `translateX(-${currentSlide * 100}%)` 
              }}
            >
              {valuesContent.items.map((value, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                  <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-luxury-gold to-primary bg-clip-text ${isRTL ? 'font-cairo rtl-text' : 'font-playfair'}`}>
                      {value.title}
                    </h3>
                    <p className={`text-base sm:text-lg md:text-xl text-white/80 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto leading-relaxed ${isRTL ? 'font-cairo rtl-text' : 'font-poppins'}`}>
                      {value.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="lg"
            className={`absolute top-3/4 sm:top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${
              isRTL ? 'right-2 sm:right-3 md:right-4' : 'left-2 sm:left-3 md:left-4'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="lg"
            className={`absolute top-3/4 sm:top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${
              isRTL ? 'left-2 sm:left-3 md:left-4' : 'right-2 sm:right-3 md:right-4'
            }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex mt-8 sm:mt-10 md:mt-12 justify-center">
            {valuesContent.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-luxury-gold scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                } ${index > 0 ? (isRTL ? 'mr-2 sm:mr-3' : 'ml-2 sm:ml-3') : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;