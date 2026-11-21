import React, { useState } from 'react';
import { resolveSchoolAsset, SCHOOL_IMAGES } from '../data/schoolAssets';
import { AppPageId } from './InstitutionalSection';

interface TopperFelicitationProps {
  onNavigatePage?: (page: AppPageId) => void;
}

export const TopperFelicitation: React.FC<TopperFelicitationProps> = ({ onNavigatePage }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);

  const felicitationPhotos = [
    {
      src: SCHOOL_IMAGES.topperLasarapynbiang,
      title: "8th Position Topper S.S.L.C Examination 2026: Lasarapynbiang Nongbri",
      subtitle: "Felicitation Ceremony on Children's Day at St. Michael's Umsning",
      description:
        "Lasarapynbiang Nongbri, 8th Position State Board Topper in the MBOSE S.S.L.C Examination 2026, felicitated with the prestigious institutional memento by Rev. Sister on Children's Day.",
    },
    {
      src: SCHOOL_IMAGES.studentAwards2026Gallery[1],
      title: "Given an Award to the Students of 2026 - Felicitation Ceremony",
      subtitle: "Honoring Board Achievers & Distinction Holders on Children's Day",
      description:
        "St. Michael's scholar felicitated with the institutional memento and cash scholarship envelope by Rev. Sister on the courtyard stage.",
    },
    {
      src: SCHOOL_IMAGES.studentAwards2026Gallery[3],
      title: "Class XII Distinction Award Presentation",
      subtitle: "Academic Excellence Honors at Umsning Campus",
      description:
        "Senior secondary student receiving the academic excellence plaque and citation from faculty mentors during the 2026 award ceremonies.",
    },
    {
      src: SCHOOL_IMAGES.studentAwards2026Gallery[10],
      title: "Leadership Address & Welcome at Student Awards 2026",
      subtitle: "Pastoral Address from the Podium on Campus",
      description:
        "Faculty and school leadership addressing scholars, congratulating awardees, and inspiring the student body during the 2026 ceremony.",
    },
    {
      src: SCHOOL_IMAGES.studentAwards2026Gallery[13],
      title: "Institutional Memento & Special Recognition",
      subtitle: "Recognizing Diligence and Character Excellence",
      description:
        "Presentation of the official institutional memento by school leadership to high-achieving student honorees.",
    },
    {
      src: SCHOOL_IMAGES.studentAwards2026Gallery[14],
      title: "Class XII Achiever Felicitation",
      subtitle: "Academic & Co-Curricular Recognition 2026",
      description:
        "Outstanding student being awarded the academic plaque by Rev. Sister during the campus-wide awards ceremony.",
    },
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
  ];

  return (
    <section
      id="toppers"
      className="w-full py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-20"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0c4a8a] px-4 py-1 text-xs font-bold tracking-wider uppercase text-white shadow-sm mb-3">
              <i className="fas fa-trophy text-amber-300" aria-hidden="true"></i>
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

          <div className="shrink-0 bg-[#0c2d57] px-5 py-3 rounded-xl border border-slate-700 text-xs text-white font-extrabold uppercase tracking-wider shadow-md">
            <i className="fas fa-medal mr-1.5 text-amber-300" aria-hidden="true"></i>
            MBOSE SSLC State Top 10 Honoree
          </div>
        </div>

        {/* MBOSE Class 10 (SSLC) & Class 12 (HSSLC) Board Result Summary Strip (Passed 2026 Official Census) */}
        <div
          className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {/* 1. Class X SSLC */}
          <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4 border-t-4 border-t-[#0c4a8a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0c4a8a]">
                  Class X (SSLC)
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                  96.2% Pass
                </span>
              </div>
              <p className="mt-2 text-xl font-black text-[#0c2d57]">76 / 79 Passed</p>
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slate-600 leading-snug">
              Appeared: 79 • Fail: 3 • State Top 10 Merit Rank (8th Position)
            </p>
          </div>

          {/* 2. Class XII Arts */}
          <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4 border-t-4 border-t-[#d97706] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#d97706]">
                  Class XII (Arts)
                </span>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold text-amber-900">
                  94.7% Pass
                </span>
              </div>
              <p className="mt-2 text-xl font-black text-[#0c2d57]">160 / 169 Passed</p>
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slate-600 leading-snug">
              Appeared: 169 • Fail: 9 • High First Divisions &amp; Distinctions
            </p>
          </div>

          {/* 3. Class XII Science */}
          <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4 border-t-4 border-t-blue-600 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                  Class XII (Science)
                </span>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-extrabold text-[#0c4a8a]">
                  88% Pass
                </span>
              </div>
              <p className="mt-2 text-xl font-black text-[#0c2d57]">22 / 25 Passed</p>
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slate-600 leading-snug">
              Appeared: 25 • Fail: 3 • Physics, Chemistry &amp; Biology Practical Scores
            </p>
          </div>

          {/* 4. Class XII Commerce */}
          <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4 border-t-4 border-t-emerald-600 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                  Class XII (Commerce)
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                  100% Pass
                </span>
              </div>
              <p className="mt-2 text-xl font-black text-[#0c2d57]">16 / 16 Passed</p>
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slate-600 leading-snug">
              Appeared: 16 • Fail: NIL • 100% Board Pass in Accountancy &amp; BST
            </p>
          </div>

          {/* 5. Class XII Computer Technique (C.T) */}
          <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4 border-t-4 border-t-indigo-600 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700">
                  Class XII (C.T)
                </span>
                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-extrabold text-indigo-800">
                  92.9% Pass
                </span>
              </div>
              <p className="mt-2 text-xl font-black text-[#0c2d57]">13 / 14 Passed</p>
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slate-600 leading-snug">
              Computer Technique • Appeared: 14 • Fail: 1 • Vocational IT
            </p>
          </div>

          {/* 6. Class XII Poultry Farming (P.F) */}
          <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4 border-t-4 border-t-teal-600 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800">
                  Class XII (P.F)
                </span>
                <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-extrabold text-teal-800">
                  100% Pass
                </span>
              </div>
              <p className="mt-2 text-xl font-black text-[#0c2d57]">5 / 5 Passed</p>
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slate-600 leading-snug">
              Poultry Farming • Appeared: 5 • Fail: NIL • 100% Practical Vocational
            </p>
          </div>
        </div>

        {/* Featured Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Photo Feature */}
          <div className="lg:col-span-8" data-aos="fade-right" data-aos-duration="800">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#0c2d57] p-3 shadow-xl">
              <div className="relative aspect-4/3 sm:aspect-16/10 bg-[#07172e] rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={felicitationPhotos[selectedPhoto].src}
                  alt={felicitationPhotos[selectedPhoto].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0F1D38] via-[#0F1D38]/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <span className="inline-block rounded-md bg-amber-400 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-slate-950 font-extrabold mb-2">
                    <i className="fas fa-award mr-1" aria-hidden="true"></i>
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
              <div className="pt-3 grid grid-cols-4 sm:grid-cols-8 gap-2 bg-transparent">
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
          <div className="lg:col-span-4 space-y-5" data-aos="fade-left" data-aos-delay="120">
            <div className="relative overflow-hidden p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-lg">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a]" />
              <span className="inline-block rounded-md bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[11px] uppercase text-amber-900 font-bold mb-2">
                <i className="fas fa-graduation-cap mr-1 text-[#d97706]" aria-hidden="true"></i>
                Scholarship Endowment
              </span>
              <h4 className="text-lg font-bold text-[#0c4a8a] mb-2">
                &raquo; St. Michael&apos;s SSLC Award Body
              </h4>
              <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
                Instituted to reward academic brilliance and provide financial support for Higher
                Secondary education in Ri Bhoi District.
              </p>

              <div className="p-4 bg-[#0c4a8a] text-white rounded-xl border border-[#0c4a8a] mb-4 shadow-md">
                <span className="text-[11px] uppercase text-amber-300 font-bold block">
                  <i className="fas fa-coins mr-1" aria-hidden="true"></i>
                  Merit Cash Scholarship
                </span>
                <span className="text-3xl font-extrabold text-white">₹20,000</span>
                <span className="text-xs text-blue-100 font-medium block mt-0.5">
                  Awarded to State Board Rank Holders
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-800 font-semibold">
                <li className="flex items-start gap-2 rounded-lg bg-white p-2 border border-slate-200">
                  <i className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0" aria-hidden="true"></i>
                  <span>Full tuition waiver for Higher Secondary studies</span>
                </li>
                <li className="flex items-start gap-2 rounded-lg bg-white p-2 border border-slate-200">
                  <i className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0" aria-hidden="true"></i>
                  <span>Priority laboratory and reference library access</span>
                </li>
                <li className="flex items-start gap-2 rounded-lg bg-white p-2 border border-slate-200">
                  <i className="fas fa-check-circle text-[#0c4a8a] mt-0.5 shrink-0" aria-hidden="true"></i>
                  <span>Personal mentorship by Senior Subject Lecturers</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-slate-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => onNavigatePage?.('notices')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#d97706] cursor-pointer"
                >
                  <span>Read More</span>
                  <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <div className="p-6 bg-[#0c2d57] text-white rounded-2xl border border-slate-700 shadow-lg">
              <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                <i className="fas fa-quote-left text-amber-300 mr-1.5" aria-hidden="true"></i>
                Discipline, daily prayer, and the dedication of my teachers at St. Michael&apos;s
                Umsning gave me the confidence to compete and excel at the state level.
              </p>
              <div className="mt-4 pt-3 border-t border-white/20 text-[11px] text-blue-100">
                <span className="font-bold text-amber-300 block">
                  <i className="fas fa-user-graduate mr-1" aria-hidden="true"></i>
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
