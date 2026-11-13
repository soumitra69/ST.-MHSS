import React, { useState, useMemo } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface EventPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
}

type EventCategory =
  | 'All Events'
  | 'Academic & Seminars'
  | 'Sports & Youth'
  | 'Social Outreach'
  | 'Celebrations';

interface CampusEventItem {
  id: string;
  date: string;
  year: string;
  category: Exclude<EventCategory, 'All Events'>;
  badge: string;
  title: string;
  summary: string;
  fullReport: string;
  location: string;
  image: string;
}

const CAMPUS_EVENTS: CampusEventItem[] = [
  {
    id: 'cm-felicitation-2026',
    date: '14 Jun',
    year: '2026',
    category: 'Academic & Seminars',
    badge: 'State Merit Honour',
    title: "MBOSE SSLC Top 20 State Felicitation & ₹20,000 Endowment Award",
    summary:
      "Hon'ble Chief Minister Conrad K. Sangma felicitated our MBOSE SSLC State Top 20 rank holder, followed by the ₹20,000 campus scholarship presentation.",
    fullReport:
      "In a proud milestone for Umsning and Ri-Bhoi District, St. Michael's Higher Secondary School celebrated its MBOSE SSLC State Top 20 Merit Rank achievement. Following the state ceremony in Shillong with the Hon'ble Chief Minister, the St. Michael's SSLC Award Body presented the ₹20,000 cash scholarship and 100% Higher Secondary tuition waiver in front of 2,000 students.",
    location: 'Shillong State Auditorium & Umsning Courtyard',
    image: SCHOOL_IMAGES.awardPresentation,
  },
  {
    id: 'feast-day-2026',
    date: '29 Sep',
    year: '2026',
    category: 'Celebrations',
    badge: 'Patron Feast Day',
    title: 'Feast of St. Michael the Archangel & 65th Foundation Day',
    summary:
      'Solemn thanksgiving eucharist, four-part choral liturgy, traditional Khasi folk pageantry, and alumni honour roll.',
    fullReport:
      "Students, Reverend Sisters, Diocesan clergy, parents, and alumni gathered on campus to celebrate the Feast of our patron, St. Michael the Archangel. The day featured a solemn thanksgiving service, a 120-voice choral concert in English and Khasi, and traditional Jainsem and Jymphong cultural dances on the courtyard stage.",
    location: 'St. Michael Archangel Courtyard Stage',
    image: SCHOOL_IMAGES.courtyardDance,
  },
  {
    id: 'sports-meet-2026',
    date: '10 Nov',
    year: '2026',
    category: 'Sports & Youth',
    badge: 'Athletics & Drill',
    title: 'Annual 4-House Athletics Meet & 2,000-Student Synchronized Drill',
    summary:
      'Blue, Green, Yellow, and Red Houses competed across track sprints, relays, football, basketball, and mass musical PT formations.',
    fullReport:
      'Over four days of spirited competition, athletes from all four Archangel Houses competed for the Overall Championship Shield. The highlight of the meet was the synchronized musical PT drill performed in unison by over 200 students on the pine-ringed main ground.',
    location: "St. Michael's Main Sports Arena, Umsning",
    image: SCHOOL_IMAGES.sportsBlueChampions,
  },
  {
    id: 'world-env-day-2026',
    date: '05 Jun',
    year: '2026',
    category: 'Social Outreach',
    badge: 'Eco Stewardship',
    title: 'World Environment Day & 500-Sapling Green Ri-Bhoi Drive',
    summary:
      'The Eco Club and senior secondary scholars planted native pine and fruit saplings across the campus perimeter and Umsning community.',
    fullReport:
      'Committed to ecological care in the Khasi Hills, students from Classes VI to XII participated in hands-on sapling plantation, biodiversity charting, and a zero-single-use-plastic campus pledge led by the Department of Science & Environment.',
    location: 'Campus Botanical Belt & Umsning Town',
    image: SCHOOL_IMAGES.campusEcoDrive,
  },
  {
    id: 'nasha-mukt-rally-2026',
    date: '18 Aug',
    year: '2026',
    category: 'Social Outreach',
    badge: 'Youth Awareness',
    title: 'Nasha Mukt Yuva, Anti-Tobacco & Public Health Poster Exhibition',
    summary:
      'Students created hand-painted visual campaigns and led a community rally promoting a drug-free, healthy youth culture in Ri-Bhoi.',
    fullReport:
      'Organized by the Social Service & Red Ribbon Club, scholars designed over 80 hand-illustrated posters advocating against tobacco and substance abuse, followed by an interactive health workshop with district medical officers.',
    location: 'Archangel Tower Plaza & Umsning Corridor',
    image: SCHOOL_IMAGES.posterCampaign,
  },
  {
    id: 'career-seminar-2026',
    date: '24 Sep',
    year: '2026',
    category: 'Academic & Seminars',
    badge: 'Career & Fieldwork',
    title: 'Workshop on Competitive Exams (NEET / JEE / CUET / Civil Services) & Field Survey',
    summary:
      'Higher Secondary Science, Arts, and Commerce faculty guided Class X–XII students on university entrance strategy and regional fieldwork.',
    fullReport:
      'Senior subject specialists and university alumni conducted stream-wise orientation sessions covering CUET, NEET, JEE, and Meghalaya Civil Services preparation, paired with a practical geography and ecology field survey across Ri-Bhoi District.',
    location: 'Higher Secondary Seminar Hall',
    image: SCHOOL_IMAGES.fieldwork,
  },
  {
    id: 'choral-festival-2026',
    date: '16 Oct',
    year: '2026',
    category: 'Celebrations',
    badge: 'Choral Tradition',
    title: "Diocesan Youth Choral Festival & Multi-Part Hymn Showcase",
    summary:
      "St. Michael's senior school choir performed four-part harmonies in English and Khasi during the annual inter-parish and inter-school choral fest.",
    fullReport:
      "Rooted in Catholic hymnology and Khasi musical heritage, the St. Michael's Choral Ensemble presented sacred polyphony and indigenous choral arrangements before a packed courtyard amphitheatre.",
    location: 'Central Amphitheatre Courtyard Stage',
    image: SCHOOL_IMAGES.choir,
  },
  {
    id: 'prize-distribution-2026',
    date: '04 Dec',
    year: '2026',
    category: 'Academic & Seminars',
    badge: 'Annual Honours',
    title: 'Annual Prize Distribution, Literary Shield & Merit Felicitation Day',
    summary:
      'Honoring Top 20 class rankers, 100% attendance achievers, inter-house debate champions, and science exhibition winners.',
    fullReport:
      'Parents, faculty, and students gathered to applaud academic and co-curricular achievers across Nursery to Class XII, celebrating holistic development and house brotherhood.',
    location: 'St. Michael Assembly Forecourt',
    image: SCHOOL_IMAGES.certificateWinners,
  },
];

