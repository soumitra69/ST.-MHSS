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
    cardStyle: 'border-l-4 border-l-[#0c4a8a] border-slate-200 bg-white',
    badgeStyle: 'bg-[#0c4a8a] text-white',
  },
  {
    title: 'Holistic Formation',
    badge: '4 Houses',
    icon: 'fas fa-shield-alt',
    detail:
      'Integrating classroom excellence with synchronized drill, choral music, and ecological stewardship.',
    cardStyle: 'border-l-4 border-l-[#d97706] border-slate-200 bg-white',
    badgeStyle: 'bg-[#d97706] text-white',
  },
  {
    title: 'Inclusive Community',
    badge: '2,000+ Scholars',
    icon: 'fas fa-users',
    detail:
      'Welcoming over 2,000 boys and girls from Umsning and surrounding towns from Nursery to Class XII.',
    cardStyle: 'border-l-4 border-l-[#0c2d57] border-slate-200 bg-white',
    badgeStyle: 'bg-[#0c2d57] text-white',
  },
];

export const InstitutionalSection: React.FC = () => (
  <>
    {/* SECTION 1: Who We Are, Our Mission & Our Vision */}
    <section
      id="about"
      className="w-full bg-[#f4f7fb] py-12 md:py-16 border-t border-slate-200"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7"
            data-aos="fade-right"
            data-aos-duration="750"
          >
            <span className="inline-block rounded-full bg-[#0c4a8a] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-xs">
              <i className="fas fa-landmark mr-1.5 text-amber-300" aria-hidden="true"></i>
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
                className={`rounded-xl border p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${pillar.cardStyle}`}
                data-aos="fade-left"
                data-aos-delay={80 * (idx + 1)}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-bold text-[#0c4a8a]">
                    <i className={`${pillar.icon} mr-1.5 text-[#d97706]`} aria-hidden="true"></i>
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
            className="scroll-mt-28 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a]" />
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
            className="scroll-mt-28 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="700"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
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

    {/* SECTION 3 (SEPARATE COMPACT SECTION): Principal's Desk (#principal-message) */}
    <section
      id="principal-message"
      className="w-full bg-[#0c2d57] py-9 md:py-12 scroll-mt-24 border-t border-slate-800"
    >
      <div className="container">
        <article
          className="group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:grid-cols-[1fr_310px]"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706] z-10" />

          {/* Left Compact Text Column */}
          <div
            className="order-2 md:order-1 flex flex-col justify-center bg-white p-5 sm:p-6 md:px-8 md:py-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-200">
                <i className="fas fa-user-tie mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                From The Principal&apos;s Desk
              </span>
              <span className="rounded-full bg-[#0c4a8a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
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
              <a href="#academics" className="vision-read-more inline-flex items-center gap-1.5">
                <span>Explore Academics</span>
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
