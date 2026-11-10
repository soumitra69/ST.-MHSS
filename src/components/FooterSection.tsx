import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

const OFFICIAL_MAP_SHARE_URL = 'https://share.google/xohLhc6GWxPh6H3cc';
const OFFICIAL_MAP_EMBED_URL =
  "https://maps.google.com/maps?q=St.+Michael's+Higher+Secondary+School+Umsning+Meghalaya+793105&t=&z=15&ie=UTF8&iwloc=&output=embed";

const aboutAndLeadershipLinks = [
  { label: 'Who We Are (Estd. 1961)', href: '#about' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Our Vision', href: '#vision' },
  { label: "Founder's Message", href: '#founder-message' },
  { label: "Secretary & Vice Principal's Message", href: '#secretary-message' },
  { label: "Principal's Message", href: '#principal-message' },
  { label: 'Headmistress – Secondary Section', href: '#hm-secondary-message' },
  { label: 'Headmistress – LP Section', href: '#hm-lp-message' },
];

const academicsAndCampusLinks = [
  { label: 'Admissions 2026–27 Enquiry', href: '#apply-form' },
  { label: 'School Stages (Nursery – Class XII)', href: '#academics' },
  { label: 'Higher Secondary Streams (XI – XII)', href: '#streams' },
  { label: 'School Diary, Uniforms & Syllabus', href: '#school-handbook' },
  { label: 'MBOSE State Board Merit Honors', href: '#toppers' },
  { label: 'Campus Life & 4 Archangel Houses', href: '#campus-life' },
  { label: 'Campus Photo Gallery', href: '#gallery' },
  { label: 'Alumni & Parent Community', href: '#alumni' },
  { label: 'Frequently Asked Questions (FAQ)', href: '#faq' },
];

export const FooterSection: React.FC = () => {
  return (
    <footer id="footer" className="school-footer scroll-mt-20">
      {/* Main 4-Column Classic School Footer */}
      <div className="school-footer-main">
        <div className="container">
          <div className="school-footer-grid">
            {/* Column 1: School Crest, Identity, Motto & Quick Connect */}
            <div className="school-footer-col school-footer-brand-col">
              <div>
                <a href="#about" className="school-footer-brand-link group">
                  <img
                    src={SCHOOL_INFO.logo}
                    alt="St. Michael's Higher Secondary School Crest"
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                    className="school-footer-crest"
                  />
                  <div>
                    <span className="school-footer-eyebrow">
                      Catholic Mission of Umsning • Estd. {SCHOOL_INFO.established}
                    </span>
                    <h2 className="school-footer-title">
                      ST. MICHAEL&apos;S HIGHER
                      <br />
                      SECONDARY SCHOOL
                    </h2>
                    <p className="school-footer-subtitle">
                      Umsning, Ri Bhoi District, Meghalaya – 793105
                    </p>
                  </div>
                </a>

                <p className="school-footer-desc">
                  Founded in 1961 by{' '}
                  <strong className="text-white">Rev. Fr. Michel Balawan, SDB</strong> under the
                  Archdiocese of Shillong. Dedicated to the overall intellectual, moral, spiritual,
                  and cultural formation of every learner from Nursery to Class XII.
                </p>

                {/* Motto & Official Codes */}
                <div className="school-footer-motto-box">
                  <div className="school-footer-motto-line">
                    <i className="fas fa-award text-amber-300" aria-hidden="true"></i>
                    <span>
                      Motto: &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;
                      {SCHOOL_INFO.mottoKhasi}&rdquo; ({SCHOOL_INFO.mottoMeaning})
                    </span>
                  </div>
                  <div className="school-footer-code-badges">
                    <span>MBOSE Code: {SCHOOL_INFO.schoolCode}</span>
                    <span>UDISE+: 17050200108</span>
                  </div>
                </div>
              </div>

              {/* Social & Direct Action Icons */}
              <div className="school-footer-social-block">
                <p className="school-footer-social-label">Connect With The School Office</p>
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

            {/* Column 2: About & Leadership */}
            <div className="school-footer-col">
              <h3 className="school-footer-heading">About &amp; Leadership</h3>
              <ul className="school-footer-list">
                {aboutAndLeadershipLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="school-footer-link">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Academics & Quick Links */}
            <div className="school-footer-col">
              <h3 className="school-footer-heading">Academics &amp; Quick Links</h3>
              <ul className="school-footer-list">
                {academicsAndCampusLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="school-footer-link">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info, Timings & Campus Map */}
            <div className="school-footer-col school-footer-contact-col">
              <div>
                <h3 className="school-footer-heading">Contact &amp; School Hours</h3>

                <ul className="school-footer-contact-list">
                  <li>
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    <div>
                      <strong>Campus Address:</strong>
                      <span>Umsning, Ri Bhoi District, Meghalaya – 793105 (NH-6 Corridor)</span>
                    </div>
                  </li>

                  <li>
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                    <div>
                      <strong>Phone &amp; Helpline:</strong>
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
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    <div>
                      <strong>Official Email:</strong>
                      <span>
                        <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                      </span>
                    </div>
                  </li>

                  <li>
                    <i className="fas fa-clock" aria-hidden="true"></i>
                    <div>
                      <strong>School Timings (Mon – Fri):</strong>
                      <span>
                        Sec &amp; Hr. Sec: 8:45 AM – 3:00 PM
                        <br />
                        Primary Section: 8:45 AM – 2:00 PM
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Compact Embedded Campus Map */}
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

      {/* Bottom Copyright & Attribution Bar */}
      <div className="school-footer-bottom">
        <div className="container">
          <div className="school-footer-bottom-inner">
            <p className="school-footer-copy">
              &copy; {new Date().getFullYear()} St. Michael&apos;s Higher Secondary School, Umsning.
              All Rights Reserved.
            </p>
            <p className="school-footer-credit">
              <i className="fas fa-shield-alt text-amber-400" aria-hidden="true"></i>
              <span>
                Designed by <strong>Marak Technology</strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
