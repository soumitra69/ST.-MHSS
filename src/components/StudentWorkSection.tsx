import React, { useState, useEffect } from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

const subWorkCards = [
  {
    src: resolveSchoolAsset('./Assets/Rectangle 61.png'),
    title: 'Students Celebrating State Board Merit & Distinctions',
    category: 'Academic Achievement',
  },
  {
    src: resolveSchoolAsset('./Assets/Rectangle 62.png'),
    title: 'Ri Bhoi Watershed & Campus Environmental Conservation',
    category: 'Geography & Ecology',
  },
  {
    src: resolveSchoolAsset('./Assets/Rectangle 63.png'),
    title: 'Student Council Leadership & Youth Awareness Rallies',
    category: 'Student Leadership',
  },
  {
    src: resolveSchoolAsset('./Assets/Rectangle 64.png'),
    title: 'Inter-House Sports Champions & Athletic Trophy',
    category: 'Athletics & PT Drill',
  },
];

const galleryImages = [
  { src: resolveSchoolAsset('./Assets/Rectangle 71.png'), title: 'Annual Cultural & Traditional Khasi Dance Showcase' },
  { src: resolveSchoolAsset('./Assets/Rectangle 72.png'), title: 'State Board SSLC Topper Felicitation Ceremony' },
  { src: resolveSchoolAsset('./Assets/Rectangle 73.png'), title: 'Class XII Geography Fieldwork Excursion' },
  { src: resolveSchoolAsset('./Assets/Rectangle 74.png'), title: 'Community Awareness & Anti-Tobacco Rally' },
  { src: resolveSchoolAsset('./Assets/Rectangle 75.png'), title: 'World Environment Day Tree Plantation Drive' },
  { src: resolveSchoolAsset('./Assets/Rectangle 76.png'), title: 'Senior Choral Ensemble and School Hymn' },
];

export const StudentWorkSection: React.FC = () => {
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    if (!lightboxImg) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxImg]);

  return (
    <div id="student-work">
      <section className="student-work">
        <div className="container">
          <div className="student-work-content" data-aos="fade-down" data-aos-duration="900">
            <div>
              <span className="section-eyebrow">INNOVATION &amp; DISCIPLINE IN ACTION</span>
              <h3>CAMPUS GALLERY &amp; STUDENT WORK</h3>
            </div>
            <a href="#hub" className="view-more-link">
              <span>Explore Digital Hub</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="student-card">
            {/* Large Main Image */}
            <div
              className="card-container"
              data-aos="zoom-in"
              data-aos-duration="900"
              onClick={() =>
                setLightboxImg({
                  src: resolveSchoolAsset('./Assets/Rectangle 60.png'),
                  title: "Students learning and participating in campus activities at St. Michael's Higher Secondary School, Umsning.",
                })
              }
            >
              <div className="image-wrapper">
                <img
                  src={resolveSchoolAsset('./Assets/Rectangle 60.png')}
                  alt="Students at work on a campus field study"
                  loading="lazy"
                  decoding="async"
                />
                <div className="caption">
                  <span className="caption-badge">CAMPUS MOMENT</span>
                  <p>
                    Discover student learning, science exhibitions, and community life at St. Michael&apos;s Higher Secondary School, Umsning.
                  </p>
                </div>
              </div>
            </div>

            {/* 2x2 Grid of Project Cards */}
            <div className="flex-card">
              {subWorkCards.map((item, idx) => (
                <div
                  key={item.src}
                  className="work-subcard"
                  data-aos="fade-up"
                  data-aos-delay={100 * (idx + 1)}
                  onClick={() => setLightboxImg(item)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="work-subcard-overlay">
                    <span className="work-tag">{item.category}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="student-work-image-section">
        <div className="container">
          <div className="student-work-image">
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className="gallery-grid-item"
                data-aos="zoom-in"
                data-aos-delay={70 * (index + 1)}
                onClick={() => setLightboxImg(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-item-hover">
                  <i className="fas fa-expand-alt"></i>
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxImg(null)}
              aria-label="Close preview"
            >
              <i className="fas fa-times"></i>
            </button>
            <img src={lightboxImg.src} alt={lightboxImg.title} />
            <p className="lightbox-caption">{lightboxImg.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};
