import React, { useState, useEffect } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

const bannerImages = [
  SCHOOL_IMAGES.campus,
  SCHOOL_IMAGES.campusAssembly,
  SCHOOL_IMAGES.culture,
  SCHOOL_IMAGES.sports,
];

const accreditationSlides = [
  {
    id: 1,
    subtitle: 'MBOSE AFFILIATED & DIOCESAN RECOGNIZED\nESTABLISHED 1961',
    lines: ['PREMIER COEDUCATIONAL', 'INSTITUTION IN', 'RI BHOI DISTRICT'],
  },
  {
    id: 2,
    subtitle: 'GOVERNMENT OF MEGHALAYA',
    lines: ['STATE SSLC', 'MERIT ORDER', 'TOP 20 RANK'],
  },
  {
    id: 3,
    subtitle: 'CATHOLIC DIOCESE OF SHILLONG',
    lines: ['65 YEARS OF', 'CHARACTER & FAITH', '2,000 LEARNERS'],
  },
];

interface HeroSectionProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ formRef }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    city: '',
    discipline: '',
    program: '',
  });

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(bannerTimer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % accreditationSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        city: '',
        discipline: '',
        program: '',
      });
    }, 4500);
  };

  return (
    <div className="hero-section" id="apply-form">
      {/* Background Crossfade Slideshow */}
      <div className="hero-bg-slideshow">
        {bannerImages.map((imgUrl, idx) => (
          <div
            key={imgUrl}
            className={`hero-bg-layer ${idx === currentBanner ? 'active' : ''}`}
            style={{ backgroundImage: `url("${imgUrl}")` }}
          />
        ))}
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container">
        {/* Left: Accreditation Vertical Slider */}
        <div className="hero-left-column" data-aos="fade-right" data-aos-duration="1000">
          <div className="slider-container">
            {accreditationSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                aria-hidden={index !== currentSlide}
              >
                <div className="slide-content">
                  <div className="content-wrapper">
                    {slide.subtitle && (
                      <div className="subtitle">
                        {slide.subtitle.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i === 0 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                    <div className="slide-headings">
                      {slide.lines.map((line, idx) => (
                        <h3 key={idx} style={{ animationDelay: `${180 + idx * 140}ms` }}>
                          {line}
                        </h3>
                      ))}
                    </div>
                    <span className="slide-accent" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="navigation-dots">
              {accreditationSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-pressed={idx === currentSlide}
                  aria-label={`Show accreditation slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Registration Form */}
        <div
          className="registration-form"
          ref={formRef}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="form-header">
            <h2>Apply Today for</h2>
            <h3>
              DON BOSCO COLLEGE
              <br />
              TURA • ACADEMIC PATHWAYS
            </h3>
            <div className="registration-date">
              <i className="far fa-calendar-alt"></i> Admissions 2026-27: Early applications now open
            </div>
          </div>

          {submitted ? (
            <div className="form-success-card">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h4>Application Received!</h4>
              <p>
                Thank you for applying to <strong>DON BOSCO COLLEGE TURA</strong>. Our admissions team will contact you shortly via email and phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="STUDENT NAME"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="STUDENT EMAIL ID"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="STUDENT MOBILE NO"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="STUDENT DOB"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="TOWN / VILLAGE"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">SELECT DISCIPLINE</option>
                    <option value="science">Higher Secondary Science (Class XI - XII)</option>
                    <option value="arts">Higher Secondary Arts / Humanities (Class XI - XII)</option>
                    <option value="commerce">Higher Secondary Commerce (Class XI - XII)</option>
                    <option value="secondary">Secondary SSLC (Class IX - X)</option>
                    <option value="primary">Primary &amp; Upper Primary (Class I - VIII)</option>
                    <option value="kg">Kindergarten &amp; Nursery</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                  >
                    <option value="">SELECT PROGRAM</option>
                    <option value="regular">Regular Day Scholar Program</option>
                    <option value="bus">Day Scholar with Bus Transit (NH-6 Fleet)</option>
                    <option value="scholarship">Diocese Merit Scholarship Candidate</option>
                  </select>
                </div>
              </div>

              <div className="terms">
                By submitting this form, I agree to receive official communications from St. Michael's Umsning via SMS/Email/Phone.
              </div>

              <button type="submit" className="submit-btn btn-shine">
                APPLY NOW <i className="fas fa-arrow-right"></i>
              </button>

              <div className="login-link">
                Already Registered? <a href="#hub">Click to Check Marksheet / Status</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
