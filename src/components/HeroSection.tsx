import React, { useState, useEffect } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { NOTICES, Notice } from '../data/schoolData';

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

const CATEGORY_META: Record<Notice['category'], { icon: string; badgeClass: string }> = {
  Academic: {
    icon: 'fas fa-graduation-cap',
    badgeClass: 'hero-nb-cat-academic',
  },
  Admissions: {
    icon: 'fas fa-user-plus',
    badgeClass: 'hero-nb-cat-admissions',
  },
  Examination: {
    icon: 'fas fa-file-signature',
    badgeClass: 'hero-nb-cat-exam',
  },
  Sports: {
    icon: 'fas fa-trophy',
    badgeClass: 'hero-nb-cat-sports',
  },
  Holiday: {
    icon: 'fas fa-calendar-day',
    badgeClass: 'hero-nb-cat-general',
  },
  General: {
    icon: 'fas fa-bullhorn',
    badgeClass: 'hero-nb-cat-general',
  },
};

interface HeroSectionProps {
  formRef: React.RefObject<HTMLDivElement | null>;
  onOpenAdmission?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ formRef, onOpenAdmission }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Urgent' | 'Admissions' | 'Academic'>('All');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [activeNoticeIndex, setActiveNoticeIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  const filteredNotices = NOTICES.filter((notice) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Urgent') return Boolean(notice.isUrgent);
    return notice.category === activeCategory;
  });

  useEffect(() => {
    if (isPaused || filteredNotices.length <= 1) return;
    const noticeTimer = setInterval(() => {
      setActiveNoticeIndex((prev) => (prev + 1) % filteredNotices.length);
    }, 4200);
    return () => clearInterval(noticeTimer);
  }, [isPaused, filteredNotices.length]);

  const parseNoticeDate = (dateStr: string) => {
    const parts = dateStr.replace(',', '').split(' ');
    return {
      month: (parts[0] || 'APR').slice(0, 3).toUpperCase(),
      day: parts[1] || '18',
      year: parts[2] || '2026',
    };
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

        {/* Right: Transparent Glassmorphism Official Notice Board */}
        <aside
          className="hero-notice-board"
          ref={formRef}
          aria-label="Official Campus Notice Board"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          {/* Top Glass Header */}
          <div className="hero-nb-header">
            <div className="hero-nb-title-row">
              <div className="hero-nb-title-group">
                <span className="hero-nb-kicker">
                  <span className="hero-nb-live-dot" aria-hidden="true"></span>
                  OFFICIAL DIGITAL DESK • 2026–27
                </span>
                <h2 className="hero-nb-heading">
                  <i className="fas fa-bullhorn text-amber-300 mr-2" aria-hidden="true"></i>
                  NOTICE BOARD
                </h2>
              </div>
              <span className="hero-nb-count-badge">
                {NOTICES.length} CIRCULARS
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="hero-nb-tabs" role="tablist" aria-label="Filter notices">
              {(['All', 'Urgent', 'Admissions', 'Academic'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === tab}
                  onClick={() => {
                    setActiveCategory(tab);
                    setActiveNoticeIndex(0);
                  }}
                  className={`hero-nb-tab ${activeCategory === tab ? 'active' : ''}`}
                >
                  {tab === 'Urgent' && (
                    <i className="fas fa-bolt mr-1 text-amber-300" aria-hidden="true"></i>
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Notice Feed List */}
          <div className="hero-nb-list" role="region" aria-live="polite">
            {filteredNotices.map((notice, idx) => {
              const { month, day } = parseNoticeDate(notice.date);
              const meta = CATEGORY_META[notice.category] || CATEGORY_META.General;
              const isHighlighted = idx === activeNoticeIndex % Math.max(1, filteredNotices.length);

              return (
                <article
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className={`hero-nb-item ${isHighlighted ? 'highlighted' : ''}`}
                >
                  <div className="hero-nb-date-box" aria-hidden="true">
                    <span className="hero-nb-date-month">{month}</span>
                    <strong className="hero-nb-date-day">{day}</strong>
                  </div>

                  <div className="hero-nb-item-content">
                    <div className="hero-nb-item-meta">
                      <span className={`hero-nb-cat-pill ${meta.badgeClass}`}>
                        <i className={`${meta.icon} mr-1`} aria-hidden="true"></i>
                        {notice.category}
                      </span>
                      {notice.isUrgent && (
                        <span className="hero-nb-urgent-badge">
                          <i className="fas fa-circle text-[6px] mr-1" aria-hidden="true"></i>
                          NEW
                        </span>
                      )}
                      {notice.fileSize && (
                        <span className="hero-nb-filesize">
                          <i className="far fa-file-pdf mr-1" aria-hidden="true"></i>
                          {notice.fileSize}
                        </span>
                      )}
                    </div>

                    <h3 className="hero-nb-item-title">{notice.title}</h3>
                    <p className="hero-nb-item-desc">{notice.description}</p>
                  </div>

                  <button
                    type="button"
                    className="hero-nb-item-arrow"
                    aria-label={`Read circular: ${notice.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNotice(notice);
                    }}
                  >
                    <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  </button>
                </article>
              );
            })}
          </div>

          {/* Footer Actions */}
          <div className="hero-nb-footer">
            <a href="#latest-events" className="hero-nb-action-secondary">
              <i className="fas fa-calendar-check mr-1.5" aria-hidden="true"></i>
              Campus Events
            </a>
            {onOpenAdmission ? (
              <button
                type="button"
                onClick={onOpenAdmission}
                className="hero-nb-action-primary btn-shine"
              >
                <i className="fas fa-user-graduate mr-1.5" aria-hidden="true"></i>
                Apply 2026–27
              </button>
            ) : (
              <a href="#academics" className="hero-nb-action-primary btn-shine">
                <i className="fas fa-user-graduate mr-1.5" aria-hidden="true"></i>
                Admissions Desk
              </a>
            )}
          </div>
        </aside>
      </div>

      {/* Circular Detail Modal */}
      {selectedNotice && (
        <div
          className="hero-nb-modal-backdrop"
          onClick={() => setSelectedNotice(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="hero-nb-modal-title"
        >
          <div
            className="hero-nb-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hero-nb-modal-header">
              <div>
                <span className="hero-nb-modal-kicker">
                  OFFICIAL SCHOOL CIRCULAR • {selectedNotice.id.toUpperCase()}
                </span>
                <h3 id="hero-nb-modal-title" className="hero-nb-modal-title">
                  {selectedNotice.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="hero-nb-modal-close"
                aria-label="Close circular preview"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>

            <div className="hero-nb-modal-body">
              <div className="hero-nb-modal-badges">
                <span className="hero-nb-modal-pill">
                  <i className="far fa-calendar-alt mr-1.5 text-amber-300" aria-hidden="true"></i>
                  {selectedNotice.date}
                </span>
                <span className="hero-nb-modal-pill">
                  <i className="fas fa-tag mr-1.5 text-sky-300" aria-hidden="true"></i>
                  {selectedNotice.category}
                </span>
                {selectedNotice.fileSize && (
                  <span className="hero-nb-modal-pill">
                    <i className="far fa-file-pdf mr-1.5 text-rose-300" aria-hidden="true"></i>
                    {selectedNotice.fileSize}
                  </span>
                )}
              </div>

              <p className="hero-nb-modal-text">{selectedNotice.description}</p>

              <div className="hero-nb-modal-signoff">
                <div>
                  <strong>Office of the Principal</strong>
                  <span>St. Michael&apos;s Higher Secondary School, Umsning</span>
                </div>
                <span className="hero-nb-modal-stamp">MBOSE • 01961</span>
              </div>
            </div>

            <div className="hero-nb-modal-footer">
              <a
                href="#hub"
                onClick={() => setSelectedNotice(null)}
                className="hero-nb-action-secondary"
              >
                <i className="fas fa-th-large mr-1.5" aria-hidden="true"></i>
                Open Operations Hub
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="hero-nb-action-primary"
              >
                <i className="fas fa-print mr-1.5" aria-hidden="true"></i>
                Print Circular
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
