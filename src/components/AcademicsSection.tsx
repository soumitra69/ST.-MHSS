import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { STREAMS } from '../data/schoolData';
import { AppPageId } from './InstitutionalSection';

interface AcademicsSectionProps {
  onOpenAdmission: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
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

const STREAM_ICONS = ['fas fa-atom', 'fas fa-chart-line', 'fas fa-palette', 'fas fa-tools'];

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
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onNavigatePage?.('academic-syllabus', 'classes-subjects')}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#0c4a8a] hover:bg-[#d97706] text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs transition-all cursor-pointer"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigatePage?.('academic-calendar')}
                      className="rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer"
                      title="View Academic Calendar"
                    >
                      <span>Calendar</span>
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
            {/* Left 5 Cols: Overview, Eligibility Note & Highlights */}
            <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="rounded-md bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-950">
                  MBOSE HSSLC • Stream 0{selectedStream + 1}
                </span>
                <span className="text-[11px] font-bold text-[#0c4a8a]">
                  Classes XI &amp; XII
                </span>
              </div>

              <h4 className="text-xl font-bold text-[#0c4a8a]">{STREAMS[selectedStream].name}</h4>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                {STREAMS[selectedStream].tagline}
              </p>

              {/* Eligibility Cut-off / Note from Official Prospectus */}
              {STREAMS[selectedStream].eligibilityNote && (
                <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50/90 p-3.5 text-xs text-amber-950 leading-relaxed">
                  <div className="font-extrabold flex items-center gap-1.5 text-amber-900 mb-1">
                    <i className="fas fa-clipboard-check text-[#d97706]" aria-hidden="true"></i>
                    <span>Prospectus Eligibility &amp; Admission Note:</span>
                  </div>
                  <p className="font-medium text-[11px] sm:text-xs text-slate-800">
                    {STREAMS[selectedStream].eligibilityNote}
                  </p>
                </div>
              )}

              <div className="mt-4 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#d97706]">
                  <i className="fas fa-star mr-1" aria-hidden="true"></i>
                  Stream Highlights
                </p>
                {STREAMS[selectedStream].features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs font-medium text-slate-800"
                  >
                    <i className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0 text-xs" aria-hidden="true"></i>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 7 Cols: Structured Subjects Table (Compulsory, Elective & 4th Subject) */}
            <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0c4a8a] flex items-center gap-1.5">
                  <i className="fas fa-book-open text-[#d97706]" aria-hidden="true"></i>
                  <span>Official Subject Distribution (Prospectus Pages 2 &amp; 3)</span>
                </p>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                  MBOSE Affiliated
                </span>
              </div>

              {/* Compulsory Subjects Box */}
              {STREAMS[selectedStream].compulsorySubjects && (
                <div className="rounded-xl border border-blue-200 bg-white p-3.5">
                  <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a] mb-2 flex items-center gap-1.5">
                    <i className="fas fa-lock text-[#d97706] text-[10px]" aria-hidden="true"></i>
                    <span>Compulsory Subjects</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {STREAMS[selectedStream].compulsorySubjects.map((sub, i) => (
                      <div
                        key={sub}
                        className="flex items-center gap-2 rounded-lg bg-blue-50/70 border border-blue-100 px-3 py-2 text-xs font-bold text-[#0c4a8a]"
                      >
                        <span className="h-5 w-5 rounded-md bg-[#0c4a8a] text-white flex items-center justify-center text-[10px] font-mono shrink-0">
                          {i + 1}
                        </span>
                        <span className="leading-tight">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Elective Subjects Box */}
              {STREAMS[selectedStream].electiveSubjects && (
                <div className="rounded-xl border border-emerald-200 bg-white p-3.5">
                  <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                    <i className="fas fa-check-square text-emerald-600 text-[10px]" aria-hidden="true"></i>
                    <span>Elective Subjects</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {STREAMS[selectedStream].electiveSubjects.map((sub, i) => (
                      <div
                        key={sub}
                        className="flex items-center gap-2 rounded-lg bg-emerald-50/70 border border-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-950"
                      >
                        <span className="h-5 w-5 rounded-md bg-emerald-700 text-white flex items-center justify-center text-[10px] font-mono shrink-0">
                          {i + 1}
                        </span>
                        <span className="leading-tight">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4th Subject / Special Option */}
              {STREAMS[selectedStream].fourthSubject && (
                <div className="rounded-xl border border-purple-200 bg-purple-50/80 p-3.5 text-xs text-purple-950">
                  <div className="font-extrabold flex items-center gap-1.5 text-purple-900 mb-1">
                    <i className="fas fa-layer-group text-purple-700" aria-hidden="true"></i>
                    <span>4th Subject / Options:</span>
                  </div>
                  <p className="font-medium text-slate-800">
                    {STREAMS[selectedStream].fourthSubject}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#0c2d57] p-5 text-white shadow-lg sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs font-medium leading-6 text-slate-100 sm:text-sm">
              Admissions for Class XI (Science, Commerce, Arts &amp; Vocational) are open for the 2026–27 session. Forms issued immediately after MBOSE SSLC result declaration.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigatePage?.('fee-structure-page')}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-white/20 cursor-pointer"
              >
                <i className="fas fa-file-invoice-dollar text-amber-300" aria-hidden="true"></i>
                <span>Fee Structure</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                onClick={onOpenAdmission}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-[#d97706] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                <span>Apply for Admission</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
