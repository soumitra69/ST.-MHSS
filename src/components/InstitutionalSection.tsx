import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';
import { FOUNDER_ARCHIVE_PDF_URL } from './FounderPage';

export type AppPageId =
  | 'home'
  | 'who-we-are'
  | 'gallery'
  | 'mission-vision'
  | 'notices'
  | 'events'
  | 'academic-calendar'
  | 'founder'
  | 'leadership'
  | 'student-stats'
  | 'staff-directory'
  | 'academic-syllabus'
  | 'results-achievements'
  | 'admissions-fees'
  | 'transportation'
  | 'scholarships'
  | 'alumni'
  | 'contact'
  | 'fee-structure-page';

interface InstitutionalSectionProps {
  onOpenFounderPage?: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
}

const institutionalValues = [
  'Rigorous MBOSE academic foundation & inquiry',
  'Moral integrity, respect & pastoral care',
  'Synchronized drill, cultural pride & service',
];

const secretaryHighlights = [
  'Unified Diocesan administration & governance',
  'Academic discipline & student welfare mentorship',
  'Modern infrastructure & laboratory advancement',
];

const founderHighlights = [
  'Born: 14.01.1922 (Chartres, France) • M.Sc. Mathematics (Gauhati Univ.)',
  'Professed: 17.10.1945 (SDB) • Ordained Priest: 23.05.1954 (Shillong)',
  'Founded St. Michael’s Umsning (1961) • Entered Rest: 11.10.1989 (Shillong)',
];

const missionHighlights = [
  'Intellectual & skill formation',
  'Moral integrity & spiritual growth',
  'Cultural appreciation & social service',
];

const visionHighlights = [
  'Confidence & academic competency',
  'Psychological & character growth',
  'Responsible citizenship & leadership',
];

const schoolProfileStats = [
  {
    label: 'Total Enrolment',
    value: '2,000+ Students',
    sub: '980+ Boys • 1,020+ Girls',
    icon: 'fas fa-user-graduate',
  },
  {
    label: 'Teaching & Admin Staff',
    value: '68+ Teaching • 18+ Support',
    sub: 'Librarian, Accountant & Lab Staff',
    icon: 'fas fa-chalkboard-teacher',
  },
  {
    label: 'Classrooms & Labs',
    value: '48+ Classrooms & 4 Labs',
    sub: 'Nursery to Class XII Sections',
    icon: 'fas fa-school',
  },
  {
    label: 'Board & Registration',
    value: 'MBOSE Code: 01961',
    sub: 'UDISE+: 17050200108 • Estd. 1961',
    icon: 'fas fa-certificate',
  },
];

