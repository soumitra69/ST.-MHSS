import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';
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
    detail: 'Activity-based foundational literacy, numeracy, phonics, and joyful socialization.',
    image: SCHOOL_IMAGES.campus,
    imageAlt: 'St. Michael’s school campus in Umsning',
  },
  {
    number: '02',
    name: 'Primary School',
    classes: 'Classes I – V',
    detail: 'Core languages (English & Khasi), environmental studies, mathematics, and moral instruction.',
    image: SCHOOL_IMAGES.campusAssembly,
    imageAlt: 'Students gathered for morning assembly at St. Michael’s',
  },
  {
    number: '03',
    name: 'Upper Primary & Secondary',
    classes: 'Classes VI – X (MBOSE SSLC)',
    detail: 'Comprehensive board preparation with laboratory practicals, computer literacy, and merit mentoring.',
    image: SCHOOL_IMAGES.fieldwork,
    imageAlt: 'Students taking part in an academic field activity',
  },
  {
    number: '04',
    name: 'Higher Secondary (HSSLC)',
    classes: 'Classes XI – XII (Science, Arts & Commerce)',
    detail: 'Specialized pre-university streams with dedicated laboratories, fieldwork, and career counselling.',
    image: SCHOOL_IMAGES.studentLeaders,
    imageAlt: 'Senior secondary student addressing a school event',
  },
];

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmission }) => {
  const [selectedStream, setSelectedStream] = useState(0);

  return (
    <section id="academics" className="w-full overflow-hidden bg-[#f7f6f2] py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col justify-between gap-5 border-b border-[#d9d6cd] pb-7 sm:flex-row sm:items-end md:mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              MBOSE Curriculum • Nursery to Class XII
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold leading-tight tracking-tight text-[#142842] sm:text-4xl md:text-5xl">
              Academic progression &amp; senior secondary pathways
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base">
            A structured educational journey in Umsning rooted in MBOSE academic standards, character
            formation, and university readiness.
          </p>
        </header>

        {/* 4 School Stages */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicStages.map(({ number, name, classes, detail, image, imageAlt }) => (
            <article
              key={number}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2dfd6] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute top-3 left-3 rounded-md bg-[#142842]/90 px-2.5 py-1 font-mono text-xs font-bold text-amber-300 backdrop-blur-xs">
                  STAGE {number}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    {classes}
                  </p>
                  <h3 className="mt-1 text-lg font-bold leading-snug text-[#142842]">{name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Higher Secondary Streams Explorer (Class XI - XII) */}
        <div
          id="streams"
          className="mt-14 scroll-mt-24 rounded-2xl border border-[#dcd8ce] bg-white p-6 shadow-md sm:p-8 lg:p-10"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Higher Secondary Section (MBOSE HSSLC)
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-[#142842] sm:text-3xl">
                Class XI &amp; XII Streams Offered
              </h3>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Higher Secondary Streams">
              {STREAMS.map((stream, index) => {
                const shortLabel = stream.name.replace('Higher Secondary ', '').replace(' (Class XI - XII)', '');
                const isSelected = selectedStream === index;
                return (
                  <button
                    key={stream.name}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedStream(index)}
                    className={`rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'bg-[#142842] text-amber-300 shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stream Details */}
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h4 className="text-xl font-bold text-[#142842]">{STREAMS[selectedStream].name}</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {STREAMS[selectedStream].tagline}
              </p>

              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Department Highlights
                </p>
                {STREAMS[selectedStream].features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#142842]">
                  Core &amp; Elective Subjects (MBOSE)
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {STREAMS[selectedStream].subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#1B365D] shadow-2xs"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#142842]">
                  University &amp; Career Pathways
                </p>
                <ul className="mt-3 space-y-2">
                  {STREAMS[selectedStream].careerPaths.map((career) => (
                    <li
                      key={career}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                    >
                      <GraduationCap className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs sm:text-sm leading-6 text-slate-600">
              Admissions for Class XI (Science, Arts &amp; Commerce) and Nursery to Class X are open
              for the 2026–27 session. Merit scholarships available for SSLC rank holders.
            </p>
            <button
              type="button"
              onClick={onOpenAdmission}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-[#142842] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#1B365D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142842]"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4 text-amber-300" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
