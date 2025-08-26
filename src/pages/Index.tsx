import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import HeroSection from '@/components/HeroSection';
import CompanyOverview from '@/components/CompanyOverview';
import VisionMission from '@/components/VisionMission';
import HistorySection from '@/components/HistorySection';
import CoreValues from '@/components/CoreValues';
import Services from '@/components/Services';
import ProcessTimeline from '@/components/ProcessTimeline';
import TeamSection from '@/components/TeamSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <LanguageToggle />

        <main>
          <HeroSection />
          <CompanyOverview />
          <VisionMission />
          <HistorySection />
          <CoreValues />
          <Services />
          <ProcessTimeline />
          <TeamSection />
          <PortfolioGallery />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-luxury-dark text-white py-12 border-t border-luxury-gold/20">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-luxury-gold mb-2 font-montserrat">
                Space Language
              </h3>
              <p className="text-white/80 font-poppins">
                Intelligent, Elegant, Sustainable Interior Design
              </p>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-primary mx-auto mb-6"></div>
            
            <p className="text-white/60 font-poppins">
              © 2024 Space Language. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
