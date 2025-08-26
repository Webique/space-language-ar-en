import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Linkedin, Mail, Star } from 'lucide-react';

const TeamSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const teamContent = content.team[language];
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Generate avatar placeholders with initials
  const generateAvatar = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-4xl font-bold">
        {initials}
      </div>
    );
  };

  return (
    <section className="py-24 bg-luxury-dark relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-primary-dark/50 to-luxury-dark"></div>
        <div className="absolute inset-0 opacity-20">
          {/* Spotlight Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-white mb-6 fade-in ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
            {teamContent.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-primary mx-auto slide-up delay-300"></div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamContent.members.map((member, index) => (
            <div
              key={index}
              className="relative group cursor-pointer fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Member Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-8 h-96 transition-all duration-700 group-hover:shadow-glow">
                
                {/* Spotlight Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-luxury-gold/20 via-transparent to-primary/20 opacity-0 transition-opacity duration-500 ${
                  hoveredMember === index ? 'opacity-100' : ''
                }`}></div>

                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-luxury-gold/50 transition-all duration-500 group-hover:border-luxury-gold group-hover:scale-110">
                    {generateAvatar(member.name)}
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center transition-all duration-500 group-hover:animate-pulse-glow">
                    <Star className="w-4 h-4 text-luxury-dark" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-4 relative z-10">
                  <h3 className={`text-2xl font-bold text-white transition-all duration-500 group-hover:text-luxury-gold ${isRTL ? 'font-cairo' : 'font-montserrat'}`}>
                    {member.name}
                  </h3>
                  
                  <p className={`text-lg text-white/80 transition-all duration-500 group-hover:text-white ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                    {member.role}
                  </p>
                  
                  {/* Social Links */}
                  <div className={`flex justify-center space-x-4 pt-4 transition-all duration-500 ${
                    hoveredMember === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-luxury-gold/20 transition-all duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-luxury-gold/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-luxury-gold/30 transition-all duration-500 group-hover:border-luxury-gold"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-luxury-gold/30 transition-all duration-500 group-hover:border-luxury-gold"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;