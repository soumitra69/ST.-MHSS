import React from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

export const StudentLifeSection: React.FC = () => {
  return (
    <section className="student" id="campus-life">
      <div className="container">
        <div className="section-title-row" data-aos="fade-down" data-aos-duration="900">
          <h3 className="student-h3">STUDENT LIFE</h3>
          <p className="student-subtitle">
            Experience a vibrant campus ecosystem blending rigorous academics, mass synchronized drill, choral harmony, sports, and community service.
          </p>
        </div>

        <div className="student-bento-grid">
          {/* Left Column: Tall Card (STUDY) */}
          <div
            className="student-card-item tall-card"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <img src={resolveSchoolAsset('./Assets/Rectangle 40.png')} alt="Study at St. Michael's" />
            <div className="student-card-overlay">
              <p>Well equipped digital laboratories, modern science labs &amp; collaborative learning spaces.</p>
            </div>
            <div className="student-badge">
              <span>STUDY</span>
            </div>
          </div>

          {/* Center Column: Top Wide (EVENTS) + Bottom 2 Cards (HOSTEL, SPORTS) */}
          <div className="student-center-col">
            <div
              className="student-card-item wide-card"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <img src={resolveSchoolAsset('./Assets/Rectangle 41.png')} alt="Campus Events and Mass Drill" />
              <div className="student-card-overlay">
                <p>Annual mass synchronized drill displays with 200+ students, cultural festivals &amp; exhibitions.</p>
              </div>
              <div className="student-badge">
                <span>EVENTS</span>
              </div>
            </div>

            <div className="student-bottom-split">
              <div
                className="student-card-item half-card"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="250"
              >
                <img src={resolveSchoolAsset('./Assets/Rectangle 42.png')} alt="Campus community during assembly" />
                <div className="student-card-overlay">
                  <p>Safe, supportive &amp; values-driven residential boarding with dedicated pastoral guidance.</p>
                </div>
                <div className="student-badge">
                  <span>HOSTEL</span>
                </div>
              </div>

              <div
                className="student-card-item half-card"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="350"
              >
                <img src={resolveSchoolAsset('./Assets/Rectangle 43.png')} alt="Sports and Athletics" />
                <div className="student-card-overlay">
                  <p>Amphitheatre sports grounds, inter-house athletics cups, football &amp; physical conditioning.</p>
                </div>
                <div className="student-badge">
                  <span>SPORTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Card (MORE) */}
          <div
            className="student-card-item tall-card"
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-delay="450"
          >
            <img src={resolveSchoolAsset('./Assets/Rectangle 44.png')} alt="Campus environmental activities" />
            <div className="student-card-overlay">
              <p>Eco Club tree plantation, four Archangel houses, senior choral ensembles &amp; leadership rallies.</p>
            </div>
            <div className="student-badge">
              <span>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
