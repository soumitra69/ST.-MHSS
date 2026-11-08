import React from 'react';
import { ArrowUpRight, Compass, Eye, Heart, Target } from 'lucide-react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';

const institutionalValues = [
  'A strong foundation in learning and independent thought',
  'Respect, responsibility, and care for one another',
  'Confidence to contribute to the wider community',
];

export const InstitutionalSection: React.FC = () => (
  <>
    <section id="about" className="w-full bg-linear-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24">
      <div className="mx-auto flex min-h-64 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            <Compass className="h-4 w-4" />
            Who we are
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1B365D] sm:text-4xl md:text-5xl">
            Learning with purpose. Growing with values.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Since 1961, St. Michael&apos;s Higher Secondary School has welcomed
            learners in Umsning to pursue knowledge, build character, and serve
            their community.
          </p>
        </div>
      </div>
    </section>

    <section id="mission" className="w-full bg-[#f1f5f9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl border-l-4 border-[#1B365D] pl-6 sm:pl-10">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1B365D]">
            <Target className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold text-[#1B365D] sm:text-4xl">Our Mission</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            To provide an inclusive, values-led education that helps every
            student develop intellectually, spiritually, socially, and
            physically. We encourage curiosity, discipline, compassion, and
            confidence so learners can make a positive difference in their
            families and communities.
          </p>
        </article>
      </div>
    </section>

    <section id="vision" className="w-full bg-[#1B365D] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="ml-auto max-w-4xl border-l-4 border-amber-300 pl-6 sm:pl-10">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-amber-300">
            <Eye className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Vision</h2>
          <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
            To be a caring learning community where each person is inspired to
            strive for excellence, honour the dignity of others, and meet the
            future with knowledge, integrity, and courage — ever upward,
            <em> Excelsior</em>.
          </p>
        </article>
      </div>
    </section>

    <section id="founder-message" className="w-full bg-[#eef3f8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/10 md:grid-cols-2">
          <img
            src={SCHOOL_IMAGES.foundingCampus}
            alt="St. Michael's Higher Secondary School building, established in 1961"
            className="h-64 w-full object-cover md:h-full md:min-h-120"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
              Founded in 1961
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1B365D] sm:text-3xl">
              A message from our founders
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              St. Michael&apos;s was established in the belief that education
              can open doors and strengthen a community. That founding
              commitment continues today: to make learning meaningful, nurture
              every student&apos;s potential, and help young people move forward
              with purpose.
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-500">
              The founding spirit of St. Michael&apos;s, Umsning
            </p>
          </div>
        </article>
      </div>
    </section>

    <section id="principal-message" className="w-full bg-[#1B365D] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-950/20 md:grid-cols-[1.15fr_0.85fr]">
          <img
            src={SCHOOL_IMAGES.schoolStaff}
            alt="St. Michael's school staff gathered together at a school event"
            className="order-1 h-64 w-full object-cover object-center md:order-2 md:h-full md:min-h-136"
            loading="lazy"
            decoding="async"
          />
          <div className="order-2 flex flex-col justify-center p-6 sm:p-10 lg:p-14 md:order-1">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1B365D]">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
              The Principal&apos;s Desk
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#1B365D] sm:text-3xl">
              A welcome to students and families
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Every student brings unique strengths and possibilities. Our
              responsibility is to create a supportive place to learn, ask
              questions, discover new interests, and grow in character. We invite
              families to partner with us as we prepare our young people for the
              opportunities and responsibilities ahead.
            </p>
            <ul className="mt-5 space-y-2.5">
              {institutionalValues.map((value) => (
                <li key={value} className="flex items-start gap-2 text-sm text-slate-700 sm:text-base">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-slate-200 pt-5 text-sm font-semibold text-[#1B365D]">
              With warm regards, The Principal&apos;s Office
            </p>
          </div>
        </article>
      </div>
    </section>
  </>
);
