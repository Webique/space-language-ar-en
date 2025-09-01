import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Phone, Mail, Clock, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const contactContent = content.contact[language];

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'الهاتف',
      content: '+966 11 123 4567'
    },
    {
      icon: Instagram,
      title: language === 'en' ? 'Instagram' : 'انستغرام',
      content: '@spacelanguageksa',
      link: 'https://www.instagram.com/spacelanguageksa/',
      isSocial: true
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email' : 'البريد الإلكتروني',
      content: 'info@spacelanguage.com'
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Working Hours' : 'ساعات العمل',
      content: language === 'en' ? 'Sun - Thu: 9AM - 6PM' : 'الأحد - الخميس: 9ص - 6م'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-luxury-cream via-white to-luxury-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-luxury-dark mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
            {contactContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto slide-up delay-300"></div>
          <p className={`text-2xl text-primary font-semibold mt-8 fade-in delay-500 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {contactContent.cta}
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel hover:shadow-glow transition-all duration-500 fade-in">
            <h3 className={`text-3xl font-bold text-luxury-dark mb-8 text-center ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
              {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const contentElement = info.isSocial ? (
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-300 cursor-pointer"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className={`text-text-muted ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                    {info.content}
                  </p>
                );

                return (
                  <div key={index} className="text-center group">
                    <div className="p-4 bg-gradient-to-br from-primary to-primary-dark rounded-xl group-hover:animate-pulse-glow mx-auto w-16 h-16 flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className={`text-xl font-semibold text-luxury-dark mb-2 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                      {info.title}
                    </h4>
                    {contentElement}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;