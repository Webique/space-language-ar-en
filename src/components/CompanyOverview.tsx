import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import portfolioDining from '@/assets/portfolio-dining.jpg';
import portfolioBedroom from '@/assets/portfolio-bedroom.jpg';
import portfolioHotel from '@/assets/portfolio-hotel.jpg';

const CompanyOverview: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const overviewContent = content.overview[language];
  
  const images = [portfolioDining, portfolioBedroom, portfolioHotel];

  return (
    <section className="py-24 bg-gradient-to-br from-luxury-cream to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
          
          {/* Content Side */}
          <div className={`${isRTL ? 'lg:order-2 font-cairo' : 'font-poppins'} space-y-8`}>
            <h2 className={`text-5xl lg:text-6xl font-bold text-luxury-dark leading-tight fade-in`}>
              {overviewContent.title}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark slide-up delay-300"></div>
            
            <p className={`text-xl text-text-muted leading-relaxed slide-up delay-500`}>
              {overviewContent.content}
            </p>
            
            <div className="slide-up delay-700">
              <div className="inline-flex items-center space-x-4 text-primary font-semibold">
                <span className="text-lg">Established Excellence</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Images Side */}
          <div className={`${isRTL ? 'lg:order-1' : ''} relative`}>
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`
                    relative overflow-hidden rounded-2xl shadow-luxury group hover-reveal
                    ${index === 0 ? 'col-span-2 h-64' : 'h-64'}
                    ${index === 1 ? 'transform rotate-2' : ''}
                    ${index === 2 ? 'transform -rotate-2' : ''}
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={image}
                    alt={`Interior design ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Floating Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-luxury-gold/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;