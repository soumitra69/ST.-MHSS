import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import type { AppPageId } from './InstitutionalSection';

interface FAQAndFinalCTAProps {
  onOpenAdmission: () => void;
  onNavigate: (sectionId: string) => void;
  onNavigatePage?: (page: AppPageId) => void;
}

const frequentlyAskedQuestions = [
  {
    question: 'Which school levels and streams are offered at St. Michael’s?',
    answer: `${SCHOOL_INFO.classes}. Founded in 1961 by Rev. Fr. Michael Balawan, SDB under the Catholic Mission of Umsning, Archdiocese of Shillong, the school offers English-medium education from Nursery to Class XII, including Science, Arts & Humanities, and Commerce streams at the Higher Secondary stage.`,
  },
  {
    question: 'What are the official school hours and office visiting timings?',
    answer:
      'School hours are from 8:45 a.m. to 3:00 p.m. (Monday to Friday) for Secondary and Higher Secondary (Classes VI – XII), and 8:45 a.m. to 2:00 p.m. for the Primary Section. Morning assembly begins with prayer at 8:45 a.m. Office visiting hours are Monday to Friday from 8:45 a.m. – 11:55 a.m. and 12:35 p.m. – 3:00 p.m. (Closed on Saturdays, Sundays, and Public/School Holidays).',
  },
  {
    question: 'What are the Transfer Certificate (TC) and admission requirements?',
    answer:
      'A pupil who has attended a recognised school is admitted only on the strength of a Transfer Certificate (TC) from the school last attended and must present himself/herself to the Principal before admission. Only a parent/guardian can apply for a TC in writing along with the necessary fees, provided no fees are in arrears.',
  },
  {
    question: 'What is the annual examination and promotion schedule?',
    answer:
      'In a single academic year, the school conducts two major examinations: Pre-Promotion and Promotion Exams for Class XI, Pre-Selection and Selection Exams for Class XII, Half-Yearly/Pre-Selection and Selection/Promotion for Secondary (Classes VI – X), and two Term Examinations for the Primary Section, in addition to regular weekly/unit tests. Merit ranks are awarded only to students who pass all subjects (Top 20 in Higher Secondary).',
  },
  {
    question: 'What is the weekly school uniform and track-suit schedule?',
    answer:
      'Regular school uniform must be worn on every Monday, Tuesday, and Thursday. On Wednesday and Friday, students wear their prescribed track-suits along with their House/Team T-Shirt and white shoes/canvas. Every student must also bring the School Diary and Student ID daily.',
  },
  {
    question: 'Where is St. Michael’s located and how can parents contact the school office?',
    answer: `St. Michael’s is situated at Umsning (PIN - 793105) between Shillong and Nongpoh on the left side of the old National Highway and right side of the Shillong–Guwahati Bypass road. You can visit the Secretariat during office hours (${SCHOOL_INFO.officeHours}), call ${SCHOOL_INFO.phoneMobile} or ${SCHOOL_INFO.phone}, or email ${SCHOOL_INFO.email}.`,
  },
];

const FAQ_BORDERS = [
  'border-l-4 border-l-[#0c4a8a] border-slate-200 bg-white',
  'border-l-4 border-l-[#d97706] border-slate-200 bg-white',
];

export const FAQAndFinalCTA: React.FC<FAQAndFinalCTAProps> = ({
  onOpenAdmission,
  onNavigate,
  onNavigatePage,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full bg-[#f4f7fb] py-16 md:py-24 border-t border-slate-200"
    >
      <div className="container">
        <div className="w-full">
          <div className="mb-10 text-center" data-aos="fade-up" data-aos-duration="750">
            <span className="inline-block rounded-full bg-[#0c4a8a] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
              <i className="fas fa-question-circle mr-1.5 text-amber-300" aria-hidden="true"></i>
              Information for Students &amp; Families
            </span>
            <h2 className="vision-serif-heading mt-3 text-3xl text-[#0c4a8a] sm:text-4xl">
              <span className="vision-double-angle" aria-hidden="true">
                &raquo;
              </span>{' '}
              Frequently Asked Questions
            </h2>
          </div>

          <div className="w-full space-y-3.5">
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
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-[#0c4a8a] hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1B365D] sm:text-base cursor-pointer"
                    >
                      <span>&raquo; {item.question}</span>
                      <i
                        className={`fas fa-chevron-down shrink-0 text-[#d97706] transition-transform motion-reduce:transition-none ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      ></i>
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={answerId} className="border-t border-slate-100 px-5 py-4 bg-white">
                      <p className="text-sm font-medium leading-7 text-slate-700">{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div
            className="mt-12 flex w-full flex-col gap-6 rounded-2xl border border-slate-700 bg-[#0c2d57] p-6 text-white lg:flex-row lg:items-center lg:justify-between sm:p-9 shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="750"
          >
            <div className="max-w-3xl">
              <span className="inline-block rounded-md bg-[#d97706] px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white mb-2">
                <i className="fas fa-bullhorn mr-1.5" aria-hidden="true"></i>
                Admissions Open 2026–27
              </span>
              <h3 className="text-xl font-bold sm:text-2xl text-white">
                &raquo; Connect with St. Michael&apos;s, Umsning
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
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
                className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-sm font-extrabold text-white shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                Online Admission Form
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onNavigatePage) {
                    onNavigatePage('who-we-are');
                  } else {
                    onNavigate('footer');
                  }
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20 cursor-pointer"
              >
                <i className="fas fa-arrow-right text-amber-300" aria-hidden="true"></i>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
