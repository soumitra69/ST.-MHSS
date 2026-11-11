import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

interface LifePillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  schedule: string;
  location: string;
  description: string;
  highlights: string[];
  img: string;
  theme: 'blue' | 'orange' | 'emerald' | 'purple' | 'crimson' | 'amber';
  iconClass: string;
}

const LIFE_PILLARS: LifePillarItem[] = [
  {
    id: 'leadership-assembly',
    number: '01',
    title: 'Student Council & Morning Assembly',
    subtitle: 'Public Speaking, Discipline & Prefect Leadership',
    category: 'Leadership & Values',
    schedule: 'Daily • 8:15 AM',
    location: 'Main Assembly Courtyard',
    description:
      'Every morning begins with prayer, scripture reading, moral reflections, and student-led addresses from the lectern—building poise, confidence, and ethical leadership.',
    highlights: [
      'School Captains & House Prefects',
      'Daily Moral & Civic Reflections',
      'Inter-House Turnout Inspection',
    ],
    img: SCHOOL_IMAGES.assemblyAddress,
    theme: 'blue',
    iconClass: 'fas fa-award',
  },
  {
    id: 'cultural-heritage',
    number: '02',
    title: 'Khasi Cultural Heritage & Arts',
    subtitle: 'Traditional Attire, Folk Dance & Literary Fest',
    category: 'Culture & Heritage',
    schedule: 'Annual Cultural Week',
    location: 'Central Amphitheatre',
    description:
      'Students celebrate the rich cultural heritage of Ri-Bhoi and Meghalaya in traditional Jainsem, Dhara, and Jymphong alongside classical and contemporary stage arts.',
    highlights: [
      'Traditional Khasi Folk Presentations',
      'Inter-Class Drama & Elocution',
      'Annual Cultural Pageant',
    ],
    img: SCHOOL_IMAGES.culture,
    theme: 'orange',
    iconClass: 'fas fa-music',
  },
  {
    id: 'sports-champions',
    number: '03',
    title: 'National Sports Day & Athletics',
    subtitle: 'Track, Basketball, Football & House Trophies',
    category: 'Sports & Fitness',
    schedule: 'Weekly PT & Annual Meet',
    location: 'Sports Ground & Courts',
    description:
      'Competitive four-house tournaments in football, basketball, relay sprints, and indoor games nurture physical endurance, teamwork, and true sportsmanship.',
    highlights: [
      '4-House Championship Shield',
      'District & State Level Athletes',
      'Dedicated Physical Education Mentors',
    ],
    img: SCHOOL_IMAGES.sportsBlueChampions,
    theme: 'emerald',
    iconClass: 'fas fa-trophy',
  },
  {
    id: 'courtyard-performances',
    number: '04',
    title: 'Choral Music & Courtyard Stage',
    subtitle: 'Multi-Part Choir, Choreography & Youth Talent',
    category: 'Performing Arts',
    schedule: 'Fridays & Special Assemblies',
    location: 'Archangel Courtyard Stage',
    description:
      'With amphitheatre steps surrounding our central court, scholars perform choral harmonies, ensemble dances, and instrumental tributes during school celebrations.',
    highlights: [
      'Four-Part School Choir',
      'House Dance & Music Ensembles',
      'Teachers’ Day & Foundation Day Shows',
    ],
    img: SCHOOL_IMAGES.courtyardDance,
    theme: 'purple',
    iconClass: 'fas fa-users',
  },
  {
    id: 'eco-stewardship',
    number: '05',
    title: 'Eco Club & Green Umsning Drive',
    subtitle: 'Sapling Plantation & Campus Biodiversity',
    category: 'Eco Stewardship',
    schedule: 'World Environment Month',
    location: 'Pine Belt & Botanical Zone',
    description:
      'Rooted in the lush hills of Umsning, our Eco Club leads hands-on sapling plantations, zero-plastic pledges, and botanical care across the 15-acre green campus.',
    highlights: [
      'Annual Student Sapling Drive',
      'Plastic-Free Campus Initiative',
      'Meghalaya Biodiversity Awareness',
    ],
    img: SCHOOL_IMAGES.campusEcoDrive,
    theme: 'crimson',
    iconClass: 'fas fa-leaf',
  },
  {
    id: 'civic-campaigns',
    number: '06',
    title: 'Civic & Health Awareness Rallies',
    subtitle: 'Poster Exhibitions, Red Ribbon & Community Care',
    category: 'Social Outreach',
    schedule: 'Monthly Outreach Drives',
    location: 'St. Michael Tower Plaza',
    description:
      'Students design hand-painted posters and lead community rallies on public health, anti-tobacco awareness, road safety, and rural literacy across Ri-Bhoi District.',
    highlights: [
      'Anti-Tobacco & Health Campaigns',
      'Hand-Painted Poster Exhibitions',
      'Ri-Bhoi Community Service',
    ],
    img: SCHOOL_IMAGES.posterCampaign,
    theme: 'amber',
    iconClass: 'fas fa-hand-holding-heart',
  },
];

