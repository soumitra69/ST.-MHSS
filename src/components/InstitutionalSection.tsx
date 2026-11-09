import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';

const institutionalValues = [
  'Rigorous MBOSE academic foundation & inquiry',
  'Moral integrity, respect & pastoral care',
  'Synchronized drill, cultural pride & service',
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
    {/* SECTION 1: Who We Are, Our Mission & Our Vision */}
    <section
      id="about"
      className="w-full bg-gradient-to-br from-[#eff6ff] via-[#fff7ed] to-[#f0fdf4] py-12 md:py-16 border-t border-blue-200/70"
    >
      <div className="container">
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
      </div>
    </section>

    {/* SECTION 2 (SEPARATE COMPACT SECTION): Founder's Heritage (#founder-message) */}
    <section
      id="founder-message"
      className="w-full bg-gradient-to-r from-[#dbeafe] via-[#fef3c7] to-[#e0f2fe] py-9 md:py-12 scroll-mt-24 border-t border-amber-300/70"
    >
      <div className="container">
        <article
          className="group relative grid w-full overflow-hidden rounded-2xl border-2 border-blue-300/90 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[310px_1fr]"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1d4ed8] via-[#f59e0b] to-[#ea580c] z-10" />

          {/* Left Compact Image Column */}
          <div
            className="relative h-48 md:h-full md:max-h-[250px] bg-slate-900 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src={SCHOOL_IMAGES.foundingCampus}
              alt="St. Michael's Higher Secondary School main campus building and tower, established in 1961"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-gradient-to-r from-[#1d4ed8]/95 to-[#ea580c]/95 px-3 py-1.5 text-[11px] font-bold text-white shadow-md backdrop-blur-xs">
              <i className="fas fa-monument mr-1.5 text-amber-300" aria-hidden="true"></i>
              S.M.H.S.S. Archangel Tower • Estd. 1961
            </div>
          </div>

          {/* Right Compact Text Column */}
          <div
            className="flex flex-col justify-center bg-gradient-to-br from-white via-blue-50/40 to-amber-50/45 p-5 sm:p-6 md:px-8 md:py-6"
            data-aos="fade-left"
            data-aos-delay="140"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-300">
                <i className="fas fa-history mr-1.5 text-[#ea580c]" aria-hidden="true"></i>
                Founded in 1961 • 65 Years of Service
              </span>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                <i className="fas fa-cross mr-1 text-[#1d4ed8]" aria-hidden="true"></i>
                Catholic Diocese of Shillong
              </span>
            </div>

            <h2 className="vision-serif-heading mt-2.5 text-xl sm:text-2xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Founder&apos;s Heritage
            </h2>

            <p className="mt-2 text-xs sm:text-sm font-medium leading-6 text-slate-700">
              St. Michael&apos;s Higher Secondary School was established in 1961 in the conviction
              that quality education opens doors and strengthens the entire Ri Bhoi region. That
              founding spirit continues today: nurturing every student&apos;s potential and helping
              young people step forward with courage (<em>{SCHOOL_INFO.mottoKhasi}</em>).
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-blue-200/80 pt-3 text-xs font-bold">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-rose-100 px-2.5 py-1 text-[11px] text-[#c61c49]">
                  <i className="fas fa-map-marker-alt mr-1" aria-hidden="true"></i>
                  NH-6, Umsning, Meghalaya
                </span>
                <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] text-emerald-900">
                  <i className="fas fa-award mr-1 text-emerald-700" aria-hidden="true"></i>
                  1961 – 2026 Legacy
                </span>
              </div>
              <a href="#why-us" className="vision-read-more inline-flex items-center gap-1.5">
                <span>Our Legacy</span>
                <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    {/* SECTION 3 (SEPARATE COMPACT SECTION): Principal's Desk (#principal-message) */}
    <section
      id="principal-message"
      className="w-full bg-gradient-to-br from-[#0c2d57] via-[#1d4ed8] to-[#0f172a] py-9 md:py-12 scroll-mt-24 border-t-2 border-amber-400/70"
    >
      <div className="container">
        <article
          className="group relative grid w-full overflow-hidden rounded-2xl border-2 border-amber-400/80 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:grid-cols-[1fr_310px]"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#0d9488] z-10" />

          {/* Left Compact Text Column */}
          <div
            className="order-2 md:order-1 flex flex-col justify-center bg-gradient-to-br from-white via-sky-50/45 to-orange-50/40 p-5 sm:p-6 md:px-8 md:py-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-orange-900 border border-orange-300">
                <i className="fas fa-user-tie mr-1.5 text-[#ea580c]" aria-hidden="true"></i>
                From The Principal&apos;s Desk
              </span>
              <span className="rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                <i className="fas fa-certificate mr-1 text-amber-300" aria-hidden="true"></i>
                MBOSE-01961
              </span>
            </div>

            <h2 className="vision-serif-heading mt-2.5 text-xl sm:text-2xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Principal&apos;s Welcome
            </h2>

            <p className="mt-2 text-xs sm:text-sm font-medium leading-6 text-slate-700">
              Every child brings unique gifts and possibilities. Our responsibility at St.
              Michael&apos;s is to provide a disciplined, caring environment where learners ask
              thoughtful questions, excel in MBOSE academics, discover their talents in athletics
              and music, and grow into compassionate citizens.
            </p>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {institutionalValues.map((value, idx) => (
                <div
                  key={value}
                  className="flex items-center gap-1.5 rounded-lg bg-blue-50/90 px-2.5 py-1.5 text-[11px] font-semibold text-[#0c4a8a] border border-blue-200/80"
                  data-aos="zoom-in"
                  data-aos-delay={140 + idx * 60}
                >
                  <i
                    className="fas fa-check-circle text-[#d90429] shrink-0 text-xs"
                    aria-hidden="true"
                  ></i>
                  <span className="leading-tight">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-blue-200/80 pt-3 text-xs">
              <div>
                <span className="font-bold text-[#0c4a8a]">
                  Office of the Principal &amp; Management
                </span>
                <span className="hidden sm:inline text-slate-400 mx-1.5">•</span>
                <span className="block sm:inline text-[11px] font-medium text-slate-600">
                  St. Michael&apos;s H.S. School, Umsning
                </span>
              </div>
              <a href="#faculty" className="vision-read-more inline-flex items-center gap-1.5">
                <span>Meet Faculty</span>
                <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Right Compact Image Column */}
          <div
            className="relative order-1 md:order-2 h-48 md:h-full md:max-h-[260px] bg-slate-900 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="140"
          >
            <img
              src={SCHOOL_IMAGES.schoolStaff}
              alt="St. Michael's Higher Secondary School leadership, Reverend Sisters, and faculty"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
            <div className="absolute top-3 right-3 rounded-full bg-amber-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
              <i className="fas fa-chalkboard-teacher mr-1" aria-hidden="true"></i>
              68+ Educators
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-slate-950/80 border border-amber-400/50 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-xs">
              <i className="fas fa-award mr-1.5 text-amber-300" aria-hidden="true"></i>
              Leadership &amp; Faculty Council
            </div>
          </div>
        </article>
      </div>
    </section>
  </>
);