export const InstitutionalSection: React.FC<InstitutionalSectionProps> = ({
  onOpenFounderPage,
  onNavigatePage,
}) => {
  const handleFounderClick = () => {
    if (onOpenFounderPage) {
      onOpenFounderPage();
    } else {
      onNavigatePage?.('founder');
    }
  };

  return (
    <>
      {/* SECTION 1: Who We Are & Official School Profile Statistics */}
      <section
        id="about"
        className="w-full bg-[#f4f7fb] py-12 md:py-16 border-t border-slate-200"
      >
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div>
                <span className="inline-block rounded-full bg-[#0c4a8a] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-xs">
                  <i className="fas fa-landmark mr-1.5 text-amber-300" aria-hidden="true"></i>
                  St. Michael&apos;s Higher Secondary School • Umsning
                </span>
                <h2 className="vision-serif-heading mt-3.5 text-2xl sm:text-3xl text-[#0c4a8a]">
                  <span className="vision-double-angle" aria-hidden="true">
                    &raquo;
                  </span>{' '}
                  Who We Are (General Information)
                </h2>
                <p className="vision-body-copy mt-4 text-sm sm:text-base text-[#0c4a8a]">
                  The School is under the management of the{' '}
                  <strong>Catholic Mission of Umsning, Archdiocese of Shillong</strong>, and is one
                  of the oldest co-educational institutions in the Ri Bhoi District of Meghalaya. It
                  was started as a Lower Primary School in{' '}
                  <strong>{SCHOOL_INFO.established}</strong> by the great Educationist and French
                  Catholic Missionary, <strong>Rev. Fr. Michael Balawan, SDB</strong>.
                </p>
                <p className="vision-body-copy mt-3 text-sm sm:text-base text-[#0c4a8a]">
                  The institution is backboned by its committed teachers who spark the imagination
                  of their students and give wings to their dreams. The spirit of confidence and
                  competency is the hallmark that <strong>&ldquo;Michaelians&rdquo;</strong> carry
                  with them from the torch of their school&apos;s motto{' '}
                  <strong>&ldquo;{SCHOOL_INFO.mottoLatin}&rdquo;</strong> &amp;{' '}
                  <strong>&ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo;</strong>. The school runs classes
                  from <strong>Nursery to Class XII</strong> with <strong>English</strong> as the
                  medium of instruction.
                </p>
              </div>
              <div className="mt-5">
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

            <div
              className="group relative min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <img
                src={SCHOOL_IMAGES.schoolBuildingFront}
                alt="St. Michael's Higher Secondary School Building, Umsning"
                className="h-full w-full lg:absolute lg:inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
              <div className="absolute top-4 left-4 rounded-full bg-[#0c4a8a] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/25">
                <i className="fas fa-school mr-1.5 text-amber-300" aria-hidden="true"></i>
                Estd. {SCHOOL_INFO.established} • Umsning Campus
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#0c2d57]/90 border border-amber-400/40 px-4 py-3 text-white shadow-lg backdrop-blur-xs">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  <i className="fas fa-award mr-1.5" aria-hidden="true"></i>
                  Motto: &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;
                  {SCHOOL_INFO.mottoKhasi}&rdquo; ({SCHOOL_INFO.mottoMeaning})
                </p>
                <p className="mt-1 text-xs font-medium text-slate-200">
                  St. Michael&apos;s Higher Secondary School • Catholic Mission of Umsning,
                  Archdiocese of Shillong
                </p>
              </div>
            </div>
          </div>

          {/* Official School Strength & Registration At-a-Glance Strip */}
          <div
            className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            {schoolProfileStats.map((stat, idx) => (
              <div
                key={stat.label}
                className="flex items-center gap-3.5 rounded-xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-white p-4 shadow-xs"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white ${
                    idx % 2 === 0 ? 'bg-[#0c4a8a]' : 'bg-[#d97706]'
                  }`}
                >
                  <i className={`${stat.icon} text-sm`} aria-hidden="true"></i>
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                  <strong className="block truncate text-sm font-extrabold text-[#0c4a8a]">
                    {stat.value}
                  </strong>
                  <span className="block truncate text-[11px] font-semibold text-slate-600">
                    {stat.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1A & 1B: Our Mission & Our Vision — Two Side-by-Side Boxes in One Section */}
      <section
        id="mission-vision"
        className="w-full bg-white py-10 md:py-14 scroll-mt-24 border-t border-slate-200"
      >
        <div className="container">
          <div className="mb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#0c4a8a] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                <i className="fas fa-compass mr-1.5 text-amber-300" aria-hidden="true"></i>
                Guiding Philosophy • Motto: {SCHOOL_INFO.mottoLatin} &amp; {SCHOOL_INFO.mottoKhasi}
              </span>
              <h2 className="vision-serif-heading mt-2.5 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Our Mission &amp; Our Vision
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-md">
              Forming confident, competent, and compassionate Michaelians through holistic Catholic
              education from Nursery to Class XII.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Box 1 (Left): Our Mission */}
            <article
              id="mission"
              className="scroll-mt-28 relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a]" />
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0c4a8a] border border-blue-200">
                    <i className="fas fa-bullseye mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                    Institutional Aim &amp; Mission
                  </span>
                  <span className="rounded-full bg-[#0c4a8a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    <i className="fas fa-cross mr-1 text-amber-300" aria-hidden="true"></i>
                    Overall Development
                  </span>
                </div>

                <h3 className="vision-serif-heading mt-3 text-xl sm:text-2xl text-[#0c4a8a]">
                  <span className="vision-double-angle" aria-hidden="true">
                    &raquo;
                  </span>{' '}
                  Our Mission
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-6 text-slate-700">
                  Guided by our supreme institutional aim —{' '}
                  <strong>Overall Development of the Child</strong> — St. Michael&apos;s Higher
                  Secondary School provides an inclusive, values-led education that forms every
                  learner intellectually, morally, spiritually, culturally, and socially in the
                  Catholic tradition from Nursery to Class XII, nurturing disciplined and
                  compassionate citizens.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {missionHighlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-[#0c4a8a]"
                    >
                      <i
                        className="fas fa-check-circle mr-1.5 text-[#d97706]"
                        aria-hidden="true"
                      ></i>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3.5 text-xs">
                <div>
                  <span className="font-bold text-[#0c4a8a]">
                    Institutional Mission • Estd. 1961
                  </span>
                  <span className="block text-[11px] font-medium text-slate-500">
                    St. Michael&apos;s Higher Secondary School, Umsning
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage?.('mission-vision', 'mission')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                >
                  <span>Read More</span>
                  <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>
              </div>
            </article>

            {/* Box 2 (Right): Our Vision */}
            <article
              id="vision"
              className="scroll-mt-28 relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              data-aos="fade-left"
              data-aos-delay="120"
              data-aos-duration="750"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-200">
                    <i className="fas fa-eye mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                    Torch of the Michaelians
                  </span>
                  <span className="rounded-full bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    <i className="fas fa-award mr-1" aria-hidden="true"></i>
                    Excelsior &amp; Shaphrang
                  </span>
                </div>

                <h3 className="vision-serif-heading mt-3 text-xl sm:text-2xl text-[#0c4a8a]">
                  <span className="vision-double-angle" aria-hidden="true">
                    &raquo;
                  </span>{' '}
                  Our Vision
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-6 text-slate-700">
                  Our vision is to empower every <strong>&ldquo;Michaelian&rdquo;</strong> to step
                  forward with confidence, character, and competence under our motto{' '}
                  <em>{SCHOOL_INFO.mottoLatin}</em> (Ever Upward) &amp;{' '}
                  <em>{SCHOOL_INFO.mottoKhasi}</em> (Step Forward) — nurturing responsible leaders
                  who serve Meghalaya and the nation with excellence, cultural pride, and moral
                  conviction.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {visionHighlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-[#0c4a8a]"
                    >
                      <i
                        className="fas fa-check-circle mr-1.5 text-[#0c4a8a]"
                        aria-hidden="true"
                      ></i>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3.5 text-xs">
                <div>
                  <span className="font-bold text-[#0c4a8a]">
                    Institutional Vision • Catholic Mission of Umsning
                  </span>
                  <span className="block text-[11px] font-medium text-slate-500">
                    St. Michael&apos;s Higher Secondary School, Umsning
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage?.('mission-vision', 'vision')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                >
                  <span>Read More</span>
                  <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOUNDER'S SECTION (HOME PAGE): Founder's — Rev. Fr. Michael Balawan, SDB (#founder-message) */}
      <section
        id="founder-message"
        className="w-full bg-[#f4f7fb] py-9 md:py-12 scroll-mt-24 border-t border-slate-200"
      >
        <div className="container">
          <article
            onClick={handleFounderClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleFounderClick();
              }
            }}
            aria-label="Open Founder's biography and official credentials page"
            className="institutional-msg-card group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[340px_1fr] cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706] z-10" />

            {/* Left Compact Founder Portrait Column */}
            <div
              className="relative h-64 sm:h-72 md:h-full md:min-h-[285px] bg-slate-900 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={SCHOOL_IMAGES.founderPhoto}
                alt="Rev. Fr. Michael Balawan, SDB (1922–1989) — Founder of St. Michael's Higher Secondary School, Umsning"
                className="h-full w-full md:absolute md:inset-0 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute top-3 left-3 rounded-full bg-[#d97706] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                <i className="fas fa-landmark mr-1" aria-hidden="true"></i>
                Founder • Estd. 1961
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-slate-950/90 border border-amber-400/50 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-xs">
                <i className="fas fa-cross mr-1.5 text-amber-300" aria-hidden="true"></i>
                Rev. Fr. Michael Balawan, SDB (1922–1989)
              </div>
            </div>

            {/* Right Compact Credentials & Read More Column */}
            <div
              className="flex flex-col justify-center bg-white p-5 sm:p-6 md:px-8 md:py-6"
              data-aos="fade-left"
              data-aos-delay="140"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-200">
                  <i className="fas fa-cross mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Salesians of Don Bosco (SDB) • Estd. 1961
                </span>
                <span className="rounded-full bg-[#0c4a8a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  <i className="fas fa-church mr-1 text-amber-300" aria-hidden="true"></i>
                  Rev. Fr. Michael Balawan, SDB
                </span>
              </div>

              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="vision-serif-heading text-xl sm:text-2xl text-[#0c4a8a]">
                    <span className="vision-double-angle" aria-hidden="true">
                      &raquo;
                    </span>{' '}
                    Founder&apos;s
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-slate-700">
                    Rev. Fr. Michael Balawan, SDB (Born <em>Michel Balavoiné</em> • Chartres,
                    France) — French Catholic Missionary, Mathematician (M.Sc., Gauhati University),
                    Linguist &amp; Founder of St. Michael&apos;s School, Umsning (1961).
                  </p>
                </div>
              </div>

              {/* Verified Dates Strip from BALAWAN_Michael.pdf */}
              <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#d97706]">
                    Born (France)
                  </span>
                  <strong className="text-xs sm:text-sm font-extrabold text-[#0c4a8a]">
                    14.01.1922
                  </strong>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#d97706]">
                    Professed (SDB)
                  </span>
                  <strong className="text-xs sm:text-sm font-extrabold text-[#0c4a8a]">
                    17.10.1945
                  </strong>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#d97706]">
                    Ordained Priest
                  </span>
                  <strong className="text-xs sm:text-sm font-extrabold text-[#0c4a8a]">
                    23.05.1954
                  </strong>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#d97706]">
                    Died (Shillong)
                  </span>
                  <strong className="text-xs sm:text-sm font-extrabold text-[#0c4a8a]">
                    11.10.1989
                  </strong>
                </div>
              </div>

              {/* Verified Credential Highlights */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {founderHighlights.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 rounded-lg bg-amber-50/70 px-2.5 py-1.5 text-[11px] font-semibold text-[#0c4a8a] border border-amber-200/80"
                    data-aos="zoom-in"
                    data-aos-delay={140 + idx * 60}
                  >
                    <i
                      className="fas fa-check-circle text-[#d97706] shrink-0 text-xs"
                      aria-hidden="true"
                    ></i>
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3.5 text-xs">
                <div className="flex items-center gap-2.5">
                  <img
                    src={SCHOOL_IMAGES.founderPortrait}
                    alt="Rev. Fr. Michael Balawan, SDB"
                    className="h-9 w-9 rounded-full object-cover border border-amber-400"
                  />
                  <div>
                    <span className="font-bold text-[#0c4a8a] block">
                      Rev. Fr. Michael Balawan, SDB (Founder, 1961)
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFounderClick();
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                >
                  <span>Read More</span>
                  <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* MESSAGE 1 (HOME PAGE): Secretary & Vice Principal's Message (#secretary-message) — Image on Right Side */}
      <section
        id="secretary-message"
        className="w-full bg-[#f4f7fb] py-9 md:py-12 scroll-mt-24 border-t border-slate-200"
      >
        <div className="container">
          <article
            className="institutional-msg-card group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1fr_340px]"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a] z-10" />

            {/* Left Compact Text Column */}
            <div
              className="order-2 md:order-1 flex flex-col justify-center bg-white p-5 sm:p-6 md:px-8 md:py-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0c4a8a] border border-blue-200">
                  <i className="fas fa-user-shield mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  From The Desk of the Secretary &amp; Vice Principal
                </span>
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900 border border-amber-200">
                  <i className="fas fa-cross mr-1 text-[#d97706]" aria-hidden="true"></i>
                  Diocesan Secretariat • Estd. 1961
                </span>
              </div>

              <h2 className="vision-serif-heading mt-2.5 text-xl sm:text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Secretary &amp; Vice Principal&apos;s Message
              </h2>

              <p className="mt-2 text-xs sm:text-sm font-medium leading-6 text-slate-700">
                At St. Michael&apos;s Higher Secondary School, Umsning, our administrative mission
                and academic stewardship work hand in hand to create a safe, disciplined, and
                inspiring campus for over 2,000 learners. Serving in the unified role of Secretary
                and Vice Principal, my priority is to ensure transparent governance, modern learning
                facilities, and close mentorship so every student steps forward with confidence and
                moral conviction (<em>{SCHOOL_INFO.mottoLatin}</em> &amp;{' '}
                <em>{SCHOOL_INFO.mottoKhasi}</em>).
              </p>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {secretaryHighlights.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-[#0c4a8a] border border-slate-200"
                    data-aos="zoom-in"
                    data-aos-delay={140 + idx * 60}
                  >
                    <i
                      className="fas fa-check-circle text-[#d97706] shrink-0 text-xs"
                      aria-hidden="true"
                    ></i>
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs">
                <div>
                  <span className="font-bold text-[#0c4a8a]">
                    Office of the Secretary &amp; Vice Principal
                  </span>
                  <span className="hidden sm:inline text-slate-400 mx-1.5">•</span>
                  <span className="block sm:inline text-[11px] font-medium text-slate-600">
                    St. Michael&apos;s Higher Secondary School, Umsning
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage?.('leadership', 'sec-vp-msg')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                >
                  <span>Read More</span>
                  <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            {/* Right Compact Image Column */}
            <div
              className="relative order-1 md:order-2 h-56 sm:h-64 md:h-full md:min-h-[265px] bg-slate-900 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay="140"
            >
              <img
                src={SCHOOL_IMAGES.foundingCampus}
                alt="Office of the Secretary and Vice Principal at St. Michael's Higher Secondary School, Umsning"
                className="h-full w-full md:absolute md:inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
              <div className="absolute top-3 right-3 rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/25">
                <i className="fas fa-user-shield mr-1 text-amber-300" aria-hidden="true"></i>
                Administration &amp; Governance
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-[#0c2d57]/95 border border-amber-400/40 px-3 py-1.5 text-[11px] font-bold text-white shadow-md backdrop-blur-xs">
                <i className="fas fa-landmark mr-1.5 text-amber-300" aria-hidden="true"></i>
                Secretary &amp; Vice Principal • St. Michael&apos;s Umsning
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* MESSAGE 2 (HOME PAGE): Principal's Message (#principal-message) — Image on Left Side */}
      <section
        id="principal-message"
        className="w-full bg-[#0c2d57] py-9 md:py-12 scroll-mt-24 border-t border-slate-800"
      >
        <div className="container">
          <article
            className="institutional-msg-card group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:grid-cols-[340px_1fr]"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706] z-10" />

            {/* Left Compact Image Column */}
            <div
              className="relative h-56 sm:h-64 md:h-full md:min-h-[265px] bg-slate-900 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={SCHOOL_IMAGES.principalPhoto}
                alt="Rev. Sister Principal at her desk in St. Michael's Higher Secondary School, Umsning"
                className="h-full w-full md:absolute md:inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                <i className="fas fa-user-tie mr-1" aria-hidden="true"></i>
                Principal&apos;s Office
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-slate-950/85 border border-amber-400/50 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-xs">
                <i className="fas fa-award mr-1.5 text-amber-300" aria-hidden="true"></i>
                Rev. Sister Principal • St. Michael&apos;s Umsning
              </div>
            </div>

            {/* Right Compact Text Column */}
            <div
              className="flex flex-col justify-center bg-white p-5 sm:p-6 md:px-8 md:py-6"
              data-aos="fade-left"
              data-aos-delay="140"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-200">
                  <i className="fas fa-user-tie mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  From The Principal&apos;s Desk
                </span>
                <span className="rounded-full bg-[#0c4a8a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                  <i className="fas fa-certificate mr-1 text-amber-300" aria-hidden="true"></i>
                  MBOSE-01961
                </span>
              </div>

              <h2 className="vision-serif-heading mt-2.5 text-xl sm:text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Principal&apos;s Message
              </h2>

              <p className="mt-2 text-xs sm:text-sm font-medium leading-6 text-slate-700">
                Every child brings unique gifts and possibilities. Our responsibility at St.
                Michael&apos;s is to provide a disciplined, caring environment where learners ask
                thoughtful questions, excel in MBOSE academics, discover their talents in athletics
                and music, and grow into compassionate citizens.
              </p>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {institutionalValues.map((value, idx) => (
                  <div
                    key={value}
                    className="flex items-center gap-1.5 rounded-lg bg-blue-50/90 px-2.5 py-1.5 text-[11px] font-semibold text-[#0c4a8a] border border-blue-200/80"
                    data-aos="zoom-in"
                    data-aos-delay={140 + idx * 60}
                  >
                    <i
                      className="fas fa-check-circle text-[#d90429] shrink-0 text-xs"
                      aria-hidden="true"
                    ></i>
                    <span className="leading-tight">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-blue-200/80 pt-3 text-xs">
                <div>
                  <span className="font-bold text-[#0c4a8a]">Rev. Sister Principal</span>
                  <span className="hidden sm:inline text-slate-400 mx-1.5">•</span>
                  <span className="block sm:inline text-[11px] font-medium text-slate-600">
                    Principal, St. Michael&apos;s H.S. School, Umsning
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage?.('leadership', 'principal-msg')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                >
                  <span>Read More</span>
                  <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* MESSAGES 3 & 4: Headmistress – Secondary Section & Headmistress – LP Section */}
      <section
        id="headmistress-messages"
        className="w-full bg-[#f4f7fb] py-10 md:py-14 scroll-mt-24 border-t border-slate-200"
      >
        <div className="container">
          <div className="mb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#0c4a8a] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                <i className="fas fa-chalkboard-teacher mr-1.5 text-amber-300" aria-hidden="true"></i>
                Sectional Academic Leadership • Nursery to Class X
              </span>
              <h2 className="vision-serif-heading mt-2.5 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Messages from Our Section Headmistresses
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-md">
              Dedicated pastoral care and stage-wise academic supervision across our Lower Primary
              and Secondary wings.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* 3. Headmistress – Secondary Section */}
            <article
              id="hm-secondary-message"
              className="scroll-mt-28 relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a] z-10" />

              <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                {/* Left side pic for first box */}
                <div className="sm:col-span-5 relative min-h-[220px] sm:min-h-full bg-slate-900 overflow-hidden">
                  <img
                    src={SCHOOL_IMAGES.headmistressSecondary}
                    alt="Rev. Sister Headmistress – Secondary Section in her office desk at St. Michael's Umsning"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/30" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-slate-950/85 border border-blue-400/40 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                    <i className="fas fa-user-tie mr-1.5 text-amber-300" aria-hidden="true"></i>
                    Headmistress (Secondary)
                  </div>
                </div>

                {/* Right side content for first box */}
                <div className="sm:col-span-7 flex flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0c4a8a] border border-blue-200">
                        <i className="fas fa-graduation-cap mr-1 text-[#d97706]" aria-hidden="true"></i>
                        Classes VI to X (MBOSE)
                      </span>
                      <span className="rounded-full bg-[#0c4a8a] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                        Secondary
                      </span>
                    </div>

                    <h3 className="vision-serif-heading mt-2.5 text-lg sm:text-xl text-[#0c4a8a]">
                      <span className="vision-double-angle" aria-hidden="true">
                        &raquo;
                      </span>{' '}
                      Headmistress – Secondary Section
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-700">
                      The Secondary years are a defining bridge where young learners build analytical
                      depth, moral character, and readiness for the MBOSE SSLC Board Examinations.
                      Through structured Continuous and Comprehensive Evaluation (CCE), science practicals,
                      and personal mentorship, we guide every student to achieve distinction.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-[#0c4a8a]">
                        <i className="fas fa-check-circle mr-1 text-[#d97706]" aria-hidden="true"></i>
                        MBOSE SSLC Preparation
                      </span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-[#0c4a8a]">
                        <i className="fas fa-check-circle mr-1 text-[#d97706]" aria-hidden="true"></i>
                        Remedial Mentorship
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3 text-xs">
                    <div>
                      <span className="font-bold text-[#0c4a8a] text-[11px] block">
                        Office of the Headmistress
                      </span>
                      <span className="block text-[10px] font-medium text-slate-500">
                        Secondary Section • Umsning
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigatePage?.('leadership', 'hm-sec-msg')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#0c4a8a] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* 4. Headmistress – LP Section */}
            <article
              id="hm-lp-message"
              className="scroll-mt-28 relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-left"
              data-aos-delay="120"
              data-aos-duration="750"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706] z-10" />

              <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                {/* Left side content for second box */}
                <div className="sm:col-span-7 order-2 sm:order-1 flex flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900 border border-amber-200">
                        <i className="fas fa-child mr-1 text-[#d97706]" aria-hidden="true"></i>
                        Foundational &amp; LP • Nursery to V
                      </span>
                      <span className="rounded-full bg-[#d97706] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                        LP Section
                      </span>
                    </div>

                    <h3 className="vision-serif-heading mt-2.5 text-lg sm:text-xl text-[#0c4a8a]">
                      <span className="vision-double-angle" aria-hidden="true">
                        &raquo;
                      </span>{' '}
                      Headmistress – LP Section
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-700">
                      A child&apos;s earliest years in school shape a lifetime love for learning. In our
                      Lower Primary section, we nurture curiosity, foundational literacy in English and
                      Khasi, numeracy, good manners, and joyful expression in a warm, caring environment
                      where every young learner feels safe, valued, and inspired to grow.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-[#0c4a8a]">
                        <i className="fas fa-check-circle mr-1 text-[#0c4a8a]" aria-hidden="true"></i>
                        Foundational Literacy
                      </span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-[#0c4a8a]">
                        <i className="fas fa-check-circle mr-1 text-[#0c4a8a]" aria-hidden="true"></i>
                        Moral &amp; Creative Care
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3 text-xs">
                    <div>
                      <span className="font-bold text-[#0c4a8a] text-[11px] block">
                        Office of the Headmistress
                      </span>
                      <span className="block text-[10px] font-medium text-slate-500">
                        Lower Primary Section • Umsning
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigatePage?.('leadership', 'hm-lp-msg')}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#0c4a8a] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                {/* Right side pic for second box */}
                <div className="sm:col-span-5 order-1 sm:order-2 relative min-h-[220px] sm:min-h-full bg-slate-900 overflow-hidden">
                  <img
                    src={SCHOOL_IMAGES.headmistressLP}
                    alt="Rev. Sister Headmistress – Lower Primary (LP) Section at St. Michael's Umsning"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent sm:bg-gradient-to-l sm:from-transparent sm:to-black/30" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-slate-950/85 border border-amber-400/40 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                    <i className="fas fa-child mr-1.5 text-amber-300" aria-hidden="true"></i>
                    Headmistress (LP Section)
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
