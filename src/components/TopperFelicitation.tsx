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
    <section id="toppers" className="w-full py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
              <span>Hall of Academic Honor</span>
              <span className="text-slate-300">•</span>
              <span>MBOSE State Board Distinction</span>
            </div>
            <h2 className="vision-serif-heading text-3xl sm:text-4xl text-[#0c4a8a]">
              <span className="vision-double-angle" aria-hidden="true">&raquo;</span> State Felicitation &amp; Merit Honors
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Celebrating St. Michael&apos;s students who achieve state-level distinction in the
              Meghalaya Board of School Education (MBOSE) examinations, supported by our
              institutional scholarship endowment.
            </p>
          </div>

          <div className="shrink-0 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200 text-xs text-amber-900 font-semibold shadow-xs">
            MBOSE SSLC State Top 20 Honoree
          </div>
        </div>

        {/* Featured Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Photo Feature */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 p-2.5 shadow-xl">
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
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-1">
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
                    type="button"
                    onClick={() => setSelectedPhoto(idx)}
                    aria-label={`View photo: ${photo.title}`}
                    className={`relative rounded-lg overflow-hidden aspect-4/3 border-2 transition-all ${
                      selectedPhoto === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/40 opacity-100 scale-[1.02]'
                        : 'border-slate-700 opacity-60 hover:opacity-100'
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
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <span className="block text-xs uppercase text-amber-800 font-semibold mb-2">
                Scholarship Endowment
              </span>
              <h4 className="text-lg font-bold text-[#0c4a8a] mb-2">
                &raquo; St. Michael&apos;s SSLC Award Body
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Instituted to reward academic brilliance and provide financial support for Higher
                Secondary education in Ri Bhoi District.
              </p>

              <div className="p-4 bg-white rounded-xl border border-amber-200 mb-4 shadow-xs">
                <span className="text-[11px] uppercase text-slate-500 font-semibold block">
                  Merit Cash Scholarship
                </span>
                <span className="text-3xl font-bold text-amber-700">₹20,000</span>
                <span className="text-xs text-slate-700 font-semibold block mt-0.5">
                  Awarded to State Board Rank Holders
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#c61c49]" aria-hidden="true">&raquo;</span>
                  <span>Full tuition waiver for Higher Secondary studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#c61c49]" aria-hidden="true">&raquo;</span>
                  <span>Priority laboratory and reference library access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#c61c49]" aria-hidden="true">&raquo;</span>
                  <span>Personal mentorship by Senior Subject Lecturers</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#142842] text-white rounded-2xl border border-[#0F1D38] shadow-md">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                “Discipline, daily prayer, and the dedication of my teachers at St. Michael&apos;s
                Umsning gave me the confidence to compete and excel at the state level.”
              </p>
              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-slate-300">
                <span className="font-semibold text-amber-300 block">MBOSE SSLC State Merit Holder</span>
                <span>St. Michael&apos;s Higher Secondary School, Umsning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
