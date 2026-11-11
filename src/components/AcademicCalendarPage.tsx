import React, { useState, useMemo } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface AcademicCalendarPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

type DayEventType = 'Holiday' | 'Examination' | 'Event' | 'Admission';

interface MonthDayEvent {
  day: number;
  endDay?: number;
  title: string;
  type: DayEventType;
  categoryLabel: string;
  wing?: string;
}

interface MonthCalendarData {
  monthIndex: number; // 0 = Jan .. 11 = Dec
  monthName: string;
  shortName: string;
  year: number;
  daysInMonth: number;
  startDayOfWeek: number; // 0 = Sun .. 6 = Sat (for 2026)
  workingDays: number;
  events: MonthDayEvent[];
}

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// Complete 12-Month Calendar & Holiday Data for 2026 Academic Year
const FULL_YEAR_CALENDAR_2026: MonthCalendarData[] = [
  {
    monthIndex: 0,
    monthName: 'January',
    shortName: 'JAN',
    year: 2026,
    daysInMonth: 31,
    startDayOfWeek: 4, // Jan 1, 2026 is Thursday
    workingDays: 10,
    events: [
      {
        day: 1,
        title: "New Year's Day & Solemnity of Mary, Mother of God",
        type: 'Holiday',
        categoryLabel: 'Official Holiday',
        wing: 'All Wings',
      },
      {
        day: 2,
        endDay: 15,
        title: 'Winter Vacation & Annual Recess Continues',
        type: 'Holiday',
        categoryLabel: 'Winter Vacation',
        wing: 'Nursery – XII',
      },
      {
        day: 18,
        title: 'NH-6 School Bus Route Registration Opens at Secretariat',
        type: 'Admission',
        categoryLabel: 'Admissions & Transit',
        wing: 'Routes 1 – 4',
      },
      {
        day: 26,
        title: '77th Republic Day — Ceremonial Flag Hoisting',
        type: 'Holiday',
        categoryLabel: 'National Holiday',
        wing: 'All Campus Wings',
      },
      {
        day: 28,
        title: 'New Admission Verification & Transfer Certificate (TC) Desk',
        type: 'Admission',
        categoryLabel: 'Admission Window',
        wing: 'Nursery – IX',
      },
    ],
  },
  {
    monthIndex: 1,
    monthName: 'February',
    shortName: 'FEB',
    year: 2026,
    daysInMonth: 28,
    startDayOfWeek: 0, // Feb 1, 2026 is Sunday
    workingDays: 18,
    events: [
      {
        day: 9,
        endDay: 13,
        title: 'Faculty Orientation, Lesson Planning & Lab Readiness Week',
        type: 'Event',
        categoryLabel: 'Staff Orientation',
        wing: '68+ Faculty',
      },
      {
        day: 16,
        title: 'Reopening of Academic Session 2026–27 & Assembly Orientation',
        type: 'Admission',
        categoryLabel: 'Session Starts',
        wing: 'Nursery – Class XII',
      },
      {
        day: 18,
        title: 'Ash Wednesday — Beginning of Lenten Prayer Season',
        type: 'Event',
        categoryLabel: 'Diocesan Observance',
        wing: 'All Wings',
      },
      {
        day: 23,
        title: 'Distribution of Official School Diaries, ID Cards & House Badges',
        type: 'Event',
        categoryLabel: 'Academic Routine',
        wing: '4 Archangel Houses',
      },
    ],
  },
  {
    monthIndex: 2,
    monthName: 'March',
    shortName: 'MAR',
    year: 2026,
    daysInMonth: 31,
    startDayOfWeek: 0, // Mar 1, 2026 is Sunday
    workingDays: 21,
    events: [
      {
        day: 2,
        title: 'Youth Health & Anti-Tobacco Community Rally in Umsning',
        type: 'Event',
        categoryLabel: 'Social Outreach',
        wing: 'Classes VIII – XII',
      },
      {
        day: 4,
        title: 'Holi / Doljatra Festival Holiday',
        type: 'Holiday',
        categoryLabel: 'Public Holiday',
        wing: 'All Wings',
      },
      {
        day: 15,
        title: 'Class XII Geography & Ecological Fieldwork Excursion',
        type: 'Event',
        categoryLabel: 'Fieldwork',
        wing: 'Class XII Arts/Sci',
      },
      {
        day: 21,
        title: 'Id-ul-Fitr Holiday',
        type: 'Holiday',
        categoryLabel: 'Gazetted Holiday',
        wing: 'All Wings',
      },
      {
        day: 25,
        endDay: 28,
        title: 'Inter-House Spring Track Trials & Synchronized Drill Practice',
        type: 'Event',
        categoryLabel: 'Sports & Drill',
        wing: 'All 4 Houses',
      },
    ],
  },
  {
    monthIndex: 3,
    monthName: 'April',
    shortName: 'APR',
    year: 2026,
    daysInMonth: 30,
    startDayOfWeek: 3, // Apr 1, 2026 is Wednesday
    workingDays: 19,
    events: [
      {
        day: 2,
        title: 'Maundy Thursday — Sacred Triduum Holiday',
        type: 'Holiday',
        categoryLabel: 'Diocesan Holiday',
        wing: 'All Wings',
      },
      {
        day: 3,
        title: 'Good Friday — Solemn Day of Prayer & Fasting',
        type: 'Holiday',
        categoryLabel: 'National & Diocesan Holiday',
        wing: 'All Wings',
      },
      {
        day: 6,
        title: 'Easter Monday & Shad Suk Mynsiem Thanksgiving Festival',
        type: 'Holiday',
        categoryLabel: 'State & Diocesan Holiday',
        wing: 'All Wings',
      },
      {
        day: 14,
        title: 'Dr. B.R. Ambedkar Jayanti Holiday',
        type: 'Holiday',
        categoryLabel: 'Public Holiday',
        wing: 'All Wings',
      },
      {
        day: 15,
        endDay: 30,
        title: 'Class XI Higher Secondary Admissions & Stream Counseling Window',
        type: 'Admission',
        categoryLabel: 'HSSLC Admissions',
        wing: 'Arts, Science & Commerce',
      },
    ],
  },
  {
    monthIndex: 4,
    monthName: 'May',
    shortName: 'MAY',
    year: 2026,
    daysInMonth: 31,
    startDayOfWeek: 5, // May 1, 2026 is Friday
    workingDays: 20,
    events: [
      {
        day: 1,
        title: 'May Day / Feast of St. Joseph the Worker',
        type: 'Holiday',
        categoryLabel: 'State Holiday',
        wing: 'All Wings',
      },
      {
        day: 4,
        endDay: 12,
        title: 'First Unit / Periodic Assessment (Term I Evaluation)',
        type: 'Examination',
        categoryLabel: 'Unit Test I',
        wing: 'Classes I – XII',
      },
      {
        day: 16,
        title: 'Buddha Purnima Holiday',
        type: 'Holiday',
        categoryLabel: 'Gazetted Holiday',
        wing: 'All Wings',
      },
      {
        day: 24,
        title: 'Feast of Mary Help of Christians & Founder Ordination Anniversary',
        type: 'Event',
        categoryLabel: 'Foundational Tribute',
        wing: 'Entire School',
      },
      {
        day: 28,
        title: 'Id-ul-Zuha (Bakrid) Holiday',
        type: 'Holiday',
        categoryLabel: 'Gazetted Holiday',
        wing: 'All Wings',
      },
    ],
  },
  {
    monthIndex: 5,
    monthName: 'June',
    shortName: 'JUN',
    year: 2026,
    daysInMonth: 30,
    startDayOfWeek: 1, // Jun 1, 2026 is Monday
    workingDays: 21,
    events: [
      {
        day: 5,
        title: 'World Environment Day & 500-Sapling Green Umsning Plantation Drive',
        type: 'Event',
        categoryLabel: 'Eco Club Drive',
        wing: 'Classes VI – XII',
      },
      {
        day: 14,
        title: 'MBOSE SSLC Top 20 State Merit & ₹20,000 Scholarship Felicitation',
        type: 'Event',
        categoryLabel: 'State Merit Honour',
        wing: 'Entire School',
      },
      {
        day: 22,
        endDay: 26,
        title: 'Mid-Term Science, Computer & Geography Practical Assessments',
        type: 'Examination',
        categoryLabel: 'Lab Practicals',
        wing: 'Classes IX – XII',
      },
      {
        day: 26,
        title: 'Muharram Observance Holiday',
        type: 'Holiday',
        categoryLabel: 'Gazetted Holiday',
        wing: 'All Wings',
      },
    ],
  },
  {
    monthIndex: 6,
    monthName: 'July',
    shortName: 'JUL',
    year: 2026,
    daysInMonth: 31,
    startDayOfWeek: 3, // Jul 1, 2026 is Wednesday
    workingDays: 21,
    events: [
      {
        day: 6,
        endDay: 16,
        title: 'Half-Yearly / First Term Written Examinations',
        type: 'Examination',
        categoryLabel: 'Half-Yearly Exams',
        wing: 'Nursery – Class XII',
      },
      {
        day: 14,
        title: 'Behdeinkhlam Festival — Meghalaya State Holiday',
        type: 'Holiday',
        categoryLabel: 'State Holiday',
        wing: 'All Wings',
      },
      {
        day: 17,
        title: 'U Tirot Sing Day — State Tribute & Holiday',
        type: 'Holiday',
        categoryLabel: 'Meghalaya State Holiday',
        wing: 'All Wings',
      },
      {
        day: 25,
        title: 'Term I Parent–Teacher Interaction & Report Card Declaration',
        type: 'Event',
        categoryLabel: 'PTM & Results',
        wing: 'Nursery – Class XII',
      },
    ],
  },
  {
    monthIndex: 7,
    monthName: 'August',
    shortName: 'AUG',
    year: 2026,
    daysInMonth: 31,
    startDayOfWeek: 6, // Aug 1, 2026 is Saturday
    workingDays: 20,
    events: [
      {
        day: 10,
        endDay: 14,
        title: 'Second Unit Test / Continuous Evaluation (CCE Cycle II)',
        type: 'Examination',
        categoryLabel: 'Unit Test II',
        wing: 'Classes I – XII',
      },
      {
        day: 15,
        title: '80th Independence Day & Feast of the Assumption of Our Lady',
        type: 'Holiday',
        categoryLabel: 'National & Diocesan Holiday',
        wing: 'All Wings',
      },
      {
        day: 18,
        title: 'Nasha Mukt Yuva Poster Exhibition & Inter-House Debate',
        type: 'Event',
        categoryLabel: 'Youth Literary',
        wing: 'Classes VIII – XII',
      },
      {
        day: 26,
        title: 'Milad-un-Nabi / Id-e-Milad Holiday',
        type: 'Holiday',
        categoryLabel: 'Gazetted Holiday',
        wing: 'All Wings',
      },
    ],
  },
  {
    monthIndex: 8,
    monthName: 'September',
    shortName: 'SEP',
    year: 2026,
    daysInMonth: 30,
    startDayOfWeek: 2, // Sep 1, 2026 is Tuesday
    workingDays: 20,
    events: [
      {
        day: 4,
        title: 'Janmashtami Holiday',
        type: 'Holiday',
        categoryLabel: 'Public Holiday',
        wing: 'All Wings',
      },
      {
        day: 5,
        title: "Teachers' Day Celebration & Cultural Tribute by Students",
        type: 'Event',
        categoryLabel: 'Campus Celebration',
        wing: 'All Wings',
      },
      {
        day: 14,
        endDay: 24,
        title: 'Pre-Selection (X & XII) & Pre-Promotion (IX & XI) Examinations',
        type: 'Examination',
        categoryLabel: 'Pre-Board Exams',
        wing: 'Classes IX – XII',
      },
      {
        day: 29,
        title: "Feast of St. Michael the Archangel (Patron's Day) & Founder's Day",
        type: 'Holiday',
        categoryLabel: 'Patron Feast Holiday',
        wing: 'Entire School Community',
      },
    ],
  },
  {
    monthIndex: 9,
    monthName: 'October',
    shortName: 'OCT',
    year: 2026,
    daysInMonth: 31,
    startDayOfWeek: 4, // Oct 1, 2026 is Thursday
    workingDays: 17,
    events: [
      {
        day: 2,
        title: 'Mahatma Gandhi Jayanti — National Holiday',
        type: 'Holiday',
        categoryLabel: 'National Holiday',
        wing: 'All Wings',
      },
      {
        day: 11,
        title: '37th Memorial Day of Founder Rev. Fr. Michael Balawan, SDB',
        type: 'Event',
        categoryLabel: 'Founder Memorial',
        wing: 'All Wings',
      },
      {
        day: 16,
        title: 'Diocesan Youth Choral Festival & Multi-Part Hymn Showcase',
        type: 'Event',
        categoryLabel: 'Choral Festival',
        wing: 'School Choir',
      },
      {
        day: 19,
        endDay: 23,
        title: 'Durga Puja & Dussehra Autumn Festival Vacation',
        type: 'Holiday',
        categoryLabel: 'Festival Vacation',
        wing: 'All Wings',
      },
    ],
  },
  {
    monthIndex: 10,
    monthName: 'November',
    shortName: 'NOV',
    year: 2026,
    daysInMonth: 30,
    startDayOfWeek: 0, // Nov 1, 2026 is Sunday
    workingDays: 18,
    events: [
      {
        day: 2,
        title: "All Souls' Day — Diocesan Commemoration Holiday",
        type: 'Holiday',
        categoryLabel: 'Diocesan Holiday',
        wing: 'All Wings',
      },
      {
        day: 6,
        title: 'Wangala Festival (100 Drums Festival) — State Holiday',
        type: 'Holiday',
        categoryLabel: 'Meghalaya State Holiday',
        wing: 'All Wings',
      },
      {
        day: 10,
        endDay: 14,
        title: 'Annual 4-House Athletics Meet & 2,000-Student Synchronized Drill',
        type: 'Event',
        categoryLabel: 'Annual Sports Meet',
        wing: 'Blue, Green, Yellow & Red',
      },
      {
        day: 23,
        title: 'Seng Kut Snem — Traditional Khasi Festival Holiday',
        type: 'Holiday',
        categoryLabel: 'Meghalaya State Holiday',
        wing: 'All Wings',
      },
      {
        day: 24,
        endDay: 30,
        title: 'MBOSE Selection Exams (X & XII) & Annual Promotion Exams Begin',
        type: 'Examination',
        categoryLabel: 'Final / Selection Exams',
        wing: 'Nursery – Class XII',
      },
    ],
  },
  {
    monthIndex: 11,
    monthName: 'December',
    shortName: 'DEC',
    year: 2026,
    daysInMonth: 31,
    startDayOfWeek: 2, // Dec 1, 2026 is Tuesday
    workingDays: 13,
    events: [
      {
        day: 1,
        endDay: 5,
        title: 'Concluding Papers of Annual Promotion & Selection Examinations',
        type: 'Examination',
        categoryLabel: 'Annual Exams Conclude',
        wing: 'Nursery – Class XII',
      },
      {
        day: 12,
        title: 'Pa Togan Nengminja Sangma Day — State Holiday',
        type: 'Holiday',
        categoryLabel: 'Meghalaya State Holiday',
        wing: 'All Wings',
      },
      {
        day: 17,
        title: 'Annual Prize Distribution, Top 20 Merit Awards & Christmas Carols',
        type: 'Event',
        categoryLabel: 'Annual Honours & Carols',
        wing: 'Entire School',
      },
      {
        day: 18,
        title: 'Death Anniversary of U SoSo Tham — State Holiday',
        type: 'Holiday',
        categoryLabel: 'Meghalaya State Holiday',
        wing: 'All Wings',
      },
      {
        day: 19,
        endDay: 31,
        title: 'Christmas Festival & Annual Winter Vacation Begins',
        type: 'Holiday',
        categoryLabel: 'Winter Vacation',
        wing: 'All Campus Wings',
      },
    ],
  },
];

