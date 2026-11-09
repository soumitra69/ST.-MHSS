import React, { useState } from 'react';
import { resolveSchoolAsset } from '../data/schoolAssets';

export const TopperFelicitation: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);

  const felicitationPhotos = [
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.10_PM__2__df242174.jpeg'),
      title: "State Felicitation by Hon'ble Chief Minister Conrad K. Sangma",
      subtitle: 'Government of Meghalaya Official Felicitation of SSLC Toppers 2026 (Khasi & Jaintia Districts)',
      description:
        'Chief Minister Shri Conrad K. Sangma presenting the Certificate of Honor to our St. Michael’s board rank holder.',
    },
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.11_PM__1__6f048fbb.jpeg'),
      title: "St. Michael's ₹20,000 Academic Excellence Cash Award",
      subtitle: 'Presented by Diocesan Leadership and Reverend Sisters on School Campus',
      description:
        "St. Michael's Secondary School Leaving Certificate Award Body honoring academic excellence in Umsning.",
    },
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.12_PM_8061309a.jpeg'),
      title: "Chief Minister with St. Michael's Scholar",
      subtitle: 'Proud Moment for Umsning and Ri Bhoi District',
      description:
        "Our board topper in official St. Michael's blazer standing alongside the Hon'ble Chief Minister of Meghalaya.",
    },
    {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Image_2026-11-08_at_2.04.11_PM__2__12d4b152.jpeg'),
      title: 'MBOSE Merit Order Recognition Ceremony',
      subtitle: 'Official Board Ceremony Honoring Top Twenty Candidates',
      description:
        'Meghalaya Board of School Education Shillong state felicitation alongside school management and educators.',
    },
  ];

  return (
    <section
      id="toppers"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-[#fffbeb] via-[#eff6ff] to-[#fef2f2] border-b border-amber-200 scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ea580c] to-[#d97706] px-4 py-1 text-xs font-bold tracking-wider uppercase text-white shadow-sm mb-3">
              <span>Hall of Academic Honor</span>
              <span>•</span>
              <span>MBOSE State Board Distinction</span>
            </div>
            <h2 className="vision-serif-heading text-3xl sm:text-4xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              State Felicitation &amp; Merit Honors
            </h2>
            <p className="mt-2 text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
              Celebrating St. Michael&apos;s students who achieve state-level distinction in the
              Meghalaya Board of School Education (MBOSE) examinations, supported by our
              institutional scholarship endowment.
            </p>
          </div>

          <div className="shrink-0 bg-gradient-to-r from-[#1d4ed8] to-[#0f766e] px-5 py-3 rounded-xl border border-blue-400 text-xs text-white font-extrabold uppercase tracking-wider shadow-lg">
            ★ MBOSE SSLC State Top 20 Honoree
          </div>
        </div>

        {/* Featured Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Photo Feature */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl overflow-hidden border-2 border-amber-400 bg-gradient-to-b from-[#0c2d57] to-[#0f172a] p-3 shadow-2xl">
              <div className="relative aspect-4/3 sm:aspect-16/10 bg-black rounded-xl overflow-hidden">
                <img
                  src={felicitationPhotos[selectedPhoto].src}
                  alt={felicitationPhotos[selectedPhoto].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain sm:object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D38] via-[#0F1D38]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <span className="inline-block rounded-md bg-amber-400 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-slate-950 font-extrabold mb-2">
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
              <div className="pt-3 grid grid-cols-4 gap-3 bg-transparent">
                {felicitationPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPhoto(idx)}
                    aria-label={`View photo: ${photo.title}`}
                    className={`relative rounded-lg overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer ${
                      selectedPhoto === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/50 opacity-100 scale-[1.02]'
                        : 'border-slate-700 opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scholarship and Quotes */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative overflow-hidden p-6 bg-gradient-to-b from-white via-amber-50/70 to-orange-50/80 rounded-2xl border-2 border-amber-300 shadow-xl">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#1d4ed8]" />
              <span className="inline-block rounded-md bg-orange-100 border border-orange-300 px-2.5 py-0.5 text-[11px] uppercase text-orange-900 font-bold mb-2">
                Scholarship Endowment
              </span>
              <h4 className="text-lg font-bold text-[#0c4a8a] mb-2">
                &raquo; St. Michael&apos;s SSLC Award Body
              </h4>
              <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
                Instituted to reward academic brilliance and provide financial support for Higher
                Secondary education in Ri Bhoi District.
              </p>

              <div className="p-4 bg-gradient-to-r from-[#1d4ed8] to-[#1e3a8a] text-white rounded-xl border border-blue-400 mb-4 shadow-md">
                <span className="text-[11px] uppercase text-amber-300 font-bold block">
                  Merit Cash Scholarship
                </span>
                <span className="text-3xl font-extrabold text-white">₹20,000</span>
                <span className="text-xs text-blue-100 font-medium block mt-0.5">
                  Awarded to State Board Rank Holders
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-800 font-semibold">
                <li className="flex items-start gap-2 rounded-lg bg-white/90 p-2 border border-amber-200">
                  <span className="font-bold text-[#d90429]" aria-hidden="true">
                    &raquo;
                  </span>
                  <span>Full tuition waiver for Higher Secondary studies</span>
                </li>
                <li className="flex items-start gap-2 rounded-lg bg-white/90 p-2 border border-amber-200">
                  <span className="font-bold text-[#d90429]" aria-hidden="true">
                    &raquo;
                  </span>
                  <span>Priority laboratory and reference library access</span>
                </li>
                <li className="flex items-start gap-2 rounded-lg bg-white/90 p-2 border border-amber-200">
                  <span className="font-bold text-[#d90429]" aria-hidden="true">
                    &raquo;
                  </span>
                  <span>Personal mentorship by Senior Subject Lecturers</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#0c2d57] via-[#1d4ed8] to-[#0f766e] text-white rounded-2xl border-2 border-amber-300/70 shadow-xl">
              <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                “Discipline, daily prayer, and the dedication of my teachers at St. Michael&apos;s
                Umsning gave me the confidence to compete and excel at the state level.”
              </p>
              <div className="mt-4 pt-3 border-t border-white/20 text-[11px] text-blue-100">
                <span className="font-bold text-amber-300 block">
                  MBOSE SSLC State Merit Holder
                </span>
                <span>St. Michael&apos;s Higher Secondary School, Umsning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
