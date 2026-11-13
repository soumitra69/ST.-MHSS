import React, { useState } from 'react';
import type { AppPageId } from './InstitutionalSection';

interface GirlsHostelPageProps {
  onBack: () => void;
  onNavigatePage: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

const FACILITIES = [
  {
    icon: 'fas fa-bed',
    title: 'Comfortable Dormitories',
    desc: 'Spacious, well-ventilated dormitory rooms with individual cots, storage cupboards, and study desks for each resident.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: '24/7 Security & CCTV',
    desc: 'Round-the-clock security with CCTV surveillance, secure entry gates, and trained female wardens on premises at all times.',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Nutritious Dining',
    desc: 'Hygienic, home-style meals served three times daily in a dedicated dining hall. Special diet provisions available on request.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Power Backup',
    desc: 'Uninterrupted power supply with generator backup ensuring 24-hour electricity for fans, lighting, and study areas.',
  },
  {
    icon: 'fas fa-tint',
    title: 'Clean Water Supply',
    desc: 'Filtered drinking water stations and adequate bathroom facilities with continuous supply of running water.',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Study Hall',
    desc: 'Dedicated quiet study hall with adequate lighting, available from 5:00 PM – 8:30 PM daily for supervised self-study.',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Medical & First Aid',
    desc: 'On-call nurse and first-aid facility within the hostel premises. Referral to St. Michael\'s Hospital (Umsning) when required.',
  },
  {
    icon: 'fas fa-pray',
    title: 'Chapel & Prayer Room',
    desc: 'A peaceful chapel and multi-faith prayer room for daily morning prayer and Sunday Mass within the hostel compound.',
  },
  {
    icon: 'fas fa-volleyball-ball',
    title: 'Recreation & Sports',
    desc: 'Indoor recreation room with indoor games, outdoor sports access, and guided physical activity during recreation hours.',
  },
];

const ROOM_TYPES = [
  {
    type: 'Standard Dormitory',
    capacity: '8 – 10 Girls',
    icon: 'fas fa-users',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
    features: ['Individual cot & mattress', 'Personal storage locker', 'Common study tables', 'Ceiling fans & lighting'],
  },
  {
    type: 'Semi-Private Room',
    capacity: '4 – 6 Girls',
    icon: 'fas fa-user-friends',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
    features: ['Individual bed with side table', 'Personal wardrobe', 'Attached bathroom access', 'Study desk per resident'],
  },
  {
    type: 'Staff Warden Quarters',
    capacity: 'Resident Warden',
    icon: 'fas fa-user-shield',
    color: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    features: ['Adjacent to dormitory blocks', 'Direct supervision access', 'Emergency communication line', 'On-call 24 hours'],
  },
];

const DAILY_SCHEDULE = [
  { time: '5:30 AM', activity: 'Wake-up Bell & Morning Hygiene', icon: 'fas fa-sun' },
  { time: '6:00 AM', activity: 'Morning Prayer / Chapel', icon: 'fas fa-pray' },
  { time: '6:30 AM', activity: 'Breakfast', icon: 'fas fa-coffee' },
  { time: '7:15 AM', activity: 'School Departure (Bus / Walk)', icon: 'fas fa-bus' },
  { time: '2:30 PM', activity: 'Return from School & Lunch', icon: 'fas fa-utensils' },
  { time: '3:30 PM', activity: 'Rest / Recreation Hour', icon: 'fas fa-volleyball-ball' },
  { time: '5:00 PM', activity: 'Supervised Study Hall', icon: 'fas fa-book-open' },
  { time: '7:30 PM', activity: 'Dinner', icon: 'fas fa-drumstick-bite' },
  { time: '8:30 PM', activity: 'Evening Prayer & Roll Call', icon: 'fas fa-moon' },
  { time: '9:00 PM', activity: 'Lights Out', icon: 'fas fa-power-off' },
];

const RULES = [
  'Residents must maintain silence during study hours (5:00 PM – 8:30 PM).',
  'Mobile phones are permitted only during designated recreation hours.',
  'Exiting the hostel premises requires prior written permission from the Warden.',
  'Visitors (parents/guardians) are permitted on Sundays between 10:00 AM and 4:00 PM only.',
  'All residents must attend morning prayer and evening roll call.',
  'Ragging of any form is strictly prohibited and will result in immediate expulsion.',
  'Cleanliness of personal and common areas is the shared responsibility of all residents.',
  'Prescribed uniform is mandatory during school hours; decent attire required at all times on campus.',
  'Any damage to hostel property will be recovered from the resident\'s security deposit.',
  'Medical leave must be certified by the on-duty warden and school nurse.',
];

const FEE_TABLE = [
  { item: 'Hostel Admission Fee (One-time)', amount: '₹2,000' },
  { item: 'Monthly Boarding & Lodging', amount: '₹3,500/month' },
  { item: 'Meals (Breakfast, Lunch, Dinner)', amount: 'Included' },
  { item: 'Electricity & Water Charges', amount: 'Included' },
  { item: 'Security Deposit (Refundable)', amount: '₹5,000' },
  { item: 'Bedding Set (First Year)', amount: '₹1,200 (one-time)' },
];

export const GirlsHostelPage: React.FC<GirlsHostelPageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const [activeTab, setActiveTab] = useState<'facilities' | 'schedule' | 'rules' | 'fees'>(
    'facilities'
  );

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0c2d57] text-white overflow-hidden">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #d97706 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0c4a8a 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          {/* Back button */}
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition-all mb-8 cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon badge */}
            <div className="flex-shrink-0 h-20 w-20 rounded-2xl bg-[#d97706] flex items-center justify-center shadow-lg">
              <i className="fas fa-home text-white text-3xl" aria-hidden="true" />
            </div>
            <div>
              <span className="inline-block rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3">
                Campus Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Girls' Hostel
              </h1>
              <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-2xl text-justify">
                A safe, nurturing residential home for girl students — combining academic discipline,
                spiritual growth, and comfortable living at St. Michael's Higher Secondary School, Umsning.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Capacity', value: '120+', icon: 'fas fa-users' },
              { label: 'Resident Wardens', value: '4', icon: 'fas fa-user-shield' },
              { label: 'Meals / Day', value: '3', icon: 'fas fa-utensils' },
              { label: 'Study Hours / Day', value: '3.5 hrs', icon: 'fas fa-clock' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/10 border border-white/15 p-4 text-center backdrop-blur-sm"
              >
                <i className={`${stat.icon} text-[#d97706] text-xl mb-2`} aria-hidden="true" />
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-blue-200 font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tab Navigation ──────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {(
              [
                { key: 'facilities', label: 'Facilities', icon: 'fas fa-star' },
                { key: 'schedule', label: 'Daily Schedule', icon: 'fas fa-clock' },
                { key: 'rules', label: 'Rules & Guidelines', icon: 'fas fa-scroll' },
                { key: 'fees', label: 'Hostel Fees', icon: 'fas fa-rupee-sign' },
              ] as { key: typeof activeTab; label: string; icon: string }[]
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#0c4a8a] text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <i className={tab.icon} aria-hidden="true" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tab Content ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* FACILITIES TAB */}
        {activeTab === 'facilities' && (
          <div id="hostel-facilities">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2d57] mb-2">
                Hostel Facilities & Amenities
              </h2>
              <p className="text-slate-600 text-justify">
                Our Girls' Hostel is designed to provide a home-away-from-home experience, with
                modern amenities, a disciplined routine, and caring supervision for holistic development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {FACILITIES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 hover:shadow-md hover:border-[#0c4a8a]/30 transition-all"
                >
                  <div className="h-11 w-11 rounded-xl bg-[#0c4a8a]/10 flex items-center justify-center mb-4">
                    <i className={`${f.icon} text-[#0c4a8a] text-lg`} aria-hidden="true" />
                  </div>
                  <h3 className="font-extrabold text-[#0c2d57] text-sm mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed text-justify">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Room Types */}
            <div id="room-types">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2d57] mb-6">
                Room Types & Dormitory Layout
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {ROOM_TYPES.map((r) => (
                  <div
                    key={r.type}
                    className={`rounded-2xl border p-5 ${r.color}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <i className={`${r.icon} text-[#0c4a8a] text-xl`} aria-hidden="true" />
                      <div>
                        <h3 className="font-extrabold text-[#0c2d57] text-sm">{r.type}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.badge}`}>
                          {r.capacity}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {r.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                          <i className="fas fa-check text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCHEDULE TAB */}
        {activeTab === 'schedule' && (
          <div id="meals-schedule">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2d57] mb-2">
                Daily Routine & Meal Schedule
              </h2>
              <p className="text-slate-600 text-justify">
                A structured daily routine builds discipline, good habits, and ensures adequate time
                for academics, prayer, meals, rest, and personal development.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0c4a8a] to-[#d97706] rounded-full" />

              <div className="space-y-3 ml-4">
                {DAILY_SCHEDULE.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pl-10 relative">
                    {/* Dot */}
                    <div className="absolute left-0 top-3 h-9 w-9 rounded-xl bg-[#0c4a8a] flex items-center justify-center shadow-sm flex-shrink-0">
                      <i className={`${item.icon} text-white text-xs`} aria-hidden="true" />
                    </div>
                    <div className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-mono text-xs font-black text-[#d97706] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg flex-shrink-0">
                          {item.time}
                        </span>
                        <span className="font-semibold text-[#0c2d57] text-sm">{item.activity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meals detail */}
            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-extrabold text-[#0c2d57] text-base mb-4 flex items-center gap-2">
                <i className="fas fa-utensils text-[#d97706]" aria-hidden="true" />
                Meal Plan Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { meal: 'Breakfast', time: '6:30 AM', items: 'Rice/Bread, Eggs/Dal, Tea/Milk' },
                  { meal: 'Lunch', time: '2:30 PM', items: 'Rice, Dal, Vegetables, Fish/Chicken (alt. days)' },
                  { meal: 'Dinner', time: '7:30 PM', items: 'Rice/Chapati, Curry, Salad, Fruit (seasonal)' },
                ].map((m) => (
                  <div key={m.meal} className="rounded-xl bg-white border border-amber-200 p-4">
                    <div className="font-extrabold text-[#0c2d57] text-sm mb-1">{m.meal}</div>
                    <div className="text-xs text-[#d97706] font-bold mb-2 font-mono">{m.time}</div>
                    <div className="text-xs text-slate-600">{m.items}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-amber-800">
                * Special dietary requirements (medical, allergies) can be accommodated upon prior application to the Warden.
              </p>
            </div>
          </div>
        )}

        {/* RULES TAB */}
        {activeTab === 'rules' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2d57] mb-2">
                Hostel Rules & Guidelines
              </h2>
              <p className="text-slate-600 text-justify">
                All residents are expected to abide by the following rules to maintain a safe,
                disciplined, and harmonious living environment. Parents/guardians are requested
                to acquaint their wards with these regulations before admission.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {RULES.map((rule, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 px-5 py-4 ${
                    idx !== RULES.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div className="flex-shrink-0 h-7 w-7 rounded-lg bg-[#0c4a8a] text-white text-xs font-black flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify">{rule}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <div className="flex items-start gap-3">
                <i className="fas fa-exclamation-triangle text-rose-500 text-lg mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-extrabold text-rose-800 text-sm mb-1">Important Notice</h4>
                  <p className="text-xs text-rose-700 text-justify">
                    Violation of hostel rules may result in disciplinary action, including suspension
                    of hostel privileges or expulsion from the hostel. All decisions of the Hostel
                    Management Committee shall be final and binding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FEES TAB */}
        {activeTab === 'fees' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0c2d57] mb-2">
                Hostel Fee Structure
              </h2>
              <p className="text-slate-600 text-justify">
                The following fee schedule applies for the academic session 2026–27. All fees are
                payable by demand draft / cash at the school office. No fee is collected online.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0c2d57] text-white">
                    <th className="text-left px-5 py-3.5 font-extrabold text-xs uppercase tracking-wider">
                      Fee Component
                    </th>
                    <th className="text-right px-5 py-3.5 font-extrabold text-xs uppercase tracking-wider">
                      Amount (2026–27)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_TABLE.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    >
                      <td className="px-5 py-3.5 text-slate-700 font-semibold">{row.item}</td>
                      <td className="px-5 py-3.5 text-right font-extrabold text-[#0c4a8a]">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 mb-6">
              <h4 className="font-extrabold text-[#0c2d57] text-sm mb-2 flex items-center gap-2">
                <i className="fas fa-info-circle text-[#0c4a8a]" aria-hidden="true" />
                Admission Procedure
              </h4>
              <ol className="space-y-2 text-xs text-slate-700 list-decimal list-inside">
                <li>Obtain hostel admission form from the School Secretariat (Office hrs: 9 AM – 2 PM).</li>
                <li>Submit completed form with passport photos, address proof, and school ID.</li>
                <li>Interview with the Hostel Warden / School Management.</li>
                <li>Pay the required fees (Admission + Security Deposit + First Month) upon selection.</li>
                <li>Report on the specified joining date with prescribed bedding and personal items.</li>
              </ol>
            </div>
          </div>
        )}

        {/* ── Contact Section ─────────────────────────────────────── */}
        <div id="hostel-contact" className="mt-10 rounded-2xl border border-slate-200 bg-[#0c2d57] text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-2">Contact the Hostel Office</h3>
              <p className="text-blue-200 text-sm mb-4 text-justify">
                For admissions, inquiries, or to schedule a visit, please contact the Girls' Hostel
                Warden or the School Secretariat during office hours.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <i className="fas fa-user-shield text-[#d97706] w-5" aria-hidden="true" />
                  <span className="text-blue-100">Hostel Warden: Sr. Facility Coordinator</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-[#d97706] w-5" aria-hidden="true" />
                  <span className="text-blue-100">+91-364-258-XXXX (School Office)</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-[#d97706] w-5" aria-hidden="true" />
                  <span className="text-blue-100">St. Michael's H.S. School Campus, Umsning – 793122, Meghalaya</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-clock text-[#d97706] w-5" aria-hidden="true" />
                  <span className="text-blue-100">Office Hours: Mon–Sat, 9:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={onOpenAdmission}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <i className="fas fa-paper-plane" aria-hidden="true" />
                <span>Apply for Admission</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer"
              >
                <i className="fas fa-envelope" aria-hidden="true" />
                <span>Contact School Office</span>
              </button>
            </div>
          </div>
        </div>

        {/* Back button (bottom) */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] hover:bg-[#0c2d57] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true" />
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GirlsHostelPage;
