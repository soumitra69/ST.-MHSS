import React, { useState } from 'react';
import { FACULTY_MEMBERS } from '../data/schoolData';

const CARD_THEMES = [
  {
    border: 'border-blue-300 bg-gradient-to-b from-white to-blue-50/70',
    topBar: 'bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6]',
    avatar: 'bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a] text-white',
    badge: 'bg-blue-100 text-blue-900 border-blue-200',
  },
  {
    border: 'border-orange-300 bg-gradient-to-b from-white to-orange-50/70',
    topBar: 'bg-gradient-to-r from-[#ea580c] to-[#f59e0b]',
    avatar: 'bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white',
    badge: 'bg-orange-100 text-orange-900 border-orange-200',
  },
  {
    border: 'border-teal-300 bg-gradient-to-b from-white to-teal-50/70',
    topBar: 'bg-gradient-to-r from-[#0d9488] to-[#10b981]',
    avatar: 'bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white',
    badge: 'bg-teal-100 text-teal-900 border-teal-200',
  },
  {
    border: 'border-purple-300 bg-gradient-to-b from-white to-purple-50/70',
    topBar: 'bg-gradient-to-r from-[#7c3aed] to-[#a855f7]',
    avatar: 'bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] text-white',
    badge: 'bg-purple-100 text-purple-900 border-purple-200',
  },
];

export const FacultyDirectory: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = [
    'All',
    'Administration',
    'Physics & Chemistry',
    'Political Science & History',
    'Languages',
    'Mathematics & Statistics',
    'Social Sciences & Field Studies',
    'Athletics & Physical Training',
  ];

  const filteredFaculty = FACULTY_MEMBERS.filter((member) => {
    const matchesDept =
      departmentFilter === 'All' ||
      member.department.toLowerCase().includes(departmentFilter.toLowerCase().split(' ')[0]);
    const matchesQuery =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <section
      id="faculty"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-[#eef2ff] via-[#f0fdfa] to-[#fff7ed] border-b border-blue-200 scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#7c3aed] px-4 py-1 text-xs font-bold tracking-wider uppercase text-white shadow-sm mb-3">
              <i className="fas fa-chalkboard-teacher" aria-hidden="true"></i>
              <span>Mentors &amp; Academic Leadership</span>
              <span>•</span>
              <span>68+ Certified Educators</span>
            </div>
            <h2 className="vision-serif-heading text-3xl sm:text-4xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Faculty &amp; Department Directory
            </h2>
            <p className="mt-2 text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
              Our dedicated educators, Reverend Sisters, and subject specialists committed to
              academic rigor and pastoral mentorship across Nursery to Class XII.
            </p>
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <i
              className="fas fa-search text-blue-600 text-xs absolute left-3.5 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            ></i>
            <input
              type="text"
              placeholder="Search faculty or subject..."
              aria-label="Search faculty or subject"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-white border-2 border-blue-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setDepartmentFilter(dept)}
              className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                departmentFilter === dept
                  ? 'bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] text-white shadow-md'
                  : 'bg-white border border-blue-200 text-[#0c4a8a] hover:bg-blue-50'
              }`}
            >
              <i className="fas fa-layer-group mr-1.5 text-[10px]" aria-hidden="true"></i>
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFaculty.map((member, index) => {
            const theme = CARD_THEMES[index % CARD_THEMES.length];
            return (
              <div
                key={member.id}
                className={`relative overflow-hidden p-5 rounded-2xl border-2 transition-all duration-200 shadow-md hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${theme.border}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${theme.topBar}`} />
                <div>
                  <div className="flex items-center gap-3.5 mb-4 mt-1">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#1d4ed8] shrink-0 shadow-xs"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm shadow-md shrink-0 ${theme.avatar}`}
                      >
                        <i className="fas fa-user-tie" aria-hidden="true"></i>
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#0c4a8a] leading-snug truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#ea580c] font-bold truncate">{member.role}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-700 border-t border-slate-200/80 pt-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-500">
                        <i className="fas fa-building mr-1 text-blue-600" aria-hidden="true"></i>Dept:
                      </span>
                      <span className="font-bold text-slate-900 text-right">
                        {member.department}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-500">
                        <i className="fas fa-graduation-cap mr-1 text-orange-600" aria-hidden="true"></i>Degree:
                      </span>
                      <span className="font-semibold text-slate-800 text-right">
                        {member.qualification}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-500">
                        <i className="fas fa-award mr-1 text-teal-600" aria-hidden="true"></i>Exp:
                      </span>
                      <span className="font-bold text-[#1d4ed8] text-right">
                        {member.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-200/70 text-[11px] font-bold flex items-center justify-between">
                  <span className="text-slate-600">
                    <i className="fas fa-school mr-1 text-[#0c4a8a]" aria-hidden="true"></i>
                    St. Michael&apos;s Umsning
                  </span>
                  <span className={`rounded-md border px-2 py-0.5 text-[10px] ${theme.badge}`}>
                    <i className="fas fa-check-circle mr-1" aria-hidden="true"></i>MBOSE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
