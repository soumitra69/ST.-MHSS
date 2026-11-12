import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import type { AppPageId } from './InstitutionalSection';

interface FeeStructurePageProps {
  onBack: () => void;
  onNavigatePage?: (page: AppPageId, sectionId?: string) => void;
  onOpenAdmission?: () => void;
}

// 1. General Higher Secondary Fee Structure (Arts / Commerce / Science)
const GENERAL_HS_FEE_HEADS = [
  { head: 'Admission Fee (XI)', full: '₹ 1000/-', inst1: '-', inst2: '-', note: 'Paid once during Class XI admission' },
  { head: 'Renewal Fee (XII)', full: '₹ 200/-', inst1: '-', inst2: '-', note: 'Paid during Class XII renewal' },
  { head: 'Library Fee', full: '₹ 200/-', inst1: '₹ 100/-', inst2: '₹ 100/-', note: 'Reference library & reading room' },
  { head: 'Laboratory Fee (Science)', full: '₹ 3600/-', inst1: '₹ 1800/-', inst2: '₹ 1800/-', note: 'Physics, Chemistry & Biology Labs' },
  { head: 'Practical Fee (Science)', full: '₹ 2300/-', inst1: '₹ 1150/-', inst2: '₹ 1150/-', note: 'MBOSE Science practical coursework' },
  { head: 'Internal Examination Fee', full: '₹ 500/-', inst1: '₹ 250/-', inst2: '₹ 250/-', note: 'Unit tests & terminal examinations' },
  { head: 'Session Fee', full: '₹ 1300/-', inst1: '₹ 650/-', inst2: '₹ 650/-', note: 'Annual school session dues' },
  { head: 'Annual Maintenance Fee', full: '₹ 600/-', inst1: '₹ 300/-', inst2: '₹ 300/-', note: 'Campus upkeep & facilities' },
  { head: 'Sports & Games Fee', full: '₹ 200/-', inst1: '-', inst2: '-', note: 'Track, fields & athletic meet' },
  { head: 'Development Fund Fee', full: '₹ 500/-', inst1: '₹ 250/-', inst2: '₹ 250/-', note: 'Campus educational development' },
  { head: 'Annual Tuition Fee (Arts)', full: '₹ 5000/-', inst1: '₹ 2500/-', inst2: '₹ 2500/-', note: 'Arts & Humanities stream' },
  { head: 'Annual Tuition Fee (Commerce)', full: '₹ 6000/-', inst1: '₹ 3000/-', inst2: '₹ 3000/-', note: 'Commerce stream' },
  { head: 'Annual Tuition Fee (Science)', full: '₹ 7000/-', inst1: '₹ 3500/-', inst2: '₹ 3500/-', note: 'Science stream' },
  { head: 'Geography Lab. Fee', full: '₹ 300/-', inst1: '₹ 150/-', inst2: '₹ 150/-', note: 'For students with Geography' },
  { head: 'Computer Lab. Fee', full: '₹ 500/-', inst1: '₹ 250/-', inst2: '₹ 250/-', note: 'For students with Computer Science' },
  { head: 'Computer Fee', full: '₹ 3600/-', inst1: '₹ 1800/-', inst2: '₹ 1800/-', note: 'Computer curriculum & IT training' },
  { head: 'Computer Lab. Maintenance', full: '₹ 1200/-', inst1: '₹ 600/-', inst2: '₹ 600/-', note: 'Hardware, software & networking' },
];

const TOTAL_FEES_SUMMARY = [
  { stream: 'Science with Computer', amount: '₹ 22,500/-', icon: 'fas fa-laptop-code', badge: 'Science + CS' },
  { stream: 'Science without Computer', amount: '₹ 17,200/-', icon: 'fas fa-atom', badge: 'Pure Science' },
  { stream: 'Science with Geography', amount: '₹ 17,500/-', icon: 'fas fa-globe-americas', badge: 'Science + Geo' },
  { stream: 'Arts with Computer', amount: '₹ 14,600/-', icon: 'fas fa-desktop', badge: 'Arts + CS' },
  { stream: 'Arts without Computer', amount: '₹ 9,300/-', icon: 'fas fa-book-reader', badge: 'Core Arts' },
  { stream: 'Arts with Geography', amount: '₹ 9,600/-', icon: 'fas fa-map-marked-alt', badge: 'Arts + Geo' },
  { stream: 'Commerce with Computer', amount: '₹ 15,600/-', icon: 'fas fa-calculator', badge: 'Commerce + CS' },
  { stream: 'Commerce without Computer', amount: '₹ 10,300/-', icon: 'fas fa-chart-line', badge: 'Core Commerce' },
];

