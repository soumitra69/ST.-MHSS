import React, { useState, useEffect, useMemo } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO, GALLERY_ITEMS } from '../data/schoolData';

interface GalleryPageProps {
  onBack: () => void;
}

type GalleryFilter = 'All' | 'Campus' | 'Toppers' | 'Sports' | 'Cultural' | 'Environment';

const FILTER_OPTIONS: { id: GalleryFilter; label: string; icon: string }[] = [
  { id: 'All', label: 'All Campus Photos', icon: 'fas fa-th-large' },
  { id: 'Campus', label: 'Campus & Assembly', icon: 'fas fa-school' },
  { id: 'Toppers', label: 'State Merit & Awards', icon: 'fas fa-trophy' },
  { id: 'Sports', label: 'Sports & 4-House Drill', icon: 'fas fa-running' },
  { id: 'Cultural', label: 'Culture & Choir', icon: 'fas fa-music' },
  { id: 'Environment', label: 'Fieldwork & Eco Club', icon: 'fas fa-leaf' },
];

const EXTRA_GALLERY_PHOTOS = [
  {
    id: 'gal-extra-01',
    title: "St. Michael's Main Academic Building & Archangel Tower",
    category: 'Campus' as const,
    src: SCHOOL_IMAGES.schoolBuildingFront,
    description:
      'Front elevation of St. Michael’s Higher Secondary School, Umsning, featuring the iconic St. Michael the Archangel tower and sunlit classroom wings.',
  },
  {
    id: 'gal-extra-02',
    title: 'Panoramic 2,000-Scholar Morning Assembly Formation',
    category: 'Campus' as const,
    src: SCHOOL_IMAGES.panoramicAssembly,
    description:
      'Disciplined morning assembly across the pine-ringed main ground with all four Archangel Houses lined up for morning prayer and hymn.',
  },
  {
    id: 'gal-extra-03',
    title: 'Four-House Brotherhood Assembly on Campus Ground',
    category: 'Sports' as const,
    src: SCHOOL_IMAGES.houseAssembly,
    description:
      'Blue, Green, Yellow, and Red House scholars assembled in colour-coded house squadrons for physical drill and house inspection.',
  },
  {
    id: 'gal-extra-04',
    title: 'National Sports Day — Blue House Championship Winners',
    category: 'Sports' as const,
    src: SCHOOL_IMAGES.sportsBlueChampions,
    description:
      'Blue House track and field champions celebrating with trophies, shields, and merit certificates on National Sports Day.',
  },
  {
    id: 'gal-extra-05',
    title: 'National Sports Day — Green House Medalists',
    category: 'Sports' as const,
    src: SCHOOL_IMAGES.sportsGreenChampions,
    description:
      'Green House athletes proudly displaying their medals and certificates alongside their physical education mentor.',
  },
  {
    id: 'gal-extra-06',
    title: 'Graduating Higher Secondary Batch & Faculty Portrait',
    category: 'Toppers' as const,
    src: SCHOOL_IMAGES.graduatingBatch,
    description:
      'Senior secondary graduating scholars in traditional Khasi Jainsem and formal blazers posing with the Principal, Sisters, and faculty.',
  },
  {
    id: 'gal-extra-07',
    title: 'Inter-House Literary & Academic Certificate Winners',
    category: 'Toppers' as const,
    src: SCHOOL_IMAGES.certificateWinners,
    description:
      'Merit certificate and shield recipients honored for excellence in debate, quiz, science exhibition, and board subjects.',
  },
  {
    id: 'gal-extra-08',
    title: 'Courtyard Cultural Dance & Traditional Khasi Pageant',
    category: 'Cultural' as const,
    src: SCHOOL_IMAGES.courtyardDance,
    description:
      'Students performing traditional Khasi folk dance in the central amphitheatre courtyard surrounded by cheering house galleries.',
  },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const allPhotos = useMemo(() => {
    const combined = [...EXTRA_GALLERY_PHOTOS, ...GALLERY_ITEMS];
    const seenSrc = new Set<string>();
    return combined.filter((item) => {
      const key = `${item.title}-${item.src}`;
      if (seenSrc.has(key)) return false;
      seenSrc.add(key);
      return true;
    });
  }, []);

  const filteredPhotos = useMemo(() => {
    return allPhotos.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [allPhotos, selectedCategory, searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section
      id="gallery-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb & Back Navigation Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Back to Home Page</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
            <span className="text-[#0c4a8a]">Campus Archive</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Official Campus Photo Gallery</span>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-xl bg-amber-50 border border-amber-200 px-3.5 py-1.5 text-xs font-extrabold text-amber-900">
            <i className="fas fa-images text-[#d97706]" aria-hidden="true"></i>
            <span>{allPhotos.length} Verified Campus Photographs</span>
          </span>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                <i className="fas fa-camera-retro mr-1.5" aria-hidden="true"></i>
                Authentic Visual Archive • Umsning Campus
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                <i className="fas fa-landmark mr-1.5" aria-hidden="true"></i>
                Estd. {SCHOOL_INFO.established} • MBOSE-01961
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Campus Photo Gallery
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Explore high-resolution photographs documenting daily morning assemblies of 2,000+
              scholars, MBOSE State Top 20 felicitations by the Hon&apos;ble Chief Minister,
              4-House athletic championships, Khasi cultural festivals, and Class XII Geography
              fieldwork across Ri Bhoi District.
            </p>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div
          id="gallery-filter-bar"
          className="mt-8 scroll-mt-28 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center sm:p-5"
        >
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter gallery by category"
          >
            {FILTER_OPTIONS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedCategory(tab.id);
                    setLightboxIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0c4a8a] text-white shadow-md'
                      : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                  }`}
                >
                  <i
                    className={`${tab.icon} ${isActive ? 'text-amber-300' : 'text-[#d97706]'}`}
                    aria-hidden="true"
                  ></i>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[240px]">
            <i
              className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"
              aria-hidden="true"
            ></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gallery photos..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Photo Cards Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-base font-extrabold text-[#0c4a8a]">No matching photographs found</p>
            <p className="mt-1 text-xs text-slate-500">
              Try selecting &ldquo;All Campus Photos&rdquo; or clearing the search filter.
            </p>
          </div>
        ) : (
          <div id="gallery-grid" className="mt-8 scroll-mt-28 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/20">
                      {item.category}
                    </span>
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-950/80 border border-amber-400/50 px-2.5 py-1 text-[10px] font-bold text-amber-300">
                      <i className="fas fa-expand" aria-hidden="true"></i>
                      <span>View Fullscreen</span>
                    </span>
                  </div>

                  <div className="p-5">
                    <h2 className="text-base font-extrabold leading-snug text-[#0c4a8a] group-hover:text-[#d97706] transition-colors">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mx-5 mb-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                  <span className="font-bold text-slate-500">
                    <i className="fas fa-map-marker-alt mr-1 text-[#d97706]" aria-hidden="true"></i>
                    Umsning Campus
                  </span>
                  <span className="inline-flex items-center gap-1 font-extrabold text-[#0c4a8a] group-hover:text-[#d97706]">
                    <span>Read More</span>
                    <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Fullscreen Lightbox Modal */}
        {activePhoto && lightboxIndex !== null && (
          <div
            className="gallery-lightbox-backdrop"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo preview"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>

              <div className="gallery-lightbox-stage">
                <button
                  type="button"
                  className="gallery-lightbox-nav prev"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                    )
                  }
                  aria-label="Previous photo"
                >
                  <i className="fas fa-chevron-left" aria-hidden="true"></i>
                </button>
                <img src={activePhoto.src} alt={activePhoto.title} />
                <button
                  type="button"
                  className="gallery-lightbox-nav next"
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)}
                  aria-label="Next photo"
                >
                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>

              <div className="gallery-lightbox-footer">
                <div>
                  <span className="gallery-lightbox-tag">
                    <i className="fas fa-camera mr-1" aria-hidden="true"></i>
                    {activePhoto.category}
                  </span>
                  <h4>{activePhoto.title}</h4>
                  <p>{activePhoto.description}</p>
                </div>
                <span className="gallery-lightbox-counter">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Campus Summary */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
          <strong className="block text-sm font-extrabold text-[#0c4a8a]">
            {SCHOOL_INFO.name}, Umsning
          </strong>
          <span className="text-xs font-medium text-slate-600">
            Official Campus Photography Archive • Estd. {SCHOOL_INFO.established}
          </span>
        </div>
      </div>
    </section>
  );
};
