import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import type { AppPageId } from './InstitutionalSection';

interface StudentWorkSectionProps {
  onNavigatePage?: (page: AppPageId) => void;
}

type GalleryCategory = 'all' | 'merit' | 'fieldwork' | 'sports' | 'culture';

interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  dateTag: string;
  location: string;
  caption: string;
  img: string;
  theme: 'blue' | 'orange' | 'emerald' | 'purple' | 'crimson' | 'amber';
  iconClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'graduating-batch-portrait',
    title: 'Graduating Batch & Faculty Honours Portrait',
    category: 'merit',
    categoryLabel: 'State Merit & Honours',
    dateTag: 'Academic Session 2025–26',
    location: 'St. Michael Archangel Steps',
    caption:
      'Graduating Higher Secondary scholars in traditional Khasi attire and formal blazer dress alongside the Principal, Missionary Sisters, and faculty with championship shields.',
    img: SCHOOL_IMAGES.graduatingBatch,
    theme: 'blue',
    iconClass: 'fas fa-user-graduate',
  },
  {
    id: 'state-ceremony-felicitation',
    title: 'State-Level SSLC Topper Felicitation Ceremony',
    category: 'merit',
    categoryLabel: 'State Merit & Honours',
    dateTag: 'MBOSE State Rank #8',
    location: 'State Auditorium, Meghalaya',
    caption:
      'State dignitaries felicitating St. Michael’s SSLC State Merit holder Ms. Darihunlangoshisha Rani (577/600, 96.17%) with the official citation and cash award.',
    img: SCHOOL_IMAGES.stateCeremony,
    theme: 'orange',
    iconClass: 'fas fa-trophy',
  },
  {
    id: 'geography-class-xii-fieldwork',
    title: 'Class XII Geography Field Survey & Research',
    category: 'fieldwork',
    categoryLabel: 'Academic Fieldwork',
    dateTag: 'HSSLC Practical Curriculum',
    location: 'Ri-Bhoi District Field Station',
    caption:
      'Senior Secondary Geography scholars and faculty mentors conducting on-site terrain, settlement, and socio-economic survey work across Ri-Bhoi District.',
    img: SCHOOL_IMAGES.geographyFieldwork,
    theme: 'emerald',
    iconClass: 'fas fa-compass',
  },
  {
    id: 'panoramic-morning-assembly',
    title: '2,000-Scholar Morning Assembly Formation',
    category: 'sports',
    categoryLabel: 'Assembly & Discipline',
    dateTag: 'Daily • 8:15 AM Sharp',
    location: 'Central Campus Courtyard',
    caption:
      'A panoramic view of our disciplined morning assembly with students lined up in crisp rows across the pine-ringed Umsning campus courtyard.',
    img: SCHOOL_IMAGES.panoramicAssembly,
    theme: 'purple',
    iconClass: 'fas fa-users',
  },
  {
    id: 'green-house-champions',
    title: 'National Sports Day — House Medalists',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    dateTag: 'National Sports Day',
    location: 'Main Athletics Arena',
    caption:
      'Green and Teal House athletes proudly displaying their National Sports Day medals and merit certificates alongside their physical education mentor.',
    img: SCHOOL_IMAGES.sportsGreenChampions,
    theme: 'emerald',
    iconClass: 'fas fa-medal',
  },
  {
    id: 'cultural-troupe-courtyard',
    title: 'Annual Cultural Dance & Choral Ensemble',
    category: 'culture',
    categoryLabel: 'Culture & Choir',
    dateTag: 'Annual Cultural Fest',
    location: 'Amphitheatre Courtyard',
    caption:
      'Students performing a synchronized cultural dance and choral presentation in the central courtyard surrounded by cheering house galleries.',
    img: SCHOOL_IMAGES.culturalTroupe,
    theme: 'crimson',
    iconClass: 'fas fa-music',
  },
  {
    id: 'award-citation-handover',
    title: 'Merit Scholarship & Rs. 30,000 Award Handover',
    category: 'merit',
    categoryLabel: 'State Merit & Honours',
    dateTag: 'Board Excellence Honours',
    location: 'Official Felicitation Stage',
    caption:
      'Presentation of the Rs. 30,000 state excellence cheque and trophy honouring St. Michael’s consistent 100% MBOSE board pass legacy.',
    img: SCHOOL_IMAGES.awardPresentation,
    theme: 'amber',
    iconClass: 'fas fa-award',
  },
  {
    id: 'botanical-excursion-team',
    title: 'Environmental & Botanical Study Excursion',
    category: 'fieldwork',
    categoryLabel: 'Academic Fieldwork',
    dateTag: 'Experiential Learning',
    location: 'Meghalaya Ecological Belt',
    caption:
      'Science and Humanities students documenting local flora, watershed patterns, and conservation practices during guided outdoor fieldwork.',
    img: SCHOOL_IMAGES.fieldwork,
    theme: 'blue',
    iconClass: 'fas fa-seedling',
  },
  {
    id: 'certificate-winners-lineup',
    title: 'Inter-House Literary & Academic Certificate Winners',
    category: 'merit',
    categoryLabel: 'State Merit & Honours',
    dateTag: 'Annual Prize Distribution',
    location: 'Assembly Forecourt',
    caption:
      'Merit certificate and shield recipients honoured in front of the entire student body for excellence in debate, quiz, science exhibition, and board subjects.',
    img: SCHOOL_IMAGES.certificateWinners,
    theme: 'orange',
    iconClass: 'fas fa-certificate',
  },
  {
    id: 'school-choir-harmony',
    title: 'St. Michael’s Polyphonic School Choir',
    category: 'culture',
    categoryLabel: 'Culture & Choir',
    dateTag: 'Liturgical & Fest Choir',
    location: 'Main Stage Pavilion',
    caption:
      'Our celebrated student choir performing four-part sacred hymns, school anthems, and Khasi choral compositions during special feast day celebrations.',
    img: SCHOOL_IMAGES.choir,
    theme: 'purple',
    iconClass: 'fas fa-microphone-alt',
  },
  {
    id: 'inter-house-track-relay',
    title: 'Annual Athletics & Track Championship Squad',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    dateTag: 'Annual Sports Meet',
    location: 'St. Michael’s Sports Ground',
    caption:
      'Track and field champions from Blue, Green, Yellow, and Red houses celebrating victory on the school athletic field.',
    img: SCHOOL_IMAGES.sports,
    theme: 'crimson',
    iconClass: 'fas fa-running',
  },
  {
    id: 'eco-plantation-stewards',
    title: 'World Environment Day Sapling Plantation',
    category: 'culture',
    categoryLabel: 'Culture & Choir',
    dateTag: 'Green Campus Mission',
    location: 'Umsning Campus Perimeter',
    caption:
      'Eco Club volunteers nurturing native saplings to preserve the lush pine and subtropical greenery of our 15-acre Ri-Bhoi campus.',
    img: SCHOOL_IMAGES.environment,
    theme: 'emerald',
    iconClass: 'fas fa-tree',
  },
];

