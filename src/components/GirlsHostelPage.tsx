import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface GirlsHostelPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

const FACILITIES = [
  {
    icon: 'fas fa-bed',
    title: 'Comfortable Dormitories',
    desc: 'Spacious, well-ventilated dormitory rooms with individual cots, storage cupboards, personal mattresses, and study desks for each resident.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: '24/7 Security & CCTV',
    desc: 'Round-the-clock boundary surveillance, secure gated access, and trained resident female wardens on duty inside the residential premises at all times.',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Hygienic Dining & Pure Meals',
    desc: 'Wholesome, home-style meals prepared fresh three times daily in a dedicated sanitized dining hall under strict nutritional supervision.',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Continuous Power Backup',
    desc: 'Uninterrupted power supply via automatic institutional generator sets guaranteeing reliable lighting, ventilation, and study facilities 24/7.',
  },
  {
    icon: 'fas fa-tint',
    title: 'Treated Water & Clean Washrooms',
    desc: 'Multi-stage filtered pure drinking water stations and sanitary, modern washrooms maintained daily with continuous running water supply.',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Supervised Study Hall',
    desc: 'Dedicated quiet study hall with individual desk spaces, supervised every evening from 5:00 PM – 8:30 PM for disciplined academic preparation.',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Infirmary & First-Aid Care',
    desc: 'Immediate emergency medical support and first aid under an on-call attendant, with direct hospital escort to medical centers in Umsning when needed.',
  },
  {
    icon: 'fas fa-pray',
    title: 'Chapel & Morning Devotion',
    desc: 'Peaceful prayer space fostering spiritual grounding, daily reflective morning assembly, and Sunday worship services for resident students.',
  },
  {
    icon: 'fas fa-volleyball-ball',
    title: 'Sports & Evening Recreation',
    desc: 'Secure playground space for volleyball, badminton, indoor recreation, and guided social interactions during designated evening breaks.',
  },
];

const ROOM_TYPES = [
  {
    type: 'Standard Student Dormitory',
    capacity: '8 – 10 Residents',
    icon: 'fas fa-users',
    features: [
      'Individual steel cot with firm mattress & pillow',
      'Personal steel locker / storage cupboard',
      'Spacious well-lit study table setup',
      'Ceiling ventilation fans & emergency night lighting',
    ],
  },
  {
    type: 'Senior Wing Shared Room',
    capacity: '4 – 6 Residents',
    icon: 'fas fa-user-friends',
    features: [
      'Reserved for Class XI & XII board exam candidates',
      'Personal study desk with dedicated power socket',
      'Enhanced personal wardrobe space',
      'Close proximity to faculty consultation desks',
    ],
  },
  {
    type: 'Resident Warden & Matron Quarters',
    capacity: 'Full-Time Supervision',
    icon: 'fas fa-user-shield',
    features: [
      'Quarters integrated directly inside dormitory wings',
      'Immediate round-the-clock emergency assistance',
      'Daily health & wellness check-ins for all girls',
      'Direct landline & school administration contact',
    ],
  },
];

const DAILY_SCHEDULE = [
  { time: '05:30 AM', activity: 'Morning Bell & Personal Hygiene', icon: 'fas fa-sun' },
  { time: '06:00 AM', activity: 'Morning Assembly & Chapel Devotion', icon: 'fas fa-pray' },
  { time: '06:30 AM', activity: 'Hot Wholesome Breakfast', icon: 'fas fa-coffee' },
  { time: '07:15 AM', activity: 'Orderly Campus Departure to School Block', icon: 'fas fa-school' },
  { time: '02:30 PM', activity: 'Return to Hostel & Nutritious Lunch', icon: 'fas fa-utensils' },
  { time: '03:30 PM', activity: 'Rest & Controlled Recreation Hour', icon: 'fas fa-volleyball-ball' },
  { time: '05:00 PM', activity: 'Compulsory Supervised Study Session (Evening Prep)', icon: 'fas fa-book-open' },
  { time: '07:30 PM', activity: 'Dinner & Dining Hall Fellowship', icon: 'fas fa-concierge-bell' },
  { time: '08:30 PM', activity: 'Night Roll Call & Silent Personal Study', icon: 'fas fa-moon' },
  { time: '09:30 PM', activity: 'Lights Out & Rest', icon: 'fas fa-bed' },
];

