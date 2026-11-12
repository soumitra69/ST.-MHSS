import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface AcademicCalendarPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

// 1. IMPORTANT SCHOOL EVENTS 2026 (From Official Prospectus Page 4)
export const IMPORTANT_SCHOOL_EVENTS_2026 = [
  { month: 'JANUARY', event: 'Internal Promotion Examination-XI' },
  { month: 'FEBRUARY', event: 'Re-opening of School (VI - X)\nPractical Examination (XII)\nHSSLC Examination-2026' },
  { month: 'MARCH', event: 'Commencement of Classes (XII)\nParents-Teachers-Students Meeting' },
  { month: 'APRIL', event: 'Oath-Taking Ceremony of School Leaders' },
  { month: 'MAY', event: 'First Internal Assessment (VI - X)' },
  { month: 'JUNE', event: 'Half-Yearly Exam (VI-IX) & Pre-Selection (X & XII)' },
  { month: 'JULY', event: 'Summer Vacation\nResumption of Classes (VI - XII)' },
  { month: 'AUGUST', event: 'Independence Day' },
  { month: 'SEPTEMBER', event: "Second Internal Assessment (VI - X)\nTeachers' Day\nSchool Fete\nSt. Michael's Day" },
  { month: 'OCTOBER', event: 'Selection Test (X & XII)' },
  { month: 'NOVEMBER', event: 'Children\'s Day\nExamination : Promotion (VI - IX) &\nPre-Promotion (XI)' },
  { month: 'DECEMBER', event: 'Send-off (X & XII)\nDeclaration of Annual Results (V - IX)' },
];

// 2. LIST OF HOLIDAYS 2026 (From Official Prospectus Page 4)
export const OFFICIAL_HOLIDAYS_2026 = [
  { date: '01 January', day: 'Thursday', occasion: "New Year's Day" },
  { date: '26 January', day: 'Monday', occasion: 'Republic Day' },
  { date: '04 March', day: 'Wednesday', occasion: 'Holi' },
  { date: '21 March', day: 'Saturday', occasion: 'Idul Fitr' },
  { date: '03 April', day: 'Friday', occasion: 'Good Friday' },
  { date: '01 May', day: 'Friday', occasion: 'May Day' },
  { date: '04 June', day: 'Thursday', occasion: 'Ri Bhoi Day' },
  { date: '22 June', day: 'Monday', occasion: "Rev. Thomas Jones' Day" },
  { date: '09 July', day: 'Thursday', occasion: 'Behdeinkhlam' },
  { date: '17 July', day: 'Friday', occasion: 'U Tirot Sing Day' },
  { date: '15 August', day: 'Saturday', occasion: 'Independence Day' },
  { date: '04 September', day: 'Friday', occasion: 'Janmashtami' },
  { date: '18 September', day: 'Friday', occasion: 'Unitarian Day' },
  { date: '19 October', day: 'Monday', occasion: 'Maha Navami' },
  { date: '02 October', day: 'Friday', occasion: 'Gandhi Jayanti' },
  { date: '08 November', day: 'Sunday', occasion: 'Diwali' },
  { date: '02 November', day: 'Monday', occasion: "All Souls' Day" },
  { date: '13 November', day: 'Friday', occasion: 'Wangala Festival' },
  { date: '23 November', day: 'Monday', occasion: 'Seng Kut Snem' },
  { date: '12 December', day: 'Saturday', occasion: 'Pa Togan Sangma' },
  { date: '18 December', day: 'Friday', occasion: 'Death Anniversary of U Soso Tham' },
  { date: '25 December', day: 'Friday', occasion: 'Christmas Day' },
  { date: '26 December', day: 'Saturday', occasion: 'Christmas Holiday' },
  { date: '30 December', day: 'Wednesday', occasion: 'U Kiang Nangbah' },
];

// 3. INTERNAL ASSESSMENT & ADMISSION GUIDELINES (From Official Prospectus Page 4)
export const PROSPECTUS_DIRECTIVES = [
  {
    heading: 'INTERNAL ASSESSMENT',
    items: ['1. EVS (Environmental Studies)', '2. OJT (On-the-Job Training)'],
  },
  {
    heading: 'ADDITIONAL SUBJECT',
    items: ['Economics is offered as an elective / additional subject.'],
  },
  {
    heading: 'VOCATIONAL CLASS XI DIRECT ADMISSIONS',
    items: [
      'Direct admissions are given if you wish to apply for Class XI Vocational, either Computer Techniques or Poultry Farming, but you should have passed the SSLC Examination or any other Equivalent Examinations.',
      'Moreover, a free course is offered if you opt for Poultry Farming.',
    ],
  },
  {
    heading: 'KINDLY BEAR IN MIND',
    items: [
      'It is compulsory for the candidates who are admitted to class XI (eleven) to possess a School Diary and a Student\'s Identity Card issued by the School Authority.',
      'Students from different streams should pass in all the subjects of Class XI (eleven) so as to be promoted to Class XII. Streams can be changed in Class XII from Commerce/Science to Arts Stream only if the student concerned has cleared all the subjects in Class XI and accordingly promoted to Class XII.',
      'Fees once paid cannot be refunded.',
    ],
  },
];

