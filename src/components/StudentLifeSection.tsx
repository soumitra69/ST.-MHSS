import React from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

export const StudentLifeSection: React.FC = () => {
  return (
    <section className="student" id="campus-life">
      <div className="container">
        <div className="section-title-row" data-aos="fade-down" data-aos-duration="900">
          <span className="section-eyebrow">HOLISTIC CAMPUS FORMATION</span>
          <h3 className="student-h3">STUDENT LIFE AT ST. MICHAEL&apos;S</h3>
          <p className="student-subtitle">
            Experience a vibrant campus ecosystem blending rigorous academics, mass synchronized drill, choral harmony, inter-house sports, and community service across Umsning.
          </p>
        </div>

        <div className="student-bento-grid">
          {/* Left Column: Tall Card (STUDY) */}
          <div
            className="student-card-item tall-card"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <img
              src={resolveSchoolAsset('./Assets/Rectangle 40.png')}
              alt="Science and Computer Laboratories at St. Michael's"
              loading="lazy"
              decoding="async"
            />
            <div className="student-card-overlay">
              <p>Well-equipped digital computer laboratories, modern Physics, Chemistry &amp; Biology labs, and quiet reading rooms.</p>
            </div>
            <div className="student-badge">
              <span>ACADEMIC LABS</span>
            </div>
          </div>

          {/* Center Column: Top Wide (EVENTS) + Bottom 2 Cards (ASSEMBLY, SPORTS) */}
          <div className="student-center-col">
            <div
              className="student-card-item wide-card"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="120"
            >
              <img
                src={resolveSchoolAsset('./Assets/Rectangle 41.png')}
                alt="Campus Events and Mass Synchronized Drill"
                loading="lazy"
                decoding="async"
              />
              <div className="student-card-overlay">
                <p>Annual mass synchronized PT drill displays with 200+ students, cultural festivals, and diocesan celebrations.</p>
              </div>
              <div className="student-badge">
                <span>DRILL &amp; EVENTS</span>
              </div>
            </div>

            <div className="student-bottom-split">
              <div
                className="student-card-item half-card"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="220"
              >
                <img
                  src={resolveSchoolAsset('./Assets/Rectangle 42.png')}
                  alt="Campus community during morning assembly"
                  loading="lazy"
                  decoding="async"
                />
                <div className="student-card-overlay">
                  <p>Safe, supportive &amp; values-driven residential and day-scholar pastoral care led by dedicated mentors.</p>
                </div>
                <div className="student-badge">
                  <span>PASTORAL CARE</span>
                </div>
              </div>

              <div
                className="student-card-item half-card"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                <img
                  src={resolveSchoolAsset('./Assets/Rectangle 43.png')}
                  alt="Sports and Inter-House Athletics"
                  loading="lazy"
                  decoding="async"
                />
                <div className="student-card-overlay">
                  <p>Tiered amphitheatre sports grounds, inter-house athletics championships, football &amp; physical conditioning.</p>
                </div>
                <div className="student-badge">
                  <span>ATHLETICS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Card (COMMUNITY) */}
          <div
            className="student-card-item tall-card"
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-delay="380"
          >
            <img
              src={resolveSchoolAsset('./Assets/Rectangle 44.png')}
              alt="Campus environmental and choral activities"
              loading="lazy"
              decoding="async"
            />
            <div className="student-card-overlay">
              <p>Eco Club tree plantation drives, four Archangel houses, senior choral ensembles &amp; youth leadership rallies.</p>
            </div>
            <div className="student-badge">
              <span>ECO &amp; CHOIR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
