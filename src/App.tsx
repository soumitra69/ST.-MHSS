import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { AlertBar } from './components/AlertBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickLinksSection } from './components/QuickLinksSection';
import { ExcellenceSection } from './components/ExcellenceSection';
import { InstitutionalSection, type AppPageId } from './components/InstitutionalSection';
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
import { WhoWeArePage } from './components/WhoWeArePage';
import { GalleryPage } from './components/GalleryPage';
import { MissionVisionPage } from './components/MissionVisionPage';
import { NoticePage } from './components/NoticePage';
import { EventPage } from './components/EventPage';
import { AcademicCalendarPage } from './components/AcademicCalendarPage';
import { FounderPage } from './components/FounderPage';
import {
  LeadershipMessagesPage,
  StudentStatisticsPage,
  StaffDirectoryPage,
  AcademicSyllabusPage,
  ResultsAchievementsPage,
} from './components/DocumentationPages';
import {
  AdmissionsAndFeesPage,
  TransportationPage,
  ScholarshipsWelfarePage,
  AlumniCommunityPage,
} from './components/CampusServicesPages';
import { ContactPage } from './components/ContactPage';

const PAGE_HASH_MAP: Record<string, AppPageId> = {
  '#page-who-we-are': 'who-we-are',
  '#page-gallery': 'gallery',
  '#page-mission-vision': 'mission-vision',
  '#page-notices': 'notices',
  '#page-events': 'events',
  '#page-academic-calendar': 'academic-calendar',
  '#page-founder': 'founder',
  '#page-leadership': 'leadership',
  '#page-student-stats': 'student-stats',
  '#page-staff-directory': 'staff-directory',
  '#page-academic-syllabus': 'academic-syllabus',
  '#page-results-achievements': 'results-achievements',
  '#page-admissions-fees': 'admissions-fees',
  '#page-transportation': 'transportation',
  '#page-scholarships': 'scholarships',
  '#page-alumni': 'alumni',
  '#page-contact': 'contact',
  '#home': 'home',
};

const getPageFromHash = (hash: string): AppPageId => {
  return PAGE_HASH_MAP[hash] || 'home';
};

export default function App() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePage, setActivePage] = useState<AppPageId>(() =>
    typeof window !== 'undefined' ? getPageFromHash(window.location.hash) : 'home'
  );

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

  // Sync browser back/forward hash navigation with activePage
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (PAGE_HASH_MAP[hash]) {
        setActivePage(PAGE_HASH_MAP[hash]);
      } else if (!hash || hash === '#') {
        setActivePage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigatePage = (page: AppPageId, sectionId?: string) => {
    if (page === 'home') {
      setActivePage('home');
      const targetHash = sectionId ? `#${sectionId}` : '#home';
      window.history.pushState(null, '', targetHash);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            smoothScrollToElement(el);
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    setActivePage(page);
    window.history.pushState(null, '', `#page-${page}`);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          smoothScrollToElement(el);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 90);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Intercept all in-page #anchor links for smooth, sticky-header-compensated scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHash = anchor.getAttribute('href');
      if (!rawHash || rawHash === '#') return;

      if (PAGE_HASH_MAP[rawHash]) {
        e.preventDefault();
        handleNavigatePage(PAGE_HASH_MAP[rawHash]);
        return;
      }

      const sectionId = rawHash.slice(1);
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        e.preventDefault();
        smoothScrollToElement(sectionEl);
        window.history.pushState(null, '', rawHash);
      } else if (activePage !== 'home') {
        e.preventDefault();
        handleNavigatePage('home', sectionId);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [activePage]);

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
    if (activePage !== 'home') {
      handleNavigatePage('home', sectionId);
      return;
    }
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
          activePage={activePage}
          onNavigatePage={handleNavigatePage}
        />
        {activePage === 'home' && (
          <HeroSection
            formRef={formRef}
            onOpenAdmission={() => setAdmissionModalOpen(true)}
            onNavigatePage={handleNavigatePage}
          />
        )}
      </header>

      {/* Main school sections or Dedicated Sub-Pages */}
      {activePage === 'who-we-are' ? (
        <WhoWeArePage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
      ) : activePage === 'gallery' ? (
        <GalleryPage onBack={() => handleNavigatePage('home')} />
      ) : activePage === 'mission-vision' ? (
        <MissionVisionPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
      ) : activePage === 'notices' ? (
        <NoticePage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
      ) : activePage === 'events' ? (
        <EventPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'academic-calendar' ? (
        <AcademicCalendarPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
      ) : activePage === 'founder' ? (
        <FounderPage onBack={() => handleNavigatePage('home')} />
      ) : activePage === 'leadership' ? (
        <LeadershipMessagesPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
      ) : activePage === 'student-stats' ? (
        <StudentStatisticsPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'staff-directory' ? (
        <StaffDirectoryPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'academic-syllabus' ? (
        <AcademicSyllabusPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'results-achievements' ? (
        <ResultsAchievementsPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'admissions-fees' ? (
        <AdmissionsAndFeesPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
      ) : activePage === 'transportation' ? (
        <TransportationPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'scholarships' ? (
        <ScholarshipsWelfarePage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'alumni' ? (
        <AlumniCommunityPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
        />
      ) : activePage === 'contact' ? (
        <ContactPage
          onBack={() => handleNavigatePage('home')}
          onNavigatePage={handleNavigatePage}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />
      ) : (
        <main>
          <QuickLinksSection onNavigatePage={handleNavigatePage} />

          {/* Section A: Together We Have Achieved Excellence */}
          <ExcellenceSection onNavigatePage={handleNavigatePage} />

          {/* Section B: Who We Are, Mission, Vision, Founder & Principal */}
          <InstitutionalSection onNavigatePage={handleNavigatePage} />

          {/* Section C: Academic Levels & Class XI–XII Streams */}
          <AcademicsSection
            onOpenAdmission={() => setAdmissionModalOpen(true)}
            onNavigatePage={handleNavigatePage}
          />

          {/* Section D: State Board Topper Felicitation */}
          <TopperFelicitation onNavigatePage={handleNavigatePage} />

          {/* Section E: Why St. Michael's Umsning */}
          <WhyUsSection onNavigatePage={handleNavigatePage} />

          {/* Section F: Student Life Bento Grid */}
          <StudentLifeSection />

          {/* Section G: Live 2,000-Student Synchronized Drill & Choral Media */}
          <div id="media-drill">
            <VideoDrillSection onNavigatePage={handleNavigatePage} />
          </div>

          {/* Section H: Academic Spotlight & Labs */}
          <ResearchSection onNavigatePage={handleNavigatePage} />

          {/* Section H2: Modern Learning Spaces, Latest Events & Prospectus Callback (stxaviersumoid.com parity) */}
          <CampusSpacesAndEventsSection onNavigatePage={handleNavigatePage} />

          {/* Section J: Student Work & Campus Gallery */}
          <StudentWorkSection onNavigatePage={handleNavigatePage} />

          {/* Section M: Frequently Asked Questions & Final CTA */}
          <FAQAndFinalCTA
            onOpenAdmission={() => setAdmissionModalOpen(true)}
            onNavigate={handleNavigate}
            onNavigatePage={handleNavigatePage}
          />

          {/* Section N: Official School Mobile App Coming Soon (Top of Footer) */}
          <SchoolAppSection />
        </main>
      )}

      {/* School contact and footer */}
      <FooterSection
        onNavigatePage={handleNavigatePage}
        onOpenAdmission={() => setAdmissionModalOpen(true)}
      />

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
