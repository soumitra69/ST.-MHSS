import React, { useState } from 'react';
import {
  NOTICES,
  HOUSES,
  FEE_STRUCTURE,
  BUS_ROUTES,
  SCHOOL_INFO,
  Notice,
} from '../data/schoolData';

const HOUSE_THEMES = [
  {
    accent: '#DC2626',
    softBg: 'rgba(220, 38, 38, 0.06)',
    border: 'rgba(220, 38, 38, 0.25)',
    badgeBg: '#B91C1C',
    patron: 'Archangel of Courage & Justice',
  },
  {
    accent: '#1D4ED8',
    softBg: 'rgba(29, 78, 216, 0.06)',
    border: 'rgba(29, 78, 216, 0.25)',
    badgeBg: '#1E40AF',
    patron: 'Archangel of Strength & Heraldry',
  },
  {
    accent: '#047857',
    softBg: 'rgba(4, 120, 87, 0.06)',
    border: 'rgba(4, 120, 87, 0.25)',
    badgeBg: '#065F46',
    patron: 'Archangel of Healing & Science',
  },
  {
    accent: '#D97706',
    softBg: 'rgba(217, 119, 6, 0.06)',
    border: 'rgba(217, 119, 6, 0.25)',
    badgeBg: '#B45309',
    patron: 'Archangel of Wisdom & Light',
  },
];

const BELL_SCHEDULE = [
  { time: '08:30 AM', period: 'Assembly', title: 'First Bell & Courtyard Line Formation', detail: 'House-wise alignment on the central amphitheatre arena' },
  { time: '08:45 AM', period: 'Prayer', title: 'Morning Prayer, School Hymn & Campus News', detail: 'Choral hymn in English & Khasi followed by announcements' },
  { time: '09:00 AM', period: 'Period 1', title: 'Core Academic Block I', detail: 'Mathematics, First Language & Core Stream Lectures' },
  { time: '09:45 AM', period: 'Period 2', title: 'Science & Computer Laboratory Block', detail: 'Physics, Chemistry, Biology & Digital Lab Practicals' },
  { time: '10:30 AM', period: 'Period 3', title: 'Humanities, Social Studies & Commerce', detail: 'History, Geography, Accountancy & Political Science' },
  { time: '11:15 AM', period: 'Interval', title: 'Morning Recess & Refreshment Break', detail: 'Supervised courtyard break & canteen access (30 mins)' },
  { time: '11:45 AM', period: 'Period 4', title: 'Core Academic Block II', detail: 'Literature, Economics, Alternative English & Khasi MIL' },
  { time: '12:30 PM', period: 'Period 5', title: 'Library, Seminar & Project Work', detail: 'Reading room research, CCE assignments & lab journals' },
  { time: '01:15 PM', period: 'Interval', title: 'Afternoon Lunch Interval', detail: 'Midday break across designated house zones (30 mins)' },
  { time: '01:45 PM', period: 'Period 6', title: 'Electives & Synchronized PT Drill Practice', detail: 'Physical conditioning, choir rehearsal & house activities' },
  { time: '02:45 PM', period: 'Dispersal', title: 'Final Bell & NH-6 Bus Fleet Boarding', detail: 'Supervised dispersal & route-wise bus boarding' },
];

const CALENDAR_EVENTS = [
  {
    month: 'APR',
    day: '15',
    tag: 'Admissions',
    title: 'Class XI Higher Secondary Admissions Window',
    dateRange: 'April 15 – May 20, 2026',
    desc: 'Direct merit admission for SSLC rank holders and entrance counseling for Science, Arts & Commerce streams.',
  },
  {
    month: 'JUN',
    day: '22',
    tag: 'Examination',
    title: 'First Terminal Assessment (Classes I to XII)',
    dateRange: 'June 22 – June 28, 2026',
    desc: 'Written and practical terminal evaluations under MBOSE Continuous & Comprehensive Evaluation (CCE).',
  },
  {
    month: 'SEP',
    day: '29',
    tag: 'Patron Feast',
    title: 'Feast of St. Michael the Archangel & Founder’s Day',
    dateRange: 'September 29, 2026',
    desc: 'Solemn thanksgiving liturgy, choral concert, inter-house cultural showcase, and alumni felicitation.',
  },
  {
    month: 'NOV',
    day: '10',
    tag: 'Athletics',
    title: 'Annual Sports Meet & 2,000-Student Synchronized Drill',
    dateRange: 'November 10 – November 14, 2026',
    desc: 'Track and field championships, march-past, and choreographed musical PT drill on the main ground.',
  },
  {
    month: 'DEC',
    day: '01',
    tag: 'Board Prep',
    title: 'MBOSE SSLC & HSSLC Selection Examinations',
    dateRange: 'December 01 – December 12, 2026',
    desc: 'Pre-board qualifying examinations for Class X and Class XII candidates prior to state board registration.',
  },
];

