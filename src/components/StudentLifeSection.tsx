import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Music,
  Trophy,
  Leaf,
  Award,
  HeartHandshake,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
} from 'lucide-react';
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
  icon: React.ReactNode;
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
    highlights: ['School Captains & House Prefects', 'Daily Moral & Civic Reflections', 'Inter-House Turnout Inspection'],
    img: SCHOOL_IMAGES.assemblyAddress,
    theme: 'blue',
    icon: <Award size={18} />,
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
    highlights: ['Traditional Khasi Folk Presentations', 'Inter-Class Drama & Elocution', 'Annual Cultural Pageant'],
    img: SCHOOL_IMAGES.culture,
    theme: 'orange',
    icon: <Music size={18} />,
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
    highlights: ['4-House Championship Shield', 'District & State Level Athletes', 'Dedicated Physical Education Mentors'],
    img: SCHOOL_IMAGES.sportsBlueChampions,
    theme: 'emerald',
    icon: <Trophy size={18} />,
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
    highlights: ['Four-Part School Choir', 'House Dance & Music Ensembles', 'Teachers’ Day & Foundation Day Shows'],
    img: SCHOOL_IMAGES.courtyardDance,
    theme: 'purple',
    icon: <Users size={18} />,
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
    highlights: ['Annual Student Sapling Drive', 'Plastic-Free Campus Initiative', 'Meghalaya Biodiversity Awareness'],
    img: SCHOOL_IMAGES.campusEcoDrive,
    theme: 'crimson',
    icon: <Leaf size={18} />,
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
    highlights: ['Anti-Tobacco & Health Campaigns', 'Hand-Painted Poster Exhibitions', 'Ri-Bhoi Community Service'],
    img: SCHOOL_IMAGES.posterCampaign,
    theme: 'amber',
    icon: <HeartHandshake size={18} />,
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
              <strong>4 Houses</strong>
              <span>Blue • Green • Yellow • Red</span>
            </div>
            <div className="life-kpi-chip life-kpi-orange">
              <strong>2,000+</strong>
              <span>Active Campus Scholars</span>
            </div>
            <div className="life-kpi-chip life-kpi-emerald">
              <strong>15+ Clubs</strong>
              <span>Sports, Choir, Eco & Arts</span>
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
            <span className="life-featured-ribbon">CAMPUS FORMATION SPOTLIGHT</span>
            <button type="button" className="life-zoom-trigger" aria-label="View full photo">
              <Maximize2 size={16} /> View Full Photo
            </button>
          </div>

          <div className="life-featured-content">
            <div className="life-house-badges">
              <span className="house-pill house-blue">Blue House</span>
              <span className="house-pill house-green">Green House</span>
              <span className="house-pill house-yellow">Yellow House</span>
              <span className="house-pill house-red">Red House</span>
            </div>
            <h3>» The Four-House Brotherhood &amp; Morning Drill</h3>
            <p>
              Pictured on our pine-ringed main ground in Umsning: all four school houses assemble in vibrant colour
              formations for synchronized physical drill, house inspections, and inter-house championship preparation.
            </p>
            <div className="life-featured-meta">
              <span>
                <Calendar size={15} /> Weekly House Drill &amp; Annual Sports
              </span>
              <span>
                <MapPin size={15} /> St. Michael&apos;s Main Ground, Umsning
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
                    {item.icon}
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
                  <Maximize2 size={15} />
                </button>
              </div>

              <div className="life-card-body">
                <div className="life-card-meta-row">
                  <span>
                    <Calendar size={13} /> {item.schedule}
                  </span>
                  <span>
                    <MapPin size={13} /> {item.location}
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
                <X size={20} />
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
                  <ChevronLeft size={22} />
                </button>
                <img src={activeItem.img} alt={activeItem.title} />
                <button
                  type="button"
                  className="gallery-lightbox-nav next"
                  onClick={() => setActiveIndex((activeIndex + 1) % LIFE_PILLARS.length)}
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              <div className="gallery-lightbox-footer">
                <div>
                  <span className="gallery-lightbox-tag">{activeItem.category}</span>
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
                <X size={20} />
              </button>
              <div className="gallery-lightbox-stage">
                <img
                  src={SCHOOL_IMAGES.houseAssembly}
                  alt="4-House Mass Assembly at St. Michael's Higher Secondary School"
                />
              </div>
              <div className="gallery-lightbox-footer">
                <div>
                  <span className="gallery-lightbox-tag">4-House Formation</span>
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
