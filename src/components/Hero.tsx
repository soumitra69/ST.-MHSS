import React from 'react';
import { 
  GraduationCap, 
  Play, 
  Award, 
  Users, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenAdmission: () => void;
  onNavigate: (sectionId: string) => void;
  onPlayVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmission,
  onNavigate,
  onPlayVideo
}) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-slate-50 to-slate-100/70 pt-10 pb-16 md:pt-14 md:pb-24 border-b border-slate-200 overflow-hidden">
      
      {/* Subtle two-color ambient wash */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#1B365D]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-[#F59E0B]/8 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Container with explicit container mention */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-md border border-slate-200 shadow-xs">
            <span className="font-mono text-[10px] font-bold text-[#1B365D] uppercase tracking-wider">
              [ CONTAINER: INSTITUTIONAL HERO & CAMPUS OVERVIEW ]
            </span>
            <span className="text-slate-300">|</span>
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">
              Meghalaya SSLC Top 20 Institution
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-[#D97706] font-bold">Estd. 1961</span>
          </div>
        </div>

        {/* Centered Hero Typography in Two-Color Palette */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-10">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1B365D] leading-[1.12]">
            Nurturing 2,000 Minds with Academic Rigor and Faith in Ri Bhoi
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            St. Michael's Higher Secondary School provides comprehensive value-based MBOSE education from Kindergarten through Class XII in Umsning, Meghalaya. Grounded in excellence, tradition, and state-honored distinction.
          </p>

          {/* Primary Action Buttons in Two-Color Harmony */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAdmission}
              className="py-3 px-7 bg-[#1B365D] hover:bg-[#0F1D38] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-[#1B365D]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 border border-[#1B365D]"
            >
              <GraduationCap className="w-5 h-5 text-[#F59E0B]" />
              <span>Apply for 2026-27 Admission</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onPlayVideo}
              className="py-3 px-5 bg-white hover:bg-slate-50 text-[#1B365D] border-2 border-[#1B365D] text-sm font-bold uppercase tracking-wider rounded-lg shadow-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5 group"
            >
              <span className="w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              <span>Watch 2,000 Student Drill</span>
            </button>
          </div>

          {/* Verification proof points */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
              State Topper Felicitated by Hon'ble Chief Minister
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#1B365D]" />
              2,000 Active Learners Enrolled
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
              Diocesan Coeducational Campus
            </span>
          </div>

        </div>

        {/* Hero Visual: Campus Showcase Container */}
        <div className="relative rounded-2xl bg-white p-3 border-2 border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto group">
          <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-slate-900">
            <img
              src={SCHOOL_INFO.campusHero}
              alt="St. Michael Higher Secondary School Umsning Campus Landmark"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D38]/90 via-[#1B365D]/30 to-transparent pointer-events-none" />

            {/* Top Live Badge */}
            <div className="absolute top-4 left-4 bg-[#1B365D]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
              <span>Campus Landmark in Umsning, Ri Bhoi</span>
            </div>

            {/* Bottom Details Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold block mb-1">
                  Motto: Excelsior & Shaphrang
                </span>
                <p className="text-lg sm:text-2xl font-bold leading-tight drop-shadow-sm">
                  Iconic Architecture & St. Michael Archangel Tower
                </p>
                <div className="mt-1 flex items-center gap-3 text-xs text-slate-200">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" /> Umsning Town, NH-6 Highway Corridor
                  </span>
                  <span>•</span>
                  <span className="text-[#FDE68A] font-semibold">2,000+ Student Body</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('media')}
                  className="py-2.5 px-4 bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors"
                >
                  Explore Campus Gallery
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Metric Strip in Two-Color Palette with Tabular Figures */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm text-left hover:border-[#1B365D] transition-colors">
            <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <Users className="w-4 h-4 text-[#D97706]" />
              <span>Learners</span>
            </span>
            <div className="text-3xl font-extrabold font-mono tabular-nums text-[#1B365D]">
              2,000+
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Kindergarten to Class XII
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm text-left hover:border-[#1B365D] transition-colors">
            <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <Award className="w-4 h-4 text-[#D97706]" />
              <span>State Ranking</span>
            </span>
            <div className="text-3xl font-extrabold font-mono tabular-nums text-[#D97706]">
              Top 20
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              MBOSE Board Topper 2026
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm text-left hover:border-[#1B365D] transition-colors">
            <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <BookOpen className="w-4 h-4 text-[#D97706]" />
              <span>Faculty</span>
            </span>
            <div className="text-3xl font-extrabold font-mono tabular-nums text-[#1B365D]">
              68+
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Lecturers & Sisters
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm text-left hover:border-[#1B365D] transition-colors">
            <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <Clock className="w-4 h-4 text-[#D97706]" />
              <span>Heritage</span>
            </span>
            <div className="text-3xl font-extrabold font-mono tabular-nums text-[#1B365D]">
              65 Yrs
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Established in 1961
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
