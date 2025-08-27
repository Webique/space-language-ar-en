import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CompanyOverview from '@/components/CompanyOverview';
import WhyUs from '@/components/WhyUs';
import VisionMission from '@/components/VisionMission';
import HistorySection from '@/components/HistorySection';
import CoreValues from '@/components/CoreValues';
import Services from '@/components/Services';
import ProcessTimeline from '@/components/ProcessTimeline';
import TeamSection from '@/components/TeamSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import ContactSection from '@/components/ContactSection';
import Logo from '@/components/Logo';

const Index = () => {
  const { language, isRTL } = useLanguage();
  const footerContent = content.footer[language];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="overview">
          <CompanyOverview />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="vision">
          <VisionMission />
        </section>
        <section id="history">
          <HistorySection />
        </section>
        <section id="values">
          <CoreValues />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <ProcessTimeline />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="portfolio">
          <PortfolioGallery />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-luxury-dark text-white py-12 border-t border-luxury-gold/20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-2">
              <Logo size="lg" className="text-luxury-gold" />
            </div>
            <p className={`text-white/80 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
              {footerContent.tagline}
            </p>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-primary mx-auto mb-6"></div>
          
          <p className={`text-white/60 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {footerContent.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
