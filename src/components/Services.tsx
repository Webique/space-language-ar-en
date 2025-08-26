import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { 
  Home, 
  Building2, 
  Utensils, 
  PaintBucket, 
  Wrench, 
  Box, 
  Compass 
} from 'lucide-react';
import portfolioOffice from '@/assets/portfolio-office.jpg';

const Services: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const servicesContent = content.services[language];
  
  const serviceIcons = [Home, Building2, Utensils, PaintBucket, Wrench, Box, Compass];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-luxury-cream to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-luxury-dark mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {servicesContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto slide-up delay-300"></div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-16 max-w-7xl mx-auto">
          {servicesContent.items.map((service, index) => {
            const IconComponent = serviceIcons[index];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                } fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:order-2'} ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-luxury-gold to-primary"></div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-luxury-dark leading-tight">
                    {service}
                  </h3>
                  
                  <p className="text-lg text-text-muted leading-relaxed">
                    Professional excellence in every detail, combining innovative design with practical functionality.
                  </p>
                </div>

                {/* Service Image */}
                <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-luxury group hover-reveal">
                    <img
                      src={portfolioOffice}
                      alt={service}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Number */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-luxury-gold/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;