import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface CampusSpacesAndEventsSectionProps {
  onNavigatePage?: (page: AppPageId) => void;
}

interface LearningSpaceItem {
  id: string;
  number: string;
  title: string;
  category: 'Academics & Tech' | 'Labs & Library' | 'Campus & Transit';
  badge: string;
  icon: string;
  image: string;
  summary: string;
  details: string;
  specs: string[];
  themeClass: string;
  isHighlighted?: boolean;
  highlightBadge?: string;
  targetPage?: AppPageId;
}

const LEARNING_SPACES: LearningSpaceItem[] = [
  {
    id: 'girls-hostel',
    number: '01',
    title: "Girls' Hostel & Residential Care Campus",
    category: 'Campus & Transit',
    badge: 'Girls Only Residence',
    icon: 'fas fa-hotel',
    image: SCHOOL_IMAGES.foundingCampus,
    summary:
      'Safe, fully guarded, and nurturing residential facility dedicated exclusively for female scholars with supervised study hours and nutritious dining.',
    details:
      "St. Michael's Girls' Hostel provides a serene, disciplined, and home-like home for outstation female students from across Meghalaya and Northeast India. Supervised by resident Catholic Sisters and dedicated matrons, the hostel features 24/7 CCTV surveillance, biometric security, dedicated evening study halls, hygienic multi-cuisine dining, and regular health check-ups.",
    specs: ['24/7 Sister & Matron Supervision', 'Nutritious Hygienic Meal Plans', 'Quiet Evening Supervised Study Halls'],
    themeClass: 'space-theme-amber',
    isHighlighted: true,
    highlightBadge: 'FEATURED RESIDENTIAL FACILITY',
    targetPage: 'girls-hostel',
  },
  {
    id: 'college-building',
    number: '02',
    title: 'Main Academic Building & Archangel Tower',
    category: 'Campus & Transit',
    badge: '60+ Classrooms',
    icon: 'fas fa-school',
    image: SCHOOL_IMAGES.schoolBuildingFront,
    summary:
      'Spacious, sunlit academic wings housing Nursery to Class XII classrooms, departmental staff rooms, and administrative offices.',
    details:
      "Designed for natural hill-station ventilation and acoustic clarity, St. Michael's main academic complex surrounds the central courtyard with separate wings for Primary, Secondary (SSLC), and Higher Secondary (HSSLC) scholars.",
    specs: ['60+ Ventilated Classrooms', 'Dedicated Wing Supervisors', 'CCTV & Fire Safety Compliant'],
    themeClass: 'space-theme-blue',
  },
  {
    id: 'smart-classroom',
    number: '03',
    title: 'Smart Classrooms & Audio-Visual Halls',
    category: 'Academics & Tech',
    badge: 'Digital Learning',
    icon: 'fas fa-chalkboard-teacher',
    image: SCHOOL_IMAGES.assemblyAddress,
    summary:
      'Equipped with digital projection systems, interactive visual modules, and multimedia teaching aids for MBOSE curriculum mastery.',
    details:
      'Interactive 3D science simulations, historical documentaries, and mathematical visualizations bring complex MBOSE syllabus concepts to life for middle, secondary, and senior secondary learners.',
    specs: ['HD Interactive Projection', 'MBOSE Digital Syllabus Modules', 'Audio-Visual Seminar Room'],
    themeClass: 'space-theme-orange',
  },
  {
    id: 'science-labs',
    number: '04',
    title: 'Physics, Chemistry & Biology Laboratories',
    category: 'Labs & Library',
    badge: 'HSSLC Practicals',
    icon: 'fas fa-flask',
    image: SCHOOL_IMAGES.geographyFieldwork,
    summary:
      'Three dedicated senior secondary science laboratories with modern apparatus, chemical fume safety, and botanical specimen archives.',
    details:
      'Every Class IX–XII student performs hands-on experiments under certified lab demonstrators—building experimental precision for MBOSE board practicals, NEET, and JEE entrance readiness.',
    specs: ['40-Student Lab Capacity Each', 'Optical & Digital Microscopes', 'Full Safety & First-Aid Station'],
    themeClass: 'space-theme-emerald',
  },
  {
    id: 'computer-lab',
    number: '05',
    title: 'Advanced Computer & Coding Laboratory',
    category: 'Academics & Tech',
    badge: '1:1 Lab Terminals',
    icon: 'fas fa-laptop-code',
    image: SCHOOL_IMAGES.certificateWinners,
    summary:
      'High-speed networked computer terminals supporting Python programming, office automation, web design, and digital research.',
    details:
      'Students from Class III through Class XII receive structured weekly practical training in computer science, informatics practices, algorithmic thinking, and safe digital citizenship.',
    specs: ['High-Speed Campus Broadband', 'Python, C++ & Office Suites', 'Power Backup & UPS Grid'],
    themeClass: 'space-theme-purple',
  },
  {
    id: 'central-library',
    number: '06',
    title: 'Central Reference Library & Reading Room',
    category: 'Labs & Library',
    badge: '12,000+ Volumes',
    icon: 'fas fa-book-open',
    image: SCHOOL_IMAGES.studentAwards,
    summary:
      'A quiet knowledge sanctuary housing 12,000+ textbooks, encyclopedias, MBOSE question banks, periodicals, and daily newspapers.',
    details:
      'Organized by subject classification with a dedicated silence reading hall for Higher Secondary Arts, Science, and Commerce scholars preparing for board and competitive examinations.',
    specs: ['12,000+ Books & Reference Texts', 'MBOSE Past-Paper Archive', 'Dedicated Quiet Study Carrels'],
    themeClass: 'space-theme-crimson',
  },
  {
    id: 'amphitheatre-stage',
    number: '07',
    title: 'Open-Air Amphitheatre & Courtyard Stage',
    category: 'Campus & Transit',
    badge: '2,000+ Seating',
    icon: 'fas fa-theater-masks',
    image: SCHOOL_IMAGES.campus,
    summary:
      'Our iconic tiered amphitheatre steps and covered stage host daily morning assembly, synchronized drill, and cultural festivals.',
    details:
      'Capable of seating all 2,000+ students simultaneously, the central courtyard arena serves as the heart of community prayer, inter-house elocution, choral concerts, and state felicitation ceremonies.',
    specs: ['2,000+ Tiered Spectator Steps', 'PA & Concert Sound System', 'All-Weather Stage Canopy'],
    themeClass: 'space-theme-amber',
  },
  {
    id: 'transport-fleet',
    number: '08',
    title: 'Safe School Bus Transit Fleet',
    category: 'Campus & Transit',
    badge: '4 Main Routes',
    icon: 'fas fa-bus-alt',
    image: SCHOOL_IMAGES.houseAssembly,
    summary:
      'Reliable daily bus service connecting Umsning Town, Nongpoh Road, Bhoirymbong, Umroi Junction, Umden, and Sumer.',
    details:
      'Each school bus is supervised by trained transport attendants and route coordinators, ensuring punctual morning pickup and safe afternoon dispersal across Ri Bhoi District.',
    specs: ['4 Supervised Corridors', 'Trained Attendants on Board', 'First-Aid & Speed Governor Equipped'],
    themeClass: 'space-theme-blue',
  },
];

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
  themeClass: string;
}