export const AcademicCalendarPage: React.FC<AcademicCalendarPageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  return (
    <section
      id="academic-calendar-page"
      className="w-full bg-[#f4f7fb] py-8 sm:py-12 border-t border-slate-200 min-h-screen"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Navigation Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-[#0c4a8a] hover:text-[#d97706] cursor-pointer"
            >
              <i className="fas fa-home" aria-hidden="true"></i>
              <span>Home</span>
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-[#d97706]">Official Academic Calendar &amp; Holidays</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 cursor-pointer"
            >
              <i className="fas fa-arrow-left text-[#0c4a8a]" aria-hidden="true"></i>
              <span>Back to Home</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
            >
              <i className="fas fa-print text-[#d97706]" aria-hidden="true"></i>
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Hero Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10 mb-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-calendar-check mr-1.5" aria-hidden="true"></i>
                  Official School Prospectus (Page 4)
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-school mr-1.5" aria-hidden="true"></i>
                  Session 2026 • {SCHOOL_INFO.shortName}
                </span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold !text-white leading-tight">
                Important School Events &amp; Holidays 2026
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Official institutional schedule, annual examination milestones, gazetted holiday list, and academic directives published by <strong>{SCHOOL_INFO.name}</strong>, Umsning.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              {onOpenAdmission && (
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true"></i>
                  <span>Apply for Admission</span>
                </button>
              )}
              {onNavigatePage && (
                <button
                  type="button"
                  onClick={() => onNavigatePage('fee-structure-page')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <i className="fas fa-file-invoice-dollar text-amber-300" aria-hidden="true"></i>
                  <span>Fee Structure</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Section 1: Important School Events 2026 & Internal Assessment Directives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column (7 cols): IMPORTANT SCHOOL EVENTS 2026 */}
          <div className="lg:col-span-7 rounded-3xl border border-amber-300 bg-[#fffbeb] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-amber-200 pb-4 mb-4">
              <div>
                <span className="rounded-md bg-amber-400 text-slate-950 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                  Annual Timeline
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-black text-[#0c2d57]">
                  IMPORTANT SCHOOL EVENTS 2026
                </h2>
              </div>
              <span className="text-xs font-bold text-amber-900 hidden sm:inline">
                Jan – Dec 2026
              </span>
            </div>

            <div className="divide-y divide-amber-200/90">
              {IMPORTANT_SCHOOL_EVENTS_2026.map((ev) => (
                <div key={ev.month} className="py-3.5 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                  <div className="w-32 shrink-0">
                    <span className="inline-block rounded-lg bg-amber-200/80 px-2.5 py-1 font-mono text-xs font-black tracking-wider text-amber-950">
                      {ev.month}
                    </span>
                  </div>
                  <div className="flex-1 text-xs sm:text-sm font-semibold text-slate-800 whitespace-pre-line leading-relaxed">
                    {ev.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): INTERNAL ASSESSMENT & PROSPECTUS DIRECTIVES */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                Prospectus Page 4 Guidelines
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-[#0c4a8a] mb-5">
                Academic &amp; Admission Notes
              </h2>

              <div className="space-y-4">
                {PROSPECTUS_DIRECTIVES.map((d) => (
                  <div key={d.heading} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                    <strong className="block text-xs font-extrabold text-[#0c4a8a] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <i className="fas fa-caret-right text-[#d97706]" aria-hidden="true"></i>
                      <span>{d.heading}</span>
                    </strong>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                      {d.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#d97706] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Refundable Policy Callout */}
            <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-red-900 text-xs">
              <strong className="block font-bold text-red-950 mb-0.5">
                <i className="fas fa-exclamation-circle mr-1.5" aria-hidden="true"></i>
                Important Tuition &amp; Admission Rule:
              </strong>
              <span>Fees once paid cannot be refunded under any circumstances.</span>
            </div>
          </div>
        </div>

        {/* Section 2: LIST OF HOLIDAYS 2026 (Official Exact Table) */}
        <div id="holiday-list" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-5 mb-6">
            <div>
              <span className="rounded-md bg-rose-50 border border-rose-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-rose-800">
                Official Gazetted &amp; Diocesan List
              </span>
              <h2 className="mt-1 text-2xl font-black text-[#0c4a8a]">
                LIST OF HOLIDAYS 2026
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Total 24 Official Holidays • St. Michael&apos;s Umsning
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0c4a8a] text-white">
                  <th className="rounded-tl-xl px-4 py-3.5 font-extrabold uppercase">Date</th>
                  <th className="px-4 py-3.5 font-extrabold uppercase">Day</th>
                  <th className="rounded-tr-xl px-4 py-3.5 font-extrabold uppercase">Holiday / Occasion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {OFFICIAL_HOLIDAYS_2026.map((row, idx) => (
                  <tr
                    key={`${row.date}-${row.occasion}`}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc] hover:bg-amber-50/50'}
                  >
                    <td className="px-4 py-3 font-mono font-extrabold text-[#0c4a8a] whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-600 whitespace-nowrap">
                      {row.day}
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">
                      {row.occasion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Official MBOSE Academic Calendar &amp; Holiday List 2026 • School Code: {SCHOOL_INFO.schoolCode}
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
