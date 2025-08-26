import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoreValues: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const valuesContent = content.values[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % valuesContent.items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + valuesContent.items.length) % valuesContent.items.length);
  };

  return (
    <section className="py-24 bg-luxury-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold via-transparent to-primary"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl lg:text-6xl font-bold text-white mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {valuesContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-primary mx-auto slide-up delay-300"></div>
        </div>

        {/* Values Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {valuesContent.items.map((value, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8 py-16">
                  <div className="text-center space-y-8">
                    <h3 className={`text-6xl lg:text-8xl font-bold text-transparent bg-gradient-to-r from-luxury-gold to-primary bg-clip-text ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                      {value.title}
                    </h3>
                    <p className={`text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full w-16 h-16"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="lg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full w-16 h-16"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {valuesContent.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-luxury-gold scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;