import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const leadershipAndAboutLinks = [
  { label: 'Who We Are (Founded 1961)', href: '#about', icon: 'fas fa-school' },
  { label: 'Aim & 7 Core Objectives', href: '#mission', icon: 'fas fa-bullseye' },
  { label: 'Secretary & Vice Principal’s Message', href: '#secretary-message', icon: 'fas fa-user-shield' },
  { label: 'Principal’s Message', href: '#principal-message', icon: 'fas fa-user-tie' },
  { label: 'Headmistress – Secondary Section', href: '#hm-secondary-message', icon: 'fas fa-chalkboard-teacher' },
  { label: 'Headmistress – LP Section', href: '#hm-lp-message', icon: 'fas fa-child' },
];

const academicsAndAdmissionsLinks = [
  { label: '2026–27 Online Admission Enquiry', href: '#apply-form', icon: 'fas fa-file-signature' },
  { label: 'LP & Primary Section (Nursery – V)', href: '#academics', icon: 'fas fa-seedling' },
  { label: 'Secondary Section (Classes VI – X)', href: '#academics', icon: 'fas fa-book-reader' },
  { label: 'Higher Secondary Science (XI – XII)', href: '#streams', icon: 'fas fa-atom' },
  { label: 'Higher Secondary Arts & Commerce', href: '#streams', icon: 'fas fa-landmark' },
  { label: 'Frequently Asked Questions (FAQ)', href: '#faq', icon: 'fas fa-question-circle' },
];

