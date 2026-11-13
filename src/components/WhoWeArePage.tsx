import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface WhoWeArePageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

const schoolProfileStats = [
  {
    label: 'Total Enrolment',
    value: '2,000+ Students',
    sub: '980+ Boys • 1,020+ Girls (Co-Ed)',
    icon: 'fas fa-user-graduate',
  },
  {
    label: 'Teaching & Admin Staff',
    value: '68+ Teaching • 18+ Support',
    sub: 'Qualified M.A., M.Sc., B.Ed. Faculty',
    icon: 'fas fa-chalkboard-teacher',
  },
  {
    label: 'Classrooms & Labs',
    value: '60+ Classrooms & 4 Labs',
    sub: 'Nursery to Class XII Sections',
    icon: 'fas fa-school',
  },
  {
    label: 'Board & Registration',
    value: 'MBOSE Code: 01961',
    sub: 'UDISE+: 17050200108 • Estd. 1961',
    icon: 'fas fa-certificate',
  },
];

const generalIdentityRecords = [
  {
    label: 'Official Name of Institution',
    value: "St. Michael's Higher Secondary School, Umsning",
    icon: 'fas fa-university',
  },
  {
    label: 'Year of Establishment & Founder',
    value: '1961 • Founded by Fr. Michael Balawan (French Salesian Missionary)',
    icon: 'fas fa-cross',
  },
  {
    label: 'Management & Ecclesiastical Body',
    value: 'Catholic Mission of Umsning, Archdiocese of Shillong',
    icon: 'fas fa-church',
  },
  {
    label: 'Board Affiliation & Medium',
    value: 'Meghalaya Board of School Education (MBOSE) • English Medium',
    icon: 'fas fa-award',
  },
  {
    label: 'School Motto & Meaning',
    value: '“Excelsior” (Latin) & “Shaphrang” (Khasi) — Ever Upward & Step Forward with Courage',
    icon: 'fas fa-shield-alt',
  },
  {
    label: 'Academic Coverage & Streams',
    value: 'Nursery & KG to Class XII (Arts, Science & Commerce at Higher Secondary)',
    icon: 'fas fa-graduation-cap',
  },
  {
    label: 'Campus Location & Connectivity',
    value: 'Umsning (PIN - 793105), Ri Bhoi District — Between Shillong & Nongpoh on NH-6 Corridor',
    icon: 'fas fa-map-marker-alt',
  },
  {
    label: 'Official School & Office Hours',
    value: 'Classes VI–XII: 8:45 AM – 3:00 PM • Primary: 8:45 AM – 2:00 PM (Mon – Fri)',
    icon: 'fas fa-clock',
  },
];

const historicalMilestones = [
  {
    year: '1961',
    title: 'Foundation as a Lower Primary School',
    badge: 'Pioneering Era',
    icon: 'fas fa-seedling',
    description:
      'Started as a Lower Primary School in 1961 by the visionary French Salesian missionary and mathematician Fr. Michael Balawan under the Catholic Mission of Umsning, Archdiocese of Shillong, bringing formal schooling to rural Ri Bhoi.',
  },
  {
    year: '1970s – 1990s',
    title: 'Expansion to Upper Primary & Secondary Section (MBOSE SSLC)',
    badge: 'Academic Growth',
    icon: 'fas fa-book-open',
    description:
      'Under the dedicated stewardship of Diocesan priests, Missionary Sisters, and lay educators, the school expanded into a full-fledged Secondary institution preparing candidates for the MBOSE SSLC Board Examinations with consistent 100% pass results.',
  },
  {
    year: '2000s – Present',
    title: 'Upgradation to Higher Secondary (Arts, Science & Commerce)',
    badge: 'Higher Secondary Excellence',
    icon: 'fas fa-microscope',
    description:
      'Upgraded to St. Michael’s Higher Secondary School offering Class XI & XII streams in Science, Arts & Humanities, and Commerce with dedicated Physics, Chemistry, Biology, and Computer laboratories, serving over 2,000 students.',
  },
  {
    year: '2026 & Beyond',
    title: '65 Years of Legacy & State Top 20 Merit Distinction',
    badge: '65th Anniversary Milestone',
    icon: 'fas fa-trophy',
    description:
      'Celebrating 65 years of holistic education with MBOSE SSLC State Top 20 Merit Rank honors felicitated by the Hon’ble Chief Minister of Meghalaya and backed by the ₹20,000 St. Michael’s SSLC Award Body Endowment.',
  },
];