const OFFICIAL_HOLIDAY_TABLE = [
  { date: 'Jan 01, 2026', day: 'Thursday', occasion: "New Year's Day", category: 'Public / Diocesan Holiday', duration: '1 Day' },
  { date: 'Jan 02 – Jan 15, 2026', day: 'Fri – Thu', occasion: 'Annual Winter Recess', category: 'School Vacation', duration: '14 Days' },
  { date: 'Jan 26, 2026', day: 'Monday', occasion: 'Republic Day', category: 'National Holiday', duration: '1 Day' },
  { date: 'Mar 04, 2026', day: 'Wednesday', occasion: 'Holi / Doljatra', category: 'Gazetted Holiday', duration: '1 Day' },
  { date: 'Mar 21, 2026', day: 'Saturday', occasion: 'Id-ul-Fitr', category: 'Gazetted Holiday', duration: '1 Day' },
  { date: 'Apr 02 – Apr 06, 2026', day: 'Thu – Mon', occasion: 'Maundy Thursday, Good Friday, Easter & Shad Suk Mynsiem', category: 'Diocesan & State Holiday', duration: '5 Days' },
  { date: 'Apr 14, 2026', day: 'Tuesday', occasion: 'Dr. B.R. Ambedkar Jayanti', category: 'Public Holiday', duration: '1 Day' },
  { date: 'May 01, 2026', day: 'Friday', occasion: 'May Day / Feast of St. Joseph the Worker', category: 'State & Diocesan Holiday', duration: '1 Day' },
  { date: 'May 16, 2026', day: 'Saturday', occasion: 'Buddha Purnima', category: 'Gazetted Holiday', duration: '1 Day' },
  { date: 'May 28, 2026', day: 'Thursday', occasion: 'Id-ul-Zuha (Bakrid)', category: 'Gazetted Holiday', duration: '1 Day' },
  { date: 'Jun 26, 2026', day: 'Friday', occasion: 'Muharram', category: 'Gazetted Holiday', duration: '1 Day' },
  { date: 'Jul 14, 2026', day: 'Tuesday', occasion: 'Behdeinkhlam Festival', category: 'Meghalaya State Holiday', duration: '1 Day' },
  { date: 'Jul 17, 2026', day: 'Friday', occasion: 'U Tirot Sing Day', category: 'Meghalaya State Holiday', duration: '1 Day' },
  { date: 'Aug 15, 2026', day: 'Saturday', occasion: 'Independence Day & Feast of the Assumption', category: 'National & Diocesan Holiday', duration: '1 Day' },
  { date: 'Aug 26, 2026', day: 'Wednesday', occasion: 'Milad-un-Nabi', category: 'Gazetted Holiday', duration: '1 Day' },
  { date: 'Sep 04, 2026', day: 'Friday', occasion: 'Janmashtami', category: 'Gazetted Holiday', duration: '1 Day' },
  { date: 'Sep 29, 2026', day: 'Tuesday', occasion: "Feast of St. Michael the Archangel (Patron's Day)", category: 'Patron Feast Holiday', duration: '1 Day' },
  { date: 'Oct 02, 2026', day: 'Friday', occasion: 'Mahatma Gandhi Jayanti', category: 'National Holiday', duration: '1 Day' },
  { date: 'Oct 19 – Oct 23, 2026', day: 'Mon – Fri', occasion: 'Durga Puja & Dussehra Break', category: 'Festival Vacation', duration: '5 Days' },
  { date: 'Nov 02, 2026', day: 'Monday', occasion: "All Souls' Day", category: 'Diocesan Holiday', duration: '1 Day' },
  { date: 'Nov 06, 2026', day: 'Friday', occasion: 'Wangala Festival (100 Drums)', category: 'Meghalaya State Holiday', duration: '1 Day' },
  { date: 'Nov 23, 2026', day: 'Monday', occasion: 'Seng Kut Snem', category: 'Meghalaya State Holiday', duration: '1 Day' },
  { date: 'Dec 12, 2026', day: 'Saturday', occasion: 'Pa Togan Nengminja Sangma Day', category: 'Meghalaya State Holiday', duration: '1 Day' },
  { date: 'Dec 18, 2026', day: 'Friday', occasion: 'Death Anniversary of U SoSo Tham', category: 'Meghalaya State Holiday', duration: '1 Day' },
  { date: 'Dec 19 – Dec 31, 2026', day: 'Sat – Thu', occasion: 'Christmas & Winter Vacation', category: 'School Vacation', duration: '13+ Days' },
];

