import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { STREAMS } from '../data/schoolData';
import { AppPageId } from './InstitutionalSection';

interface AcademicsSectionProps {
  onOpenAdmission: () => void;
  onNavigatePage?: (page: AppPageId) => void;
}

const academicStages = [
  {
    number: '01',
    name: 'Early Years Foundation',
    classes: 'Nursery & Kindergarten (KG)',
    icon: 'fas fa-child',
    detail:
      'Activity-based foundational literacy, numeracy, phonics, and joyful socialization in a warm, caring environment (8:45 AM – 2:00 PM).',
    image: SCHOOL_IMAGES.campus,
    imageAlt: 'St. Michael’s school campus in Umsning',
    badgeClass: 'bg-[#0c4a8a] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#0c4a8a]',
    tagColor: 'text-[#0c4a8a] bg-blue-50 border-blue-200',
  },
  {
    number: '02',
    name: 'Lower & Upper Primary',
    classes: 'Classes I – V (Primary Section)',
    icon: 'fas fa-book-reader',
    detail:
      'English medium instruction, mathematics, environmental studies, weekly unit tests, and two annual Term Examinations (8:45 AM – 2:00 PM).',
    image: SCHOOL_IMAGES.houseAssembly,
    imageAlt: 'Students gathered for 4-House assembly at St. Michael’s',
    badgeClass: 'bg-[#d97706] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#d97706]',
    tagColor: 'text-amber-900 bg-amber-50 border-amber-200',
  },
  {
    number: '03',
    name: 'Secondary Section',
    classes: 'Classes VI – X (MBOSE SSLC)',
    icon: 'fas fa-flask',
    detail:
      'English medium instruction with Half-Yearly/Pre-Selection and Selection/Promotion exams, laboratory practicals, and SSLC board mentoring (8:45 AM – 3:00 PM).',
    image: SCHOOL_IMAGES.geographyFieldwork,
    imageAlt: 'Students taking part in an academic field activity',
    badgeClass: 'bg-[#0c4a8a] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#0c4a8a]',
    tagColor: 'text-[#0c4a8a] bg-blue-50 border-blue-200',
  },
  {
    number: '04',
    name: 'Higher Secondary (HSSLC)',
    classes: 'Classes XI – XII (Science, Arts & Commerce)',
    icon: 'fas fa-user-graduate',
    detail:
      'Pre-Promotion & Promotion exams (Class XI) and Pre-Selection & Selection exams (Class XII) with dedicated labs and fieldwork (8:45 AM – 3:00 PM).',
    image: SCHOOL_IMAGES.graduatingBatch,
    imageAlt: 'Senior secondary scholars and faculty at St. Michael’s',
    badgeClass: 'bg-[#0c2d57] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#0c2d57]',
    tagColor: 'text-[#0c4a8a] bg-blue-50 border-blue-200',
  },
];

const STREAM_ICONS = ['fas fa-atom', 'fas fa-landmark', 'fas fa-chart-line'];

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({
  onOpenAdmission,
  onNavigatePage,
}) => {
  const [selectedStream, setSelectedStream] = useState(0);

  return (
    <section
      id="academics"
      className="w-full overflow-hidden bg-[#f4f7fb] py-16 md:py-24 scroll-mt-20 border-t border-slate-200"
    >
      <div className="container">
        <header
          className="mb-10 flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end md:mb-12"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#0c4a8a] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
              <i className="fas fa-graduation-cap mr-1.5 text-amber-300" aria-hidden="true"></i>
              MBOSE Curriculum • Nursery to Class XII
            </span>
            <h2 className="vision-serif-heading mt-3 text-3xl leading-tight text-[#0c4a8a] sm:text-4xl">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Academic Progression &amp; Pathways
            </h2>
          </div>
          <p className="max-w-md rounded-xl border border-blue-200 bg-white/80 p-3.5 text-sm font-medium leading-6 text-slate-700 shadow-xs sm:text-base">
            English medium education from Nursery to Class XII rooted in MBOSE academic standards,
            intellectual formation, and moral integrity.
          </p>
        </header>

        {/* 4 Colour-Coded School Stages */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicStages.map(
            (
              {
                number,
                name,
                classes,
                icon,
                detail,
                image,
                imageAlt,
                badgeClass,
                cardBorder,
                topBar,
                tagColor,
              },
              index
            ) => (
              <article
                key={number}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${cardBorder}`}
                data-aos="fade-up"
                data-aos-delay={90 * (index + 1)}
              >
                <div className={`h-2 w-full ${topBar}`} />
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <span
                    className={`absolute top-3 left-3 rounded-lg px-3 py-1 text-xs font-extrabold tracking-wider shadow-md ${badgeClass}`}
                  >
                    <i className={`${icon} mr-1.5`} aria-hidden="true"></i>
                    STAGE {number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span
                      className={`inline-block rounded-md border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${tagColor}`}
                    >
                      {classes}
                    </span>
                    <h3 className="mt-2.5 text-lg font-bold leading-snug text-[#0c4a8a]">{name}</h3>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-700">
                      {detail}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onNavigatePage?.('academic-calendar')}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0c4a8a] hover:text-[#d97706] cursor-pointer"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        {/* Higher Secondary Streams Explorer (Class XI - XII) */}
        <div
          id="streams"
          className="mt-14 scroll-mt-24 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a]" />
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-center">
            <div>
              <span className="inline-block rounded-md bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-900">
                <i className="fas fa-university mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                Higher Secondary Section (MBOSE HSSLC)
              </span>
              <h3 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a] sm:text-3xl">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Class XI &amp; XII Streams Offered
              </h3>
            </div>

            <div
              className="flex flex-wrap gap-2.5"
              role="tablist"
              aria-label="Higher Secondary Streams"
            >
              {STREAMS.map((stream, index) => {
                const shortLabel = stream.name
                  .replace('Higher Secondary ', '')
                  .replace(' (Class XI - XII)', '');
                const isSelected = selectedStream === index;
                return (
                  <button
                    key={stream.name}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedStream(index)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#0c4a8a] text-white shadow-md'
                        : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                    }`}
                  >
                    <i className={STREAM_ICONS[index % STREAM_ICONS.length]} aria-hidden="true"></i>
                    {shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stream Details */}
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs">
              <h4 className="text-xl font-bold text-[#0c4a8a]">{STREAMS[selectedStream].name}</h4>
              <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
                {STREAMS[selectedStream].tagline}
              </p>

              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#d97706]">
                  <i className="fas fa-star mr-1" aria-hidden="true"></i>
                  Department Highlights
                </p>
                {STREAMS[selectedStream].features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2.5 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs font-medium text-slate-800 sm:text-sm"
                  >
                    <i className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0" aria-hidden="true"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0c4a8a]">
                <i className="fas fa-book mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                Core &amp; Elective Subjects (MBOSE)
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {STREAMS[selectedStream].subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-[#0c4a8a] shadow-xs"
                  >
                    <i className="fas fa-check mr-1 text-[10px] text-[#d97706]" aria-hidden="true"></i>
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#0c2d57] p-5 text-white shadow-lg sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs font-medium leading-6 text-slate-100 sm:text-sm">
              Admissions for Class XI (Science, Arts &amp; Commerce) and Nursery to Class X are open
              for the 2026–27 session. Transfer Certificate (TC) from a recognised school is
              required.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigatePage?.('academic-calendar')}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-white/20 cursor-pointer"
              >
                <i className="fas fa-calendar-alt text-amber-300" aria-hidden="true"></i>
                <span>Read More</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                onClick={onOpenAdmission}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-[#d97706] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                <span>Read More</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
