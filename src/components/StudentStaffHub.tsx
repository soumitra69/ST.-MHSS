import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Clock, 
  Download, 
  Users, 
  CreditCard, 
  Bus, 
  Shield, 
  Search, 
  CheckCircle, 
  Award,
  ChevronRight,
  Check,
  X
} from 'lucide-react';
import { NOTICES, HOUSES, FEE_STRUCTURE, BUS_ROUTES, SCHOOL_INFO, Notice } from '../data/schoolData';

export const StudentStaffHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notices' | 'timetables' | 'houses' | 'fees' | 'bus' | 'staff' | 'results'>('notices');
  const [selectedNoticeCategory, setSelectedNoticeCategory] = useState<string>('All');
  const [noticeSearch, setNoticeSearch] = useState<string>('');
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Fee Calculator State
  const [selectedClassIndex, setSelectedClassIndex] = useState<number>(3); // Default Class IX & X
  const [hasBusService, setHasBusService] = useState<boolean>(false);
  const [busRouteFee, setBusRouteFee] = useState<number>(1200);

  const showNoticeToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Filter Notices
  const filteredNotices = NOTICES.filter((n) => {
    const matchesCategory = selectedNoticeCategory === 'All' || n.category === selectedNoticeCategory;
    const matchesSearch = n.title.toLowerCase().includes(noticeSearch.toLowerCase()) || 
                          n.description.toLowerCase().includes(noticeSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedFee = FEE_STRUCTURE[selectedClassIndex];

  return (
    <section id="hub" className="w-full py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase font-mono tracking-wider text-[#D97706] font-bold block mb-2">
            Central Digital Campus • 2,000+ Learners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
            Student &amp; Staff Operations Hub
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Instant daily access for learners, parents, and educators to official circulars, bell routines, Archangel house standings, fee schedules, bus routes, and examination notices.
          </p>
        </div>

        {/* Inline Notification Banner */}
        {toastMessage && (
          <div className="mb-6 p-4 rounded-xl bg-[#1B365D] text-white flex items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-[#F59E0B] shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="p-1 rounded hover:bg-white/10 text-white/80 hover:text-white"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Tab Navigation Ribbon */}
        <div className="border-b-2 border-slate-200 mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-1">
            {[
              { id: 'notices', label: 'Notice Board', icon: Bell, badge: `${NOTICES.length} Active` },
              { id: 'timetables', label: 'Timetable & Bell Routine', icon: Clock },
              { id: 'houses', label: 'House System', icon: Shield },
              { id: 'fees', label: 'Fee Schedule & Calculator', icon: CreditCard },
              { id: 'bus', label: 'Bus Transport Routes', icon: Bus },
              { id: 'staff', label: 'Staff Portal', icon: Users },
              { id: 'results', label: 'MBOSE Result Desk', icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all duration-200 rounded-t-lg ${
                    isActive
                      ? 'border-[#1B365D] text-[#1B365D] bg-white shadow-xs'
                      : 'border-transparent text-slate-600 hover:text-[#1B365D] hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#D97706]' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className="text-[10px] font-mono font-bold bg-amber-100 text-[#D97706] px-1.5 py-0.5 rounded border border-amber-300">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: NOTICE BOARD */}
        {activeTab === 'notices' && (
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xs">
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {['All', 'Academic', 'Admissions', 'Sports', 'Examination', 'General'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedNoticeCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                      selectedNoticeCategory === cat
                        ? 'bg-[#1B365D] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search circulars, exams..."
                  value={noticeSearch}
                  onChange={(e) => setNoticeSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => setActiveNoticeModal(notice)}
                  className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-[#1B365D] transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-bold text-[#D97706] uppercase tracking-wider">{notice.category}</span>
                      <span className="font-mono text-[11px]">{notice.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#1B365D] group-hover:text-[#D97706] transition-colors line-clamp-2 mb-2 leading-snug">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1B365D] group-hover:text-[#D97706]">
                    <span>Read Full Circular</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: TIMETABLES & BELL ROUTINE */}
        {activeTab === 'timetables' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-6 bg-white rounded-xl border-2 border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <Clock className="w-5 h-5 text-[#D97706]" />
                  <h3 className="text-lg font-bold text-[#1B365D]">Daily Campus Bell Routine</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { time: "08:30 AM", event: "First Bell & Assembly Line Formation" },
                    { time: "08:45 AM", event: "Morning Prayer, School Hymn & News" },
                    { time: "09:00 AM", event: "Period 1 (Morning Core Subject)" },
                    { time: "09:45 AM", event: "Period 2 (Science & Math Lab Block)" },
                    { time: "10:30 AM", event: "Period 3 (Languages / Social Studies)" },
                    { time: "11:15 AM", event: "Recess & Midday Break" },
                    { time: "11:45 AM", event: "Period 4 (Commerce / Humanities / Electives)" },
                    { time: "12:30 PM", event: "Period 5 (Library & Practical Session)" },
                    { time: "01:15 PM", event: "Afternoon Interval" },
                    { time: "01:45 PM", event: "Period 6 & Physical Drill Conditioning" },
                    { time: "02:45 PM", event: "Dispersal & Bus Boarding (NH-6 Fleet)" }
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-slate-100 text-xs">
                      <span className="font-mono font-bold text-[#1B365D]">{r.time}</span>
                      <span className="text-slate-700 font-medium">{r.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                    <Calendar className="w-5 h-5 text-[#1B365D]" />
                    <h3 className="text-lg font-bold text-[#1B365D]">Academic Calendar 2026–27</h3>
                  </div>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <span className="font-bold text-[#D97706] block">Class XI &amp; XII Admissions Window</span>
                      <span className="text-slate-600">April 15 to May 20, 2026 • Science, Arts &amp; Commerce</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="font-bold text-[#1B365D] block">First Terminal Examinations</span>
                      <span className="text-slate-600">June 22 to June 28, 2026</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="font-bold text-[#1B365D] block">Annual Sports Meet &amp; Mass Synchronized Drill</span>
                      <span className="text-slate-600">November 10 to November 14, 2026</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="font-bold text-[#1B365D] block">MBOSE Board Selection Examinations</span>
                      <span className="text-slate-600">December 01 to December 12, 2026</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      showNoticeToast("Official Academic Calendar 2026–27 prepared. Opening print-ready view...");
                      window.print();
                    }}
                    className="w-full py-2.5 bg-[#1B365D] hover:bg-[#0F1D38] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#F59E0B]" />
                    <span>Print / Save Academic Calendar</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: HOUSE SYSTEM */}
        {activeTab === 'houses' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOUSES.map((h, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border-2 border-slate-200 shadow-xs hover:border-[#1B365D] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 text-xs font-extrabold uppercase rounded ${h.bgClass}`}>
                    {h.name}
                  </span>
                  <span className="text-xs font-bold text-slate-500 font-mono">Rank #{i + 1}</span>
                </div>
                <h4 className="text-base font-bold text-[#1B365D] mb-2">{h.motto}</h4>
                <div className="text-xs text-slate-600 mb-4 space-y-1.5">
                  <div><strong>Captain:</strong> {h.captain}</div>
                  <div><strong>Vice Captain:</strong> {h.viceCaptain}</div>
                  <div><strong>Accolades:</strong> {h.trophies}</div>
                </div>
                
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Annual Points</span>
                  <span className="text-xl font-extrabold font-mono text-[#D97706]">{h.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: FEES & CALCULATOR */}
        {activeTab === 'fees' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border-2 border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#1B365D] mb-4 pb-2 border-b border-slate-100">
                Official MBOSE Tuition &amp; Activity Fee Breakdown
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase tracking-wide">
                    Select Academic Class Level:
                  </label>
                  <select 
                    value={selectedClassIndex}
                    onChange={(e) => setSelectedClassIndex(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-[#1B365D]"
                  >
                    {FEE_STRUCTURE.map((f, idx) => (
                      <option key={idx} value={idx}>{f.classGroup}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">School Bus Transit Service (Optional)</span>
                    <span className="text-[11px] text-slate-500">Pick-up and drop along NH-6 Umsning corridor</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasBusService}
                    onChange={(e) => setHasBusService(e.target.checked)}
                    className="w-5 h-5 text-[#1B365D] rounded border-slate-300 focus:ring-[#1B365D]"
                  />
                </div>

                {hasBusService && (
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <label className="text-[11px] font-bold text-[#D97706] block mb-1">Select Transit Zone:</label>
                    <select
                      value={busRouteFee}
                      onChange={(e) => setBusRouteFee(Number(e.target.value))}
                      className="w-full p-2 bg-white border border-amber-300 rounded text-xs text-slate-800 font-medium"
                    >
                      <option value={900}>Zone A: Umsning Town Core (₹900/mo)</option>
                      <option value={1200}>Zone B: Umden / Sumer Route (₹1,200/mo)</option>
                      <option value={1500}>Zone C: Nongpoh Road Link (₹1,500/mo)</option>
                      <option value={1800}>Zone D: Bhoirymbong Link (₹1,800/mo)</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Admission Fee:</span>
                  <span className="font-bold font-mono text-slate-800">{selectedFee.admissionFee}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Tuition Fee (Quarterly):</span>
                  <span className="font-bold font-mono text-slate-800">{selectedFee.tuitionFeeQuarterly}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Annual Exam Fee:</span>
                  <span className="font-bold font-mono text-slate-800">{selectedFee.examFeeAnnual}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Lab &amp; Computer (Annual):</span>
                  <span className="font-bold font-mono text-slate-800">{selectedFee.labAndComputerAnnual}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#1B365D] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-wider block mb-2">
                  Total Annual Institutional Outlay
                </span>
                <div className="text-4xl font-extrabold font-mono text-white mb-2">
                  {selectedFee.totalAnnualEstimate}
                </div>
                {hasBusService && (
                  <p className="text-xs text-[#FDE68A] font-medium mb-3">
                    + Optional Bus Transit: ₹{(busRouteFee * 10).toLocaleString()} (10 Months)
                  </p>
                )}
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  Payable quarterly or in two installments at the school office or via official bank challan. Concessions available for siblings and merit scholarship holders.
                </p>

                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D97706]" />
                    <span>Includes sports, library, identity badge &amp; exams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D97706]" />
                    <span>Zero capitation fee or hidden development charge</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/20">
                <button
                  type="button"
                  onClick={() =>
                    showNoticeToast(
                      `For ${selectedFee.classGroup} fee challan or digital transfer details, please contact the Accounts Desk at ${SCHOOL_INFO.phoneMobile}.`
                    )
                  }
                  className="w-full py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors"
                >
                  Request Fee Challan &amp; Bank Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: BUS TRANSPORT ROUTES */}
        {activeTab === 'bus' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUS_ROUTES.map((b, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border-2 border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 text-xs font-bold text-white bg-[#1B365D] rounded">
                    {b.routeNo}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#D97706]">
                    Pickup: {b.pickupTime}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1B365D] mb-1">{b.busName}</h4>
                <p className="text-xs text-slate-500 mb-3">{b.stops.join(" ➔ ")}</p>
                <div className="text-xs text-slate-700 space-y-1">
                  <div><strong className="text-slate-900">Assigned In-Charge:</strong> {b.inCharge}</div>
                  <div><strong className="text-slate-900">Campus Dispersal:</strong> {b.dropTime} (Afternoon)</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 6: STAFF PORTAL */}
        {activeTab === 'staff' && (
          <div className="p-8 bg-white rounded-xl border-2 border-slate-200 shadow-xs max-w-2xl mx-auto text-center">
            <Users className="w-12 h-12 text-[#1B365D] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#1B365D] mb-2">Faculty &amp; Educator Intranet</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Internal portal for St. Michael&apos;s educators to upload lesson plans, record daily attendance, and submit terminal marks for 2,000 enrolled students.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() =>
                  showNoticeToast("Educator SSO requires campus network authentication or a registered @stmichaelsumsning.edu.in staff account.")
                }
                className="py-2.5 px-6 bg-[#1B365D] hover:bg-[#0F1D38] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-colors"
              >
                Educator SSO Login
              </button>
              <button
                type="button"
                onClick={() =>
                  showNoticeToast("Staff Leave & Attendance Desk is accessible from the Principal's Secretariat terminal during school hours (8:00 AM – 4:00 PM).")
                }
                className="py-2.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                Leave &amp; Attendance Desk
              </button>
            </div>
          </div>
        )}

        {/* TAB 7: MBOSE RESULT CHECK */}
        {activeTab === 'results' && (
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-xs sm:p-8">
            <Award className="mx-auto mb-4 h-10 w-10 text-[#1B365D]" aria-hidden="true" />
            <h3 className="text-lg font-bold text-[#1B365D]">Official MBOSE &amp; Terminal Examination Results</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
              To protect student privacy and official academic records, individual marksheets are verified through the school examination cell or official MBOSE result portals (`mbose.in` / `megresults.nic.in`).
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                className="inline-flex rounded-lg bg-[#1B365D] px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-[#244876]"
              >
                Call Examination Desk ({SCHOOL_INFO.phoneMobile})
              </a>
              <a
                href="#toppers"
                className="inline-flex rounded-lg border border-slate-300 bg-slate-50 px-5 py-3 text-xs sm:text-sm font-bold text-[#1B365D] transition-colors hover:bg-slate-100"
              >
                View State Merit Toppers
              </a>
            </div>
          </div>
        )}

        {/* Notice Modal */}
        {activeNoticeModal && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setActiveNoticeModal(null)}>
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider">{activeNoticeModal.category}</span>
                <button
                  type="button"
                  onClick={() => setActiveNoticeModal(null)}
                  className="text-slate-400 hover:text-slate-700 font-bold text-lg"
                  aria-label="Close circular"
                >
                  ✕
                </button>
              </div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-2">{activeNoticeModal.title}</h3>
              <p className="text-xs font-mono text-slate-500 mb-4">Date of Notification: {activeNoticeModal.date}</p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">{activeNoticeModal.description}</p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg"
                >
                  Print Circular
                </button>
                <button
                  type="button"
                  onClick={() => setActiveNoticeModal(null)}
                  className="px-4 py-2 bg-[#1B365D] text-white text-xs font-bold rounded-lg"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
