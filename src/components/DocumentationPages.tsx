import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO, FACULTY_MEMBERS, STREAMS } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface DocPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

/* ============================================================================
   1. LEADERSHIP & ADMINISTRATION MESSAGES PAGE (page: 'leadership')
   ============================================================================ */
export const LeadershipMessagesPage: React.FC<DocPageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const leadershipMessages = [
    {
      id: 'sec-vp-msg',
      roleBadge: 'Diocesan Governance & Pastoral Care',
      title: 'Secretary & Vice Principal’s Message',
      office: 'Office of the Secretary & Vice Principal • Catholic Mission of Umsning',
      image: SCHOOL_IMAGES.foundingCampus,
      quote:
        '“True education forms both the intellect and the conscience—preparing young men and women to walk in truth, discipline, and fraternal service.”',
      paragraphs: [
        'At St. Michael’s Higher Secondary School, Umsning, our administrative and pastoral mission is guided by the vision of the Catholic Mission of Umsning, Archdiocese of Shillong. For over six decades, our institution has stood as a beacon of hope, discipline, and academic upliftment for families across Ri Bhoi District.',
        'Working hand in hand with our devoted faculty, Reverend Sisters, and parents, we strive to maintain a safe, well-equipped, and spiritually enriching campus where every student from Nursery to Class XII is mentored with personal care and high moral standards.',
      ],
      highlights: [
        'Unified Diocesan administration & transparent governance',
        'Pastoral accompaniment, student discipline & character formation',
        'Continuous upgradation of science labs, smart classrooms & campus facilities',
      ],
    },
    {
      id: 'principal-msg',
      roleBadge: 'Head of Institution • MBOSE Code: 01961',
      title: 'Principal’s Message',
      office: 'Office of the Principal • St. Michael’s Higher Secondary School, Umsning',
      image: SCHOOL_IMAGES.principalPhoto,
      quote:
        '“Under our sacred motto Excelsior & Shaphrang, we inspire every Michaelian to aim ever higher in scholarship and step forward with courage.”',
      paragraphs: [
        'Welcome to St. Michael’s Higher Secondary School, Umsning. Since our humble foundation in 1961 by the great French Salesian missionary and mathematician Rev. Fr. Michael Balawan, SDB, our school has grown into a premier co-educational Higher Secondary institution offering Arts, Science, and Commerce streams under MBOSE.',
        'Our consistent distinction in the MBOSE SSLC and HSSLC Board Examinations—including State Top 20 Merit Ranks felicitated by the Hon’ble Chief Minister of Meghalaya—is a testament to the tireless dedication of our 68+ educators and the perseverance of our 2,000+ scholars. We invite parents and students to partner with us in the holistic development of every child.',
      ],
      highlights: [
        '100% commitment to MBOSE academic excellence & board readiness',
        'Holistic balance of science inquiry, choral arts & synchronized athletics',
        'Merit scholarships including the ₹20,000 St. Michael’s SSLC Award Endowment',
      ],
    },
    {
      id: 'hm-sec-msg',
      roleBadge: 'Upper Primary & Secondary Wing (Classes VI – X)',
      title: 'Headmistress’s Message – Secondary Section',
      office: 'Office of the Headmistress (Secondary Section) • MBOSE SSLC Wing',
      image: SCHOOL_IMAGES.stateCeremony,
      quote:
        '“The Secondary years forge habits of disciplined study, scientific curiosity, and personal responsibility that last a lifetime.”',
      paragraphs: [
        'The Upper Primary and Secondary Section (Classes VI to X) serves as the vital academic bridge where foundational skills mature into analytical thinking and MBOSE SSLC Board readiness. Our teachers accompany adolescents closely through structured Continuous and Comprehensive Evaluation (CCE), laboratory practicals, and remedial mentoring.',
        'Beyond classroom mastery in Mathematics, Science, Social Studies, English, and Khasi, we encourage every secondary student to participate actively in the four Archangel Houses, literary debates, environmental stewardship, and daily physical drill.',
      ],
      highlights: [
        'Focused MBOSE SSLC board preparation & regular diagnostic testing',
        'Hands-on Physics, Chemistry, Biology & Computer lab sessions',
        'Close parent–teacher communication via the daily School Diary',
      ],
    },
    {
      id: 'hm-lp-msg',
      roleBadge: 'Foundational & Lower Primary Wing (Nursery – Class V)',
      title: 'Headmistress’s Message – Lower Primary (LP) Section',
      office: 'Office of the Headmistress (LP Section) • Nursery, KG & Classes I – V',
      image: SCHOOL_IMAGES.schoolStaff,
      quote:
        '“Every child’s educational journey begins with wonder, warmth, joyful literacy, and gentle moral guidance.”',
      paragraphs: [
        'In the Lower Primary Section of St. Michael’s School, our foremost priority is to create a joyful, nurturing, and fear-free learning environment where young children love coming to school each morning. Through activity-based storytelling, phonics, Khasi and English reading, and playful numeracy, we build rock-solid foundational skills.',
        'We partner closely with parents to instill good manners, neatness, respect for elders, prayerfulness, and sharing—laying the cornerstone for lifelong learning.',
      ],
      highlights: [
        'Child-centric foundational literacy & numeracy in English and Khasi',
        'Dedicated morning care, storytelling, drawing & recitation activities',
        'Safe early dispersal at 2:00 PM with supervised campus care',
      ],
    },
  ];

  return (
    <section
      id="leadership-messages-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#d97706]">Leadership &amp; Administration Messages</span>
          </div>

          {onNavigatePage && (
            <button
              type="button"
              onClick={() => onNavigatePage('staff-directory')}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
            >
              <span>Staff Directory</span>
            </button>
          )}
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                Institutional Leadership • Catholic Mission of Umsning
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                Nursery to Class XII Governance
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Leadership &amp; Administration Messages
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Messages and pastoral reflections from the Secretary &amp; Vice Principal, the
              Principal, the Headmistress of the Secondary Section, and the Headmistress of the
              Lower Primary Section at <strong>{SCHOOL_INFO.name}, Umsning</strong>.
            </p>
          </div>
        </div>

        {/* Quick Anchor Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mr-2">
            Jump to Message:
          </span>
          {leadershipMessages.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-extrabold text-[#0c4a8a] transition-colors hover:bg-[#0c4a8a] hover:text-white"
            >
              {m.title}
            </a>
          ))}
        </div>

        {/* 4 Leadership Message Cards */}
        <div className="mt-8 space-y-8">
          {leadershipMessages.map((msg, idx) => (
            <article
              key={msg.id}
              id={msg.id}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
            >
              <div
                className={`h-1.5 w-full ${idx % 2 === 0 ? 'bg-[#0c4a8a]' : 'bg-[#d97706]'}`}
              />
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[300px_1fr] lg:items-start">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md">
                  <img
                    src={msg.image}
                    alt={msg.title}
                    className="h-72 w-full object-cover object-top"
                  />
                  <div className="bg-[#0c2d57] p-3.5 text-white">
                    <span className="block text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                      {msg.roleBadge}
                    </span>
                    <strong className="mt-0.5 block text-xs font-bold text-white">
                      {msg.title}
                    </strong>
                  </div>
                </div>

                <div>
                  <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                    {msg.office}
                  </span>
                  <h2 className="vision-serif-heading mt-2.5 text-2xl sm:text-3xl text-[#0c4a8a]">
                    <span className="vision-double-angle" aria-hidden="true">
                      &raquo;
                    </span>{' '}
                    {msg.title}
                  </h2>

                  <blockquote className="mt-3 rounded-xl border-l-4 border-[#d97706] bg-amber-50/70 p-4 text-xs sm:text-sm font-bold italic text-amber-950">
                    {msg.quote}
                  </blockquote>

                  <div className="mt-4 space-y-3 text-xs sm:text-sm font-medium leading-7 text-slate-700">
                    {msg.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {msg.highlights.map((hl) => (
                      <div
                        key={hl}
                        className="flex items-start gap-2 rounded-xl border border-slate-200 bg-[#f8fafc] p-3 text-xs font-semibold text-[#0c4a8a]"
                      >
                        <i
                          className="fas fa-check-circle text-[#d97706] mt-0.5 shrink-0"
                          aria-hidden="true"
                        ></i>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Official Leadership Desk • Catholic Mission of Umsning
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {onOpenAdmission && (
              <button
                type="button"
                onClick={onOpenAdmission}
                className="rounded-xl bg-[#d97706] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white cursor-pointer"
              >
                Admission Enquiry
              </button>
            )}
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57] cursor-pointer"
            >
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
              <span>Return to Main Website</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   2. STUDENT STATISTICS & SCHOOL STRENGTH PAGE (page: 'student-stats')
   ============================================================================ */
export const StudentStatisticsPage: React.FC<DocPageProps> = ({
  onBack,
  onNavigatePage,
}) => {
  const keyStrengthCards = [
    {
      label: 'Total Number of Students',
      value: '2,040',
      detail: 'Active Enrolment Across Nursery to Class XII (2026–27)',
      badge: 'Verified Strength',
    },
    {
      label: 'Boys & Girls Breakdown',
      value: '995 Boys • 1,045 Girls',
      detail: '48.8% Boys • 51.2% Girls (Co-Educational Balance)',
      badge: 'Gender Ratio',
    },
    {
      label: 'Total Teaching Staff',
      value: '68 Educators',
      detail: 'Post-Graduate (M.A. / M.Sc.), B.Ed. & Trained Faculty',
      badge: 'Teaching Strength',
    },
    {
      label: 'Total Non-Teaching Staff',
      value: '18 Staff Members',
      detail: 'Accountant, Librarian, Lab Assistants, Admin & Transit',
      badge: 'Support Staff',
    },
    {
      label: 'Classrooms, Sections & Classes',
      value: '48 Classrooms • 38 Sections',
      detail: '14 Grade Levels (Nursery, KG, Classes I to XII) + 4 Labs',
      badge: 'Infrastructure',
    },
    {
      label: 'Admitted in Current Year',
      value: '420 Students',
      detail: 'Total Roll Promotions & Fresh Enrolments in 2026–27',
      badge: '2026–27 Session',
    },
    {
      label: 'New Admissions (Fresh)',
      value: '285 Scholars',
      detail: 'Newly Admitted in Nursery, Class I, Class VI & Class XI',
      badge: 'Fresh Intake',
    },
    {
      label: 'Passed Out Last Year & Alumni',
      value: '362 Passed • 8,500+ Alumni',
      detail: 'SSLC & HSSLC Graduates (2025–26) • Global Michaelian Network',
      badge: 'Graduates & Alumni',
    },
  ];

  const wingWiseTable = [
    {
      wing: 'Foundational & Pre-Primary (Nursery & KG)',
      classes: 'Nursery, LKG, UKG',
      sections: '6 Sections',
      classrooms: '6 Dedicated Rooms',
      boys: 118,
      girls: 124,
      total: 242,
    },
    {
      wing: 'Lower Primary Section (Classes I – V)',
      classes: 'Classes I, II, III, IV & V',
      sections: '10 Sections (A & B)',
      classrooms: '12 Classrooms',
      boys: 310,
      girls: 325,
      total: 635,
    },
    {
      wing: 'Upper Primary Section (Classes VI – VIII)',
      classes: 'Classes VI, VII & VIII',
      sections: '9 Sections (A, B & C)',
      classrooms: '10 Classrooms',
      boys: 242,
      girls: 256,
      total: 498,
    },
    {
      wing: 'Secondary Section — MBOSE SSLC (Classes IX – X)',
      classes: 'Classes IX & X',
      sections: '6 Sections (A, B & C)',
      classrooms: '8 Classrooms',
      boys: 175,
      girls: 182,
      total: 357,
    },
    {
      wing: 'Higher Secondary — MBOSE HSSLC (Classes XI – XII)',
      classes: 'Arts, Science & Commerce',
      sections: '7 Stream Sections',
      classrooms: '12 Rooms + 4 Labs',
      boys: 150,
      girls: 158,
      total: 308,
    },
  ];

  return (
    <section
      id="student-statistics-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#d97706]">Student Statistics &amp; School Strength</span>
          </div>

          {onNavigatePage && (
            <button
              type="button"
              onClick={() => onNavigatePage('who-we-are')}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
            >
              <span>School Profile</span>
            </button>
          )}
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                UDISE+ Census &amp; Institutional Strength • 2026–27
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                UDISE+ Code: 17050200108 • MBOSE-01961
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Student Statistics &amp; School Strength
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Official demographic census, gender distribution, teaching and non-teaching staff
              strength, classroom infrastructure, current academic year admissions, pass-out
              statistics, and alumni community strength of{' '}
              <strong>{SCHOOL_INFO.name}, Umsning</strong>.
            </p>
          </div>
        </div>

        {/* 8 Core Statistical Cards from Checklist */}
        <div
          id="enrolment-gender"
          className="mt-8 scroll-mt-28 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {keyStrengthCards.map((item, idx) => (
            <div
              key={item.label}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-white p-5 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    #0{idx + 1}
                  </span>
                </div>
                <span className="mt-3 block text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>
                <strong className="mt-1 block text-xl sm:text-2xl font-black text-[#0c4a8a]">
                  {item.value}
                </strong>
                <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wing-Wise Enrolment & Classroom Allocation Table */}
        <div
          id="classrooms-sections"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                Wing-Wise Student &amp; Classroom Census
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Classrooms, Sections &amp; Wing-Wise Enrolment
              </h2>
            </div>
            <span className="text-xs font-bold text-[#d97706]">
              Total: 48 Classrooms • 38 Sections • 2,040 Scholars
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0c4a8a] text-white">
                  <th className="rounded-tl-xl px-4 py-3 font-extrabold uppercase">Academic Wing</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Classes</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Sections</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Classrooms</th>
                  <th className="px-4 py-3 font-extrabold uppercase text-center">Boys</th>
                  <th className="px-4 py-3 font-extrabold uppercase text-center">Girls</th>
                  <th className="rounded-tr-xl px-4 py-3 font-extrabold uppercase text-right">
                    Total Strength
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {wingWiseTable.map((row, idx) => (
                  <tr key={row.wing} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                    <td className="px-4 py-3.5 font-extrabold text-[#0c4a8a]">{row.wing}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">{row.classes}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">{row.sections}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">{row.classrooms}</td>
                    <td className="px-4 py-3.5 text-center font-bold text-slate-800">{row.boys}</td>
                    <td className="px-4 py-3.5 text-center font-bold text-slate-800">{row.girls}</td>
                    <td className="px-4 py-3.5 text-right font-black text-[#d97706]">
                      {row.total}
                    </td>
                  </tr>
                ))}
                <tr className="bg-amber-50 font-black text-[#0c2d57]">
                  <td className="px-4 py-3.5" colSpan={2}>
                    GRAND TOTAL (NURSERY TO CLASS XII)
                  </td>
                  <td className="px-4 py-3.5">38 Sections</td>
                  <td className="px-4 py-3.5">48 Rooms + 4 Labs</td>
                  <td className="px-4 py-3.5 text-center">995</td>
                  <td className="px-4 py-3.5 text-center">1,045</td>
                  <td className="px-4 py-3.5 text-right text-base text-[#0c4a8a]">2,040</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Admissions, Pass-Out & Alumni Summary */}
        <div
          id="admissions-passout-stats"
          className="mt-10 scroll-mt-28 grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
            <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[11px] font-extrabold uppercase text-emerald-800">
              Current Academic Year
            </span>
            <h3 className="mt-2.5 text-lg font-extrabold text-[#0c4a8a]">
              Admissions &amp; Intake (2026–27)
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              A total of <strong>420 students</strong> were enrolled/promoted into key transition
              grades this session, including <strong>285 fresh admissions</strong> across Nursery,
              Class I, Class VI, and Class XI (Science, Arts &amp; Commerce).
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
            <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-extrabold uppercase text-[#0c4a8a]">
              Graduating Batch
            </span>
            <h3 className="mt-2.5 text-lg font-extrabold text-[#0c4a8a]">
              Students Passed Out Last Year
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              In the previous academic session, <strong>362 board candidates</strong> (214 SSLC
              Class X and 148 HSSLC Class XII scholars) successfully graduated with State Top 20
              Merit honours and high first-division distinctions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[11px] font-extrabold uppercase text-amber-900">
              Since 1961
            </span>
            <h3 className="mt-2.5 text-lg font-extrabold text-[#0c4a8a]">
              Total Michaelian Alumni
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              Over 65 years of continuous educational service, St. Michael&apos;s Umsning has
              formed <strong>8,500+ alumni</strong> serving as civil servants, doctors, engineers,
              educators, clergy, and community leaders across Meghalaya and India.
            </p>
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              UDISE+: 17050200108 • Official School Strength &amp; Census Record
            </span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   3. TEACHING & NON-TEACHING STAFF DIRECTORY PAGE (page: 'staff-directory')
   ============================================================================ */
export const StaffDirectoryPage: React.FC<DocPageProps> = ({
  onBack,
  onNavigatePage,
}) => {
  const [deptFilter, setDeptFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const extendedTeachingStaff = [
    ...FACULTY_MEMBERS.filter((m) => m.department !== 'Non-Teaching & Lab Staff'),
    {
      id: 'fac-extra-1',
      name: 'Rev. Sister Headmistress (Secondary)',
      role: 'Headmistress – Secondary Section',
      department: 'Administration',
      qualification: 'M.A., B.Ed.',
      experience: '17 years secondary school leadership',
      image: SCHOOL_IMAGES.stateCeremony,
    },
    {
      id: 'fac-extra-2',
      name: 'Rev. Sister Headmistress (LP)',
      role: 'Headmistress – Lower Primary Section',
      department: 'Administration',
      qualification: 'B.A., D.El.Ed., Montessori Trained',
      experience: '15 years foundational & LP education',
      image: SCHOOL_IMAGES.schoolStaff,
    },
    {
      id: 'fac-extra-3',
      name: 'Sir R. Kharbihkhiew',
      role: 'Senior Lecturer in Accountancy & Commerce',
      department: 'Commerce & Economics',
      qualification: 'M.Com., B.Ed.',
      experience: '13 years HSSLC Commerce mentorship',
      image: SCHOOL_IMAGES.staff,
    },
    {
      id: 'fac-extra-4',
      name: 'Kong L. Shangpliang',
      role: 'Senior Lecturer in Biology & Botany',
      department: 'Physics & Chemistry',
      qualification: 'M.Sc. (Botany), B.Ed.',
      experience: '14 years NEET & HSSLC Biology practicals',
      image: SCHOOL_IMAGES.staff,
    },
    {
      id: 'fac-extra-5',
      name: 'Kong S. Nongrum',
      role: 'Senior Teacher — English Literature',
      department: 'Languages',
      qualification: 'M.A. (English), B.Ed.',
      experience: '12 years SSLC & HSSLC English',
      image: SCHOOL_IMAGES.staff,
    },
    {
      id: 'fac-extra-6',
      name: 'Sir W. Lyngkhoi',
      role: 'Computer Science & IT Lecturer',
      department: 'Mathematics & Statistics',
      qualification: 'MCA, B.Ed.',
      experience: '10 years HSSLC Computer Science',
      image: SCHOOL_IMAGES.staff,
    },
  ];

  const nonTeachingAndAdminStaff = [
    {
      name: 'Kong R. Lyngdoh',
      designation: 'Head Accountant & Fee Counter In-Charge',
      unit: 'Accounts & Scholarship Desk',
      qualification: 'B.Com (Hons.), Tally ERP & Institutional Finance',
      duty: 'Fee collection, MBOSE scholarship disbursement, financial audit & salary ledger.',
    },
    {
      name: 'Kong A. Kharkongor',
      designation: 'Chief Campus Librarian',
      unit: 'Central School Library',
      qualification: 'M.Lib.I.Sc. (Library & Information Science)',
      duty: 'Cataloguing 8,500+ volumes, student reading room supervision & question bank archive.',
    },
    {
      name: 'Sir D. Sohkhlet',
      designation: 'Senior Science Laboratory Assistant',
      unit: 'Physics, Chemistry & Biology Labs',
      qualification: 'B.Sc. (Chemistry & Bio), Lab Safety Certified',
      duty: 'Preparation of chemical reagents, microscope maintenance & HSSLC practical setup.',
    },
    {
      name: 'Sir K. Nongrum',
      designation: 'Computer Laboratory Assistant & UDISE+ Operator',
      unit: 'Digital Lab & Secretariat IT',
      qualification: 'BCA, Hardware & Network Administration',
      duty: 'Maintenance of 45+ computer terminals, UDISE+ portal & MBOSE online registration.',
    },
    {
      name: 'Sir M. Klein',
      designation: 'Head Office Superintendent & Secretariat Clerk',
      unit: 'Principal’s Secretariat',
      qualification: 'B.A., Diploma in Office Management',
      duty: 'Transfer Certificates (TC), board admit cards, student records & parent helpdesk.',
    },
    {
      name: 'Sir L. Lyngdoh & Transit Team (8 Staff)',
      designation: 'Transport Supervisor & NH-6 Bus Drivers / Attendants',
      unit: 'Campus Bus Fleet (Routes 1–4)',
      qualification: 'Commercial Heavy Vehicle Licensed & First-Aid Trained',
      duty: 'Safe daily morning pickup and 3:00 PM dispersal across Nongpoh, Umroi & Umsning.',
    },
  ];

  const departments = [
    'All',
    'Administration',
    'Physics & Chemistry',
    'Mathematics & Statistics',
    'Political Science & History',
    'Commerce & Economics',
    'Languages',
    'Social Sciences & Field Studies',
    'Athletics & Physical Training',
  ];

  const filteredTeachers = extendedTeachingStaff.filter((t) => {
    const matchDept = deptFilter === 'All' || t.department === deptFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchQ =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.role.toLowerCase().includes(q) ||
      t.department.toLowerCase().includes(q) ||
      t.qualification.toLowerCase().includes(q);
    return matchDept && matchQ;
  });

  return (
    <section
      id="staff-directory-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#d97706]">Teaching &amp; Non-Teaching Staff Directory</span>
          </div>

          {onNavigatePage && (
            <button
              type="button"
              onClick={() => onNavigatePage('leadership')}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
            >
              <span>Leadership Messages</span>
            </button>
          )}
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  68+ Teaching Faculty • 18+ Administrative &amp; Support Staff
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  Nursery to Class XII
                </span>
              </div>

              <h1
                className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
                style={{ color: '#ffffff' }}
              >
                Teaching &amp; Non-Teaching Staff
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Meet the Principal, Vice-Principal, Section Headmistresses, Senior Lecturers,
                Subject Teachers, Accountant, Librarian, Laboratory Assistants, and Administrative
                Staff of <strong>{SCHOOL_INFO.name}, Umsning</strong>.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-amber-400/70 bg-slate-900 shadow-xl">
              <img
                src={SCHOOL_IMAGES.staff}
                alt="St. Michael's Faculty and Staff Fraternity"
                className="h-56 w-full object-cover"
              />
              <div className="bg-slate-950/90 px-4 py-2.5 text-xs font-bold text-amber-300">
                St. Michael&apos;s Faculty &amp; Administrative Fraternity • Umsning Campus
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Principal, Vice-Principal & Headmistresses */}
        <div
          id="leadership-staff"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
            Institutional Heads
          </span>
          <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
            <span className="vision-double-angle" aria-hidden="true">
              &raquo;
            </span>{' '}
            Principal, Vice-Principal &amp; Headmistress Details
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Rev. Fr. Principal',
                role: 'Principal & Head of Institution',
                wing: 'Overall Nursery – Class XII',
                qual: 'M.A., M.Ed., Phil. Licentiate',
                img: SCHOOL_IMAGES.principalPhoto,
              },
              {
                name: 'Secretary & Vice-Principal',
                role: 'Secretary & Vice-Principal',
                wing: 'Administration & Pastoral Care',
                qual: 'M.Sc., B.Ed., Diocesan Governance',
                img: SCHOOL_IMAGES.foundingCampus,
              },
              {
                name: 'Headmistress (Secondary)',
                role: 'Headmistress – Secondary Section',
                wing: 'Classes VI to X (MBOSE SSLC)',
                qual: 'M.A., B.Ed. (17+ Yrs Exp.)',
                img: SCHOOL_IMAGES.stateCeremony,
              },
              {
                name: 'Headmistress (LP Section)',
                role: 'Headmistress – Lower Primary',
                wing: 'Nursery, KG & Classes I – V',
                qual: 'B.A., D.El.Ed., Child Pedagogy',
                img: SCHOOL_IMAGES.schoolStaff,
              },
            ].map((leader) => (
              <div
                key={leader.role}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm"
              >
                <img
                  src={leader.img}
                  alt={leader.role}
                  className="h-56 w-full object-cover object-top"
                />
                <div className="p-4">
                  <span className="inline-block rounded-md bg-[#0c4a8a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-white">
                    {leader.wing}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-[#0c4a8a]">{leader.role}</h3>
                  <p className="mt-1 text-xs font-bold text-[#d97706]">{leader.qual}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Teaching Staff List with Designation, Subject Specialization & Photo */}
        <div
          id="teaching-staff"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end">
            <div>
              <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                68+ Qualified Educators
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Teaching Staff Directory &amp; Subject Specialization
              </h2>
            </div>

            <div className="w-full lg:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search teacher or subject..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 focus:border-[#0c4a8a] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDeptFilter(d)}
                className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                  deptFilter === d
                    ? 'bg-[#0c4a8a] text-white shadow-xs'
                    : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-[#f8fafc] p-5 shadow-xs"
              >
                <img
                  src={teacher.image || SCHOOL_IMAGES.staff}
                  alt={teacher.name}
                  className="h-16 w-16 shrink-0 rounded-2xl object-cover border-2 border-[#0c4a8a]"
                />
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold uppercase text-amber-900">
                    {teacher.department}
                  </span>
                  <h3 className="mt-1.5 text-base font-extrabold text-[#0c4a8a]">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-bold text-[#d97706]">{teacher.role}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    Qualification: <strong>{teacher.qualification}</strong>
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                    Experience: {teacher.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Non-Teaching, Administrative, Accountant, Librarian & Lab Assistant Details */}
        <div
          id="non-teaching-staff"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div id="support-lab-staff" className="scroll-mt-28">
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
              Secretariat, Library, Laboratories &amp; Campus Operations
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Accountant, Librarian, Lab Assistants &amp; Non-Teaching Staff
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {nonTeachingAndAdminStaff.map((staff) => (
              <div
                key={staff.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 border-l-4 border-l-[#d97706] bg-[#f8fafc] p-5 shadow-xs"
              >
                <div>
                  <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#0c4a8a]">
                    {staff.unit}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-[#0c4a8a]">{staff.name}</h3>
                  <p className="text-xs font-bold text-[#d97706]">{staff.designation}</p>
                  <p className="mt-1.5 text-xs font-semibold text-slate-700">
                    Credential: {staff.qualification}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                    {staff.duty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Official Staff &amp; Faculty Directory • 68+ Teaching &amp; 18+ Support Staff
            </span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   4. ACADEMIC INFORMATION, SYLLABUS & EXAMINATION PATTERN PAGE (page: 'academic-syllabus')
   ============================================================================ */
export const AcademicSyllabusPage: React.FC<DocPageProps> = ({
  onBack,
  onNavigatePage,
}) => {
  const [selectedWing, setSelectedWing] = useState<'LP' | 'UP' | 'SEC' | 'HS'>('SEC');

  const syllabusData = {
    LP: {
      title: 'Foundational & Lower Primary Wing (Nursery, KG & Classes I – V)',
      board: 'Foundational Literacy & Numeracy (FLN) • MBOSE Aligned',
      subjects: [
        {
          subject: 'English Language & Phonics',
          syllabus: 'Alphabet mastery, phonics reading, cursive handwriting, vocabulary, storytelling, and elementary grammar.',
        },
        {
          subject: 'Khasi (MIL) / Alternative English',
          syllabus: 'Reading and writing in Khasi (Dak Khasi), traditional moral stories, folk rhymes, and sentence formation.',
        },
        {
          subject: 'Elementary Mathematics',
          syllabus: 'Number sense, four fundamental operations, multiplication tables, shapes, time, money, and mental arithmetic.',
        },
        {
          subject: 'Environmental Studies (EVS) & General Science',
          syllabus: 'My family, plants and animals of Meghalaya, personal hygiene, clean water, seasons, and nature observation.',
        },
        {
          subject: 'Moral Science, Catechism & Value Education',
          syllabus: 'Daily prayer, respect for parents and elders, truthfulness, kindness, and golden habits.',
        },
      ],
    },
    UP: {
      title: 'Upper Primary Wing (Classes VI, VII & VIII)',
      board: 'Meghalaya Board of School Education (MBOSE) — Upper Primary Curriculum',
      subjects: [
        {
          subject: 'English I (Literature) & English II (Grammar & Composition)',
          syllabus: 'Prose, poetry, comprehension, formal/informal letter writing, essay composition, and applied grammar.',
        },
        {
          subject: 'Khasi (MIL) & Hindi (Third Language)',
          syllabus: 'Khasi prose & poetry, grammar, translation, and basic conversational & written Hindi.',
        },
        {
          subject: 'Mathematics',
          syllabus: 'Integers, fractions, algebra, ratio & proportion, geometry, mensuration, and data handling.',
        },
        {
          subject: 'Science & Technology',
          syllabus: 'Foundations of Physics (motion, light, electricity), Chemistry (matter, acids/bases), and Biology (cells, plant/human systems).',
        },
        {
          subject: 'Social Science & Computer Applications',
          syllabus: 'Indian & Meghalaya History, Civics, World Geography, and hands-on Digital Literacy / MS Office / Coding basics.',
        },
      ],
    },
    SEC: {
      title: 'Secondary Section — MBOSE SSLC (Classes IX & X)',
      board: 'Meghalaya Board of School Education (MBOSE) — SSLC Board Syllabus',
      subjects: [
        {
          subject: 'English (Compulsory Core)',
          syllabus: 'MBOSE prescribed prose, poetry, supplementary reader, unseen comprehension, grammar, and formal writing (100 Marks: 80 Written + 20 Internal).',
        },
        {
          subject: 'Mathematics',
          syllabus: 'Number systems, algebra, trigonometry, coordinate geometry, mensuration, statistics & probability (80 Written + 20 Internal).',
        },
        {
          subject: 'Science & Technology (Theory + Practical)',
          syllabus: 'Chemical substances, world of living, natural phenomena (light/electricity), and laboratory practical record & viva.',
        },
        {
          subject: 'Social Science',
          syllabus: 'India and the Contemporary World, Contemporary India (Geography), Democratic Politics (Civics), Economics & Disaster Management.',
        },
        {
          subject: 'Khasi (MIL) / Alternative English & Health / Computer Education',
          syllabus: 'MBOSE Khasi literature & grammar, and sixth subject elective (Computer Science / Health & Physical Education).',
        },
      ],
    },
    HS: {
      title: 'Higher Secondary Section — MBOSE HSSLC (Classes XI & XII)',
      board: 'MBOSE HSSLC Curriculum — Science, Arts & Commerce Streams',
      subjects: [
        {
          subject: 'Science Stream (PCM / PCB / Computer Science)',
          syllabus: 'English, MIL Khasi / Alt. English, Physics (Theory + Lab), Chemistry (Theory + Lab), Biology (Botany & Zoology + Lab), Mathematics, Computer Science.',
        },
        {
          subject: 'Arts / Humanities Stream',
          syllabus: 'English, MIL Khasi / Alt. English, Political Science, History, Economics, Sociology, Geography (Theory + Regional Fieldwork Practical), Education.',
        },
        {
          subject: 'Commerce Stream',
          syllabus: 'English, MIL Khasi / Alt. English, Accountancy, Business Studies, Economics, Entrepreneurship / Mathematics / Computer Applications.',
        },
      ],
    },
  };

  const examSchedules = [
    {
      exam: 'First Unit Test / Periodic Assessment I',
      window: 'First Week of May (May 04 – May 12, 2026)',
      classes: 'Classes I to XII',
      weightage: '20 / 25 Marks (CCE Internal Component)',
      details: 'Pen-and-paper unit test covering April–May syllabus chapters and class assignments.',
    },
    {
      exam: 'Half-Yearly / First Term Examination',
      window: 'First–Second Week of July (July 06 – July 16, 2026)',
      classes: 'Nursery to Class XII',
      weightage: '80 / 100 Marks Written + Practicals',
      details: 'Comprehensive mid-year terminal examination followed by Parent–Teacher Report Card Day.',
    },
    {
      exam: 'Second Unit Test / Periodic Assessment II',
      window: 'Second Week of August (August 10 – August 14, 2026)',
      classes: 'Classes I to XII',
      weightage: '20 / 25 Marks (CCE Internal Component)',
      details: 'Second continuous evaluation cycle testing post-midterm syllabus and lab records.',
    },
    {
      exam: 'Pre-Selection (X & XII) & Pre-Promotion (IX & XI)',
      window: 'Mid-September (September 14 – September 24, 2026)',
      classes: 'Classes IX, X, XI & XII',
      weightage: 'Full MBOSE Board Pattern (80/70 Theory + 20/30 Practical)',
      details: 'Mandatory qualifying preparatory examination modeled strictly on MBOSE SSLC & HSSLC blueprints.',
    },
    {
      exam: 'Selection Exams (X & XII) & Annual Promotion Exams',
      window: 'Late November – Early December (Nov 23 – Dec 05, 2026)',
      classes: 'Nursery to Class XII',
      weightage: '100% Final Annual / Board Selection Qualifying',
      details: 'Final annual promotion exams for Nursery–IX & XI, and final MBOSE Selection clearance for X & XII.',
    },
    {
      exam: 'Science, Computer & Geography Practical Examinations',
      window: 'June 22–26 (Mid-Term) & November 16–21 (Annual/Selection)',
      classes: 'Classes VIII to XII',
      weightage: '20 Marks (SSLC) / 30 Marks (HSSLC Labs)',
      details: 'Hands-on laboratory experiments, certified practical record book evaluation, and oral viva voce.',
    },
  ];

  return (
    <section
      id="academic-syllabus-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#0c4a8a]">Academics</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Academic Information, Syllabus &amp; Examinations</span>
          </div>

          {onNavigatePage && (
            <button
              type="button"
              onClick={() => onNavigatePage('academic-calendar')}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
            >
              <span>12-Month Calendar</span>
            </button>
          )}
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                MBOSE Curriculum • Nursery to Class XII
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                Arts, Science &amp; Commerce Streams
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Academic Information, Syllabus &amp; Exam Pattern
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Comprehensive guide to classes and subjects offered, academic session structure,
              class-wise and subject-wise MBOSE syllabus, Continuous &amp; Comprehensive Evaluation
              (CCE) assessment rules, and examination schedules at{' '}
              <strong>{SCHOOL_INFO.name}, Umsning</strong>.
            </p>
          </div>
        </div>

        {/* Section 1: Classes & Subjects Offered + Academic Session Details */}
        <div
          id="classes-subjects"
          className="mt-10 scroll-mt-28 grid gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
            <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
              Curriculum Structure
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Classes &amp; Higher Secondary Streams Offered
            </h2>

            <div className="mt-5 space-y-4">
              {STREAMS.map((stream) => (
                <div
                  key={stream.name}
                  className="rounded-xl border border-slate-200 border-l-4 border-l-[#0c4a8a] bg-[#f8fafc] p-5"
                >
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0c4a8a]">
                    {stream.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-600">{stream.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {stream.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-xs font-bold text-[#0c2d57]"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="session-details"
            className="lg:col-span-4 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                Session Overview
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Academic Session Details
              </h2>

              <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3.5">
                  <strong className="block text-[#0c4a8a]">Academic Year Duration</strong>
                  <span className="text-slate-600">
                    February 2026 to December 2026 (MBOSE Annual Session)
                  </span>
                </div>
                <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3.5">
                  <strong className="block text-[#0c4a8a]">Medium of Instruction</strong>
                  <span className="text-slate-600">
                    English across all classes (with Khasi MIL &amp; Hindi language tracks)
                  </span>
                </div>
                <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3.5">
                  <strong className="block text-[#0c4a8a]">Instructional Hours</strong>
                  <span className="text-slate-600">
                    Mon – Fri: 8:45 AM – 3:00 PM (Primary dispersal at 2:00 PM)
                  </span>
                </div>
                <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3.5">
                  <strong className="block text-[#0c4a8a]">Minimum Attendance Rule</strong>
                  <span className="text-slate-600">
                    Minimum 85% attendance required to appear in MBOSE &amp; Annual Promotion Exams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Interactive Class-Wise & Subject-Wise Syllabus */}
        <div
          id="class-syllabus"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end">
            <div>
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                MBOSE Prescribed Syllabus
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Class-Wise &amp; Subject-Wise Syllabus
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'LP', label: 'Lower Primary (Nursery – V)' },
                  { id: 'UP', label: 'Upper Primary (VI – VIII)' },
                  { id: 'SEC', label: 'Secondary SSLC (IX – X)' },
                  { id: 'HS', label: 'Higher Secondary (XI – XII)' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedWing(tab.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                    selectedWing === tab.id
                      ? 'bg-[#0c4a8a] text-white shadow-sm'
                      : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-4 rounded-xl bg-[#0c2d57] px-5 py-3.5 text-white flex flex-wrap items-center justify-between gap-2">
              <strong className="text-sm sm:text-base">{syllabusData[selectedWing].title}</strong>
              <span className="text-xs font-bold text-amber-300">
                {syllabusData[selectedWing].board}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {syllabusData[selectedWing].subjects.map((item) => (
                <div
                  key={item.subject}
                  className="rounded-xl border border-slate-200 border-t-4 border-t-[#d97706] bg-[#f8fafc] p-5"
                >
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0c4a8a]">
                    {item.subject}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                    {item.syllabus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Examination Pattern, Assessment Details & Schedules */}
        <div
          id="exam-pattern"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div id="exam-schedules" className="scroll-mt-28">
            <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
              CCE &amp; Terminal Evaluation
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Examination Pattern, Unit Test, Half-Yearly, Annual &amp; Practical Schedules
            </h2>
          </div>

          <div id="practical-schedules" className="mt-6 scroll-mt-28 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {examSchedules.map((ex) => (
              <div
                key={ex.exam}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 border-l-4 border-l-[#0c4a8a] bg-[#f8fafc] p-5 shadow-xs"
              >
                <div>
                  <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-amber-900">
                    {ex.classes}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-[#0c4a8a]">{ex.exam}</h3>
                  <p className="mt-1 text-xs font-bold text-[#d97706]">{ex.window}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    Pattern: {ex.weightage}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                    {ex.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              MBOSE Affiliated Curriculum &amp; Examination Desk • Code: {SCHOOL_INFO.schoolCode}
            </span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   5. RESULTS & ACADEMIC ACHIEVEMENTS PAGE (page: 'results-achievements')
   ============================================================================ */
export const ResultsAchievementsPage: React.FC<DocPageProps> = ({
  onBack,
  onNavigatePage,
}) => {
  const boardResultsTable = [
    {
      year: '2025–26',
      exam: 'MBOSE SSLC (Class X)',
      appeared: 214,
      passed: 214,
      passPct: '100%',
      firstDiv: 168,
      distinctions: 'State Top 20 Merit Rank + 142 Letter Marks',
    },
    {
      year: '2025–26',
      exam: 'MBOSE HSSLC Arts (Class XII)',
      appeared: 86,
      passed: 85,
      passPct: '98.8%',
      firstDiv: 64,
      distinctions: 'District Topper in Education, Khasi & Pol. Science',
    },
    {
      year: '2025–26',
      exam: 'MBOSE HSSLC Science (Class XII)',
      appeared: 38,
      passed: 38,
      passPct: '100%',
      firstDiv: 34,
      distinctions: '100% First Division in Physics & Biology Practicals',
    },
    {
      year: '2025–26',
      exam: 'MBOSE HSSLC Commerce (Class XII)',
      appeared: 24,
      passed: 24,
      passPct: '100%',
      firstDiv: 21,
      distinctions: '96% Highest Score in Accountancy & Business Studies',
    },
    {
      year: '2024–25',
      exam: 'MBOSE SSLC (Class X)',
      appeared: 206,
      passed: 205,
      passPct: '99.5%',
      firstDiv: 154,
      distinctions: '128 Subject Distinctions across Maths & Science',
    },
    {
      year: '2024–25',
      exam: 'MBOSE HSSLC Combined (Class XII)',
      appeared: 142,
      passed: 140,
      passPct: '98.6%',
      firstDiv: 109,
      distinctions: '94% Highest Aggregate in Ri Bhoi District',
    },
  ];

  const toppersAndAwards = [
    {
      title: 'MBOSE SSLC State Top 20 Merit Ranker (2026)',
      award: 'Felicitated by Hon’ble Chief Minister Shri Conrad K. Sangma + ₹20,000 Cash Award',
      score: '94.8% Aggregate (Letter Marks in All 6 Subjects)',
      image: SCHOOL_IMAGES.awardPresentation,
      detail:
        'Honored at the State Felicitation Ceremony in Shillong by the Chief Minister and Education Minister, and awarded the ₹20,000 St. Michael’s SSLC Award Body Endowment.',
    },
    {
      title: 'St. Michael’s ₹20,000 SSLC Merit Scholarship Recipient',
      award: '100% Higher Secondary Tuition Waiver + ₹20,000 Cheque',
      score: 'School Topper — Class X SSLC',
      image: SCHOOL_IMAGES.studentAwards,
      detail:
        'Presented on campus by the Reverend Sisters, Secretary, and Principal in recognition of state-level academic excellence.',
    },
    {
      title: 'HSSLC Senior Secondary Stream Toppers (Science, Arts & Commerce)',
      award: 'Principal’s Gold Medal & Archangel Merit Shield',
      score: 'Science: 92.4% • Arts: 91.2% • Commerce: 93.0%',
      image: SCHOOL_IMAGES.certificateWinners,
      detail:
        'Awarded to the highest-scoring Class XII candidates across Physics, Chemistry, Biology, Accountancy, and Humanities.',
    },
  ];

  const coCurricularAchievements = [
    {
      category: 'Sports & Athletics',
      title: 'Ri Bhoi District Inter-School Subroto Cup & Track Championship',
      honour: 'Gold & Silver Medals in 100m, 4x100m Relay & Under-17 Football',
      year: '2025–26',
    },
    {
      category: 'Choral & Cultural Arts',
      title: 'Archdiocesan & Regional Youth Choral Competition',
      honour: 'First Prize in Four-Part Sacred Polyphony & Traditional Khasi Folk Dance',
      year: '2025–26',
    },
    {
      category: 'Science & Olympiad',
      title: 'District Science Exhibition & Mathematics Olympiad',
      honour: 'Best Working Model Award (Renewable Energy & Watershed Conservation)',
      year: '2025–26',
    },
    {
      category: 'Literary & Debate',
      title: 'Inter-School Debate, Extempore & Anti-Tobacco Poster Rally',
      honour: 'Overall Literary Shield & District Health Officer Commendation',
      year: '2025–26',
    },
  ];

  return (
    <section
      id="results-achievements-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#0c4a8a]">Academics</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Results &amp; Academic Achievements</span>
          </div>

          {onNavigatePage && (
            <button
              type="button"
              onClick={() => onNavigatePage('scholarships')}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
            >
              <span>Scholarships &amp; Welfare</span>
            </button>
          )}
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                MBOSE SSLC (Class 10) &amp; HSSLC (Class 12) Board Honours
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                State Top 20 Merit Institution
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Results &amp; Academic Achievements
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Verified Class 10 (SSLC) and Class 12 (HSSLC) board examination results, overall pass
              percentages, appeared and passed statistics, highest marks and school toppers,
              scholarship recipients, and sports, cultural, and Olympiad achievements at{' '}
              <strong>{SCHOOL_INFO.name}, Umsning</strong>.
            </p>
          </div>
        </div>

        {/* Section 1: Class 10 & Class 12 Board Results Table */}
        <div
          id="board-results"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div id="pass-percentage" className="scroll-mt-28 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                MBOSE Board Performance Ledger
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Class 10 (SSLC) &amp; Class 12 (HSSLC) Board Examination Results
              </h2>
            </div>
            <span className="rounded-xl bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs font-extrabold text-emerald-800">
              Overall Pass Rate: 99.4% – 100%
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0c4a8a] text-white">
                  <th className="rounded-tl-xl px-4 py-3 font-extrabold uppercase">Session</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Board Examination</th>
                  <th className="px-4 py-3 font-extrabold uppercase text-center">Appeared</th>
                  <th className="px-4 py-3 font-extrabold uppercase text-center">Passed</th>
                  <th className="px-4 py-3 font-extrabold uppercase text-center">Pass %</th>
                  <th className="px-4 py-3 font-extrabold uppercase text-center">1st Division</th>
                  <th className="rounded-tr-xl px-4 py-3 font-extrabold uppercase">
                    Key Highlights &amp; Distinctions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {boardResultsTable.map((row, i) => (
                  <tr key={`${row.year}-${row.exam}`} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                    <td className="px-4 py-3.5 font-extrabold text-[#d97706]">{row.year}</td>
                    <td className="px-4 py-3.5 font-extrabold text-[#0c4a8a]">{row.exam}</td>
                    <td className="px-4 py-3.5 text-center font-bold text-slate-700">{row.appeared}</td>
                    <td className="px-4 py-3.5 text-center font-bold text-slate-700">{row.passed}</td>
                    <td className="px-4 py-3.5 text-center">
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-black text-emerald-900">
                        {row.passPct}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-center font-extrabold text-[#0c4a8a]">
                      {row.firstDiv}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">{row.distinctions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Highest Marks, School Toppers & Scholarship Awards */}
        <div
          id="school-toppers"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div id="scholarship-awards" className="scroll-mt-28">
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
              State Merit &amp; Endowment Honours
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Highest Marks, School Toppers &amp; Scholarship Recipients
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {toppersAndAwards.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-5">
                    <span className="inline-block rounded-md bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-white">
                      {item.score}
                    </span>
                    <h3 className="mt-2 text-base font-extrabold text-[#0c4a8a]">{item.title}</h3>
                    <p className="mt-1 text-xs font-bold text-[#d97706]">{item.award}</p>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Sports, Cultural, Olympiad & Competition Achievements */}
        <div
          id="sports-cultural-achievements"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
            Beyond the Classroom
          </span>
          <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
            <span className="vision-double-angle" aria-hidden="true">
              &raquo;
            </span>{' '}
            Sports, Cultural, Olympiad &amp; Competition Achievements
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {coCurricularAchievements.map((ach) => (
              <div
                key={ach.title}
                className="rounded-2xl border border-slate-200 border-l-4 border-l-[#d97706] bg-[#f8fafc] p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[10px] font-extrabold uppercase text-[#0c4a8a]">
                    {ach.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{ach.year}</span>
                </div>
                <h3 className="mt-2 text-base font-extrabold text-[#0c4a8a]">{ach.title}</h3>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#d97706]">{ach.honour}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Official MBOSE Board Results &amp; Honours Archive • Estd. {SCHOOL_INFO.established}
            </span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </section>
  );
};
