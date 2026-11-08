import React from 'react';
import { Megaphone, ChevronRight, Bell, Sparkles } from 'lucide-react';
import { NOTICES } from '../data/schoolData';

interface UrgentTickerProps {
  onSelectNotice: (noticeId: string) => void;
}

export const UrgentTicker: React.FC<UrgentTickerProps> = ({ onSelectNotice }) => {
  const topNotice = NOTICES[0];

  return (
    <section className="w-full bg-[#FEF3C7] border-b border-[#FDE68A] text-xs text-slate-800">
      {/* Full screen width container mention */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        
        <div className="flex items-center gap-3 overflow-hidden flex-1">
          {/* Container Tag */}
          <span className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold text-[#1B365D] bg-white/80 px-2 py-0.5 rounded border border-[#1B365D]/20 shrink-0">
            [ CONTAINER: BULLETIN ]
          </span>

          {/* Badge */}
          <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-white bg-[#1B365D] px-2.5 py-0.5 rounded text-[10px] shrink-0 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            State Bulletin 2026
          </span>

          <p className="truncate font-medium text-slate-800 text-xs sm:text-sm">
            <span className="font-extrabold text-[#1B365D]">{topNotice.title}:</span>{' '}
            {topNotice.description}
          </p>
        </div>

        <button
          onClick={() => onSelectNotice(topNotice.id)}
          className="shrink-0 font-bold text-[#1B365D] hover:text-[#D97706] flex items-center gap-1 transition-colors whitespace-nowrap text-xs underline underline-offset-4 decoration-[#D97706]"
        >
          <span>View Circular & Merit List</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#D97706]" />
        </button>

      </div>
    </section>
  );
};