const FILTER_TABS: { id: GalleryCategory; label: string; iconClass: string }[] = [
  { id: 'all', label: 'All Campus Photos (12)', iconClass: 'fas fa-camera' },
  { id: 'merit', label: 'State Merit & Awards', iconClass: 'fas fa-award' },
  { id: 'fieldwork', label: 'Fieldwork & Research', iconClass: 'fas fa-compass' },
  { id: 'sports', label: '4-House Sports & Drill', iconClass: 'fas fa-trophy' },
  { id: 'culture', label: 'Cultural, Choir & Eco', iconClass: 'fas fa-music' },
];

const INITIAL_VISIBLE_COUNT = 6; // 2 rows of 3 cards

export const StudentWorkSection: React.FC<StudentWorkSectionProps> = ({ onNavigatePage }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const visibleItems = useMemo(() => {
    return showAll ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredItems, showAll]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activePhoto = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="student-work-gallery-section" id="gallery">
      <div className="container">
        {/* Vibrant Gallery Header */}
        <motion.div
          className="work-gallery-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="work-gallery-title-group">
            <span className="section-sub-badge work-eyebrow-pill">
              <i className="fas fa-images mr-1.5" aria-hidden="true"></i>
              INNOVATION &amp; DISCIPLINE IN ACTION • AUTHENTIC CAMPUS ARCHIVE
            </span>
            <h2 className="student-work-heading">» Campus Gallery &amp; Student Work</h2>
            <p className="student-work-subtext">
              Explore verified photographs from our state merit felicitations, Class XII Geography fieldwork,
              2,000-scholar morning assemblies, National Sports Day championships, and Khasi cultural festivals.
            </p>
          </div>

          {/* Interactive Colour-Coded Filter Pills */}
          <div className="work-filter-bar" role="tablist" aria-label="Campus Gallery Categories">
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`work-filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setLightboxIndex(null);
                    setShowAll(false);
                  }}
                >
                  <i className={tab.iconClass} aria-hidden="true"></i>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Framed 3-Column Photo Grid (Shows 2 Rows Initially with Show More Toggle) */}
        <motion.div className="work-gallery-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`work-gallery-card work-theme-${item.theme}`}
              >
                <div
                  className="work-card-media"
                  onClick={() => setLightboxIndex(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Inspect ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(idx);
                    }
                  }}
                >
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
                  <span className="work-card-category-badge">
                    <i className={`${item.iconClass} mr-1.5`} aria-hidden="true"></i>
                    {item.categoryLabel}
                  </span>
                  <button
                    type="button"
                    className="work-card-zoom-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(idx);
                    }}
                    aria-label={`Enlarge ${item.title}`}
                  >
                    <i className="fas fa-expand" aria-hidden="true"></i> Read More
                  </button>
                </div>

                <div className="work-card-body">
                  <div className="work-card-meta">
                    <span>
                      <i className="fas fa-calendar-alt text-[#1d4ed8]" aria-hidden="true"></i> {item.dateTag}
                    </span>
                    <span>
                      <i className="fas fa-map-marker-alt text-[#ea580c]" aria-hidden="true"></i> {item.location}
                    </span>
                  </div>
                  <h3 className="work-card-title">{item.title}</h3>
                  <p className="work-card-caption">{item.caption}</p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigatePage) {
                          onNavigatePage('gallery');
                        } else {
                          setLightboxIndex(idx);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0c4a8a] hover:text-[#ea580c] transition-colors cursor-pointer"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Read More / View Full Gallery Page Button */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigatePage?.('gallery')}
            className="inline-flex min-h-11 items-center gap-2.5 rounded-xl bg-[#0c4a8a] px-6 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#0c2d57] hover:-translate-y-0.5 cursor-pointer"
          >
            <i className="fas fa-images text-amber-300" aria-hidden="true"></i>
            <span>Show More</span>
            <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox with Next / Previous Navigation */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
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
                onClick={() => setLightboxIndex(null)}
                aria-label="Close gallery preview"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>

              <div className="gallery-lightbox-stage">
                <button
                  type="button"
                  className="gallery-lightbox-nav prev"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
                  }
                  aria-label="Previous photo"
                >
                  <i className="fas fa-chevron-left" aria-hidden="true"></i>
                </button>
                <img src={activePhoto.img} alt={activePhoto.title} />
                <button
                  type="button"
                  className="gallery-lightbox-nav next"
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
                  aria-label="Next photo"
                >
                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>

              <div className="gallery-lightbox-footer">
                <div>
                  <span className="gallery-lightbox-tag">
                    <i className={`${activePhoto.iconClass} mr-1`} aria-hidden="true"></i>
                    {activePhoto.categoryLabel}
                  </span>
                  <h4>{activePhoto.title}</h4>
                  <p>{activePhoto.caption}</p>
                </div>
                <span className="gallery-lightbox-counter">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
