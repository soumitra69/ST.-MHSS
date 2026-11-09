import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const admissionsLinks = [
  { label: 'Online Admission Enquiry', href: '#apply-form' },
  { label: 'School Levels & Class XI–XII Streams', href: '#academics' },
  { label: 'Fee Structure & Transit Calculator', href: '#hub' },
  { label: 'Frequently Asked Questions', href: '#faq' },
];

const academicsLinks = [
  { label: 'MBOSE Curriculum & Streams', href: '#academics' },
  { label: 'State Board Merit Toppers', href: '#toppers' },
  { label: 'Academic Faculty Directory', href: '#faculty' },
  { label: 'Academic Spotlight & Labs', href: '#research' },
];

const othersLinks = [
  { label: 'Student & Staff Operations Hub', href: '#hub' },
  { label: 'Campus Life & Synchronized Drill', href: '#campus-life' },
  { label: 'School Gallery & Student Work', href: '#student-work' },
  { label: 'Alumni & Scholar Testimonials', href: '#alumni' },
  { label: 'Live Portal (GitHub Pages)', href: 'https://soumitra69.github.io/ST.-MHSS/' },
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
                  alt="St. Michael's Higher Secondary School crest"
                  className="rounded-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="university-identity">
                <h2>ST. MICHAEL&apos;S HIGHER SECONDARY SCHOOL</h2>
                <p>Estd. 1961 • Umsning, Ri Bhoi District, Meghalaya</p>
              </div>
            </div>

            <div className="location-details">
              <h4>—— Locate Our Campus</h4>
              <div className="address-block">
                <h3>ST. MICHAEL&apos;S HIGHER SECONDARY SCHOOL</h3>
                <p>{SCHOOL_INFO.address}</p>
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
                <p>
                  <i className="fas fa-globe"></i>{' '}
                  <a href="https://soumitra69.github.io/ST.-MHSS/" target="_blank" rel="noreferrer">
                    https://soumitra69.github.io/ST.-MHSS/
                  </a>
                </p>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SCHOOL_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="navigation-button"
              >
                <i className="fas fa-arrow-right"></i>
                <span>Get Directions on Google Maps</span>
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
            <h3>CAMPUS &amp; PORTAL</h3>
            <ul className="footer-menu">
              {othersLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer-base">
        <div className="base-content">
          <p className="copyright-text">
            Copyright © 1961–{new Date().getFullYear()} All Rights Reserved by St. Michael&apos;s Higher Secondary School, Umsning • MBOSE School Code: {SCHOOL_INFO.schoolCode}
          </p>
        </div>
      </div>
    </div>
  );
};
