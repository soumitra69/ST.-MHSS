import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Bell, Users, Bus, ArrowRight } from 'lucide-react';
import { NOTICES, FACULTY_MEMBERS, STREAMS, BUS_ROUTES } from '../data/schoolData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedNotices = q
    ? NOTICES.filter(n => n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q))
    : NOTICES.slice(0, 3);

  const matchedFaculty = q
    ? FACULTY_MEMBERS.filter(f => f.name.toLowerCase().includes(q) || f.department.toLowerCase().includes(q) || f.role.toLowerCase().includes(q))
    : [];

  const matchedStreams = q
    ? STREAMS.filter(s => s.name.toLowerCase().includes(q) || s.subjects.some(sub => sub.toLowerCase().includes(q)))
    : [];

  const matchedBus = q
    ? BUS_ROUTES.filter(b => b.busName.toLowerCase().includes(q) || b.stops.some((stop: string) => stop.toLowerCase().includes(q)))
    : [];

  const handleSelect = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 px-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border-2 border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#1B365D]" />
          <input
            type="text"
            placeholder="Search circulars, admission forms, faculty, bus routes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none text-slate-800 placeholder-slate-400 text-sm focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Circulars / Notices */}
          {matchedNotices.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-[#D97706] block mb-2 px-2">
                Circulars & Notices
              </span>
              <div className="space-y-1">
                {matchedNotices.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => handleSelect('hub')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#1B365D] group-hover:text-[#D97706]">
                        {n.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">{n.description}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1B365D] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Streams */}
          {matchedStreams.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-[#1B365D] block mb-2 px-2">
                Class XI-XII Streams
              </span>
              <div className="space-y-1">
                {matchedStreams.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect('academics')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#1B365D]">{s.name} Stream</div>
                      <div className="text-[11px] text-slate-500">{s.subjects.join(', ')}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1B365D]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Faculty */}
          {matchedFaculty.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-[#1B365D] block mb-2 px-2">
                Faculty Members
              </span>
              <div className="space-y-1">
                {matchedFaculty.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => handleSelect('faculty')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#1B365D]">{f.name}</div>
                      <div className="text-[11px] text-slate-500">{f.role} • {f.department}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1B365D]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bus Routes */}
          {matchedBus.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-[#1B365D] block mb-2 px-2">
                Bus Routes
              </span>
              <div className="space-y-1">
                {matchedBus.map((b, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect('hub')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#1B365D]">{b.routeNo}: {b.busName}</div>
                      <div className="text-[11px] text-slate-500">{b.stops.join(' ➔ ')}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1B365D]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && matchedNotices.length === 0 && matchedFaculty.length === 0 && matchedStreams.length === 0 && (
            <div className="py-8 text-center text-slate-500 text-xs">
              No matching records found for "{query}". Try searching "Science", "Hostel", "Exam", or "Bus".
            </div>
          )}

        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between px-4">
          <span>Press ESC or click outside to exit search</span>
          <span className="font-mono text-[#D97706] font-bold">St. Michael Digital Archives</span>
        </div>

      </div>
    </div>
  );
};
