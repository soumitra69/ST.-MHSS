import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

const OFFICIAL_MAP_SHARE_URL = 'https://share.google/xohLhc6GWxPh6H3cc';
const OFFICIAL_MAP_EMBED_URL =
  "https://maps.google.com/maps?q=St.+Michael's+Higher+Secondary+School+Umsning+Meghalaya+793105&t=&z=15&ie=UTF8&iwloc=&output=embed";

interface FooterLinkItem {
  label: string;
  href: string;
  page?: AppPageId;
  sectionId?: string;
  highlight?: boolean;
  badge?: string;
}

const aboutAndGovernanceLinks: FooterLinkItem[] = [
  { label: 'Who We Are & School Profile', href: '#page-who-we-are', page: 'who-we-are' },
  { label: 'Our Mission, Vision & Objectives', href: '#page-mission-vision', page: 'mission-vision' },
  { label: "Founder's Profile (Fr. Balawan)", href: '#page-founder', page: 'founder' },
  { label: 'Leadership & Principal Messages', href: '#page-leadership', page: 'leadership' },
  { label: 'Teaching & Non-Teaching Staff', href: '#page-staff-directory', page: 'staff-directory' },
  { label: 'Student Enrolment & Statistics', href: '#page-student-stats', page: 'student-stats' },
  { label: 'Contact Us & Campus Visit', href: '#page-contact', page: 'contact' },
  { label: 'Michaelian Alumni & Community', href: '#page-alumni', page: 'alumni' },
];

const academicsAndAdmissionsLinks: FooterLinkItem[] = [
  { label: 'Admission Procedure & Eligibility', href: '#page-admissions-fees', page: 'admissions-fees' },
  {
    label: 'Official Fee Structure (2026–27)',
    href: '#page-fee-structure',
    page: 'fee-structure-page',
  },
  { label: 'Curriculum, Streams & Syllabus', href: '#page-academic-syllabus', page: 'academic-syllabus' },
  { label: 'Academic Calendar & Holiday List', href: '#page-academic-calendar', page: 'academic-calendar' },
  { label: "Girls' Hostel & Residential Care", href: '#page-girls-hostel', page: 'girls-hostel' },
  { label: 'Scholarships & Student Welfare', href: '#page-scholarships', page: 'scholarships' },
  { label: 'School Bus & Transport', href: '#page-transportation', page: 'transportation' },
];

const accreditationHighlights = [
  {
    icon: 'fas fa-landmark',
    label: 'ESTABLISHED',
    value: '1961 • 65+ Years of Excellence',
  },
  {
    icon: 'fas fa-certificate',
    label: 'BOARD AFFILIATION',
    value: `MBOSE (Code: ${SCHOOL_INFO.schoolCode})`,
  },
  {
    icon: 'fas fa-id-card',
    label: 'UDISE+ REG. CODE',
    value: '17050200108 • Ri Bhoi',
  },
  {
    icon: 'fas fa-graduation-cap',
    label: 'ACADEMIC WINGS',
    value: 'Nursery – XII (Arts • Sci • Comm)',
  },
];

