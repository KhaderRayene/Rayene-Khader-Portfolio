import React from 'react';
import { LanguageProvider } from '../components/portfolio/LanguageContext';
import Navigation from '../components/portfolio/Navigation';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ImpactSection from '../components/portfolio/ImpactSection';
import MindsetSection from '../components/portfolio/MindsetSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ImpactSection />
        <MindsetSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}