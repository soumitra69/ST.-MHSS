import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';

const institutionalValues = [
  'MBOSE Academic Rigor & Inquiry',
  'Moral Integrity & Pastoral Care',
  'Synchronized Drill & Cultural Pride',
];

const heritagePillars = [
  {
    title: 'Diocesan Heritage',
    badge: 'Since 1961',
    icon: 'fas fa-church',
    detail:
      'Serving families across Ri Bhoi District under the Catholic Diocese of Shillong since 1961.',
    cardStyle:
      'border-l-4 border-l-[#1d4ed8] border-blue-200 bg-gradient-to-r from-blue-50/90 to-white',
    badgeStyle: 'bg-blue-600 text-white',
  },
  {
    title: 'Holistic Formation',
    badge: '4 Houses',
    icon: 'fas fa-shield-alt',
    detail:
      'Integrating classroom excellence with synchronized drill, choral music, and ecological stewardship.',
    cardStyle:
      'border-l-4 border-l-[#ea580c] border-orange-200 bg-gradient-to-r from-orange-50/90 to-white',
    badgeStyle: 'bg-orange-600 text-white',
  },
  {
    title: 'Inclusive Community',
    badge: '2,000+ Scholars',
    icon: 'fas fa-users',
    detail:
      'Welcoming over 2,000 boys and girls from Umsning and surrounding towns from Nursery to Class XII.',
    cardStyle:
      'border-l-4 border-l-[#0d9488] border-teal-200 bg-gradient-to-r from-teal-50/90 to-white',
    badgeStyle: 'bg-teal-600 text-white',
  },
];

