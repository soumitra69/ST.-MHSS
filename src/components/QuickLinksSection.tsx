import React from 'react';
import { ArrowUpRight, Award, Bell, BookOpen, GraduationCap } from 'lucide-react';

const quickLinks = [
  {
    title: 'Admissions 2026–27',
    detail: 'Nursery to Class XII enquiry',
    href: '#apply-form',
    badge: 'Open',
    icon: GraduationCap,
  },
  {
    title: 'Academic Pathways',
    detail: 'MBOSE & XI–XII Streams',
    href: '#academics',
    badge: 'MBOSE',
    icon: BookOpen,
  },
  {
    title: 'State Merit Honors',
    detail: 'SSLC Top 20 & ₹20k Award',
    href: '#toppers',
    badge: 'Top 20',
    icon: Award,
  },
  {
    title: 'Student & Parent Hub',
    detail: 'Notices, fees, bus & bell routine',
    href: '#hub',
    badge: '6 Notices',
    icon: Bell,
  },
];

export const QuickLinksSection: React.FC = () => (
  <nav
    id="quick-links"
    aria-label="Quick campus navigation"
    className="relative z-20 mx-auto -mt-9 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
  >
    <ul className="grid list-none grid-cols-1 gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-xl shadow-slate-950/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:p-4">
      {quickLinks.map(({ title, detail, href, badge, icon: Icon }) => (
        <li key={title}>
          <a
            href={href}
            className="group flex h-full min-h-22 items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300/80 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1B365D] sm:p-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B365D] text-amber-300 shadow-xs transition-colors duration-200 group-hover:bg-amber-600 group-hover:text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span className="truncate text-sm font-bold text-[#142842] group-hover:text-[#1B365D]">
                  {title}
                </span>
                <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900">
                  {badge}
                </span>
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-slate-600">{detail}</span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-700"
              aria-hidden="true"
            />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
