import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Star, Users, CheckCircle } from 'lucide-react';

const WhyUs: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: "Why Choose Us",
      subtitle: "Meet Our Visionary Founder",
      founder: "Eng. Latifah Al-Tuwaijri",
      role: "Founder & Lead Designer",
      degree: "Bachelor's Degree in Interior Design",
      university: "Rochester Institute of Technology, New York",
      experience: "16+ Years of Excellence",
      description: "Eng. Latifah Al-Tuwaijri is the founder of Space Language for Interior Design. She holds a Bachelor's degree in Interior Design from the Rochester Institute of Technology in New York. Over the course of more than sixteen years, she has built extensive expertise in interior design and architecture, developing a holistic approach that seamlessly integrates refined aesthetics with functional practicality.",
      philosophy: "Eng. Lateefa is a firm believer that successful design begins with a thorough understanding of the client's needs. This philosophy is evident in her ability to transform spaces into environments that embody both elegance and comfort. Her keen attention to detail defines her work, ensuring that every project carries its own distinctive identity and character.",
      highlights: [
        "16+ Years of Experience",
        "International Education",
        "Client-Centric Approach",
        "Attention to Detail"
      ]
    },
    ar: {
      title: "لماذا تختارنا",
      subtitle: "تعرف على مؤسستنا الرؤيوية",
      founder: "المهندسة لطيفة التويجري",
      role: "مؤسسة ومصممة رئيسية",
      degree: "بكالوريوس في التصميم الداخلي",
      university: "معهد روتشستر للتكنولوجيا، نيويورك",
      experience: "أكثر من 16 عاماً من التميز",
      description: "المهندسة لطيفة التويجري، مؤسسة لغة المساحة للتصميم الداخلي، تحمل شهادة البكالوريوس في التصميم الداخلي من جامعة Rochester Institute of Technology في نيويورك. على مدى أكثر من ستة عشر عامًا، اكتسبت خبرة واسعة في مجال التصميم والعمارة الداخلية، مما منحها رؤية متكاملة تجمع بين الذوق الرفيع والوظيفة العملية.",
      philosophy: "تؤمن المهندسة لطيفة أن التصميم الحقيقي يبدأ بفهم عميق لاحتياجات العميل، وينعكس ذلك في قدرتها على تحويل المساحات إلى أماكن تنبض بالجمال والراحة في آنٍ واحد. كما تضع التفاصيل الدقيقة في صميم عملها، لإيمانها بأنها العنصر الذي يصنع الفارق ويمنح كل مشروع طابعه الخاص",
      highlights: [
        "أكثر من 16 عاماً من الخبرة",
        "تعليم دولي",
        "نهج يركز على العميل",
        "الاهتمام بالتفاصيل"
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-24 bg-gradient-to-br from-luxury-cream via-white to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--luxury-gold)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 80%, hsl(var(--luxury-gold)) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-luxury-dark mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto slide-up delay-300"></div>
          <p className={`text-xl text-text-muted mt-8 max-w-3xl mx-auto ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Founder Information */}
          <div className={`${isRTL ? 'lg:order-2' : ''} space-y-8 fade-in`}>
            {/* Founder Card */}
            <div className="glass-panel p-8 hover:shadow-glow transition-all duration-700 group">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-luxury-gold to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className={`text-3xl font-bold text-luxury-dark mb-2 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                  {currentContent.founder}
                </h3>
                <p className={`text-lg text-primary font-semibold ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                  {currentContent.role}
                </p>
              </div>

              {/* Education & Experience */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-luxury-gold" />
                  <div>
                    <p className={`font-semibold text-luxury-dark ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {currentContent.degree}
                    </p>
                    <p className={`text-sm text-text-muted ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {currentContent.university}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-luxury-gold" />
                  <p className={`font-semibold text-luxury-dark ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                    {currentContent.experience}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className={`text-lg text-text-muted leading-relaxed ${isRTL ? 'font-cairo text-right' : 'font-poppins text-left'}`}>
                  {currentContent.description}
                </p>
                <p className={`text-lg text-text-muted leading-relaxed ${isRTL ? 'font-cairo text-right' : 'font-poppins text-left'}`}>
                  {currentContent.philosophy}
                </p>
              </div>
            </div>
          </div>

          {/* Highlights & Features */}
          <div className={`${isRTL ? 'lg:order-1' : ''} space-y-8 slide-up delay-300`}>
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {currentContent.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-panel p-6 text-center hover:shadow-glow transition-all duration-500 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`font-semibold text-luxury-dark ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                    {highlight}
                  </h4>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-luxury-gold/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