export const StudentLifeSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
        setSpotlightOpen(false);
      } else if (activeIndex !== null && e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev !== null ? (prev + 1) % LIFE_PILLARS.length : null));
      } else if (activeIndex !== null && e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev !== null ? (prev - 1 + LIFE_PILLARS.length) % LIFE_PILLARS.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const activeItem = activeIndex !== null ? LIFE_PILLARS[activeIndex] : null;

  return (
    <section className="student life-vibrant-section" id="campus-life">
      <div className="container">
        {/* Vibrant Header Banner */}
        <motion.div
          className="life-section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="life-header-left">
            <span className="section-sub-badge life-eyebrow-pill">
              <i className="fas fa-star mr-1.5" aria-hidden="true"></i>
              HOLISTIC CAMPUS FORMATION • ESTD. 1961
            </span>
            <h2 className="student-heading">» Student Life at St. Michael&apos;s</h2>
            <p className="life-header-desc">
              Beyond board examinations, St. Michael&apos;s Higher Secondary School nurtures confident speakers,
              championship athletes, cultural ambassadors, and compassionate citizens across a vibrant 4-House campus.
            </p>
          </div>

          <div className="life-kpi-strip">
            <div className="life-kpi-chip life-kpi-blue">
              <strong>
                <i className="fas fa-shield-alt mr-1.5 text-amber-300" aria-hidden="true"></i>4 Houses
              </strong>
              <span>Blue • Green • Yellow • Red</span>
            </div>
            <div className="life-kpi-chip life-kpi-orange">
              <strong>
                <i className="fas fa-user-graduate mr-1.5 text-amber-200" aria-hidden="true"></i>2,000+
              </strong>
              <span>Active Campus Scholars</span>
            </div>
            <div className="life-kpi-chip life-kpi-emerald">
              <strong>
                <i className="fas fa-futbol mr-1.5 text-amber-200" aria-hidden="true"></i>15+ Clubs
              </strong>
              <span>Sports, Choir, Eco &amp; Arts</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Wide Panoramic Spotlight Card */}
        <motion.div
          className="life-featured-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div
            className="life-featured-media"
            onClick={() => setSpotlightOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Inspect 4-House Assembly photograph"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSpotlightOpen(true);
              }
            }}
          >
            <img
              src={SCHOOL_IMAGES.houseAssembly}
              alt="St. Michael's 4-House Mass Morning Assembly and Physical Drill"
              loading="lazy"
              decoding="async"
            />
            <span className="life-featured-ribbon">
              <i className="fas fa-flag mr-1.5" aria-hidden="true"></i>
              CAMPUS FORMATION SPOTLIGHT
            </span>
            <button type="button" className="life-zoom-trigger" aria-label="View full photo">
              <i className="fas fa-expand" aria-hidden="true"></i> Read More
            </button>
          </div>

          <div className="life-featured-content">
            <div className="life-house-badges">
              <span className="house-pill house-blue">
                <i className="fas fa-shield-alt mr-1" aria-hidden="true"></i>Blue House
              </span>
              <span className="house-pill house-green">
                <i className="fas fa-shield-alt mr-1" aria-hidden="true"></i>Green House
              </span>
              <span className="house-pill house-yellow">
                <i className="fas fa-shield-alt mr-1" aria-hidden="true"></i>Yellow House
              </span>
              <span className="house-pill house-red">
                <i className="fas fa-shield-alt mr-1" aria-hidden="true"></i>Red House
              </span>
            </div>
            <h3>» The Four-House Brotherhood &amp; Morning Drill</h3>
            <p>
              Pictured on our pine-ringed main ground in Umsning: all four school houses assemble in vibrant colour
              formations for synchronized physical drill, house inspections, and inter-house championship preparation.
            </p>
            <div className="life-featured-meta">
              <span>
                <i className="fas fa-calendar-alt text-[#ea580c]" aria-hidden="true"></i> Weekly House Drill &amp; Annual Sports
              </span>
              <span>
                <i className="fas fa-map-marker-alt text-[#d90429]" aria-hidden="true"></i> St. Michael&apos;s Main Ground, Umsning
              </span>
            </div>
          </div>
        </motion.div>

        {/* 6 Distinct, Properly Framed Colour-Coded Photo Cards */}
        <div className="life-cards-grid">
          {LIFE_PILLARS.map((item, idx) => (
            <motion.article
              key={item.id}
              className={`life-photo-card life-theme-${item.theme}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <div
                className="life-card-image-wrap"
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title} full photo`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
              >
                <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
                <div className="life-card-top-badges">
                  <span className="life-card-category-pill">
                    <i className={item.iconClass} aria-hidden="true"></i>
                    {item.category}
                  </span>
                  <span className="life-card-num-badge">{item.number}</span>
                </div>
                <button
                  type="button"
                  className="life-card-expand-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }}
                  aria-label={`Expand ${item.title}`}
                >
                  <i className="fas fa-expand" aria-hidden="true"></i>
                </button>
              </div>

              <div className="life-card-body">
                <div className="life-card-meta-row">
                  <span>
                    <i className="fas fa-calendar-alt text-[#1d4ed8]" aria-hidden="true"></i> {item.schedule}
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt text-[#ea580c]" aria-hidden="true"></i> {item.location}
                  </span>
                </div>
                <h3 className="life-card-title">{item.title}</h3>
                <p className="life-card-subtitle">{item.subtitle}</p>
                <p className="life-card-description">{item.description}</p>

                <ul className="life-card-highlights">
                  {item.highlights.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#0c4a8a] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-[#d97706] cursor-pointer"
                  >
                    <span>Read More</span>
                    <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox for 6 Pillar Cards */}
      <AnimatePresence>
        {activeItem && activeIndex !== null && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="gallery-lightbox-modal"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setActiveIndex(null)}
                aria-label="Close photo preview"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>

              <div className="gallery-lightbox-stage">
                <button
                  type="button"
                  className="gallery-lightbox-nav prev"
                  onClick={() =>
                    setActiveIndex((activeIndex - 1 + LIFE_PILLARS.length) % LIFE_PILLARS.length)
                  }
                  aria-label="Previous photo"
                >
                  <i className="fas fa-chevron-left" aria-hidden="true"></i>
                </button>
                <img src={activeItem.img} alt={activeItem.title} />
                <button
                  type="button"
                  className="gallery-lightbox-nav next"
                  onClick={() => setActiveIndex((activeIndex + 1) % LIFE_PILLARS.length)}
                  aria-label="Next photo"
                >
                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>

              <div className="gallery-lightbox-footer">
                <div>
                  <span className="gallery-lightbox-tag">
                    <i className={`${activeItem.iconClass} mr-1`} aria-hidden="true"></i>
                    {activeItem.category}
                  </span>
                  <h4>{activeItem.title}</h4>
                  <p>{activeItem.description}</p>
                </div>
                <span className="gallery-lightbox-counter">
                  {activeIndex + 1} / {LIFE_PILLARS.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {spotlightOpen && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSpotlightOpen(false)}
          >
            <motion.div
              className="gallery-lightbox-modal"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setSpotlightOpen(false)}
                aria-label="Close photo preview"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
              <div className="gallery-lightbox-stage">
                <img
                  src={SCHOOL_IMAGES.houseAssembly}
                  alt="4-House Mass Assembly at St. Michael's Higher Secondary School"
                />
              </div>
              <div className="gallery-lightbox-footer">
                <div>
                  <span className="gallery-lightbox-tag">
                    <i className="fas fa-flag mr-1" aria-hidden="true"></i>4-House Formation
                  </span>
                  <h4>The Four-House Brotherhood &amp; Morning Drill</h4>
                  <p>
                    Blue, Green, Yellow, and Red House students assembled on the main pine-ringed ground at St.
                    Michael&apos;s Higher Secondary School, Umsning.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
