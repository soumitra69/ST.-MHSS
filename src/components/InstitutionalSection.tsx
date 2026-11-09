import React from 'react';
import { ArrowUpRight, Award, Compass, Eye, Heart, ShieldCheck, Target } from 'lucide-react';
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
    {/* Who We Are */}
    <section
      id="about"
      className="w-full bg-linear-to-b from-slate-50 via-white to-slate-50/70 py-16 md:py-24 border-t border-slate-200/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-900">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              Who We Are • Estd. {SCHOOL_INFO.established}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#142842] sm:text-4xl md:text-5xl leading-[1.12]">
              Learning with purpose. Growing with values.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Since 1961, St. Michael&apos;s Higher Secondary School has welcomed learners in
              Umsning to pursue knowledge, build character, and serve their community under the
              guiding motto <strong>{SCHOOL_INFO.mottoLatin}</strong> &amp;{' '}
              <strong>{SCHOOL_INFO.mottoKhasi}</strong> ({SCHOOL_INFO.mottoMeaning}).
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heritagePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs transition-colors hover:border-amber-400/70"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B365D]">
                  <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />
                  <span>{pillar.title}</span>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Side-by-Side Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article
            id="mission"
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 shadow-md shadow-slate-900/5 sm:p-10"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B365D] text-amber-300 shadow-xs">
              <Target className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              Institutional Purpose
            </span>
            <h3 className="mt-1 text-2xl font-bold text-[#142842] sm:text-3xl">Our Mission</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              To provide an inclusive, values-led education that helps every student develop
              intellectually, spiritually, socially, and physically. We encourage curiosity,
              discipline, compassion, and confidence so learners can make a positive difference in
              their families and communities.
            </p>
          </article>

          <article
            id="vision"
            className="scroll-mt-28 rounded-2xl bg-[#142842] p-7 text-white shadow-xl shadow-slate-950/15 sm:p-10 border border-white/10"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-amber-300">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
              Guiding Horizon
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Our Vision</h3>
            <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              To be a caring learning community where each person is inspired to strive for
              excellence, honour the dignity of others, and meet the future with knowledge,
              integrity, and courage — ever upward, <em className="text-amber-300">Excelsior</em>{' '}
              and <em className="text-amber-300">Shaphrang</em>.
            </p>
          </article>
        </div>
      </div>
    </section>

    {/* Founder's Heritage */}
    <section id="founder-message" className="w-full bg-[#eef3f8] py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/8 md:grid-cols-2">
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
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              <Award className="h-4 w-4" aria-hidden="true" />
              Founded in 1961 • 65 Years of Service
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#142842] sm:text-3xl">
              A legacy built on faith, scholarship, and community upliftment
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              St. Michael&apos;s Higher Secondary School was established in 1961 in the conviction
              that quality education opens doors and strengthens the entire Ri Bhoi region. That
              founding spirit continues today: making learning meaningful, nurturing every
              student&apos;s God-given potential, and helping young people step forward with courage.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-5 text-xs font-bold uppercase tracking-wider text-[#1B365D]">
              <span>Catholic Diocese of Shillong</span>
              <span className="text-slate-300">•</span>
              <span className="text-amber-800">Umsning, Meghalaya</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    {/* Principal's Desk */}
    <section id="principal-message" className="w-full bg-[#142842] py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-950/25 md:grid-cols-[1.15fr_0.85fr]">
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
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
              <Heart className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
              From The Principal&apos;s Desk
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#142842] sm:text-3xl">
              A warm welcome to students, parents, and guardians
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Every child brings unique gifts and possibilities. Our responsibility at St.
              Michael&apos;s is to provide a disciplined, caring environment where learners ask
              thoughtful questions, excel in MBOSE academics, discover their talents in athletics
              and music, and grow into compassionate citizens.
            </p>
            <ul className="mt-5 space-y-2.5">
              {institutionalValues.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-2.5 text-sm font-medium text-slate-700 sm:text-base"
                >
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 text-sm">
              <div>
                <p className="font-bold text-[#142842]">Office of the Principal &amp; Management</p>
                <p className="text-xs text-slate-500">
                  St. Michael&apos;s Higher Secondary School, Umsning
                </p>
              </div>
              <span className="rounded-md bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-[#1B365D]">
                Estd. 1961
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </>
);