const STAFF_MODULES = [
  {
    title: 'Daily Attendance & Roll Call Register',
    code: 'OPS-ATT-01',
    schedule: 'Mandatory by 09:15 AM',
    desc: 'Submit section-wise morning and afternoon attendance from Nursery to Class XII with automated guardian SMS alerts for absentees.',
    actionLabel: 'Open Attendance Register',
  },
  {
    title: 'MBOSE CCE & Terminal Marks Ledger',
    code: 'OPS-EXM-02',
    schedule: 'Term I / Term II / Pre-Board',
    desc: 'Enter unit test scores, laboratory practical grades, and internal assessment marks for official MBOSE report card generation.',
    actionLabel: 'Launch Marks Portal',
  },
  {
    title: 'Departmental Lesson Plans & Syllabus',
    code: 'OPS-ACD-03',
    schedule: 'Weekly Academic Review',
    desc: 'Access and upload structured weekly teaching diaries, laboratory experiment schedules, and remedial coaching rosters.',
    actionLabel: 'View Syllabus Vault',
  },
  {
    title: 'Staff Leave, Duty & Invigilation Desk',
    code: 'OPS-ADM-04',
    schedule: 'Secretariat Approved',
    desc: 'Apply for casual/medical leave, check period substitution assignments, and download examination hall invigilation charts.',
    actionLabel: 'Manage Leave & Roster',
  },
];

