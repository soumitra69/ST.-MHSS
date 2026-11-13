import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface NavLinkItem {
  label: string;
  href: string;
  icon: string;
  page?: AppPageId;
  sectionId?: string;
  subMenu?: NavLinkItem[];
}

interface PrimaryNavLinkItem extends NavLinkItem {
  hasDropdown: boolean;
  alignRight?: boolean;
  subItems?: NavLinkItem[];
}

const secondaryLinks: NavLinkItem[] = [
  { label: 'NOTICES', href: '#page-notices', icon: 'fas fa-bullhorn', page: 'notices' },
  {
    label: 'STATE HONORS',
    href: '#page-results-achievements',
    icon: 'fas fa-trophy',
    page: 'results-achievements',
  },
  {
    label: 'HR. SEC STREAMS',
    href: '#page-academic-syllabus',
    icon: 'fas fa-graduation-cap',
    page: 'academic-syllabus',
    sectionId: 'classes-subjects',
  },
  {
    label: 'ACADEMIC CALENDAR',
    href: '#page-academic-calendar',
    icon: 'fas fa-calendar-alt',
    page: 'academic-calendar',
  },
  {
    label: 'CONTACT',
    href: '#page-contact',
    icon: 'fas fa-phone-alt',
    page: 'contact',
  },
];

