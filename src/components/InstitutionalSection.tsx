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
    badge: 'Since 1961',
    detail:
      'Serving families across Ri Bhoi District under the Catholic Diocese of Shillong since 1961.',
    cardStyle:
      'border-l-4 border-l-[#1d4ed8] border-blue-200 bg-gradient-to-r from-blue-50/90 to-white',
    badgeStyle: 'bg-blue-600 text-white',
  },
  {
    title: 'Holistic Formation',
    badge: '4 Houses',
    detail:
      'Integrating classroom excellence with synchronized drill, choral music, and ecological stewardship.',
    cardStyle:
      'border-l-4 border-l-[#ea580c] border-orange-200 bg-gradient-to-r from-orange-50/90 to-white',
    badgeStyle: 'bg-orange-600 text-white',
  },
  {
    title: 'Inclusive Community',
    badge: '2,000+ Scholars',
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
      className="w-full bg-gradient-to-br from-[#eff6ff] via-[#fff7ed] to-[#f0fdf4] py-16 md:py-24 border-t border-blue-200/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-2xl border border-blue-200/80 bg-white/90 p-7 shadow-lg shadow-blue-950/5 backdrop-blur-xs sm:p-9">
            <span className="inline-block rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-xs">
              St. Michael&apos;s Higher Secondary School • Umsning
            </span>
            <h2 className="vision-serif-heading mt-4 text-3xl sm:text-4xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Who We Are
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

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {heritagePillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`rounded-xl border p-5 shadow-md transition-transform duration-200 hover:-translate-y-0.5 ${pillar.cardStyle}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-bold text-[#0c4a8a]">&raquo; {pillar.title}</div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${pillar.badgeStyle}`}
                  >
                    {pillar.badge}
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium leading-6 text-slate-700">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission & Our Vision Side-by-Side (Exact Reference Typography + Vibrant Framing) */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article
            id="mission"
            className="scroll-mt-28 relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-b from-white via-white to-blue-50/70 p-7 shadow-xl shadow-blue-900/10 sm:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#1d4ed8] via-[#0284c7] to-[#0d9488]" />
            <h3 className="vision-serif-heading text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Our Mission
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
            className="scroll-mt-28 relative overflow-hidden rounded-2xl border-2 border-orange-200 bg-gradient-to-b from-white via-white to-amber-50/70 p-7 shadow-xl shadow-orange-900/10 sm:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#d90429]" />
            <h3 className="vision-serif-heading text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Our Vision
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

    {/* Founder's Heritage — Warm Sunlit Royal Blue & Gold Canvas */}
    <section
      id="founder-message"
      className="w-full bg-gradient-to-r from-[#dbeafe] via-[#fef3c7] to-[#e0f2fe] py-16 md:py-24 scroll-mt-24 border-t border-amber-300/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl border-2 border-blue-300/80 bg-white shadow-2xl md:grid-cols-2">
          <div className="relative min-h-72 md:min-h-112 bg-slate-900">
            <img
              src={SCHOOL_IMAGES.foundingCampus}
              alt="St. Michael's Higher Secondary School main campus building and tower, established in 1961"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-4 py-2 text-xs font-bold text-white shadow-lg">
              S.M.H.S.S. Archangel Tower • Umsning (Estd. 1961)
            </div>
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-br from-white via-blue-50/40 to-amber-50/50 p-6 sm:p-10 lg:p-14">
            <span className="inline-block w-fit rounded-md bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-900 border border-amber-300">
              Founded in 1961 • 65 Years of Service
            </span>
            <h2 className="vision-serif-heading mt-3 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Founder&apos;s Heritage
            </h2>
            <p className="vision-body-copy mt-4 text-[#0c4a8a]">
              St. Michael&apos;s Higher Secondary School was established in 1961 in the conviction
              that quality education opens doors and strengthens the entire Ri Bhoi region. That
              founding spirit continues today: making learning meaningful, nurturing every
              student&apos;s potential, and helping young people step forward with courage.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-blue-200 pt-5 text-xs font-bold uppercase tracking-wider text-[#0c4a8a]">
              <span className="rounded-md bg-blue-100 px-3 py-1 text-[#0c4a8a]">
                Catholic Diocese of Shillong
              </span>
              <span className="rounded-md bg-rose-100 px-3 py-1 text-[#c61c49]">
                Umsning, Meghalaya
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    {/* Principal's Desk — Deep Royal Blue & Sunrise Gold Showcase */}
    <section
      id="principal-message"
      className="w-full bg-gradient-to-br from-[#0c2d57] via-[#1d4ed8] to-[#0f172a] py-16 md:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl border-2 border-amber-400/70 bg-white shadow-2xl md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative order-1 min-h-72 md:order-2 md:min-h-128 bg-slate-900">
            <img
              src={SCHOOL_IMAGES.schoolStaff}
              alt="St. Michael's Higher Secondary School leadership, Reverend Sisters, and faculty"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-4 right-4 rounded-full bg-amber-400 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
              68+ Dedicated Educators
            </div>
          </div>
          <div className="order-2 flex flex-col justify-center bg-gradient-to-br from-white via-sky-50/50 to-orange-50/40 p-6 sm:p-10 lg:p-14 md:order-1">
            <span className="inline-block w-fit rounded-md bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-900 border border-orange-300">
              From The Principal&apos;s Desk
            </span>
            <h2 className="vision-serif-heading mt-3 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Principal&apos;s Welcome
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
                  className="flex items-start gap-2.5 rounded-lg bg-blue-50/80 px-3.5 py-2 text-sm font-medium text-[#0c4a8a] border border-blue-100"
                >
                  <span className="font-bold text-[#d90429]" aria-hidden="true">
                    &raquo;
                  </span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center justify-between border-t border-blue-200 pt-5 text-sm">
              <div>
                <p className="font-bold text-[#0c4a8a]">Office of the Principal &amp; Management</p>
                <p className="text-xs font-medium text-slate-600">
                  St. Michael&apos;s Higher Secondary School, Umsning
                </p>
              </div>
              <span className="rounded-lg bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm">
                Estd. 1961
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </>
);
