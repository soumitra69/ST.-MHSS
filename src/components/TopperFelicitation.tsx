import React, { useState } from 'react';
import { Award, Star, CheckCircle, ChevronRight, Trophy, BookOpen, Quote, Sparkles } from 'lucide-react';
import { resolveSchoolAsset } from '../data/schoolAssets';

export const TopperFelicitation: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);

  const felicitationPhotos = [
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.10_PM__2__df242174.jpeg'),
      title: "State Felicitation by Hon'ble Chief Minister Conrad K. Sangma",
      subtitle: "Government of Meghalaya Official Felicitation of SSLC Toppers 2026 (Khasi and Jaintia Districts)",
      description: "Chief Minister Shri Conrad K. Sangma presenting the Certificate of Honor to our St. Michael board rank holder."
    },
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.11_PM__1__6f048fbb.jpeg'),
      title: "St. Michael ₹20,000 Academic Excellence Cash Award",
      subtitle: "Presented by Diocesan Fathers and Reverend Sisters on School Campus",
      description: "St. Michael Secondary School Leaving Certificate Award Body honoring academic excellence since 2025."
    },
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.12_PM_8061309a.jpeg'),
      title: "Chief Minister with St. Michael Scholar",
      subtitle: "Proud Moment for Umsning and Ri Bhoi District",
      description: "Our board topper in official St. Michael blue blazer standing with the Chief Minister of Meghalaya."
    },
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.11_PM__2__12d4b152.jpeg'),
      title: "MBOSE Merit Order Recognition Screen",
      subtitle: "Official Board Screen listing Top Twenty Candidates",
      description: "Meghalaya Board of School Education Shillong official ceremony alongside school educators."
    }
  ];

  return (
    <section id="toppers" className="w-full py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#1B365D] uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
              [ CONTAINER: STATE FELICITATION & MERIT HONORS ]
            </span>
          </div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            MBOSE SSLC State Top 20
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#D97706] mb-2">
              <Trophy className="w-4 h-4 text-[#D97706]" />
              <span>Hall of Academic Honor</span>
              <span className="text-slate-300">•</span>
              <span>MBOSE Board Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
              State felicitation and academic excellence
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Celebrating St. Michael students who achieve state level distinction in the Meghalaya Board of School Education examinations, backed by our institutional scholarship endowment.
            </p>
          </div>

          <div className="shrink-0 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200 text-xs text-[#D97706] font-bold flex items-center gap-2 shadow-xs">
            <Award className="w-4 h-4 text-[#D97706]" />
            <span>Meghalaya State Merit List Honoree</span>
          </div>
        </div>

        {/* Featured Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Photo Feature */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-900 p-2.5 shadow-xl">
              <div className="relative aspect-4/3 sm:aspect-16/10 bg-black rounded-xl overflow-hidden">
                <img
                  src={felicitationPhotos[selectedPhoto].src}
                  alt={felicitationPhotos[selectedPhoto].title}
                  className="w-full h-full object-contain sm:object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D38] via-[#0F1D38]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-1">
                    {felicitationPhotos[selectedPhoto].subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight drop-shadow-sm">
                    {felicitationPhotos[selectedPhoto].title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 max-w-xl font-normal">
                    {felicitationPhotos[selectedPhoto].description}
                  </p>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="pt-3 grid grid-cols-4 gap-3 bg-slate-900">
                {felicitationPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhoto(idx)}
                    className={`relative rounded-lg overflow-hidden aspect-4/3 border-2 transition-all ${
                      selectedPhoto === idx
                        ? 'border-[#D97706] ring-2 ring-[#D97706]/40 opacity-100 scale-[1.02]'
                        : 'border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scholarship and Quotes */}
          <div className="lg:col-span-4 space-y-5">
            
            <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 shadow-sm">
              <span className="text-[11px] font-mono uppercase text-[#D97706] font-bold block mb-2">
                Scholarship Endowment
              </span>
              <h4 className="text-lg font-bold text-[#1B365D] mb-2">
                St. Michael SSLC Award Body
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Instituted to encourage academic brilliance and provide financial support for Higher Secondary education in Ri Bhoi.
              </p>
              
              <div className="p-4 bg-white rounded-xl border-2 border-amber-200 mb-4 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">Merit Scholarship</span>
                <span className="text-3xl font-extrabold font-mono text-[#D97706]">₹20,000</span>
                <span className="text-xs text-slate-700 font-semibold block mt-0.5">Awarded to State Board Rank Holders</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Full tuition waiver for Higher Secondary studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Advanced reference laboratory and library access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Mentorship by Senior Subject Lecturers</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#1B365D] text-white rounded-2xl border border-[#0F1D38] shadow-sm">
              <Quote className="w-6 h-6 text-[#F59E0B] mb-2" />
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                “Discipline, daily prayer, and the dedication of my teachers at St. Michael Umsning gave me the confidence to compete and excel at the state level.”
              </p>
              <div className="mt-4 pt-3 border-t border-white/20 text-[11px] text-slate-300">
                <span className="font-bold text-[#FDE68A] block">MBOSE SSLC Merit Holder</span>
                <span>St. Michael Higher Secondary School, Umsning</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
