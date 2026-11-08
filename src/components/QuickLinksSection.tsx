import React from 'react';
import { ArrowUpRight, Bell, BookOpen, Camera, GraduationCap } from 'lucide-react';

const quickLinks = [
  { title: 'Admissions', detail: 'Start an enquiry', href: '#apply-form', icon: GraduationCap },
  { title: 'Academics', detail: 'Levels and MBOSE', href: '#academics', icon: BookOpen },
  { title: 'Notices', detail: 'Student and family hub', href: '#hub', icon: Bell },
  { title: 'Campus life', detail: 'Activities and memories', href: '#campus-life', icon: Camera },
];

export const QuickLinksSection: React.FC = () => (
  <nav
    id="quick-links"
    aria-label="Quick links"
    className="relative z-10 mx-auto -mt-7 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
  >
    <ul className="grid list-none grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/10 sm:grid-cols-4 sm:gap-4 sm:p-4">
      {quickLinks.map(({ title, detail, href, icon: Icon }) => (
        <li key={title}>
          <a
            href={href}
            className="group flex h-full min-h-24 items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1B365D] sm:p-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1B365D] text-white transition-colors group-hover:bg-amber-600">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-[#1B365D]">{title}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">{detail}</span>
            </span>
            <ArrowUpRight
              className="hidden h-4 w-4 shrink-0 text-amber-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
              aria-hidden="true"
            />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