const campusWings = [
  {
    wing: 'Foundational & Lower Primary Wing',
    classes: 'Nursery, KG & Classes I – V',
    timings: 'Monday – Friday: 8:45 AM – 2:00 PM',
    head: 'Supervised by Headmistress – LP Section',
    highlights: [
      'Activity-based English & Khasi literacy and foundational numeracy',
      'Warm pastoral care, storytelling, art, and joyful socialization',
      'Two annual Term Examinations along with regular unit assessments',
    ],
  },
  {
    wing: 'Upper Primary & Secondary Wing (SSLC)',
    classes: 'Classes VI – X (MBOSE Affiliated)',
    timings: 'Monday – Friday: 8:45 AM – 3:00 PM',
    head: 'Supervised by Headmistress – Secondary Section',
    highlights: [
      'Structured MBOSE curriculum in Mathematics, Science, Social Science & Languages',
      'Hands-on science practicals, computer literacy, and remedial board coaching',
      'Half-Yearly/Pre-Selection and Selection/Promotion examinations',
    ],
  },
  {
    wing: 'Higher Secondary Wing (HSSLC)',
    classes: 'Classes XI – XII (Science, Arts & Commerce)',
    timings: 'Monday – Friday: 8:45 AM – 3:00 PM',
    head: 'Supervised by Principal, Secretary & Senior Lecturers',
    highlights: [
      'Dedicated Physics, Chemistry, Biology & Computer Science laboratories',
      'Annual regional geography fieldwork & NEET / JEE / CUET career guidance',
      'Pre-Promotion & Promotion (Class XI) and Pre-Selection & Selection (Class XII) exams',
    ],
  },
];

