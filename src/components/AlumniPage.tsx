import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import type { AppPageId } from './InstitutionalSection';

interface AlumniPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

type AlumniCategory = 'All' | 'State Rankers' | 'Medicine & Healthcare' | 'Engineering & Tech' | 'Civil Services & Law' | 'Entrepreneurs & Finance';

interface AlumniProfile {
  id: number;
  name: string;
  batch: string;
  role: string;
  organization: string;
  location: string;
  category: Exclude<AlumniCategory, 'All'>;
  achievement: string;
  image: string;
  quote: string;
  highlights: string[];
}

const ALUMNI_PROFILES: AlumniProfile[] = [
  {
    id: 1,
    name: 'Sanidahün Nongkhlaw',
    batch: 'SSLC Batch of 2026',
    role: 'MBOSE SSLC State Top 20 Merit Holder',
    organization: 'Meghalaya State Merit Honoree',
    location: 'Shillong / Umsning',
    category: 'State Rankers',
    achievement: 'SSLC State Merit Scholar & Board Topper',
    image: SCHOOL_IMAGES.awardPresentation,
    quote:
      "Studying at St. Michael's Umsning gave me strong moral grounding and the daily academic discipline to compete at the state level. The personal mentorship from our faculty and the school merit scholarship inspired me to pursue Senior Secondary Science with confidence.",
    highlights: [
      'MBOSE SSLC State Merit Rank Holder',
      'Merit Award & 100% Tuition Waiver',
      '96.4% Distinction in Science & Mathematics',
    ],
  },
  {
    id: 2,
    name: 'Dr. Ibakorlin Syiemlieh',
    batch: 'SSLC Batch of 2012 • HSSLC 2014',
    role: 'Medical Officer & Public Health Specialist',
    organization: 'Meghalaya Health Services (Govt. of Meghalaya)',
    location: 'Nongpoh / Shillong',
    category: 'Medicine & Healthcare',
    achievement: 'MBBS (NEIGRIHMS) • Gold Medalist in Pathology',
    image: SCHOOL_IMAGES.sports,
    quote:
      "The discipline of the morning assembly, the biology and chemistry laboratory practicals, and the constant pastoral guidance of the Sisters and teachers at St. Michael's Umsning gave me the foundation to pursue medicine and serve our rural communities.",
    highlights: [
      'MBBS Merit Selection through NEET',
      'Serving Rural Health Centers across Ri Bhoi District',
      'Lead Volunteer for School Health & Vaccination Camps',
    ],
  },
  {
    id: 3,
    name: 'Marcus Kharsyntiew',
    batch: 'HSSLC Science Batch of 2025',
    role: 'B.Tech Engineering Scholar & Robotics Lead',
    organization: 'North-Eastern Hill University (NEHU)',
    location: 'Shillong, Meghalaya',
    category: 'Engineering & Tech',
    achievement: 'Campus Head Boy 2025 • 94.6% PCM Aggregate',
    image: SCHOOL_IMAGES.certificateWinners,
    quote:
      "From synchronized morning drill on the amphitheatre steps to intensive practical sessions in the Physics, Chemistry, and Computer laboratories, St. Michael's formed me as a disciplined problem-solver ready for university engineering.",
    highlights: [
      '94.6% PCM Aggregate in MBOSE HSSLC',
      'School Prefect & State Inter-School Science Winner',
      'Automated IoT Weather Station Project Lead',
    ],
  },
  {
    id: 4,
    name: 'Daiakmen I Ka Talang',
    batch: 'HSSLC Arts Batch of 2023',
    role: 'UPSC Civil Services Aspirant & Gold Medalist',
    organization: 'Department of Public Policy, Shillong',
    location: 'Shillong / New Delhi',
    category: 'Civil Services & Law',
    achievement: '95.2% Humanities Topper • University Rank 1',
    image: SCHOOL_IMAGES.sportsGreenChampions,
    quote:
      "Our geography fieldwork excursions across Ri Bhoi and weekly parliamentary debates taught me how to think critically about society. St. Michael's engraved in us our motto 'Excelsior & Shaphrang'—to always step forward with courage and integrity.",
    highlights: [
      'MBOSE HSSLC State Distinction in Political Science',
      'Lead Coordinator — Eco & Fieldwork Club',
      'State Youth Parliament Best Speaker Award',
    ],
  },
  {
    id: 5,
    name: 'Wanboklang Marbaniang',
    batch: 'HSSLC Arts Batch of 2015',
    role: 'Assistant Professor & Cultural Researcher',
    organization: 'St. Anthony’s College, Shillong',
    location: 'Shillong, Meghalaya',
    category: 'Civil Services & Law',
    achievement: 'M.A., UGC-NET & Ph.D Research Scholar',
    image: SCHOOL_IMAGES.graduatingBatch,
    quote:
      "Being a 'Michaelian' means carrying our values wherever we go. The love for literature, Khasi heritage, and community service that blossomed in St. Michael's classrooms continues to anchor my academic career today.",
    highlights: [
      'Published Ethnographic Studies on Ri Bhoi Folklore',
      'Keynote Speaker at Meghalaya Literary Festival',
      'Mentor for Michaelian Debating Society',
    ],
  },
  {
    id: 6,
    name: 'Ribha Nongrum',
    batch: 'HSSLC Commerce Batch of 2018',
    role: 'Chartered Financial Analyst & Senior Consultant',
    organization: 'National Corporate Advisory Group',
    location: 'Guwahati / Umsning',
    category: 'Entrepreneurs & Finance',
    achievement: 'Chartered Accountant (ICAI) • First Attempt',
    image: SCHOOL_IMAGES.studentLeaders,
    quote:
      "St. Michael's Higher Secondary School transformed rural students into confident, world-class professionals. The rigorous commerce curriculum, accountancy problem sets, and values of integrity made all the difference.",
    highlights: [
      'Cleared CA Foundation & Inter with Honors',
      'Founded Rural Financial Literacy Drive in Umsning',
      'Key Contributor to Alumni Scholarship Fund',
    ],
  },
  {
    id: 7,
    name: 'Banrilang Marbaniang',
    batch: 'HSSLC Science Batch of 2025',
    role: 'Pre-Medical Scholar & Bio-Science Research Lead',
    organization: 'Regional Medical Entrance Cell',
    location: 'Umsning, Ri Bhoi',
    category: 'Medicine & Healthcare',
    achievement: '97.0% Biology & Chemistry Distinction',
    image: SCHOOL_IMAGES.stateCeremony,
    quote:
      "The biology specimen lab, herbarium preservation projects, and structured board test series at St. Michael's bridged the gap between school textbooks and competitive medical entrance examinations.",
    highlights: [
      '97.0% Score in MBOSE HSSLC Biology',
      'President — St. Michael’s Eco-Science Club',
      'State Pre-Medical Merit Scholarship Recipient',
    ],
  },
  {
    id: 8,
    name: 'Grace Lyngdoh',
    batch: 'HSSLC Arts Batch of 2024',
    role: 'Honours Scholar & Social Worker',
    organization: 'Archdiocesan Social Service Commission',
    location: 'Shillong, Meghalaya',
    category: 'Civil Services & Law',
    achievement: 'Best All-Rounder Award • Yellow House Captain',
    image: SCHOOL_IMAGES.culturalTroupe,
    quote:
      "The spirit of community, reverence, and service instilled by our Principal and teachers continues to guide me in college. St. Michael's is more than a school—it is a lifelong family that nurtures our God-given gifts.",
    highlights: [
      'Yellow House Captain & Choral Soloist',
      'State-Level Science & Arts Exhibition Winner',
      'Coordinator for Rural Child Education Camps',
    ],
  },
];

