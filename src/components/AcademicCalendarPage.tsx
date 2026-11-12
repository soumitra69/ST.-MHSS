import React, { useState, useMemo } from 'react';
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
export interface HolidayItem {
  dayNum: number;
  monthIdx: number; // 0 = Jan .. 11 = Dec
  date: string;
  day: string;
  occasion: string;
  type?: 'State' | 'National' | 'Diocesan' | 'Gazetted';
}

export const OFFICIAL_HOLIDAYS_2026: HolidayItem[] = [
  { dayNum: 1, monthIdx: 0, date: '01 January', day: 'Thursday', occasion: "New Year's Day", type: 'Gazetted' },
  { dayNum: 26, monthIdx: 0, date: '26 January', day: 'Monday', occasion: 'Republic Day', type: 'National' },
  { dayNum: 4, monthIdx: 2, date: '04 March', day: 'Wednesday', occasion: 'Holi', type: 'Gazetted' },
  { dayNum: 21, monthIdx: 2, date: '21 March', day: 'Saturday', occasion: 'Idul Fitr', type: 'Gazetted' },
  { dayNum: 3, monthIdx: 3, date: '03 April', day: 'Friday', occasion: 'Good Friday', type: 'Diocesan' },
  { dayNum: 1, monthIdx: 4, date: '01 May', day: 'Friday', occasion: 'May Day', type: 'Gazetted' },
  { dayNum: 4, monthIdx: 5, date: '04 June', day: 'Thursday', occasion: 'Ri Bhoi Day', type: 'State' },
  { dayNum: 22, monthIdx: 5, date: '22 June', day: 'Monday', occasion: "Rev. Thomas Jones' Day", type: 'State' },
  { dayNum: 9, monthIdx: 6, date: '09 July', day: 'Thursday', occasion: 'Behdeinkhlam', type: 'State' },
  { dayNum: 17, monthIdx: 6, date: '17 July', day: 'Friday', occasion: 'U Tirot Sing Day', type: 'State' },
  { dayNum: 15, monthIdx: 7, date: '15 August', day: 'Saturday', occasion: 'Independence Day', type: 'National' },
  { dayNum: 4, monthIdx: 8, date: '04 September', day: 'Friday', occasion: 'Janmashtami', type: 'Gazetted' },
  { dayNum: 18, monthIdx: 8, date: '18 September', day: 'Friday', occasion: 'Unitarian Day', type: 'State' },
  { dayNum: 2, monthIdx: 9, date: '02 October', day: 'Friday', occasion: 'Gandhi Jayanti', type: 'National' },
  { dayNum: 19, monthIdx: 9, date: '19 October', day: 'Monday', occasion: 'Maha Navami', type: 'Gazetted' },
  { dayNum: 2, monthIdx: 10, date: '02 November', day: 'Monday', occasion: "All Souls' Day", type: 'Diocesan' },
  { dayNum: 8, monthIdx: 10, date: '08 November', day: 'Sunday', occasion: 'Diwali', type: 'Gazetted' },
  { dayNum: 13, monthIdx: 10, date: '13 November', day: 'Friday', occasion: 'Wangala Festival', type: 'State' },
  { dayNum: 23, monthIdx: 10, date: '23 November', day: 'Monday', occasion: 'Seng Kut Snem', type: 'State' },
  { dayNum: 12, monthIdx: 11, date: '12 December', day: 'Saturday', occasion: 'Pa Togan Sangma', type: 'State' },
  { dayNum: 18, monthIdx: 11, date: '18 December', day: 'Friday', occasion: 'Death Anniversary of U Soso Tham', type: 'State' },
  { dayNum: 25, monthIdx: 11, date: '25 December', day: 'Friday', occasion: 'Christmas Day', type: 'Diocesan' },
  { dayNum: 26, monthIdx: 11, date: '26 December', day: 'Saturday', occasion: 'Christmas Holiday', type: 'Diocesan' },
  { dayNum: 30, monthIdx: 11, date: '30 December', day: 'Wednesday', occasion: 'U Kiang Nangbah', type: 'State' },
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

const MONTH_NAMES = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
];