interface FooterSectionProps {
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onNavigatePage,
  onOpenAdmission,
}) => {
  const handleFooterLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: FooterLinkItem
  ) => {
    if (onNavigatePage && item.page) {
      e.preventDefault();
      onNavigatePage(item.page, item.sectionId);
    }
  };

  const handleLogoHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigatePage) {
      e.preventDefault();
      onNavigatePage('home');
    }
  };

  return (
    <footer id="footer" className="school-footer scroll-mt-20">
      {/* Tier 1: Top Executive Institutional Credentials & Admissions Action Bar */}
      <div className="school-footer-top-cta">
        <div className="container">
          <div className="school-footer-cta-bar">
            <div className="school-footer-cta-copy">
              <span className="school-footer-cta-kicker">
                <i className="fas fa-shield-alt mr-1.5 text-amber-300" aria-hidden="true"></i>
                Catholic Mission of Umsning • Archdiocese of Shillong
              </span>
              <h2 className="school-footer-cta-heading">
                Admissions &amp; Academic Enquiries Open for Session 2026–27
              </h2>
              <p className="school-footer-cta-sub">
                Co-educational English-medium schooling from Nursery to Class XII (Arts, Science
                &amp; Commerce) with disciplined pastoral care.
              </p>
            </div>

            <div className="school-footer-cta-actions">
              {onOpenAdmission ? (
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="school-footer-btn-primary btn-shine"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true"></i>
                  <span>Apply for Admission</span>
                </button>
              ) : (
                <a
                  href="#page-admissions-fees"
                  onClick={(e) =>
                    handleFooterLinkClick(e, {
                      label: 'Admissions',
                      href: '#page-admissions-fees',
                      page: 'admissions-fees',
                    })
                  }
                  className="school-footer-btn-primary btn-shine"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true"></i>
                  <span>Apply for Admission</span>
                </a>
              )}

              <a
                href="#page-notices"
                onClick={(e) =>
                  handleFooterLinkClick(e, {
                    label: 'Official Notices',
                    href: '#page-notices',
                    page: 'notices',
                  })
                }
                className="school-footer-btn-secondary"
              >
                <i className="fas fa-bullhorn text-amber-300" aria-hidden="true"></i>
                <span>Official Notices</span>
              </a>
            </div>
          </div>

          {/* 4-Pillar Institutional Credentials Strip */}
          <div className="school-footer-ribbon-grid">
            {accreditationHighlights.map((item) => (
              <div key={item.label} className="school-footer-ribbon-item">
                <span className="school-footer-ribbon-icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </span>
                <div className="min-w-0">
                  <span className="school-footer-ribbon-label">{item.label}</span>
                  <strong className="school-footer-ribbon-value">{item.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tier 2: Main 4-Column Executive School Footer */}
      <div className="school-footer-main">
        <div className="container">
          <div className="school-footer-grid">
            {/* Column 1: School Crest, Heritage, Motto & Direct Connect */}
            <div className="school-footer-col school-footer-brand-col">
              <div>
                <a
                  href="#home"
                  onClick={handleLogoHomeClick}
                  className="school-footer-brand-link group"
                >
                  <div className="school-footer-crest-wrap">
                    <img
                      src={SCHOOL_INFO.logo}
                      alt="St. Michael's Higher Secondary School Crest"
                      width="72"
                      height="72"
                      loading="lazy"
                      decoding="async"
                      className="school-footer-crest"
                    />
                  </div>
                  <div>
                    <span className="school-footer-eyebrow">
                      Estd. {SCHOOL_INFO.established} • Ri Bhoi, Meghalaya
                    </span>
                    <h3 className="school-footer-title">
                      ST. MICHAEL&apos;S HIGHER
                      <br />
                      SECONDARY SCHOOL
                    </h3>
                    <p className="school-footer-subtitle">
                      Umsning, Meghalaya – 793105
                    </p>
                  </div>
                </a>

                <p className="school-footer-desc">
                  Founded in 1961 by{' '}
                  <strong className="text-white">Fr. Michael Balawan</strong> under the
                  Catholic Mission of Umsning, Archdiocese of Shillong. Committed to academic
                  excellence, moral integrity, and the overall development of every child.
                </p>

                {/* Motto & Official Codes Box */}
                <div className="school-footer-motto-box">
                  <div className="school-footer-motto-line">
                    <i className="fas fa-award text-amber-300" aria-hidden="true"></i>
                    <span>
                      Motto: &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;
                      {SCHOOL_INFO.mottoKhasi}&rdquo; ({SCHOOL_INFO.mottoMeaning})
                    </span>
                  </div>
                  <div className="school-footer-code-badges">
                    <span>
                      <i
                        className="fas fa-check-circle mr-1.5 text-amber-300"
                        aria-hidden="true"
                      ></i>
                      MBOSE: {SCHOOL_INFO.schoolCode}
                    </span>
                    <span>
                      <i
                        className="fas fa-university mr-1.5 text-amber-300"
                        aria-hidden="true"
                      ></i>
                      UDISE+: 17050200108
                    </span>
                  </div>
                </div>

                {/* Key Campus Highlights Card to fill vertical gap */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-2.5">
                    <div className="flex items-center gap-1.5 font-bold text-amber-400">
                      <i className="fas fa-shield-alt text-xs" aria-hidden="true"></i>
                      <span>Affiliation</span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-slate-300 leading-tight">
                      MBOSE Meghalaya Board &amp; Catholic Mission
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-2.5">
                    <div className="flex items-center gap-1.5 font-bold text-amber-400">
                      <i className="fas fa-graduation-cap text-xs" aria-hidden="true"></i>
                      <span>Education</span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-slate-300 leading-tight">
                      Nursery to Class XII (Arts, Science, Commerce)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Secretariat Action Icons */}
              <div className="school-footer-social-block">
                <p className="school-footer-social-label">Direct Secretariat Desk</p>
                <div className="school-footer-social-row">
                  <a
                    href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                    className="school-footer-social-btn"
                    aria-label="Call School Office"
                    title="Call School Office"
                  >
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  </a>
                  <a
                    href={`https://wa.me/${SCHOOL_INFO.phoneMobile.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="school-footer-social-btn whatsapp"
                    aria-label="WhatsApp Help Desk"
                    title="WhatsApp Help Desk"
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  </a>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="school-footer-social-btn"
                    aria-label="Email School Secretariat"
                    title="Email School Secretariat"
                  >
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  </a>
                  <a
                    href={OFFICIAL_MAP_SHARE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="school-footer-social-btn"
                    aria-label="Google Maps Location"
                    title="Google Maps Location"
                  >
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: About & Administration */}
            <div className="school-footer-col school-footer-links-col">
              <div>
                <h3 className="school-footer-heading">About &amp; Governance</h3>
                <ul className="school-footer-list">
                  {aboutAndGovernanceLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => handleFooterLinkClick(e, item)}
                        className="school-footer-link"
                      >
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="school-footer-col-card">
                <div className="school-footer-col-card-title">
                  <i className="fas fa-clock text-amber-300" aria-hidden="true"></i>
                  <span>Secretariat &amp; Fee Counter</span>
                </div>
                <p>Mon – Fri: 8:30 AM – 2:30 PM</p>
                <small>Closed on Saturdays, Sundays &amp; Public Holidays</small>
              </div>
            </div>

            {/* Column 3: Academics, Admissions & Campus */}
            <div className="school-footer-col school-footer-links-col">
              <div>
                <h3 className="school-footer-heading">Academics &amp; Services</h3>
                <ul className="school-footer-list">
                  {academicsAndAdmissionsLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => handleFooterLinkClick(e, item)}
                        className="school-footer-link"
                      >
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="school-footer-col-card">
                <div className="school-footer-col-card-title">
                  <i className="fas fa-layer-group text-amber-300" aria-hidden="true"></i>
                  <span>Quick Campus Portals</span>
                </div>
                <div className="school-footer-portal-pills">
                  <a
                    href="#page-notices"
                    onClick={(e) =>
                      handleFooterLinkClick(e, {
                        label: 'Notices',
                        href: '#page-notices',
                        page: 'notices',
                      })
                    }
                  >
                    <i className="fas fa-bullhorn" aria-hidden="true"></i>
                    Notices
                  </a>
                  <a
                    href="#page-events"
                    onClick={(e) =>
                      handleFooterLinkClick(e, {
                        label: 'Events',
                        href: '#page-events',
                        page: 'events',
                      })
                    }
                  >
                    <i className="fas fa-calendar-check" aria-hidden="true"></i>
                    Events
                  </a>
                  <a
                    href="#page-gallery"
                    onClick={(e) =>
                      handleFooterLinkClick(e, {
                        label: 'Gallery',
                        href: '#page-gallery',
                        page: 'gallery',
                      })
                    }
                  >
                    <i className="fas fa-images" aria-hidden="true"></i>
                    Gallery
                  </a>
                  <a
                    href="#page-girls-hostel"
                    onClick={(e) =>
                      handleFooterLinkClick(e, {
                        label: "Girls' Hostel",
                        href: '#page-girls-hostel',
                        page: 'girls-hostel',
                      })
                    }
                    className="border-amber-400/60 bg-amber-500/20 text-amber-300 font-bold"
                  >
                    <i className="fas fa-bed text-amber-300" aria-hidden="true"></i>
                    Hostel
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Official Contact, Bell Schedule & Live Google Map */}
            <div className="school-footer-col school-footer-contact-col">
              <div>
                <h3 className="school-footer-heading">Contact &amp; Campus Map</h3>

                <ul className="school-footer-contact-list">
                  <li>
                    <span className="school-footer-contact-icon">
                      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>Campus Address</strong>
                      <span>Umsning, Ri Bhoi District, Meghalaya – 793105</span>
                    </div>
                  </li>

                  <li>
                    <span className="school-footer-contact-icon">
                      <i className="fas fa-phone-alt" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>Secretariat Helpline</strong>
                      <span>
                        <a href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}>
                          {SCHOOL_INFO.phoneMobile}
                        </a>{' '}
                        /{' '}
                        <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                          {SCHOOL_INFO.phone}
                        </a>
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="school-footer-contact-icon">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>Official Email</strong>
                      <span>
                        <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                      </span>
                    </div>
                  </li>

                  <li>
                    <span className="school-footer-contact-icon">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>School Bell Timings (Mon – Fri)</strong>
                      <span>
                        Sec &amp; Hr. Sec: 8:45 AM – 3:00 PM • LP: 8:45 AM – 2:00 PM
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Embedded Campus Location Map */}
              <div className="school-footer-map-wrap">
                <div className="school-footer-map-box">
                  <iframe
                    src={OFFICIAL_MAP_EMBED_URL}
                    title="St. Michael's Higher Secondary School, Umsning Location Map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={OFFICIAL_MAP_SHARE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="school-footer-map-link"
                >
                  <i className="fas fa-directions" aria-hidden="true"></i>
                  <span>Get Directions on Google Maps</span>
                  <i className="fas fa-external-link-alt text-[10px]" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Executive Sub-Footer Copyright, Quick Links & Attribution */}
      <div className="school-footer-bottom">
        <div className="container">
          <div className="school-footer-bottom-inner">
            <p className="school-footer-copy">
              &copy; {new Date().getFullYear()} St. Michael&apos;s Higher Secondary School, Umsning.
              All Rights Reserved.
            </p>

            <div className="school-footer-bottom-links">
              <a
                href="#page-who-we-are"
                onClick={(e) =>
                  handleFooterLinkClick(e, {
                    label: 'About',
                    href: '#page-who-we-are',
                    page: 'who-we-are',
                  })
                }
              >
                School Profile
              </a>
              <span aria-hidden="true">•</span>
              <a
                href="#page-admissions-fees"
                onClick={(e) =>
                  handleFooterLinkClick(e, {
                    label: 'Admissions',
                    href: '#page-admissions-fees',
                    page: 'admissions-fees',
                  })
                }
              >
                Admissions &amp; Fees
              </a>
              <span aria-hidden="true">•</span>
              <a
                href="#page-academic-calendar"
                onClick={(e) =>
                  handleFooterLinkClick(e, {
                    label: 'Academic Calendar',
                    href: '#page-academic-calendar',
                    page: 'academic-calendar',
                  })
                }
              >
                Academic Calendar
              </a>
            </div>

            <div className="school-footer-credit-pill">
              <i className="fas fa-code text-amber-400" aria-hidden="true"></i>
              <span>
                Designed &amp; Developed By <strong>Marak Technologies Pvt. Ltd.</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
