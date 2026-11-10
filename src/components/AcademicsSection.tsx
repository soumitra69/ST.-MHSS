import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { STREAMS } from '../data/schoolData';

interface AcademicsSectionProps {
  onOpenAdmission: () => void;
}

type HandbookTab = 'uniforms' | 'exams-tc' | 'conduct' | 'parents' | 'syllabus-schedule';

const academicStages = [
  {
    number: '01',
    name: 'Early Years Foundation',
    classes: 'Nursery & Kindergarten (KG)',
    icon: 'fas fa-child',
    detail:
      'Activity-based foundational literacy, numeracy, phonics, and joyful socialization in a warm, caring environment (8:45 AM – 2:00 PM).',
    image: SCHOOL_IMAGES.campus,
    imageAlt: 'St. Michael’s school campus in Umsning',
    badgeClass: 'bg-[#0c4a8a] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#0c4a8a]',
    tagColor: 'text-[#0c4a8a] bg-blue-50 border-blue-200',
  },
  {
    number: '02',
    name: 'Lower & Upper Primary',
    classes: 'Classes I – V (Primary Section)',
    icon: 'fas fa-book-reader',
    detail:
      'English medium instruction, mathematics, environmental studies, weekly unit tests, and two annual Term Examinations (8:45 AM – 2:00 PM).',
    image: SCHOOL_IMAGES.houseAssembly,
    imageAlt: 'Students gathered for 4-House assembly at St. Michael’s',
    badgeClass: 'bg-[#d97706] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#d97706]',
    tagColor: 'text-amber-900 bg-amber-50 border-amber-200',
  },
  {
    number: '03',
    name: 'Secondary Section',
    classes: 'Classes VI – X (MBOSE SSLC)',
    icon: 'fas fa-flask',
    detail:
      'English medium instruction with Half-Yearly/Pre-Selection and Selection/Promotion exams, laboratory practicals, and SSLC board mentoring (8:45 AM – 3:00 PM).',
    image: SCHOOL_IMAGES.geographyFieldwork,
    imageAlt: 'Students taking part in an academic field activity',
    badgeClass: 'bg-[#0c4a8a] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#0c4a8a]',
    tagColor: 'text-[#0c4a8a] bg-blue-50 border-blue-200',
  },
  {
    number: '04',
    name: 'Higher Secondary (HSSLC)',
    classes: 'Classes XI – XII (Science, Arts & Commerce)',
    icon: 'fas fa-user-graduate',
    detail:
      'Pre-Promotion & Promotion exams (Class XI) and Pre-Selection & Selection exams (Class XII) with dedicated labs and fieldwork (8:45 AM – 3:00 PM).',
    image: SCHOOL_IMAGES.graduatingBatch,
    imageAlt: 'Senior secondary scholars and faculty at St. Michael’s',
    badgeClass: 'bg-[#0c2d57] text-white',
    cardBorder: 'border-slate-200 bg-white',
    topBar: 'bg-[#0c2d57]',
    tagColor: 'text-[#0c4a8a] bg-blue-50 border-blue-200',
  },
];