const MILESTONES = [
  {
    year: '1961',
    title: 'Founding Year by Fr. Michael Balawan',
    desc: 'Established with humble thatched classrooms under the Catholic Mission to bring English-medium literacy to Umsning and the surrounding rural villages of Ri Bhoi.',
  },
  {
    year: '1985',
    title: 'First MBOSE SSLC Cohort',
    desc: 'Full recognition and affiliation under the Meghalaya Board of School Education, producing our first generation of teachers, public servants, and community leaders.',
  },
  {
    year: '2005',
    title: 'Higher Secondary Upgrade',
    desc: 'Introduction of Class XI & XII Arts, Science, and Commerce streams, opening collegiate career paths for local scholars right at home in Umsning.',
  },
  {
    year: '2015',
    title: 'Golden Era & State Merit Ranks',
    desc: 'Michaelians regularly secure top 20 state ranks in MBOSE examinations, winning Governor and Chief Minister felicitations and state science honors.',
  },
  {
    year: '2026',
    title: '8,500+ Strong Global Fraternity',
    desc: 'Over 65 glorious years of academic rigor, moral integrity, and regional leadership spanning medicine, engineering, civil service, business, and education.',
  },
];

const ALUMNI_STATS = [
  { value: '8,500+', label: 'Registered Alumni', icon: 'fas fa-user-graduate' },
  { value: '65 Years', label: 'Continuous Legacy (1961–2026)', icon: 'fas fa-landmark' },
  { value: '100+', label: 'Doctors, Engineers & Civil Servants', icon: 'fas fa-user-md' },
  { value: '100%', label: 'Board Pass & State Toppers', icon: 'fas fa-award' },
];

