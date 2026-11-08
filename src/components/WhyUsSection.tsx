import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

const schoolFacts = [
  { label: 'Established', value: String(SCHOOL_INFO.established) },
  { label: 'Affiliation', value: SCHOOL_INFO.affiliation },
  { label: 'School levels', value: SCHOOL_INFO.classes },
];

export const WhyUsSection: React.FC = () => (
  <section id="why-us" className="w-full bg-white py-16 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14 lg:px-8">
      <div className="relative">
        <img
          src={SCHOOL_IMAGES.campusCommunity}
          alt="The St. Michael’s school community in Umsning"
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
        />
        <div className="absolute bottom-0 left-0 bg-[#1B365D] px-5 py-4 text-white sm:px-7 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
            St. Michael&apos;s
          </p>
          <p className="mt-1 text-sm sm:text-base">Umsning, Ri Bhoi</p>
        </div>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
          A school in Umsning
        </span>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#1B365D] sm:text-4xl md:text-5xl">
          A place to learn, grow, and find your way.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
          St. Michael&apos;s Higher Secondary School is part of the Umsning community.
          Its learning journey spans from Nursery to Class XII, with Arts, Science,
          and Commerce available at the senior secondary level.
        </p>

        <dl className="mt-7 border-t border-slate-200">
          {schoolFacts.map(({ label, value }) => (
            <div
              key={label}
              className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[132px_1fr] sm:gap-4"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.1em] text-amber-800">
                {label}
              </dt>
              <dd className="text-sm leading-6 text-slate-700">{value}</dd>
            </div>
          ))}
        </dl>

        <a
          href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
          className="mt-6 inline-flex min-h-11 items-center gap-2 border-b-2 border-amber-700 py-2 text-sm font-bold text-[#1B365D] transition-colors hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D]"
        >
          Contact the school
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);