export const EventPage: React.FC<EventPageProps> = ({ onBack, onNavigatePage }) => {
  const [eventFilter, setEventFilter] = useState<EventCategory>('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<CampusEventItem | null>(null);

  const filteredEvents = useMemo(() => {
    return CAMPUS_EVENTS.filter((ev) => {
      const matchesCat = eventFilter === 'All Events' || ev.category === eventFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.summary.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q) ||
        ev.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [eventFilter, searchQuery]);

  return (
    <section
      id="event-page"
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
            <span className="text-[#0c4a8a]">Campus Life</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Events &amp; Campus Chronicles</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigatePage && (
              <button
                type="button"
                onClick={() => onNavigatePage('gallery')}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
              >
                <i className="fas fa-images text-[#d97706]" aria-hidden="true"></i>
                <span>Open Photo Gallery</span>
              </button>
            )}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                <i className="fas fa-calendar-check mr-1.5" aria-hidden="true"></i>
                Campus Events &amp; Chronicles • 2025–2026
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                <i className="fas fa-landmark mr-1.5" aria-hidden="true"></i>
                {SCHOOL_INFO.shortName} • Estd. {SCHOOL_INFO.established}
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Events &amp; Memorable Moments
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Explore the vibrant calendar of academic seminars, MBOSE State Merit felicitations,
              4-House athletic championships, Patron Feast Day celebrations, and eco-social outreach
              drives at <strong>{SCHOOL_INFO.name}, Umsning</strong>.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div
          id="events-filter-bar"
          className="mt-8 scroll-mt-28 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center sm:p-5"
        >
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter campus events"
          >
            {(
              [
                'All Events',
                'Academic & Seminars',
                'Sports & Youth',
                'Social Outreach',
                'Celebrations',
              ] as EventCategory[]
            ).map((cat) => {
              const isActive = eventFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setEventFilter(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0c4a8a] text-white shadow-md'
                      : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                  }`}
                >
                  <span>{cat}</span>
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
              placeholder="Search campus events..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Event Cards Grid */}
        <div id="events-grid" className="mt-8 scroll-mt-28 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((ev) => (
            <article
              key={ev.id}
              onClick={() => setSelectedEvent(ev)}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 rounded-xl bg-[#0c4a8a] px-3 py-1 text-center text-white shadow-md border border-white/25">
                    <strong className="block text-xs font-extrabold leading-tight">
                      {ev.date}
                    </strong>
                    <span className="block text-[10px] font-bold text-amber-300">{ev.year}</span>
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                    {ev.badge}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-500">
                    <span className="text-[#0c4a8a]">
                      <i className="fas fa-folder-open mr-1 text-[#d97706]" aria-hidden="true"></i>
                      {ev.category}
                    </span>
                    <span>•</span>
                    <span>
                      <i className="fas fa-map-marker-alt mr-1 text-[#d97706]" aria-hidden="true"></i>
                      {ev.location}
                    </span>
                  </div>

                  <h2 className="mt-2 text-base sm:text-lg font-extrabold leading-snug text-[#0c4a8a] group-hover:text-[#d97706] transition-colors">
                    {ev.title}
                  </h2>

                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                    {ev.summary}
                  </p>
                </div>
              </div>

              <div className="mx-5 mb-5 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(ev);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#0c4a8a] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white transition-colors group-hover:bg-[#d97706] cursor-pointer"
                >
                  <span>Read More</span>
                  <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>

                {onNavigatePage && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigatePage('gallery');
                    }}
                    className="inline-flex items-center gap-1 font-bold text-[#0c4a8a] hover:text-[#d97706] cursor-pointer"
                  >
                    <i className="fas fa-images text-[#d97706]" aria-hidden="true"></i>
                    <span>Gallery</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Event Full Report Modal */}
        {selectedEvent && (
          <div
            className="hub-modal-backdrop"
            onClick={() => setSelectedEvent(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="hub-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="hub-modal-header">
                <span className="hub-cat-badge cat-admissions">
                  <i className="fas fa-calendar-alt mr-1.5" aria-hidden="true"></i>
                  {selectedEvent.date} {selectedEvent.year} • {selectedEvent.category}
                </span>
                <button
                  type="button"
                  className="hub-modal-close"
                  onClick={() => setSelectedEvent(null)}
                  aria-label="Close event report"
                >
                  <i className="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
              <div className="hub-modal-body">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-56 object-cover rounded-xl mb-4 border border-orange-200"
                />
                <span className="hub-modal-school">
                  <i className="fas fa-map-marker-alt mr-1" aria-hidden="true"></i>
                  {selectedEvent.location}
                </span>
                <h3>{selectedEvent.title}</h3>
                <p className="hub-modal-text">{selectedEvent.fullReport}</p>
              </div>
              <div className="hub-modal-footer">
                <button
                  type="button"
                  className="hub-modal-done-btn"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close Event Report
                </button>
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
            Official Campus Events &amp; Chronicles • Catholic Mission of Umsning
          </span>
        </div>
      </div>
    </section>
  );
};
