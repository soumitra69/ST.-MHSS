import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';

const institutionalValues = [
  'Rigorous MBOSE academic foundation & inquiry',
  'Moral integrity, respect & pastoral care',
  'Synchronized drill, cultural pride & service',
];

const secretaryHighlights = [
  'Unified Diocesan administration & governance',
  'Academic discipline & student welfare mentorship',
  'Modern infrastructure & laboratory advancement',
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

    {/* MESSAGE 1 (HOME PAGE): Secretary & Vice Principal's Message (Same Person) (#secretary-message) */}
    <section
      id="secretary-message"
      className="w-full bg-white py-9 md:py-12 scroll-mt-24 border-t border-slate-200"
    >
      <div className="container">
        <article
          className="group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[340px_1fr]"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a] z-10" />

          {/* Left Compact Image Column */}
          <div
            className="relative h-60 md:h-full md:min-h-[270px] bg-slate-900 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src={SCHOOL_IMAGES.foundingCampus}
              alt="Office of the Secretary and Vice Principal at St. Michael's Higher Secondary School, Umsning"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
            <div className="absolute top-3 left-3 rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/25">
              <i className="fas fa-user-shield mr-1 text-amber-300" aria-hidden="true"></i>
              Administration &amp; Governance
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-[#0c2d57]/95 border border-amber-400/40 px-3 py-1.5 text-[11px] font-bold text-white shadow-md backdrop-blur-xs">
              <i className="fas fa-landmark mr-1.5 text-amber-300" aria-hidden="true"></i>
              Secretary &amp; Vice Principal • St. Michael&apos;s Umsning
            </div>
          </div>

          {/* Right Compact Text Column */}
          <div
            className="flex flex-col justify-center bg-white p-5 sm:p-6 md:px-8 md:py-6"
            data-aos="fade-left"
            data-aos-delay="140"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0c4a8a] border border-blue-200">
                <i className="fas fa-user-shield mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                From The Desk of the Secretary &amp; Vice Principal
              </span>
              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900 border border-amber-200">
                <i className="fas fa-cross mr-1 text-[#d97706]" aria-hidden="true"></i>
                Diocesan Secretariat • Estd. 1961
              </span>
            </div>

            <h2 className="vision-serif-heading mt-2.5 text-xl sm:text-2xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Secretary &amp; Vice Principal&apos;s Message
            </h2>

            <p className="mt-2 text-xs sm:text-sm font-medium leading-6 text-slate-700">
              At St. Michael&apos;s Higher Secondary School, Umsning, our administrative mission and
              academic stewardship work hand in hand to create a safe, disciplined, and inspiring
              campus for over 2,000 learners. Serving in the unified role of Secretary and Vice
              Principal, my priority is to ensure transparent governance, modern learning facilities,
              and close mentorship so every student steps forward with confidence and moral
              conviction (<em>{SCHOOL_INFO.mottoLatin}</em> &amp; <em>{SCHOOL_INFO.mottoKhasi}</em>).
            </p>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {secretaryHighlights.map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-[#0c4a8a] border border-slate-200"
                  data-aos="zoom-in"
                  data-aos-delay={140 + idx * 60}
                >
                  <i
                    className="fas fa-check-circle text-[#d97706] shrink-0 text-xs"
                    aria-hidden="true"
                  ></i>
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs">
              <div>
                <span className="font-bold text-[#0c4a8a]">
                  Office of the Secretary &amp; Vice Principal
                </span>
                <span className="hidden sm:inline text-slate-400 mx-1.5">•</span>
                <span className="block sm:inline text-[11px] font-medium text-slate-600">
                  St. Michael&apos;s Higher Secondary School, Umsning
                </span>
              </div>
              <a href="#hub" className="vision-read-more inline-flex items-center gap-1.5">
                <span>Operations Hub</span>
                <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    {/* MESSAGE 2 (HOME PAGE): Principal's Message (#principal-message) */}
    <section
      id="principal-message"
      className="w-full bg-[#0c2d57] py-9 md:py-12 scroll-mt-24 border-t border-slate-800"
    >
      <div className="container">
        <article
          className="group relative grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-1 md:grid-cols-[1fr_340px]"
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
              Principal&apos;s Message
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
                  Rev. Sister Principal
                </span>
                <span className="hidden sm:inline text-slate-400 mx-1.5">•</span>
                <span className="block sm:inline text-[11px] font-medium text-slate-600">
                  Principal, St. Michael&apos;s H.S. School, Umsning
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
            className="relative order-1 md:order-2 h-60 md:h-full md:min-h-[270px] bg-slate-900 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="140"
          >
            <img
              src={SCHOOL_IMAGES.principalPhoto}
              alt="Rev. Sister Principal at her desk in St. Michael's Higher Secondary School, Umsning"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="absolute top-3 right-3 rounded-full bg-amber-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
              <i className="fas fa-user-tie mr-1" aria-hidden="true"></i>
              Principal&apos;s Office
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-slate-950/85 border border-amber-400/50 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-xs">
              <i className="fas fa-award mr-1.5 text-amber-300" aria-hidden="true"></i>
              Rev. Sister Principal • St. Michael&apos;s Umsning
            </div>
          </div>
        </article>
      </div>
    </section>

    {/* MESSAGES 3 & 4: Headmistress – Secondary Section & Headmistress – LP Section */}
    <section
      id="headmistress-messages"
      className="w-full bg-[#f4f7fb] py-10 md:py-14 scroll-mt-24 border-t border-slate-200"
    >
      <div className="container">
        <div className="mb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#0c4a8a] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
              <i className="fas fa-chalkboard-teacher mr-1.5 text-amber-300" aria-hidden="true"></i>
              Sectional Academic Leadership • Nursery to Class X
            </span>
            <h2 className="vision-serif-heading mt-2.5 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Messages from Our Section Headmistresses
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-md">
            Dedicated pastoral care and stage-wise academic supervision across our Lower Primary and
            Secondary wings.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 3. Headmistress – Secondary Section */}
          <article
            id="hm-secondary-message"
            className="scroll-mt-28 relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 sm:p-7"
            data-aos="fade-right"
            data-aos-duration="750"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a]" />
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0c4a8a] border border-blue-200">
                  <i className="fas fa-graduation-cap mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Secondary Wing • Classes VI to X (MBOSE SSLC)
                </span>
                <span className="rounded-full bg-[#0c4a8a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Secondary Section
                </span>
              </div>

              <h3 className="vision-serif-heading mt-3 text-xl sm:text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Headmistress – Secondary Section
              </h3>

              <p className="mt-3 text-xs sm:text-sm font-medium leading-6 text-slate-700">
                The Secondary years are a defining bridge where young learners build analytical
                depth, moral character, and readiness for the MBOSE SSLC Board Examinations. Through
                structured Continuous and Comprehensive Evaluation (CCE), science and computer
                practicals, and personal mentorship, we guide every student to achieve academic
                distinction and personal integrity.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-[#0c4a8a]">
                  <i className="fas fa-check-circle mr-1 text-[#d97706]" aria-hidden="true"></i>
                  MBOSE SSLC Board Preparation
                </span>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-[#0c4a8a]">
                  <i className="fas fa-check-circle mr-1 text-[#d97706]" aria-hidden="true"></i>
                  Laboratory &amp; Remedial Mentorship
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3.5 text-xs">
              <div>
                <span className="font-bold text-[#0c4a8a]">
                  Office of the Headmistress (Secondary Section)
                </span>
                <span className="block text-[11px] font-medium text-slate-500">
                  St. Michael&apos;s Higher Secondary School, Umsning
                </span>
              </div>
              <a href="#academics" className="vision-read-more inline-flex items-center gap-1.5">
                <span>Secondary Wing</span>
                <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </a>
            </div>
          </article>

          {/* 4. Headmistress – LP Section */}
          <article
            id="hm-lp-message"
            className="scroll-mt-28 relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 sm:p-7"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="750"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-200">
                  <i className="fas fa-child mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Foundational &amp; Lower Primary • Nursery to Class V
                </span>
                <span className="rounded-full bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  LP Section
                </span>
              </div>

              <h3 className="vision-serif-heading mt-3 text-xl sm:text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Headmistress – LP Section
              </h3>

              <p className="mt-3 text-xs sm:text-sm font-medium leading-6 text-slate-700">
                A child&apos;s earliest years in school shape a lifetime love for learning. In our
                Lower Primary section, we nurture curiosity, foundational literacy in English and
                Khasi, numeracy, good manners, and joyful expression in a warm, caring environment
                where every young learner feels safe, valued, and inspired to grow.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-[#0c4a8a]">
                  <i className="fas fa-check-circle mr-1 text-[#0c4a8a]" aria-hidden="true"></i>
                  Activity-Based Foundational Literacy
                </span>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-[#0c4a8a]">
                  <i className="fas fa-check-circle mr-1 text-[#0c4a8a]" aria-hidden="true"></i>
                  Caring Moral &amp; Creative Formation
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3.5 text-xs">
              <div>
                <span className="font-bold text-[#0c4a8a]">
                  Office of the Headmistress (LP Section)
                </span>
                <span className="block text-[11px] font-medium text-slate-500">
                  St. Michael&apos;s Higher Secondary School, Umsning
                </span>
              </div>
              <a href="#academics" className="vision-read-more inline-flex items-center gap-1.5">
                <span>Primary Wing</span>
                <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </>
);