const uniformSpecifications = [
  {
    section: 'Higher Secondary Section (Classes XI & XII)',
    schedule: 'Regular Uniform: Mon, Tue & Thu • Track-Suit: Wed & Fri',
    accent: 'border-t-4 border-t-[#0c4a8a]',
    badge: 'Classes XI & XII',
    boys: [
      'Off-white shirt with long sleeves',
      'Greenish-blue neck tie with three off-white stripes',
      'Greenish-blue pants (straight cut, Gentleman’s style) & school belt',
      'Lace black school shoes with white socks',
      'Black pull-over sweater, Blazer & black school bag',
    ],
    girls: [
      'Off-white salwar with fitting and greenish-blue stripes',
      'Greenish-blue kameez (top) with black high neck, decent "V" shape, knee length & elbow sleeves',
      'Off-white chunni & off-white hair ribbon',
      'Buttoned plain black "V" shape sweater & Blazer',
      'Black flat buckle shoes & black school bag',
    ],
    trackSuit:
      'Wednesday & Friday: Grey colour track-suit with two white stripes along with team T-Shirt and white shoes/canvas.',
  },
  {
    section: 'Secondary Section (Classes VI – X)',
    schedule: 'Regular Uniform: Mon, Tue & Thu • Track-Suit: Wed & Fri',
    accent: 'border-t-4 border-t-[#d97706]',
    badge: 'Classes VI – X',
    boys: [
      'Off-white short-sleeved shirt with greenish-blue stripes & greenish-blue collar',
      'Greenish-blue neck tie with reddish-off-white stripes',
      'Greenish-blue pants, straight cut (Gentleman’s Style) & school belt',
      'Black school shoes with white socks & black school bag',
      'Greenish pull-over sweater with two white stripes around "V" neck collar (Blazers available)',
    ],
    girls: [
      'Off-white short-sleeved shirt with greenish-blue stripes & greenish-blue collar',
      'Greenish-blue gym (pinafore) & greenish-blue tie with reddish-off-white stripes',
      'Buttoned greenish-blue "V" shaped sweater or Blazer with two white stripes around V-neck',
      'Black flat-buckled shoes with white socks with two red stripes',
      'Red ribbon (for short/shoulder hair and plaited long hair) & black school bag',
    ],
    trackSuit:
      'Wednesday & Friday: Track-suits with team T-Shirt (and team colour ribbons for girls) with white shoes/canvas.',
  },
  {
    section: 'LP & UP English School (Nursery, KG & Classes I – IV)',
    schedule: 'Regular Uniform & Navy Blue Track Pants/Jacket',
    accent: 'border-t-4 border-t-emerald-600',
    badge: 'Nursery – Class IV',
    boys: [
      'Nursery & KG Boys: Red-checked half shirt, bow tie, grey pants, maroon socks, school sweater',
      'Class I – IV Boys: Red-checked full-sleeved shirt, grey pants, tie, maroon socks (white stripe), school sweater',
    ],
    girls: [
      'Nursery & KG Girls: Red tunic, white half shirt, bow tie, maroon socks (white stripe), school sweater',
      'Class I – IV Girls: Red-checked full-sleeved shirt, pleated skirt (grey colour), tie, maroon socks (white stripe), school sweater',
    ],
    trackSuit:
      'Track Suit (Nursery – Class IV): Navy blue track pants & jacket with white T-shirt (Nursery/KG) or House/Team T-shirt (Classes I – IV).',
  },
];

const examAndAdmissionRules = [
  {
    title: 'Admission & Transfer Certificate (TC) Rules',
    icon: 'fas fa-file-signature',
    badge: 'Admission & Withdrawal',
    points: [
      'A pupil who has attended a recognised school can be admitted only on the strength of a Transfer Certificate (TC) from the school last attended, and must present himself/herself to the Principal before admission.',
      'Only a parent/guardian can apply for a Transfer Certificate (TC) in writing along with the necessary fees.',
      'No pupil whose school fees are in arrears shall be given a Transfer Certificate (TC).',
      'A pupil who has repeated a class for more than two years will be asked to take a TC.',
    ],
  },
  {
    title: 'Examinations, Promotion & Merit Ranks',
    icon: 'fas fa-award',
    badge: 'Academic Evaluation',
    points: [
      'Classes XI & XII: Two major exams per year — Pre-Promotion & Promotion Exams (Class XI) and Pre-Selection & Selection Exams (Class XII) + regular class tests as per MBOSE routine.',
      'Classes VI – X: Two major exams per year — Half-Yearly/Pre-Selection and Selection/Promotion + regular class tests.',
      'Primary Section: Two Term Examinations in a year besides weekly/class/unit tests.',
      'Absence from any examination without sufficient reason is treated as failure; illness requires a valid Medical Certificate. Using unfair means results in repeating the same class.',
      'Promotion is decided by the Principal & Teachers at the scrutiny meeting (final). Ranks are given only to those who pass all subjects (Top 20 in Higher Secondary).',
      'Board Fees: Classes IX & X and Classes XI & XII are charged extra as required by MBOSE.',
    ],
  },
];

