import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const TaglineReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const quote = "We build disciplined minds, honorable character, and joyful hearts in the hills of Meghalaya so every young learner steps forward with confidence.";
  const words = quote.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="w-full py-16 md:py-24 bg-[#1B365D] text-white border-y border-[#0F1D38]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Container Mention Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-md border border-white/20 mb-5">
          <span className="font-mono text-[10px] font-bold text-[#FDE68A] uppercase tracking-wider">
            [ CONTAINER: INSTITUTIONAL CREED & MOTTO ]
          </span>
          <span className="text-white/40">|</span>
          <span className="text-xs font-semibold text-white/90">
            Shaphrang & Excelsior
          </span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto text-wrap:balance">
          {words.map((word, index) => {
            const wordThreshold = (index + 1) / words.length;
            const isRevealed = scrollProgress >= wordThreshold * 0.85;
            
            return (
              <span
                key={index}
                className="inline-block mr-2 sm:mr-3 transition-colors duration-300 ease-custom"
                style={{
                  color: isRevealed ? (index % 5 === 0 ? '#F59E0B' : '#FFFFFF') : 'rgba(255, 255, 255, 0.35)'
                }}
              >
                {word}
              </span>
            );
          })}
        </h2>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-300 font-medium">
          <span className="w-12 h-px bg-[#D97706]" />
          <span>St. Michael's Higher Secondary School, Umsning • Ri Bhoi District</span>
          <span className="w-12 h-px bg-[#D97706]" />
        </div>
      </div>
    </section>
  );
};
