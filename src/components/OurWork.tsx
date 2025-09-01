import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import the 6 showcase images for 3D Architecture
import f1 from '@/assets/f1.jpg';
import f2 from '@/assets/f2.jpg';
import f3 from '@/assets/f3.jpg';
import f4 from '@/assets/f4.jpg';
import f5 from '@/assets/f5.jpg';
import f6 from '@/assets/f6.jpg';

// Import the 6 showcase images for Ground Designs
import g17 from '@/assets/17.jpg';
import g18 from '@/assets/18.jpg';
import g19 from '@/assets/19.jpg';
import g20 from '@/assets/20.jpg';
import g21 from '@/assets/21.jpg';
import g22 from '@/assets/22.jpg';

const OurWork: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: "Our Work",
      subtitle: "Design Excellence",
      description: "Explore our comprehensive design projects showcasing 3D architectural visualization, ground design expertise, and interior design mastery."
    },
    ar: {
      title: "أعمالنا",
      subtitle: "التميز في التصميم",
      description: "اكتشف مشاريعنا التصميمية الشاملة التي تعرض خبرتنا في التصميم المعماري ثلاثي الأبعاد وتصميم الأرضيات والتصميم الداخلي."
    }
  };

  const currentContent = content[language];
  
  const projects = [
    {
      id: '3d-architecture',
      title: language === 'en' ? 'Luxury Villa 3D Visualization' : 'تصميم ثلاثي الأبعاد لفيلا فاخرة',
      subtitle: language === 'en' ? '3D Architecture Project' : 'مشروع العمارة ثلاثي الأبعاد',
      description: language === 'en' 
        ? 'Complete architectural visualization with multiple perspectives, interior views, and detailed renderings'
        : 'تصميم معماري كامل بوجهات نظر متعددة ومناظر داخلية وتصميمات مفصلة',
      images: [f1, f2, f3, f4, f5, f6],
      type: language === 'en' ? '3D Architecture' : 'العمارة ثلاثي الأبعاد',
      highlights: [
        {
          title: language === 'en' ? 'Multiple Perspectives' : 'وجهات نظر متعددة',
          description: language === 'en' ? '6 different views showcasing various angles and details' : '6 مناظر مختلفة تعرض زوايا وتفاصيل متنوعة'
        },
        {
          title: language === 'en' ? 'High Quality' : 'جودة عالية',
          description: language === 'en' ? 'Professional 3D rendering with realistic materials and lighting' : 'تصميم ثلاثي الأبعاد احترافي بمواد وإضاءة واقعية'
        },
        {
          title: language === 'en' ? 'Complete Project' : 'مشروع متكامل',
          description: language === 'en' ? 'Full architectural visualization from concept to final render' : 'تصميم معماري كامل من المفهوم إلى التصميم النهائي'
        }
      ]
    },
    {
      id: 'ground-designs',
      title: language === 'en' ? 'Premium Ground Design Collection' : 'مجموعة تصميم الأرضيات الفاخرة',
      subtitle: language === 'en' ? 'Ground Design Project' : 'مشروع تصميم الأرضيات',
      description: language === 'en' 
        ? 'Exclusive ground design patterns and layouts that create stunning visual impact and functional beauty'
        : 'أنماط وتخطيطات حصرية لتصميم الأرضيات تخلق تأثيراً بصرياً مذهلاً وجمالاً وظيفياً',
      images: [g17, g18, g19, g20, g21, g22],
      type: language === 'en' ? 'Ground Design' : 'تصميم الأرضيات',
      highlights: [
        {
          title: language === 'en' ? 'Pattern Variety' : 'تنوع الأنماط',
          description: language === 'en' ? '6 unique ground patterns with different styles and textures' : '6 أنماط أرضية فريدة بأساليب وقوام مختلف'
        },
        {
          title: language === 'en' ? 'Premium Materials' : 'مواد فاخرة',
          description: language === 'en' ? 'High-quality materials and finishes for lasting beauty' : 'مواد وتشطيبات عالية الجودة للجمال الدائم'
        },
        {
          title: language === 'en' ? 'Functional Beauty' : 'الجمال الوظيفي',
          description: language === 'en' ? 'Designs that combine aesthetics with practical functionality' : 'تصاميم تجمع بين الجمال والوظيفة العملية'
        }
      ]
    },
    {
      id: 'first-floor-interior',
      title: language === 'en' ? 'First Floor Interior Design' : 'التصميم الداخلي للطابق الأول',
      subtitle: language === 'en' ? 'Interior Design Project' : 'مشروع التصميم الداخلي',
      description: language === 'en' 
        ? 'Comprehensive first floor interior design showcasing living spaces, dining areas, and functional layouts with luxury finishes'
        : 'تصميم داخلي شامل للطابق الأول يعرض المساحات المعيشية ومناطق الطعام والتخطيطات الوظيفية مع التشطيبات الفاخرة',
      images: [f1, f2, f3, f4, f5, f6],
      type: language === 'en' ? 'Interior Design' : 'التصميم الداخلي',
      highlights: [
        {
          title: language === 'en' ? 'Living Spaces' : 'المساحات المعيشية',
          description: language === 'en' ? '6 different interior views showcasing living rooms, dining areas, and functional zones' : '6 مناظر داخلية مختلفة تعرض غرف المعيشة ومناطق الطعام والمناطق الوظيفية'
        },
        {
          title: language === 'en' ? 'Luxury Finishes' : 'تشطيبات فاخرة',
          description: language === 'en' ? 'Premium materials, elegant furniture, and sophisticated lighting design' : 'مواد فاخرة وأثاث أنيق وتصميم إضاءة متطور'
        },
        {
          title: language === 'en' ? 'Functional Layout' : 'تخطيط وظيفي',
          description: language === 'en' ? 'Smart space planning that maximizes functionality while maintaining aesthetic appeal' : 'تخطيط ذكي للمساحة يزيد من الوظائف مع الحفاظ على الجاذبية الجمالية'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-luxury-cream/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-luxury-dark mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto slide-up delay-300"></div>
                      <h3 className={`text-2xl lg:text-3xl font-semibold text-primary mt-6 mb-4 fade-in delay-400 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
            {currentContent.subtitle}
          </h3>
          <p className={`text-lg text-text-muted max-w-3xl mx-auto fade-in delay-500 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {currentContent.description}
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-24">
          {projects.map((project, projectIndex) => (
            <div key={project.id} className="max-w-7xl mx-auto">
              {/* Project Header */}
              <div className="text-center mb-12 fade-in" style={{ animationDelay: `${projectIndex * 0.2}s` }}>
                <h4 className={`text-2xl lg:text-3xl font-bold text-luxury-dark mb-4 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                  {project.title}
                </h4>
                <p className={`text-lg text-text-muted max-w-2xl mx-auto ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                  {project.description}
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {project.images.map((image, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 fade-in"
                    style={{ animationDelay: `${(projectIndex * 0.2) + (index * 0.1)}s` }}
                  >
                    <img
                      src={image}
                      alt={`${project.type} View ${index + 1}`}
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <h4 className={`text-white font-semibold text-sm sm:text-base ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                            {language === 'en' ? `View ${index + 1}` : `المنظر ${index + 1}`}
                          </h4>
                          <p className={`text-white/90 text-xs sm:text-sm ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                            {project.type}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* View Number Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/10 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-luxury-gold/20 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                  </div>
                ))}
              </div>

              {/* Project Details */}
              <div className="mt-16 text-center fade-in" style={{ animationDelay: `${(projectIndex * 0.2) + 0.7}s` }}>
                <div className="max-w-4xl mx-auto">
                  <h5 className={`text-xl font-semibold text-luxury-dark mb-6 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                    {language === 'en' ? 'Project Highlights' : 'مميزات المشروع'}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <h6 className={`font-semibold text-primary mb-2 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                          {highlight.title}
                        </h6>
                        <p className={`text-sm text-text-muted ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Separator */}
              {projectIndex < projects.length - 1 && (
                <div className="mt-16 text-center">
                  <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto opacity-30"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 fade-in delay-1000">
          <p className={`text-lg text-text-muted mb-6 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {language === 'en' 
              ? 'Ready to bring your design vision to life?' 
              : 'هل أنت مستعد لجعل رؤية التصميم الخاصة بك حقيقة؟'
            }
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
