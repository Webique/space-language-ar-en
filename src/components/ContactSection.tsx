import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const contactContent = content.contact[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'en' ? 'Location' : 'الموقع',
      content: contactContent.office
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'الهاتف',
      content: '+966 11 123 4567'
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
          <h2 className={`text-5xl lg:text-6xl font-bold text-luxury-dark mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {contactContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto slide-up delay-300"></div>
          <p className={`text-2xl text-primary font-semibold mt-8 fade-in delay-500 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {contactContent.cta}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div className="glass-panel hover:shadow-glow transition-all duration-500">
              <h3 className={`text-3xl font-bold text-luxury-dark mb-8 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl group-hover:animate-pulse-glow">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className={`text-lg font-semibold text-luxury-dark mb-1 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                          {info.title}
                        </h4>
                        <p className={`text-text-muted ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                          {info.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-3xl overflow-hidden slide-up delay-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className={`text-lg text-luxury-dark font-semibold ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                    {language === 'en' ? 'Riyadh, Al Mursalat District' : 'الرياض، حي المرسلات'}
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-luxury-gold/30 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up delay-500">
            <div className="glass-panel hover:shadow-glow transition-all duration-500">
              <h3 className={`text-3xl font-bold text-luxury-dark mb-8 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                {language === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold text-luxury-dark mb-2 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {language === 'en' ? 'Full Name' : 'الاسم الكامل'}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300"
                      placeholder={language === 'en' ? 'Your name' : 'اسمك'}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-semibold text-luxury-dark mb-2 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300"
                      placeholder={language === 'en' ? 'your@email.com' : 'your@email.com'}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold text-luxury-dark mb-2 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300"
                      placeholder={language === 'en' ? '+966 XX XXX XXXX' : '+966 XX XXX XXXX'}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-semibold text-luxury-dark mb-2 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {language === 'en' ? 'Project Type' : 'نوع المشروع'}
                    </label>
                    <Input
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300"
                      placeholder={language === 'en' ? 'Residential, Commercial, etc.' : 'سكني، تجاري، إلخ.'}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-luxury-dark mb-2 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                    {language === 'en' ? 'Project Details' : 'تفاصيل المشروع'}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-white/50 border-primary/20 focus:border-primary transition-all duration-300 resize-none"
                    placeholder={language === 'en' 
                      ? 'Tell us about your vision, timeline, and requirements...'
                      : 'أخبرنا عن رؤيتك والجدول الزمني والمتطلبات...'
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-luxury group text-lg py-4"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;