const LATEST_EVENTS: CampusEventItem[] = [
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
    themeClass: 'event-theme-blue',
  },
  {
    id: 'feast-day-2026',
    date: '29 Sep',
    year: '2026',
    category: 'Celebrations',
    badge: 'Patron Feast Day',
    title: "Feast of St. Michael the Archangel & 65th Foundation Day",
    summary:
      'Solemn thanksgiving eucharist, four-part choral liturgy, traditional Khasi folk pageantry, and alumni honour roll.',
    fullReport:
      "Students, Reverend Sisters, Diocesan clergy, parents, and alumni gathered on campus to celebrate the Feast of our patron, St. Michael the Archangel. The day featured a solemn thanksgiving service, a 120-voice choral concert in English and Khasi, and traditional Jainsem and Jymphong cultural dances on the courtyard stage.",
    location: 'St. Michael Archangel Courtyard Stage',
    image: SCHOOL_IMAGES.courtyardDance,
    themeClass: 'event-theme-orange',
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
    themeClass: 'event-theme-emerald',
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
    themeClass: 'event-theme-purple',
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
    themeClass: 'event-theme-crimson',
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
    themeClass: 'event-theme-amber',
  },
];

export const CampusSpacesAndEventsSection: React.FC<CampusSpacesAndEventsSectionProps> = ({
  onNavigatePage,
}) => {
  const [spaceFilter, setSpaceFilter] = useState<'All' | LearningSpaceItem['category']>('All');
  const [selectedSpace, setSelectedSpace] = useState<LearningSpaceItem | null>(null);

  const [eventFilter, setEventFilter] = useState<EventCategory>('All Events');
  const [selectedEvent, setSelectedEvent] = useState<CampusEventItem | null>(null);

  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackClass, setCallbackClass] = useState('Class XI Science / Arts / Commerce');
  const [callbackStatus, setCallbackStatus] = useState<string | null>(null);

  const filteredSpaces =
    spaceFilter === 'All'
      ? LEARNING_SPACES
      : LEARNING_SPACES.filter((item) => item.category === spaceFilter);

  const filteredEvents =
    eventFilter === 'All Events'
      ? LATEST_EVENTS
      : LATEST_EVENTS.filter((item) => item.category === eventFilter);

  const handleRequestCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim()) return;
    setCallbackStatus(
      `Callback scheduled for +91 ${callbackPhone.trim()} (${callbackClass}). Our Umsning Admission Desk will call you shortly!`
    );
    setCallbackPhone('');
  };

  return (
    <>
      {/* ====================================================================
          SECTION 1: Nurturing Excellence through Modern Learning Spaces
          (Added from stxaviersumoid.com reference architecture)
          ==================================================================== */}
      <section id="learning-spaces" className="learning-spaces-section">
        <div className="container">
          <div className="spaces-header-row" data-aos="fade-up" data-aos-duration="750">
            <div className="spaces-header-left">
              <span className="spaces-eyebrow-pill">
                <i className="fas fa-building mr-1.5" aria-hidden="true"></i>
                CAMPUS INFRASTRUCTURE &bull; MODERN FACILITIES
              </span>
              <h2 className="vision-serif-heading spaces-main-title">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Nurturing Excellence through Modern Learning Spaces
              </h2>
              <p className="spaces-subtitle">
                St. Michael&apos;s Higher Secondary School, Umsning provides a holistic 15-acre
                learning environment equipped with smart classrooms, senior secondary laboratories,
                a 12,000+ volume library, and safe NH-6 bus transit that shape both intellect and
                character.
              </p>
            </div>

            <div className="spaces-filter-bar" role="tablist" aria-label="Filter Campus Facilities">
              {(['All', 'Academics & Tech', 'Labs & Library', 'Campus & Transit'] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={spaceFilter === tab}
                    className={`spaces-filter-btn ${spaceFilter === tab ? 'active' : ''}`}
                    onClick={() => setSpaceFilter(tab)}
                  >
                    <i
                      className={
                        tab === 'All'
                          ? 'fas fa-th-large'
                          : tab === 'Academics & Tech'
                            ? 'fas fa-laptop-code'
                            : tab === 'Labs & Library'
                              ? 'fas fa-flask'
                              : 'fas fa-bus-alt'
                      }
                      aria-hidden="true"
                    ></i>
                    <span>{tab}</span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* 8 Modern Learning Space Cards Grid */}
          <div className="spaces-cards-grid">
            {filteredSpaces.map((space, idx) => (
              <article
                key={space.id}
                className={`space-facility-card ${space.themeClass} ${
                  space.isHighlighted ? 'space-card-featured ring-2 ring-[#d97706] shadow-xl' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={60 * (idx + 1)}
              >
                {space.highlightBadge && (
                  <div className="bg-gradient-to-r from-[#0c2d57] via-[#d97706] to-[#b45309] text-white px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-star text-amber-300 text-xs animate-pulse" aria-hidden="true"></i>
                      {space.highlightBadge}
                    </span>
                    <span className="bg-amber-400 text-[#0c2d57] px-2 py-0.5 rounded text-[10px] font-black">
                      ADMISSIONS OPEN
                    </span>
                  </div>
                )}
                <div className="space-card-media" onClick={() => setSelectedSpace(space)}>
                  <img src={space.image} alt={space.title} loading="lazy" decoding="async" />
                  <div className="space-card-badges">
                    <span className={`space-badge-pill ${space.isHighlighted ? 'bg-[#d97706] text-white' : ''}`}>
                      <i className={space.icon} aria-hidden="true"></i>
                      {space.badge}
                    </span>
                    <span className="space-num-chip">{space.number}</span>
                  </div>
                </div>

                <div className="space-card-body">
                  <div>
                    <span className={`space-cat-label ${space.isHighlighted ? 'text-[#d97706] font-bold' : ''}`}>
                      {space.category}
                    </span>
                    <h3 className={space.isHighlighted ? 'text-[#0c2d57] font-black' : ''}>
                      {space.title}
                    </h3>
                    <p>{space.summary}</p>
                  </div>

                  <div>
                    <ul className="space-specs-list">
                      {space.specs.map((spec) => (
                        <li key={spec}>
                          <i
                            className={`fas fa-check-circle ${
                              space.isHighlighted ? 'text-[#d97706]' : ''
                            }`}
                            aria-hidden="true"
                          ></i>
                          <span className={space.isHighlighted ? 'font-semibold text-slate-800' : ''}>
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {space.targetPage && onNavigatePage ? (
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          type="button"
                          className="space-view-more-btn flex-1 !bg-[#0c2d57] !text-white hover:!bg-[#d97706] transition-colors"
                          onClick={() => onNavigatePage(space.targetPage!)}
                        >
                          <i className="fas fa-door-open mr-1.5" aria-hidden="true"></i>
                          <span>Visit Girls&apos; Hostel Page</span>
                        </button>
                        <button
                          type="button"
                          className="px-3 py-2 text-xs font-bold text-[#0c4a8a] bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                          onClick={() => setSelectedSpace(space)}
                          title="Quick preview"
                        >
                          <i className="fas fa-info-circle" aria-hidden="true"></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="space-view-more-btn"
                        onClick={() => setSelectedSpace(space)}
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: Latest News, Events & Campus Chronicles (#latest-events)
          (Added from stxaviersumoid.com reference architecture)
          ==================================================================== */}
      <section id="latest-events" className="latest-events-section">
        <div className="container">
          <div className="events-header-row" data-aos="fade-up" data-aos-duration="750">
            <div className="events-header-left">
              <span className="events-eyebrow-pill">
                <i className="fas fa-calendar-check mr-1.5" aria-hidden="true"></i>
                NEWS, EVENTS &amp; CAMPUS CHRONICLES &bull; 2025–2026
              </span>
              <h2 className="vision-serif-heading events-main-title">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Latest Events &amp; Memorable Moments
              </h2>
              <p className="events-subtitle">
                Discover the latest academic seminars, MBOSE merit felicitations, athletic
                championships, and social outreach initiatives from St. Michael&apos;s Higher
                Secondary School, Umsning.
              </p>
            </div>

            <div className="events-filter-bar" role="tablist" aria-label="Filter Campus Events">
              {(
                [
                  'All Events',
                  'Academic & Seminars',
                  'Sports & Youth',
                  'Social Outreach',
                  'Celebrations',
                ] as EventCategory[]
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={eventFilter === cat}
                  className={`events-filter-btn ${eventFilter === cat ? 'active' : ''}`}
                  onClick={() => setEventFilter(cat)}
                >
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 6 Dated Event Cards Grid */}
          <div className="events-cards-grid">
            {filteredEvents.map((ev, idx) => (
              <article
                key={ev.id}
                className={`campus-event-card ${ev.themeClass}`}
                data-aos="fade-up"
                data-aos-delay={70 * (idx + 1)}
              >
                <div className="event-card-media" onClick={() => setSelectedEvent(ev)}>
                  <img src={ev.image} alt={ev.title} loading="lazy" decoding="async" />
                  <div className="event-date-badge">
                    <strong>{ev.date}</strong>
                    <span>{ev.year}</span>
                  </div>
                  <span className="event-cat-ribbon">
                    <i className="fas fa-bolt mr-1" aria-hidden="true"></i>
                    {ev.badge}
                  </span>
                </div>

                <div className="event-card-body">
                  <div>
                    <div className="event-meta-line">
                      <span>
                        <i className="fas fa-folder-open text-[#1d4ed8]" aria-hidden="true"></i>{' '}
                        {ev.category}
                      </span>
                      <span>
                        <i className="fas fa-map-marker-alt text-[#ea580c]" aria-hidden="true"></i>{' '}
                        {ev.location}
                      </span>
                    </div>
                    <h3>{ev.title}</h3>
                    <p>{ev.summary}</p>
                  </div>

                  <div className="event-card-footer">
                    <button
                      type="button"
                      className="event-read-btn"
                      onClick={() => {
                        if (onNavigatePage) {
                          onNavigatePage('events');
                        } else {
                          setSelectedEvent(ev);
                        }
                      }}
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>
                    <a
                      href="#gallery"
                      onClick={(e) => {
                        if (onNavigatePage) {
                          e.preventDefault();
                          onNavigatePage('gallery');
                        }
                      }}
                      className="event-gallery-link"
                    >
                      <i className="fas fa-images" aria-hidden="true"></i> Read More
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Request Callback, Download Prospectus & Digital App Banner (stxaviersumoid.com style) */}
          <div
            id="prospectus-callback"
            className="prospectus-callback-banner"
            data-aos="zoom-in"
            data-aos-duration="750"
          >
            <div className="prospectus-left-col">
              <span className="prospectus-kicker">
                <i className="fas fa-headset mr-1.5" aria-hidden="true"></i>
                ADMISSIONS COUNSELING &amp; PROSPECTUS DESK 2026–27
              </span>
              <h3>
                &raquo; Admission for Nursery to Class XII (Science, Arts &amp; Commerce)
              </h3>
              <p>
                A Catholic Diocesan institution fostering knowledge, moral values, and community
                spirit since 1961. Request an instant callback from our Umsning Admission Counselor
                or download the 2026–27 Academic Prospectus.
              </p>

              <form className="callback-inline-form" onSubmit={handleRequestCallback}>
                <div className="callback-input-group">
                  <span className="callback-country-code">+91</span>
                  <input
                    type="tel"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Enter 10-digit Guardian Mobile Number *"
                    aria-label="Guardian Mobile Number"
                    required
                  />
                </div>
                <select
                  value={callbackClass}
                  onChange={(e) => setCallbackClass(e.target.value)}
                  className="callback-class-select"
                  aria-label="Select Target Class or Stream"
                >
                  <option value="Class XI Science (PCM / PCB)">Class XI Science (PCM / PCB)</option>
                  <option value="Class XI Arts & Humanities">Class XI Arts &amp; Humanities</option>
                  <option value="Class XI Commerce">Class XI Commerce</option>
                  <option value="Secondary SSLC (Class IX – X)">Secondary SSLC (Class IX – X)</option>
                  <option value="Primary & Middle (Nursery – VIII)">
                    Primary &amp; Middle (Nursery – VIII)
                  </option>
                </select>
                <button type="submit" className="callback-submit-btn">
                  <i className="fas fa-phone-volume" aria-hidden="true"></i>
                  <span>Request Callback</span>
                </button>
              </form>

              {callbackStatus && (
                <div className="callback-success-msg" role="status">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>{callbackStatus}</span>
                </div>
              )}
            </div>

            <div className="prospectus-right-col">
              <div className="prospectus-action-card">
                <div className="prospectus-card-icon">
                  <i className="fas fa-file-pdf" aria-hidden="true"></i>
                </div>
                <div>
                  <h4>2026–27 School Prospectus &amp; Fee Guide</h4>
                  <p>Complete MBOSE stream syllabus, uniform rules, bus routes &amp; scholarship guide.</p>
                </div>
                <a
                  href="#academic-calendar"
                  onClick={(e) => {
                    if (onNavigatePage) {
                      e.preventDefault();
                      onNavigatePage('academic-calendar');
                    }
                  }}
                  className="prospectus-download-btn"
                >
                  <i className="fas fa-download" aria-hidden="true"></i>
                  <span>Read More</span>
                </a>
              </div>

              <div className="prospectus-app-card">
                <span className="app-coming-pill">
                  <i className="fas fa-mobile-alt mr-1" aria-hidden="true"></i>
                  Parent Digital Connect
                </span>
                <h4>SMS Alerts &amp; WhatsApp Notice Broadcast</h4>
                <p>
                  Instant attendance alerts, terminal exam schedules, and official circulars on{' '}
                  <strong>{SCHOOL_INFO.phoneMobile}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Facility Details */}
      {selectedSpace && (
        <div
          className="hub-modal-backdrop"
          onClick={() => setSelectedSpace(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="hub-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="hub-modal-header">
              <span className="hub-cat-badge cat-academic">
                <i className={`${selectedSpace.icon} mr-1.5`} aria-hidden="true"></i>
                {selectedSpace.category}
              </span>
              <button
                type="button"
                className="hub-modal-close"
                onClick={() => setSelectedSpace(null)}
                aria-label="Close facility details"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <div className="hub-modal-body">
              <img
                src={selectedSpace.image}
                alt={selectedSpace.title}
                className="w-full h-52 object-cover rounded-xl mb-4 border border-blue-200"
              />
              <span className="hub-modal-school">
                ST. MICHAEL&apos;S HIGHER SECONDARY SCHOOL • UMSNING
              </span>
              <h3>{selectedSpace.title}</h3>
              <p className="hub-modal-text mb-4">{selectedSpace.details}</p>
              <div className="flex flex-wrap gap-2">
                {selectedSpace.specs.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#0c4a8a]"
                  >
                    <i className="fas fa-check-circle text-[#ea580c]" aria-hidden="true"></i>
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div className="hub-modal-footer">
              <button
                type="button"
                className="hub-modal-done-btn"
                onClick={() => setSelectedSpace(null)}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Event Full Report */}
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
                className="w-full h-52 object-cover rounded-xl mb-4 border border-orange-200"
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
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