const campusQuickPortals = [
  { label: '4 Archangel Houses & Sports', href: '#campus-life', icon: 'fas fa-shield-alt' },
  { label: 'State Merit Topper Honors', href: '#toppers', icon: 'fas fa-trophy' },
  { label: 'Synchronized Drill & Choir', href: '#media-drill', icon: 'fas fa-music' },
  { label: 'Campus Photo Gallery', href: '#gallery', icon: 'fas fa-images' },
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
                    <i className="fas fa-cross" aria-hidden="true"></i> ESTD.{' '}
                    {SCHOOL_INFO.established} • CATHOLIC MISSION OF UMSNING
                  </span>
                  <span className="footer-pill-emerald">
                    <i className="fas fa-award" aria-hidden="true"></i> ARCHDIOCESE OF SHILLONG
                  </span>
                </div>
                <h2>ST. MICHAEL&apos;S HIGHER SECONDARY SCHOOL, UMSNING</h2>
                <p>
                  Founded in 1961 by <strong>Rev. Fr. Michel Balawan, SDB</strong> • Motto:{' '}
                  <strong>{SCHOOL_INFO.mottoLatin}</strong> &amp;{' '}
                  <strong>{SCHOOL_INFO.mottoKhasi}</strong> ({SCHOOL_INFO.mottoMeaning})
                </p>
              </div>
            </div>

            <div className="footer-ribbon-actions">
              <a
                href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                className="footer-cta-btn footer-cta-call"
              >
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <span>Call Secretariat</span>
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

          {/* 4-Card Balanced Executive Footer Grid */}
          <div className="footer-content-grid" data-aos="fade-up" data-aos-delay="100">
            {/* Column 1: Campus Secretariat & Location */}
            <div className="footer-column footer-panel-card footer-panel-gold">
              <div className="footer-panel-top">
                <h3>
                  <span className="footer-col-icon">
                    <i className="fas fa-map-marked-alt" aria-hidden="true"></i>
                  </span>
                  <span>CAMPUS SECRETARIAT</span>
                </h3>

                <div className="footer-contact-card">
                  <div className="footer-contact-row">
                    <span className="footer-contact-icon">
                      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>Campus Location (PIN - 793105)</strong>
                      <p>
                        Umsning, Ri Bhoi District, Meghalaya (Between Shillong &amp; Nongpoh along
                        NH-6 Corridor)
                      </p>
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
                      <strong>Official Email Desk</strong>
                      <p>
                        <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-panel-bottom">
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
            </div>

            {/* Column 2: About & Leadership Messages */}
            <div className="footer-column footer-panel-card footer-panel-blue">
              <div className="footer-panel-top">
                <h3>
                  <span className="footer-col-icon">
                    <i className="fas fa-landmark" aria-hidden="true"></i>
                  </span>
                  <span>LEADERSHIP &amp; HERITAGE</span>
                </h3>
                <ul className="footer-menu">
                  {leadershipAndAboutLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>
                        <span className="footer-link-left">
                          <i className={`${item.icon} footer-link-icon`} aria-hidden="true"></i>
                          <span>{item.label}</span>
                        </span>
                        <i className="fas fa-chevron-right footer-link-arrow" aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-panel-bottom">
                <div className="footer-mini-badge-box">
                  <i className="fas fa-torch text-amber-300" aria-hidden="true"></i>
                  <div>
                    <strong>Proudly Called &ldquo;Michaelians&rdquo;</strong>
                    <span>Aim: Overall Development of the Child</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Academic Wings & Admissions */}
            <div className="footer-column footer-panel-card footer-panel-orange">
              <div className="footer-panel-top">
                <h3>
                  <span className="footer-col-icon">
                    <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                  </span>
                  <span>ACADEMICS &amp; ADMISSIONS</span>
                </h3>
                <ul className="footer-menu">
                  {academicsAndAdmissionsLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>
                        <span className="footer-link-left">
                          <i className={`${item.icon} footer-link-icon`} aria-hidden="true"></i>
                          <span>{item.label}</span>
                        </span>
                        <i className="fas fa-chevron-right footer-link-arrow" aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-panel-bottom">
                <div className="footer-mini-badge-box">
                  <i className="fas fa-book-open text-amber-300" aria-hidden="true"></i>
                  <div>
                    <strong>Nursery to Class XII (MBOSE)</strong>
                    <span>Arts, Science &amp; Commerce • English Medium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Official School Diary Hours & Campus Portals */}
            <div className="footer-column footer-panel-card footer-panel-emerald">
              <div className="footer-panel-top">
                <h3>
                  <span className="footer-col-icon">
                    <i className="fas fa-clock" aria-hidden="true"></i>
                  </span>
                  <span>SCHOOL &amp; OFFICE HOURS</span>
                </h3>

                <div className="footer-diary-schedule">
                  <div className="footer-schedule-item">
                    <span className="footer-schedule-label">
                      <i className="fas fa-user-graduate text-amber-300" aria-hidden="true"></i>
                      Secondary &amp; Hr. Sec (VI–XII)
                    </span>
                    <strong>Mon – Fri: 8:45 AM – 3:00 PM</strong>
                  </div>
                  <div className="footer-schedule-item">
                    <span className="footer-schedule-label">
                      <i className="fas fa-child text-sky-300" aria-hidden="true"></i>
                      Primary Section
                    </span>
                    <strong>Mon – Fri: 8:45 AM – 2:00 PM</strong>
                  </div>
                  <div className="footer-schedule-item">
                    <span className="footer-schedule-label">
                      <i className="fas fa-briefcase text-emerald-300" aria-hidden="true"></i>
                      Office Hours (Mon – Fri)
                    </span>
                    <strong>8:45–11:55 AM &amp; 12:35–3:00 PM</strong>
                    <small>Closed on Saturday, Sunday &amp; Public Holidays</small>
                  </div>
                </div>

                <div className="footer-compact-pills">
                  {campusQuickPortals.map((item) => (
                    <a key={item.label} href={item.href} className="footer-quick-chip">
                      <i className={item.icon} aria-hidden="true"></i>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-panel-bottom">
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
            Copyright © 1961–{new Date().getFullYear()}{' '}
            <strong>St. Michael&apos;s Higher Secondary School, Umsning</strong> • Catholic Mission
            of Umsning, Archdiocese of Shillong.
          </p>
          <div className="footer-base-links">
            <a href="#about">About Us</a>
            <span>•</span>
            <a href="#principal-message">Principal&apos;s Desk</a>
            <span>•</span>
            <a href="#academics">Academics</a>
            <span>•</span>
            <a href="#apply-form">Admissions 2026–27</a>
          </div>
        </div>
      </div>
    </div>
  );
};
