import React, { useState, useEffect } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

const bannerSlides = [
  {
    src: SCHOOL_IMAGES.campus,
    alt: "St. Michael's Higher Secondary School amphitheatre & cultural assembly in Umsning",
  },
  {
    src: SCHOOL_IMAGES.foundingCampus,
    alt: "St. Michael's Higher Secondary School main building and Archangel tower (Estd. 1961)",
  },
  {
    src: SCHOOL_IMAGES.campusAssembly,
    alt: "Morning assembly of 2,000 students at St. Michael's Umsning ground",
  },
  {
    src: SCHOOL_IMAGES.sports,
    alt: "National Sports Day athletes and champions at St. Michael's Umsning",
  },
];

const accreditationSlides = [
  {
    id: 1,
    badge: 'MBOSE AFFILIATED • CATHOLIC DIOCESE OF SHILLONG',
    subtitle: 'ESTABLISHED 1961 • UMSNING, RI BHOI',
    lines: ['PREMIER COEDUCATIONAL', 'HIGHER SECONDARY', 'INSTITUTION IN RI BHOI'],
    description:
      'Sixty-five years of academic rigor, moral conviction, and holistic education from Nursery to Class XII.',
  },
  {
    id: 2,
    badge: 'GOVERNMENT OF MEGHALAYA STATE HONORS',
    subtitle: 'MBOSE SSLC MERIT LIST 2026',
    lines: ['STATE TOP 20', 'ORDER OF MERIT', 'FELICITATED BY CM'],
    description:
      'Backed by the St. Michael’s SSLC Award Body with ₹20,000 merit scholarships and full tuition waivers.',
  },
  {
    id: 3,
    badge: 'MOTTO: EXCELSIOR & SHAPHRANG',
    subtitle: 'NURSERY TO CLASS XII • ARTS, SCIENCE & COMMERCE',
    lines: ['2,000+ ACTIVE', 'LEARNERS & 68+', 'DEDICATED EDUCATORS'],
    description:
      'Featuring modern science laboratories, regional geography fieldwork, synchronized drill, and choral traditions.',
  },
];

const heroStats = [
  { value: '1961', label: 'Founded' },
  { value: '2,000+', label: 'Students' },
  { value: 'Top 20', label: 'State Merit' },
  { value: '100%', label: 'Board Pass' },
];

interface HeroSectionProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ formRef }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
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
      setCurrentBanner((prev) => (prev + 1) % bannerSlides.length);
    }, 5500);
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
    setRefCode(`SMHSS-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  const handleReset = () => {
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
  };

  return (
    <div className="hero-section" id="apply-form">
      {/* Optimized Background Crossfade Slideshow using native <img> for fast LCP */}
      <div className="hero-bg-slideshow" aria-hidden="true">
        {bannerSlides.map((slide, idx) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            fetchPriority={idx === 0 ? 'high' : 'low'}
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding={idx === 0 ? 'sync' : 'async'}
            className={`hero-bg-layer ${idx === currentBanner ? 'active' : ''}`}
          />
        ))}
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container">
        {/* Left: Accreditation Vertical Slider & Institutional Proof Points */}
        <div className="hero-left-column" data-aos="fade-right" data-aos-duration="800">
          <div className="slider-container">
            {accreditationSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                aria-hidden={index !== currentSlide}
              >
                <div className="slide-content">
                  <div className="content-wrapper">
                    <span className="hero-pill-badge">{slide.badge}</span>
                    {slide.subtitle && <div className="subtitle">{slide.subtitle}</div>}
                    <div className="slide-headings">
                      {slide.lines.map((line, idx) => (
                        <h3 key={idx} style={{ animationDelay: `${120 + idx * 110}ms` }}>
                          {line}
                        </h3>
                      ))}
                    </div>
                    <p className="hero-slide-desc">{slide.description}</p>
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
                  aria-label={`Show highlight slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Fast Credibility Strip */}
          <div className="hero-stats-strip">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat-pill">
                <span className="hero-stat-val">{stat.value}</span>
                <span className="hero-stat-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Registration Form */}
        <div
          className="registration-form"
          ref={formRef}
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div className="form-header">
            <h2>Admission Enquiry 2026–27</h2>
            <h3>
              ST. MICHAEL&apos;S HIGHER SECONDARY
              <br />
              SCHOOL • UMSNING
            </h3>
            <div className="registration-date">
              <i className="far fa-calendar-check" aria-hidden="true"></i> Nursery to Class XII
              (Arts, Science &amp; Commerce)
            </div>
          </div>

          {submitted ? (
            <div className="form-success-card">
              <div className="success-icon">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
              </div>
              <h4>Enquiry Registered!</h4>
              <p>
                Thank you, <strong>{formData.name}</strong>. Your admission enquiry (Ref:{' '}
                <strong className="font-mono text-amber-700">{refCode}</strong>) has been logged
                with the St. Michael&apos;s Umsning office.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#1B365D] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#244876] transition-colors"
              >
                Submit Another Enquiry
              </button>
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
                    placeholder="STUDENT FULL NAME *"
                    aria-label="Student Full Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="PARENT / STUDENT EMAIL *"
                    aria-label="Parent or Student Email"
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
                  placeholder="GUARDIAN MOBILE NUMBER (10 DIGITS) *"
                  aria-label="Guardian Mobile Number"
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
                    aria-label="Student Date of Birth"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="TOWN / VILLAGE (e.g. UMSNING) *"
                    aria-label="Town or Village"
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
                    aria-label="Select Class or Stream"
                    required
                  >
                    <option value="">SELECT CLASS / STREAM *</option>
                    <option value="science">Higher Secondary Science (Class XI – XII)</option>
                    <option value="arts">Higher Secondary Arts / Humanities (Class XI – XII)</option>
                    <option value="commerce">Higher Secondary Commerce (Class XI – XII)</option>
                    <option value="secondary">Secondary MBOSE SSLC (Class IX – X)</option>
                    <option value="primary">Primary &amp; Upper Primary (Class I – VIII)</option>
                    <option value="kg">Kindergarten &amp; Nursery</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    aria-label="Select Enrollment Mode"
                    required
                  >
                    <option value="">SELECT ENROLLMENT MODE *</option>
                    <option value="regular">Regular Day Scholar</option>
                    <option value="bus">Day Scholar with Bus Transit (NH-6 Fleet)</option>
                    <option value="scholarship">SSLC Merit Scholarship Applicant</option>
                  </select>
                </div>
              </div>

              <div className="terms">
                By submitting this form, you authorise St. Michael&apos;s Higher Secondary School,
                Umsning to contact you regarding admissions &amp; academic counselling.
              </div>

              <button type="submit" className="submit-btn btn-shine">
                SUBMIT ADMISSION ENQUIRY <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>

              <div className="login-link">
                Looking for Fee Schedule or Circulars?{' '}
                <a href="#hub">Open Student &amp; Parent Hub</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
