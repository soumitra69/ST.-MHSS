import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TopBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenAdmission: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  onOpenAdmission
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm transition-shadow duration-300">
      {/* Top Banner Screen Width container indicator */}
      <div className="w-full bg-[#1B365D] text-white py-1 px-4 text-[11px] font-medium hidden sm:flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3 h-3 text-[#F59E0B]" />
              Umsning, Ri Bhoi District, Meghalaya 793105
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Phone className="w-3 h-3 text-[#F59E0B]" />
              +91 94361 02845 / 03638 264218
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#D97706] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              MBOSE Affiliated
            </span>
            <span className="text-slate-300 text-[11px]">
              Estd. 1961 • 2,000+ Students
            </span>
          </div>
        </div>
      </div>

      {/* Main Dual-Tier Navigation Bar matching user reference */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Left Brand Lockup (Logo + Title + Subtitle) */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 cursor-pointer shrink-0 select-none group pr-4"
          >
            <div className="relative">
              <img 
                src={SCHOOL_INFO.logo} 
                alt="St. Michael Crest" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full border-2 border-[#1B365D] shadow-sm transition-transform duration-300 group-hover:scale-105 bg-white p-0.5" 
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#D97706] rounded-full border-2 border-white" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-2xl font-extrabold text-[#1B365D] tracking-tight uppercase leading-none">
                  St. Michael's Umsning
                </span>
              </div>
              <span className="text-[11px] md:text-xs font-medium text-slate-500 leading-tight mt-1">
                Ri Bhoi District, Meghalaya, India • Estd. 1961
              </span>
            </div>
          </div>

          {/* Vertical Divider separating Brand and Navigation */}
          <div className="hidden xl:block h-14 w-px bg-slate-200 mx-2" />

          {/* Right Two-Tier Desktop Menu */}
          <div className="hidden lg:flex flex-col justify-center flex-1 pl-4">
            
            {/* Top Tier: Utility Links matching the reference */}
            <div className="flex items-center justify-end gap-5 py-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider border-b border-slate-100">
              <button 
                onClick={() => handleLinkClick('hub')}
                className="hover:text-[#1B365D] transition-colors"
              >
                Notices
              </button>
              <button 
                onClick={() => handleLinkClick('media')}
                className="hover:text-[#1B365D] transition-colors"
              >
                Happenings
              </button>
              <button 
                onClick={() => handleLinkClick('academics')}
                className="hover:text-[#1B365D] transition-colors"
              >
                Hr. Sec
              </button>
              <button 
                onClick={() => handleLinkClick('hub')}
                className="text-[#D97706] hover:text-[#B45309] font-extrabold transition-colors flex items-center gap-1"
              >
                <span>Student Hub</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
              </button>
              <button 
                onClick={() => handleLinkClick('hub')}
                className="hover:text-[#1B365D] transition-colors"
              >
                Houses
              </button>
              <button 
                onClick={() => handleLinkClick('faculty')}
                className="hover:text-[#1B365D] transition-colors"
              >
                Faculty
              </button>
              <button 
                onClick={() => handleLinkClick('contact')}
                className="hover:text-[#1B365D] transition-colors"
              >
                Contact
              </button>
              
              {/* Boxed Badge matching [ UMOID ] in reference */}
              <button
                onClick={() => handleLinkClick('about')}
                className="px-2.5 py-0.5 border border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white rounded text-[11px] font-extrabold tracking-wider transition-colors"
              >
                UMSNING
              </button>
            </div>

            {/* Bottom Tier: Primary Navigation with Dropdowns */}
            <div className="flex items-center justify-end gap-6 pt-2">
              
              {/* ABOUT Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleLinkClick('about')}
                  className={`flex items-center gap-1 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors py-2 ${
                    activeSection === 'about' ? 'text-[#D97706]' : 'text-[#1B365D] hover:text-[#D97706]'
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                    <button 
                      onClick={() => handleLinkClick('about')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors flex items-center justify-between"
                    >
                      <span>Institutional Heritage (1961)</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => handleLinkClick('about')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors flex items-center justify-between"
                    >
                      <span>Principal's Desk & Mission</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => handleLinkClick('toppers')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors flex items-center justify-between"
                    >
                      <span>Motto: Excelsior & Shaphrang</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  </div>
                )}
              </div>

              {/* ADMISSION Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('admission')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={onOpenAdmission}
                  className="flex items-center gap-1 text-xs md:text-sm font-bold uppercase tracking-wide text-[#1B365D] hover:text-[#D97706] transition-colors py-2"
                >
                  <span>Admission</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'admission' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'admission' && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                    <button 
                      onClick={onOpenAdmission}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors flex items-center justify-between"
                    >
                      <span>2026-27 Online Application</span>
                      <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded">Open</span>
                    </button>
                    <button 
                      onClick={() => handleLinkClick('hub')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors flex items-center justify-between"
                    >
                      <span>Fee Schedule & Calculator</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => handleLinkClick('faq')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors flex items-center justify-between"
                    >
                      <span>Eligibility & Document List</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  </div>
                )}
              </div>

              {/* ACADEMICS Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('academics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleLinkClick('academics')}
                  className={`flex items-center gap-1 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors py-2 ${
                    activeSection === 'academics' ? 'text-[#D97706]' : 'text-[#1B365D] hover:text-[#D97706]'
                  }`}
                >
                  <span>Academics</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'academics' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'academics' && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                    <button 
                      onClick={() => handleLinkClick('academics')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors"
                    >
                      Class XI-XII Science Stream
                    </button>
                    <button 
                      onClick={() => handleLinkClick('academics')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors"
                    >
                      Class XI-XII Arts Stream
                    </button>
                    <button 
                      onClick={() => handleLinkClick('academics')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors"
                    >
                      Class XI-XII Commerce Stream
                    </button>
                    <button 
                      onClick={() => handleLinkClick('hub')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B365D] transition-colors border-t border-slate-100 pt-2"
                    >
                      Daily Bell Routine & Timetable
                    </button>
                  </div>
                )}
              </div>

              {/* INFRASTRUCTURE */}
              <button 
                onClick={() => handleLinkClick('media')}
                className="text-xs md:text-sm font-bold uppercase tracking-wide text-[#1B365D] hover:text-[#D97706] transition-colors py-2"
              >
                Infrastructure
              </button>

              {/* CAMPUS LIFE */}
              <button 
                onClick={() => handleLinkClick('media')}
                className="text-xs md:text-sm font-bold uppercase tracking-wide text-[#1B365D] hover:text-[#D97706] transition-colors py-2"
              >
                Campus Life
              </button>

              {/* HONORS (State Toppers) */}
              <button 
                onClick={() => handleLinkClick('toppers')}
                className={`text-xs md:text-sm font-bold uppercase tracking-wide transition-colors py-2 ${
                  activeSection === 'toppers' ? 'text-[#D97706]' : 'text-[#1B365D] hover:text-[#D97706]'
                }`}
              >
                Honors
              </button>

              {/* Vertical divider */}
              <div className="h-5 w-px bg-slate-300" />

              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#1B365D] transition-colors px-2 py-1.5 rounded hover:bg-slate-100"
                title="Search circulars, marks, forms (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-slate-600" />
                <span className="uppercase tracking-wider">Search</span>
              </button>

              {/* Primary Call to Action Button: APPLY NOW */}
              <button
                onClick={onOpenAdmission}
                className="px-5 py-2.5 bg-[#1B365D] hover:bg-[#0F1D38] text-white text-xs font-extrabold uppercase tracking-wider rounded shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-[#1B365D]"
              >
                Apply Now
              </button>

            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-700 hover:text-[#1B365D] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenAdmission}
              className="px-3 py-1.5 bg-[#1B365D] text-white text-xs font-bold uppercase tracking-wider rounded"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#1B365D]" /> : <Menu className="w-6 h-6 text-[#1B365D]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 px-4 py-6 shadow-xl animate-in fade-in slide-in-from-top-3">
          
          {/* Quick utility strip on mobile */}
          <div className="flex flex-wrap gap-2 pb-4 mb-4 border-b border-slate-100">
            <button 
              onClick={() => handleLinkClick('hub')} 
              className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded font-semibold"
            >
              Notices
            </button>
            <button 
              onClick={() => handleLinkClick('hub')} 
              className="px-2.5 py-1 text-xs bg-amber-50 text-[#D97706] rounded font-semibold border border-amber-200"
            >
              Student Hub
            </button>
            <button 
              onClick={() => handleLinkClick('academics')} 
              className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded font-semibold"
            >
              Hr. Sec
            </button>
            <button 
              onClick={() => handleLinkClick('faculty')} 
              className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded font-semibold"
            >
              Faculty
            </button>
            <button 
              onClick={() => handleLinkClick('contact')} 
              className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded font-semibold"
            >
              Contact
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {/* Mobile About Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('about')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wider text-[#1B365D]"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'about' && (
                <div className="pl-4 py-2 space-y-2 border-l-2 border-[#1B365D]/30 ml-2">
                  <button onClick={() => handleLinkClick('about')} className="block text-xs text-slate-600 font-medium">History Since 1961</button>
                  <button onClick={() => handleLinkClick('about')} className="block text-xs text-slate-600 font-medium">Principal's Message</button>
                  <button onClick={() => handleLinkClick('toppers')} className="block text-xs text-slate-600 font-medium">Motto: Excelsior</button>
                </div>
              )}
            </div>

            {/* Mobile Admission Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('admission')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wider text-[#1B365D]"
              >
                <span>Admission</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'admission' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'admission' && (
                <div className="pl-4 py-2 space-y-2 border-l-2 border-[#1B365D]/30 ml-2">
                  <button onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }} className="block text-xs text-[#D97706] font-bold">2026-27 Online Application</button>
                  <button onClick={() => handleLinkClick('hub')} className="block text-xs text-slate-600 font-medium">Fee Structure & Calculator</button>
                  <button onClick={() => handleLinkClick('faq')} className="block text-xs text-slate-600 font-medium">Eligibility Criteria</button>
                </div>
              )}
            </div>

            {/* Mobile Academics Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('academics')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wider text-[#1B365D]"
              >
                <span>Academics</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'academics' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'academics' && (
                <div className="pl-4 py-2 space-y-2 border-l-2 border-[#1B365D]/30 ml-2">
                  <button onClick={() => handleLinkClick('academics')} className="block text-xs text-slate-600 font-medium">Class XI-XII Science</button>
                  <button onClick={() => handleLinkClick('academics')} className="block text-xs text-slate-600 font-medium">Class XI-XII Arts</button>
                  <button onClick={() => handleLinkClick('academics')} className="block text-xs text-slate-600 font-medium">Class XI-XII Commerce</button>
                  <button onClick={() => handleLinkClick('hub')} className="block text-xs text-slate-600 font-medium">Bell Routine & Timetable</button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleLinkClick('media')}
              className="text-left py-2 text-sm font-bold uppercase tracking-wider text-[#1B365D]"
            >
              Infrastructure & Transit
            </button>

            <button 
              onClick={() => handleLinkClick('media')}
              className="text-left py-2 text-sm font-bold uppercase tracking-wider text-[#1B365D]"
            >
              Campus Life & Drill
            </button>

            <button 
              onClick={() => handleLinkClick('toppers')}
              className="text-left py-2 text-sm font-bold uppercase tracking-wider text-[#1B365D]"
            >
              State Honors & Felicitations
            </button>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-3 bg-[#1B365D] text-white font-extrabold text-xs uppercase tracking-wider rounded shadow-md flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
              <span>Apply Now (Admission 2026)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLinkClick('hub');
              }}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-[#1B365D] font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#D97706]" />
              <span>Student & Staff Portal</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
