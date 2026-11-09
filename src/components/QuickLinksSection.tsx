import React from 'react';

const quickLinks = [
  {
    title: 'Admissions 2026–27',
    detail: 'Nursery to Class XII enquiry',
    href: '#apply-form',
    badge: 'Open',
  },
  {
    title: 'Academic Pathways',
    detail: 'MBOSE & XI–XII Streams',
    href: '#academics',
    badge: 'MBOSE',
  },
  {
    title: 'State Merit Honors',
    detail: 'SSLC Top 20 & ₹20k Award',
    href: '#toppers',
    badge: 'Top 20',
  },
  {
    title: 'Student & Parent Hub',
    detail: 'Notices, fees, bus & bell routine',
    href: '#hub',
    badge: '6 Notices',
  },
];

export const QuickLinksSection: React.FC = () => (
  <nav
    id="quick-links"
    aria-label="Quick campus navigation"
    className="relative z-20 mx-auto -mt-9 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
  >
    <ul className="grid list-none grid-cols-1 gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-xl shadow-slate-950/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:p-4">
      {quickLinks.map(({ title, detail, href, badge }) => (
        <li key={title}>
          <a
            href={href}
            className="group flex h-full min-h-20 items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0c4a8a]/40 hover:bg-white hover:shadow-md"
          >
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span className="truncate text-sm font-semibold text-[#0c4a8a]">
                  &raquo; {title}
                </span>
                <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-900">
                  {badge}
                </span>
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-600">{detail}</span>
            </span>
            <span
              className="shrink-0 text-sm font-bold text-[#c61c49] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