const conductAndGroomingRules = [
  {
    title: 'Daily Timings, Attendance & Campus Discipline',
    icon: 'fas fa-clock',
    points: [
      'School hours are 8:45 a.m. to 3:00 p.m. (Monday to Friday) for Secondary & Higher Secondary, and 8:45 a.m. to 2:00 p.m. for Primary Section.',
      'Morning assembly begins with prayer at 8:45 a.m. without fail; the day concludes with prayer at 3:00 p.m.',
      'Students are required to speak in English on the school campus at all times.',
      'Every pupil must bring the School Diary and Student ID daily. All absences must be entered by parents in the Absence/Leave Record and condoned by the Principal.',
      'Pupils must rejoin classes on the reopening day after holidays; breach of this rule carries a heavy fine and possible loss of seat.',
      'Mobile phones, objectionable books/periodicals/comics, smoking, drugs, and chewing betel-nuts are strictly forbidden and lead to confiscation, heavy fines, or expulsion.',
    ],
  },
  {
    title: 'Grooming Expectations & Code of Conduct',
    icon: 'fas fa-user-check',
    points: [
      'Girls are expected: Not to colour hair; to plait long hair and tie with an off-white ribbon (Classes XI–XII) or red ribbon (Primary & Secondary); no inappropriate body piercings, tattoos, make-up, nail polish, bangles, or fashionable earrings.',
      'Boys are expected: Not to colour, bleach, spike, or leave hair long; to shave facial hair; no make-up or tattoos; no fashionable shoes or low-waist trousers.',
      'Every student is expected to be punctual, smart, humble, honest, truthful, gentle, kind, and polite.',
      'Students must always use polite expressions — "Please", "Sorry", and "Thank you" — and senior classes must set an exemplary standard for younger students.',
    ],
  },
];

const parentRulesList = [
  'Ensure that your wards are punctual and regular in attendance right from the first day of class.',
  'Ensure that your ward’s clothes and person are neat and clean, and that they come to school daily in full school uniform with their Student ID and School Diary.',
  'Review weekly, terminal, and half-yearly progress reports regularly to stay informed of your ward’s academic progress.',
  'Check daily that your wards enter lessons and homework tasks in the School Diary and complete their homework properly.',
  'Fill in properly and check regularly the Absence/Leave Record in the School Diary to ensure all signatures are genuine.',
  'Ensure that school fees are paid on time and never fall into arrears.',
  'Provide your wards with all prescribed textbooks and necessary stationery.',
  'Provide your official specimen signature in the School Diary.',
  'Parents/Guardians are not allowed to visit their children or interview teachers during school hours without the prior written permission of the Principal.',
];

