import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO, HOUSES } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface MissionVisionPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

const missionPillars = [
  'Intellectual & skill formation across Nursery to Class XII',
  'Moral integrity, personal discipline & spiritual growth',
  'Cultural appreciation, regional pride & social service',
];

const visionPillars = [
  'Confidence, academic competency & MBOSE excellence',
  'Psychological resilience & character formation',
  'Responsible citizenship & visionary leadership',
];

const sevenCoreObjectives = [
  {
    number: '01',
    title: 'Intellectual Formation',
    icon: 'fas fa-brain',
    description:
      'Cultivating analytical curiosity, scientific inquiry, linguistic fluency in English and Khasi, and academic mastery across the MBOSE curriculum.',
  },
  {
    number: '02',
    title: 'Skill Acquisition',
    icon: 'fas fa-tools',
    description:
      'Equipping learners with practical laboratory skills, computer literacy, public speaking, teamwork, and problem-solving capabilities for the modern world.',
  },
  {
    number: '03',
    title: 'Appreciation of Culture',
    icon: 'fas fa-music',
    description:
      'Honoring and preserving the indigenous Khasi and Ri Bhoi cultural heritage alongside national harmony, literature, and choral arts.',
  },
  {
    number: '04',
    title: 'Moral Integrity',
    icon: 'fas fa-balance-scale',
    description:
      'Instilling honesty, respect for parents and elders, truthfulness, and ethical responsibility in daily conduct inside and outside the campus.',
  },
  {
    number: '05',
    title: 'Spiritual Formation',
    icon: 'fas fa-praying-hands',
    description:
      'Nurturing reverence for God, daily morning prayer, inner peace, and universal brotherhood in the Catholic missionary tradition.',
  },
  {
    number: '06',
    title: 'Psychological Growth',
    icon: 'fas fa-heart',
    description:
      'Providing a safe, encouraging, and joyful environment where every child builds self-esteem, emotional maturity, and resilience.',
  },
  {
    number: '07',
    title: 'Social Responsibility',
    icon: 'fas fa-hands-helping',
    description:
      'Forming compassionate citizens who care for the environment, serve rural communities, and stand up for justice and the common good.',
  },
];

