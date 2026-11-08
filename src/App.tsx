import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { AlertBar } from './components/AlertBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExcellenceSection } from './components/ExcellenceSection';
import { InstitutionalSection } from './components/InstitutionalSection';
import { QuickLinksSection } from './components/QuickLinksSection';
import { AcademicsSection } from './components/AcademicsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { ResearchSection } from './components/ResearchSection';
import { StudentWorkSection } from './components/StudentWorkSection';
import { AlumniSection } from './components/AlumniSection';
import { FAQAndFinalCTA } from './components/FAQAndFinalCTA';
import { VideoDrillSection } from './components/VideoDrillSection';
import { StudentStaffHub } from './components/StudentStaffHub';
import { FooterSection } from './components/FooterSection';
import { ChatBot } from './components/ChatBot';
import { SearchModal } from './components/SearchModal';
import { AdmissionsModal } from './components/AdmissionsModal';

export default function App() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      setAdmissionModalOpen(true);
    }
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Site header and admissions hero */}
      <header>
        <AlertBar onRegisterClick={scrollToForm} />
        <Navbar 
          onApplyClick={scrollToForm} 
          onOpenSearch={() => setSearchModalOpen(true)}
        />
        <HeroSection formRef={formRef} />
      </header>

      {/* Main school sections */}
      <main>
        <QuickLinksSection />

        {/* Section A: Together We Have Achieved Excellence */}
        <ExcellenceSection />

        <InstitutionalSection />

        <AcademicsSection onOpenAdmission={() => setAdmissionModalOpen(true)} />

        {/* School background and academic highlights */}
        <WhyUsSection />

        {/* Section C: Student Life Bento Grid */}
        <StudentLifeSection />

        {/* Section D: Live 2,000-Student Synchronized Drill & Choral Media */}
        <div id="media-drill">
          <VideoDrillSection />
        </div>

        {/* Section E: Research & Academic Spotlight */}
        <ResearchSection />

        {/* Section F: Student Work & Innovation Gallery */}
        <StudentWorkSection />

        {/* Section G: 2,000-Student Daily Digital Operations Hub */}
        <StudentStaffHub />

        {/* Section H: Alumni & Family Speaks Testimonials */}
        <AlumniSection />

        <FAQAndFinalCTA
          onOpenAdmission={() => setAdmissionModalOpen(true)}
          onNavigate={handleNavigate}
        />
      </main>

      {/* School contact and footer */}
      <FooterSection />

      {/* 4. Interactive Live Help Desk & Back To Top */}
      <ChatBot />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Modal Admission Workflow */}
      <AdmissionsModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />
    </div>
  );
}
