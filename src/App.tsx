import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { AlertBar } from './components/AlertBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickLinksSection } from './components/QuickLinksSection';
import { ExcellenceSection } from './components/ExcellenceSection';
import { InstitutionalSection } from './components/InstitutionalSection';
import { AcademicsSection } from './components/AcademicsSection';
import { TopperFelicitation } from './components/TopperFelicitation';
import { FacultyDirectory } from './components/FacultyDirectory';
import { WhyUsSection } from './components/WhyUsSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { VideoDrillSection } from './components/VideoDrillSection';
import { ResearchSection } from './components/ResearchSection';
import { StudentWorkSection } from './components/StudentWorkSection';
import { StudentStaffHub } from './components/StudentStaffHub';
import { AlumniSection } from './components/AlumniSection';
import { FAQAndFinalCTA } from './components/FAQAndFinalCTA';
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
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
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

        {/* Section B: Who We Are, Mission, Vision, Founder & Principal */}
        <InstitutionalSection />

        {/* Section C: Academic Levels & Class XI–XII Streams */}
        <AcademicsSection onOpenAdmission={() => setAdmissionModalOpen(true)} />

        {/* Section D: State Board Topper Felicitation */}
        <TopperFelicitation />

        {/* Section E: Why St. Michael's Umsning */}
        <WhyUsSection />

        {/* Section F: Student Life Bento Grid */}
        <StudentLifeSection />

        {/* Section G: Live 2,000-Student Synchronized Drill & Choral Media */}
        <div id="media-drill">
          <VideoDrillSection />
        </div>

        {/* Section H: Academic Spotlight & Labs */}
        <ResearchSection />

        {/* Section I: Faculty Directory */}
        <FacultyDirectory />

        {/* Section J: Student Work & Campus Gallery */}
        <StudentWorkSection />

        {/* Section K: 2,000-Student Daily Digital Operations Hub */}
        <StudentStaffHub />

        {/* Section L: Alumni & Scholar Testimonials */}
        <AlumniSection />

        {/* Section M: Frequently Asked Questions & Final CTA */}
        <FAQAndFinalCTA
          onOpenAdmission={() => setAdmissionModalOpen(true)}
          onNavigate={handleNavigate}
        />
      </main>

      {/* School contact and footer */}
      <FooterSection />

      {/* Interactive Live Help Desk & Back To Top */}
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
