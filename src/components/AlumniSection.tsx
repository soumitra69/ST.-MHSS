import React, { useState } from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

const alumniData = [
  {
    id: 0,
    name: 'Sanidahün Nongkhlaw',
    role: 'MBOSE SSLC State Top 20 Merit Holder (2026 Batch)',
    company: 'Meghalaya State Merit Honoree',
    featuredImage: resolveSchoolAsset('./Assets/Rectangle 93.png'),
    avatar: resolveSchoolAsset('./Assets/Rectangle 88.png'),
    quote:
      "Studying at St. Michael's Umsning gave me strong moral grounding and the academic discipline to compete at the state level. The guidance from my teachers and the ₹20,000 scholarship endowment helped me pursue my dream of Senior Secondary Science.",
  },
  {
    id: 1,
    name: 'Marcus Kharsyntiew',
    role: 'Higher Secondary Science Head Boy (2025 Batch)',
    company: 'NEHU Shillong (B.Tech)',
    featuredImage: resolveSchoolAsset('./Assets/Rectangle 89.png'),
    avatar: resolveSchoolAsset('./Assets/Rectangle 89.png'),
    quote:
      "From daily morning drill on the amphitheatre stairs to rigorous practical experiments in the physics and chemistry labs, St. Michael's formed me as a disciplined leader ready for university engineering.",
  },
  {
    id: 2,
    name: 'Grace Lyngdoh',
    role: 'House Captain & Choral Lead (2024 Batch)',
    company: "St. Anthony's College",
    featuredImage: resolveSchoolAsset('./Assets/Rectangle 90.png'),
    avatar: resolveSchoolAsset('./Assets/Rectangle 90.png'),
    quote:
      "The value of community and service instilled by the Reverend Sisters and Diocesan mentors continues to guide me. St. Michael's is more than a school; it is a family that nurtures every student's God-given talents.",
  },
  {
    id: 3,
    name: 'Daiakmen I Ka Talang',
    role: 'Higher Secondary Arts Distinction Holder (2023 Batch)',
    company: 'Civil Services Aspirant',
    featuredImage: resolveSchoolAsset('./Assets/Rectangle 91.png'),
    avatar: resolveSchoolAsset('./Assets/Rectangle 91.png'),
    quote:
      "The geography field excursions across Ri Bhoi and regular debating competitions helped me understand our regional society deeply. St. Michael's instilled in me the motto 'Shaphrang' — to always step forward with courage.",
  },
];

export const AlumniSection: React.FC = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(0);

  const handlePrev = () => {
    setSelectedAlumni((prev) => (prev - 1 + alumniData.length) % alumniData.length);
  };

  const handleNext = () => {
    setSelectedAlumni((prev) => (prev + 1) % alumniData.length);
  };

  const current = alumniData[selectedAlumni];

  return (
    <section className="alumini" id="alumni">
      <div className="container">
        {/* Header Section */}
        <div className="alumini-header" data-aos="fade-down" data-aos-duration="900">
          <h1>ST. MICHAEL&apos;S UMSNING FAMILY SPEAKS</h1>
          <nav className="navigation" aria-label="Testimonial Navigation">
            <button
              type="button"
              className="nav-btn"
              onClick={handlePrev}
              aria-label="Previous Alumni Testimonial"
            >
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="nav-btn"
              onClick={handleNext}
              aria-label="Next Alumni Testimonial"
            >
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </nav>
        </div>

        {/* Main Testimonial Section */}
        <div className="main-content" data-aos="zoom-in" data-aos-duration="800">
          <div className="featured-section" key={current.id}>
            <div className="profile-image">
              <img
                src={current.featuredImage}
                alt={current.name}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="content-area">
              <span className="badge">
                <i className="fas fa-user-graduate mr-1.5" aria-hidden="true"></i>
                ALUMNI &amp; SCHOLARS
              </span>
              <p className="testimonial">
                <i className="fas fa-quote-left mr-2 text-[#ea580c]" aria-hidden="true"></i>
                {current.quote}
              </p>
              <hr className="testimonial-hr" />
              <div className="profile-info">
                <h2>{current.name}</h2>
                <p className="role">{current.role}</p>
                <p className="company">
                  <i className="fas fa-award mr-1.5" aria-hidden="true"></i>
                  {current.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Alumni Gallery Selector */}
        <div className="alumni-gallery">
          {alumniData.map((person, index) => (
            <button
              key={person.id}
              type="button"
              className={`alumni-card ${selectedAlumni === index ? 'active-alumni' : ''}`}
              onClick={() => setSelectedAlumni(index)}
              data-aos="flip-left"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={person.avatar}
                alt={person.name}
                className="alumni-image"
                loading="lazy"
                decoding="async"
              />
              <div className="alumni-card-meta">
                <p className="alumni-name">{person.name}</p>
                <span className="alumni-company-tag">
                  <i className="fas fa-star mr-1 text-amber-500" aria-hidden="true"></i>
                  {person.company}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
