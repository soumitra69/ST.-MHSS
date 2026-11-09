import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

const schoolFacts = [
  { label: 'Established', value: `${SCHOOL_INFO.established} (65 Years of Educational Service)` },
  { label: 'Affiliation', value: SCHOOL_INFO.affiliation },
  { label: 'School Levels', value: SCHOOL_INFO.classes },
  { label: 'Student Body', value: `${SCHOOL_INFO.studentCount} Learners & ${SCHOOL_INFO.facultyCount} Educators` },
  { label: 'Campus Location', value: SCHOOL_INFO.address },
];

export const WhyUsSection: React.FC = () => (
  <section id="why-us" className="w-full bg-white py-16 md:py-24 scroll-mt-20">
    <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <img
          src={SCHOOL_IMAGES.campusCommunity}
          alt="The St. Michael’s Higher Secondary School community in Umsning"
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
        />
        <div className="absolute bottom-0 left-0 bg-[#142842]/95 px-5 py-4 text-white backdrop-blur-xs sm:px-7 sm:py-5 rounded-tr-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
            {SCHOOL_INFO.shortName}
          </p>
          <p className="mt-1 text-sm font-medium sm:text-base">
            Umsning, Ri Bhoi District • Estd. {SCHOOL_INFO.established}
          </p>
        </div>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
          Why Families Choose St. Michael&apos;s
        </span>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#142842] sm:text-4xl md:text-5xl">
          A place to learn, grow, and step forward with confidence.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
          St. Michael&apos;s Higher Secondary School is a cornerstone of the Umsning community in Ri
          Bhoi District. Our learning journey spans from Nursery to Class XII, combining MBOSE
          academic rigor with character formation, athletics, and dedicated pastoral mentorship.
        </p>

        <dl className="mt-7 border-t border-slate-200">
          {schoolFacts.map(({ label, value }) => (
            <div
              key={label}
              className="grid gap-1 border-b border-slate-200 py-3.5 sm:grid-cols-[148px_1fr] sm:gap-4"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.1em] text-amber-800">
                {label}
              </dt>
              <dd className="text-sm font-medium leading-6 text-slate-700">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
            className="inline-flex min-h-11 items-center gap-2 border-b-2 border-amber-700 py-2 text-sm font-bold text-[#142842] transition-colors hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142842]"
          >
            Call School Office ({SCHOOL_INFO.phoneMobile})
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
