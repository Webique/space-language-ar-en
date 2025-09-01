import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Eye, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const visionContent = content.vision[language];
  const missionContent = content.mission[language];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-dark/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Vision Panel */}
          <div className="fade-in">
            <div className="glass-panel hover:shadow-glow transition-all duration-700 group">
            <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''} gap-4`}>
            <div className="p-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl group-hover:animate-pulse-glow">
            <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-3xl font-bold text-luxury-dark ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                  {visionContent.title}
                </h3>
              </div>
              
              <p className={`text-lg text-text-muted leading-relaxed ${isRTL ? 'font-cairo text-right' : 'font-poppins text-left'}`}>
                {visionContent.content}
              </p>
              
              {/* Decorative Elements */}
              <div className={`absolute top-4 w-20 h-20 bg-luxury-gold/10 rounded-full animate-float ${isRTL ? 'left-4' : 'right-4'}`}></div>
            </div>
          </div>

          {/* Mission Panel */}
          <div className="slide-up delay-300">
            <div className="glass-panel hover:shadow-glow transition-all duration-700 group">
            <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''} gap-4`}>
            <div className="p-4 bg-gradient-to-br from-primary-dark to-primary rounded-2xl group-hover:animate-pulse-glow">
            <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-3xl font-bold text-luxury-dark ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                  {missionContent.title}
                </h3>
              </div>
              
              <p className={`text-lg text-text-muted leading-relaxed ${isRTL ? 'font-cairo text-right' : 'font-poppins text-left'}`}>
                {missionContent.content}
              </p>
              
              {/* Decorative Elements */}
              <div className={`absolute bottom-4 w-16 h-16 bg-primary/10 rounded-full animate-float ${isRTL ? 'right-4' : 'left-4'}`} style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury-gold rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-luxury-gold rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default VisionMission;