import React from 'react';

const quickLinks = [
  {
    title: 'Admissions 2026–27',
    detail: 'Nursery to Class XII online enquiry',
    href: '#apply-form',
    badge: 'Open Now',
    icon: 'fas fa-user-graduate',
    cardClass:
      'bg-[#0c4a8a] hover:bg-[#d97706] text-white border-[#0c4a8a] hover:border-[#fde047]',
    badgeClass: 'bg-amber-300 text-slate-950 group-hover:bg-white group-hover:text-[#0c4a8a]',
    detailClass: 'text-blue-100 group-hover:text-white',
    arrowClass: 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#0c4a8a]',
  },
  {
    title: 'Academic Pathways',
    detail: 'MBOSE SSLC & XI–XII Streams',
    href: '#academics',
    badge: 'MBOSE',
    icon: 'fas fa-book-open',
    cardClass:
      'bg-[#0c2d57] hover:bg-[#d97706] text-white border-[#0c2d57] hover:border-[#fde047]',
    badgeClass: 'bg-amber-300 text-slate-950 group-hover:bg-white group-hover:text-[#0c2d57]',
    detailClass: 'text-slate-200 group-hover:text-white',
    arrowClass: 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#0c2d57]',
  },
  {
    title: 'State Merit Honors',
    detail: 'SSLC Top 20 & ₹20k Cash Award',
    href: '#toppers',
    badge: 'Top 20',
    icon: 'fas fa-trophy',
    cardClass:
      'bg-[#0c4a8a] hover:bg-[#d97706] text-white border-[#0c4a8a] hover:border-[#fde047]',
    badgeClass: 'bg-amber-300 text-slate-950 group-hover:bg-white group-hover:text-[#0c4a8a]',
    detailClass: 'text-blue-100 group-hover:text-white',
    arrowClass: 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#0c4a8a]',
  },
  {
    title: 'Student & Parent Hub',
    detail: 'Notices, fees, bus & bell routine',
    href: '#hub',
    badge: '6 Notices',
    icon: 'fas fa-th-large',
    cardClass:
      'bg-[#0c2d57] hover:bg-[#d97706] text-white border-[#0c2d57] hover:border-[#fde047]',
    badgeClass: 'bg-amber-300 text-slate-950 group-hover:bg-white group-hover:text-[#0c2d57]',
    detailClass: 'text-slate-200 group-hover:text-white',
    arrowClass: 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#0c2d57]',
  },
];

export const QuickLinksSection: React.FC = () => (
  <nav
    id="quick-links"
    aria-label="Quick campus navigation"
    className="container relative z-20 mt-4 sm:-mt-8 lg:-mt-10"
  >
    <ul
      className="grid list-none grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/15 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:p-4"
      data-aos="fade-up"
      data-aos-duration="750"
    >
      {quickLinks.map(
        (
          { title, detail, href, badge, icon, cardClass, badgeClass, detailClass, arrowClass },
          index
        ) => (
          <li key={title} data-aos="zoom-in" data-aos-delay={70 * (index + 1)}>
            <a
              href={href}
              className={`group flex h-full min-h-20 items-center justify-between gap-3 rounded-xl border p-3.5 sm:p-4 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${cardClass}`}
            >
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <i className={`${icon} text-amber-300 text-sm shrink-0`} aria-hidden="true"></i>
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
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-200 group-hover:translate-x-0.5 ${arrowClass}`}
                aria-hidden="true"
              >
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </span>
            </a>
          </li>
        )
      )}
    </ul>
  </nav>
);
