import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/schoolData';

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
    <section id="faculty" className="w-full py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
              <span>Mentors &amp; Academic Leadership</span>
              <span className="text-slate-300">•</span>
              <span>68+ Certified Educators</span>
            </div>
            <h2 className="vision-serif-heading text-3xl sm:text-4xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> Faculty &amp; Department Directory
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our dedicated educators, Reverend Sisters, and subject specialists committed to
              academic rigor and pastoral mentorship across Nursery to Class XII.
            </p>
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search faculty or subject..."
              aria-label="Search faculty or subject"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setDepartmentFilter(dept)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                departmentFilter === dept
                  ? 'bg-[#142842] text-amber-300 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200 hover:border-[#1B365D] hover:bg-white transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#1B365D] shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#142842] text-amber-300 flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#0c4a8a] leading-snug truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs text-amber-800 font-semibold truncate">{member.role}</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/80 pt-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-400">Dept:</span>
                    <span className="font-semibold text-slate-800 text-right">{member.department}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-400">Credentials:</span>
                    <span className="font-medium text-slate-700 text-right">
                      {member.qualification}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-400">Experience:</span>
                    <span className="font-semibold text-[#1B365D] text-right">{member.experience}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-200/70 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>St. Michael&apos;s Umsning</span>
                <span className="text-amber-800 font-semibold">MBOSE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
