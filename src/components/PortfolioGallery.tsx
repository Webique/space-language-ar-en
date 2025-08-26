import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Import all new portfolio images (excluding hero and portfolio-prefixed ones)
import portfolioImage1 from '@/assets/3c3f004b-4a49-4e59-a637-880d8daa9d3f.jpg';
import portfolioImage2 from '@/assets/cf943f51-56ce-438a-b32d-5c76ab4f1f0a.jpg';
import portfolioImage3 from '@/assets/2d13031d-c322-49c4-83bf-d8aeb30d3893.jpg';
import portfolioImage4 from '@/assets/4936c1f1-f1dc-43b6-8f01-168369855909.jpg';
import portfolioImage5 from '@/assets/b3558a1a-ae6b-42ce-893f-0f25e632d8d9.jpg';
import portfolioImage6 from '@/assets/b444cb27-e92b-4ed3-8ed2-edb21b6a5eda.jpg';
import portfolioImage7 from '@/assets/4005c992-8140-4192-aab2-d19d8f59de7c.jpg';
import portfolioImage8 from '@/assets/38e0e3b9-e63e-4e11-b80d-92453354c0ca.jpg';
import portfolioImage9 from '@/assets/548c9d0c-48ca-43d1-8a1c-8767ecdf2d78.jpg';
import portfolioImage10 from '@/assets/83d02a6a-5faf-4536-8d77-5cb1445185d0.jpg';
import portfolioImage11 from '@/assets/aff4f97d-aa2b-4f04-8975-f93a08b85698.jpg';
import portfolioImage12 from '@/assets/cbdb9639-c86f-4c6a-9dc9-ccaf179d324b.jpg';
import portfolioImage13 from '@/assets/f36d10ef-60cf-4350-9957-da5685c317c8.jpg';
import portfolioImage14 from '@/assets/41aacf70-0223-4d72-8c6f-ab3ff6ee1240.jpg';
import portfolioImage15 from '@/assets/924c7a1a-101c-4950-abe7-bc59feb40a4a.jpg';
import portfolioImage16 from '@/assets/941b66a3-8269-493a-adc5-3742db5df18b.jpg';
import portfolioImage17 from '@/assets/cf0d22f3-e344-48ed-ad07-419f059abbc5.jpg';
import portfolioImage18 from '@/assets/ecfbb589-286f-4540-b48a-15250b7a3028.jpg';
import portfolioImage19 from '@/assets/edbd07e7-4d2e-471a-9291-d48667cc69c0.jpg';
import portfolioImage20 from '@/assets/f97f3288-04e2-47a4-adb2-629116862f8f.jpg';

