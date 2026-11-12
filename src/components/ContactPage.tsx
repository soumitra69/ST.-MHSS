import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

const OFFICIAL_MAP_SHARE_URL = 'https://share.google/xohLhc6GWxPh6H3cc';
const OFFICIAL_MAP_EMBED_URL =
  "https://maps.google.com/maps?q=St.+Michael's+Higher+Secondary+School+Umsning+Meghalaya+793105&t=&z=15&ie=UTF8&iwloc=&output=embed";

interface ContactPageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

const contactChannels = [
  {
    icon: 'fas fa-phone-alt',
    title: 'Secretariat & Office Phone',
    primary: SCHOOL_INFO.phoneMobile,
    secondary: SCHOOL_INFO.phone,
    note: 'Mon – Fri: 8:45 AM – 11:55 AM & 12:35 PM – 3:00 PM',
    actionText: 'Call Now',
    actionHref: `tel:${SCHOOL_INFO.phoneMobile.replace(/[^0-9+]/g, '')}`,
    badge: 'Direct Desk',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Official Email Helpdesk',
    primary: SCHOOL_INFO.email,
    secondary: 'stmichaelumsning@gmail.com',
    note: 'Official admissions, TC verification & parent enquiries',
    actionText: 'Send Email',
    actionHref: `mailto:${SCHOOL_INFO.email}`,
    badge: 'Official Desk',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Campus Physical Address',
    primary: 'Umsning Town, NH-6 Corridor',
    secondary: 'Ri Bhoi District, Meghalaya – 793105',
    note: 'Left side of old National Highway, right side of Bypass',
    actionText: 'Get Directions',
    actionHref: OFFICIAL_MAP_SHARE_URL,
    badge: 'NH-6 Corridor',
  },
  {
    icon: 'fas fa-clock',
    title: 'Office & Visiting Hours',
    primary: 'Monday – Friday: 8:45 AM – 3:00 PM',
    secondary: 'Recess Break: 11:55 AM – 12:35 PM',
    note: 'Closed on Saturdays, Sundays, MBOSE & Diocesan Holidays',
    actionText: 'View Calendar',
    actionPage: 'academic-calendar' as AppPageId,
    badge: 'Campus Hours',
  },
];

