import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { language, isRTL, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'overview', label: language === 'en' ? 'Overview' : 'نظرة عامة' },
    { id: 'why-us', label: language === 'en' ? 'Why Us' : 'لماذا نحن' },
    { id: 'values', label: language === 'en' ? 'Core Values' : 'القيم الأساسية' },
    { id: 'services', label: language === 'en' ? 'Services' : 'الخدمات' },
    { id: 'our-work', label: language === 'en' ? 'Our Work' : 'أعمالنا' },
    { id: 'process', label: language === 'en' ? 'Process' : 'المنهجية' },
    { id: 'portfolio', label: language === 'en' ? 'Portfolio' : 'الأعمال' },
    { id: 'contact', label: language === 'en' ? 'Contact Us' : 'اتصل بنا' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <Logo 
              size="md" 
              className={`transition-all duration-300 ${
                isScrolled ? 'text-luxury-dark' : 'text-white'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isRTL ? 'font-cairo' : 'font-playfair'
                } ${
                  isScrolled 
                    ? 'text-luxury-dark hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="hidden lg:flex items-center">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className={`${
                isScrolled 
                  ? 'border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-white' 
                  : 'border-white/30 text-black bg-white hover:bg-white/90'
              } transition-all duration-300`}
            >
              {language === 'en' ? 'عربي' : 'English'}
            </Button>
          </div>

          {/* Mobile Language Toggle and Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Language Toggle Button */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className={`${
                isScrolled 
                  ? 'border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-white' 
                  : 'border-white/30 text-black bg-white hover:bg-white/90'
              } transition-all duration-300`}
            >
              {language === 'en' ? 'عربي' : 'English'}
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                console.log('Mobile menu clicked, current state:', isOpen);
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-md transition-colors duration-200 hover:bg-white/10"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-luxury-dark' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-luxury-dark' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-[600px] opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 bg-white/10 backdrop-blur-md rounded-2xl mt-4 border border-white/20">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isScrolled 
                    ? 'text-luxury-dark hover:bg-luxury-dark/10 hover:text-primary' 
                    : 'text-white hover:bg-white/20 hover:text-luxury-gold'
                } ${isRTL ? 'font-cairo' : 'font-poppins'}`}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