// Matches the exact 6-item primary navbar layout from https://github.com/soumitra69/ST.-MHSS.git
// while organizing all Documentation redirect pages & 2nd-level flyout sub-menus with FontAwesome icons
const primaryLinks: PrimaryNavLinkItem[] = [
  {
    label: 'ABOUT',
    href: '#page-who-we-are',
    icon: 'fas fa-landmark',
    page: 'who-we-are',
    hasDropdown: true,
    subItems: [
      {
        label: 'Who We Are (Estd. 1961)',
        href: '#page-who-we-are',
        icon: 'fas fa-school',
        page: 'who-we-are',
        subMenu: [
          {
            label: 'Establishment, Registration & UDISE+',
            href: '#page-who-we-are',
            icon: 'fas fa-certificate',
            page: 'who-we-are',
            sectionId: 'registration-udise',
          },
          {
            label: 'School History & 65-Year Journey',
            href: '#page-who-we-are',
            icon: 'fas fa-history',
            page: 'who-we-are',
            sectionId: 'history-timeline',
          },
          {
            label: 'School Category & Three Wings',
            href: '#page-who-we-are',
            icon: 'fas fa-layer-group',
            page: 'who-we-are',
            sectionId: 'wings-structure',
          },
          {
            label: 'Complete Address & Official Contact',
            href: '#page-who-we-are',
            icon: 'fas fa-map-marker-alt',
            page: 'who-we-are',
            sectionId: 'address-contact',
          },
        ],
      },
      {
        label: 'Mission, Vision & Objectives',
        href: '#page-mission-vision',
        icon: 'fas fa-bullseye',
        page: 'mission-vision',
        subMenu: [
          {
            label: 'Institutional Mission',
            href: '#page-mission-vision',
            icon: 'fas fa-bullseye',
            page: 'mission-vision',
            sectionId: 'mission',
          },
          {
            label: 'Institutional Vision',
            href: '#page-mission-vision',
            icon: 'fas fa-eye',
            page: 'mission-vision',
            sectionId: 'vision',
          },
          {
            label: 'Seven Core Educational Objectives',
            href: '#page-mission-vision',
            icon: 'fas fa-list-check',
            page: 'mission-vision',
            sectionId: 'objectives',
          },
          {
            label: 'Four Archangel Houses',
            href: '#page-mission-vision',
            icon: 'fas fa-shield-alt',
            page: 'mission-vision',
            sectionId: 'houses',
          },
        ],
      },
      {
        label: 'Founder’s Profile (Fr. Michael Balawan)',
        href: '#page-founder',
        icon: 'fas fa-cross',
        page: 'founder',
      },
      {
        label: 'Leadership & Administration Messages',
        href: '#page-leadership',
        icon: 'fas fa-user-tie',
        page: 'leadership',
        subMenu: [
          {
            label: 'Secretary & Vice Principal’s Message',
            href: '#page-leadership',
            icon: 'fas fa-user-shield',
            page: 'leadership',
            sectionId: 'sec-vp-msg',
          },
          {
            label: 'Principal’s Message',
            href: '#page-leadership',
            icon: 'fas fa-user-tie',
            page: 'leadership',
            sectionId: 'principal-msg',
          },
          {
            label: 'Headmistress – Secondary Section',
            href: '#page-leadership',
            icon: 'fas fa-chalkboard-teacher',
            page: 'leadership',
            sectionId: 'hm-sec-msg',
          },
          {
            label: 'Headmistress – LP Section',
            href: '#page-leadership',
            icon: 'fas fa-child',
            page: 'leadership',
            sectionId: 'hm-lp-msg',
          },
        ],
      },
      {
        label: 'Student Statistics & School Strength',
        href: '#page-student-stats',
        icon: 'fas fa-chart-pie',
        page: 'student-stats',
        subMenu: [
          {
            label: 'Total Students, Boys & Girls Ratio',
            href: '#page-student-stats',
            icon: 'fas fa-users',
            page: 'student-stats',
            sectionId: 'enrolment-gender',
          },
          {
            label: 'Classrooms, Sections & Wing Census',
            href: '#page-student-stats',
            icon: 'fas fa-door-open',
            page: 'student-stats',
            sectionId: 'classrooms-sections',
          },
          {
            label: 'Admissions, Pass-Out & Alumni Stats',
            href: '#page-student-stats',
            icon: 'fas fa-user-graduate',
            page: 'student-stats',
            sectionId: 'admissions-passout-stats',
          },
        ],
      },
      {
        label: 'Teaching & Non-Teaching Staff',
        href: '#page-staff-directory',
        icon: 'fas fa-users-cog',
        page: 'staff-directory',
        subMenu: [
          {
            label: 'Principal, Vice-Principal & Headmistresses',
            href: '#page-staff-directory',
            icon: 'fas fa-user-tie',
            page: 'staff-directory',
            sectionId: 'leadership-staff',
          },
          {
            label: 'Teaching Staff & Subject Specialization',
            href: '#page-staff-directory',
            icon: 'fas fa-chalkboard-teacher',
            page: 'staff-directory',
            sectionId: 'teaching-staff',
          },
          {
            label: 'Non-Teaching & Administrative Staff',
            href: '#page-staff-directory',
            icon: 'fas fa-id-badge',
            page: 'staff-directory',
            sectionId: 'non-teaching-staff',
          },
          {
            label: 'Accountant, Librarian & Lab Assistants',
            href: '#page-staff-directory',
            icon: 'fas fa-flask',
            page: 'staff-directory',
            sectionId: 'support-lab-staff',
          },
        ],
      },
    ],
  },
  {
    label: 'ADMISSION',
    href: '#page-admissions-fees',
    icon: 'fas fa-user-plus',
    page: 'admissions-fees',
    hasDropdown: true,
    subItems: [
      {
        label: 'Admission Details & Procedure',
        href: '#page-admissions-fees',
        icon: 'fas fa-file-signature',
        page: 'admissions-fees',
        subMenu: [
          {
            label: 'Step-by-Step Admission Procedure',
            href: '#page-admissions-fees',
            icon: 'fas fa-clipboard-list',
            page: 'admissions-fees',
            sectionId: 'admission-procedure',
          },
          {
            label: 'Required Documents & TC Rules',
            href: '#page-admissions-fees',
            icon: 'fas fa-folder-open',
            page: 'admissions-fees',
            sectionId: 'admission-documents',
          },
          {
            label: 'Class XI Stream Eligibility (Arts/Sci/Comm)',
            href: '#page-admissions-fees',
            icon: 'fas fa-graduation-cap',
            page: 'admissions-fees',
            sectionId: 'hs-stream-admission',
          },
        ],
      },
      {
        label: 'Official Fee Structure (2026–27)',
        href: '#page-fee-structure',
        icon: 'fas fa-file-invoice-dollar',
        page: 'fee-structure-page',
        subMenu: [
          {
            label: 'Arts, Commerce & Science Fee Packages',
            href: '#page-fee-structure',
            icon: 'fas fa-graduation-cap',
            page: 'fee-structure-page',
          },
          {
            label: 'Vocational: Computer Technique & Poultry',
            href: '#page-fee-structure',
            icon: 'fas fa-laptop-code',
            page: 'fee-structure-page',
          },
          {
            label: 'Installment Schedules (1st & 2nd)',
            href: '#page-fee-structure',
            icon: 'fas fa-calendar-check',
            page: 'fee-structure-page',
          },
          {
            label: 'Class-Wise Fee Breakdown (Nursery – XII)',
            href: '#page-admissions-fees',
            icon: 'fas fa-table',
            page: 'admissions-fees',
            sectionId: 'fee-structure',
          },
        ],
      },
    ],
  },
  {
    label: 'ACADEMICS',
    href: '#page-academic-syllabus',
    icon: 'fas fa-book-open',
    page: 'academic-syllabus',
    hasDropdown: true,
    subItems: [
      {
        label: 'Academic Information & Syllabus',
        href: '#page-academic-syllabus',
        icon: 'fas fa-layer-group',
        page: 'academic-syllabus',
        subMenu: [
          {
            label: 'Classes & Subjects Offered (Nursery – XII)',
            href: '#page-academic-syllabus',
            icon: 'fas fa-book',
            page: 'academic-syllabus',
            sectionId: 'classes-subjects',
          },
          {
            label: 'Academic Session Details',
            href: '#page-academic-syllabus',
            icon: 'fas fa-clock',
            page: 'academic-syllabus',
            sectionId: 'session-details',
          },
          {
            label: 'Class-Wise & Subject-Wise Syllabus',
            href: '#page-academic-syllabus',
            icon: 'fas fa-file-alt',
            page: 'academic-syllabus',
            sectionId: 'class-syllabus',
          },
        ],
      },
      {
        label: 'Examination Pattern & Schedules',
        href: '#page-academic-syllabus',
        icon: 'fas fa-clipboard-check',
        page: 'academic-syllabus',
        sectionId: 'exam-pattern',
        subMenu: [
          {
            label: 'Examination Pattern & Assessment Details',
            href: '#page-academic-syllabus',
            icon: 'fas fa-tasks',
            page: 'academic-syllabus',
            sectionId: 'exam-pattern',
          },
          {
            label: 'Unit Test, Half-Yearly & Annual Schedules',
            href: '#page-academic-syllabus',
            icon: 'fas fa-calendar-week',
            page: 'academic-syllabus',
            sectionId: 'exam-schedules',
          },
          {
            label: 'Practical Examination Schedules',
            href: '#page-academic-syllabus',
            icon: 'fas fa-microscope',
            page: 'academic-syllabus',
            sectionId: 'practical-schedules',
          },
        ],
      },
      {
        label: 'Academic Calendar & Holiday List',
        href: '#page-academic-calendar',
        icon: 'fas fa-calendar-alt',
        page: 'academic-calendar',
        subMenu: [
          {
            label: 'All 12 Months Calendar (Jan – Dec)',
            href: '#page-academic-calendar',
            icon: 'fas fa-th',
            page: 'academic-calendar',
            sectionId: 'monthly-calendar-grid',
          },
          {
            label: 'Complete Annual Holiday & Feast List',
            href: '#page-academic-calendar',
            icon: 'fas fa-umbrella-beach',
            page: 'academic-calendar',
            sectionId: 'holiday-list',
          },
          {
            label: 'Daily Campus Bell Schedule',
            href: '#page-academic-calendar',
            icon: 'fas fa-bell',
            page: 'academic-calendar',
            sectionId: 'bell-schedule',
          },
        ],
      },
    ],
  },
  {
    label: 'CAMPUS LIFE',
    href: '#page-transportation',
    icon: 'fas fa-futbol',
    page: 'transportation',
    hasDropdown: true,
    subItems: [
      {
        label: 'Transportation & NH-6 Bus Routes',
        href: '#page-transportation',
        icon: 'fas fa-bus',
        page: 'transportation',
        subMenu: [
          {
            label: 'NH-6 School Bus Routes (Routes 1 – 4)',
            href: '#page-transportation',
            icon: 'fas fa-route',
            page: 'transportation',
            sectionId: 'bus-routes-grid',
          },
          {
            label: 'Pickup, Dispersal Timings & Contacts',
            href: '#page-transportation',
            icon: 'fas fa-clock',
            page: 'transportation',
            sectionId: 'bus-timings-table',
          },
          {
            label: 'Transport Safety & Bus Rules',
            href: '#page-transportation',
            icon: 'fas fa-shield-alt',
            page: 'transportation',
            sectionId: 'transport-rules',
          },
        ],
      },
      {
        label: 'Scholarships & Student Welfare',
        href: '#page-scholarships',
        icon: 'fas fa-heartbeat',
        page: 'scholarships',
        subMenu: [
          {
            label: '₹20,000 SSLC Merit Scholarship Endowment',
            href: '#page-scholarships',
            icon: 'fas fa-award',
            page: 'scholarships',
            sectionId: 'merit-endowment',
          },
          {
            label: 'Tribal, State & Diocesan Freeships',
            href: '#page-scholarships',
            icon: 'fas fa-hand-holding-usd',
            page: 'scholarships',
            sectionId: 'government-scholarships',
          },
          {
            label: 'Counseling, Remedial & Infirmary Care',
            href: '#page-scholarships',
            icon: 'fas fa-user-md',
            page: 'scholarships',
            sectionId: 'student-welfare',
          },
        ],
      },
      {
        label: 'Alumni & Community Outreach',
        href: '#page-alumni',
        icon: 'fas fa-users',
        page: 'alumni',
        subMenu: [
          {
            label: 'Michaelian Alumni Network (8,500+)',
            href: '#page-alumni',
            icon: 'fas fa-user-graduate',
            page: 'alumni',
            sectionId: 'alumni-overview',
          },
          {
            label: 'Distinguished Alumni Voices',
            href: '#page-alumni',
            icon: 'fas fa-quote-left',
            page: 'alumni',
            sectionId: 'alumni-testimonials',
          },
          {
            label: 'Community & Eco-Social Outreach',
            href: '#page-alumni',
            icon: 'fas fa-seedling',
            page: 'alumni',
            sectionId: 'community-outreach',
          },
        ],
      },
      {
        label: "Girls' Hostel",
        href: '#page-girls-hostel',
        icon: 'fas fa-home',
        page: 'girls-hostel',
        subMenu: [
          {
            label: 'Hostel Facilities & Amenities',
            href: '#page-girls-hostel',
            icon: 'fas fa-bed',
            page: 'girls-hostel',
            sectionId: 'hostel-facilities',
          },
          {
            label: 'Room Types & Dormitory Layout',
            href: '#page-girls-hostel',
            icon: 'fas fa-door-open',
            page: 'girls-hostel',
            sectionId: 'room-types',
          },
          {
            label: 'Meals, Schedule & Daily Routine',
            href: '#page-girls-hostel',
            icon: 'fas fa-utensils',
            page: 'girls-hostel',
            sectionId: 'meals-schedule',
          },
          {
            label: 'Admission & Contact',
            href: '#page-girls-hostel',
            icon: 'fas fa-phone-alt',
            page: 'girls-hostel',
            sectionId: 'hostel-contact',
          },
        ],
      },
      {
        label: 'School Events & Celebrations',
        href: '#page-events',
        icon: 'fas fa-calendar-check',
        page: 'events',
        subMenu: [
          {
            label: 'Campus Events & Celebrations Archive',
            href: '#page-events',
            icon: 'fas fa-star',
            page: 'events',
            sectionId: 'events-grid',
          },
          {
            label: 'Seminars, Sports & Social Outreach',
            href: '#page-events',
            icon: 'fas fa-running',
            page: 'events',
            sectionId: 'events-filter-bar',
          },
        ],
      },
    ],
  },
  {
    label: 'HONORS',
    href: '#page-results-achievements',
    icon: 'fas fa-medal',
    page: 'results-achievements',
    hasDropdown: true,
    alignRight: true,
    subItems: [
      {
        label: 'Results & Academic Achievements',
        href: '#page-results-achievements',
        icon: 'fas fa-trophy',
        page: 'results-achievements',
        subMenu: [
          {
            label: 'Class 10 (SSLC) & Class 12 (HSSLC) Results',
            href: '#page-results-achievements',
            icon: 'fas fa-poll',
            page: 'results-achievements',
            sectionId: 'board-results',
          },
          {
            label: 'Overall Pass Percentage & Appeared/Passed',
            href: '#page-results-achievements',
            icon: 'fas fa-chart-line',
            page: 'results-achievements',
            sectionId: 'pass-percentage',
          },
          {
            label: 'Highest Marks & School Toppers',
            href: '#page-results-achievements',
            icon: 'fas fa-crown',
            page: 'results-achievements',
            sectionId: 'school-toppers',
          },
          {
            label: 'Scholarship Recipients & Academic Awards',
            href: '#page-results-achievements',
            icon: 'fas fa-award',
            page: 'results-achievements',
            sectionId: 'scholarship-awards',
          },
          {
            label: 'Sports, Cultural & Olympiad Achievements',
            href: '#page-results-achievements',
            icon: 'fas fa-medal',
            page: 'results-achievements',
            sectionId: 'sports-cultural-achievements',
          },
        ],
      },
      {
        label: 'Notice Board & Announcements (PDF)',
        href: '#page-notices',
        icon: 'fas fa-bullhorn',
        page: 'notices',
        subMenu: [
          {
            label: 'Official Digital Circulars & PDF Downloads',
            href: '#page-notices',
            icon: 'fas fa-file-pdf',
            page: 'notices',
            sectionId: 'notices-grid',
          },
          {
            label: 'Filter by Examination, Admission & Holiday',
            href: '#page-notices',
            icon: 'fas fa-filter',
            page: 'notices',
            sectionId: 'notices-filter-bar',
          },
        ],
      },
      {
        label: 'Academic Calendar & Holidays',
        href: '#page-academic-calendar',
        icon: 'fas fa-calendar-alt',
        page: 'academic-calendar',
      },
    ],
  },
  {
    label: 'GALLERY',
    href: '#page-gallery',
    icon: 'fas fa-images',
    page: 'gallery',
    hasDropdown: true,
    alignRight: true,
    subItems: [
      {
        label: 'School Gallery & Media Archive',
        href: '#page-gallery',
        icon: 'fas fa-camera-retro',
        page: 'gallery',
        subMenu: [
          {
            label: 'All Campus & Morning Assembly Photos',
            href: '#page-gallery',
            icon: 'fas fa-images',
            page: 'gallery',
            sectionId: 'gallery-grid',
          },
          {
            label: 'Category Filter (Toppers, Sports, Culture, Eco)',
            href: '#page-gallery',
            icon: 'fas fa-sliders-h',
            page: 'gallery',
            sectionId: 'gallery-filter-bar',
          },
        ],
      },
      {
        label: "Girls' Hostel",
        href: '#page-girls-hostel',
        icon: 'fas fa-home',
        page: 'girls-hostel',
        subMenu: [
          {
            label: 'Hostel Facilities & Amenities',
            href: '#page-girls-hostel',
            icon: 'fas fa-bed',
            page: 'girls-hostel',
            sectionId: 'hostel-facilities',
          },
          {
            label: 'Room Types & Dormitory Layout',
            href: '#page-girls-hostel',
            icon: 'fas fa-door-open',
            page: 'girls-hostel',
            sectionId: 'room-types',
          },
          {
            label: 'Meals, Schedule & Daily Routine',
            href: '#page-girls-hostel',
            icon: 'fas fa-utensils',
            page: 'girls-hostel',
            sectionId: 'meals-schedule',
          },
          {
            label: 'Admission & Contact',
            href: '#page-girls-hostel',
            icon: 'fas fa-phone-alt',
            page: 'girls-hostel',
            sectionId: 'hostel-contact',
          },
        ],
      },
      {
        label: 'School Events & Celebrations',
        href: '#page-events',
        icon: 'fas fa-calendar-check',
        page: 'events',
        subMenu: [
          {
            label: 'Campus Events & Celebrations Archive',
            href: '#page-events',
            icon: 'fas fa-star',
            page: 'events',
            sectionId: 'events-grid',
          },
          {
            label: 'Seminars, Sports & Social Outreach',
            href: '#page-events',
            icon: 'fas fa-users',
            page: 'events',
            sectionId: 'events-filter-bar',
          },
        ],
      },
    ],
  },
];