export const AlumniPage: React.FC<AlumniPageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<AlumniCategory>('All');
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    passoutYear: '',
    streamOrClass: 'Class XII Science',
    currentRole: '',
    organization: '',
    phone: '',
    email: '',
    currentCity: '',
    message: '',
  });

  const filteredAlumni = ALUMNI_PROFILES.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <section
      id="alumni-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
            <span className="text-[#0c4a8a]">About &amp; Governance</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true" />
            <span className="text-[#d97706]">Michaelian Alumni &amp; Community</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#alumni-register"
              className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-amber-700 cursor-pointer"
            >
              <i className="fas fa-id-card" aria-hidden="true" />
              <span>Join Alumni Association</span>
            </a>
          </div>
        </div>

        {/* Hero Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10 mb-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-user-graduate mr-1.5" aria-hidden="true" />
                  Official Michaelian Fraternity
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-shield-alt mr-1.5" aria-hidden="true" />
                  Estd. 1961 • 65 Years of Legacy
                </span>
              </div>

              <h1 className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight">
                Michaelian Alumni &amp; Community
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100 text-justify">
                Connecting <strong>8,500+ proud Michaelians</strong> who have walked through the gates
                of <strong>{SCHOOL_INFO.name}</strong>, Umsning since 1961. Carrying our motto{' '}
                <em>&ldquo;{SCHOOL_INFO.mottoLatin}&rdquo;</em> (Excelsior) and{' '}
                <em>&ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo;</em> (Step Forward with Courage) into medicine,
                engineering, administrative governance, education, and regional enterprise across Meghalaya and the world.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#alumni-directory"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <i className="fas fa-users" aria-hidden="true" />
                  <span>Browse Alumni Voices</span>
                </a>
                <a
                  href="#alumni-register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <i className="fas fa-pen-alt text-amber-300" aria-hidden="true" />
                  <span>Register Your Details</span>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-amber-400/70 bg-slate-900 shadow-xl">
              <img
                src={SCHOOL_IMAGES.panoramicAssembly}
                alt="2,000 Scholars and Alumni of St. Michael's Umsning"
                className="h-60 w-full object-cover"
              />
              <div className="bg-slate-950/90 px-4 py-3 text-xs font-bold text-amber-300 flex items-center justify-between">
                <span>The Michaelian Family in Umsning</span>
                <span className="text-[10px] text-slate-400 font-mono">Estd. 1961</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Institutional Alumni Statistics Strip */}
        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ALUMNI_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all hover:border-amber-400 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-[#d97706] text-xl shadow-inner mb-3">
                <i className={stat.icon} aria-hidden="true" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#0c4a8a]">{stat.value}</div>
              <div className="mt-1 text-xs font-bold text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* President & Secretary Executive Welcome Message */}
        <div className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                From the Desk of the Alumni Patron
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Welcome Home, Dear Michaelians
              </h2>
              <div className="mt-4 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-700 text-justify">
                <p>
                  No matter how many years have passed since you last walked down our school corridors,
                  stood in the morning assembly under the Umsning pine breeze, or ran on the school football
                  grounds, you will forever remain an essential part of the <strong>St. Michael&apos;s</strong> legacy.
                </p>
                <p>
                  The Michaelian Alumni Association exists to nurture enduring bonds between past pupils,
                  current students, and the faculty. Through guest mentorship lectures, scholarships for deserving
                  scholars, career counseling sessions, and infrastructure endowments, our alumni continue to
                  uplift the youth of Ri Bhoi District.
                </p>
                <p className="font-semibold text-[#0c4a8a]">
                  &ldquo;Once a Michaelian, Always a Michaelian.&rdquo; We welcome your return, your memories,
                  and your continued stewardship.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-5">
                <div>
                  <strong className="block text-sm font-extrabold text-[#0c4a8a]">Office of the Principal &amp; Secretariat</strong>
                  <span className="text-xs text-slate-500">{SCHOOL_INFO.name}, Umsning</span>
                </div>
                <div className="text-xs text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  Secretariat Helpline: {SCHOOL_INFO.phoneMobile}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 text-center shadow-inner">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0c4a8a] text-white shadow-lg mb-3">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="St. Michael Logo Crest"
                  className="h-16 w-16 rounded-full object-contain p-1 bg-white"
                />
              </div>
              <h4 className="text-sm font-black text-[#0c4a8a]">St. Michael&apos;s Alumni Council</h4>
              <p className="mt-1 text-xs text-slate-600">
                Catholic Mission of Umsning, Archdiocese of Shillong
              </p>
              <div className="mt-4 space-y-1.5 border-t border-slate-200 pt-3 text-[11px] text-slate-500">
                <p><i className="fas fa-envelope text-[#d97706] mr-1.5" />{SCHOOL_INFO.email}</p>
                <p><i className="fas fa-map-marker-alt text-[#d97706] mr-1.5" />NH-6, Umsning 793105</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Profiles Directory & Category Filter */}
        <div id="alumni-directory" className="mb-12 scroll-mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-6">
            <div>
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                Voices of Excellence
              </span>
              <h2 className="vision-serif-heading mt-1 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Distinguished Alumni Directory
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Showing {filteredAlumni.length} of {ALUMNI_PROFILES.length} Featured Profiles
            </span>
          </div>

          {/* Filter Pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {(
              [
                'All',
                'State Rankers',
                'Medicine & Healthcare',
                'Engineering & Tech',
                'Civil Services & Law',
                'Entrepreneurs & Finance',
              ] as AlumniCategory[]
            ).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0c4a8a] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAlumni.map((alum) => (
              <div
                key={alum.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0c4a8a] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="inline-block rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-[11px] font-black text-[#0c4a8a]">
                      {alum.batch}
                    </span>
                    <span className="inline-block rounded-lg bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-extrabold text-[#d97706]">
                      {alum.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#0c4a8a]">{alum.name}</h3>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{alum.role}</div>
                  <div className="text-[11px] text-slate-500 mb-3">{alum.organization} • {alum.location}</div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 mb-4">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#d97706] mb-1">
                      <i className="fas fa-star mr-1" /> Key Distinction
                    </div>
                    <div className="text-xs font-bold text-slate-700">{alum.achievement}</div>
                  </div>

                  <p className="text-xs italic text-slate-600 leading-relaxed text-justify mb-4">
                    &ldquo;{alum.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Campus Highlights
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    {alum.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <i className="fas fa-check-circle text-xs text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Milestones 1961–2026 */}
        <div className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8 lg:p-10">
          <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
            65-Year Journey of Excellence
          </span>
          <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
            <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Institutional Milestones of Our Alumni Body
          </h2>

          <div className="mt-8 relative border-l-2 border-[#0c4a8a]/20 pl-6 sm:pl-8 space-y-8 ml-3">
            {MILESTONES.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#0c4a8a] text-white text-xs font-bold ring-4 ring-white shadow">
                  <i className="fas fa-check text-[10px]" />
                </div>
                <div>
                  <span className="inline-block rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 text-xs font-black text-amber-900">
                    {m.year}
                  </span>
                  <h3 className="mt-1 text-base sm:text-lg font-black text-[#0c4a8a]">{m.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Eco-Social Outreach Initiatives */}
        <div className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8 lg:p-10">
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
            Social Commitment (Objective #07)
          </span>
          <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
            <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Alumni &amp; Campus Community Outreach in Ri Bhoi
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
              <img
                src={SCHOOL_IMAGES.campusEcoDrive}
                alt="Green Umsning Tree Plantation Drive"
                className="h-40 w-full sm:w-48 shrink-0 rounded-xl object-cover shadow-sm"
              />
              <div>
                <h3 className="text-base font-extrabold text-[#0c4a8a]">
                  Green Umsning Afforestation &amp; Watershed Care
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 text-justify">
                  Every year, alumni collaborate with the Eco Club to plant hundreds of indigenous pine
                  and fruit saplings across Umsning and neighboring hill tracts to safeguard the natural
                  watersheds of Ri Bhoi District.
                </p>
                <div className="mt-3 text-[11px] font-bold text-[#d97706]">
                  <i className="fas fa-seedling mr-1" /> 1,200+ Saplings Planted Annually
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
              <img
                src={SCHOOL_IMAGES.posterCampaign}
                alt="Anti-Tobacco Community Rally"
                className="h-40 w-full sm:w-48 shrink-0 rounded-xl object-cover shadow-sm"
              />
              <div>
                <h3 className="text-base font-extrabold text-[#0c4a8a]">
                  Nasha Mukt Yuva &amp; Rural Health Literacy
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 text-justify">
                  Senior secondary scholars and alumni medical practitioners conduct village awareness rallies,
                  anti-substance abuse drives, and hygiene workshops in partnership with local traditional Dorbars.
                </p>
                <div className="mt-3 text-[11px] font-bold text-[#d97706]">
                  <i className="fas fa-heartbeat mr-1" /> 14 Village Outreach Drives Conducted
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Registration & Directory Enrollment Form */}
        <div
          id="alumni-register"
          className="scroll-mt-24 rounded-3xl border-2 border-amber-300 bg-white p-6 shadow-xl sm:p-8 lg:p-10 mb-10"
        >
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
              Stay Connected With Your Alma Mater
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Official Michaelian Alumni Registry
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Whether you passed out recently or decades ago, registering ensures you receive invitations to the
              annual Alumni Reunion, school foundation commemorations, and mentorship initiatives.
            </p>
          </div>

          {registered ? (
            <div className="mt-8 rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white text-2xl shadow-md mb-3">
                <i className="fas fa-check" />
              </div>
              <h3 className="text-lg font-black text-emerald-900">
                Alumni Registration Received Successfully!
              </h3>
              <p className="mt-1 text-xs text-emerald-700 max-w-lg mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. The Secretariat has recorded your enrollment
                in the Michaelian Alumni Registry. You will receive official reunion circulars and newsletters.
              </p>
              <button
                type="button"
                onClick={() => setRegistered(false)}
                className="mt-4 rounded-xl bg-emerald-700 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-emerald-800 cursor-pointer"
              >
                Register Another Alumnus
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Wanboklang Marbaniang"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Passing-Out Year *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.passoutYear}
                    onChange={(e) => setFormData({ ...formData, passoutYear: e.target.value })}
                    placeholder="e.g. 2016 or 2022"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Last Completed Class / Stream *
                  </label>
                  <select
                    value={formData.streamOrClass}
                    onChange={(e) => setFormData({ ...formData, streamOrClass: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  >
                    <option value="Class XII Science">Higher Secondary Science (Class XII)</option>
                    <option value="Class XII Arts">Higher Secondary Arts (Class XII)</option>
                    <option value="Class XII Commerce">Higher Secondary Commerce (Class XII)</option>
                    <option value="Class X SSLC">Secondary SSLC (Class X)</option>
                    <option value="Class VIII Upper Primary">Upper Primary Section (Class VIII)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Current Designation / Profession *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    placeholder="e.g. Assistant Professor / Software Engineer"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Organization / University
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. NEHU / Govt of Meghalaya"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Current City / State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.currentCity}
                    onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
                    placeholder="e.g. Shillong / New Delhi / Umsning"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@alumni.org"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Willingness to Mentor
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                  >
                    <option>Yes, available for career counselling webinars</option>
                    <option>Yes, available for school science/arts judge</option>
                    <option>Yes, interested in supporting student scholarships</option>
                    <option>Only keep me updated on alumni reunions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Message / Fondest Memory of St. Michael&apos;s Umsning
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a short memory, message for current students, or tribute to your teachers..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-slate-500">
                  <i className="fas fa-lock mr-1 text-[#0c4a8a]" /> Your information is confidential and used solely for school alumni communications.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#0c2d57] cursor-pointer"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                  <span>Submit Alumni Registration</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bottom Campus Summary */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
          <strong className="block text-sm font-extrabold text-[#0c4a8a]">
            {SCHOOL_INFO.name}, Umsning
          </strong>
          <span className="text-xs font-medium text-slate-600">
            Michaelian Alumni &amp; Community Association • Estd. {SCHOOL_INFO.established} • Motto: &ldquo;{SCHOOL_INFO.mottoLatin}&rdquo; &amp; &ldquo;{SCHOOL_INFO.mottoKhasi}&rdquo;
          </span>
        </div>
      </div>
    </section>
  );
};
