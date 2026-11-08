import React, { useState } from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

const researchCategories = [
  {
    title: 'Regional Geography Fieldwork',
    description:
      'Class XII geography and environmental science students participate in annual field surveys across the Ri Bhoi watershed, mapping soil conservation, forest ecology, and local livelihoods.',
  },
  {
    title: 'Modern Science Laboratories',
    description:
      'Dedicated Physics, Chemistry, and Biology laboratories equipped for hands-on experiments, scientific demonstrations, and MBOSE practical examinations.',
  },
  {
    title: 'State Honors & Scholarships',
    description:
      'St. Michael\'s SSLC Award Body provides merit recognition and scholarships of ₹20,000 for state board toppers, felicitated by the Chief Minister of Meghalaya.',
  },
];

const researchGalleryPairs = [
  [
    {
      url: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.05.15_PM__1__81637a2c.jpeg'),
      alt: 'Class XII Geography Fieldwork Excursion',
      tag: 'Field Excursion',
    },
    {
      url: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.53_PM_bd53e2d5.jpeg'),
      alt: 'Eco Club Tree Plantation Drive',
      tag: 'Eco Conservation',
    },
  ],
  [
    {
      url: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.10_PM__2__df242174.jpeg'),
      alt: 'Chief Minister Conrad Sangma Felicitating Topper',
      tag: 'State Honors',
    },
    {
      url: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.05.21_PM_eeb467f8.jpeg'),
      alt: 'Senior Choral Ensemble and Harmonies',
      tag: 'Performing Arts',
    },
  ],
];

const metrics = [
  { value: '2,000+', label: 'Learners Enrolled (KG-XII)' },
  { value: '100%', label: 'MBOSE Board Pass Record' },
  { value: 'Top 20', label: 'Meghalaya State Merit Rank' },
  { value: '₹20,000', label: 'Scholarship Award Endowment' },
];

export const ResearchSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [galleryPage, setGalleryPage] = useState(0);

  const handlePrevGallery = () => {
    setGalleryPage((prev) => (prev - 1 + researchGalleryPairs.length) % researchGalleryPairs.length);
  };

  const handleNextGallery = () => {
    setGalleryPage((prev) => (prev + 1) % researchGalleryPairs.length);
  };

  return (
    <section className="resherch" id="research">
      <div className="container">
        <div className="main-wrapper">
          {/* Left Content */}
          <div className="content-left" data-aos="fade-right" data-aos-duration="900">
            <div className="header-section">
              <h1>ACADEMIC</h1>
              <h2>SPOTLIGHT</h2>
            </div>

            <div className="text-content" key={activeCategory}>
              {researchCategories[activeCategory].description}
            </div>

            <div className="menu-links">
              {researchCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  type="button"
                  className={`menu-option ${activeCategory === idx ? 'active' : ''}`}
                  onClick={() => setActiveCategory(idx)}
                >
                  <span>{cat.title}</span>
                  <span className="menu-arrow">›</span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="vertical-separator" data-aos="fade-in"></div>

          {/* Right Content */}
          <div className="content-right" data-aos="fade-left" data-aos-duration="900">
            {/* Metrics */}
            <div className="metrics-container">
              {metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className="metric-block"
                  data-aos="zoom-in"
                  data-aos-delay={100 * (idx + 1)}
                >
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div className="gallery-section">
              {researchGalleryPairs[galleryPage].map((photo) => (
                <div key={photo.url} className="photo-container">
                  <img src={photo.url} alt={photo.alt} />
                  <span className="photo-tag">{photo.tag}</span>
                </div>
              ))}

              <div className="controls-area">
                <div className="arrow-controls">
                  <button
                    type="button"
                    className="arrow-button"
                    onClick={handlePrevGallery}
                    aria-label="Previous photos"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="arrow-button"
                    onClick={handleNextGallery}
                    aria-label="Next photos"
                  >
                    →
                  </button>
                </div>
                <a href="#hub" className="resource-link">
                  View Student Hub Resources <span>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
