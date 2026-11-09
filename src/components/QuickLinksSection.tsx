import React from 'react';

const quickLinks = [
  {
    title: 'Admissions 2026–27',
    detail: 'Nursery to Class XII online enquiry',
    href: '#apply-form',
    badge: 'Open Now',
    cardClass:
      'bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a] text-white border-[#3b82f6] shadow-blue-900/20',
    badgeClass: 'bg-amber-300 text-slate-950',
    detailClass: 'text-blue-100',
    arrowClass: 'bg-white/20 text-white group-hover:bg-amber-400 group-hover:text-slate-950',
  },
  {
    title: 'Academic Pathways',
    detail: 'MBOSE SSLC & XI–XII Streams',
    href: '#academics',
    badge: 'MBOSE',
    cardClass:
      'bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white border-[#fb923c] shadow-orange-900/20',
    badgeClass: 'bg-white text-[#c2410c]',
    detailClass: 'text-orange-100',
    arrowClass: 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#c2410c]',
  },
  {
    title: 'State Merit Honors',
    detail: 'SSLC Top 20 & ₹20k Cash Award',
    href: '#toppers',
    badge: 'Top 20',
    cardClass:
      'bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white border-[#2dd4bf] shadow-teal-900/20',
    badgeClass: 'bg-amber-200 text-teal-950',
    detailClass: 'text-teal-100',
    arrowClass: 'bg-white/20 text-white group-hover:bg-amber-300 group-hover:text-teal-950',
  },
  {
    title: 'Student & Parent Hub',
    detail: 'Notices, fees, bus & bell routine',
    href: '#hub',
    badge: '6 Notices',
    cardClass:
      'bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] text-white border-[#a78bfa] shadow-purple-900/20',
    badgeClass: 'bg-amber-300 text-purple-950',
    detailClass: 'text-purple-100',
    arrowClass: 'bg-white/20 text-white group-hover:bg-amber-300 group-hover:text-purple-950',
  },
];

export const QuickLinksSection: React.FC = () => (
  <nav
    id="quick-links"
    aria-label="Quick campus navigation"
    className="relative z-20 mx-auto mt-4 sm:-mt-8 lg:-mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
  >
    <ul className="grid list-none grid-cols-1 gap-3 rounded-2xl border-2 border-amber-300/80 bg-gradient-to-r from-[#eff6ff] via-[#fff7ed] to-[#f0fdf4] p-3 shadow-2xl shadow-slate-950/15 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:p-4">
      {quickLinks.map(
        ({ title, detail, href, badge, cardClass, badgeClass, detailClass, arrowClass }) => (
          <li key={title}>
            <a
              href={href}
              className={`group flex h-full min-h-20 items-center justify-between gap-3 rounded-xl border p-3.5 sm:p-4 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${cardClass}`}
            >
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="truncate text-sm font-bold text-white">&raquo; {title}</span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${badgeClass}`}
                  >
                    {badge}
                  </span>
                </span>
                <span className={`mt-1.5 block text-xs font-medium leading-5 ${detailClass}`}>
                  {detail}
                </span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-200 group-hover:translate-x-0.5 ${arrowClass}`}
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </li>
        )
      )}
    </ul>
  </nav>
);