const RULES = [
  'Strict punctuality and attendance at morning devotion, scheduled study hours, and evening roll calls are mandatory.',
  'Mobile phones and personal electronic gadgets are permitted strictly during designated recreation slots only.',
  'Leaving hostel gates requires prior written permission from the Warden with verified parental endorsement.',
  'Parents and recognized local guardians may visit on Sundays between 10:00 AM and 4:00 PM at the visitor hall.',
  'Ragging or disciplinary misconduct of any nature is strictly prohibited and invites immediate expulsion.',
  'Residents must keep personal lockers, study stations, and shared washrooms meticulously neat and sanitized.',
  'Prescribed school uniform is required during academic class hours; respectful modest attire on hostel premises.',
  'Unscheduled electrical heating appliances, kettles, and unauthorized items are prohibited in dormitories.',
];

const FEE_TABLE = [
  { item: 'Hostel Registration & Admission (One-Time)', amount: '₹2,500' },
  { item: 'Quarterly Boarding & Lodging Fee', amount: '₹10,500' },
  { item: 'Nutritious Meal Plan (Breakfast, Lunch, Evening Tea, Dinner)', amount: 'Included' },
  { item: 'Generator Backup, Water & Maintenance', amount: 'Included' },
  { item: 'Security Deposit (Refundable at academic exit)', amount: '₹5,000' },
  { item: 'Mattress & Bedding Setup (First-Year Issue)', amount: '₹1,500' },
];

