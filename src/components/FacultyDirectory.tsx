import React, { useState } from 'react';
import { Users, BookOpen, GraduationCap, Search, Sparkles } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/schoolData';

export const FacultyDirectory: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = ['All', 'Administration', 'Physics & Chemistry', 'Humanities', 'Languages', 'Mathematics & Statistics', 'Athletics & Physical Drill'];

  const filteredFaculty = FACULTY_MEMBERS.filter((member) => {
    const matchesDept = departmentFilter === 'All' || member.department.toLowerCase().includes(departmentFilter.toLowerCase().split(' ')[0]);
    const matchesQuery = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <section id="faculty" className="w-full py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#1B365D] uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
              [ CONTAINER: FACULTY DIRECTORY & ACADEMIC MENTORSHIP ]
            </span>
          </div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            68+ Certified Educators
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#D97706] mb-2">
              <Users className="w-4 h-4 text-[#D97706]" />
              <span>Mentors and Academic Leadership</span>
              <span className="text-slate-300">•</span>
              <span>Diocesan Educators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
              Faculty and department directory
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Our 68 educators, Reverend Sisters, and subject specialists dedicated to intellectual excellence and student pastoral care.
            </p>
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculty or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setDepartmentFilter(dept)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors ${
                departmentFilter === dept
                  ? 'bg-[#1B365D] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-[#1B365D] hover:bg-white transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#1B365D]" 
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold font-mono text-base shadow-sm">
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-[#1B365D] leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#D97706] font-bold">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Department:</span>
                    <span className="font-semibold text-slate-800">{member.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Qualification:</span>
                    <span className="font-mono font-medium text-slate-700">{member.qualification}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Experience:</span>
                    <span className="font-bold text-[#1B365D]">{member.experience}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                Affiliation: Catholic Diocese of Shillong
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
