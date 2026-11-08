import React from 'react';
import { Shield, Sparkles, Heart, Users, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { resolveSchoolAsset } from '../data/schoolAssets';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#1B365D] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-300">
              [ CONTAINER: DIOCESAN HERITAGE & INSTITUTIONAL ROOTS ]
            </span>
          </div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
            Estd. 1961 • 65 Years of Service
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-mono tracking-wider text-[#D97706] font-bold block mb-2">
            Mission and Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
            Rooted in faith, shaped by purpose, and driven to serve the region
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
            Don Bosco College Tura nurtures young minds through a holistic model of education that blends academic excellence, character formation, and social responsibility for students across Meghalaya and beyond.
          </p>
        </div>

        {/* 2-Column Split: Principal's Word & Campus Cornerstones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Principal's Welcome Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100 mb-6">
                <img
                  src={resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.11_PM__1__6f048fbb.jpeg')}
                  alt="Principal and Leadership"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#D97706] shadow-sm"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1B365D]">
                    Message from the Head of Institution
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Diocesan Leadership and Reverend Sisters
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  At Don Bosco College Tura, education is a formation of the whole person. We nurture students who are intellectually capable, ethically grounded, socially aware, and spiritually alive.
                </p>
                <p>
                  As a growing collegiate community serving students from across Meghalaya and the Northeast, we champion inclusive learning, leadership, service, and a strong sense of belonging.
                </p>
                <p>
                  Our motto, <strong className="text-[#1B365D] font-bold">Fides, Scientia, Servitium</strong> (Faith, Knowledge, Service), guides every teacher, student, and staff member toward lives of purpose and responsibility.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-[#1B365D]">
                Office of the Principal and Academic Leadership
              </span>
              <span className="font-mono text-[11px] text-slate-400">Tura, Meghalaya</span>
            </div>
          </div>

          {/* Right Column: 4 Cornerstones Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1B365D] transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1B365D] flex items-center justify-center mb-3 border border-blue-200">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#1B365D] mb-1">
                  Patron St. John Bosco
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A champion of youth education, dignity, and practical wisdom for life.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#D97706]">
                Oratory for Youth
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1B365D] transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#D97706] flex items-center justify-center mb-3 border border-amber-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#1B365D] mb-1">
                  Faith, Knowledge, Service
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A guiding principle for scholarship, character, and civic commitment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#D97706]">
                Fides • Scientia • Servitium
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1B365D] transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 border border-emerald-200">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#1B365D] mb-1">
                  Community Engagement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Environmental stewardship, outreach, and service-learning with local impact.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#D97706]">
                Serving Meghalaya
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1B365D] transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#D97706] flex items-center justify-center mb-3 border border-amber-200">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#1B365D] mb-1">
                  vibrant student community
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A connected campus culture where leadership, culture, and co-curricular excellence thrive.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#D97706]">
                Unity and Growth
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