export const InstitutionalSection: React.FC = () => (
  <>
    {/* Who We Are, Our Mission & Our Vision — Colourful Narayana-Inspired Section Canvas */}
    <section
      id="about"
      className="w-full bg-gradient-to-br from-[#eff6ff] via-[#fff7ed] to-[#f0fdf4] py-12 md:py-16 border-t border-blue-200/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div
            className="rounded-2xl border border-blue-200/80 bg-white/95 p-6 shadow-lg shadow-blue-950/5 backdrop-blur-xs sm:p-7"
            data-aos="fade-right"
            data-aos-duration="750"
          >
            <span className="inline-block rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-xs">
              <i className="fas fa-landmark mr-1.5" aria-hidden="true"></i>
              St. Michael&apos;s Higher Secondary School • Umsning
            </span>
            <h2 className="vision-serif-heading mt-3.5 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Who We Are
            </h2>
            <p className="vision-body-copy mt-4 text-sm sm:text-base text-[#0c4a8a]">
              Since {SCHOOL_INFO.established}, St. Michael&apos;s Higher Secondary School, Umsning
              has formed men and women of faith, scholarship, leadership, and service in the
              Catholic Diocesan tradition, fostering a culture of excellence and core values of
              respect, discipline, and care for the whole person under the guiding motto{' '}
              <strong>{SCHOOL_INFO.mottoLatin}</strong> &amp;{' '}
              <strong>{SCHOOL_INFO.mottoKhasi}</strong> ({SCHOOL_INFO.mottoMeaning}).
            </p>
            <a href="#why-us" className="vision-read-more mt-4 inline-flex items-center gap-1.5">
              <span>Read More</span>
              <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </a>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-3 lg:grid-cols-1">
            {heritagePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`rounded-xl border p-4 shadow-md transition-transform duration-200 hover:-translate-y-0.5 ${pillar.cardStyle}`}
                data-aos="fade-left"
                data-aos-delay={80 * (idx + 1)}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-bold text-[#0c4a8a]">
                    <i className={`${pillar.icon} mr-1.5 text-[#ea580c]`} aria-hidden="true"></i>
                    &raquo; {pillar.title}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${pillar.badgeStyle}`}
                  >
                    {pillar.badge}
                  </span>
                </div>
                <p className="mt-1.5 text-xs font-medium leading-5 text-slate-700">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission & Our Vision Side-by-Side */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article
            id="mission"
            className="scroll-mt-28 relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-b from-white via-white to-blue-50/70 p-6 shadow-lg shadow-blue-900/5 sm:p-7"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1d4ed8] via-[#0284c7] to-[#0d9488]" />
            <h3 className="vision-serif-heading text-xl sm:text-2xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Our Mission
            </h3>
            <p className="vision-body-copy mt-3.5 text-sm sm:text-base text-[#0c4a8a]">
              To provide an inclusive, values-led education that helps every student develop
              intellectually, spiritually, socially, and physically, encouraging curiosity,
              discipline, compassion, and confidence so learners make a lasting difference in their
              families and communities.
            </p>
            <a href="#academics" className="vision-read-more mt-4 inline-flex items-center gap-1.5">
              <span>Read More</span>
              <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </a>
          </article>

          <article
            id="vision"
            className="scroll-mt-28 relative overflow-hidden rounded-2xl border-2 border-orange-200 bg-gradient-to-b from-white via-white to-amber-50/70 p-6 shadow-lg shadow-orange-900/5 sm:p-7"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="700"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#d90429]" />
            <h3 className="vision-serif-heading text-xl sm:text-2xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Our Vision
            </h3>
            <p className="vision-body-copy mt-3.5 text-sm sm:text-base text-[#0c4a8a]">
              To form men and women of faith, scholarship, leadership, and service in the Catholic
              Diocesan tradition, fostering a culture of excellence and core values of respect,
              justice, and holistic care for the whole person — ever upward,{' '}
              <em>{SCHOOL_INFO.mottoLatin}</em> and <em>{SCHOOL_INFO.mottoKhasi}</em>.
            </p>
            <a href="#apply-form" className="vision-read-more mt-4 inline-flex items-center gap-1.5">
              <span>Read More</span>
              <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </a>
          </article>
        </div>

        {/* Compact Side-by-Side Executive Cards: Founder's Heritage & Principal's Desk */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Card 1: Founder's Heritage (Compact & Executive) */}
          <article
            id="founder-message"
            className="scroll-mt-28 group relative flex flex-col overflow-hidden rounded-2xl border-2 border-blue-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            data-aos="fade-right"
            data-aos-duration="750"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#f59e0b]" />

            <div className="grid sm:grid-cols-[210px_1fr] items-stretch flex-1">
              {/* Compact Portrait / Tower Thumbnail */}
              <div className="relative h-48 sm:h-full min-h-[190px] bg-slate-900 overflow-hidden">
                <img
                  src={SCHOOL_IMAGES.foundingCampus}
                  alt="St. Michael's Higher Secondary School main campus building and tower, established in 1961"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-history mr-1" aria-hidden="true"></i>
                  Estd. 1961
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] font-bold leading-tight text-amber-300">
                    <i className="fas fa-monument mr-1" aria-hidden="true"></i>
                    Archangel Tower
                  </p>
                  <p className="text-[10px] text-slate-200">65 Years of Diocesan Service</p>
                </div>
              </div>

              {/* Compact Content Area */}
              <div className="flex flex-col justify-between bg-gradient-to-br from-white via-blue-50/35 to-amber-50/35 p-5 sm:p-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/90 border border-blue-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                    <i className="fas fa-cross text-[#ea580c]" aria-hidden="true"></i>
                    Catholic Diocese of Shillong
                  </span>
                  <h2 className="vision-serif-heading mt-2 text-lg sm:text-xl text-[#0c4a8a]">
                    <span className="vision-double-angle" aria-hidden="true">
                      &raquo;
                    </span>{' '}
                    Founder&apos;s Heritage
                  </h2>
                  <p className="mt-2 text-xs sm:text-[13px] font-medium leading-6 text-slate-700">
                    Established in 1961 in the conviction that values-led education transforms
                    families across Ri Bhoi District. That founding spirit endures today—nurturing
                    every learner&apos;s potential and guiding youth to step forward with courage (
                    <em>{SCHOOL_INFO.mottoKhasi}</em>).
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-blue-200/70 pt-3 text-[11px] font-bold">
                  <span className="inline-flex items-center gap-1.5 text-[#0c4a8a]">
                    <i className="fas fa-map-marker-alt text-[#d90429]" aria-hidden="true"></i>
                    NH-6, Umsning, Meghalaya
                  </span>
                  <span className="rounded-md bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-900">
                    <i className="fas fa-award mr-1" aria-hidden="true"></i>
                    1961 – 2026
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Principal's Desk (Compact & Executive) */}
          <article
            id="principal-message"
            className="scroll-mt-28 group relative flex flex-col overflow-hidden rounded-2xl border-2 border-orange-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="750"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#0d9488]" />

            <div className="grid sm:grid-cols-[210px_1fr] items-stretch flex-1">
              {/* Compact Faculty & Leadership Thumbnail */}
              <div className="relative h-48 sm:h-full min-h-[190px] bg-slate-900 overflow-hidden">
                <img
                  src={SCHOOL_IMAGES.schoolStaff}
                  alt="St. Michael's Higher Secondary School leadership, Reverend Sisters, and faculty"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-gradient-to-r from-[#ea580c] to-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                  <i className="fas fa-chalkboard-teacher mr-1" aria-hidden="true"></i>
                  68+ Educators
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] font-bold leading-tight text-amber-300">
                    <i className="fas fa-user-tie mr-1" aria-hidden="true"></i>
                    Principal&apos;s Office
                  </p>
                  <p className="text-[10px] text-slate-200">Pastoral &amp; Academic Mentorship</p>
                </div>
              </div>

              {/* Compact Content Area */}
              <div className="flex flex-col justify-between bg-gradient-to-br from-white via-orange-50/35 to-sky-50/35 p-5 sm:p-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-100 border border-orange-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-orange-900">
                    <i className="fas fa-user-tie text-[#ea580c]" aria-hidden="true"></i>
                    From The Principal&apos;s Desk
                  </span>
                  <h2 className="vision-serif-heading mt-2 text-lg sm:text-xl text-[#0c4a8a]">
                    <span className="vision-double-angle" aria-hidden="true">
                      &raquo;
                    </span>{' '}
                    Principal&apos;s Welcome
                  </h2>
                  <p className="mt-2 text-xs sm:text-[13px] font-medium leading-6 text-slate-700">
                    Our mission at St. Michael&apos;s is to provide a disciplined, caring campus
                    where every child excels in MBOSE academics, discovers talents in athletics and
                    choral music, and grows into a compassionate citizen.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {institutionalValues.map((value) => (
                      <span
                        key={value}
                        className="inline-flex items-center gap-1 rounded-md bg-blue-50 border border-blue-200/80 px-2 py-0.5 text-[10px] font-bold text-[#0c4a8a]"
                      >
                        <i
                          className="fas fa-check-circle text-[#d90429] text-[9px]"
                          aria-hidden="true"
                        ></i>
                        {value}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-orange-200/70 pt-3 text-[11px] font-bold">
                  <span className="text-[#0c4a8a]">Office of the Principal &amp; Management</span>
                  <span className="rounded-md bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                    MBOSE-01961
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </>
);