const DAILY_BELL_ROUTINE = [
  {
    time: '08:30 AM',
    tag: 'First Bell',
    title: 'Courtyard House Line Formation',
    detail: 'Students assemble in 4 Archangel House rows in the central amphitheatre.',
  },
  {
    time: '08:45 AM',
    tag: 'Assembly',
    title: 'Morning Prayer, School Hymn & Announcements',
    detail: 'Mandatory prayer, scripture reading, and school hymn in English & Khasi.',
  },
  {
    time: '09:00 AM – 11:15 AM',
    tag: 'Periods 1–3',
    title: 'Morning Core Academic & Laboratory Block',
    detail: 'Mathematics, Science, Languages, Humanities, Commerce & Lab Practicals.',
  },
  {
    time: '11:15 AM – 11:45 AM',
    tag: 'Recess',
    title: 'Morning Refreshment Interval',
    detail: 'Supervised courtyard recess and refreshment break.',
  },
  {
    time: '11:45 AM – 02:00 PM',
    tag: 'Periods 4–6',
    title: 'Midday Academic Block & Primary Dispersal (2:00 PM)',
    detail: 'Core classes, library reading, and 2:00 PM dispersal for Nursery to Class V.',
  },
  {
    time: '02:00 PM – 03:00 PM',
    tag: 'Periods 7–8',
    title: 'Senior Practicals, PT Drill & Final Dispersal (3:00 PM)',
    detail: 'Secondary & Higher Secondary lectures, synchronized drill, and NH-6 bus boarding.',
  },
];