export const MissionVisionPage: React.FC<MissionVisionPageProps> = ({
  onBack,
  onNavigatePage,
}) => {
  return (
    <section
      id="mission-vision-page"
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
            <span className="text-[#0c4a8a]">About</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Our Mission &amp; Our Vision</span>
          </div>

          {onNavigatePage && (
            <button
              type="button"
              onClick={() => onNavigatePage('who-we-are')}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
            >
              <i className="fas fa-school text-[#d97706]" aria-hidden="true"></i>
              <span>Who We Are</span>
            </button>
          )}
        </div>

        {/* Executive Hero Header */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                <i className="fas fa-bullseye mr-1.5" aria-hidden="true"></i>
                Aim: Overall Development of the Child
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                <i className="fas fa-award mr-1.5" aria-hidden="true"></i>
                Motto: &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo;
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Our Mission &amp; Our Vision
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Rooted in the pioneering Catholic educational heritage established in{' '}
              <strong>1961</strong> by <strong>Fr. Michael Balawan</strong>,{' '}
              <strong>{SCHOOL_INFO.name}, Umsning</strong> is dedicated to forming confident,
              competent, and compassionate <strong>&ldquo;Michaelians&rdquo;</strong> who strive
              ever upward (<em>{SCHOOL_INFO.mottoLatin}</em>) and step forward with courage (
              <em>{SCHOOL_INFO.mottoKhasi}</em>).
            </p>
          </div>
        </div>

        {/* ====================================================================
            BOX 1: OUR MISSION — Mission Picture on the LEFT Side of Mission Box
            ==================================================================== */}
        <div className="mt-10">
          <article
            id="mission"
            className="institutional-msg-card group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl md:grid-cols-[360px_1fr]"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a] z-10" />

            {/* Left Mission Picture Column */}
            <div className="relative h-64 sm:h-72 md:h-full md:min-h-[300px] bg-slate-900 overflow-hidden">
              <img
                src={SCHOOL_IMAGES.campusAssembly}
                alt="Morning assembly and holistic student formation at St. Michael's Higher Secondary School, Umsning"
                className="h-full w-full md:absolute md:inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute top-3 left-3 rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/25">
                <i className="fas fa-bullseye mr-1 text-amber-300" aria-hidden="true"></i>
                Institutional Mission
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-[#0c2d57]/95 border border-amber-400/40 px-3 py-1.5 text-[11px] font-bold text-white shadow-md backdrop-blur-xs">
                <i className="fas fa-graduation-cap mr-1.5 text-amber-300" aria-hidden="true"></i>
                Our Mission • St. Michael&apos;s Umsning
              </div>
            </div>

            {/* Right Mission Text Column */}
            <div className="flex flex-col justify-center bg-white p-6 sm:p-7 md:px-9 md:py-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0c4a8a] border border-blue-200">
                  <i className="fas fa-bullseye mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Institutional Aim &amp; Mission
                </span>
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900 border border-amber-200">
                  <i className="fas fa-cross mr-1 text-[#d97706]" aria-hidden="true"></i>
                  Aim: Overall Development of the Child
                </span>
              </div>

              <h2 className="vision-serif-heading mt-3 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Our Mission
              </h2>

              <p className="mt-2.5 text-sm sm:text-base font-medium leading-7 text-slate-700">
                Guided by our supreme institutional aim —{' '}
                <strong>Overall Development of the Child</strong> — St. Michael&apos;s Higher
                Secondary School provides an inclusive, values-led education that forms every
                learner intellectually, morally, spiritually, culturally, and socially in the
                Catholic tradition from Nursery to Class XII, nurturing disciplined and
                compassionate citizens.
              </p>

              <p className="mt-2 text-xs sm:text-sm font-medium leading-6 text-slate-600">
                Through dedicated classroom mentorship, modern science and computer laboratories,
                synchronized physical drill, and pastoral care under the Catholic Mission of
                Umsning, we accompany each child to discover their God-given potential.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {missionPillars.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-[#0c4a8a] border border-slate-200"
                  >
                    <i
                      className="fas fa-check-circle text-[#d97706] shrink-0 text-xs"
                      aria-hidden="true"
                    ></i>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* ====================================================================
            BOX 2: OUR VISION — Vision Picture on the RIGHT Side of Vision Box
            ==================================================================== */}
        <div className="mt-8">
          <article
            id="vision"
            className="institutional-msg-card group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl md:grid-cols-[1fr_360px]"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706] z-10" />

            {/* Left Vision Text Column */}
            <div className="order-2 md:order-1 flex flex-col justify-center bg-white p-6 sm:p-7 md:px-9 md:py-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0c4a8a] border border-blue-200">
                  <i className="fas fa-eye mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Torch of the Michaelians
                </span>
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900 border border-amber-200">
                  <i className="fas fa-cross mr-1 text-[#d97706]" aria-hidden="true"></i>
                  Motto: Excelsior &amp; Shaphrang
                </span>
              </div>

              <h2 className="vision-serif-heading mt-3 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Our Vision
              </h2>

              <p className="mt-2.5 text-sm sm:text-base font-medium leading-7 text-slate-700">
                Our vision is to empower every <strong>&ldquo;Michaelian&rdquo;</strong> to step
                forward with confidence, character, and competence under our motto{' '}
                <em>{SCHOOL_INFO.mottoLatin}</em> (Ever Upward) &amp;{' '}
                <em>{SCHOOL_INFO.mottoKhasi}</em> (Step Forward) — nurturing responsible leaders who
                serve Meghalaya and the nation with excellence, cultural pride, and moral
                conviction.
              </p>

              <p className="mt-2 text-xs sm:text-sm font-medium leading-6 text-slate-600">
                We envision a learning community where rural and urban youth alike achieve
                state-level distinction in MBOSE examinations while remaining deeply rooted in
                humility, civic duty, and respect for all.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {visionPillars.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-[#0c4a8a] border border-slate-200"
                  >
                    <i
                      className="fas fa-check-circle text-[#d97706] shrink-0 text-xs"
                      aria-hidden="true"
                    ></i>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Vision Picture Column */}
            <div className="relative order-1 md:order-2 h-64 sm:h-72 md:h-full md:min-h-[300px] bg-slate-900 overflow-hidden">
              <img
                src={SCHOOL_IMAGES.studentLeaders}
                alt="Michaelian student leaders embodying the school's vision at St. Michael's Higher Secondary School, Umsning"
                className="h-full w-full md:absolute md:inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute top-3 right-3 rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/25">
                <i className="fas fa-eye mr-1 text-amber-300" aria-hidden="true"></i>
                Institutional Vision
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-[#0c2d57]/95 border border-amber-400/40 px-3 py-1.5 text-[11px] font-bold text-white shadow-md backdrop-blur-xs">
                <i className="fas fa-landmark mr-1.5 text-amber-300" aria-hidden="true"></i>
                Our Vision • St. Michael&apos;s Umsning
              </div>
            </div>
          </article>
        </div>

        {/* ====================================================================
            SEVEN CORE INSTITUTIONAL OBJECTIVES (Official School Diary)
            ==================================================================== */}
        <div
          id="objectives"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                <i className="fas fa-list-check mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                From the Official School Diary
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Our Seven Core Educational Objectives
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-600">
              Holistic Formation • Nursery to Class XII
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sevenCoreObjectives.map((obj) => (
              <div
                key={obj.number}
                className="flex flex-col justify-between rounded-xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-[#f8fafc] p-5 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0c4a8a] text-xs text-amber-300">
                      <i className={obj.icon} aria-hidden="true"></i>
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                      Objective {obj.number}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-extrabold text-[#0c4a8a]">{obj.title}</h3>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-700">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Card: Summary Motto Card */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-700 bg-[#0c2d57] p-5 text-white shadow-md">
              <div>
                <span className="inline-block rounded-md bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Torch of Michaelians
                </span>
                <h3 className="mt-3 text-base font-extrabold text-amber-300">
                  &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo;
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-200">
                  Every objective converges on a single sacred trust: forming young men and women of
                  character, courage, and competence for Meghalaya and the world.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] font-bold text-amber-200">
                Catholic Mission of Umsning • Estd. 1961
              </div>
            </div>
          </div>
        </div>

        {/* 4 Archangel Houses Living the Mission */}
        <div
          id="houses"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
              <i className="fas fa-shield-alt mr-1.5 text-[#d97706]" aria-hidden="true"></i>
              Values in Action • 4-House System
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              The Four Archangel Houses
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOUSES.map((house) => (
              <div
                key={house.name}
                className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs"
              >
                <span
                  className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${house.bgClass}`}
                >
                  {house.color} House
                </span>
                <h3 className="mt-2.5 text-base font-extrabold text-[#0c4a8a]">{house.name}</h3>
                <p className="mt-1 text-xs font-bold italic text-[#d97706]">{house.motto}</p>
                <p className="mt-2 text-xs font-medium text-slate-600">
                  Honour: <strong>{house.trophies}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Our Mission &amp; Our Vision • Motto: &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo;
            </span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </section>
  );
};
