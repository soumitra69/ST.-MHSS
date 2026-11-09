import React, { useEffect, useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

type VoiceCategory = 'All' | 'State Rankers' | 'University Alumni' | 'Parents & Community';

interface FamilyVoiceItem {
  id: number;
  name: string;
  role: string;
  batch: string;
  category: Exclude<VoiceCategory, 'All'>;
  categoryBadge: string;
  company: string;
  achievementBadge: string;
  featuredImage: string;
  avatar: string;
  quote: string;
  highlights: string[];
  themeClass: string;
  iconClass: string;
}

const FAMILY_VOICES: FamilyVoiceItem[] = [
  {
    id: 0,
    name: 'Sanidahün Nongkhlaw',
    role: 'MBOSE SSLC State Top 20 Merit Holder',
    batch: 'Batch of 2026 • Senior Secondary Science',
    category: 'State Rankers',
    categoryBadge: 'MBOSE State Top 20',
    company: 'Meghalaya State Merit Honoree',
    achievementBadge: '₹20,000 Endowment Scholar',
    featuredImage: SCHOOL_IMAGES.awardPresentation,
    avatar: SCHOOL_IMAGES.stateCeremony,
    quote:
      "Studying at St. Michael's Umsning gave me strong moral grounding and the daily academic discipline to compete at the state level. The personal mentorship from our faculty and the ₹20,000 SSLC Merit Scholarship inspired me to pursue Senior Secondary Science with confidence.",
    highlights: [
      'MBOSE SSLC State Merit Rank Holder',
      '₹20,000 Cash Award & 100% Tuition Waiver',
      '96.4% Distinction in Science & Mathematics',
    ],
    themeClass: 'voice-theme-blue',
    iconClass: 'fas fa-trophy',
  },
  {
    id: 1,
    name: 'Marcus Kharsyntiew',
    role: 'Higher Secondary Science Head Boy',
    batch: 'Batch of 2025 • B.Tech Engineering',
    category: 'University Alumni',
    categoryBadge: 'Engineering Alumni',
    company: 'NEHU Shillong (B.Tech)',
    achievementBadge: 'Campus Head Boy 2025',
    featuredImage: SCHOOL_IMAGES.certificateWinners,
    avatar: SCHOOL_IMAGES.certificateWinners,
    quote:
      "From synchronized morning drill on the amphitheatre steps to intensive practical sessions in the Physics, Chemistry, and Computer laboratories, St. Michael's formed me as a disciplined problem-solver ready for university engineering.",
    highlights: [
      '94.6% PCM Aggregate in MBOSE HSSLC',
      'School Prefect & Inter-House Debate Winner',
      'Selected for B.Tech at NEHU Shillong',
    ],
    themeClass: 'voice-theme-orange',
    iconClass: 'fas fa-microchip',
  },
  {
    id: 2,
    name: 'Grace Lyngdoh',
    role: 'House Captain & Campus Choral Lead',
    batch: 'Batch of 2024 • Honours Scholar',
    category: 'University Alumni',
    categoryBadge: 'Honours Alumni',
    company: "St. Anthony's College, Shillong",
    achievementBadge: 'Best All-Rounder Award',
    featuredImage: SCHOOL_IMAGES.culturalTroupe,
    avatar: SCHOOL_IMAGES.culturalTroupe,
    quote:
      "The spirit of community, reverence, and service instilled by our Principal and teachers continues to guide me in college. St. Michael's is more than an academic institution—it is a family that nurtures every student's God-given gifts.",
    highlights: [
      'Yellow House Captain & Choral Soloist',
      'State-Level Science & Arts Exhibition Winner',
      "Honours Scholar at St. Anthony's College",
    ],
    themeClass: 'voice-theme-emerald',
    iconClass: 'fas fa-user-graduate',
  },
  {
    id: 3,
    name: 'Daiakmen I Ka Talang',
    role: 'Higher Secondary Arts Distinction Holder',
    batch: 'Batch of 2023 • Public Policy & UPSC Track',
    category: 'State Rankers',
    categoryBadge: 'Arts Distinction',
    company: 'Civil Services Aspirant & Gold Medalist',
    achievementBadge: '95.2% Humanities Topper',
    featuredImage: SCHOOL_IMAGES.sportsGreenChampions,
    avatar: SCHOOL_IMAGES.sportsGreenChampions,
    quote:
      "Our geography field excursions across Ri-Bhoi and weekly parliamentary debates taught me how to think critically about society. St. Michael's engraved in us the motto 'Excelsior'—to always strive higher with courage and integrity.",
    highlights: [
      'Subject Topper in Political Science & History',
      'Lead Coordinator — Eco & Fieldwork Club',
      'University Gold Medalist in Humanities',
    ],
    themeClass: 'voice-theme-purple',
    iconClass: 'fas fa-landmark',
  },
  {
    id: 4,
    name: 'Dr. Lamboklang Syiemlieh',
    role: 'Parent of Class XII Science & Class VIII Scholars',
    batch: 'Umsning Town • Parent-Teacher Council',
    category: 'Parents & Community',
    categoryBadge: 'Parent Testimony',
    company: 'Parent-Teacher Executive Representative',
    achievementBadge: '12+ Years St. Michael’s Parent',
    featuredImage: SCHOOL_IMAGES.graduatingBatch,
    avatar: SCHOOL_IMAGES.graduatingBatch,
    quote:
      "As parents in Ri-Bhoi District, we wanted a school that combines strict safety and character formation with strong MBOSE board preparation. Watching both of my children flourish academically and morally at St. Michael's has been our family's greatest blessing.",
    highlights: [
      'Safe NH-6 Campus & GPS-Monitored Bus Fleet',
      'Transparent Term Fee Structure & Parent Portals',
      'Dedicated Remedial & Board Coaching Support',
    ],
    themeClass: 'voice-theme-crimson',
    iconClass: 'fas fa-heart',
  },
  {
    id: 5,
    name: 'Banrilang Marbaniang',
    role: 'HSSLC Science Distinction & Bio-Science Lead',
    batch: 'Batch of 2025 • Pre-Medical Scholar',
    category: 'State Rankers',
    categoryBadge: 'Science Distinction',
    company: 'Medical Entrance Merit Qualifier',
    achievementBadge: '97.0% Biology & Chemistry',
    featuredImage: SCHOOL_IMAGES.studentLeaders,
    avatar: SCHOOL_IMAGES.studentLeaders,
    quote:
      "The biology specimen lab and structured board test series at St. Michael's bridged the gap between textbook theory and competitive medical entrance exams. Every teacher went the extra mile to clear our doubts after class.",
    highlights: [
      '97.0% Score in MBOSE HSSLC Biology',
      'President — St. Michael’s Eco-Science Club',
      'State Pre-Medical Merit Scholarship Recipient',
    ],
    themeClass: 'voice-theme-amber',
    iconClass: 'fas fa-dna',
  },
];

const CATEGORIES: { label: VoiceCategory; icon: string }[] = [
  { label: 'All', icon: 'fas fa-users' },
  { label: 'State Rankers', icon: 'fas fa-trophy' },
  { label: 'University Alumni', icon: 'fas fa-user-graduate' },
  { label: 'Parents & Community', icon: 'fas fa-heart' },
];

export const AlumniSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VoiceCategory>('All');
  const [selectedId, setSelectedId] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const filteredVoices =
    activeCategory === 'All'
      ? FAMILY_VOICES
      : FAMILY_VOICES.filter((item) => item.category === activeCategory);

  const currentVoice =
    FAMILY_VOICES.find((item) => item.id === selectedId) ||
    filteredVoices[0] ||
    FAMILY_VOICES[0];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setSelectedId((prevId) => {
        const currentIndex = filteredVoices.findIndex((v) => v.id === prevId);
        const nextIndex = (currentIndex + 1) % filteredVoices.length;
        return filteredVoices[nextIndex]?.id ?? 0;
      });
    }, 6500);
    return () => window.clearInterval(timer);
  }, [filteredVoices, isPaused]);

  const handleCategoryChange = (category: VoiceCategory) => {
    setActiveCategory(category);
    const nextList =
      category === 'All'
        ? FAMILY_VOICES
        : FAMILY_VOICES.filter((item) => item.category === category);
    if (nextList.length > 0 && !nextList.some((item) => item.id === selectedId)) {
      setSelectedId(nextList[0].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = filteredVoices.findIndex((v) => v.id === currentVoice.id);
    const prevIndex = (currentIndex - 1 + filteredVoices.length) % filteredVoices.length;
    setSelectedId(filteredVoices[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = filteredVoices.findIndex((v) => v.id === currentVoice.id);
    const nextIndex = (currentIndex + 1) % filteredVoices.length;
    setSelectedId(filteredVoices[nextIndex].id);
  };

  const currentPosition =
    filteredVoices.findIndex((v) => v.id === currentVoice.id) + 1 || 1;

  return (
    <section
      className="alumini family-speaks-section"
      id="alumni"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Executive Section Header + Trust KPI Strip */}
        <div className="family-speaks-header" data-aos="fade-up" data-aos-duration="800">
          <div className="family-header-left">
            <span className="family-eyebrow-pill">
              <i className="fas fa-comments mr-1.5" aria-hidden="true"></i>
              VOICES OF EXCELSIOR &bull; SCHOLARS, PARENTS &amp; ALUMNI
            </span>
            <h2 className="vision-serif-heading family-main-heading">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              ST. MICHAEL&apos;S UMSNING FAMILY SPEAKS
            </h2>
            <p className="family-header-subtitle">
              Hear directly from our MBOSE State Top 20 Merit Rankers, university engineering and
              honours scholars, and proud Ri-Bhoi parents on how St. Michael&apos;s shapes character,
              scientific curiosity, and lifelong leadership.
            </p>
          </div>

          <div className="family-kpi-strip" data-aos="fade-left" data-aos-delay="120">
            <div className="family-kpi-card kpi-blue">
              <div className="family-kpi-icon">
                <i className="fas fa-star" aria-hidden="true"></i>
              </div>
              <div>
                <strong>4.9 / 5.0</strong>
                <span>Parent &amp; Scholar Trust</span>
              </div>
            </div>
            <div className="family-kpi-card kpi-orange">
              <div className="family-kpi-icon">
                <i className="fas fa-medal" aria-hidden="true"></i>
              </div>
              <div>
                <strong>Top 20</strong>
                <span>MBOSE State Merit Legacy</span>
              </div>
            </div>
            <div className="family-kpi-card kpi-emerald">
              <div className="family-kpi-icon">
                <i className="fas fa-user-graduate" aria-hidden="true"></i>
              </div>
              <div>
                <strong>1961–2026</strong>
                <span>65 Years of Alumni Impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Bar & Carousel Controls */}
        <div className="family-toolbar" data-aos="fade-up" data-aos-delay="150">
          <div className="family-filter-pills" role="tablist" aria-label="Filter Family Testimonials">
            {CATEGORIES.map((cat) => {
              const count =
                cat.label === 'All'
                  ? FAMILY_VOICES.length
                  : FAMILY_VOICES.filter((v) => v.category === cat.label).length;
              return (
                <button
                  key={cat.label}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.label}
                  className={`family-filter-btn ${activeCategory === cat.label ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.label)}
                >
                  <i className={cat.icon} aria-hidden="true"></i>
                  <span>{cat.label}</span>
                  <span className="family-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="family-nav-controls">
            <span className="family-slide-counter">
              <i className="fas fa-layer-group mr-1 text-[#ea580c]" aria-hidden="true"></i>
              Voice <strong>{String(currentPosition).padStart(2, '0')}</strong> /{' '}
              {String(filteredVoices.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="family-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous family testimonial"
            >
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="family-arrow-btn"
              onClick={handleNext}
              aria-label="Next family testimonial"
            >
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Featured Spotlight Testimonial Showcase Card */}
        <div
          className={`family-spotlight-card ${currentVoice.themeClass}`}
          key={currentVoice.id}
          data-aos="zoom-in"
          data-aos-duration="750"
        >
          {/* Left Visual Column */}
          <div className="family-spotlight-media">
            <img
              src={currentVoice.featuredImage}
              alt={currentVoice.name}
              loading="lazy"
              decoding="async"
            />
            <div className="family-media-top-badges">
              <span className="family-media-cat-pill">
                <i className={currentVoice.iconClass} aria-hidden="true"></i>
                {currentVoice.categoryBadge}
              </span>
              <span className="family-media-verified-pill">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                Verified Voice
              </span>
            </div>
            <div className="family-media-bottom-overlay">
              <span className="family-media-award">
                <i className="fas fa-award" aria-hidden="true"></i>
                {currentVoice.achievementBadge}
              </span>
              <h4>{currentVoice.name}</h4>
              <p>{currentVoice.batch}</p>
            </div>
          </div>

          {/* Right Testimonial Content Column */}
          <div className="family-spotlight-body">
            <div className="family-spotlight-top-row">
              <div className="family-star-rating" aria-label="5 out of 5 stars">
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <span>5.0 Institutional Excellence</span>
              </div>
              <span className="family-affiliation-tag">
                <i className="fas fa-university" aria-hidden="true"></i>
                {currentVoice.company}
              </span>
            </div>

            <blockquote className="family-spotlight-quote">
              <i className="fas fa-quote-left family-quote-mark" aria-hidden="true"></i>
              <p>{currentVoice.quote}</p>
            </blockquote>

            {/* Concrete Outcome Highlights */}
            <div className="family-highlights-box">
              <span className="family-highlights-title">
                <i className="fas fa-bolt mr-1.5 text-[#ea580c]" aria-hidden="true"></i>
                Key Milestones &amp; Campus Impact
              </span>
              <div className="family-highlights-grid">
                {currentVoice.highlights.map((point) => (
                  <div key={point} className="family-highlight-chip">
                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaker Footer Bar */}
            <div className="family-spotlight-footer">
              <div className="family-speaker-meta">
                <img
                  src={currentVoice.avatar}
                  alt={currentVoice.name}
                  className="family-speaker-avatar"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3>{currentVoice.name}</h3>
                  <p className="family-speaker-role">{currentVoice.role}</p>
                  <span className="family-speaker-batch">{currentVoice.batch}</span>
                </div>
              </div>

              <div className="family-spotlight-actions">
                <a href="#academics" className="family-explore-btn">
                  <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                  Explore Streams
                </a>
                <a href="#toppers" className="family-merit-btn">
                  <i className="fas fa-trophy" aria-hidden="true"></i>
                  View Merit Roll
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Card Multi-Colour Family Voices Grid */}
        <div className="family-voices-grid">
          {filteredVoices.map((person, index) => {
            const isSelected = person.id === currentVoice.id;
            return (
              <article
                key={person.id}
                className={`family-voice-card ${person.themeClass} ${
                  isSelected ? 'active-voice-card' : ''
                }`}
                onClick={() => setSelectedId(person.id)}
                data-aos="fade-up"
                data-aos-delay={80 * (index + 1)}
              >
                <div className="family-card-top">
                  <span className="family-card-badge">
                    <i className={person.iconClass} aria-hidden="true"></i>
                    {person.categoryBadge}
                  </span>
                  {isSelected ? (
                    <span className="family-card-live-pill">
                      <i className="fas fa-circle" aria-hidden="true"></i>
                      Spotlit Above
                    </span>
                  ) : (
                    <span className="family-card-stars" aria-hidden="true">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  )}
                </div>

                <div className="family-card-speaker">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="family-card-avatar"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="family-card-speaker-info">
                    <h4>{person.name}</h4>
                    <p>{person.role}</p>
                    <span>
                      <i className="fas fa-award" aria-hidden="true"></i>
                      {person.company}
                    </span>
                  </div>
                </div>

                <p className="family-card-excerpt">&ldquo;{person.quote}&rdquo;</p>

                <div className="family-card-footer">
                  <span className="family-card-milestone">
                    <i className="fas fa-medal" aria-hidden="true"></i>
                    {person.achievementBadge}
                  </span>
                  <button
                    type="button"
                    className="family-card-read-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(person.id);
                    }}
                  >
                    {isSelected ? 'Viewing Now' : 'Read Full Story'}
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
