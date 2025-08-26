import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import portfolioDining from '@/assets/portfolio-dining.jpg';
import portfolioBedroom from '@/assets/portfolio-bedroom.jpg';
import portfolioHotel from '@/assets/portfolio-hotel.jpg';
import portfolioOffice from '@/assets/portfolio-office.jpg';
import heroImage from '@/assets/hero-living-room.jpg';

const PortfolioGallery: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      image: heroImage,
      title: language === 'en' ? 'Luxury Living Room' : 'غرفة معيشة فاخرة',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Modern elegance with teal accents' : 'أناقة عصرية مع لمسات تركوازية'
    },
    {
      image: portfolioDining,
      title: language === 'en' ? 'Contemporary Dining' : 'قاعة طعام عصرية',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Sophisticated dining experience' : 'تجربة طعام راقية'
    },
    {
      image: portfolioBedroom,
      title: language === 'en' ? 'Master Bedroom Suite' : 'جناح غرفة النوم الرئيسية',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Luxury comfort and tranquility' : 'راحة وهدوء فاخر'
    },
    {
      image: portfolioHotel,
      title: language === 'en' ? 'Hotel Lobby Design' : 'تصميم ردهة فندق',
      category: language === 'en' ? 'Hospitality' : 'ضيافة',
      description: language === 'en' ? 'Grand entrance with modern flair' : 'مدخل فخم بلمسة عصرية'
    },
    {
      image: portfolioOffice,
      title: language === 'en' ? 'Executive Office' : 'مكتب تنفيذي',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Professional workspace design' : 'تصميم مساحة عمل مهنية'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-luxury-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-luxury-dark mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {language === 'en' ? 'Our Portfolio' : 'أعمالنا'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto slide-up delay-300"></div>
          <p className={`text-xl text-text-muted mt-8 max-w-3xl mx-auto ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {language === 'en' 
              ? 'Discover our exceptional projects that showcase the perfect blend of creativity, functionality, and luxury.'
              : 'اكتشف مشاريعنا الاستثنائية التي تظهر المزج المثالي بين الإبداع والوظيفية والفخامة.'
            }
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer fade-in hover-reveal ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-luxury transition-all duration-700 group-hover:shadow-glow group-hover:transform group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'h-80' : index === 3 ? 'h-64' : 'h-72'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-luxury-gold text-luxury-dark text-sm font-semibold rounded-full">
                      {item.category}
                    </span>
                    <h3 className={`text-2xl font-bold ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-white/90 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className={`text-sm text-white/80 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                      {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                    </span>
                    <ExternalLink className="w-5 h-5 text-luxury-gold" />
                  </div>
                </div>

                {/* Floating Number */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16 fade-in delay-700">
          <button className="btn-outline-luxury group">
            <span>{language === 'en' ? 'View All Projects' : 'عرض جميع المشاريع'}</span>
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black/90 border-none p-0">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={portfolioItems[selectedImage].image}
                alt={portfolioItems[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className={`text-2xl font-bold mb-2 ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                  {portfolioItems[selectedImage].title}
                </h3>
                <p className={`text-white/90 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                  {portfolioItems[selectedImage].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioGallery;