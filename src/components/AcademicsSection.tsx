import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { STREAMS } from '../data/schoolData';

interface AcademicsSectionProps {
  onOpenAdmission: () => void;
}

const academicStages = [
  {
    number: '01',
    name: 'Early Years Foundation',
    classes: 'Nursery & Kindergarten (KG I – II)',
    icon: 'fas fa-child',
    detail:
      'Activity-based foundational literacy, numeracy, phonics, and joyful socialization in a nurturing setting.',
    image: SCHOOL_IMAGES.campus,
    imageAlt: 'St. Michael’s school campus in Umsning',
    badgeClass: 'bg-gradient-to-r from-[#e11d48] to-[#f43f5e] text-white',
    cardBorder: 'border-rose-300 bg-gradient-to-b from-white to-rose-50/70',
    topBar: 'bg-gradient-to-r from-[#e11d48] to-[#fb7185]',
    tagColor: 'text-rose-700 bg-rose-100 border-rose-200',
  },
  {
    number: '02',
    name: 'Primary School',
    classes: 'Classes I – V',
    icon: 'fas fa-book-reader',
    detail:
      'Core languages (English & Khasi), environmental studies, mathematics, and moral character instruction.',
    image: SCHOOL_IMAGES.houseAssembly,
    imageAlt: 'Students gathered for 4-House assembly at St. Michael’s',
    badgeClass: 'bg-gradient-to-r from-[#ea580c] to-[#f59e0b] text-white',
    cardBorder: 'border-orange-300 bg-gradient-to-b from-white to-orange-50/70',
    topBar: 'bg-gradient-to-r from-[#ea580c] to-[#fbbf24]',
    tagColor: 'text-orange-800 bg-orange-100 border-orange-200',
  },
  {
    number: '03',
    name: 'Upper Primary & Secondary',
    classes: 'Classes VI – X (MBOSE SSLC)',
    icon: 'fas fa-flask',
    detail:
      'Comprehensive board preparation with laboratory practicals, computer literacy, and merit mentoring.',
    image: SCHOOL_IMAGES.geographyFieldwork,
    imageAlt: 'Students taking part in an academic field activity',
    badgeClass: 'bg-gradient-to-r from-[#0d9488] to-[#10b981] text-white',
    cardBorder: 'border-teal-300 bg-gradient-to-b from-white to-teal-50/70',
    topBar: 'bg-gradient-to-r from-[#0d9488] to-[#34d399]',
    tagColor: 'text-teal-800 bg-teal-100 border-teal-200',
  },
  {
    number: '04',
    name: 'Higher Secondary (HSSLC)',
    classes: 'Classes XI – XII (Science, Arts & Commerce)',
    icon: 'fas fa-user-graduate',
    detail:
      'Specialized pre-university streams with dedicated laboratories, fieldwork, and career counselling.',
    image: SCHOOL_IMAGES.graduatingBatch,
    imageAlt: 'Senior secondary scholars and faculty at St. Michael’s',
    badgeClass: 'bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white',
    cardBorder: 'border-blue-300 bg-gradient-to-b from-white to-blue-50/70',
    topBar: 'bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa]',
    tagColor: 'text-blue-800 bg-blue-100 border-blue-200',
  },
];

const STREAM_ICONS = ['fas fa-atom', 'fas fa-landmark', 'fas fa-chart-line'];

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmission }) => {
  const [selectedStream, setSelectedStream] = useState(0);

  return (
    <section
      id="academics"
      className="w-full overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-[#fef3c7] to-[#dcfce7] py-16 md:py-24 scroll-mt-20 border-t border-blue-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header
          className="mb-10 flex flex-col justify-between gap-5 border-b-2 border-blue-300/60 pb-7 sm:flex-row sm:items-end md:mb-12"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0d9488] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
              <i className="fas fa-graduation-cap mr-1.5" aria-hidden="true"></i>
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
            A structured educational journey in Umsning rooted in MBOSE academic standards, character
            formation, and university readiness.
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
                </div>
              </article>
            )
          )}
        </div>

        {/* Higher Secondary Streams Explorer (Class XI - XII) */}
        <div
          id="streams"
          className="mt-14 scroll-mt-24 relative overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-white via-blue-50/50 to-amber-50/60 p-6 shadow-2xl sm:p-8 lg:p-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#1d4ed8] via-[#ea580c] to-[#0d9488]" />
          <div className="flex flex-col justify-between gap-4 border-b border-blue-200 pb-6 lg:flex-row lg:items-center">
            <div>
              <span className="inline-block rounded-md bg-orange-100 border border-orange-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-orange-900">
                <i className="fas fa-university mr-1.5" aria-hidden="true"></i>
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
                const activeColors = [
                  'bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white shadow-md shadow-blue-900/20',
                  'bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white shadow-md shadow-orange-900/20',
                  'bg-gradient-to-r from-[#0d9488] to-[#059669] text-white shadow-md shadow-teal-900/20',
                ];
                return (
                  <button
                    key={stream.name}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedStream(index)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                      isSelected
                        ? activeColors[index % activeColors.length]
                        : 'border border-blue-200 bg-white text-[#0c4a8a] hover:bg-blue-50'
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
            <div className="lg:col-span-5 rounded-xl border border-blue-200/80 bg-white p-5 shadow-sm">
              <h4 className="text-xl font-bold text-[#0c4a8a]">{STREAMS[selectedStream].name}</h4>
              <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
                {STREAMS[selectedStream].tagline}
              </p>

              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  <i className="fas fa-star mr-1" aria-hidden="true"></i>
                  Department Highlights
                </p>
                {STREAMS[selectedStream].features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2.5 rounded-lg bg-blue-50/70 px-3 py-2 text-xs font-medium text-slate-800 sm:text-sm"
                  >
                    <i className="fas fa-check-circle text-[#d90429] mt-0.5 shrink-0" aria-hidden="true"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/90 to-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1d4ed8]">
                  <i className="fas fa-book mr-1.5" aria-hidden="true"></i>
                  Core &amp; Elective Subjects (MBOSE)
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {STREAMS[selectedStream].subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-lg border border-blue-300 bg-white px-3 py-1.5 text-xs font-bold text-[#0c4a8a] shadow-xs"
                    >
                      <i className="fas fa-check mr-1 text-[10px] text-blue-600" aria-hidden="true"></i>
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50/90 to-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  <i className="fas fa-briefcase mr-1.5" aria-hidden="true"></i>
                  University &amp; Career Pathways
                </p>
                <ul className="mt-3 space-y-2">
                  {STREAMS[selectedStream].careerPaths.map((career) => (
                    <li
                      key={career}
                      className="flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 border border-orange-200/70"
                    >
                      <i className="fas fa-arrow-circle-right text-[#d90429]" aria-hidden="true"></i>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-gradient-to-r from-[#0c4a8a] via-[#1d4ed8] to-[#0f766e] p-5 text-white shadow-lg sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs font-medium leading-6 text-blue-50 sm:text-sm">
              Admissions for Class XI (Science, Arts &amp; Commerce) and Nursery to Class X are open
              for the 2026–27 session. Merit scholarships available for SSLC rank holders.
            </p>
            <button
              type="button"
              onClick={onOpenAdmission}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ea580c] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
              <span>Apply for Admission</span>
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