interface NavbarProps {
  onApplyClick: () => void;
  onOpenSearch?: () => void;
  activePage?: AppPageId;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onApplyClick,
  activePage = 'home',
  onNavigatePage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);
  const [expandedMobileSubGroup, setExpandedMobileSubGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [studentDob, setStudentDob] = useState('');
  const [loginFeedback, setLoginFeedback] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkActivate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavLinkItem
  ) => {
    setMobileMenuOpen(false);
    if (onNavigatePage && item.page) {
      e.preventDefault();
      onNavigatePage(item.page, item.sectionId);
    }
  };

  const handleHomeLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (onNavigatePage) {
      e.preventDefault();
      onNavigatePage('home');
    }
  };

  const handleStudentLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim() || !studentDob.trim()) return;
    setLoginFeedback(
      `Verification initiated for Student ID "${studentId.trim().toUpperCase()}". Please contact the School Secretariat (${SCHOOL_INFO.phoneMobile}) for your 2026–27 portal PIN.`
    );
  };

  return (
    <div className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-nav">
            <a href="#about" className="logo-section" onClick={handleHomeLogoClick}>
              <div className="logo-placeholder">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="St. Michael's Higher Secondary School Crest"
                  width="64"
                  height="64"
                  decoding="async"
                />
              </div>
              <div className="university-name">
                <h1>ST. MICHAEL&apos;S HR. SEC. SCHOOL</h1>
                <p>Umsning, Ri Bhoi District, Meghalaya • Estd. 1961</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="primary-secondery-nav desktop-only">
              <div className="secondary-nav">
                <div className="secondary-nav-content">
                  {secondaryLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`sec-nav-link ${
                        item.page && item.page !== 'home' && activePage === item.page
                          ? 'text-[#ea580c] underline decoration-2 underline-offset-4'
                          : ''
                      }`}
                      onClick={(e) => handleLinkActivate(e, item)}
                    >
                      <i
                        className={`${item.icon} mr-1.5 text-[11px] text-[#ea580c]`}
                        aria-hidden="true"
                      ></i>
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#why-us"
                    onClick={handleHomeLogoClick}
                    className="umoid-box"
                    title="Umsning Campus • MBOSE Affiliated"
                  >
                    <img
                      src={SCHOOL_INFO.logo}
                      alt=""
                      width="18"
                      height="18"
                      className="umoid-logo-badge"
                    />
                    <span>UMSNING • 1961</span>
                  </a>
                </div>
              </div>

              <nav className="primary-nav" aria-label="Primary Navigation">
                {primaryLinks.map((item) => (
                  <div key={item.label} className="nav-item-wrapper">
                    <a
                      href={item.href}
                      className="primary-nav-link"
                      onClick={(e) => handleLinkActivate(e, item)}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                      )}
                    </a>

                    {item.hasDropdown && (
                      <div className="dropdown-menu">
                        {item.subItems?.map((sub) => (
                          <div
                            key={sub.label}
                            className={`dropdown-item-group ${
                              sub.subMenu && sub.subMenu.length > 0 ? 'has-submenu' : ''
                            }`}
                          >
                            <a
                              href={sub.href}
                              className="dropdown-item"
                              onClick={(e) => handleLinkActivate(e, sub)}
                            >
                              <span>{sub.label}</span>
                              {sub.subMenu && sub.subMenu.length > 0 && (
                                <i
                                  className="fas fa-chevron-right submenu-arrow"
                                  aria-hidden="true"
                                ></i>
                              )}
                            </a>

                            {sub.subMenu && sub.subMenu.length > 0 && (
                              <div
                                className={`dropdown-submenu ${
                                  item.alignRight ? 'submenu-open-left' : ''
                                }`}
                              >
                                {sub.subMenu.map((nested) => (
                                  <a
                                    key={nested.label}
                                    href={nested.href}
                                    className="dropdown-subitem"
                                    onClick={(e) => handleLinkActivate(e, nested)}
                                  >
                                    <span>{nested.label}</span>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  className="student-login-btn"
                  onClick={() => {
                    setLoginFeedback('');
                    setLoginModalOpen(true);
                  }}
                  aria-label="Open Student Portal Login"
                  title="Student & Parent Portal Login"
                >
                  <i className="fas fa-user-graduate" aria-hidden="true"></i>
                  <span>STUDENT LOGIN</span>
                </button>

                <button
                  type="button"
                  className="apply-now-btn btn-shine"
                  onClick={onApplyClick}
                >
                  <i className="fas fa-paper-plane mr-1.5" aria-hidden="true"></i>
                  ADMISSIONS
                </button>
              </nav>
            </div>

            {/* Mobile Controls (Student Login + Hamburger Menu) */}
            <div className="mobile-header-actions">
              <button
                type="button"
                className="mobile-login-toggle"
                onClick={() => {
                  setLoginFeedback('');
                  setLoginModalOpen(true);
                }}
                aria-label="Student Login"
                title="Student Login"
              >
                <i className="fas fa-user-graduate" aria-hidden="true"></i>
                <span>Login</span>
              </button>
              <button
                type="button"
                className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <i
                  className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-white text-base`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-primary-links">
            {primaryLinks.map((item) => {
              const isExpanded = expandedMobileGroup === item.label;
              return (
                <div key={item.label} className="mobile-nav-group">
                  <div className="mobile-nav-row">
                    <a
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={(e) => handleLinkActivate(e, item)}
                    >
                      <span className="inline-flex items-center gap-2.5">
                        <i
                          className={`${item.icon} text-[#0c4a8a] w-4 text-center`}
                          aria-hidden="true"
                        ></i>
                        {item.label}
                      </span>
                      {!item.hasDropdown && (
                        <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                      )}
                    </a>
                    {item.hasDropdown && (
                      <button
                        type="button"
                        className="mobile-sub-toggle"
                        onClick={() =>
                          setExpandedMobileGroup(isExpanded ? null : item.label)
                        }
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isExpanded}
                      >
                        <i
                          className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}
                          aria-hidden="true"
                        ></i>
                      </button>
                    )}
                  </div>

                  {item.hasDropdown && isExpanded && (
                    <div className="mobile-sub-list">
                      {item.subItems?.map((sub) => {
                        const subKey = `${item.label}-${sub.label}`;
                        const isSubExpanded = expandedMobileSubGroup === subKey;
                        const hasNested = Boolean(sub.subMenu && sub.subMenu.length > 0);

                        return (
                          <div key={sub.label} className="mobile-nested-group">
                            <div className="flex items-center justify-between gap-1">
                              <a
                                href={sub.href}
                                className="mobile-sub-item flex-1"
                                onClick={(e) => handleLinkActivate(e, sub)}
                              >
                                <span>{sub.label}</span>
                              </a>
                              {hasNested && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedMobileSubGroup(isSubExpanded ? null : subKey)
                                  }
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-xs text-[#0c4a8a]"
                                  aria-label={`Toggle ${sub.label} nested options`}
                                  aria-expanded={isSubExpanded}
                                >
                                  <i
                                    className={`fas fa-chevron-${
                                      isSubExpanded ? 'up' : 'down'
                                    } text-[10px]`}
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              )}
                            </div>

                            {hasNested && isSubExpanded && (
                              <div className="ml-4 mb-2 mt-1 border-l-2 border-amber-400 pl-3 space-y-1">
                                {sub.subMenu?.map((nested) => (
                                  <a
                                    key={nested.label}
                                    href={nested.href}
                                    className="flex items-center gap-2 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0c4a8a]"
                                    onClick={(e) => handleLinkActivate(e, nested)}
                                  >
                                    <span>{nested.label}</span>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mobile-secondary-links">
            <div className="mobile-sec-title">
              <i className="fas fa-compass mr-1.5 text-[#d97706]" aria-hidden="true"></i>
              Quick Campus Links
            </div>
            <div className="mobile-sec-grid">
              {secondaryLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkActivate(e, item)}
                >
                  <i className={`${item.icon} mr-1.5 text-[#0c4a8a]`} aria-hidden="true"></i>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-cta-wrapper">
            <button
              type="button"
              className="student-login-btn mobile-student-login-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setLoginFeedback('');
                setLoginModalOpen(true);
              }}
            >
              <i className="fas fa-user-graduate mr-2" aria-hidden="true"></i>
              STUDENT &amp; PARENT LOGIN
            </button>
            <button
              type="button"
              className="apply-now-btn mobile-apply-btn btn-shine"
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
            >
              <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
              ADMISSION ENQUIRY 2026–27
            </button>
          </div>
        </div>
      </div>

      {/* Student & Parent Portal Login Modal */}
      {loginModalOpen && (
        <div
          className="student-login-backdrop"
          onClick={() => setLoginModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="student-login-title"
        >
          <div
            className="student-login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="student-login-header">
              <div className="student-login-brand">
                <img
                  src={SCHOOL_INFO.logo}
                  alt="St. Michael's Crest"
                  width="46"
                  height="46"
                />
                <div>
                  <span className="student-login-kicker">
                    MBOSE CODE: {SCHOOL_INFO.schoolCode} • UMSNING
                  </span>
                  <h3 id="student-login-title">Student &amp; Parent Portal Login</h3>
                </div>
              </div>
              <button
                type="button"
                className="student-login-close"
                onClick={() => setLoginModalOpen(false)}
                aria-label="Close Student Login Modal"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>

            <form onSubmit={handleStudentLoginSubmit} className="student-login-form">
              <div className="student-login-field">
                <label htmlFor="student-portal-id">
                  <i className="fas fa-id-card mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Student ID / MBOSE Roll Number
                </label>
                <input
                  id="student-portal-id"
                  type="text"
                  required
                  placeholder="e.g. SMHSS-2026-1042"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>

              <div className="student-login-field">
                <label htmlFor="student-portal-dob">
                  <i className="fas fa-lock mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                  Date of Birth / Portal PIN
                </label>
                <input
                  id="student-portal-dob"
                  type="password"
                  required
                  placeholder="Enter Date of Birth (DDMMYYYY) or PIN"
                  value={studentDob}
                  onChange={(e) => setStudentDob(e.target.value)}
                />
              </div>

              {loginFeedback && (
                <div className="student-login-alert">
                  <i className="fas fa-info-circle mr-1.5" aria-hidden="true"></i>
                  <span>{loginFeedback}</span>
                </div>
              )}

              <button type="submit" className="student-login-submit">
                <i className="fas fa-sign-in-alt mr-2" aria-hidden="true"></i>
                Sign In to Student Portal
              </button>

              <div className="student-login-footer">
                <span>
                  Need login credentials? Visit the School Secretariat or call{' '}
                  <strong>{SCHOOL_INFO.phoneMobile}</strong>.
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
