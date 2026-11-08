import React from 'react';
import { MapPin, Phone, Mail, GraduationCap, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmission: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmission }) => {
  return (
    <footer className="w-full bg-[#0F1D38] text-slate-300 border-t border-[#1B365D] text-xs">
      
      {/* Upper Footer Ribbon */}
      <div className="border-b border-white/10 py-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img
              src={SCHOOL_INFO.logo}
              alt="St. Michael Logo"
              className="w-16 h-16 rounded-full border-2 border-[#F59E0B] shrink-0 bg-white p-0.5"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FDE68A] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded border border-white/20">
                  [ CONTAINER: INSTITUTIONAL FOOTER ]
                </span>
                <span className="text-xs font-mono uppercase text-[#F59E0B] font-bold">
                  Estd. 1961 • 65 Years
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight mt-1">
                {SCHOOL_INFO.name}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Motto: "{SCHOOL_INFO.mottoLatin} & {SCHOOL_INFO.mottoKhasi}" ({SCHOOL_INFO.mottoMeaning})
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-3">
            <button
              onClick={onOpenAdmission}
              className="py-2.5 px-5 bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-all hover:scale-[1.02]"
            >
              Online Admission 2026
            </button>
            <button
              onClick={() => onNavigate('hub')}
              className="py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Student Portal
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Col 1: Heritage & Anthem */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
            School Anthem Excerpt
          </h4>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            “Under St. Michael's shield of light, We march forward for the right; In Umsning hills our voices raise, In study, honor, prayer and praise.”
          </p>
          <div className="pt-2 text-[11px] text-slate-400 font-mono">
            Catholic Diocese of Shillong Affiliation
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
            Institutional Portals
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('hub')} className="hover:text-white transition-colors">
                Notice Board & Circulars
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('academics')} className="hover:text-white transition-colors">
                Higher Secondary (Science, Arts, Commerce)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('hub')} className="hover:text-white transition-colors">
                Daily Bell Routine & Timetable
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('toppers')} className="hover:text-white transition-colors">
                SSLC State Topper Honors & Felicitations
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('media')} className="hover:text-white transition-colors">
                2,000 Student Synchronized Drill & Video
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Student & Staff Resources */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
            Community & Houses
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('hub')} className="hover:text-white transition-colors">
                St. Michael House (Blue Eagles)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('hub')} className="hover:text-white transition-colors">
                St. Gabriel House (Red Lions)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('hub')} className="hover:text-white transition-colors">
                St. Raphael House (Green Falcons)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('hub')} className="hover:text-white transition-colors">
                St. Uriel House (Yellow Phoenix)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('faculty')} className="hover:text-white transition-colors">
                68+ Faculty & Sisters Directory
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Reach & Contact */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
            Campus Desk
          </h4>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
              <span>Umsning, Ri Bhoi District, Meghalaya 793105</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>+91 94361 02845 / 03638 264218</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>stmichaelumsning@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 1961-{new Date().getFullYear()} St. Michael's Higher Secondary School, Umsning. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors">MBOSE Code: 01961</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Diocesan Education Commission</span>
            <span>•</span>
            <span className="text-[#F59E0B] font-bold">Ri Bhoi District, Meghalaya</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
