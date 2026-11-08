import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const secondaryLinks = [
  { label: 'NOTICES', href: '#hub' },
  { label: 'HAPPENINGS', href: '#student-work' },
  { label: 'HR.SEC', href: '#why-us' },
  { label: 'STUDENT HUB', href: '#hub' },
  { label: 'HOUSES', href: '#hub' },
  { label: 'DRILL VIDEO', href: '#media-drill' },
  { label: 'FACULTY', href: '#why-us' },
  { label: 'CONTACT', href: '#footer' },
];

const primaryLinks = [
  {
    label: 'ABOUT',
    href: '#about',
    hasDropdown: true,
    subItems: [
      { label: 'Our Mission', href: '#mission' },
      { label: 'Our Vision', href: '#vision' },
      { label: 'Founder’s Message', href: '#founder-message' },
      { label: 'Principal’s Desk', href: '#principal-message' },
    ],
  },
  {
    label: 'ADMISSION',
    href: '#apply-form',
    hasDropdown: true,
    subItems: [
      { label: 'Admission enquiry', href: '#apply-form' },
      { label: 'Academic pathways', href: '#academics' },
      { label: 'Contact the school', href: '#footer' },
    ],
  },
  {
    label: 'ACADEMICS',
    href: '#academics',
    hasDropdown: true,
    subItems: [
      { label: 'School levels and streams', href: '#academics' },
      { label: 'Academic spotlight', href: '#research' },
      { label: 'Notice board', href: '#hub' },
    ],
  },
  { label: 'INFRASTRUCTURE', href: '#campus-life', hasDropdown: false },
  { label: 'CAMPUS LIFE', href: '#campus-life', hasDropdown: false },
  { label: 'HONORS', href: '#student-work', hasDropdown: false },
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
                  alt="Don Bosco College Tura logo"
                  className="rounded-full object-contain"
                />
              </div>
              <div className="university-name">
                <h1>DON BOSCO COLLEGE TURA</h1>
                <p>West Garo Hills, Meghalaya, India • Estd. 1985</p>
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
                  <div className="umoid-box">UMSNING</div>
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
                      {item.hasDropdown && <i className="fas fa-chevron-down"></i>}
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
                  aria-label="Toggle Search"
                >
                  <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'}`}></i>
                  <span>Search</span>
                </button>

                <button
                  type="button"
                  className="apply-now-btn btn-shine"
                  onClick={onApplyClick}
                >
                  APPLY NOW
                </button>
              </nav>
            </div>

            {/* Mobile Controls */}
            <div className="mobile-header-actions">
              <button
                type="button"
                className="mobile-search-toggle"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                aria-controls="mobile-search-form"
                aria-expanded={searchOpen}
              >
                <i className={`fas ${searchOpen ? 'fa-times' : 'fa-search'}`}></i>
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
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search programs, admissions, circulars, campus life, faculty..."
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
                <i className="fas fa-arrow-right"></i>
              </a>
            ))}
          </div>

          <div className="mobile-secondary-links">
            <div className="mobile-sec-title">Quick Operational Links</div>
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
              ADMISSION ENQUIRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