export const StudentStaffHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'notices' | 'timetables' | 'houses' | 'fees' | 'bus' | 'staff' | 'results'
  >('notices');
  const [selectedNoticeCategory, setSelectedNoticeCategory] = useState<string>('All');
  const [noticeSearch, setNoticeSearch] = useState<string>('');
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Fee Calculator State
  const [selectedClassIndex, setSelectedClassIndex] = useState<number>(3); // Default Class IX & X
  const [hasBusService, setHasBusService] = useState<boolean>(false);
  const [busRouteFee, setBusRouteFee] = useState<number>(1200);

  // Staff Login State
  const [staffIdInput, setStaffIdInput] = useState<string>('');
  const [staffDeptInput, setStaffDeptInput] = useState<string>('Science & Laboratories');

  const showNoticeToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Filter Notices
  const filteredNotices = NOTICES.filter((n) => {
    const matchesCategory =
      selectedNoticeCategory === 'All' || n.category === selectedNoticeCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(noticeSearch.toLowerCase()) ||
      n.description.toLowerCase().includes(noticeSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedFee = FEE_STRUCTURE[selectedClassIndex];
  const numericAnnualEstimate =
    Number(selectedFee.totalAnnualEstimate.replace(/[^0-9]/g, '')) || 0;
  const totalWithBus = hasBusService
    ? numericAnnualEstimate + busRouteFee * 10
    : numericAnnualEstimate;

  const handleStaffLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffIdInput.trim()) {
      showNoticeToast('Please enter your official Educator ID (e.g., SMHSS-FAC-014) to continue.');
      return;
    }
    showNoticeToast(
      `Verification request sent for Educator ID "${staffIdInput.toUpperCase()}" (${staffDeptInput}). Please complete verification on the campus intranet terminal.`
    );
    setStaffIdInput('');
  };

  return (
    <section id="hub" className="hub-section">
      <div className="container">
        {/* Executive Section Header */}
        <div className="hub-header-wrap">
          <div className="hub-header-left">
            <span className="hub-eyebrow">
              CENTRAL DIGITAL CAMPUS • 2,000+ LEARNERS &amp; 68+ EDUCATORS
            </span>
            <h2 className="hub-main-title vision-serif-heading">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Student &amp; Staff Operations Hub
            </h2>
            <p className="hub-subtitle">
              Unified institutional portal for official circulars, daily bell routines, Archangel house standings, transparent fee schedules, NH-6 transit routes, and academic administration.
            </p>
          </div>

          <div className="hub-kpi-strip">
            <div className="hub-kpi-card">
              <span className="hub-kpi-val">{NOTICES.length} Active</span>
              <span className="hub-kpi-lbl">Official Circulars</span>
            </div>
            <div className="hub-kpi-card">
              <span className="hub-kpi-val">4 Houses</span>
              <span className="hub-kpi-lbl">Archangel System</span>
            </div>
            <div className="hub-kpi-card">
              <span className="hub-kpi-val">4 Routes</span>
              <span className="hub-kpi-lbl">NH-6 Bus Fleet</span>
            </div>
          </div>
        </div>

        {/* Inline Notification Banner */}
        {toastMessage && (
          <div className="hub-toast-banner" role="status">
            <div className="hub-toast-content">
              <span className="font-bold text-amber-400">&raquo;</span>
              <span>{toastMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="hub-toast-close"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        )}

        {/* Executive Tab Navigation Bar */}
        <div className="hub-tabs-bar" role="tablist" aria-label="Operations Hub Sections">
          {[
            { id: 'notices', label: 'Notice Board', badge: `${NOTICES.length}` },
            { id: 'timetables', label: 'Timetable & Calendar' },
            { id: 'houses', label: 'House Championship' },
            { id: 'fees', label: 'Fee Schedule & Calculator' },
            { id: 'bus', label: 'Bus Transit Fleet' },
            { id: 'staff', label: 'Faculty & Staff Desk' },
            { id: 'results', label: 'MBOSE Result Desk' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`hub-tab-btn ${isActive ? 'active' : ''}`}
              >
                <span>&raquo; {tab.label}</span>
                {tab.badge && <span className="hub-tab-badge">{tab.badge}</span>}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            TAB 1: OFFICIAL NOTICE BOARD CARDS
           ========================================================= */}
        {activeTab === 'notices' && (
          <div className="hub-tab-panel">
            {/* Filter & Search Toolbar Card */}
            <div className="hub-toolbar-card">
              <div className="hub-category-pills">
                {['All', 'Academic', 'Admissions', 'Sports', 'Examination', 'General'].map(
                  (cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedNoticeCategory(cat)}
                      className={`hub-filter-pill ${
                        selectedNoticeCategory === cat ? 'active' : ''
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>

              <div className="hub-search-box">
                <input
                  type="text"
                  placeholder="Search circulars by keyword, exam, or stream..."
                  value={noticeSearch}
                  onChange={(e) => setNoticeSearch(e.target.value)}
                  className="hub-search-input"
                  style={{ paddingLeft: '14px' }}
                />
                {noticeSearch && (
                  <button
                    type="button"
                    onClick={() => setNoticeSearch('')}
                    className="hub-search-clear"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Notices Card Grid */}
            {filteredNotices.length === 0 ? (
              <div className="hub-empty-card">
                <h4>No Matching Circulars Found</h4>
                <p>Try clearing your search filter or selecting &ldquo;All&rdquo; categories.</p>
              </div>
            ) : (
              <div className="hub-notice-grid">
                {filteredNotices.map((notice, index) => (
                  <article
                    key={notice.id}
                    onClick={() => setActiveNoticeModal(notice)}
                    className={`hub-notice-card ${notice.isUrgent ? 'urgent' : ''}`}
                  >
                    <div className="hub-notice-top">
                      <div className="hub-notice-badges">
                        <span className={`hub-cat-badge cat-${notice.category.toLowerCase()}`}>
                          {notice.category}
                        </span>
                        {notice.isUrgent && (
                          <span className="hub-urgent-pill">
                            <span className="hub-pulse-dot" />
                            PRIORITY
                          </span>
                        )}
                      </div>
                      <span className="hub-ref-code">
                        REF: SMHSS/2026/0{index + 1}
                      </span>
                    </div>

                    <div className="hub-notice-body">
                      <div className="hub-notice-date">
                        <span>Published: {notice.date}</span>
                      </div>
                      <h3 className="hub-notice-title">&raquo; {notice.title}</h3>
                      <p className="hub-notice-desc">{notice.description}</p>
                    </div>

                    <div className="hub-notice-footer">
                      <div className="hub-file-meta">
                        <span>{notice.fileSize || 'Official Circular PDF'}</span>
                      </div>
                      <span className="hub-card-action">
                        Read More
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}

        {/* =========================================================
            TAB 2: TIMETABLE & ACADEMIC CALENDAR CARDS
           ========================================================= */}
        {activeTab === 'timetables' && (
          <div className="hub-tab-panel">
            <div className="hub-two-col-grid">
              {/* Left Card: Daily Campus Bell Schedule */}
              <div className="hub-exec-card">
                <div className="hub-exec-card-header">
                  <div>
                    <span className="hub-card-kicker">MONDAY – FRIDAY ROUTINE</span>
                    <h3 className="hub-exec-card-title">
                      &raquo; Daily Campus Bell Schedule
                    </h3>
                  </div>
                  <span className="hub-status-pill">08:30 AM – 02:45 PM</span>
                </div>

                <div className="hub-bell-list">
                  {BELL_SCHEDULE.map((slot, i) => (
                    <div
                      key={i}
                      className={`hub-bell-item ${
                        slot.period === 'Interval' ? 'is-break' : ''
                      }`}
                    >
                      <div className="hub-bell-time-col">
                        <span className="hub-bell-time">{slot.time}</span>
                        <span className="hub-bell-tag">{slot.period}</span>
                      </div>
                      <div className="hub-bell-info-col">
                        <h4>{slot.title}</h4>
                        <p>{slot.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Academic Calendar Card + Weekly Special Card */}
              <div className="hub-stack-col">
                <div className="hub-exec-card">
                  <div className="hub-exec-card-header">
                    <div>
                      <span className="hub-card-kicker">MBOSE SESSION 2026–27</span>
                      <h3 className="hub-exec-card-title">
                        &raquo; Institutional Academic Calendar
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        showNoticeToast(
                          'Preparing official Academic Calendar 2026–27 for printing...'
                        );
                        window.print();
                      }}
                      className="hub-mini-action-btn"
                    >
                      Print
                    </button>
                  </div>

                  <div className="hub-calendar-list">
                    {CALENDAR_EVENTS.map((ev, idx) => (
                      <div key={idx} className="hub-calendar-card-item">
                        <div className="hub-cal-date-badge">
                          <span className="hub-cal-month">{ev.month}</span>
                          <span className="hub-cal-day">{ev.day}</span>
                        </div>
                        <div className="hub-cal-content">
                          <div className="hub-cal-meta">
                            <span className="hub-cal-tag">{ev.tag}</span>
                            <span className="hub-cal-range">{ev.dateRange}</span>
                          </div>
                          <h4>{ev.title}</h4>
                          <p>{ev.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hub-exec-card-footer">
                    <button
                      type="button"
                      onClick={() => {
                        showNoticeToast(
                          'Official St. Michael Academic Calendar 2026–27 opened in print/PDF view.'
                        );
                        window.print();
                      }}
                      className="hub-primary-btn-full"
                    >
                      Download / Print Full Academic Calendar 2026–27
                    </button>
                  </div>
                </div>

                {/* Special Weekly Traditions Card */}
                <div className="hub-highlight-navy-card">
                  <div className="hub-navy-card-top">
                    <span className="hub-navy-kicker">WEEKLY CAMPUS TRADITIONS</span>
                    <h4>&raquo; Co-Curricular &amp; Pastoral Formation Hours</h4>
                  </div>
                  <div className="hub-navy-grid">
                    <div className="hub-navy-stat">
                      <strong>Friday 08:30 AM</strong>
                      <span>2,000-Student Mass Aerobic &amp; Musical PT Drill</span>
                    </div>
                    <div className="hub-navy-stat">
                      <strong>Saturday 09:00 AM</strong>
                      <span>Remedial Coaching, Eco Club &amp; Choir Practice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 3: ARCHANGEL HOUSE SYSTEM CARDS
           ========================================================= */}
        {activeTab === 'houses' && (
          <div className="hub-tab-panel">
            <div className="hub-houses-grid">
              {HOUSES.map((h, i) => {
                const theme = HOUSE_THEMES[i % HOUSE_THEMES.length];
                const progressPct = Math.min(100, Math.round((h.points / 1400) * 100));

                return (
                  <article
                    key={h.name}
                    className="hub-house-card"
                    style={{
                      borderTopColor: theme.accent,
                    }}
                  >
                    <div className="hub-house-header">
                      <div className="hub-house-badge-row">
                        <span
                          className="hub-house-color-pill"
                          style={{ backgroundColor: theme.badgeBg }}
                        >
                          {h.color} House
                        </span>
                        <span className="hub-house-rank">
                          Rank #{i + 1}
                        </span>
                      </div>

                      <h3 className="hub-house-name">&raquo; {h.name}</h3>
                      <p className="hub-house-patron">{theme.patron}</p>
                      <div
                        className="hub-house-motto"
                        style={{
                          backgroundColor: theme.softBg,
                          borderColor: theme.border,
                        }}
                      >
                        &ldquo;{h.motto}&rdquo;
                      </div>
                    </div>

                    <div className="hub-house-leaders">
                      <div className="hub-leader-row">
                        <span className="hub-leader-lbl">House Captain</span>
                        <strong className="hub-leader-val">{h.captain}</strong>
                      </div>
                      <div className="hub-leader-row">
                        <span className="hub-leader-lbl">Vice Captain</span>
                        <strong className="hub-leader-val">{h.viceCaptain}</strong>
                      </div>
                      <div className="hub-leader-row">
                        <span className="hub-leader-lbl">Current Honour</span>
                        <strong className="hub-leader-trophy">{h.trophies}</strong>
                      </div>
                    </div>

                    <div className="hub-house-points-box">
                      <div className="hub-points-top">
                        <span>Championship Standings</span>
                        <strong style={{ color: theme.accent }}>
                          {h.points.toLocaleString()} pts
                        </strong>
                      </div>
                      <div className="hub-progress-track">
                        <div
                          className="hub-progress-fill"
                          style={{
                            width: `${progressPct}%`,
                            backgroundColor: theme.accent,
                          }}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 4: FEE SCHEDULE & INTERACTIVE CALCULATOR CARDS
           ========================================================= */}
        {activeTab === 'fees' && (
          <div className="hub-tab-panel">
            {/* Quick Stage Selector Cards */}
            <div className="hub-fee-stage-grid">
              {FEE_STRUCTURE.map((item, idx) => {
                const isSelected = selectedClassIndex === idx;
                return (
                  <button
                    key={item.classGroup}
                    type="button"
                    onClick={() => setSelectedClassIndex(idx)}
                    className={`hub-fee-stage-card ${isSelected ? 'active' : ''}`}
                  >
                    <div className="hub-fee-stage-top">
                      <span className="hub-fee-stage-num">Stage 0{idx + 1}</span>
                      {isSelected && (
                        <span className="hub-fee-selected-dot">Selected</span>
                      )}
                    </div>
                    <h4>{item.classGroup}</h4>
                    <div className="hub-fee-stage-price">
                      <span>{item.totalAnnualEstimate}</span>
                      <small>/ year est.</small>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Calculator Split Grid */}
            <div className="hub-fee-calculator-grid">
              {/* Left Card: Itemized Fee Ledger */}
              <div className="hub-exec-card">
                <div className="hub-exec-card-header">
                  <div>
                    <span className="hub-card-kicker">OFFICIAL MBOSE FEE LEDGER 2026–27</span>
                    <h3 className="hub-exec-card-title">
                      &raquo; {selectedFee.classGroup}
                    </h3>
                  </div>
                  <span className="hub-status-pill">Transparent Structure</span>
                </div>

                <div className="hub-ledger-table">
                  <div className="hub-ledger-row">
                    <div>
                      <strong>Annual Admission &amp; Registration Fee</strong>
                      <span>Payable at the start of the academic session</span>
                    </div>
                    <span className="hub-ledger-amount">{selectedFee.admissionFee}</span>
                  </div>
                  <div className="hub-ledger-row">
                    <div>
                      <strong>Quarterly Tuition Fee</strong>
                      <span>Instructional &amp; classroom academic fee per quarter</span>
                    </div>
                    <span className="hub-ledger-amount">{selectedFee.tuitionFeeQuarterly}</span>
                  </div>
                  <div className="hub-ledger-row">
                    <div>
                      <strong>Examination &amp; Continuous Assessment Fee</strong>
                      <span>Covers unit tests, terminal exams &amp; progress reports</span>
                    </div>
                    <span className="hub-ledger-amount">{selectedFee.examFeeAnnual}</span>
                  </div>
                  <div className="hub-ledger-row">
                    <div>
                      <strong>Science, Computer Lab &amp; Practical Fee</strong>
                      <span>Laboratory consumables, digital systems &amp; fieldwork</span>
                    </div>
                    <span className="hub-ledger-amount">{selectedFee.labAndComputerAnnual}</span>
                  </div>
                  <div className="hub-ledger-row">
                    <div>
                      <strong>Library, Sports &amp; House Activity Fee</strong>
                      <span>Archangel house events, PT drill, library &amp; ID card</span>
                    </div>
                    <span className="hub-ledger-amount">{selectedFee.sportsAndLibraryAnnual}</span>
                  </div>
                </div>

                {/* Bus Add-on Toggle Card */}
                <div className="hub-bus-addon-box">
                  <label className="hub-bus-toggle-row">
                    <div>
                      <strong>Include Daily School Bus Transit (Optional)</strong>
                      <span>Pick-up and drop service along the NH-6 Umsning corridor (10 months)</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={hasBusService}
                      onChange={(e) => setHasBusService(e.target.checked)}
                      className="hub-checkbox"
                    />
                  </label>

                  {hasBusService && (
                    <div className="hub-bus-zone-selector">
                      <label htmlFor="hub-transit-zone">Select Pick-up Transit Zone:</label>
                      <select
                        id="hub-transit-zone"
                        value={busRouteFee}
                        onChange={(e) => setBusRouteFee(Number(e.target.value))}
                        className="hub-select-input"
                      >
                        <option value={900}>Zone A: Umsning Town Core (₹900 / month)</option>
                        <option value={1200}>Zone B: Umden / Sumer Route (₹1,200 / month)</option>
                        <option value={1500}>Zone C: Nongpoh Road Corridor (₹1,500 / month)</option>
                        <option value={1800}>Zone D: Bhoirymbong / Umroi Link (₹1,800 / month)</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Card: Executive Outlay Summary Card */}
              <div className="hub-fee-summary-card">
                <div>
                  <span className="hub-summary-kicker">ESTIMATED ANNUAL OUTLAY</span>
                  <h4 className="hub-summary-class">&raquo; {selectedFee.classGroup}</h4>

                  <div className="hub-summary-total-box">
                    <span className="hub-summary-total-lbl">Combined Annual Estimate</span>
                    <div className="hub-summary-total-val">
                      ₹{totalWithBus.toLocaleString('en-IN')}
                    </div>
                    <span className="hub-summary-sub">
                      Academic Base: {selectedFee.totalAnnualEstimate}
                      {hasBusService
                        ? ` + Bus Transit: ₹${(busRouteFee * 10).toLocaleString('en-IN')}`
                        : ' (Excludes Optional Bus)'}
                    </span>
                  </div>

                  <div className="hub-summary-perks">
                    <div className="hub-perk-item">
                      <span className="font-bold text-amber-400">&raquo;</span>
                      <span>Payable in 4 quarterly installments or 2 term challans</span>
                    </div>
                    <div className="hub-perk-item">
                      <span className="font-bold text-amber-400">&raquo;</span>
                      <span>100% tuition waiver for MBOSE State Top 20 Merit Rankers</span>
                    </div>
                    <div className="hub-perk-item">
                      <span className="font-bold text-amber-400">&raquo;</span>
                      <span>Sibling concession available through the Principal&apos;s office</span>
                    </div>
                    <div className="hub-perk-item">
                      <span className="font-bold text-amber-400">&raquo;</span>
                      <span>Zero capitation fee or hidden development donations</span>
                    </div>
                  </div>
                </div>

                <div className="hub-summary-actions">
                  <button
                    type="button"
                    onClick={() =>
                      showNoticeToast(
                        `Fee challan estimate for ${selectedFee.classGroup} (₹${totalWithBus.toLocaleString('en-IN')}) generated. Visit the Accounts Secretariat or call ${SCHOOL_INFO.phoneMobile}.`
                      )
                    }
                    className="hub-gold-cta-btn"
                  >
                    Request Official Fee Challan
                  </button>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="hub-outline-light-btn"
                  >
                    Print Fee Estimate Slip
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 5: BUS TRANSPORT FLEET CARDS
           ========================================================= */}
        {activeTab === 'bus' && (
          <div className="hub-tab-panel">
            <div className="hub-bus-grid">
              {BUS_ROUTES.map((b, i) => (
                <article key={b.routeNo} className="hub-bus-card">
                  <div className="hub-bus-card-top">
                    <div className="hub-bus-badge-group">
                      <span className="hub-route-badge">
                        {b.routeNo}
                      </span>
                      <span className="hub-corridor-tag">NH-6 Corridor Fleet #0{i + 1}</span>
                    </div>
                    <div className="hub-bus-timings">
                      <span className="hub-time-pill pickup">
                        Pickup: {b.pickupTime}
                      </span>
                      <span className="hub-time-pill drop">
                        Drop: {b.dropTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="hub-bus-title">&raquo; {b.busName}</h3>

                  {/* Visual Stop Timeline */}
                  <div className="hub-stops-timeline">
                    <span className="hub-stops-label">Designated Boarding &amp; Drop Points:</span>
                    <div className="hub-stops-chain">
                      {b.stops.map((stop, sIdx) => (
                        <div key={stop} className="hub-stop-node">
                          <span className="hub-stop-index">{sIdx + 1}</span>
                          <span className="hub-stop-name">{stop}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hub-bus-footer">
                    <div className="hub-bus-coordinator">
                      <span className="hub-coord-lbl">Route Coordinator</span>
                      <strong className="hub-coord-name">{b.inCharge}</strong>
                    </div>
                    <a
                      href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                      className="hub-call-coord-btn"
                    >
                      Call Desk
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 6: FACULTY & STAFF OPERATIONS PORTAL CARDS
           ========================================================= */}
        {activeTab === 'staff' && (
          <div className="hub-tab-panel">
            <div className="hub-staff-layout">
              {/* Left 4 Operational Cards */}
              <div className="hub-staff-modules-grid">
                {STAFF_MODULES.map((mod) => (
                  <article key={mod.code} className="hub-staff-card">
                    <div className="hub-staff-card-top">
                      <span className="hub-staff-schedule">{mod.schedule}</span>
                      <span className="hub-staff-code">{mod.code}</span>
                    </div>

                    <h3 className="hub-staff-title">&raquo; {mod.title}</h3>
                    <p className="hub-staff-desc">{mod.desc}</p>

                    <button
                      type="button"
                      onClick={() =>
                        showNoticeToast(
                          `${mod.title} (${mod.code}): Please authenticate via the Educator SSO Console on the right.`
                        )
                      }
                      className="hub-staff-action-btn"
                    >
                      <span>{mod.actionLabel}</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </article>
                ))}
              </div>

              {/* Right Card: Educator SSO Login Card */}
              <div className="hub-staff-sso-card">
                <div className="hub-sso-header">
                  <div className="hub-sso-badge">
                    EDUCATOR INTRANET SSO
                  </div>
                  <h3>&raquo; Faculty &amp; Secretariat Sign-In</h3>
                  <p>
                    Authorized portal for St. Michael&apos;s 68+ teaching faculty and administrative staff.
                  </p>
                </div>

                <form onSubmit={handleStaffLogin} className="hub-sso-form">
                  <div className="hub-sso-field">
                    <label htmlFor="staff-id-input">Educator / Staff ID *</label>
                    <input
                      id="staff-id-input"
                      type="text"
                      value={staffIdInput}
                      onChange={(e) => setStaffIdInput(e.target.value)}
                      placeholder="e.g., SMHSS-FAC-014"
                      className="hub-sso-input"
                    />
                  </div>

                  <div className="hub-sso-field">
                    <label htmlFor="staff-dept-select">Academic Department</label>
                    <select
                      id="staff-dept-select"
                      value={staffDeptInput}
                      onChange={(e) => setStaffDeptInput(e.target.value)}
                      className="hub-sso-input"
                    >
                      <option value="Science & Laboratories">Science &amp; Laboratories</option>
                      <option value="Arts & Humanities">Arts &amp; Humanities</option>
                      <option value="Commerce & Accountancy">Commerce &amp; Accountancy</option>
                      <option value="Secondary Section (IX–X)">Secondary Section (IX–X)</option>
                      <option value="Primary & Kindergarten">Primary &amp; Kindergarten</option>
                      <option value="Administration & Secretariat">Administration &amp; Secretariat</option>
                    </select>
                  </div>

                  <button type="submit" className="hub-gold-cta-btn w-full">
                    Authenticate Educator Session
                  </button>
                </form>

                <div className="hub-sso-footer">
                  <span>Need Secretariat assistance?</span>
                  <a href="#faculty" className="hub-sso-link">
                    View Full Faculty Directory →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 7: MBOSE EXAMINATION & RESULT DESK CARDS
           ========================================================= */}
        {activeTab === 'results' && (
          <div className="hub-tab-panel">
            <div className="hub-results-grid">
              {/* Card 1: Board Honour & Performance Card */}
              <div className="hub-result-card">
                <div className="hub-result-card-top">
                  <span className="hub-card-kicker">ACADEMIC DISTINCTION RECORD</span>
                </div>
                <h3>&raquo; MBOSE SSLC &amp; HSSLC Excellence</h3>
                <p>
                  St. Michael&apos;s Higher Secondary School (Affiliation Code:{' '}
                  <strong>{SCHOOL_INFO.schoolCode}</strong>) maintains a proud legacy of State Top 20 Merit Rankers and 100% board pass performance.
                </p>
                <div className="hub-result-stats-grid">
                  <div className="hub-result-mini-stat">
                    <strong>100%</strong>
                    <span>Board Pass Record</span>
                  </div>
                  <div className="hub-result-mini-stat">
                    <strong>Top 20</strong>
                    <span>State Merit Rank</span>
                  </div>
                  <div className="hub-result-mini-stat">
                    <strong>₹20,000</strong>
                    <span>Topper Cash Award</span>
                  </div>
                  <div className="hub-result-mini-stat">
                    <strong>1961</strong>
                    <span>Diocesan Heritage</span>
                  </div>
                </div>
                <a href="#toppers" className="hub-result-link-btn">
                  View State Topper Felicitation Gallery
                </a>
              </div>

              {/* Card 2: Official Document & Marksheet Collection Card */}
              <div className="hub-result-card">
                <div className="hub-result-card-top">
                  <span className="hub-card-kicker">EXAMINATION CELL PROTOCOL</span>
                </div>
                <h3>&raquo; Marksheet &amp; Certificate Verification</h3>
                <p>
                  To safeguard student privacy, individual marksheets and pass certificates are issued directly through the School Examination Secretariat upon presentation of the admit card.
                </p>
                <ul className="hub-result-checklist">
                  <li>
                    <span className="font-bold text-[#c61c49]">&raquo;</span>
                    <span>Original MBOSE SSLC (Class X) &amp; HSSLC (Class XII) Marksheets</span>
                  </li>
                  <li>
                    <span className="font-bold text-[#c61c49]">&raquo;</span>
                    <span>Provisional Pass, Character &amp; Transfer Certificates (TC)</span>
                  </li>
                  <li>
                    <span className="font-bold text-[#c61c49]">&raquo;</span>
                    <span>Class XI Stream Allocation &amp; Merit Scholarship Letters</span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={() =>
                    showNoticeToast(
                      `Examination Cell Hours: ${SCHOOL_INFO.officeHours}. Please bring your MBOSE Roll Number and Admit Card.`
                    )
                  }
                  className="hub-result-secondary-btn"
                >
                  Check Document Collection Requirements
                </button>
              </div>

              {/* Card 3: Examination Cell Direct Contact Card */}
              <div className="hub-result-card navy-accent">
                <div className="hub-result-card-top">
                  <span className="hub-summary-kicker">OFFICIAL VERIFICATION DESK</span>
                </div>
                <h3>&raquo; Contact the Examination Cell</h3>
                <p>
                  For official institutional verification, board result queries, or Class XI admission cutoffs, contact our Examination Secretariat directly.
                </p>

                <div className="hub-exam-contact-box">
                  <div className="hub-exam-contact-item">
                    <span>&raquo; Umsning Town, NH-6 Corridor, Ri Bhoi District</span>
                  </div>
                  <div className="hub-exam-contact-item">
                    <span>&raquo; {SCHOOL_INFO.officeHours}</span>
                  </div>
                  <div className="hub-exam-contact-item">
                    <span>&raquo; {SCHOOL_INFO.phoneMobile} / {SCHOOL_INFO.phone}</span>
                  </div>
                </div>

                <a
                  href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                  className="hub-gold-cta-btn w-full"
                >
                  Call Examination Secretariat
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Official Circular Modal */}
        {activeNoticeModal && (
          <div
            className="hub-modal-backdrop"
            onClick={() => setActiveNoticeModal(null)}
          >
            <div
              className="hub-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hub-modal-header">
                <div className="hub-notice-badges">
                  <span
                    className={`hub-cat-badge cat-${activeNoticeModal.category.toLowerCase()}`}
                  >
                    {activeNoticeModal.category}
                  </span>
                  {activeNoticeModal.isUrgent && (
                    <span className="hub-urgent-pill">PRIORITY CIRCULAR</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveNoticeModal(null)}
                  className="hub-modal-close"
                  aria-label="Close circular"
                >
                  ×
                </button>
              </div>

              <div className="hub-modal-body">
                <span className="hub-modal-school">
                  {SCHOOL_INFO.name.toUpperCase()} • {SCHOOL_INFO.schoolCode}
                </span>
                <h3>&raquo; {activeNoticeModal.title}</h3>
                <div className="hub-modal-meta">
                  <span>Published: {activeNoticeModal.date}</span>
                  <span>•</span>
                  <span>Attachment: {activeNoticeModal.fileSize || 'Official PDF'}</span>
                </div>
                <p className="hub-modal-text">{activeNoticeModal.description}</p>
              </div>

              <div className="hub-modal-footer">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="hub-modal-print-btn"
                >
                  Print Circular
                </button>
                <button
                  type="button"
                  onClick={() => setActiveNoticeModal(null)}
                  className="hub-modal-done-btn"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
