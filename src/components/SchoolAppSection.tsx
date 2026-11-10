import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SCHOOL_INFO } from '../data/schoolData';

const appFeatures = [
  {
    icon: 'fas fa-user-check',
    title: 'Live Attendance Tracker',
    desc: 'Instant morning assembly & period-wise attendance updates for parents.',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Digital School Diary',
    desc: 'Daily homework, class assignments, and direct teacher remarks.',
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'MBOSE Exam & Results',
    desc: 'Unit test timetables, selection exam routines & merit scorecards.',
  },
  {
    icon: 'fas fa-bell',
    title: 'Instant Campus Circulars',
    desc: 'Real-time push alerts from the Principal & Secretariat office.',
  },
];

export const SchoolAppSection: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState<'google' | 'apple' | null>(null);

  return (
    <section id="school-app" className="school-app-section scroll-mt-20">
      <div className="container">
        <div className="school-app-card">
          {/* Left Column: App Coming Soon Content, Features & Store Badges */}
          <motion.div
            className="school-app-content"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="school-app-badge-row">
              <span className="school-app-coming-pill">
                <span className="school-app-pulse-dot" aria-hidden="true"></span>
                DIGITAL CAMPUS INITIATIVE • COMING SOON
              </span>
              <span className="school-app-code-tag">
                <i className="fas fa-mobile-screen-button mr-1.5" aria-hidden="true"></i>
                ANDROID &amp; iOS
              </span>
            </div>

            <h2 className="school-app-heading">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Our Official School App is{' '}
              <span className="school-app-highlight">Coming Soon!</span>
            </h2>

            <p className="school-app-description">
              Your essential digital guide to student life at{' '}
              <strong>St. Michael&apos;s Higher Secondary School, Umsning</strong> — all in one
              place. Get ready to connect with teachers, track daily attendance, check the School
              Diary, and stay updated on every MBOSE academic milestone.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="school-app-features-grid">
              {appFeatures.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  className="school-app-feature-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 * idx }}
                >
                  <div className="school-app-feature-icon">
                    <i className={feat.icon} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3>{feat.title}</h3>
                    <p>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Store Download Buttons */}
            <div className="school-app-stores-row">
              <button
                type="button"
                className="school-store-btn"
                onClick={() => setSelectedStore('google')}
                aria-label="Get it on Google Play (Coming Soon)"
              >
                <i className="fab fa-google-play school-store-icon play" aria-hidden="true"></i>
                <div className="school-store-text">
                  <small>COMING SOON ON</small>
                  <strong>Google Play</strong>
                </div>
              </button>

              <button
                type="button"
                className="school-store-btn"
                onClick={() => setSelectedStore('apple')}
                aria-label="Download on the App Store (Coming Soon)"
              >
                <i className="fab fa-apple school-store-icon apple" aria-hidden="true"></i>
                <div className="school-store-text">
                  <small>COMING SOON ON</small>
                  <strong>App Store</strong>
                </div>
              </button>
            </div>

            {selectedStore && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="school-app-toast"
                role="status"
              >
                <i className="fas fa-rocket text-amber-300" aria-hidden="true"></i>
                <span>
                  The St. Michael&apos;s {selectedStore === 'google' ? 'Android' : 'iOS'} App is in
                  final testing for the 2026–27 session! Students &amp; parents will receive download
                  links via the School Secretariat.
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Animated Smartphone Mockup + Floating Live Badges */}
          <motion.div
            className="school-app-visual"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="school-phone-stage">
              {/* Glowing Background Aura */}
              <div className="school-phone-glow" aria-hidden="true" />

              {/* Floating Notification Chip 1 */}
              <motion.div
                className="school-floating-chip chip-top-left"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="chip-icon emerald">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                </span>
                <div>
                  <strong>Assembly Attendance</strong>
                  <span>Marked Present • 8:45 AM</span>
                </div>
              </motion.div>

              {/* Floating Notification Chip 2 */}
              <motion.div
                className="school-floating-chip chip-bottom-right"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="chip-icon gold">
                  <i className="fas fa-award" aria-hidden="true"></i>
                </span>
                <div>
                  <strong>MBOSE Unit Test</strong>
                  <span>Schedule Published</span>
                </div>
              </motion.div>

              {/* Animated Floating Smartphone Frame */}
              <motion.div
                className="school-phone-device"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Dynamic Island Notch */}
                <div className="school-phone-notch" aria-hidden="true">
                  <span className="notch-camera" />
                </div>

                {/* Phone Screen UI */}
                <div className="school-phone-screen">
                  {/* App Top Header */}
                  <div className="phone-app-header">
                    <div className="phone-user-row">
                      <div className="phone-user-info">
                        <img
                          src={SCHOOL_INFO.logo}
                          alt="St. Michael's Crest"
                          width="32"
                          height="32"
                        />
                        <div>
                          <strong>Hi, Michaelian!</strong>
                          <span>Class XII Science • Umsning</span>
                        </div>
                      </div>
                      <span className="phone-bell-badge">
                        <i className="fas fa-bell" aria-hidden="true"></i>
                      </span>
                    </div>

                    <div className="phone-search-bar">
                      <i className="fas fa-search" aria-hidden="true"></i>
                      <span>Search diary, syllabus, notices...</span>
                    </div>
                  </div>

                  {/* Attendance Card */}
                  <div className="phone-attendance-row">
                    <div className="phone-week-card">
                      <span className="phone-card-lbl">This Week Attendance</span>
                      <div className="phone-week-dots">
                        {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                          <div key={`${day}-${i}`} className="phone-day-col">
                            <span className="phone-dot present">
                              <i className="fas fa-check" aria-hidden="true"></i>
                            </span>
                            <small>{day}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="phone-pct-card">
                      <small>Overall</small>
                      <strong>96.8%</strong>
                      <span>2026–27 Term</span>
                    </div>
                  </div>

                  {/* Campus Event Highlight Card */}
                  <div className="phone-event-card">
                    <div className="phone-event-top">
                      <span className="phone-event-pill">Campus Activity</span>
                      <small>Today • 8:45 AM</small>
                    </div>
                    <h4>4-House Synchronized Drill &amp; Assembly</h4>
                    <p>Main Courtyard • St. Michael&apos;s H.S. School</p>
                  </div>

                  {/* Upcoming Assignments / Diary */}
                  <div className="phone-diary-card">
                    <span className="phone-diary-heading">Upcoming Assessments</span>
                    <div className="phone-diary-item">
                      <div>
                        <strong>Physics Practical Record</strong>
                        <small>HSSLC Lab • Due Tomorrow</small>
                      </div>
                      <span className="phone-tag-blue">Science</span>
                    </div>
                    <div className="phone-diary-item">
                      <div>
                        <strong>MBOSE Selection Routine</strong>
                        <small>Classes X &amp; XII • Published</small>
                      </div>
                      <span className="phone-tag-gold">Exam</span>
                    </div>
                  </div>

                  {/* Bottom App Navigation Bar */}
                  <div className="phone-bottom-nav">
                    <div className="phone-nav-item active">
                      <i className="fas fa-home" aria-hidden="true"></i>
                      <span>Home</span>
                    </div>
                    <div className="phone-nav-item">
                      <i className="fas fa-book" aria-hidden="true"></i>
                      <span>Diary</span>
                    </div>
                    <div className="phone-nav-item">
                      <i className="fas fa-award" aria-hidden="true"></i>
                      <span>Results</span>
                    </div>
                    <div className="phone-nav-item">
                      <i className="fas fa-user" aria-hidden="true"></i>
                      <span>Profile</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
