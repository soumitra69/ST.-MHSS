import React, { useState } from 'react';
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FAQAndFinalCTAProps {
  onOpenAdmission: () => void;
  onNavigate: (sectionId: string) => void;
}

const frequentlyAskedQuestions = [
  {
    question: 'Which school levels are offered?',
    answer: SCHOOL_INFO.classes,
  },
  {
    question: 'Which education board is the school affiliated with?',
    answer: SCHOOL_INFO.affiliation,
  },
  {
    question: 'Where is St. Michael’s Higher Secondary School located?',
    answer: SCHOOL_INFO.address,
  },
  {
    question: 'How can I contact the school?',
    answer: `Call ${SCHOOL_INFO.phoneMobile} or ${SCHOOL_INFO.phone}, or email ${SCHOOL_INFO.email}.`,
  },
];

export const FAQAndFinalCTA: React.FC<FAQAndFinalCTAProps> = ({
  onOpenAdmission,
  onNavigate,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Information for families
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1B365D] sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {frequentlyAskedQuestions.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `school-faq-answer-${index}`;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-[#1B365D] hover:bg-slate-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1B365D] sm:text-base"
                    >
                      {item.question}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-amber-700 transition-transform motion-reduce:transition-none ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={answerId} className="border-t border-slate-200 px-5 py-4">
                      <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-[#1B365D] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold sm:text-2xl">Contact St. Michael&apos;s</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Please contact the school for current admission information or other enquiries.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-100">
                <a className="inline-flex items-center gap-2 hover:text-amber-300" href={`tel:${SCHOOL_INFO.phoneMobile.replace(/\s/g, '')}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SCHOOL_INFO.phoneMobile}
                </a>
                <a className="inline-flex items-center gap-2 hover:text-amber-300" href={`mailto:${SCHOOL_INFO.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenAdmission}
                className="rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Admission enquiry
              </button>
              <button
                type="button"
                onClick={() => onNavigate('footer')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Contact details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
