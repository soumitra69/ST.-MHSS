import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const admissionsLinks = [
  { label: 'Online Admission Enquiry 2026–27', href: '#apply-form', icon: 'fas fa-file-signature' },
  { label: 'School Levels & Stream Pathways', href: '#academics', icon: 'fas fa-layer-group' },
  { label: 'Fee Structure & Calculator', href: '#hub', icon: 'fas fa-calculator' },
  { label: 'SSLC ₹20,000 Merit Scholarship', href: '#toppers', icon: 'fas fa-award' },
  { label: 'Frequently Asked Questions (FAQ)', href: '#faq', icon: 'fas fa-question-circle' },
];

const academicsLinks = [
  { label: 'Early Years & Primary (KG – V)', href: '#academics', icon: 'fas fa-child' },
  { label: 'Upper Primary & SSLC (VI – X)', href: '#academics', icon: 'fas fa-book-reader' },
  { label: 'Higher Secondary Science (XI – XII)', href: '#streams', icon: 'fas fa-atom' },
  { label: 'Higher Secondary Arts & Commerce', href: '#streams', icon: 'fas fa-landmark' },
  { label: 'Academic Spotlight & Science Labs', href: '#research', icon: 'fas fa-flask' },
];

const campusPortalLinks = [
  { label: 'Student & Staff Operations Hub', href: '#hub', icon: 'fas fa-th-large' },
  { label: '4-House Brotherhood & Drill', href: '#campus-life', icon: 'fas fa-shield-alt' },
  { label: 'Campus Photo Gallery & Archive', href: '#gallery', icon: 'fas fa-images' },
  { label: 'Synchronized Drill & Choir Video', href: '#media-drill', icon: 'fas fa-film' },
  { label: 'Alumni & State Topper Speaks', href: '#alumni', icon: 'fas fa-user-graduate' },
  {
    label: 'Official Live Portal (GitHub Pages)',
    href: 'https://soumitra69.github.io/ST.-MHSS/',
    icon: 'fas fa-external-link-alt',
  },
];

