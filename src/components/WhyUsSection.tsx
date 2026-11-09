import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

const schoolFacts = [
  {
    label: 'Established',
    value: `${SCHOOL_INFO.established} (65 Years of Educational Service)`,
    icon: 'fas fa-landmark',
  },
  {
    label: 'Affiliation',
    value: SCHOOL_INFO.affiliation,
    icon: 'fas fa-certificate',
  },
  {
    label: 'School Levels',
    value: SCHOOL_INFO.classes,
    icon: 'fas fa-graduation-cap',
  },
  {
    label: 'Student Body',
    value: `${SCHOOL_INFO.studentCount} Learners & ${SCHOOL_INFO.facultyCount} Educators`,
    icon: 'fas fa-users',
  },
  {
    label: 'Campus Location',
    value: SCHOOL_INFO.address,
    icon: 'fas fa-map-marker-alt',
  },
];

export const WhyUsSection: React.FC = () => (
  <section
    id="why-us"
    className="w-full bg-gradient-to-br from-[#eff6ff] via-[#fff7ed] to-[#f0fdfa] py-16 md:py-24 scroll-mt-20 border-t border-blue-200"
  >
    <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border-2 border-blue-300 shadow-2xl">
        <img
          src={SCHOOL_IMAGES.campusCommunity}
          alt="The St. Michael’s Higher Secondary School community in Umsning"
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-r from-[#0c2d57]/95 to-[#1d4ed8]/95 px-5 py-4 text-white backdrop-blur-xs sm:px-7 sm:py-5 rounded-tr-2xl border-t border-r border-amber-300/50">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
            <i className="fas fa-school mr-1.5" aria-hidden="true"></i>
            {SCHOOL_INFO.shortName}
          </p>
          <p className="mt-1 text-sm font-medium sm:text-base">
            Umsning, Ri Bhoi District • Estd. {SCHOOL_INFO.established}
          </p>
        </div>
      </div>

      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
          <i className="fas fa-star" aria-hidden="true"></i>
          Why Families Choose St. Michael&apos;s
        </span>
        <h2 className="vision-serif-heading mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#0c4a8a] sm:text-4xl">
          <span className="vision-double-angle" aria-hidden="true">
            &raquo;
          </span>{' '}
          A place to learn, grow, and step forward with confidence.
        </h2>
        <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-700">
          St. Michael&apos;s Higher Secondary School is a cornerstone of the Umsning community in Ri
          Bhoi District. Our learning journey spans from Nursery to Class XII, combining MBOSE
          academic rigor with character formation, athletics, and dedicated pastoral mentorship.
        </p>

        <dl className="mt-7 border-t border-blue-200">
          {schoolFacts.map(({ label, value, icon }) => (
            <div
              key={label}
              className="grid gap-1 border-b border-blue-200/80 py-3.5 sm:grid-cols-[165px_1fr] sm:gap-4"
            >
              <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#ea580c]">
                <i className={`${icon} text-[#1d4ed8] w-4 text-center`} aria-hidden="true"></i>
                {label}
              </dt>
              <dd className="text-sm font-semibold leading-6 text-slate-800">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
          >
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
            Call School Office ({SCHOOL_INFO.phoneMobile})
            <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);
