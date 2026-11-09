import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const secondaryLinks = [
  { label: 'NOTICES', href: '#hub' },
  { label: 'STATE HONORS', href: '#toppers' },
  { label: 'HR. SEC STREAMS', href: '#academics' },
  { label: 'STUDENT HUB', href: '#hub' },
  { label: 'HOUSES', href: '#hub' },
  { label: 'DRILL & CHOIR', href: '#media-drill' },
  { label: 'FACULTY', href: '#faculty' },
  { label: 'CONTACT', href: '#footer' },
];

const primaryLinks = [
  {
    label: 'ABOUT',
    href: '#about',
    hasDropdown: true,
    subItems: [
      { label: 'Who We Are (Estd. 1961)', href: '#about' },
      { label: 'Our Mission', href: '#mission' },
      { label: 'Our Vision (Excelsior)', href: '#vision' },
      { label: 'Founder’s Heritage', href: '#founder-message' },
      { label: 'Principal’s Desk', href: '#principal-message' },
    ],
  },
  {
    label: 'ADMISSION',
    href: '#apply-form',
    hasDropdown: true,
    subItems: [
      { label: '2026–27 Admission Enquiry', href: '#apply-form' },
      { label: 'Fee Structure & Calculator', href: '#hub' },
      { label: 'School Bus Routes (NH-6)', href: '#hub' },
      { label: 'Frequently Asked Questions', href: '#faq' },
    ],
  },
  {
    label: 'ACADEMICS',
    href: '#academics',
    hasDropdown: true,
    subItems: [
      { label: 'School Levels (Nursery – XII)', href: '#academics' },
      { label: 'Higher Secondary Streams', href: '#streams' },
      { label: 'Academic & Fieldwork Spotlight', href: '#research' },
      { label: 'Faculty & Mentors Directory', href: '#faculty' },
    ],
  },
  { label: 'CAMPUS LIFE', href: '#campus-life', hasDropdown: false },
  { label: 'HONORS', href: '#toppers', hasDropdown: false },
  { label: 'GALLERY', href: '#student-work', hasDropdown: false },
  { label: 'STUDENT HUB', href: '#hub', hasDropdown: false },
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
                      {item.label}
                    </a>
                  ))}
                  <a href="#why-us" className="umoid-box" title="Umsning Campus • MBOSE Affiliated">
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
                  ADMISSIONS
                </button>
              </nav>
            </div>

            {/* Mobile Controls */}
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
                <span></span>
                <span></span>
                <span></span>
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
                <span>{item.label}</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            ))}
          </div>

          <div className="mobile-secondary-links">
            <div className="mobile-sec-title">Quick Campus Portals</div>
            <div className="mobile-sec-grid">
              {secondaryLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
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
              ADMISSION ENQUIRY 2026–27
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
