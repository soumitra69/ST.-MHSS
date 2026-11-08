import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  BookOpen, 
  Activity, 
  Compass, 
  GraduationCap,
  Users,
  Sparkles
} from 'lucide-react';

interface HowItWorksAndBenefitsProps {
  onOpenAdmission: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HowItWorksAndBenefits: React.FC<HowItWorksAndBenefitsProps> = ({
  onOpenAdmission,
  onNavigate
}) => {
  const steps = [
    {
      stepNumber: "01",
      title: "Enrollment Inquiry and Stream Selection",
      description: "Submit the online inquiry or visit our Umsning campus desk. Choose between Kindergarten, Primary, Secondary, or Senior Secondary Science, Arts, and Commerce streams.",
      actionText: "Online Form",
      action: onOpenAdmission
    },
    {
      stepNumber: "02",
      title: "Academic Verification & Counseling",
      description: "Meet with senior subject lecturers and Diocesan mentors for record verification, aptitude guidance, and scholarship eligibility review.",
      actionText: "View Faculty",
      action: () => onNavigate('faculty')
    },
    {
      stepNumber: "03",
      title: "House Induction and Daily Campus Life",
      description: "Receive your student badge, welcome kit, and induction into one of four Archangel houses with daily synchronized drill and library access.",
      actionText: "Explore Houses",
      action: () => onNavigate('hub')
    }
  ];

  const benefits = [
    {
      title: "State Board Rank Mentorship",
      outcome: "Dedicated tutoring that led our 2026 SSLC student to the state top 20 merit list with felicitation by Chief Minister Conrad Sangma.",
      tag: "Academic Honors",
      accent: "border-[#D97706]/40 bg-amber-50 text-[#D97706]"
    },
    {
      title: "Synchronized Physical Drill",
      outcome: "Daily athletic training and mass physical drill for 2,000 students on our tiered amphitheatre ground to foster physical stamina and team unity.",
      tag: "Physical Discipline",
      accent: "border-[#1B365D]/40 bg-blue-50 text-[#1B365D]"
    },
    {
      title: "Modern Laboratories & Fieldwork",
      outcome: "Hands on scientific experiments and Class XII regional geography field excursions across the Ri Bhoi hills.",
      tag: "Experiential Learning",
      accent: "border-[#D97706]/40 bg-amber-50 text-[#D97706]"
    },
    {
      title: "2,000-Learner Digital Hub",
      outcome: "Direct digital access to daily timetables, bus route tracking, notice circulars, fee calculators, and online marksheet validation.",
      tag: "Connected Campus",
      accent: "border-[#1B365D]/40 bg-blue-50 text-[#1B365D]"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#1B365D] uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
              [ CONTAINER: INSTITUTIONAL PURPOSE & ADMISSIONS ]
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Ri Bhoi Academic Standard • 1961-2026
          </span>
        </div>

        {/* Problem to Solution Narrative Box in Two-Color Harmony */}
        <div className="mb-16 p-8 sm:p-10 bg-slate-50 rounded-2xl border-2 border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-mono tracking-wider text-[#D97706] font-bold block">
                The St. Michael Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B365D] leading-snug">
                Balancing rigorous academic disciplines with moral character
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Many modern school platforms focus solely on rote memorization while neglecting physical discipline and moral courage. At St. Michael Umsning, we bring together rigorous MBOSE board curricula, weekly choral harmony, community tree planting, and daily mass drill so every young boy and girl grows into an honorable leader.
              </p>
            </div>
            <div className="lg:col-span-5 p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B365D]">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                <span>Our Institutional Commitment</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                65 years of continuous service under the Catholic Diocese of Shillong, maintaining a 100 percent board pass standard and caring for 2,000 learners every single day.
              </p>
            </div>
          </div>
        </div>

        {/* Four Outcome-Driven Benefits */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase font-mono tracking-wider text-[#D97706] font-bold block mb-2">
              Measurable Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
              Why families across Ri Bhoi choose our institution
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Real advantages designed to guide your child from early years through university entrance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-[#1B365D] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <span className={`inline-block px-2.5 py-1 text-[11px] font-mono font-bold rounded border mb-4 ${b.accent}`}>
                    {b.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#1B365D] mb-2 leading-snug group-hover:text-[#D97706] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works (Three Steps) */}
        <div>
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase font-mono tracking-wider text-[#1B365D] font-bold block mb-2">
              Transparent Admission Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
              Three clear steps to join St. Michael campus
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We make the admissions process transparent and straightforward for parents and students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div 
                key={idx}
                className="p-7 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between relative overflow-hidden group hover:bg-white hover:border-[#1B365D] transition-all shadow-xs"
              >
                <div>
                  <div className="text-3xl font-extrabold font-mono text-[#D97706] mb-3">
                    {s.stepNumber}
                  </div>
                  <h3 className="text-lg font-bold text-[#1B365D] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {s.description}
                  </p>
                </div>

                <button
                  onClick={s.action}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B365D] group-hover:text-[#D97706] transition-colors"
                >
                  <span>{s.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