const PortfolioGallery: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(true); // Show all images by default

  const portfolioItems = [
    {
      image: portfolioImage1,
      title: language === 'en' ? 'Modern Living Space' : 'مساحة معيشة عصرية',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Contemporary elegance with luxury finishes' : 'أناقة عصرية مع تشطيبات فاخرة'
    },
    {
      image: portfolioImage2,
      title: language === 'en' ? 'Executive Office Design' : 'تصميم مكتب تنفيذي',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Professional workspace with modern aesthetics' : 'مساحة عمل مهنية بجماليات عصرية'
    },
    {
      image: portfolioImage3,
      title: language === 'en' ? 'Luxury Hotel Interior' : 'تصميم داخلي لفندق فاخر',
      category: language === 'en' ? 'Hospitality' : 'ضيافة',
      description: language === 'en' ? 'Sophisticated hospitality design' : 'تصميم ضيافة متطور'
    },
    {
      image: portfolioImage4,
      title: language === 'en' ? 'Contemporary Kitchen' : 'مطبخ عصري',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Modern kitchen with premium materials' : 'مطبخ عصري بمواد عالية الجودة'
    },
    {
      image: portfolioImage5,
      title: language === 'en' ? 'Corporate Headquarters' : 'المقر الرئيسي للشركة',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Professional corporate environment' : 'بيئة شركات مهنية'
    },
    {
      image: portfolioImage6,
      title: language === 'en' ? '3D Visualization Project' : 'مشروع التصيير ثلاثي الأبعاد',
      category: language === 'en' ? 'Visualization' : 'تصيير',
      description: language === 'en' ? 'Advanced 3D rendering and visualization' : 'تصيير وتصور ثلاثي الأبعاد متقدم'
    },
    {
      image: portfolioImage7,
      title: language === 'en' ? 'Space Planning Design' : 'تصميم تخطيط المساحات',
      category: language === 'en' ? 'Planning' : 'تخطيط',
      description: language === 'en' ? 'Strategic space utilization and design' : 'استخدام استراتيجي للمساحات والتصميم'
    },
    {
      image: portfolioImage8,
      title: language === 'en' ? 'Luxury Bedroom Suite' : 'جناح غرفة نوم فاخر',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Elegant bedroom with premium finishes' : 'غرفة نوم أنيقة بتشطيبات عالية الجودة'
    },
    {
      image: portfolioImage9,
      title: language === 'en' ? 'Modern Dining Area' : 'منطقة طعام عصرية',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Contemporary dining space design' : 'تصميم مساحة طعام عصرية'
    },
    {
      image: portfolioImage10,
      title: language === 'en' ? 'Commercial Retail Space' : 'مساحة تجارية للبيع بالتجزئة',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Modern retail environment design' : 'تصميم بيئة بيع بالتجزئة عصرية'
    },
    {
      image: portfolioImage11,
      title: language === 'en' ? 'Luxury Villa Interior' : 'التصميم الداخلي لفيلا فاخرة',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Premium villa interior design' : 'تصميم داخلي لفيلا عالية الجودة'
    },
    {
      image: portfolioImage12,
      title: language === 'en' ? 'Modern Office Space' : 'مساحة مكتب عصرية',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Contemporary office environment' : 'بيئة مكتب عصرية'
    },
    {
      image: portfolioImage13,
      title: language === 'en' ? 'Luxury Living Room' : 'غرفة معيشة فاخرة',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Elegant living space design' : 'تصميم مساحة معيشة أنيقة'
    },
    {
      image: portfolioImage14,
      title: language === 'en' ? 'Corporate Meeting Room' : 'غرفة اجتماعات شركات',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Professional meeting environment' : 'بيئة اجتماعات مهنية'
    },
    {
      image: portfolioImage15,
      title: language === 'en' ? 'Modern Kitchen Design' : 'تصميم مطبخ عصري',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Contemporary kitchen aesthetics' : 'جماليات مطبخ عصرية'
    },
    {
      image: portfolioImage16,
      title: language === 'en' ? 'Luxury Bathroom' : 'حمام فاخر',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Premium bathroom design' : 'تصميم حمام عالي الجودة'
    },
    {
      image: portfolioImage17,
      title: language === 'en' ? 'Modern Living Area' : 'منطقة معيشة عصرية',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Contemporary living space' : 'مساحة معيشة عصرية'
    },
    {
      image: portfolioImage18,
      title: language === 'en' ? 'Executive Workspace' : 'مساحة عمل تنفيذية',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Professional executive environment' : 'بيئة تنفيذية مهنية'
    },
    {
      image: portfolioImage19,
      title: language === 'en' ? 'Luxury Interior Design' : 'تصميم داخلي فاخر',
      category: language === 'en' ? 'Residential' : 'سكني',
      description: language === 'en' ? 'Premium interior aesthetics' : 'جماليات داخلية عالية الجودة'
    },
    {
      image: portfolioImage20,
      title: language === 'en' ? 'Modern Commercial Space' : 'مساحة تجارية عصرية',
      category: language === 'en' ? 'Commercial' : 'تجاري',
      description: language === 'en' ? 'Contemporary commercial design' : 'تصميم تجاري عصري'
    }
  ];

  // Show all images by default, but allow users to collapse to see fewer
  const visibleImages = showAllImages ? portfolioItems : portfolioItems.slice(0, 6);

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
          {visibleImages.map((item, index) => (
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

                {/* Floating Number */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Button for All Devices */}
        <div className="text-center mt-16 fade-in delay-700">
          <button 
            onClick={() => setShowAllImages(!showAllImages)}
            className="btn-outline-luxury group"
          >
            <span>
              {showAllImages 
                ? (language === 'en' ? 'Show Less' : 'عرض أقل')
                : (language === 'en' ? 'Show More Projects' : 'عرض المزيد من المشاريع')
              }
            </span>
            <ExternalLink className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAllImages ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
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
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioGallery;