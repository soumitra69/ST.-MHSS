import React, { useState, useMemo } from 'react';
import { SCHOOL_INFO, NOTICES, Notice } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface NoticePageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

const EXTENDED_NOTICES: Notice[] = [
  ...NOTICES,
  {
    id: 'not-07',
    title: 'Mandatory School Uniform, Track-Suit & Daily School Diary Circular',
    date: 'February 10, 2026',
    category: 'General',
    isUrgent: false,
    description:
      'All students from Nursery to Class XII must wear the prescribed regular school uniform on Monday, Tuesday, and Thursday, and the official House Track-Suit with team T-shirt and white shoes on Wednesday and Friday. Students must bring the School Diary and ID card every day.',
    fileSize: '490 KB PDF',
  },
  {
    id: 'not-08',
    title: 'Transfer Certificate (TC) & New Admission Verification Guidelines 2026–27',
    date: 'January 28, 2026',
    category: 'Admissions',
    isUrgent: false,
    description:
      'Candidates seeking admission from a recognised school must produce an original Transfer Certificate (TC) and appear in person before the Principal with parents/guardians. Applications for withdrawal TC must be submitted in writing by parents after clearing all school dues.',
    fileSize: '610 KB PDF',
  },
  {
    id: 'not-09',
    title: 'NH-6 Campus School Bus Transit Registration (Routes 1 to 4)',
    date: 'January 18, 2026',
    category: 'General',
    isUrgent: false,
    description:
      'Registration for daily school bus pickup and dispersal across Route 1 (Nongpoh–Umling), Route 2 (Bhoirymbong–Umroi), Route 3 (Mawrong–Sumer), and Route 4 (Umsning Town Shuttle) is open at the School Secretariat.',
    fileSize: '730 KB PDF',
  },
  {
    id: 'not-10',
    title: 'Observation of Feast of St. Michael the Archangel & Diocesan Holidays',
    date: 'January 10, 2026',
    category: 'Holiday',
    isUrgent: false,
    description:
      'Official list of MBOSE state holidays, Archdiocese of Shillong feast days, and Patron Feast Day (29 September) observances for the 2026–27 academic session.',
    fileSize: '540 KB PDF',
  },
];

type NoticeCategoryFilter =
  | 'All'
  | 'Urgent'
  | 'Academic'
  | 'Admissions'
  | 'Examination'
  | 'Sports'
  | 'Holiday'
  | 'General';