const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const AcademicCalendarPage: React.FC<AcademicCalendarPageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  // Calendar month state: default to November (10) for 2026
  const [currentMonthIdx, setCurrentMonthIdx] = useState<number>(10);
  const [selectedDay, setSelectedDay] = useState<number>(12);

  const currentYear = 2026;

  // Compute calendar days for current month
  const { daysInMonth, startDayOfWeek } = useMemo(() => {
    const dStart = new Date(currentYear, currentMonthIdx, 1);
    const dEnd = new Date(currentYear, currentMonthIdx + 1, 0);
    return {
      daysInMonth: dEnd.getDate(),
      startDayOfWeek: dStart.getDay(),
    };
  }, [currentMonthIdx]);

  // Holidays in the current month
  const holidaysInCurrentMonth = useMemo(() => {
    return OFFICIAL_HOLIDAYS_2026.filter((h) => h.monthIdx === currentMonthIdx).sort(
      (a, b) => a.dayNum - b.dayNum
    );
  }, [currentMonthIdx]);

  // Selected date details
  const selectedDateObj = useMemo(() => {
    return new Date(currentYear, currentMonthIdx, selectedDay);
  }, [currentMonthIdx, selectedDay]);

  const selectedDayOfWeekName = useMemo(() => {
    return selectedDateObj.toLocaleDateString('en-US', { weekday: 'long' });
  }, [selectedDateObj]);

  const selectedHoliday = useMemo(() => {
    return OFFICIAL_HOLIDAYS_2026.find(
      (h) => h.monthIdx === currentMonthIdx && h.dayNum === selectedDay
    );
  }, [currentMonthIdx, selectedDay]);

  const isSunday = useMemo(() => {
    return selectedDateObj.getDay() === 0;
  }, [selectedDateObj]);

  const handlePrevMonth = () => {
    if (currentMonthIdx > 0) {
      setCurrentMonthIdx((prev) => prev - 1);
      setSelectedDay(1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIdx < 11) {
      setCurrentMonthIdx((prev) => prev + 1);
      setSelectedDay(1);
    }
  };

  const handleToday = () => {
    setCurrentMonthIdx(10); // November 2026
    setSelectedDay(12);
  };

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
            <a
              href="#holiday-list"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100"
            >
              <i className="fas fa-calendar-alt text-[#d97706]" aria-hidden="true"></i>
              <span>Annual Holiday Table</span>
            </a>
          </div>
        </div>

        {/* Hero Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10 mb-8">
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
                Academic Calendar &amp; Holidays 2026
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Official calendar schedule, interactive date inspector, verified school events, and gazetted holiday listings published by <strong>{SCHOOL_INFO.name}</strong>, Umsning.
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

        {/* =========================================================================
            INTERACTIVE CALENDAR APP CONTAINER (THEME-ALIGNED WITH SITE)
            ========================================================================= */}
        <div className="rounded-3xl border border-slate-900 bg-[#071322] p-5 sm:p-7 md:p-8 text-white shadow-2xl mb-12">
            {/* Top Control Bar: Month Switcher & Quick Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  disabled={currentMonthIdx === 0}
                  className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 cursor-pointer"
                  aria-label="Previous Month"
                >
                  <i className="fas fa-chevron-left text-xs" aria-hidden="true"></i>
                </button>

                <span className="font-mono text-sm sm:text-base font-extrabold tracking-wider px-3 py-1 bg-slate-900 border border-slate-800 rounded-xl text-slate-200">
                  {MONTH_NAMES[currentMonthIdx]} {currentYear}
                </span>

                <button
                  type="button"
                  onClick={handleNextMonth}
                  disabled={currentMonthIdx === 11}
                  className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 cursor-pointer"
                  aria-label="Next Month"
                >
                  <i className="fas fa-chevron-right text-xs" aria-hidden="true"></i>
                </button>

                <button
                  type="button"
                  onClick={handleToday}
                  className="ml-1 rounded-xl bg-slate-800 hover:bg-slate-700 px-3.5 py-1.5 text-xs font-bold text-white border border-slate-700 cursor-pointer"
                >
                  Today
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#holiday-list"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-950/80 border border-emerald-700/60 px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-900/80 transition-colors"
                >
                  <i className="fas fa-calendar-alt text-emerald-400" aria-hidden="true"></i>
                  <span>Annual Holiday Calendar</span>
                </a>
              </div>
            </div>

            {/* Main 2-Column Calendar Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              {/* Left 6 Columns: Interactive Month Grid */}
              <div className="lg:col-span-6 rounded-2xl bg-[#0c1a2d] border border-slate-800 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                        • ST. MICHAEL&apos;S CALENDAR
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wider">
                        {MONTH_NAMES[currentMonthIdx]}
                      </h3>
                    </div>
                    <span className="font-mono text-3xl font-black text-emerald-400/80">
                      {currentYear}
                    </span>
                  </div>

                  {/* Day of Week Header Row */}
                  <div className="grid grid-cols-7 gap-1 text-center font-mono text-[11px] sm:text-xs font-bold mb-3">
                    {DAYS_OF_WEEK.map((dw, i) => (
                      <span key={dw} className={i === 0 ? 'text-red-400 font-black' : 'text-slate-400'}>
                        {dw}
                      </span>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                    {/* Empty offset spaces */}
                    {Array.from({ length: startDayOfWeek }).map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square" />
                    ))}

                    {/* Month Days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dayNum = i + 1;
                      const isCurrentSelected = dayNum === selectedDay;
                      const dayDate = new Date(currentYear, currentMonthIdx, dayNum);
                      const isDaySunday = dayDate.getDay() === 0;
                      const hasHoliday = OFFICIAL_HOLIDAYS_2026.some(
                        (h) => h.monthIdx === currentMonthIdx && h.dayNum === dayNum
                      );

                      return (
                        <button
                          key={dayNum}
                          type="button"
                          onClick={() => setSelectedDay(dayNum)}
                          className={`aspect-square rounded-lg sm:rounded-xl flex flex-col items-center justify-center relative font-mono text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                            isCurrentSelected
                              ? 'bg-white !text-slate-950 font-black shadow-md z-10'
                              : isDaySunday
                              ? 'text-red-400 hover:bg-slate-800/80 font-medium'
                              : hasHoliday
                              ? 'text-emerald-400 hover:bg-slate-800/80 font-medium'
                              : 'text-slate-200 hover:bg-slate-800/80 font-normal'
                          }`}
                        >
                          <span className={isCurrentSelected ? 'text-slate-950 font-black text-xs sm:text-sm' : ''}>
                            {dayNum}
                          </span>
                          {(hasHoliday || isDaySunday) && (
                            <span
                              className={`h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full absolute bottom-1 ${
                                isCurrentSelected
                                  ? 'bg-emerald-600'
                                  : isDaySunday
                                  ? 'bg-red-400'
                                  : 'bg-emerald-400'
                              }`}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400 inline-block" /> Sunday
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" /> Holiday
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white inline-block" /> Selected
                  </span>
                </div>
              </div>

              {/* Right 6 Columns: DATE DETAILS (Top) & HOLIDAYS IN MONTH (Bottom) */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-5">
                {/* Top Box: DATE DETAILS */}
                <div className="rounded-2xl bg-[#0c1a2d] border border-slate-800 p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      DATE DETAILS
                    </span>
                    <span
                      className={`rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        selectedHoliday
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
                          : isSunday
                          ? 'bg-red-950 text-red-300 border border-red-700/60'
                          : 'bg-amber-950 text-amber-300 border border-amber-700/60'
                      }`}
                    >
                      {selectedHoliday ? 'Official Holiday' : isSunday ? 'Sunday Closed' : 'Working Day'}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-white">
                    {selectedDayOfWeekName}, {selectedDay} {MONTH_NAMES[currentMonthIdx]} {currentYear}
                  </h4>

                  <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-semibold">
                    {selectedHoliday ? (
                      <span className="text-emerald-300 flex items-center gap-2">
                        <i className="fas fa-glass-cheers text-emerald-400" aria-hidden="true"></i>
                        <span>{selectedHoliday.occasion} ({selectedHoliday.type} Holiday)</span>
                      </span>
                    ) : isSunday ? (
                      <span className="text-red-300 flex items-center gap-2">
                        <i className="fas fa-church text-red-400" aria-hidden="true"></i>
                        <span>Sunday Diocesan Rest Day (Campus Closed)</span>
                      </span>
                    ) : (
                      <span className="text-slate-300 flex items-center gap-2">
                        <i className="fas fa-sparkles text-amber-400" aria-hidden="true"></i>
                        <span>Regular Operational Working Day • 8:45 AM – 3:00 PM</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Box: Holidays in Current Month */}
                <div className="rounded-2xl bg-[#0c1a2d] border border-slate-800 p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm sm:text-base font-extrabold text-white">
                      Holidays in {MONTH_NAMES[currentMonthIdx]}
                    </h4>
                    <span className="rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 px-2.5 py-0.5 text-[11px] font-bold font-mono">
                      {holidaysInCurrentMonth.length} {holidaysInCurrentMonth.length === 1 ? 'Day' : 'Days'}
                    </span>
                  </div>

                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                    {holidaysInCurrentMonth.length > 0 ? (
                      holidaysInCurrentMonth.map((hol) => (
                        <div
                          key={hol.occasion}
                          className="flex items-center justify-between rounded-xl bg-slate-900/90 border border-slate-800 p-3 hover:border-emerald-600/40 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800/60 px-2 py-1 text-center font-mono text-[10px] font-bold leading-tight min-w-[46px]">
                              <span className="block text-[9px] uppercase">{MONTH_NAMES[hol.monthIdx].slice(0, 3)}</span>
                              <span className="text-xs font-black">{hol.dayNum}</span>
                            </div>
                            <div>
                              <strong className="block text-xs font-bold text-white">
                                {hol.occasion}
                              </strong>
                              <span className="text-[10px] text-slate-400 font-medium">{hol.day}</span>
                            </div>
                          </div>

                          <span className="rounded-md bg-slate-800 text-[10px] font-semibold text-slate-300 px-2 py-0.5 border border-slate-700">
                            {hol.type || 'Official'}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 text-center text-xs text-slate-400">
                        No gazetted public holidays scheduled in {MONTH_NAMES[currentMonthIdx]}.
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>St. Michael&apos;s H.S. School, Umsning</span>
                    <span className="font-mono text-emerald-400 font-bold">2026 Academic Session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* =========================================================================
            PROSPECTUS SECTION: IMPORTANT SCHOOL EVENTS & DIRECTIVES
            ========================================================================= */}
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

        {/* Section 4: LIST OF HOLIDAYS 2026 (Official Exact Table) */}
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
                  <th className="px-4 py-3.5 font-extrabold uppercase">Holiday / Occasion</th>
                  <th className="rounded-tr-xl px-4 py-3.5 font-extrabold uppercase">Category</th>
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
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-bold text-slate-700">
                        {row.type || 'Official'}
                      </span>
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