export const FooterSection: React.FC = () => {
  return (
    <div id="footer">
      <footer className="university-footer premium-school-footer">
        <div className="container">
          {/* Top Executive Accreditation & Quick Connect Ribbon */}
          <div className="footer-top-ribbon" data-aos="fade-up" data-aos-duration="750">
            <div className="footer-ribbon-brand">
              <div className="footer-ribbon-crest">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="St. Michael's Higher Secondary School Crest"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="footer-ribbon-text">
                <div className="footer-ribbon-badges">
                  <span className="footer-pill-gold">
                    <i className="fas fa-certificate" aria-hidden="true"></i> MBOSE CODE:{' '}
                    {SCHOOL_INFO.schoolCode}
                  </span>
                  <span className="footer-pill-blue">
                    <i className="fas fa-landmark" aria-hidden="true"></i> ESTD.{' '}
                    {SCHOOL_INFO.established} • DIOCESE OF SHILLONG
                  </span>
                </div>
                <h2>ST. MICHAEL&apos;S HIGHER SECONDARY SCHOOL, UMSNING</h2>
                <p>
                  Motto: <strong>{SCHOOL_INFO.mottoLatin}</strong> &amp;{' '}
                  <strong>{SCHOOL_INFO.mottoKhasi}</strong> ({SCHOOL_INFO.mottoMeaning}) • Nursery to
                  Class XII
                </p>
              </div>
            </div>

            <div className="footer-ribbon-actions">
              <a
                href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                className="footer-cta-btn footer-cta-call"
              >
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <span>Call Office</span>
              </a>
              <a
                href={`https://wa.me/${SCHOOL_INFO.phoneMobile.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="footer-cta-btn footer-cta-whatsapp"
              >
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                <span>WhatsApp Desk</span>
              </a>
              <a href="#apply-form" className="footer-cta-btn footer-cta-apply">
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                <span>Admissions 2026–27</span>
              </a>
            </div>
          </div>

          {/* Main 4-Column Executive Footer Grid */}
          <div className="footer-content-grid" data-aos="fade-up" data-aos-delay="100">
            {/* Column 1: Campus Secretariat & Location */}
            <div className="footer-column identity-section">
              <h3>
                <i className="fas fa-map-marked-alt text-amber-400" aria-hidden="true"></i>
                <span>CAMPUS SECRETARIAT</span>
              </h3>

              <div className="footer-contact-card">
                <div className="footer-contact-row">
                  <span className="footer-contact-icon">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </span>
                  <div>
                    <strong>Campus Address</strong>
                    <p>{SCHOOL_INFO.address}</p>
                  </div>
                </div>

                <div className="footer-contact-row">
                  <span className="footer-contact-icon">
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  </span>
                  <div>
                    <strong>Admission &amp; Office Helpline</strong>
                    <p>
                      <a href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}>
                        {SCHOOL_INFO.phoneMobile}
                      </a>{' '}
                      /{' '}
                      <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                        {SCHOOL_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="footer-contact-row">
                  <span className="footer-contact-icon">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  </span>
                  <div>
                    <strong>Official Email</strong>
                    <p>
                      <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="footer-social-strip">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.phoneMobile.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-pill"
                  aria-label="WhatsApp Help Desk"
                  title="WhatsApp Help Desk"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </a>
                <a
                  href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                  className="footer-social-pill"
                  aria-label="Call School Secretariat"
                  title="Call School Secretariat"
                >
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                </a>
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="footer-social-pill"
                  aria-label="Email School Office"
                  title="Email School Office"
                >
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-pill"
                  aria-label="Open Google Maps"
                  title="Open Google Maps"
                >
                  <i className="fas fa-location-arrow" aria-hidden="true"></i>
                </a>
                <a
                  href="https://soumitra69.github.io/ST.-MHSS/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-pill"
                  aria-label="Official Website"
                  title="Official Website"
                >
                  <i className="fas fa-globe" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Admissions & Parent Desk */}
            <div className="footer-column">
              <h3>
                <i className="fas fa-user-plus text-amber-400" aria-hidden="true"></i>
                <span>ADMISSIONS &amp; PARENTS</span>
              </h3>
              <ul className="footer-menu">
                {admissionsLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>
                      <i className={`${item.icon} footer-link-icon`} aria-hidden="true"></i>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Academic Wing */}
            <div className="footer-column">
              <h3>
                <i className="fas fa-graduation-cap text-amber-400" aria-hidden="true"></i>
                <span>ACADEMIC PATHWAYS</span>
              </h3>
              <ul className="footer-menu">
                {academicsLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>
                      <i className={`${item.icon} footer-link-icon`} aria-hidden="true"></i>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Campus Portals & Office Hours */}
            <div className="footer-column">
              <h3>
                <i className="fas fa-compass text-amber-400" aria-hidden="true"></i>
                <span>CAMPUS &amp; PORTALS</span>
              </h3>
              <ul className="footer-menu">
                {campusPortalLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <i className={`${item.icon} footer-link-icon`} aria-hidden="true"></i>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="footer-hours-box">
                <div className="footer-hours-title">
                  <i className="fas fa-clock text-amber-300" aria-hidden="true"></i>
                  <span>Secretariat Visiting Hours</span>
                </div>
                <p>{SCHOOL_INFO.officeHours}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-map-btn"
                >
                  <i className="fas fa-directions" aria-hidden="true"></i>
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Legal & Accreditation Bar */}
      <div className="footer-base">
        <div className="container footer-base-inner">
          <p className="copyright-text">
            <i className="fas fa-shield-alt text-amber-400 mr-1.5" aria-hidden="true"></i>
            Copyright © 1961–{new Date().getFullYear()} <strong>St. Michael&apos;s Higher Secondary School, Umsning</strong> • All Rights Reserved.
          </p>
          <div className="footer-base-links">
            <a href="#about">About S.M.H.S.S.</a>
            <span>•</span>
            <a href="#hub">Circulars &amp; Fees</a>
            <span>•</span>
            <a href="#toppers">MBOSE Merit</a>
            <span>•</span>
            <a href="#apply-form">Apply 2026–27</a>
          </div>
        </div>
      </div>
    </div>
  );
};