export const NoticePage: React.FC<NoticePageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<NoticeCategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  const filteredNotices = useMemo(() => {
    return EXTENDED_NOTICES.filter((n) => {
      const matchesCat =
        selectedCategory === 'All'
          ? true
          : selectedCategory === 'Urgent'
            ? Boolean(n.isUrgent)
            : n.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q) ||
        n.date.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="notice-page"
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
            <span className="text-[#0c4a8a]">Official Secretariat Desk</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Official Notice Board &amp; Circulars</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigatePage && (
              <button
                type="button"
                onClick={() => onNavigatePage('events')}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
              >
                <i className="fas fa-calendar-check text-[#d97706]" aria-hidden="true"></i>
                <span>Campus Events</span>
              </button>
            )}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-bullhorn mr-1.5" aria-hidden="true"></i>
                  Official Digital Notice Board • 2026–27
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-certificate mr-1.5" aria-hidden="true"></i>
                  MBOSE Code: {SCHOOL_INFO.schoolCode}
                </span>
              </div>

              <h1
                className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
                style={{ color: '#ffffff' }}
              >
                Official Notices &amp; Circulars
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Stay informed with verified announcements, MBOSE board examination schedules,
                admission notifications, scholarship endowments, and campus directives issued by the
                Office of the Principal and Secretariat at{' '}
                <strong>{SCHOOL_INFO.name}, Umsning</strong>.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              {onOpenAdmission && (
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <i className="fas fa-user-plus" aria-hidden="true"></i>
                  <span>Apply 2026–27</span>
                </button>
              )}
              {onNavigatePage && (
                <button
                  type="button"
                  onClick={() => onNavigatePage('academic-calendar')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <i className="fas fa-calendar-alt text-amber-300" aria-hidden="true"></i>
                  <span>Academic Calendar</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div
          id="notices-filter-bar"
          className="mt-8 scroll-mt-28 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center sm:p-5"
        >
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter notices by category"
          >
            {(
              [
                'All',
                'Urgent',
                'Academic',
                'Admissions',
                'Examination',
                'Sports',
                'Holiday',
                'General',
              ] as NoticeCategoryFilter[]
            ).map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0c4a8a] text-white shadow-md'
                      : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                  }`}
                >
                  {cat === 'Urgent' && (
                    <i className="fas fa-bolt text-amber-400" aria-hidden="true"></i>
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[250px]">
            <i
              className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"
              aria-hidden="true"
            ></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars by keyword..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Notices Grid */}
        {filteredNotices.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-base font-extrabold text-[#0c4a8a]">No matching circulars found</p>
            <p className="mt-1 text-xs text-slate-500">
              Try selecting &ldquo;All&rdquo; categories or clearing your search query.
            </p>
          </div>
        ) : (
          <div id="notices-grid" className="mt-8 scroll-mt-28 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredNotices.map((notice, idx) => (
              <article
                key={notice.id}
                onClick={() => setActiveNotice(notice)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 ${
                    notice.isUrgent ? 'bg-[#d97706]' : 'bg-[#0c4a8a]'
                  }`}
                />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                        <i className="fas fa-bullhorn text-[#d97706]" aria-hidden="true"></i>
                        {notice.category}
                      </span>
                      {notice.isUrgent && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                          <i className="fas fa-bolt text-[#d97706]" aria-hidden="true"></i>
                          Priority Circular
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] font-bold text-slate-400">
                      REF: SMHSS/2026/{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-[#d97706]">
                    <i className="far fa-calendar-alt" aria-hidden="true"></i>
                    <span>Published: {notice.date}</span>
                  </div>

                  <h2 className="vision-serif-heading mt-2 text-lg sm:text-xl text-[#0c4a8a] group-hover:text-[#d97706] transition-colors">
                    <span className="vision-double-angle" aria-hidden="true">
                      &raquo;
                    </span>{' '}
                    {notice.title}
                  </h2>

                  <p className="mt-2.5 text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                    {notice.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3.5 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-slate-500">
                    <i className="far fa-file-pdf text-rose-600" aria-hidden="true"></i>
                    {notice.fileSize || 'Official Circular PDF'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#0c4a8a] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white transition-colors group-hover:bg-[#d97706]">
                    <span>Read More</span>
                    <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Circular Detail Modal */}
        {activeNotice && (
          <div
            className="hero-nb-modal-backdrop"
            onClick={() => setActiveNotice(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-page-modal-title"
          >
            <div className="hero-nb-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="hero-nb-modal-header">
                <div>
                  <span className="hero-nb-modal-kicker">
                    OFFICIAL SCHOOL CIRCULAR • {activeNotice.id.toUpperCase()}
                  </span>
                  <h3 id="notice-page-modal-title" className="hero-nb-modal-title">
                    {activeNotice.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveNotice(null)}
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
                    {activeNotice.date}
                  </span>
                  <span className="hero-nb-modal-pill">
                    <i className="fas fa-tag mr-1.5 text-sky-300" aria-hidden="true"></i>
                    {activeNotice.category}
                  </span>
                  {activeNotice.fileSize && (
                    <span className="hero-nb-modal-pill">
                      <i className="far fa-file-pdf mr-1.5 text-rose-300" aria-hidden="true"></i>
                      {activeNotice.fileSize}
                    </span>
                  )}
                </div>

                <p className="hero-nb-modal-text">{activeNotice.description}</p>

                <div className="hero-nb-modal-signoff">
                  <div>
                    <strong>Office of the Principal</strong>
                    <span>St. Michael&apos;s Higher Secondary School, Umsning</span>
                  </div>
                  <span className="hero-nb-modal-stamp">MBOSE • 01961</span>
                </div>
              </div>

              <div className="hero-nb-modal-footer">
                <button
                  type="button"
                  onClick={() => setActiveNotice(null)}
                  className="hero-nb-action-secondary"
                >
                  Close Window
                </button>
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

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Official Digital Notice Board • Secretariat Helpline: {SCHOOL_INFO.phoneMobile}
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