const administrativeOffices = [
  {
    role: 'Office of the Principal',
    officer: 'Fr. Principal / Rev. Sisters',
    hours: '10:00 AM – 1:00 PM (By prior appointment / diary note)',
    duties: 'School governance, admissions approval, board correspondence, discipline & academics',
    contact: SCHOOL_INFO.phoneMobile,
  },
  {
    role: 'Vice Principal & Secretariat Desk',
    officer: 'Senior Academic Administrator',
    hours: '8:45 AM – 11:55 AM & 12:35 PM – 2:30 PM',
    duties: 'Admissions enquiry, Transfer Certificates (TC), attendance verification & student diary notes',
    contact: SCHOOL_INFO.phone,
  },
  {
    role: 'MBOSE Examination & Records Cell',
    officer: 'Controller of Internal & Board Exams',
    hours: '9:00 AM – 2:00 PM on working days',
    duties: 'MBOSE SSLC / HSSLC registrations, admit cards, official marksheets, and pass certificates',
    contact: SCHOOL_INFO.phoneMobile,
  },
  {
    role: 'Fee Counter & Accounts Section',
    officer: 'Campus Bursar & Finance Desk',
    hours: '9:00 AM – 1:30 PM (Working days only)',
    duties: 'Tuition receipt issuance, quarterly dues payment, bus pass renewal & fee clearance',
    contact: SCHOOL_INFO.email,
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentClass: 'Class XI Higher Secondary',
    category: 'Admissions & Eligibility',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#f8fafc] py-8 sm:py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb Bar */}
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
            <span className="text-[#d97706]">Contact Us</span>
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
            {onOpenAdmission && (
              <button
                type="button"
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                <span>Apply Admission</span>
              </button>
            )}
          </div>
        </div>

        {/* Hero Banner Header */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10 mb-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-headset mr-1.5" aria-hidden="true"></i>
                  Official School Helpdesk &amp; Contact Desk
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-map-marker-alt mr-1.5" aria-hidden="true"></i>
                  NH-6 Corridor • Umsning, Ri Bhoi
                </span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold !text-white leading-tight">
                Contact &amp; Visit Us
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Connect directly with the Secretariat, Principal&apos;s Office, Admissions Desk,
                and MBOSE Examination Cell at <strong>{SCHOOL_INFO.name}</strong>, Umsning.
                We welcome parents, alumni, and prospective scholars for admissions guidance and campus visits.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={OFFICIAL_MAP_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <i className="fas fa-directions" aria-hidden="true"></i>
                <span>Open Google Map</span>
              </a>
              <a
                href={`tel:${SCHOOL_INFO.phoneMobile.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <i className="fas fa-phone-alt text-amber-300" aria-hidden="true"></i>
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Primary Contact Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {contactChannels.map((ch) => (
            <div
              key={ch.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0c4a8a]/10 text-[#0c4a8a]">
                    <i className={`${ch.icon} text-lg`} aria-hidden="true"></i>
                  </div>
                  <span className="rounded-md bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                    {ch.badge}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#0c4a8a]">{ch.title}</h3>
                <p className="mt-2 text-sm font-bold text-slate-800 break-words">{ch.primary}</p>
                <p className="text-xs font-medium text-slate-600 break-words">{ch.secondary}</p>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">{ch.note}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                {ch.actionHref ? (
                  <a
                    href={ch.actionHref}
                    target={ch.actionHref.startsWith('http') ? '_blank' : undefined}
                    rel={ch.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0c4a8a] hover:text-[#d97706]"
                  >
                    <span>{ch.actionText}</span>
                    <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => ch.actionPage && onNavigatePage?.(ch.actionPage)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0c4a8a] hover:text-[#d97706] cursor-pointer"
                  >
                    <span>{ch.actionText}</span>
                    <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Layout: Send Message Form & Live Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Direct Message Form */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-[#0c4a8a] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                Online Enquiry Form
              </span>
              <span className="text-xs font-semibold text-slate-500">Fast Response</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0c4a8a]">
              Send an Official Enquiry
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Fill in your details below and our campus secretariat will connect with you regarding admissions, transfers, or academic queries.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <i className="fas fa-check-circle text-4xl text-emerald-600 mb-3" aria-hidden="true"></i>
                <h3 className="text-lg font-extrabold text-emerald-900">Enquiry Received</h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-800">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry has been registered with the St. Michael&apos;s Secretariat Desk. We will reach back to you at <strong>{formData.phone || formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      studentClass: 'Class XI Higher Secondary',
                      category: 'Admissions & Eligibility',
                      message: '',
                    });
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800 cursor-pointer"
                >
                  <i className="fas fa-redo" aria-hidden="true"></i>
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Wanphrang Lyngdoh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0c4a8a] focus:outline-none focus:ring-1 focus:ring-[#0c4a8a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0c4a8a] focus:outline-none focus:ring-1 focus:ring-[#0c4a8a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0c4a8a] focus:outline-none focus:ring-1 focus:ring-[#0c4a8a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Class
                    </label>
                    <select
                      value={formData.studentClass}
                      onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0c4a8a] focus:outline-none focus:ring-1 focus:ring-[#0c4a8a]"
                    >
                      <option>Class XI Higher Secondary (Science)</option>
                      <option>Class XI Higher Secondary (Arts)</option>
                      <option>Class XI Higher Secondary (Commerce)</option>
                      <option>Class IX &amp; X (Secondary MBOSE)</option>
                      <option>Classes VI – VIII (Upper Primary)</option>
                      <option>Classes I – V (Lower Primary)</option>
                      <option>Nursery &amp; Kindergarten (KG)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enquiry Subject / Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0c4a8a] focus:outline-none focus:ring-1 focus:ring-[#0c4a8a]"
                  >
                    <option>Admissions &amp; Eligibility 2026–27</option>
                    <option>Fee Structure &amp; Bus Transport</option>
                    <option>Transfer Certificate (TC) &amp; Marksheets</option>
                    <option>Scholarships &amp; Merit Endowments</option>
                    <option>Principal Appointment &amp; Visit Request</option>
                    <option>Alumni &amp; Community Outreach</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify student details, previous school name, or your specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-3.5 text-xs sm:text-sm text-slate-800 focus:border-[#0c4a8a] focus:outline-none focus:ring-1 focus:ring-[#0c4a8a]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0c4a8a] py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#d97706] cursor-pointer"
                >
                  <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
                  <span>Submit Message to Secretariat</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Interactive Google Map & Campus Reach Details */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                    <i className="fas fa-location-arrow mr-1" aria-hidden="true"></i>
                    Live Google Map
                  </span>
                  <h3 className="mt-1 text-base font-extrabold text-[#0c4a8a]">
                    Campus Location on NH-6
                  </h3>
                </div>
                <a
                  href={OFFICIAL_MAP_SHARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d97706] hover:underline"
                >
                  <span>Open Full Screen</span>
                  <i className="fas fa-external-link-alt text-[10px]" aria-hidden="true"></i>
                </a>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-inner">
                <iframe
                  title="Official Google Map - St. Michael's Higher Secondary School Umsning"
                  src={OFFICIAL_MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <i className="fas fa-car text-[#0c4a8a] mt-0.5 shrink-0" aria-hidden="true"></i>
                  <div>
                    <strong className="text-slate-900">How to Reach by Road:</strong>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">
                      Located in Umsning Town along the Guwahati–Shillong NH-6 corridor. Approximately 30 km from Shillong city and 22 km from Nongpoh. Convenient bus and maxi-cab connections from Mawlai, Umsning Zero Point, and Bhoirymbong.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Emergency Desk Card */}
            <div className="rounded-3xl border border-slate-700 bg-[#0c2d57] p-6 text-white shadow-md">
              <span className="inline-block rounded-md bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                Direct Helpdesk
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-white">
                Need Immediate Assistance?
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-200">
                For emergency campus notices, bus route enquiries, or urgent TC collection, call during working hours or send a WhatsApp message to our admissions desk.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.phoneMobile.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-sm transition-transform hover:scale-[1.02]"
                >
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <span>Call {SCHOOL_INFO.phoneMobile}</span>
                </a>
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
                >
                  <i className="fas fa-envelope text-amber-300" aria-hidden="true"></i>
                  <span>Email Principal</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Administrative Offices & Visiting Hours Table */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <span className="rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                Administrative Directory
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-[#0c4a8a]">
                Departmental Desks &amp; Office Contacts
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              School Code: {SCHOOL_INFO.schoolCode} • Estd. {SCHOOL_INFO.established}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {administrativeOffices.map((office) => (
              <div
                key={office.role}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 shadow-xs transition-colors hover:bg-white hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-extrabold text-[#0c4a8a]">{office.role}</h3>
                  <span className="rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                    {office.officer}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock text-amber-600 text-[11px]" aria-hidden="true"></i>
                    <span className="font-semibold text-slate-800">{office.hours}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="fas fa-info-circle text-[#0c4a8a] text-[11px] mt-0.5" aria-hidden="true"></i>
                    <span>{office.duties}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-[#0c4a8a] font-bold">
                    <i className="fas fa-phone-alt text-[10px]" aria-hidden="true"></i>
                    <span>{office.contact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              {SCHOOL_INFO.name}, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Catholic Mission of Umsning, Archdiocese of Shillong • Affiliated to MBOSE ({SCHOOL_INFO.schoolCode})
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
