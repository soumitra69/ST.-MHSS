import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const secondaryLinks = [
  { label: 'NOTICES', href: '#apply-form', icon: 'fas fa-bullhorn' },
  { label: 'STATE HONORS', href: '#toppers', icon: 'fas fa-trophy' },
  { label: 'HR. SEC STREAMS', href: '#streams', icon: 'fas fa-graduation-cap' },
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
      { label: 'Our Vision', href: '#vision', icon: 'fas fa-eye' },
      { label: 'Founder’s Message (Fr. Michel Balawan)', href: '#founder-message', icon: 'fas fa-cross' },
      { label: 'Secretary & Vice Principal’s Message', href: '#secretary-message', icon: 'fas fa-user-shield' },
      { label: 'Principal’s Message', href: '#principal-message', icon: 'fas fa-user-tie' },
      { label: 'Headmistress – Secondary Section', href: '#hm-secondary-message', icon: 'fas fa-chalkboard-teacher' },
      { label: 'Headmistress – LP Section', href: '#hm-lp-message', icon: 'fas fa-child' },
    ],
  },
  {
    label: 'ADMISSION',
    href: '#apply-form',
    icon: 'fas fa-user-plus',
    hasDropdown: true,
    subItems: [
      { label: '2026–27 Admission Enquiry', href: '#apply-form', icon: 'fas fa-file-signature' },
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
];

interface NavbarProps {
  onApplyClick: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [studentDob, setStudentDob] = useState('');
  const [loginFeedback, setLoginFeedback] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleStudentLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim() || !studentDob.trim()) return;
    setLoginFeedback(
      `Verification initiated for Student ID "${studentId.trim().toUpperCase()}". Please contact the School Secretariat (${SCHOOL_INFO.phoneMobile}) for your 2026–27 portal PIN.`
    );
  };

  return (
    <div className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-nav">
            <a href="#about" className="logo-section" onClick={handleNavClick}>
              <div className="logo-placeholder">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="St. Michael's Higher Secondary School Crest"
                  width="64"
                  height="64"
                  decoding="async"
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
                      <i className={`${item.icon} mr-1.5 text-[11px] text-[#ea580c]`} aria-hidden="true"></i>
                      {item.label}
                    </a>
                  ))}
                  <a href="#why-us" className="umoid-box" title="Umsning Campus • MBOSE Affiliated">
                    <img
                      src={SCHOOL_INFO.logo}
                      alt=""
                      width="18"
                      height="18"
                      className="umoid-logo-badge"
                    />
                    <span>UMSNING • 1961</span>
                  </a>
                </div>
              </div>

              <nav className="primary-nav" aria-label="Primary Navigation">
                {primaryLinks.map((item) => (
                  <div key={item.label} className="nav-item-wrapper">
                    <a
                      href={item.href}
                      className="primary-nav-link"
                      onClick={handleNavClick}
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
                            onClick={handleNavClick}
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
                  className="student-login-btn"
                  onClick={() => {
                    setLoginFeedback('');
                    setLoginModalOpen(true);
                  }}
                  aria-label="Open Student Portal Login"
                  title="Student & Parent Portal Login"
                >
                  <i className="fas fa-user-graduate" aria-hidden="true"></i>
                  <span>STUDENT LOGIN</span>
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

            {/* Mobile Controls (Student Login + Hamburger Menu) */}
            <div className="mobile-header-actions">
              <button
                type="button"
                className="mobile-login-toggle"
                onClick={() => {
                  setLoginFeedback('');
                  setLoginModalOpen(true);
                }}
                aria-label="Student Login"
                title="Student Login"
              >
                <i className="fas fa-user-graduate" aria-hidden="true"></i>
                <span>Login</span>
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

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-primary-links">
            {primaryLinks.map((item) => {
              const isExpanded = expandedMobileGroup === item.label;
              return (
                <div key={item.label} className="mobile-nav-group">
                  <div className="mobile-nav-row">
                    <a
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={handleNavClick}
                    >
                      <span className="inline-flex items-center gap-2.5">
                        <i className={`${item.icon} text-[#0c4a8a] w-4 text-center`} aria-hidden="true"></i>
                        {item.label}
                      </span>
                      {!item.hasDropdown && <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>}
                    </a>
                    {item.hasDropdown && (
                      <button
                        type="button"
                        className="mobile-sub-toggle"
                        onClick={() =>
                          setExpandedMobileGroup(isExpanded ? null : item.label)
                        }
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isExpanded}
                      >
                        <i
                          className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}
                          aria-hidden="true"
                        ></i>
                      </button>
                    )}
                  </div>

                  {item.hasDropdown && isExpanded && (
                    <div className="mobile-sub-list">
                      {item.subItems?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="mobile-sub-item"
                          onClick={handleNavClick}
                        >
                          <i className={`${sub.icon} text-[#d97706] w-4 text-center`} aria-hidden="true"></i>
                          <span>{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mobile-secondary-links">
            <div className="mobile-sec-title">
              <i className="fas fa-compass mr-1.5 text-[#d97706]" aria-hidden="true"></i>
              Quick Campus Links
            </div>
            <div className="mobile-sec-grid">
              {secondaryLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={`${item.icon} mr-1.5 text-[#0c4a8a]`} aria-hidden="true"></i>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-cta-wrapper">
            <button
              type="button"
              className="student-login-btn mobile-student-login-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setLoginFeedback('');
                setLoginModalOpen(true);
              }}
            >
              <i className="fas fa-user-graduate mr-2" aria-hidden="true"></i>
              STUDENT &amp; PARENT LOGIN
            </button>
            <button
              type="button"
              className="apply-now-btn mobile-apply-btn btn-shine"
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
            >
              <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
              ADMISSION ENQUIRY 2026–27
            </button>
          </div>
        </div>
      </div>

      {/* Student & Parent Portal Login Modal */}
      {loginModalOpen && (
        <div
          className="student-login-backdrop"
          onClick={() => setLoginModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="student-login-title"
        >
          <div
            className="student-login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="student-login-header">
              <div className="student-login-brand">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="St. Michael's Crest"
                  width="46"
                  height="46"
                />
                <div>
                  <span className="student-login-kicker">
                    MBOSE CODE: {SCHOOL_INFO.schoolCode} • UMSNING
                  </span>
                  <h3 id="student-login-title">Student &amp; Parent Portal Login</h3>
                </div>
              </div>
              <button
                type="button"
                className="student-login-close"
                onClick={() => setLoginModalOpen(false)}
                aria-label="Close Student Login Modal"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>

            <form onSubmit={handleStudentLoginSubmit} className="student-login-form">
              <div className="student-login-field">
                <label htmlFor="student-portal-id">
                  <i className="fas fa-id-card mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Student ID / MBOSE Roll Number
                </label>
                <input
                  id="student-portal-id"
                  type="text"
                  required
                  placeholder="e.g. SMHSS-2026-1042"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>

              <div className="student-login-field">
                <label htmlFor="student-portal-dob">
                  <i className="fas fa-lock mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Date of Birth / Portal PIN
                </label>
                <input
                  id="student-portal-dob"
                  type="password"
                  required
                  placeholder="Enter Date of Birth (DDMMYYYY) or PIN"
                  value={studentDob}
                  onChange={(e) => setStudentDob(e.target.value)}
                />
              </div>

              {loginFeedback && (
                <div className="student-login-alert">
                  <i className="fas fa-info-circle mr-1.5" aria-hidden="true"></i>
                  <span>{loginFeedback}</span>
                </div>
              )}

              <button type="submit" className="student-login-submit">
                <i className="fas fa-sign-in-alt mr-2" aria-hidden="true"></i>
                Sign In to Student Portal
              </button>

              <div className="student-login-footer">
                <span>
                  Need login credentials? Visit the School Secretariat or call{' '}
                  <strong>{SCHOOL_INFO.phoneMobile}</strong>.
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
