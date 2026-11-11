import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO, FEE_STRUCTURE, BUS_ROUTES } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface ServicePageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

/* ============================================================================
   1. ADMISSION DETAILS, PROCEDURE & FEE STRUCTURE PAGE (page: 'admissions-fees')
   ============================================================================ */
export const AdmissionsAndFeesPage: React.FC<ServicePageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const [selectedClassIdx, setSelectedClassIdx] = useState(3);
  const [includeBus, setIncludeBus] = useState(false);

  const selectedFee = FEE_STRUCTURE[selectedClassIdx] || FEE_STRUCTURE[0];

  const admissionSteps = [
    {
      step: 'Step 01',
      title: 'Application & Prospectus Collection',
      desc: 'Collect the official Admission Form and School Prospectus from the School Secretariat during office hours (Mon–Fri, 8:45 AM – 3:00 PM) or submit an online Admission Enquiry.',
    },
    {
      step: 'Step 02',
      title: 'Document & Transfer Certificate (TC) Verification',
      desc: 'Submit the completed form along with the original Transfer Certificate (TC) from a recognised school, Birth Certificate, MBOSE Report Card/Marksheet, and passport photographs.',
    },
    {
      step: 'Step 03',
      title: 'Diagnostic Interaction & Principal Interview',
      desc: 'Candidates must appear in person in clean attire along with their parents or legal guardians before the Principal / Section Headmistress for interactive counseling.',
    },
    {
      step: 'Step 04',
      title: 'Fee Deposit, Uniform & House Allotment',
      desc: 'Upon confirmation of admission, complete the admission fee deposit at the Accounts Counter to receive the Student ID, School Diary, and Archangel House allotment.',
    },
  ];

  return (
    <section
      id="admissions-fees-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#0c4a8a]">Admission</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Admission Procedure &amp; Fee Structure 2026–27</span>
          </div>

          {onOpenAdmission && (
            <button
              type="button"
              onClick={onOpenAdmission}
              className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-amber-700 cursor-pointer"
            >
              <span>Apply Online 2026–27</span>
            </button>
          )}
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  Admissions Open • Session 2026–27
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  Nursery to Class XII (Arts, Science &amp; Commerce)
                </span>
              </div>

              <h1
                className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
                style={{ color: '#ffffff' }}
              >
                Admission Details, Procedure &amp; Fee Structure
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Official step-by-step admission procedure, Transfer Certificate (TC) regulations,
                Class XI Higher Secondary stream eligibility, and transparent annual fee structure
                for <strong>{SCHOOL_INFO.name}, Umsning</strong>.
              </p>
            </div>

            {onOpenAdmission && (
              <button
                type="button"
                onClick={onOpenAdmission}
                className="shrink-0 rounded-xl bg-[#d97706] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                Open Admission Enquiry Form
              </button>
            )}
          </div>
        </div>

        {/* Section 1: Step-by-Step Admission Procedure */}
        <div
          id="admission-procedure"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
            How to Apply
          </span>
          <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
            <span className="vision-double-angle" aria-hidden="true">
              &raquo;
            </span>{' '}
            Admission Details &amp; Step-by-Step Procedure
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-[#f8fafc] p-5"
              >
                <span className="inline-block rounded-md bg-[#d97706] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-white">
                  {s.step}
                </span>
                <h3 className="mt-2.5 text-base font-extrabold text-[#0c4a8a]">{s.title}</h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Required Documents & Higher Secondary Stream Cutoffs */}
        <div
          id="admission-documents"
          className="mt-10 scroll-mt-28 grid gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7">
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
              Official School Diary Rules
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Required Documents &amp; TC Guidelines
            </h2>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
              <li className="flex items-start gap-2">
                <i className="fas fa-check-circle text-[#0c4a8a] mt-1 shrink-0" aria-hidden="true"></i>
                <span>
                  <strong>Original Transfer Certificate (TC):</strong> Mandatory for candidates
                  joining from Class I onwards from a government-recognised institution.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check-circle text-[#0c4a8a] mt-1 shrink-0" aria-hidden="true"></i>
                <span>
                  <strong>Official Birth Certificate:</strong> Issued by Municipal / District
                  Registrar (mandatory for Nursery, LKG, UKG &amp; Class I).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check-circle text-[#0c4a8a] mt-1 shrink-0" aria-hidden="true"></i>
                <span>
                  <strong>Previous Class Progress Report &amp; MBOSE Marksheet:</strong> Attested
                  copies of final report card (or SSLC Admit Card &amp; Marksheet for Class XI).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check-circle text-[#0c4a8a] mt-1 shrink-0" aria-hidden="true"></i>
                <span>
                  <strong>Passport Photographs &amp; ST/SC/Tribal Certificate:</strong> 4 recent
                  passport-size photos in school uniform and caste/tribe certificate for scholarship
                  registration.
                </span>
              </li>
            </ul>
          </div>

          <div
            id="hs-stream-admission"
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7"
          >
            <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
              Class XI HSSLC Intake
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Higher Secondary (Class XI) Stream Eligibility
            </h2>
            <div className="mt-4 space-y-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                <strong className="text-[#0c4a8a]">Science Stream (PCM / PCB / Comp. Sci.):</strong>
                <p className="mt-1 text-slate-600">
                  First Division in MBOSE SSLC (or equivalent) with strong aggregate in Mathematics
                  and Science &amp; Technology.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                <strong className="text-[#0c4a8a]">Commerce Stream:</strong>
                <p className="mt-1 text-slate-600">
                  Clear pass in SSLC with strong aptitude in Mathematics, English, and analytical
                  subjects.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                <strong className="text-[#0c4a8a]">Arts &amp; Humanities Stream:</strong>
                <p className="mt-1 text-slate-600">
                  Merit-based admission for SSLC graduates; direct scholarship &amp; fee waiver for
                  State Top 20 rank holders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Complete Fee Structure Table */}
        <div
          id="fee-structure"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                Accounts &amp; Secretariat Desk
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Class-Wise Fee Structure (2026–27)
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              All figures in INR (₹) • Subject to Diocesan Management review
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0c4a8a] text-white">
                  <th className="rounded-tl-xl px-4 py-3 font-extrabold uppercase">Class Group</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Admission Fee</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Quarterly Tuition</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Annual Exam Fee</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Lab &amp; Computer</th>
                  <th className="px-4 py-3 font-extrabold uppercase">Sports &amp; Library</th>
                  <th className="rounded-tr-xl px-4 py-3 font-extrabold uppercase text-right">
                    Annual Estimate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {FEE_STRUCTURE.map((f, idx) => (
                  <tr key={f.classGroup} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                    <td className="px-4 py-3.5 font-extrabold text-[#0c4a8a]">{f.classGroup}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">{f.admissionFee}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">
                      {f.tuitionFeeQuarterly}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">{f.examFeeAnnual}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">
                      {f.labAndComputerAnnual}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-slate-700">
                      {f.sportsAndLibraryAnnual}
                    </td>
                    <td className="px-4 py-3.5 text-right font-black text-[#d97706]">
                      {f.totalAnnualEstimate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive Fee Estimator */}
          <div
            id="fee-calculator"
            className="mt-8 scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6"
          >
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0c4a8a]">
                  Interactive Annual Fee Estimator
                </h3>
                <p className="text-xs text-slate-600">
                  Select a class wing below to preview the breakdown for 2026–27:
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={selectedClassIdx}
                  onChange={(e) => setSelectedClassIdx(Number(e.target.value))}
                  aria-label="Select Class Group"
                  className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-extrabold text-[#0c4a8a]"
                >
                  {FEE_STRUCTURE.map((f, i) => (
                    <option key={f.classGroup} value={i}>
                      {f.classGroup}
                    </option>
                  ))}
                </select>

                <label className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeBus}
                    onChange={(e) => setIncludeBus(e.target.checked)}
                    className="rounded border-slate-300"
                  />
                  <span>Include NH-6 School Bus Transit</span>
                </label>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-white p-3.5 border border-slate-200">
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Admission Fee
                </span>
                <strong className="text-base font-black text-[#0c4a8a]">
                  {selectedFee.admissionFee}
                </strong>
              </div>
              <div className="rounded-xl bg-white p-3.5 border border-slate-200">
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Quarterly Tuition
                </span>
                <strong className="text-base font-black text-[#0c4a8a]">
                  {selectedFee.tuitionFeeQuarterly}
                </strong>
              </div>
              <div className="rounded-xl bg-white p-3.5 border border-slate-200">
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Lab, Exam &amp; Sports
                </span>
                <strong className="text-base font-black text-[#0c4a8a]">
                  {selectedFee.labAndComputerAnnual} + {selectedFee.examFeeAnnual}
                </strong>
              </div>
              <div className="rounded-xl bg-[#0c2d57] p-3.5 text-white">
                <span className="block text-[10px] font-bold uppercase text-amber-300">
                  Estimated Annual Total {includeBus ? '(+ Bus)' : ''}
                </span>
                <strong className="text-base font-black text-white">
                  {selectedFee.totalAnnualEstimate} {includeBus ? '+ Bus Route Fee' : ''}
                </strong>
              </div>
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
              Admissions &amp; Fee Counter Helpline: {SCHOOL_INFO.phoneMobile}
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

/* ============================================================================
   2. TRANSPORTATION DETAILS PAGE (page: 'transportation')
   ============================================================================ */
export const TransportationPage: React.FC<ServicePageProps> = ({ onBack }) => {
  return (
    <section
      id="transportation-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#0c4a8a]">Campus &amp; Welfare</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Transportation Details &amp; School Bus Routes</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                NH-6 Campus Transit Fleet • Routes 1 to 4
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                Nongpoh • Bhoirymbong • Umroi • Sumer • Umsning
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              School Transportation &amp; Bus Routes
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Safe, supervised daily school bus transportation connecting towns and rural villages
              across Ri Bhoi District along the NH-6 corridor and Shillong–Guwahati Bypass directly
              to <strong>{SCHOOL_INFO.name}, Umsning</strong>.
            </p>
          </div>
        </div>

        {/* Bus Routes Cards */}
        <div
          id="bus-routes-grid"
          className="mt-10 scroll-mt-28 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {BUS_ROUTES.map((route) => (
            <div
              key={route.routeNo}
              className="rounded-2xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-white p-6 shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-lg bg-[#0c4a8a] px-3 py-1 text-xs font-extrabold uppercase text-white">
                  {route.routeNo}
                </span>
                <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-xs font-extrabold text-amber-900">
                  Pickup: {route.pickupTime} • Dispersal: {route.dropTime}
                </span>
              </div>

              <h2 className="mt-3 text-lg sm:text-xl font-extrabold text-[#0c4a8a]">
                {route.busName}
              </h2>
              <p className="mt-1 text-xs font-bold text-[#d97706]">
                Route Coordinator: {route.inCharge}
              </p>

              <div className="mt-4">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Designated Pickup &amp; Drop Stops:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {route.stops.map((stop, idx) => (
                    <React.Fragment key={stop}>
                      <span className="rounded-lg border border-slate-200 bg-[#f8fafc] px-2.5 py-1 text-xs font-bold text-slate-700">
                        {stop}
                      </span>
                      {idx < route.stops.length - 1 && (
                        <span className="text-xs font-bold text-[#d97706]">&rarr;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timings & Safety Guidelines */}
        <div
          id="bus-timings-table"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div id="transport-rules" className="scroll-mt-28">
            <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
              Transit Safety &amp; Conduct
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Transportation Rules &amp; Student Safety Protocol
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
              <h3 className="text-sm font-extrabold text-[#0c4a8a]">
                1. Mandatory Bus ID Pass
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Students availing school bus transit must carry their official Bus Pass and School
                Diary every day and report to their designated stop 10 minutes prior to pickup.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
              <h3 className="text-sm font-extrabold text-[#0c4a8a]">
                2. Supervised Boarding &amp; Attendants
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Every school bus is accompanied by a trained conductor/attendant, first-aid kit, and
                speed-governed safety compliance along the NH-6 highway.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
              <h3 className="text-sm font-extrabold text-[#0c4a8a]">
                3. Route Registration &amp; Changes
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Applications for bus seat allotment or stop changes must be submitted in writing by
                parents at the School Secretariat before the start of the term.
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
              Campus Transport Desk • Helpline: {SCHOOL_INFO.phoneMobile}
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

/* ============================================================================
   3. SCHOLARSHIPS & STUDENT WELFARE PAGE (page: 'scholarships')
   ============================================================================ */
export const ScholarshipsWelfarePage: React.FC<ServicePageProps> = ({ onBack }) => {
  const scholarshipsList = [
    {
      badge: 'Institutional Merit Endowment',
      title: '₹20,000 St. Michael’s SSLC Award Body Cash Scholarship',
      eligibility: 'MBOSE SSLC (Class X) State Top 20 Merit Rank Holders from St. Michael’s',
      benefit: '₹20,000 Cash Endowment + 100% Class XI–XII Tuition Waiver + Citation Shield',
      desc: 'Instituted by the St. Michael’s SSLC Award Body to honor and reward students who bring state-level glory in the MBOSE Secondary Board Examination.',
    },
    {
      badge: 'Government & Tribal Welfare',
      title: 'Umbrella Scheme ST Pre-Matric & Post-Matric Scholarships (NSP)',
      eligibility: 'Eligible Scheduled Tribe (Khasi, Jaintia, Garo, Karbi, Tiwa) Scholars (Classes IX – XII)',
      benefit: 'Annual Maintenance Allowance & Book Grant via Direct Benefit Transfer (DBT)',
      desc: 'The School Secretariat provides a dedicated National Scholarship Portal (NSP) verification desk to assist all eligible students in timely online application.',
    },
    {
      badge: 'MBOSE & State Merit',
      title: 'Meghalaya Board Merit & Chief Minister’s Youth Scholarship',
      eligibility: 'High First-Division & Subject Toppers in MBOSE SSLC and HSSLC',
      benefit: 'State Merit Certificate & Annual Higher Secondary Academic Stipend',
      desc: 'Awarded by the Directorate of School Education & Literacy (DSEL), Government of Meghalaya.',
    },
    {
      badge: 'Diocesan Pastoral Freeship',
      title: 'Catholic Mission Compassionate Freeship & Sibling Concession',
      eligibility: 'Deserving students from economically weaker rural families & multiple siblings',
      benefit: 'Partial to Full Tuition Fee Concession approved by the School Managing Committee',
      desc: 'Rooted in the missionary legacy of Fr. Michael Balawan, SDB, ensuring no talented child in rural Ri Bhoi is denied education due to financial hardship.',
    },
  ];

  return (
    <section
      id="scholarships-welfare-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#0c4a8a]">Student Welfare</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Scholarships &amp; Student Welfare</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                Merit Endowments &amp; Pastoral Care
              </span>
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                ₹20,000 SSLC State Topper Endowment
              </span>
            </div>

            <h1
              className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
              style={{ color: '#ffffff' }}
            >
              Scholarships &amp; Student Welfare
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
              Supporting academic excellence and inclusive rural education through the ₹20,000 St.
              Michael&apos;s SSLC Award Endowment, state and tribal scholarships, pastoral
              counseling, and health welfare at <strong>{SCHOOL_INFO.name}, Umsning</strong>.
            </p>
          </div>
        </div>

        {/* Scholarships Grid */}
        <div
          id="merit-endowment"
          className="mt-10 scroll-mt-28 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {scholarshipsList.map((item) => (
            <div
              key={item.title}
              id="government-scholarships"
              className="scroll-mt-28 rounded-2xl border border-slate-200 border-t-4 border-t-[#d97706] bg-white p-6 shadow-md"
            >
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                {item.badge}
              </span>
              <h2 className="mt-2.5 text-lg sm:text-xl font-extrabold text-[#0c4a8a]">
                {item.title}
              </h2>
              <p className="mt-1.5 text-xs font-bold text-[#d97706]">Benefit: {item.benefit}</p>
              <p className="mt-1 text-xs font-semibold text-slate-700">
                Eligibility: {item.eligibility}
              </p>
              <p className="mt-2.5 text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Student Welfare Pillars */}
        <div
          id="student-welfare"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
            Holistic Care &amp; Safety
          </span>
          <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
            <span className="vision-double-angle" aria-hidden="true">
              &raquo;
            </span>{' '}
            Student Welfare, Counseling &amp; Campus Support Services
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
              <h3 className="text-base font-extrabold text-[#0c4a8a]">
                Pastoral Guidance &amp; Mentoring
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Personal counseling and moral guidance led by the Reverend Fathers, Sisters, and
                trained class teachers to support emotional resilience and adolescent well-being.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
              <h3 className="text-base font-extrabold text-[#0c4a8a]">
                Remedial &amp; Board Coaching Classes
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Dedicated after-hours remedial tutorials in Mathematics, Science, English, and
                Accountancy for slow learners and first-generation rural scholars.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
              <h3 className="text-base font-extrabold text-[#0c4a8a]">
                First-Aid Infirmary &amp; Clean Campus
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                On-campus first-aid sick room, filtered drinking water stations, separate hygienic
                washrooms for boys and girls, and immediate proximity to Civil Hospital Umsning.
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
              Scholarship &amp; Student Welfare Desk • Catholic Mission of Umsning
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

/* ============================================================================
   4. ALUMNI & COMMUNITY PAGE (page: 'alumni')
   ============================================================================ */
export const AlumniCommunityPage: React.FC<ServicePageProps> = ({ onBack }) => {
  const alumniVoices = [
    {
      name: 'Dr.ibakorlin Syiemlieh',
      batch: 'SSLC Batch of 2012',
      role: 'Medical Officer, Meghalaya Health Services',
      quote:
        'The discipline of the morning assembly, the science laboratory practicals, and the constant encouragement of the Sisters and teachers at St. Michael’s Umsning gave me the foundation to pursue medicine.',
    },
    {
      name: 'Shri Wanboklang Marbaniang',
      batch: 'HSSLC Arts Batch of 2015',
      role: 'Assistant Professor & Researcher, Shillong',
      quote:
        'Being a “Michaelian” means carrying our motto Excelsior & Shaphrang wherever we go. Our geography fieldwork excursions and inter-house debates sparked my lifelong love for higher learning.',
    },
    {
      name: 'KongРиbha Nongrum',
      batch: 'HSSLC Commerce Batch of 2018',
      role: 'Chartered Accountancy & Finance Professional',
      quote:
        'St. Michael’s Higher Secondary School transformed rural youth from Ri Bhoi into confident professionals who can stand shoulder to shoulder with peers anywhere in the country.',
    },
  ];

  return (
    <section
      id="alumni-community-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb */}
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
            <span className="text-[#0c4a8a]">Campus &amp; Welfare</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Alumni &amp; Community Network</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  8,500+ “Michaelian” Alumni Since 1961
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  Motto: Excelsior &amp; Shaphrang
                </span>
              </div>

              <h1
                className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
                style={{ color: '#ffffff' }}
              >
                Alumni &amp; Community Network
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Connecting generations of proud <strong>&ldquo;Michaelians&rdquo;</strong> who have
                stepped forward from <strong>{SCHOOL_INFO.name}, Umsning</strong> since 1961 to
                serve Meghalaya and the world, alongside our active community outreach initiatives.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-amber-400/70 bg-slate-900 shadow-xl">
              <img
                src={SCHOOL_IMAGES.graduatingBatch}
                alt="St. Michael's Graduating Batch and Alumni"
                className="h-56 w-full object-cover"
              />
              <div className="bg-slate-950/90 px-4 py-2.5 text-xs font-bold text-amber-300">
                Graduating Higher Secondary Batch &amp; Michaelian Fraternity
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Overview & Voices */}
        <div
          id="alumni-overview"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <div id="alumni-testimonials" className="scroll-mt-28">
            <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
              Torch of the Michaelians
            </span>
            <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Distinguished Alumni Voices &amp; Reflections
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {alumniVoices.map((al) => (
              <div
                key={al.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-[#f8fafc] p-5"
              >
                <div>
                  <span className="inline-block rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#0c4a8a]">
                    {al.batch}
                  </span>
                  <p className="mt-3 text-xs sm:text-sm italic leading-relaxed text-slate-700">
                    &ldquo;{al.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3">
                  <strong className="block text-sm font-extrabold text-[#0c4a8a]">{al.name}</strong>
                  <span className="text-xs font-bold text-[#d97706]">{al.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Outreach Section */}
        <div
          id="community-outreach"
          className="mt-10 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
            Social Responsibility (Objective #07)
          </span>
          <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
            <span className="vision-double-angle" aria-hidden="true">
              &raquo;
            </span>{' '}
            Community Service &amp; Eco-Social Outreach in Ri Bhoi
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
              <img
                src={SCHOOL_IMAGES.campusEcoDrive}
                alt="Green Umsning Tree Plantation Drive"
                className="h-36 w-full sm:w-44 shrink-0 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-base font-extrabold text-[#0c4a8a]">
                  Green Umsning Afforestation &amp; Watershed Care
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Every year, students and the Eco Club plant ratusan native pine and fruit saplings
                  across Umsning and surrounding villages to conserve the Ri Bhoi green belt.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
              <img
                src={SCHOOL_IMAGES.posterCampaign}
                alt="Anti-Tobacco Community Rally"
                className="h-36 w-full sm:w-44 shrink-0 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-base font-extrabold text-[#0c4a8a]">
                  Nasha Mukt Yuva &amp; Rural Health Literacy
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Senior secondary scholars conduct street awareness rallies, hand-painted poster
                  exhibitions, and cleanliness drives in partnership with local dorbars and health
                  centres.
                </p>
              </div>
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
              Michaelian Alumni &amp; Community Desk • Estd. {SCHOOL_INFO.established}
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
