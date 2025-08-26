import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const processContent = content.process[language];
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSteps(prev => {
        if (prev.length < processContent.steps.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [processContent.steps.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-luxury-dark to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--luxury-gold)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 80%, hsl(var(--luxury-gold)) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-white mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {processContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-white mx-auto slide-up delay-300"></div>
        </div>

        {/* Timeline Path */}
        <div className="max-w-4xl mx-auto relative">
          {/* Curved Path SVG */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 800 1000" 
            fill="none"
          >
            <path
              d="M100 50 Q400 100 300 250 Q200 400 500 450 Q700 500 400 650 Q100 800 600 850 Q800 900 400 950"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10,5"
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--luxury-gold))" />
                <stop offset="50%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--luxury-gold))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps */}
          <div className="relative space-y-24">
            {processContent.steps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'} ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`max-w-md ${isLeft ? 'text-left' : 'text-right'}`}>
                    {/* Step Card */}
                    <div className="glass-panel group hover:shadow-glow transition-all duration-500">
                      <div className={`flex items-center ${isLeft ? '' : 'flex-row-reverse'} mb-4`}>
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-primary rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center text-xs font-bold text-luxury-dark">
                            {index + 1}
                          </div>
                        </div>
                        
                        <div className={`${isLeft ? 'ml-4' : 'mr-4'}`}>
                          <h3 className={`text-2xl font-bold text-white mb-2 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                            {step}
                          </h3>
                        </div>
                      </div>
                      
                      <p className={`text-white/80 text-lg ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                        Expert execution with attention to every detail, ensuring your vision becomes reality.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;