const EXAM_PROMOTION_RULES = [
  {
    wing: 'Higher Secondary (Classes XI & XII)',
    exams: 'Class XI: Pre-Promotion & Promotion Exams • Class XII: Pre-Selection & Selection Exams',
    rule: 'Ranks up to the Top 20 are awarded only to students who pass in all subjects. Absence from any examination without prior medical certification is not permitted.',
  },
  {
    wing: 'Secondary Section (Classes VI – X)',
    exams: 'Half-Yearly / Pre-Selection & Selection / Promotion Examinations',
    rule: 'Continuous and Comprehensive Evaluation (CCE) combined with terminal written and science/computer practicals for MBOSE SSLC readiness.',
  },
  {
    wing: 'Primary Section (Nursery – Class V)',
    exams: 'First Term & Second (Annual) Term Examinations + Weekly Unit Tests',
    rule: 'Holistic assessment of English & Khasi literacy, numeracy, handwriting, oral recitation, and classroom conduct.',
  },
];

export const AcademicCalendarPage: React.FC<AcademicCalendarPageProps> = ({
  onBack,
  onNavigatePage,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<number | 'ALL'>('ALL');
  const [selectedType, setSelectedType] = useState<'All' | DayEventType>('All');

  const visibleMonths = useMemo(() => {
    if (selectedMonth === 'ALL') return FULL_YEAR_CALENDAR_2026;
    return FULL_YEAR_CALENDAR_2026.filter((m) => m.monthIndex === selectedMonth);
  }, [selectedMonth]);

  const getDayStatus = (month: MonthCalendarData, dayNum: number) => {
    for (const ev of month.events) {
      const start = ev.day;
      const end = ev.endDay ?? ev.day;
      if (dayNum >= start && dayNum <= end) {
        if (selectedType === 'All' || selectedType === ev.type) {
          return ev;
        }
      }
    }
    return null;
  };

  return (
    <section
      id="academic-calendar-page"
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
            <span className="text-[#0c4a8a]">Academics</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">12-Month Academic Calendar &amp; Holiday List 2026–27</span>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100 cursor-pointer"
          >
            <i className="fas fa-print text-[#d97706]" aria-hidden="true"></i>
            <span>Print / Save PDF Calendar</span>
          </button>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-calendar-alt mr-1.5" aria-hidden="true"></i>
                  MBOSE Academic Session 2026–27 • All 12 Months
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-clock mr-1.5" aria-hidden="true"></i>
                  Mon – Fri • 8:45 AM – 3:00 PM
                </span>
              </div>

              <h1
                className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
                style={{ color: '#ffffff' }}
              >
                Academic Calendar &amp; Holiday List
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Complete 12-month visual calendar (January to December) displaying all working days,
                Sundays, Meghalaya state &amp; diocesan holidays, MBOSE unit tests, half-yearly,
                Pre-Selection &amp; Selection examinations, and campus celebrations at{' '}
                <strong>{SCHOOL_INFO.name}, Umsning</strong>.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="#holiday-list"
                className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <i className="fas fa-umbrella-beach" aria-hidden="true"></i>
                <span>Full Holiday Table</span>
              </a>
              {onNavigatePage && (
                <button
                  type="button"
                  onClick={() => onNavigatePage('notices')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <i className="fas fa-bullhorn text-amber-300" aria-hidden="true"></i>
                  <span>Exam Circulars</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Month Selector & Color Legend Bar */}
        <div
          id="monthly-calendar-grid"
          className="mt-8 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="vision-serif-heading text-xl sm:text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                All 12 Months Calendar &amp; Holidays (Jan – Dec 2026)
              </h2>
              <p className="mt-0.5 text-xs font-medium text-slate-600">
                Select any month below or view all 12 months with color-coded holidays, exams, and school events.
              </p>
            </div>

            {/* Color Legend */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose-50 border border-rose-200 px-2.5 py-1 text-rose-700">
                <span className="h-3 w-3 rounded-full bg-rose-600 inline-block" />
                Holiday / Feast Day
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-[#0c4a8a]">
                <span className="h-3 w-3 rounded-full bg-[#0c4a8a] inline-block" />
                Examination
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 border border-amber-200 px-2.5 py-1 text-amber-900">
                <span className="h-3 w-3 rounded-full bg-[#d97706] inline-block" />
                School Event
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-emerald-800">
                <span className="h-3 w-3 rounded-full bg-emerald-600 inline-block" />
                Admissions / Session
              </span>
            </div>
          </div>

          {/* Month Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedMonth('ALL')}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedMonth === 'ALL'
                    ? 'bg-[#0c4a8a] text-white shadow-sm'
                    : 'border border-slate-200 bg-slate-50 text-[#0c4a8a] hover:bg-blue-50'
                }`}
              >
                All 12 Months
              </button>
              {FULL_YEAR_CALENDAR_2026.map((m) => (
                <button
                  key={m.shortName}
                  type="button"
                  onClick={() => setSelectedMonth(m.monthIndex)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedMonth === m.monthIndex
                      ? 'bg-[#d97706] text-white shadow-sm'
                      : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-amber-50 hover:text-[#0c4a8a]'
                  }`}
                >
                  {m.shortName}
                </button>
              ))}
            </div>

            {/* Category Highlight Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(['All', 'Holiday', 'Examination', 'Event', 'Admission'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedType === type
                      ? 'bg-slate-900 text-amber-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type === 'All' ? 'All Types' : `${type}s`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 12-Month Visual Calendar Grid */}
        <div
          className={`mt-6 grid gap-6 ${
            visibleMonths.length === 1
              ? 'grid-cols-1 max-w-2xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
          }`}
        >
          {visibleMonths.map((month) => {
            const blanks = Array.from({ length: month.startDayOfWeek }, (_, i) => i);
            const days = Array.from({ length: month.daysInMonth }, (_, i) => i + 1);
            const filteredEvents = month.events.filter(
              (ev) => selectedType === 'All' || ev.type === selectedType
            );
            const holidayCount = month.events.filter((ev) => ev.type === 'Holiday').length;

            return (
              <div
                key={month.monthName}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-lg"
              >
                <div>
                  {/* Month Top Header */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-[#0c2d57] to-[#0c4a8a] px-5 py-3.5 text-white border-b-2 border-[#d97706]">
                    <div>
                      <h3 className="text-lg font-extrabold tracking-wide !text-white" style={{ color: '#ffffff' }}>
                        {month.monthName} {month.year}
                      </h3>
                      <span className="text-[11px] font-semibold text-amber-200">
                        Working Days: {month.workingDays} • Holidays/Breaks: {holidayCount}
                      </span>
                    </div>
                    <span className="rounded-lg bg-white/15 border border-white/25 px-2.5 py-1 text-xs font-black tracking-widest text-amber-300">
                      {month.shortName}
                    </span>
                  </div>

                  {/* 7-Column Weekday Header */}
                  <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 px-3 py-2 text-center text-[10px] font-extrabold uppercase tracking-wider">
                    {WEEKDAYS.map((dayLabel, idx) => (
                      <div
                        key={dayLabel}
                        className={idx === 0 ? 'text-rose-600' : 'text-[#0c4a8a]'}
                      >
                        {dayLabel}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Dates Grid */}
                  <div className="grid grid-cols-7 gap-1 p-3 text-center">
                    {blanks.map((b) => (
                      <div key={`blank-${b}`} className="h-8" />
                    ))}
                    {days.map((dayNum) => {
                      const dayOfWeek = (month.startDayOfWeek + dayNum - 1) % 7;
                      const isSunday = dayOfWeek === 0;
                      const isSaturday = dayOfWeek === 6;
                      const ev = getDayStatus(month, dayNum);

                      let cellClass = 'text-slate-700 hover:bg-slate-100';
                      if (ev) {
                        if (ev.type === 'Holiday') {
                          cellClass = 'bg-rose-600 text-white font-extrabold shadow-xs';
                        } else if (ev.type === 'Examination') {
                          cellClass = 'bg-[#0c4a8a] text-white font-extrabold shadow-xs';
                        } else if (ev.type === 'Event') {
                          cellClass = 'bg-[#d97706] text-white font-extrabold shadow-xs';
                        } else if (ev.type === 'Admission') {
                          cellClass = 'bg-emerald-600 text-white font-extrabold shadow-xs';
                        }
                      } else if (isSunday) {
                        cellClass = 'bg-rose-50/80 text-rose-600 font-bold';
                      } else if (isSaturday) {
                        cellClass = 'bg-slate-50 text-slate-500 font-semibold';
                      }

                      return (
                        <div
                          key={dayNum}
                          title={ev ? `${month.shortName} ${dayNum}: ${ev.title}` : isSunday ? 'Sunday (Weekly Off)' : undefined}
                          className={`relative flex h-8 items-center justify-center rounded-lg text-xs transition-colors ${cellClass}`}
                        >
                          <span>{dayNum}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Month Events & Holidays List Footer */}
                <div className="border-t border-slate-200 bg-[#f8fafc] p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      {month.monthName} Schedule &amp; Holidays
                    </span>
                    <span className="text-[10px] font-bold text-[#0c4a8a]">
                      {filteredEvents.length} {filteredEvents.length === 1 ? 'Entry' : 'Entries'}
                    </span>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {filteredEvents.map((ev, i) => {
                      const badgeColors =
                        ev.type === 'Holiday'
                          ? 'bg-rose-100 text-rose-800 border-rose-300'
                          : ev.type === 'Examination'
                            ? 'bg-blue-100 text-[#0c4a8a] border-blue-300'
                            : ev.type === 'Event'
                              ? 'bg-amber-100 text-amber-900 border-amber-300'
                              : 'bg-emerald-100 text-emerald-900 border-emerald-300';

                      const dateText = ev.endDay
                        ? `${month.shortName} ${String(ev.day).padStart(2, '0')}–${String(ev.endDay).padStart(2, '0')}`
                        : `${month.shortName} ${String(ev.day).padStart(2, '0')}`;

                      return (
                        <div
                          key={`${month.shortName}-${ev.day}-${i}`}
                          className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs"
                        >
                          <span
                            className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-extrabold uppercase ${badgeColors}`}
                          >
                            {dateText}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold leading-snug text-slate-800">
                              {ev.title}
                            </p>
                            <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-slate-500">
                              <span className="text-[#d97706]">{ev.categoryLabel}</span>
                              {ev.wing && (
                                <>
                                  <span>•</span>
                                  <span>{ev.wing}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete Official Holiday & Feast Day List Table */}
        <div
          id="holiday-list"
          className="mt-12 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-rose-800">
                <i className="fas fa-calendar-times mr-1.5 text-rose-600" aria-hidden="true"></i>
                Official MBOSE, State &amp; Diocesan Holidays 2026–27
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Complete Annual Holiday &amp; Vacation List
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-600">
              Sundays &amp; Gazetted Holidays Closed • {SCHOOL_INFO.shortName}
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0c4a8a] text-white">
                  <th className="rounded-tl-xl px-4 py-3 font-extrabold uppercase tracking-wider">
                    Date(s)
                  </th>
                  <th className="px-4 py-3 font-extrabold uppercase tracking-wider">Day</th>
                  <th className="px-4 py-3 font-extrabold uppercase tracking-wider">
                    Holiday / Feast Day / Vacation
                  </th>
                  <th className="px-4 py-3 font-extrabold uppercase tracking-wider">Category</th>
                  <th className="rounded-tr-xl px-4 py-3 font-extrabold uppercase tracking-wider">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {OFFICIAL_HOLIDAY_TABLE.map((row, idx) => (
                  <tr
                    key={row.date}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}
                  >
                    <td className="px-4 py-3 font-extrabold text-[#0c4a8a] whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-600 whitespace-nowrap">
                      {row.day}
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800">{row.occasion}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block rounded-full bg-rose-50 border border-rose-200 px-2.5 py-0.5 text-[11px] font-bold text-rose-800">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-extrabold text-[#d97706] whitespace-nowrap">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Daily Campus Bell Schedule & Official Diary Examination System */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left 7 Columns: Daily Bell Routine */}
          <div
            id="bell-schedule"
            className="lg:col-span-7 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
              <div>
                <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                  <i className="fas fa-bell mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Monday to Friday Routine
                </span>
                <h2 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a]">
                  <span className="vision-double-angle" aria-hidden="true">
                    &raquo;
                  </span>{' '}
                  Daily Campus Bell Schedule
                </h2>
              </div>
              <span className="rounded-lg bg-[#0c4a8a] px-3 py-1 text-xs font-extrabold text-white">
                8:30 AM – 3:00 PM
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {DAILY_BELL_ROUTINE.map((slot) => (
                <div
                  key={slot.time}
                  className="flex flex-col justify-between gap-2 rounded-xl border border-slate-200 bg-[#f8fafc] p-4 sm:flex-row sm:items-center"
                >
                  <div className="sm:w-44 shrink-0">
                    <span className="inline-block rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold uppercase text-amber-900">
                      {slot.tag}
                    </span>
                    <strong className="mt-1 block text-xs sm:text-sm font-extrabold text-[#0c4a8a]">
                      {slot.time}
                    </strong>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-extrabold text-[#0c2d57]">{slot.title}</h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-600">{slot.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Official Examination & Promotion System */}
          <div id="exam-rules" className="lg:col-span-5 scroll-mt-28 space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7">
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                <i className="fas fa-award mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                School Diary Examination Rules
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Annual Examination System
              </h2>

              <div className="mt-5 space-y-4">
                {EXAM_PROMOTION_RULES.map((item) => (
                  <div
                    key={item.wing}
                    className="rounded-xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-[#f8fafc] p-4"
                  >
                    <h3 className="text-sm font-extrabold text-[#0c4a8a]">{item.wing}</h3>
                    <p className="mt-1 text-xs font-bold text-[#d97706]">{item.exams}</p>
                    <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-700">
                      {item.rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-[#0c2d57] p-6 text-white shadow-md">
              <span className="inline-block rounded-md bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                Weekly Uniform Schedule
              </span>
              <h3 className="mt-2 text-lg font-extrabold !text-white" style={{ color: '#ffffff' }}>
                Regular Uniform &amp; House Track-Suits
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-200">
                <strong>Monday, Tuesday &amp; Thursday:</strong> Prescribed Regular School Uniform.
                <br />
                <strong>Wednesday &amp; Friday:</strong> Prescribed House Track-Suit with Team
                T-Shirt and white shoes/canvas.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Official MBOSE Academic Calendar &amp; Holiday List 2026–27 • School Code: {SCHOOL_INFO.schoolCode}
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
