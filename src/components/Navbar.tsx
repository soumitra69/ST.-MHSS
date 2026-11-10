import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const secondaryLinks = [
  { label: 'NOTICES', href: '#hub', icon: 'fas fa-bullhorn' },
  { label: 'STATE HONORS', href: '#toppers', icon: 'fas fa-trophy' },
  { label: 'HR. SEC STREAMS', href: '#academics', icon: 'fas fa-graduation-cap' },
  { label: 'STUDENT HUB', href: '#hub', icon: 'fas fa-th-large' },
  { label: 'HOUSES', href: '#hub', icon: 'fas fa-shield-alt' },
  { label: 'DRILL & CHOIR', href: '#media-drill', icon: 'fas fa-music' },
  { label: 'CONTACT', href: '#footer', icon: 'fas fa-phone-alt' },
];

const primaryLinks = [
  {
    label: 'ABOUT',
    href: '#about',
    icon: 'fas fa-landmark',
    hasDropdown: true,
    subItems: [
      { label: 'Who We Are (Estd. 1961)', href: '#about', icon: 'fas fa-school' },
      { label: 'Our Mission', href: '#mission', icon: 'fas fa-bullseye' },
      { label: 'Our Vision (Excelsior)', href: '#vision', icon: 'fas fa-eye' },
      { label: 'Principal’s Message', href: '#principal-message', icon: 'fas fa-user-tie' },
    ],
  },
  {
    label: 'ADMISSION',
    href: '#apply-form',
    icon: 'fas fa-user-plus',
    hasDropdown: true,
    subItems: [
      { label: '2026–27 Admission Enquiry', href: '#apply-form', icon: 'fas fa-file-signature' },
      { label: 'Fee Structure & Calculator', href: '#hub', icon: 'fas fa-calculator' },
      { label: 'Frequently Asked Questions', href: '#faq', icon: 'fas fa-question-circle' },
    ],
  },
  {
    label: 'ACADEMICS',
    href: '#academics',
    icon: 'fas fa-book-open',
    hasDropdown: true,
    subItems: [
      { label: 'School Levels (Nursery – XII)', href: '#academics', icon: 'fas fa-layer-group' },
      { label: 'Higher Secondary Streams', href: '#streams', icon: 'fas fa-microscope' },
      { label: 'Academic & Fieldwork Spotlight', href: '#research', icon: 'fas fa-compass' },
    ],
  },
  { label: 'CAMPUS LIFE', href: '#campus-life', icon: 'fas fa-futbol', hasDropdown: false },
  { label: 'HONORS', href: '#toppers', icon: 'fas fa-medal', hasDropdown: false },
  { label: 'GALLERY', href: '#gallery', icon: 'fas fa-images', hasDropdown: false },
  { label: 'STUDENT HUB', href: '#hub', icon: 'fas fa-laptop-house', hasDropdown: false },
];

interface NavbarProps {
  onApplyClick: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('ABOUT');
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setActiveNav(label);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const target = document.getElementById('hub') || document.getElementById('research');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-nav">
            <a href="#" className="logo-section" onClick={() => setActiveNav('ABOUT')}>
              <div className="logo-placeholder">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="St. Michael's Higher Secondary School Crest"
                  width="60"
                  height="60"
                  decoding="async"
                  className="rounded-full object-contain shadow-xs"
                />
              </div>
              <div className="university-name">
                <h1>ST. MICHAEL&apos;S HR. SEC. SCHOOL</h1>
                <p>Umsning, Ri Bhoi District, Meghalaya • Estd. 1961</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="primary-secondery-nav desktop-only">
              <div className="secondary-nav">
                <div className="secondary-nav-content">
                  {secondaryLinks.map((item) => (
                    <a key={item.label} href={item.href} className="sec-nav-link">
                      <i className={`${item.icon} mr-1 text-[10px] text-[#ea580c]`} aria-hidden="true"></i>
                      {item.label}
                    </a>
                  ))}
                  <a href="#why-us" className="umoid-box" title="Umsning Campus • MBOSE Affiliated">
                    <i className="fas fa-certificate mr-1" aria-hidden="true"></i>
                    UMSNING • 1961
                  </a>
                </div>
              </div>

              <nav className="primary-nav" aria-label="Primary Navigation">
                {primaryLinks.map((item) => (
                  <div key={item.label} className="nav-item-wrapper">
                    <a
                      href={item.href}
                      className={`primary-nav-link ${activeNav === item.label ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.label)}
                    >
                      {item.label}
                      {item.hasDropdown && <i className="fas fa-chevron-down" aria-hidden="true"></i>}
                    </a>

                    {item.hasDropdown && (
                      <div className="dropdown-menu">
                        {item.subItems?.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="dropdown-item"
                            onClick={() => handleNavClick(item.label)}
                          >
                            <i className={`${sub.icon} mr-2 text-[#1d4ed8]`} aria-hidden="true"></i>
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  className="search-btn"
                  onClick={() => {
                    if (onOpenSearch) onOpenSearch();
                    else setSearchOpen(!searchOpen);
                  }}
                  aria-label="Open Global Search (Ctrl+K)"
                  title="Search notices, streams, faculty & routes (Ctrl+K)"
                >
                  <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'}`} aria-hidden="true"></i>
                  <span>Search</span>
                </button>

                <button
                  type="button"
                  className="apply-now-btn btn-shine"
                  onClick={onApplyClick}
                >
                  <i className="fas fa-paper-plane mr-1.5" aria-hidden="true"></i>
                  ADMISSIONS
                </button>
              </nav>
            </div>

            {/* Mobile Controls (Font Awesome Search & Hamburger Icons) */}
            <div className="mobile-header-actions">
              <button
                type="button"
                className="mobile-search-toggle"
                onClick={() => {
                  if (onOpenSearch) onOpenSearch();
                  else setSearchOpen(!searchOpen);
                }}
                aria-label="Search"
              >
                <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'}`} aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <i
                  className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-white text-base`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="container">
            <form id="mobile-search-form" onSubmit={handleSearchSubmit} className="search-form">
              <i className="fas fa-search search-icon" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Search streams, admissions, circulars, campus life, faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="search-submit-btn">
                <i className="fas fa-search mr-1.5" aria-hidden="true"></i>
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-primary-links">
            {primaryLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-nav-link ${activeNav === item.label ? 'active' : ''}`}
                onClick={() => handleNavClick(item.label)}
              >
                <span className="inline-flex items-center gap-2.5">
                  <i className={`${item.icon} text-[#1d4ed8] w-4 text-center`} aria-hidden="true"></i>
                  {item.label}
                </span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            ))}
          </div>

          <div className="mobile-secondary-links">
            <div className="mobile-sec-title">
              <i className="fas fa-compass mr-1.5 text-[#ea580c]" aria-hidden="true"></i>
              Quick Campus Portals
            </div>
            <div className="mobile-sec-grid">
              {secondaryLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={`${item.icon} mr-1.5 text-[#1d4ed8]`} aria-hidden="true"></i>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-cta-wrapper">
            <button
              type="button"
              className="apply-now-btn mobile-apply-btn btn-shine"
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
            >
              <i className="fas fa-user-graduate mr-2" aria-hidden="true"></i>
              ADMISSION ENQUIRY 2026–27
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