export const WhoWeArePage: React.FC<WhoWeArePageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  return (
    <section
      id="who-we-are-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb & Back Navigation Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Back to Home Page</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
            <span className="text-[#0c4a8a]">About</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Who We Are (General Information)</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigatePage && (
              <button
                type="button"
                onClick={() => onNavigatePage('mission-vision')}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
              >
                <i className="fas fa-bullseye text-[#d97706]" aria-hidden="true"></i>
                <span>Our Mission &amp; Vision</span>
              </button>
            )}
          </div>
        </div>

        {/* Executive Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-school mr-1.5" aria-hidden="true"></i>
                  Established {SCHOOL_INFO.established} • 65 Years of Service
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-certificate mr-1.5" aria-hidden="true"></i>
                  MBOSE Code: {SCHOOL_INFO.schoolCode} • UDISE+: 17050200108
                </span>
              </div>

              <h1
                className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
                style={{ color: '#ffffff' }}
              >
                Who We Are (General Information)
              </h1>
              <p className="mt-2 text-sm sm:text-base font-bold text-amber-300">
                {SCHOOL_INFO.name} • Catholic Mission of Umsning, Archdiocese of Shillong
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-100">
                The School is under the management of the{' '}
                <strong>Catholic Mission of Umsning, Archdiocese of Shillong</strong>, and is one of
                the oldest co-educational institutions in the Ri Bhoi District of Meghalaya. It was
                started as a Lower Primary School in <strong>{SCHOOL_INFO.established}</strong> by
                the great Educationist and French Catholic Missionary,{' '}
                <strong>Fr. Michael Balawan</strong>.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                The institution is backboned by its committed teachers who spark the imagination of
                their students and give wings to their dreams. The spirit of confidence and
                competency is the hallmark that <strong>&ldquo;Michaelians&rdquo;</strong> carry
                with them from the torch of their school&apos;s motto{' '}
                <strong>&ldquo;{SCHOOL_INFO.mottoLatin}&rdquo;</strong> &amp;{' '}
                <strong>&ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo;</strong>. The school runs classes
                from <strong>Nursery to Class XII</strong> with <strong>English</strong> as the
                medium of instruction.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {onOpenAdmission && (
                  <button
                    type="button"
                    onClick={onOpenAdmission}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    <i className="fas fa-paper-plane" aria-hidden="true"></i>
                    <span>Admission Enquiry 2026–27</span>
                  </button>
                )}
                {onNavigatePage && (
                  <button
                    type="button"
                    onClick={() => onNavigatePage('founder')}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer"
                  >
                    <i className="fas fa-cross text-amber-300" aria-hidden="true"></i>
                    <span>Founder&apos;s Biography</span>
                  </button>
                )}
                {onNavigatePage && (
                  <button
                    type="button"
                    onClick={() => onNavigatePage('academic-calendar')}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer"
                  >
                    <i className="fas fa-calendar-alt text-amber-300" aria-hidden="true"></i>
                    <span>Academic Calendar</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Campus Building Showcase */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-amber-400/70 bg-slate-900 shadow-2xl">
              <img
                src={SCHOOL_IMAGES.schoolBuildingFront}
                alt="St. Michael's Higher Secondary School Building, Umsning"
                className="w-full h-[340px] sm:h-[380px] object-cover object-center"
              />
              <div className="bg-slate-950/90 px-4 py-3.5 border-t border-amber-400/30">
                <p className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                  <i className="fas fa-award mr-1.5" aria-hidden="true"></i>
                  Motto: &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo; ({SCHOOL_INFO.mottoMeaning})
                </p>
                <p className="mt-1 text-[11px] font-medium text-slate-300">
                  Situated at Umsning (PIN - 793105) between Shillong and Nongpoh along the NH-6 Corridor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* At-a-Glance Institutional Statistics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schoolProfileStats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex items-center gap-3.5 rounded-2xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-white p-5 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${
                  idx % 2 === 0 ? 'bg-[#0c4a8a]' : 'bg-[#d97706]'
                }`}
              >
                <i className={`${stat.icon} text-base`} aria-hidden="true"></i>
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </span>
                <strong className="block truncate text-base font-extrabold text-[#0c4a8a]">
                  {stat.value}
                </strong>
                <span className="block truncate text-xs font-semibold text-slate-600">
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Institutional Fact Sheet */}
        <div
          id="registration-udise"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                <i className="fas fa-file-alt mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                Official School Diary &amp; Registration Fact Sheet
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Institutional Identity &amp; General Information
              </h2>
            </div>
            <span className="text-xs font-bold text-[#0c4a8a]">
              Archdiocese of Shillong • Ri Bhoi District
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {generalIdentityRecords.map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-between rounded-xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-[#f8fafc] p-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                    <i className={item.icon} aria-hidden="true"></i>
                    <span>{item.label}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-bold leading-relaxed text-[#0c4a8a]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Journey & Three Academic Wings */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left 7 Columns: Historical Timeline */}
          <div id="history-timeline" className="lg:col-span-7 space-y-5 scroll-mt-28">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7">
              <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                <i className="fas fa-history mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                65 Years of Educational Heritage (1961 – 2026)
              </span>
              <h2 className="vision-serif-heading mt-2.5 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Our Journey Through the Decades
              </h2>

              <div className="mt-6 space-y-4">
                {historicalMilestones.map((item) => (
                  <article
                    key={item.year}
                    className="rounded-xl border border-slate-200 border-l-4 border-l-[#0c4a8a] bg-[#f8fafc] p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0c4a8a] px-3 py-0.5 text-xs font-extrabold text-white">
                        <i className={`${item.icon} text-amber-300`} aria-hidden="true"></i>
                        {item.year}
                      </span>
                      <span className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[11px] font-bold text-amber-900">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-base sm:text-lg font-extrabold text-[#0c4a8a]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Academic Wings & Timings */}
          <div id="wings-structure" className="lg:col-span-5 space-y-5 scroll-mt-28">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7">
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                <i className="fas fa-layer-group mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                School Structure • Nursery to Class XII
              </span>
              <h2 className="vision-serif-heading mt-2.5 text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Three Academic Wings
              </h2>

              <div className="mt-5 space-y-4">
                {campusWings.map((wing) => (
                  <div
                    key={wing.wing}
                    className="rounded-xl border border-slate-200 border-t-4 border-t-[#d97706] bg-[#f8fafc] p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-sm font-extrabold text-[#0c4a8a]">{wing.wing}</strong>
                      <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[11px] font-bold text-[#0c4a8a]">
                        {wing.classes}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-[#d97706]">
                      <i className="fas fa-clock mr-1" aria-hidden="true"></i>
                      {wing.timings}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-slate-500">{wing.head}</p>
                    <ul className="mt-2.5 space-y-1.5">
                      {wing.highlights.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-xs font-medium text-slate-700"
                        >
                          <i
                            className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0"
                            aria-hidden="true"
                          ></i>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Secretariat Card */}
            <div
              id="address-contact"
              className="scroll-mt-28 rounded-2xl border border-slate-700 bg-[#0c2d57] p-6 text-white shadow-md"
            >
              <span className="inline-block rounded-md bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                <i className="fas fa-map-signs mr-1" aria-hidden="true"></i>
                Campus Location &amp; Secretariat
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-white">
                Visit St. Michael&apos;s, Umsning
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-200">
                Situated at Umsning (PIN - 793105) between Shillong and Nongpoh on the left side of
                the old National Highway and right side of the Shillong–Guwahati Bypass road.
              </p>
              <div className="mt-4 space-y-1.5 text-xs text-amber-200 font-semibold">
                <div>
                  <i className="fas fa-phone-alt mr-2 text-amber-400" aria-hidden="true"></i>
                  {SCHOOL_INFO.phoneMobile} / {SCHOOL_INFO.phone}
                </div>
                <div>
                  <i className="fas fa-envelope mr-2 text-amber-400" aria-hidden="true"></i>
                  {SCHOOL_INFO.email}
                </div>
                <div>
                  <i className="fas fa-clock mr-2 text-amber-400" aria-hidden="true"></i>
                  Office Hours: {SCHOOL_INFO.officeHours}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Campus Summary */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
          <strong className="block text-sm font-extrabold text-[#0c4a8a]">
            {SCHOOL_INFO.name}, Umsning
          </strong>
          <span className="text-xs font-medium text-slate-600">
            Catholic Mission of Umsning, Archdiocese of Shillong • Affiliated to MBOSE ({SCHOOL_INFO.schoolCode})
          </span>
        </div>
      </div>
    </section>
  );
};
