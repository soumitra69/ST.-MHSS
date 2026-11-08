import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const admissionsLinks = [
  { label: 'Admission enquiry', href: '#apply-form' },
  { label: 'School levels and streams', href: '#academics' },
  { label: 'Frequently asked questions', href: '#faq' },
  { label: 'Contact the school', href: '#footer' },
];

const academicsLinks = [
  { label: 'School levels and MBOSE', href: '#academics' },
  { label: 'Academic spotlight', href: '#research' },
  { label: 'Student and family notices', href: '#hub' },
  { label: 'Student work and gallery', href: '#student-work' },
];

const othersLinks = [
  { label: 'Notice board and student hub', href: '#hub' },
  { label: 'Campus life', href: '#campus-life' },
  { label: 'School gallery', href: '#student-work' },
  { label: 'Frequently asked questions', href: '#faq' },
];

export const FooterSection: React.FC = () => {
  return (
    <div id="footer">
      <footer className="university-footer">
        <div className="footer-content-grid">
          {/* Identity and Location Section */}
          <div className="footer-column identity-section" data-aos="fade-right">
            <div className="university-logo">
              <div className="logo-symbol">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="Don Bosco College Tura logo"
                  className="rounded-full object-contain"
                />
              </div>
              <div className="university-identity">
                <h2>DON BOSCO COLLEGE TURA</h2>
                <p>Faith, learning and service • Meghalaya, India</p>
              </div>
            </div>

            <div className="location-details">
              <h4>—— Locate Us</h4>
              <div className="address-block">
                <h3>DON BOSCO COLLEGE TURA</h3>
                <p>
                  {SCHOOL_INFO.address}
                </p>
              </div>

              <div className="contact-details">
                <p>
                  <i className="fas fa-phone-alt"></i>{' '}
                  <a href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}>
                    {SCHOOL_INFO.phoneMobile}
                  </a>{' '}
                  /{' '}
                  <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                    {SCHOOL_INFO.phone}
                  </a>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{' '}
                  <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                </p>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="navigation-button"
              >
                <i className="fas fa-arrow-right"></i>
                <span>Get Direction</span>
              </a>
            </div>
          </div>

          {/* Admissions Section */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
            <h3>ADMISSIONS</h3>
            <ul className="footer-menu">
              {admissionsLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Section */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
            <h3>ACADEMICS</h3>
            <ul className="footer-menu">
              {academicsLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Section */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
            <h3>OTHERS &amp; PORTAL</h3>
            <ul className="footer-menu">
              {othersLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </footer>

      <div className="footer-base">
        <div className="base-content">
          <p className="copyright-text">
            Copyrights © 1985-{new Date().getFullYear()} All Rights Reserved by Don Bosco College Tura
          </p>
        </div>
      </div>
    </div>
  );
};