// 2. Vocational Courses Fee Structure (Computer Technique & Poultry Farming)
const VOCATIONAL_FEE_HEADS = [
  { head: 'Admission/Renewal Fee', ctXI: '250.00', ctXII: '100.00' },
  { head: 'Library Fee', ctXI: '150.00', ctXII: '150.00' },
  { head: 'Session Fee', ctXI: '1000.00', ctXII: '1000.00' },
  { head: 'Internal Examination Fee', ctXI: '400.00', ctXII: '400.00' },
  { head: 'Sports & Games', ctXI: '100.00', ctXII: '100.00' },
  { head: 'Annual Maintenance Fee', ctXI: '400.00', ctXII: '400.00' },
  { head: 'Development Fund', ctXI: '300.00', ctXII: '300.00' },
  { head: 'Tuition Fee', ctXI: '3000.00', ctXII: '3000.00' },
  { head: 'Practical Fee', ctXI: '4200.00 (350/- pm)', ctXII: '4200.00 (350/- pm)' },
];

export const FeeStructurePage: React.FC<FeeStructurePageProps> = ({
  onBack,
  onNavigatePage,
  onOpenAdmission,
}) => {
  const [selectedStreamTab, setSelectedStreamTab] = useState<'ALL' | 'SCIENCE' | 'ARTS' | 'COMMERCE' | 'VOCATIONAL'>('ALL');

  return (
    <section className="min-h-screen bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200">
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
            <span className="text-[#0c4a8a]">Admission</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Fee Structure (2026–27)</span>
          </div>

          {onOpenAdmission && (
            <button
              type="button"
              onClick={onOpenAdmission}
              className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
              <span>Apply for Admission</span>
            </button>
          )}
        </div>

        {/* Hero Header Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10 mb-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-file-invoice-dollar mr-1.5" aria-hidden="true"></i>
                  Official Prospectus Schedule • Session 2026–27
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-school mr-1.5" aria-hidden="true"></i>
                  Classes XI &amp; XII • Arts, Science, Commerce &amp; Vocational
                </span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold !text-white leading-tight">
                Academic Fee Structure
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                Official institutional fee breakdown, installment schedules, and stream packages directly from the{' '}
                <strong>St. Michael&apos;s Higher Secondary School Prospectus</strong>. Transparent, value-based education under the Catholic Diocese of Shillong.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={onOpenAdmission}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <i className="fas fa-user-plus" aria-hidden="true"></i>
                <span>Enrol for 2026–27</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage?.('academic-calendar')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer"
              >
                <i className="fas fa-calendar-alt text-amber-300" aria-hidden="true"></i>
                <span>Academic Calendar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Total Fees Payable Summary Cards */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                Quick Reference
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-[#0c4a8a]">
                Total Fees Payable by Stream &amp; Combination
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              *Class XII pays same structure with ₹ 200/- Renewal instead of ₹ 1000/- Admission
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOTAL_FEES_SUMMARY.map((pkg) => (
              <div
                key={pkg.stream}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-amber-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c4a8a]/10 text-[#0c4a8a]">
                      <i className={pkg.icon} aria-hidden="true"></i>
                    </div>
                    <span className="rounded-md bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                      {pkg.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800">{pkg.stream}</h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                  <span className="text-xs font-medium text-slate-500">Annual Total:</span>
                  <span className="text-lg font-black text-[#0c4a8a]">{pkg.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Itemized Fee Head Table (Arts, Commerce & Science) */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="rounded-md bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                Itemized Schedule
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-[#0c4a8a]">
                FEE STRUCTURE (ARTS / COMMERCE / SCIENCE)
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
              1st Installment (Admission) • 2nd Installment (Before Selection Test)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#0c4a8a] text-white">
                  <th className="rounded-tl-xl px-4 py-3.5 font-extrabold uppercase">Fee Heads</th>
                  <th className="px-4 py-3.5 font-extrabold uppercase">Full Amount</th>
                  <th className="px-4 py-3.5 font-extrabold uppercase">1st Instalment</th>
                  <th className="px-4 py-3.5 font-extrabold uppercase">2nd Instalment</th>
                  <th className="rounded-tr-xl px-4 py-3.5 font-extrabold uppercase">Purpose / Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {GENERAL_HS_FEE_HEADS.map((item, idx) => (
                  <tr key={item.head} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                    <td className="px-4 py-3 font-extrabold text-[#0c4a8a] whitespace-nowrap">
                      {item.head}
                    </td>
                    <td className="px-4 py-3 font-black text-slate-900 whitespace-nowrap">
                      {item.full}
                    </td>
                    <td className="px-4 py-3 font-bold text-amber-800 whitespace-nowrap">
                      {item.inst1}
                    </td>
                    <td className="px-4 py-3 font-bold text-amber-800 whitespace-nowrap">
                      {item.inst2}
                    </td>
                    <td className="px-4 py-3 text-slate-600 text-xs">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 leading-relaxed">
            <strong className="block text-sm font-bold text-amber-950 mb-1">
              <i className="fas fa-info-circle mr-1.5" aria-hidden="true"></i>
              N.B. Regarding Class XII Fee Structure:
            </strong>
            Class XII Fee structure will be the same as of Class XI except the Admission fee of Rs. 1000/-. They have to pay the Renewal Fee of Rs. 200/- instead.
          </div>
        </div>

        {/* Vocational Courses Section: Computer Technique & Poultry Farming */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="rounded-md bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-900">
                Vocational Streams
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-[#0c4a8a]">
                Vocational Courses: Computer Technique &amp; Poultry Farming
              </h2>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
              Special Subsidized Opportunity
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Columns: Computer Technique Itemized */}
            <div className="lg:col-span-7">
              <h3 className="text-base font-extrabold text-[#0c4a8a] mb-3 flex items-center gap-2">
                <i className="fas fa-laptop text-amber-600" aria-hidden="true"></i>
                <span>Computer Technique Fee Schedule</span>
              </h3>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full border-collapse text-left text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                      <th className="px-3.5 py-2.5 font-bold uppercase">Fee Heads</th>
                      <th className="px-3.5 py-2.5 font-bold uppercase">Class XI</th>
                      <th className="px-3.5 py-2.5 font-bold uppercase">Class XII</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {VOCATIONAL_FEE_HEADS.map((vh) => (
                      <tr key={vh.head}>
                        <td className="px-3.5 py-2 font-semibold text-slate-800">{vh.head}</td>
                        <td className="px-3.5 py-2 font-mono text-slate-700">{vh.ctXI}</td>
                        <td className="px-3.5 py-2 font-mono text-slate-700">{vh.ctXII}</td>
                      </tr>
                    ))}
                    <tr className="bg-amber-50/80 font-black text-slate-900">
                      <td className="px-3.5 py-2.5 text-[#0c4a8a]">Total</td>
                      <td className="px-3.5 py-2.5 font-mono text-base text-[#d97706]">9800.00</td>
                      <td className="px-3.5 py-2.5 font-mono text-base text-[#d97706]">9650.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Installment Schedule for Computer Technique */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                  <strong className="block text-[#0c4a8a] font-bold">Class XI Installments:</strong>
                  <div className="mt-1 space-y-1 text-slate-600">
                    <div>• 1st Instalment = <strong>₹ 5,000/-</strong> (at Admission)</div>
                    <div>• 2nd Installment = <strong>₹ 4,800/-</strong> (before Selection Test, 1st week of Oct)</div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                  <strong className="block text-[#0c4a8a] font-bold">Class XII Installments:</strong>
                  <div className="mt-1 space-y-1 text-slate-600">
                    <div>• 1st Instalment = <strong>₹ 4,850/-</strong> (at Renewal)</div>
                    <div>• 2nd Installment = <strong>₹ 4,800/-</strong> (before Selection Test, 1st week of Oct)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Poultry Farming Special Offer & Policy */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full bg-emerald-700 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Special Subsidized Course
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-emerald-950">
                  Poultry Farming Vocational
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-emerald-900">
                  Direct admissions are given for Vocational Poultry Farming after passing the SSLC or equivalent examination. Moreover, a free / highly subsidized scholarship rate is offered:
                </p>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-white p-3.5 border border-emerald-300">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase">Class XI Rate:</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-emerald-800">Pay only ₹ 1,500/-</span>
                      <span className="text-xs text-slate-400 line-through">instead of ₹ 10,000/-</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3.5 border border-emerald-300">
                    <span className="block text-[11px] font-bold text-slate-500 uppercase">Class XII Rate:</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-emerald-800">Pay only ₹ 1,500/-</span>
                      <span className="text-xs text-slate-400 line-through">instead of ₹ 9,850/-</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directives from Prospectus */}
              <div className="rounded-2xl border border-slate-200 bg-[#0c2d57] p-5 text-white text-xs">
                <strong className="text-amber-300 block mb-2 font-bold uppercase tracking-wider text-[11px]">
                  <i className="fas fa-shield-alt mr-1.5" aria-hidden="true"></i>
                  Key Institutional Directives:
                </strong>
                <ul className="space-y-1.5 text-slate-200">
                  <li>• Mandatory School Diary &amp; ID card issued by school authority.</li>
                  <li>• Students must pass all Class XI subjects for promotion to Class XII.</li>
                  <li>• Stream change to Arts permitted only after clearing all Class XI subjects.</li>
                  <li>• <strong>Fees once paid cannot be refunded.</strong></li>
                </ul>
              </div>
            </div>
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
