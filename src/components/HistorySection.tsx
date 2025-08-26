import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Calendar, Award, Users, Building } from 'lucide-react';

const HistorySection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const historyContent = content.history[language];

  const milestones = [
    {
      year: '2018',
      icon: Building,
      title: language === 'en' ? 'Company Founded' : 'تأسيس الشركة',
      description: language === 'en' ? 'Started with a vision for innovative design' : 'بدأنا برؤية للتصميم المبتكر'
    },
    {
      year: '2020',
      icon: Users,
      title: language === 'en' ? 'Team Expansion' : 'توسع الفريق',
      description: language === 'en' ? 'Grew to 15+ talented professionals' : 'نمونا إلى أكثر من 15 محترف موهوب'
    },
    {
      year: '2022',
      icon: Award,
      title: language === 'en' ? 'Design Excellence Award' : 'جائزة التميز في التصميم',
      description: language === 'en' ? 'Recognized for outstanding luxury interiors' : 'تم تكريمنا للتصاميم الداخلية الفاخرة المتميزة'
    },
    {
      year: '2024',
      icon: Calendar,
      title: language === 'en' ? 'Future Vision' : 'رؤية المستقبل',
      description: language === 'en' ? 'Expanding to sustainable smart spaces' : 'نتوسع في المساحات الذكية المستدامة'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark via-luxury-dark to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            hsl(var(--luxury-gold)) 2px,
            hsl(var(--luxury-gold)) 4px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-white mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {historyContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-white mx-auto slide-up delay-300"></div>
          <p className={`text-xl text-white/80 mt-8 max-w-4xl mx-auto leading-relaxed ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {historyContent.content}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-luxury-gold via-primary to-luxury-gold"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-luxury-gold to-primary rounded-full flex items-center justify-center shadow-glow z-10">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? 'pr-16' : 'pl-16'} ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className="glass-panel group hover:shadow-glow transition-all duration-500">
                        {/* Year Badge */}
                        <div className={`inline-block px-4 py-2 bg-luxury-gold text-luxury-dark font-bold rounded-full text-lg mb-4 ${isLeft ? 'float-right' : 'float-left'}`}>
                          {milestone.year}
                        </div>
                        
                        <div className="clear-both">
                          <h3 className={`text-2xl font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                            {milestone.title}
                          </h3>
                          
                          <p className={`text-white/80 text-lg leading-relaxed ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                            {milestone.description}
                          </p>
                        </div>

                        {/* Decorative Arrow */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                          isLeft ? '-right-3' : '-left-3'
                        } w-6 h-6 bg-white/20 backdrop-blur-md rotate-45`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '150+', label: language === 'en' ? 'Projects Completed' : 'مشروع مكتمل' },
            { number: '6', label: language === 'en' ? 'Years of Excellence' : 'سنوات من التميز' },
            { number: '98%', label: language === 'en' ? 'Client Satisfaction' : 'رضا العملاء' }
          ].map((stat, index) => (
            <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1 + 0.8}s` }}>
              <div className="text-5xl lg:text-6xl font-bold text-luxury-gold mb-2">
                {stat.number}
              </div>
              <div className={`text-white/80 text-lg ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;