const STREAM_ICONS = ['fas fa-atom', 'fas fa-landmark', 'fas fa-chart-line'];

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmission }) => {
  const [selectedStream, setSelectedStream] = useState(0);
  const [activeHandbookTab, setActiveHandbookTab] = useState<HandbookTab>('uniforms');

  return (
    <section
      id="academics"
      className="w-full overflow-hidden bg-[#f4f7fb] py-16 md:py-24 scroll-mt-20 border-t border-slate-200"
    >
      <div className="container">
        <header
          className="mb-10 flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end md:mb-12"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#0c4a8a] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
              <i className="fas fa-graduation-cap mr-1.5 text-amber-300" aria-hidden="true"></i>
              MBOSE Curriculum • Nursery to Class XII
            </span>
            <h2 className="vision-serif-heading mt-3 text-3xl leading-tight text-[#0c4a8a] sm:text-4xl">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Academic Progression &amp; Pathways
            </h2>
          </div>
          <p className="max-w-md rounded-xl border border-blue-200 bg-white/80 p-3.5 text-sm font-medium leading-6 text-slate-700 shadow-xs sm:text-base">
            English medium education from Nursery to Class XII rooted in MBOSE academic standards,
            intellectual formation, and moral integrity.
          </p>
        </header>

        {/* 4 Colour-Coded School Stages */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicStages.map(
            (
              {
                number,
                name,
                classes,
                icon,
                detail,
                image,
                imageAlt,
                badgeClass,
                cardBorder,
                topBar,
                tagColor,
              },
              index
            ) => (
              <article
                key={number}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${cardBorder}`}
                data-aos="fade-up"
                data-aos-delay={90 * (index + 1)}
              >
                <div className={`h-2 w-full ${topBar}`} />
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <span
                    className={`absolute top-3 left-3 rounded-lg px-3 py-1 text-xs font-extrabold tracking-wider shadow-md ${badgeClass}`}
                  >
                    <i className={`${icon} mr-1.5`} aria-hidden="true"></i>
                    STAGE {number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span
                      className={`inline-block rounded-md border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${tagColor}`}
                    >
                      {classes}
                    </span>
                    <h3 className="mt-2.5 text-lg font-bold leading-snug text-[#0c4a8a]">{name}</h3>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-slate-700">
                      {detail}
                    </p>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        {/* Higher Secondary Streams Explorer (Class XI - XII) */}
        <div
          id="streams"
          className="mt-14 scroll-mt-24 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a]" />
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-center">
            <div>
              <span className="inline-block rounded-md bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-900">
                <i className="fas fa-university mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                Higher Secondary Section (MBOSE HSSLC)
              </span>
              <h3 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a] sm:text-3xl">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Class XI &amp; XII Streams Offered
              </h3>
            </div>

            <div
              className="flex flex-wrap gap-2.5"
              role="tablist"
              aria-label="Higher Secondary Streams"
            >
              {STREAMS.map((stream, index) => {
                const shortLabel = stream.name
                  .replace('Higher Secondary ', '')
                  .replace(' (Class XI - XII)', '');
                const isSelected = selectedStream === index;
                return (
                  <button
                    key={stream.name}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedStream(index)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#0c4a8a] text-white shadow-md'
                        : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                    }`}
                  >
                    <i className={STREAM_ICONS[index % STREAM_ICONS.length]} aria-hidden="true"></i>
                    {shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stream Details */}
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs">
              <h4 className="text-xl font-bold text-[#0c4a8a]">{STREAMS[selectedStream].name}</h4>
              <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
                {STREAMS[selectedStream].tagline}
              </p>

              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#d97706]">
                  <i className="fas fa-star mr-1" aria-hidden="true"></i>
                  Department Highlights
                </p>
                {STREAMS[selectedStream].features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2.5 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs font-medium text-slate-800 sm:text-sm"
                  >
                    <i className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0" aria-hidden="true"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0c4a8a]">
                  <i className="fas fa-book mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Core &amp; Elective Subjects (MBOSE)
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {STREAMS[selectedStream].subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-[#0c4a8a] shadow-xs"
                    >
                      <i className="fas fa-check mr-1 text-[10px] text-[#d97706]" aria-hidden="true"></i>
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0c4a8a]">
                  <i className="fas fa-briefcase mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  University &amp; Career Pathways
                </p>
                <ul className="mt-3 space-y-2">
                  {STREAMS[selectedStream].careerPaths.map((career) => (
                    <li
                      key={career}
                      className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-200"
                    >
                      <i className="fas fa-arrow-circle-right text-[#0c4a8a]" aria-hidden="true"></i>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#0c2d57] p-5 text-white shadow-lg sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs font-medium leading-6 text-slate-100 sm:text-sm">
              Admissions for Class XI (Science, Arts &amp; Commerce) and Nursery to Class X are open
              for the 2026–27 session. Transfer Certificate (TC) from a recognised school is
              required.
            </p>
            <button
              type="button"
              onClick={onOpenAdmission}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-[#d97706] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
              <span>Apply for Admission</span>
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Official School Diary Handbook: Uniforms, Examinations, Discipline & Parent Rules */}
        <div
          id="school-handbook"
          className="mt-14 scroll-mt-24 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />

          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-center">
            <div>
              <span className="inline-block rounded-md bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0c4a8a]">
                <i className="fas fa-book-open mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                Official School Diary Reference • Nursery to Class XII
              </span>
              <h3 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a] sm:text-3xl">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                School Diary Rules, Uniforms &amp; Code of Conduct
              </h3>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="School Diary Sections">
              {[
                { id: 'uniforms' as const, label: 'School Uniforms', icon: 'fas fa-user-tie' },
                { id: 'exams-tc' as const, label: 'Exams & TC Rules', icon: 'fas fa-file-signature' },
                { id: 'conduct' as const, label: 'General Rules & Conduct', icon: 'fas fa-gavel' },
                { id: 'parents' as const, label: 'Rules for Parents', icon: 'fas fa-users' },
                { id: 'syllabus-schedule' as const, label: 'Syllabus & Exam Schedule', icon: 'fas fa-calendar-check' },
              ].map((tab) => {
                const isActive = activeHandbookTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveHandbookTab(tab.id)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0c4a8a] text-white shadow-md'
                        : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                    }`}
                  >
                    <i className={tab.icon} aria-hidden="true"></i>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TAB 1: Official School Uniforms */}
          {activeHandbookTab === 'uniforms' && (
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {uniformSpecifications.map((item) => (
                <article
                  key={item.section}
                  className={`flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs ${item.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {item.badge}
                      </span>
                      <span className="text-[11px] font-bold text-[#d97706]">
                        <i className="fas fa-calendar-alt mr-1" aria-hidden="true"></i>
                        Mon – Fri
                      </span>
                    </div>
                    <h4 className="mt-2.5 text-base font-extrabold text-[#0c4a8a]">
                      {item.section}
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-slate-600">{item.schedule}</p>

                    <div className="mt-4">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                        <i className="fas fa-male mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                        Boys&apos; Uniform
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {item.boys.map((rule) => (
                          <li
                            key={rule}
                            className="flex items-start gap-2 text-xs font-medium text-slate-700"
                          >
                            <i
                              className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0 text-[11px]"
                              aria-hidden="true"
                            ></i>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                        <i className="fas fa-female mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                        Girls&apos; Uniform
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {item.girls.map((rule) => (
                          <li
                            key={rule}
                            className="flex items-start gap-2 text-xs font-medium text-slate-700"
                          >
                            <i
                              className="fas fa-check-circle text-[#d97706] mt-0.5 shrink-0 text-[11px]"
                              aria-hidden="true"
                            ></i>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-white p-3 border border-slate-200 text-xs font-semibold text-[#0c4a8a]">
                    <i className="fas fa-running mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                    {item.trackSuit}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 2: Examinations, Promotion & Admission (TC) Rules */}
          {activeHandbookTab === 'exams-tc' && (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {examAndAdmissionRules.map((block) => (
                <article
                  key={block.title}
                  className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                      <i className={`${block.icon} mr-1 text-amber-300`} aria-hidden="true"></i>
                      {block.badge}
                    </span>
                  </div>
                  <h4 className="mt-2.5 text-lg font-extrabold text-[#0c4a8a]">{block.title}</h4>
                  <ul className="mt-3.5 space-y-2.5">
                    {block.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 rounded-lg bg-white p-3 text-xs sm:text-sm font-medium leading-6 text-slate-700 border border-slate-200"
                      >
                        <i
                          className="fas fa-check-circle text-[#d97706] mt-1 shrink-0"
                          aria-hidden="true"
                        ></i>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {/* TAB 3: General Rules, Grooming & Code of Conduct */}
          {activeHandbookTab === 'conduct' && (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {conductAndGroomingRules.map((block) => (
                <article
                  key={block.title}
                  className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6"
                >
                  <h4 className="flex items-center gap-2 text-lg font-extrabold text-[#0c4a8a]">
                    <i className={`${block.icon} text-[#d97706]`} aria-hidden="true"></i>
                    <span>{block.title}</span>
                  </h4>
                  <ul className="mt-3.5 space-y-2.5">
                    {block.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 rounded-lg bg-white p-3 text-xs sm:text-sm font-medium leading-6 text-slate-700 border border-slate-200"
                      >
                        <i
                          className="fas fa-shield-alt text-[#0c4a8a] mt-1 shrink-0"
                          aria-hidden="true"
                        ></i>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {/* TAB 4: Important Rules for Parents & Guardians */}
          {activeHandbookTab === 'parents' && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6">
              <div className="mb-4">
                <h4 className="text-lg font-extrabold text-[#0c4a8a]">
                  <i className="fas fa-hands-helping mr-2 text-[#d97706]" aria-hidden="true"></i>
                  Important Rules for Parents &amp; Guardians (School Diary Page 5)
                </h4>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                  Special attention is given to ensure a high standard of morality and discipline.
                  Parents and Guardians are requested to co-operate with the School Authorities:
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {parentRulesList.map((rule, idx) => (
                  <div
                    key={rule}
                    className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 text-xs sm:text-sm font-medium leading-6 text-slate-700 border border-slate-200"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c4a8a] text-[11px] font-extrabold text-white">
                      {idx + 1}
                    </span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Class-Wise Syllabus, Annual Examination Routine & Holiday List */}
          {activeHandbookTab === 'syllabus-schedule' && (
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <article className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 border-t-4 border-t-[#0c4a8a]">
                <span className="inline-block rounded-full bg-[#0c4a8a] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  MBOSE Curriculum
                </span>
                <h4 className="mt-2.5 text-base font-extrabold text-[#0c4a8a]">
                  Class-Wise Syllabus Overview (2026–27)
                </h4>
                <ul className="mt-3 space-y-2 text-xs font-medium text-slate-700">
                  <li className="rounded-lg bg-white p-2.5 border border-slate-200">
                    <strong className="text-[#0c4a8a] block">Nursery, KG &amp; Classes I–V:</strong>
                    Foundational English, Phonics, Mathematics, EVS, Khasi/Hindi/Alt. English, Computer Awareness &amp; Moral Science.
                  </li>
                  <li className="rounded-lg bg-white p-2.5 border border-slate-200">
                    <strong className="text-[#0c4a8a] block">Secondary (Classes VI–X SSLC):</strong>
                    MBOSE Prescribed Textbooks in English, Mathematics, Science &amp; Tech, Social Science, Health &amp; Physical Education, and Second Language.
                  </li>
                  <li className="rounded-lg bg-white p-2.5 border border-slate-200">
                    <strong className="text-[#0c4a8a] block">Higher Secondary (Classes XI–XII HSSLC):</strong>
                    MBOSE Core &amp; Elective Syllabus for Science (PCM/PCB), Arts (Humanities), and Commerce with Lab Practicals &amp; Project Work.
                  </li>
                </ul>
              </article>

              <article className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 border-t-4 border-t-[#d97706]">
                <span className="inline-block rounded-full bg-[#d97706] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Assessment Calendar
                </span>
                <h4 className="mt-2.5 text-base font-extrabold text-[#0c4a8a]">
                  Examination Schedule (2026–27)
                </h4>
                <ul className="mt-3 space-y-2 text-xs font-medium text-slate-700">
                  <li className="flex items-start justify-between gap-2 rounded-lg bg-white p-2.5 border border-slate-200">
                    <span><strong>1st Unit / Periodic Test:</strong> All Wings</span>
                    <span className="shrink-0 font-bold text-[#0c4a8a]">April / May</span>
                  </li>
                  <li className="flex items-start justify-between gap-2 rounded-lg bg-white p-2.5 border border-slate-200">
                    <span><strong>Half-Yearly / 1st Term Exam:</strong> Nursery – X</span>
                    <span className="shrink-0 font-bold text-[#0c4a8a]">July</span>
                  </li>
                  <li className="flex items-start justify-between gap-2 rounded-lg bg-white p-2.5 border border-slate-200">
                    <span><strong>Pre-Selection / Pre-Promotion:</strong> IX – XII</span>
                    <span className="shrink-0 font-bold text-[#0c4a8a]">September</span>
                  </li>
                  <li className="flex items-start justify-between gap-2 rounded-lg bg-white p-2.5 border border-slate-200">
                    <span><strong>Selection Exam (SSLC &amp; HSSLC):</strong> X &amp; XII</span>
                    <span className="shrink-0 font-bold text-[#d97706]">November</span>
                  </li>
                  <li className="flex items-start justify-between gap-2 rounded-lg bg-white p-2.5 border border-slate-200">
                    <span><strong>Annual Promotion Exam:</strong> Nursery – IX &amp; XI</span>
                    <span className="shrink-0 font-bold text-[#0c4a8a]">Nov / Dec</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5 border-t-4 border-t-emerald-600">
                <span className="inline-block rounded-full bg-emerald-600 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Diocesan &amp; State Holidays
                </span>
                <h4 className="mt-2.5 text-base font-extrabold text-[#0c4a8a]">
                  Major Observances &amp; Vacation Schedule
                </h4>
                <ul className="mt-3 space-y-2 text-xs font-medium text-slate-700">
                  <li className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200">
                    <span>Shad Suk Mynsiem &amp; Good Friday / Easter</span>
                    <span className="font-bold text-[#0c4a8a]">April</span>
                  </li>
                  <li className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200">
                    <span>Summer Break / Mid-Session Recess</span>
                    <span className="font-bold text-[#0c4a8a]">June / July</span>
                  </li>
                  <li className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200">
                    <span>U Tirot Sing Day &amp; Independence Day</span>
                    <span className="font-bold text-[#0c4a8a]">July &amp; Aug</span>
                  </li>
                  <li className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200">
                    <span>Feast of St. Michael the Archangel (Patron&apos;s Day)</span>
                    <span className="font-bold text-[#d97706]">29 Sept</span>
                  </li>
                  <li className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200">
                    <span>Winter Vacation &amp; Christmas Recess</span>
                    <span className="font-bold text-[#0c4a8a]">Dec – Jan</span>
                  </li>
                </ul>
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
