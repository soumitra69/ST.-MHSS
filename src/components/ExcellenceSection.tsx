import React, { useState, useEffect } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { AppPageId } from './InstitutionalSection';

interface ExcellenceSectionProps {
  onNavigatePage?: (page: AppPageId) => void;
}

const excellenceQuotes = [
  "During the State SSLC Toppers Felicitation, Hon'ble Chief Minister Conrad K. Sangma and Education Minister Lahkmen Rymbui honored St. Michael's student for securing rank in the Meghalaya State Top 20 Order of Merit.",
  'Empowering over 2,000 young boys and girls in Ri Bhoi with disciplined minds, moral conviction, and value-based education under the Catholic Diocese of Shillong since 1961.',
];

const excellenceBannerSlides = [
  {
    src: SCHOOL_IMAGES.campus,
    tag: 'Cultural Heritage • Central Amphitheatre',
    title: 'Traditional Khasi Cultural Dance before 2,000+ Scholars on the Courtyard Stage',
    icon: 'fas fa-music',
  },
  {
    src: SCHOOL_IMAGES.foundingCampus,
    tag: 'Historic Landmark • Estd. 1961',
    title: "St. Michael's Archangel Tower & Main Academic Building, Umsning",
    icon: 'fas fa-landmark',
  },
  {
    src: SCHOOL_IMAGES.houseAssembly,
    tag: '4-House Brotherhood • Morning Drill',
    title: 'Synchronized Four-House Assembly on the Pine-Ringed Main Ground',
    icon: 'fas fa-shield-alt',
  },
  {
    src: SCHOOL_IMAGES.awardPresentation,
    tag: 'MBOSE State Merit • Top 20 Honour',
    title: "State Felicitation of St. Michael's SSLC Merit Rank Holder by the Hon'ble Chief Minister",
    icon: 'fas fa-trophy',
  },
  {
    src: SCHOOL_IMAGES.sportsBlueChampions,
    tag: 'Athletics & Sportsmanship • National Sports Day',
    title: 'Inter-House Championship Trophies & Track Medalists at Umsning',
    icon: 'fas fa-running',
  },
  {
    src: SCHOOL_IMAGES.choir,
    tag: 'Diocesan Choral Tradition • School Choir',
    title: 'Multi-Part Choral Ensemble Performing English & Khasi Hymns',
    icon: 'fas fa-microphone-alt',
  },
];

export const ExcellenceSection: React.FC<ExcellenceSectionProps> = ({ onNavigatePage }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isBannerPaused, setIsBannerPaused] = useState(false);

  // Auto-advance the 6 campus banner photos every 2 seconds (2000ms)
  useEffect(() => {
    if (isBannerPaused) return;
    const timer = window.setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % excellenceBannerSlides.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [isBannerPaused]);

  const handlePrevQuote = () => {
    setQuoteIndex((prev) => (prev - 1 + excellenceQuotes.length) % excellenceQuotes.length);
  };

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % excellenceQuotes.length);
  };

  const handlePrevBanner = () => {
    setBannerIndex(
      (prev) => (prev - 1 + excellenceBannerSlides.length) % excellenceBannerSlides.length
    );
  };

  const handleNextBanner = () => {
    setBannerIndex((prev) => (prev + 1) % excellenceBannerSlides.length);
  };

  const currentBanner = excellenceBannerSlides[bannerIndex];

  return (
    <div id="excellence">
      <section className="toghether">
        <div className="container">
          <div className="toghether-content">
            {/* Left Content */}
            <div className="toghether-left" data-aos="fade-right" data-aos-delay="100">
              <span className="section-eyebrow">
                <i className="fas fa-landmark mr-1.5" aria-hidden="true"></i>
                OUR LEGACY SINCE 1961
              </span>
              <h2>
                Together we have
                <br />
                achieved excellence
              </h2>
              <div className="toghether-img">
                <button
                  type="button"
                  className="quote-arrow-btn"
                  onClick={handlePrevQuote}
                  aria-label="Previous highlight"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  className="quote-arrow-btn"
                  onClick={handleNextQuote}
                  aria-label="Next highlight"
                >
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
                <span className="ml-2 text-xs font-mono font-semibold text-slate-500">
                  0{quoteIndex + 1} / 0{excellenceQuotes.length}
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="toghather-right" data-aos="fade-left" data-aos-delay="150">
              <div className="quote-box">
                <i className="fas fa-quote-left quote-icon" aria-hidden="true"></i>
                <p key={quoteIndex} className="quote-fade">
                  {excellenceQuotes[quoteIndex]}
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => onNavigatePage?.('who-we-are')}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                  >
                    <span>Read More</span>
                    <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wide 6-Photo Auto-Sliding Banner (Changes Every 2 Seconds) */}
          <div
            className="excellence-banner-wrapper excellence-carousel-stage"
            data-aos="fade-up"
            data-aos-delay="180"
            onMouseEnter={() => setIsBannerPaused(true)}
            onMouseLeave={() => setIsBannerPaused(false)}
          >
            <div className="excellence-slides-viewport">
              {excellenceBannerSlides.map((slide, idx) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`excellence-main-banner excellence-slide-img ${
                    idx === bannerIndex ? 'active' : ''
                  }`}
                />
              ))}

              {/* Gradient Overlay & Live Caption Bar */}
              <div className="excellence-banner-overlay">
                <div className="excellence-banner-caption">
                  <span className="excellence-banner-pill">
                    <i className={currentBanner.icon} aria-hidden="true"></i>
                    {currentBanner.tag}
                  </span>
                  <h3>{currentBanner.title}</h3>
                </div>

                <div className="excellence-banner-controls">
                  <button
                    type="button"
                    className="excellence-ctrl-btn"
                    onClick={handlePrevBanner}
                    aria-label="Previous campus photo"
                  >
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                  </button>
                  <div className="excellence-dots-row" role="tablist" aria-label="Campus photo slides">
                    {excellenceBannerSlides.map((slide, idx) => (
                      <button
                        key={slide.tag}
                        type="button"
                        role="tab"
                        aria-selected={idx === bannerIndex}
                        aria-label={`View slide ${idx + 1}: ${slide.tag}`}
                        className={`excellence-dot ${idx === bannerIndex ? 'active' : ''}`}
                        onClick={() => setBannerIndex(idx)}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="excellence-ctrl-btn"
                    onClick={handleNextBanner}
                    aria-label="Next campus photo"
                  >
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                  </button>
                  <span className="excellence-slide-count">
                    0{bannerIndex + 1} / 0{excellenceBannerSlides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
