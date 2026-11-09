import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';

const institutionalValues = [
  'Rigorous MBOSE academic foundation and independent inquiry',
  'Moral integrity, respect, and pastoral care for every learner',
  'Physical discipline, cultural pride, and community service',
];

const heritagePillars = [
  {
    title: 'Diocesan Heritage',
    detail: 'Serving families across Ri Bhoi District under the Catholic Diocese of Shillong since 1961.',
  },
  {
    title: 'Holistic Formation',
    detail: 'Integrating classroom excellence with synchronized drill, choral music, and ecological stewardship.',
  },
  {
    title: 'Inclusive Community',
    detail: 'Welcoming over 2,000 boys and girls from Umsning and surrounding towns from Nursery to Class XII.',
  },
];

export const InstitutionalSection: React.FC = () => (
  <>
    {/* Who We Are, Our Mission & Our Vision */}
    <section
      id="about"
      className="w-full bg-white py-16 md:py-24 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h2 className="vision-serif-heading text-3xl sm:text-4xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Who We Are
            </h2>
            <p className="vision-body-copy mt-5 text-[#0c4a8a]">
              Since {SCHOOL_INFO.established}, St. Michael&apos;s Higher Secondary School, Umsning
              has formed men and women of faith, scholarship, leadership, and service in the
              Catholic Diocesan tradition, fostering a culture of excellence and core values of
              respect, discipline, and care for the whole person under the guiding motto{' '}
              <strong>{SCHOOL_INFO.mottoLatin}</strong> &amp;{' '}
              <strong>{SCHOOL_INFO.mottoKhasi}</strong> ({SCHOOL_INFO.mottoMeaning}).
            </p>
            <a href="#why-us" className="vision-read-more mt-5 inline-block">
              Read More
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heritagePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-[#0c4a8a]/40"
              >
                <div className="text-sm font-semibold text-[#0c4a8a]">
                  &raquo; {pillar.title}
                </div>
                <p className="mt-1.5 text-xs leading-6 text-slate-600">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission & Our Vision Side-by-Side (Exact Reference Typography) */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article
            id="mission"
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
          >
            <h3 className="vision-serif-heading text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Our Mission
            </h3>
            <p className="vision-body-copy mt-5 text-[#0c4a8a]">
              To provide an inclusive, values-led education that helps every student develop
              intellectually, spiritually, socially, and physically, encouraging curiosity,
              discipline, compassion, and confidence so learners make a lasting difference in their
              families and communities.
            </p>
            <a href="#academics" className="vision-read-more mt-6 inline-block">
              Read More
            </a>
          </article>

          <article
            id="vision"
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
          >
            <h3 className="vision-serif-heading text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Our Vision
            </h3>
            <p className="vision-body-copy mt-5 text-[#0c4a8a]">
              To form men and women of faith, scholarship, leadership, and service in the Catholic
              Diocesan tradition, fostering a culture of excellence and core values of respect,
              justice, and holistic care for the whole person — ever upward,{' '}
              <em>{SCHOOL_INFO.mottoLatin}</em> and <em>{SCHOOL_INFO.mottoKhasi}</em>.
            </p>
            <a href="#apply-form" className="vision-read-more mt-6 inline-block">
              Read More
            </a>
          </article>
        </div>
      </div>
    </section>

    {/* Founder's Heritage */}
    <section id="founder-message" className="w-full bg-[#eef3f8] py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg md:grid-cols-2">
          <div className="relative min-h-72 md:min-h-112 bg-slate-900">
            <img
              src={SCHOOL_IMAGES.foundingCampus}
              alt="St. Michael's Higher Secondary School main campus building and tower, established in 1961"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-[#142842]/90 px-3.5 py-2 text-xs font-semibold text-amber-200 backdrop-blur-xs border border-white/15">
              S.M.H.S.S. Archangel Tower • Umsning (Estd. 1961)
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
              Founded in 1961 • 65 Years of Service
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Founder&apos;s Heritage
            </h2>
            <p className="vision-body-copy mt-4 text-[#0c4a8a]">
              St. Michael&apos;s Higher Secondary School was established in 1961 in the conviction
              that quality education opens doors and strengthens the entire Ri Bhoi region. That
              founding spirit continues today: making learning meaningful, nurturing every
              student&apos;s potential, and helping young people step forward with courage.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-5 text-xs font-semibold uppercase tracking-wider text-[#0c4a8a]">
              <span>Catholic Diocese of Shillong</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#c61c49]">Umsning, Meghalaya</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    {/* Principal's Desk */}
    <section id="principal-message" className="w-full bg-[#142842] py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative order-1 min-h-72 md:order-2 md:min-h-128 bg-slate-900">
            <img
              src={SCHOOL_IMAGES.schoolStaff}
              alt="St. Michael's Higher Secondary School leadership, Reverend Sisters, and faculty"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="order-2 flex flex-col justify-center p-6 sm:p-10 lg:p-14 md:order-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
              From The Principal&apos;s Desk
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Principal&apos;s Welcome
            </h2>
            <p className="vision-body-copy mt-4 text-[#0c4a8a]">
              Every child brings unique gifts and possibilities. Our responsibility at St.
              Michael&apos;s is to provide a disciplined, caring environment where learners ask
              thoughtful questions, excel in MBOSE academics, discover their talents in athletics
              and music, and grow into compassionate citizens.
            </p>
            <ul className="mt-5 space-y-2.5">
              {institutionalValues.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-2.5 text-sm font-medium text-[#0c4a8a] sm:text-base"
                >
                  <span className="font-bold text-[#c61c49]" aria-hidden="true">&raquo;</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 text-sm">
              <div>
                <p className="font-semibold text-[#0c4a8a]">Office of the Principal &amp; Management</p>
                <p className="text-xs text-slate-500">
                  St. Michael&apos;s Higher Secondary School, Umsning
                </p>
              </div>
              <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-[#0c4a8a]">
                Estd. 1961
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </>
);
