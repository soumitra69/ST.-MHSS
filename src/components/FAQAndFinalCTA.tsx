import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FAQAndFinalCTAProps {
  onOpenAdmission: () => void;
  onNavigate: (sectionId: string) => void;
}

const frequentlyAskedQuestions = [
  {
    question: 'Which school levels and streams are offered at St. Michael’s?',
    answer: `${SCHOOL_INFO.classes}. At the Higher Secondary stage (Class XI & XII), students can choose between Science (Physics, Chemistry, Biology, Mathematics, Computer Science), Arts & Humanities (History, Political Science, Sociology, Economics, Education, Khasi), and Commerce (Accountancy, Business Studies, Entrepreneurship, Economics).`,
  },
  {
    question: 'Which education board is the school affiliated with?',
    answer: `${SCHOOL_INFO.affiliation} (School Code: ${SCHOOL_INFO.schoolCode}). Students appear for the state-level SSLC (Class X) and HSSLC (Class XII) board examinations.`,
  },
  {
    question: 'Are merit scholarships and fee concessions available?',
    answer:
      "Yes. St. Michael's SSLC Award Body awards ₹20,000 cash scholarships and 100% tuition fee waivers for Class XI & XII to students securing ranks in the MBOSE State Top 20 Merit List, along with sibling and diocesan need-based concessions.",
  },
  {
    question: 'Does the school provide daily bus transport?',
    answer:
      'Yes, our 4-route school bus fleet operates daily along the NH-6 corridor covering Umsning Town Core, Nongpoh Road, Bhoirymbong, Umroi Airport Junction, Umden, and Sumer.',
  },
  {
    question: 'Where is St. Michael’s Higher Secondary School located?',
    answer: `${SCHOOL_INFO.address}.`,
  },
  {
    question: 'How can parents contact the school office for admission enquiries?',
    answer: `You can visit the school Secretariat during office hours (${SCHOOL_INFO.officeHours}), call ${SCHOOL_INFO.phoneMobile} or ${SCHOOL_INFO.phone}, or email ${SCHOOL_INFO.email}.`,
  },
];

const FAQ_BORDERS = [
  'border-l-4 border-l-[#1d4ed8] border-blue-200 bg-gradient-to-r from-blue-50/80 to-white',
  'border-l-4 border-l-[#ea580c] border-orange-200 bg-gradient-to-r from-orange-50/80 to-white',
  'border-l-4 border-l-[#0d9488] border-teal-200 bg-gradient-to-r from-teal-50/80 to-white',
  'border-l-4 border-l-[#7c3aed] border-purple-200 bg-gradient-to-r from-purple-50/80 to-white',
  'border-l-4 border-l-[#e11d48] border-rose-200 bg-gradient-to-r from-rose-50/80 to-white',
  'border-l-4 border-l-[#d97706] border-amber-200 bg-gradient-to-r from-amber-50/80 to-white',
];

export const FAQAndFinalCTA: React.FC<FAQAndFinalCTAProps> = ({
  onOpenAdmission,
  onNavigate,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full bg-gradient-to-br from-[#eff6ff] via-[#faf5ff] to-[#fff7ed] py-16 md:py-24 border-t border-blue-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center" data-aos="fade-up" data-aos-duration="750">
            <span className="inline-block rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#ea580c] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
              <i className="fas fa-question-circle mr-1.5" aria-hidden="true"></i>
              Information for Students &amp; Families
            </span>
            <h2 className="vision-serif-heading mt-3 text-3xl text-[#0c4a8a] sm:text-4xl">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {frequentlyAskedQuestions.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `school-faq-answer-${index}`;

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-xl border shadow-sm transition-all ${
                    FAQ_BORDERS[index % FAQ_BORDERS.length]
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={60 * (index + 1)}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-[#0c4a8a] hover:bg-white/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1B365D] sm:text-base cursor-pointer"
                    >
                      <span>&raquo; {item.question}</span>
                      <i
                        className={`fas fa-chevron-down shrink-0 text-[#ea580c] transition-transform motion-reduce:transition-none ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      ></i>
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={answerId} className="border-t border-blue-100 px-5 py-4 bg-white">
                      <p className="text-sm font-medium leading-7 text-slate-700">{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div
            className="mt-12 flex flex-col gap-6 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-[#0c2d57] via-[#1d4ed8] to-[#0f766e] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9 shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="750"
          >
            <div className="max-w-2xl">
              <span className="inline-block rounded-md bg-amber-400 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 mb-2">
                <i className="fas fa-bullhorn mr-1.5" aria-hidden="true"></i>
                Admissions Open 2026–27
              </span>
              <h3 className="text-xl font-bold sm:text-2xl text-white">
                &raquo; Connect with St. Michael&apos;s, Umsning
              </h3>
              <p className="mt-2 text-sm leading-7 text-blue-100">
                Ready to apply for Academic Session 2026–27 or have questions about streams, fees,
                or campus facilities?
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white">
                <a
                  className="inline-flex items-center gap-2 hover:text-amber-300"
                  href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}
                >
                  <i className="fas fa-phone-alt text-amber-300" aria-hidden="true"></i>
                  {SCHOOL_INFO.phoneMobile}
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:text-amber-300"
                  href={`mailto:${SCHOOL_INFO.email}`}
                >
                  <i className="fas fa-envelope text-amber-300" aria-hidden="true"></i>
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ea580c] px-5 py-3 text-sm font-extrabold text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                Online Admission Form
              </button>
              <button
                type="button"
                onClick={() => onNavigate('footer')}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20 cursor-pointer"
              >
                <i className="fas fa-map-marker-alt text-amber-300" aria-hidden="true"></i>
                Location &amp; Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
