import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

interface AcademicsSectionProps {
  onOpenAdmission: () => void;
}

const academicStages = [
  {
    number: '01',
    name: 'Early Years',
    classes: 'Nursery & Kindergarten',
    image: SCHOOL_IMAGES.campus,
    imageAlt: 'St. Michael’s school campus',
  },
  {
    number: '02',
    name: 'Primary',
    classes: 'Classes I–V',
    image: SCHOOL_IMAGES.campusAssembly,
    imageAlt: 'Students gathered for a school assembly',
  },
  {
    number: '03',
    name: 'Secondary',
    classes: 'Classes VI–X',
    image: SCHOOL_IMAGES.fieldwork,
    imageAlt: 'Students taking part in a school field activity',
  },
  {
    number: '04',
    name: 'Higher Secondary',
    classes: 'Classes XI–XII',
    image: SCHOOL_IMAGES.studentLeaders,
    imageAlt: 'A student speaking at a school event',
  },
];

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmission }) => (
  <section id="academics" className="w-full overflow-hidden bg-[#f7f6f2] py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mb-9 flex flex-col justify-between gap-5 border-b border-[#d9d6cd] pb-7 sm:flex-row sm:items-end md:mb-11">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
            Learning at Don Bosco College Tura
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1B365D] sm:text-4xl md:text-5xl">
            Where do you want to start from?
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base">
          A university-ready academic journey rooted in values, leadership and service.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
        {academicStages.map(({ number, name, classes, image, imageAlt }) => (
          <article key={number} className="group min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
            <div className="flex items-start gap-3 border-b border-[#d9d6cd] py-4">
              <span className="pt-1 text-xs font-semibold tabular-nums text-amber-800">{number}</span>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-[#1B365D]">{name}</h3>
                <p className="mt-1 text-sm text-slate-600">{classes}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Senior secondary studies include Arts, Science, and Commerce. For current
          admission details, please contact the school.
        </p>
        <button
          type="button"
          onClick={onOpenAdmission}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 border-b-2 border-amber-700 py-2 text-sm font-bold text-[#1B365D] transition-colors hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D]"
        >
          Admission enquiry
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);