export const GirlsHostelPage: React.FC<GirlsHostelPageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const [activeTab, setActiveTab] = useState<'facilities' | 'schedule' | 'rules' | 'fees'>('facilities');

  return (
    <section
      id="girls-hostel-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb & Navigation Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true" />
            <span>Back to Home Page</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
            <span className="text-[#0c4a8a]">Campus Life</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true" />
            <span className="text-[#d97706]">Girls' Hostel &amp; Residential Care</span>
          </div>

          <div className="flex items-center gap-2">
            {onOpenAdmission && (
              <button
                type="button"
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-amber-700 cursor-pointer"
              >
                <i className="fas fa-paper-plane" aria-hidden="true" />
                <span>Apply for Admission</span>
              </button>
            )}
          </div>
        </div>

        {/* Hero Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10 mb-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-home mr-1.5" aria-hidden="true" />
                  Residential Campus Wing
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-shield-alt mr-1.5" aria-hidden="true" />
                  Safe, Supervised &amp; Disciplined Living
                </span>
              </div>

              <h1 className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight">
                St. Michael's Girls' Hostel
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100 text-justify">
                A safe, secure, and nurturing home-away-from-home for girl students of{' '}
                <strong>{SCHOOL_INFO.name}</strong>, Umsning. Fostering academic rigor, moral character, and joyful fellowship in the heart of Ri Bhoi District.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              {onOpenAdmission && (
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                  <span>Hostel Admission Enquiry</span>
                </button>
              )}
              {onNavigatePage && (
                <button
                  type="button"
                  onClick={() => onNavigatePage('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <i className="fas fa-phone-alt text-amber-300" aria-hidden="true" />
                  <span>Contact Hostel Office</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-white/15 pt-6">
            {[
              { label: 'Resident Capacity', value: '120+ Beds', icon: 'fas fa-bed' },
              { label: 'Supervising Matrons', value: '24/7 On Campus', icon: 'fas fa-user-shield' },
              { label: 'Fresh Daily Meals', value: '3 Courses + Tea', icon: 'fas fa-utensils' },
              { label: 'Daily Supervised Prep', value: '3.5 Hours', icon: 'fas fa-clock' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-3.5 sm:p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 text-[#d97706] text-sm mb-1">
                  <i className={stat.icon} aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                    {stat.label}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          {[
            { key: 'facilities', label: 'Hostel Facilities', icon: 'fas fa-building' },
            { key: 'schedule', label: 'Daily Schedule & Routine', icon: 'fas fa-clock' },
            { key: 'rules', label: 'Rules & Guidelines', icon: 'fas fa-clipboard-list' },
            { key: 'fees', label: 'Hostel Fees & Admission', icon: 'fas fa-file-invoice-dollar' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#0c4a8a] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-[#0c4a8a]'
              }`}
            >
              <i className={tab.icon} aria-hidden="true" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: FACILITIES */}
        {activeTab === 'facilities' && (
          <div id="hostel-facilities" className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#d97706]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                  Residential Amenities
                </span>
              </div>
              <h2 className="vision-serif-heading text-2xl sm:text-3xl font-extrabold text-[#0c4a8a]">
                Hostel Facilities &amp; Living Environment
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-3xl text-justify">
                Our girls' dormitory blocks are thoughtfully built with clean ventilation, personal study spaces, modern washroom blocks, and strong security protection, giving parents complete peace of mind.
              </p>
            </div>

            {/* Facilities Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FACILITIES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#0c4a8a]/40 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-slate-100 text-[#0c4a8a] flex items-center justify-center text-xl mb-4">
                    <i className={f.icon} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0c4a8a] mb-2">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Room Accommodations Breakdown */}
            <div id="room-types" className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#d97706]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                  Living Spaces
                </span>
              </div>
              <h2 className="vision-serif-heading text-2xl sm:text-3xl font-extrabold text-[#0c4a8a] mb-6">
                Room Types &amp; Wing Layout
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ROOM_TYPES.map((room) => (
                  <div
                    key={room.type}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="h-10 w-10 rounded-xl bg-[#0c4a8a]/10 text-[#0c4a8a] flex items-center justify-center text-lg">
                          <i className={room.icon} aria-hidden="true" />
                        </span>
                        <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900">
                          {room.capacity}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-[#0c4a8a] mb-4">{room.type}</h3>
                      <ul className="space-y-2.5">
                        {room.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-slate-600">
                            <i className="fas fa-check-circle text-emerald-600 mt-0.5 text-xs flex-shrink-0" aria-hidden="true" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SCHEDULE */}
        {activeTab === 'schedule' && (
          <div id="meals-schedule" className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#d97706]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                  Daily Life
                </span>
              </div>
              <h2 className="vision-serif-heading text-2xl sm:text-3xl font-extrabold text-[#0c4a8a]">
                Daily Routine &amp; Dining Schedule
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-3xl text-justify">
                A disciplined, balanced clock helps students excel in academics while maintaining physical fitness, spiritual well-being, and structured study routines under teacher guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Daily Schedule Timeline */}
              <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-extrabold text-[#0c4a8a] mb-6 flex items-center gap-2">
                  <i className="fas fa-calendar-day text-[#d97706]" aria-hidden="true" />
                  <span>Standard Weekday Routine</span>
                </h3>

                <div className="divide-y divide-slate-100">
                  {DAILY_SCHEDULE.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                      <div className="h-9 w-9 rounded-xl bg-slate-100 text-[#0c4a8a] flex items-center justify-center flex-shrink-0 text-sm">
                        <i className={item.icon} aria-hidden="true" />
                      </div>
                      <div className="w-24 sm:w-28 flex-shrink-0">
                        <span className="font-mono text-xs font-black text-[#d97706]">
                          {item.time}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-700">
                        {item.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meal Plan & Hygiene */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#0c4a8a] mb-4 flex items-center gap-2">
                    <i className="fas fa-utensils text-[#d97706]" aria-hidden="true" />
                    <span>Dining Standards</span>
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                    <p className="text-justify">
                      Every meal is prepared inside our dedicated institutional kitchen under sanitary norms. The menu balances nutrition with traditional Meghalayan and Indian home cooking.
                    </p>
                    <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3 text-xs space-y-1.5">
                      <div className="font-bold text-[#0c4a8a]">Breakfast (6:30 AM)</div>
                      <div className="text-slate-600">Eggs, milk/tea, bread, porridge, or hot Indian breakfast.</div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3 text-xs space-y-1.5">
                      <div className="font-bold text-[#0c4a8a]">Lunch (2:30 PM)</div>
                      <div className="text-slate-600">Steamed rice, seasonal vegetables, lentils (dal), and non-veg options on scheduled days.</div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3 text-xs space-y-1.5">
                      <div className="font-bold text-[#0c4a8a]">Dinner (7:30 PM)</div>
                      <div className="text-slate-600">Fresh dinner courses, balanced pulses, wholesome curries, and warm drinking milk.</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                    <i className="fas fa-bell text-[#d97706]" aria-hidden="true" />
                    <span>Sunday Visiting Schedule</span>
                  </h4>
                  <p className="text-xs text-amber-900 leading-relaxed text-justify">
                    Parents and registered local guardians can visit their daughters every Sunday between <strong>10:00 AM and 4:00 PM</strong> at the Visitor Parlour after presenting their Parent ID pass.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RULES */}
        {activeTab === 'rules' && (
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#d97706]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                  Code of Conduct
                </span>
              </div>
              <h2 className="vision-serif-heading text-2xl sm:text-3xl font-extrabold text-[#0c4a8a]">
                Hostel Regulations &amp; Safety Guidelines
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-3xl text-justify">
                To nurture a peaceful and morally uplifting environment, every resident student must adhere to the discipline guidelines set forth by the School Management and Hostel Matrons.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {RULES.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fafc] border border-slate-100">
                    <span className="h-6 w-6 rounded-lg bg-[#0c4a8a] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-4">
                <div className="flex items-start gap-3">
                  <i className="fas fa-exclamation-triangle text-rose-600 text-lg mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <strong>Zero Tolerance Policy:</strong> St. Michael's enforces strict zero-tolerance against ragging, harassment, or insubordination. Any resident in breach of institutional discipline will be issued a warning or dismissed by the Principal.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FEES */}
        {activeTab === 'fees' && (
          <div id="hostel-fees" className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#d97706]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                  Approved Schedule 2026–27
                </span>
              </div>
              <h2 className="vision-serif-heading text-2xl sm:text-3xl font-extrabold text-[#0c4a8a]">
                Hostel Fee Structure &amp; Admission Procedure
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-3xl text-justify">
                Clear, transparent residential boarding fees for girl students. Boarding includes three daily meals, continuous power, study supervision, and filtered drinking water.
              </p>
            </div>

            {/* Fee Table */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0c4a8a] text-white">
                    <tr>
                      <th className="px-5 py-3.5 font-extrabold uppercase tracking-wider">
                        Hostel Fee Component
                      </th>
                      <th className="px-5 py-3.5 font-extrabold uppercase tracking-wider text-right">
                        Session 2026–27
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {FEE_TABLE.map((row, idx) => (
                      <tr key={row.item} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                        <td className="px-5 py-3.5 font-semibold text-slate-700">{row.item}</td>
                        <td className="px-5 py-3.5 font-black text-right text-[#0c4a8a]">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Admission Steps */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-extrabold text-[#0c4a8a] mb-4 flex items-center gap-2">
                <i className="fas fa-user-check text-[#d97706]" aria-hidden="true" />
                <span>Hostel Admission Process</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Collect Form', desc: 'Obtain the Hostel Admission Form from the School Secretariat.' },
                  { step: '02', title: 'Submit Documents', desc: 'Provide student ID, 3 passport photos, address verification, and medical declaration.' },
                  { step: '03', title: 'Warden Interaction', desc: 'Personal interaction with Matron / Headmistress accompanied by parents.' },
                  { step: '04', title: 'Allotment & Bedding', desc: 'Deposit fees at Accounts counter and receive room, cot & locker allocation.' },
                ].map((s) => (
                  <div key={s.step} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                    <span className="font-mono text-xs font-black text-[#d97706]">Step {s.step}</span>
                    <h4 className="text-sm font-extrabold text-[#0c4a8a] mt-1 mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Hostel In-Charge Bar */}
        <div
          id="hostel-contact"
          className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-xl sm:p-8"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 mb-3">
                Hostel Administration Office
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Inquiries &amp; Residential Admissions
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-blue-100 max-w-2xl text-justify">
                For hostel seat vacancy, boarding details, or to arrange a parent campus visit, please reach out directly to the Hostel Office or visit the School Secretariat on working days.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-200">
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-phone-alt text-[#d97706]" aria-hidden="true" />
                  <span>{SCHOOL_INFO.phoneMobile}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-map-marker-alt text-[#d97706]" aria-hidden="true" />
                  <span>{SCHOOL_INFO.addressShort}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="fas fa-clock text-[#d97706]" aria-hidden="true" />
                  <span>Visiting Hours: Sun 10:00 AM – 4:00 PM</span>
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              {onOpenAdmission && (
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                  <span>Apply Online</span>
                </button>
              )}
              {onNavigatePage && (
                <button
                  type="button"
                  onClick={() => onNavigatePage('contact')}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer"
                >
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <span>Contact School Office</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true" />
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GirlsHostelPage;
