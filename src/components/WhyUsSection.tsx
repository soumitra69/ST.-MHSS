import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { AppPageId } from './InstitutionalSection';

interface WhyUsSectionProps {
  onNavigatePage?: (page: AppPageId) => void;
}

const schoolFacts = [
  {
    label: 'Established',
    value: `${SCHOOL_INFO.established} (65 Years of Service)`,
    icon: 'fas fa-landmark',
  },
  {
    label: 'Affiliation',
    value: 'MBOSE (Code: 01961)',
    icon: 'fas fa-certificate',
  },
  {
    label: 'School Levels',
    value: SCHOOL_INFO.classes,
    icon: 'fas fa-graduation-cap',
  },
  {
    label: 'Student & Staff',
    value: `${SCHOOL_INFO.studentCount} Learners • ${SCHOOL_INFO.facultyCount} Educators`,
    icon: 'fas fa-users',
  },
];

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onNavigatePage }) => (
  <section
    id="why-us"
    className="w-full bg-[#f4f7fb] py-12 md:py-16 scroll-mt-20 border-t border-slate-200"
  >
    <div className="container">
      <article
        className="group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[44%_56%] items-stretch"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a] z-10" />

        {/* Left Fitted Photo Column */}
        <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[380px] bg-slate-900 overflow-hidden">
          <img
            src={SCHOOL_IMAGES.campusCommunity}
            alt="The St. Michael’s Higher Secondary School community in Umsning"
            loading="lazy"
            decoding="async"
            className="h-full w-full lg:absolute lg:inset-0 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
          <div className="absolute top-3 left-3 rounded-full bg-[#0c4a8a] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
            <i className="fas fa-school mr-1.5 text-amber-300" aria-hidden="true"></i>
            {SCHOOL_INFO.shortName}
          </div>
          <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-slate-950/85 border border-amber-400/50 px-3.5 py-2.5 text-white backdrop-blur-xs">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
              <i className="fas fa-map-marker-alt mr-1.5" aria-hidden="true"></i>
              Umsning, Ri Bhoi District • Estd. {SCHOOL_INFO.established}
            </p>
            <p className="mt-0.5 text-xs font-medium text-slate-200">
              Catholic Mission of Umsning • Archdiocese of Shillong
            </p>
          </div>
        </div>

        {/* Right Fitted Content Column */}
        <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0c4a8a] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
              <i className="fas fa-star text-amber-300" aria-hidden="true"></i>
              Why Families Choose St. Michael&apos;s
            </span>
            <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[11px] font-bold text-amber-900">
              Nursery to Class XII
            </span>
          </div>

          <h2 className="vision-serif-heading mt-3 text-2xl font-extrabold leading-snug text-[#0c4a8a] sm:text-3xl">
            <span className="vision-double-angle" aria-hidden="true">
              &raquo;
            </span>{' '}
            A place to learn, grow, and step forward with confidence.
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm font-medium leading-6 text-slate-700">
            St. Michael&apos;s Higher Secondary School is a cornerstone of the Umsning community in
            Ri Bhoi District. Our learning journey spans from Nursery to Class XII, combining MBOSE
            academic rigor with character formation, athletics, and dedicated pastoral mentorship.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {schoolFacts.map(({ label, value, icon }) => (
              <div
                key={label}
                className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[#f8fafc] p-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0c4a8a] text-xs text-amber-300">
                  <i className={icon} aria-hidden="true"></i>
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#d97706]">
                    {label}
                  </p>
                  <p className="mt-0.5 text-xs font-bold leading-snug text-[#0c2d57]">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <i className="fas fa-location-arrow text-[#d97706]" aria-hidden="true"></i>
              <span>{SCHOOL_INFO.address}</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigatePage?.('who-we-are')}
              className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-bold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-[#d97706] cursor-pointer"
            >
              <span>Read More</span>
              <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
);
