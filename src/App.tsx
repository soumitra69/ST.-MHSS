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
import { WhyUsSection } from './components/WhyUsSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { VideoDrillSection } from './components/VideoDrillSection';
import { ResearchSection } from './components/ResearchSection';
import { CampusSpacesAndEventsSection } from './components/CampusSpacesAndEventsSection';
import { StudentWorkSection } from './components/StudentWorkSection';
import { FAQAndFinalCTA } from './components/FAQAndFinalCTA';
import { SchoolAppSection } from './components/SchoolAppSection';
import { FooterSection } from './components/FooterSection';
import { ChatBot } from './components/ChatBot';
import { SearchModal } from './components/SearchModal';
import { AdmissionsModal } from './components/AdmissionsModal';

export default function App() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const smoothScrollToElement = (targetElement: HTMLElement) => {
    const headerEl = document.querySelector('.main-header') as HTMLElement | null;
    const headerOffset = headerEl ? headerEl.offsetHeight + 12 : 84;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 40,
    });

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(pct);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollProgress();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Intercept all in-page #anchor links for smooth, sticky-header-compensated scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHash = anchor.getAttribute('href');
      if (!rawHash || rawHash === '#') return;

      const sectionId = rawHash.slice(1);
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        e.preventDefault();
        smoothScrollToElement(sectionEl);
        window.history.pushState(null, '', rawHash);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
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
    setAdmissionModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      smoothScrollToElement(element);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Smooth Top Scroll Progress Indicator */}
      <div className="scroll-progress-track" aria-hidden="true">
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      {/* Site header and admissions hero */}
      <header>
        <AlertBar onRegisterClick={scrollToForm} />
        <Navbar
          onApplyClick={scrollToForm}
          onOpenSearch={() => setSearchModalOpen(true)}
        />
        <HeroSection
          formRef={formRef}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
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

        {/* Section H2: Modern Learning Spaces, Latest Events & Prospectus Callback (stxaviersumoid.com parity) */}
        <CampusSpacesAndEventsSection />

        {/* Section J: Student Work & Campus Gallery */}
        <StudentWorkSection />

        {/* Section M: Frequently Asked Questions & Final CTA */}
        <FAQAndFinalCTA
          onOpenAdmission={() => setAdmissionModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Section N: Official School Mobile App Coming Soon (Top of Footer) */}
        <SchoolAppSection />
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
