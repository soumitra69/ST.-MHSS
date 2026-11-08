import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Shield, Music, Activity, Users, Sparkles } from 'lucide-react';
import { resolveSchoolAsset } from '../data/schoolAssets';

export const VideoDrillSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<'drill' | 'choir'>('drill');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoData = {
    drill: {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Video_2026-11-08_at_2.05.12_PM_d0ce48a7.mp4'),
      title: "Mass Synchronized PT & Musical Drill Display",
      category: "Physical Education & Drill Tradition",
      tagline: "Over 200 students performing in precision formation on the St. Michael's courtyard arena.",
      details: "Discipline of movement, rhythm, and unity. St. Michael's annual drill combines physical fitness, precision marching, and choreographed musical formations under the Umsning skies."
    },
    choir: {
      src: resolveSchoolAsset('/assets/aistudio/WhatsApp_Video_2026-11-08_at_2.05.18_PM_44300432.mp4'),
      title: "St. Michael's Choral Ensemble & Vocals",
      category: "Diocesan Choral Tradition",
      tagline: "Harmonious choral singing and musical celebration by the senior school choir.",
      details: "Rooted in Catholic hymnology and Khasi cultural melody, the school choir enriches morning assemblies, diocesan feasts, and state-level choral festivals."
    }
  };

  const current = videoData[activeVideo];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSwitchVideo = (key: 'drill' | 'choir') => {
    setActiveVideo(key);
    setIsPlaying(false);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="media" className="w-full py-16 md:py-24 bg-[#0F1D38] text-white border-b border-[#1B365D]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#FDE68A] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded border border-white/20">
              [ CONTAINER: 2,000-STUDENT PHYSICAL DRILL & MEDIA ARCHIVE ]
            </span>
          </div>
          <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Live Campus Footage
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#F59E0B] mb-2">
              <Activity className="w-4 h-4 text-[#F59E0B]" />
              <span>Campus Life in Motion</span>
              <span className="text-white/40">•</span>
              <span>Athletics & Performing Arts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The Living Spirit of 2,000 Students
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Experience the synchronized energy and musical discipline that define daily student life at St. Michael's Umsning.
            </p>
          </div>

          {/* Video Category Switcher in Two-Color Harmony */}
          <div className="inline-flex p-1 bg-white/10 rounded-lg border border-white/20 shrink-0 self-start md:self-auto">
            <button
              onClick={() => handleSwitchVideo('drill')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5 ${
                activeVideo === 'drill'
                  ? 'bg-[#D97706] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              Synchronized Drill
            </button>
            <button
              onClick={() => handleSwitchVideo('choir')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5 ${
                activeVideo === 'choir'
                  ? 'bg-[#D97706] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              Choral Ensemble
            </button>
          </div>
        </div>

        {/* Video Player + Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Viewport */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden bg-black border-2 border-white/20 shadow-2xl group">
              <video
                key={current.src}
                ref={videoRef}
                src={current.src}
                className="w-full aspect-16/9 object-contain bg-black"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support HTML5 video.
              </video>

              {/* Overlay controls when hovering */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handleToggleMute}
                  className="p-2 bg-black/60 hover:bg-black/80 rounded-md text-white text-xs backdrop-blur-xs transition-colors"
                  aria-label="Toggle Mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleFullscreen}
                  className="p-2 bg-black/60 hover:bg-black/80 rounded-md text-white text-xs backdrop-blur-xs transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
              <span>Recorded live on campus at St. Michael's Higher Secondary School, Umsning</span>
              <span className="font-mono text-[#F59E0B] font-bold">Annual Sports & Choral Showcase</span>
            </div>
          </div>

          {/* Right Column: Context & Drill Philosophy */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#F59E0B] font-bold block mb-2">
                {current.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {current.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                {current.details}
              </p>

              <div className="space-y-3 pt-3 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
                  <span>Mandatory weekly drill and aerobic posture conditioning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
                  <span>Annual house points awarded for synchronized precision</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
                  <span>Full spectator gallery on tiered amphitheatre stairs</span>
                </div>
              </div>
            </div>

            {/* Quick Athletic / Choral Note */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">Daily Community Assembly</span>
                <Users className="w-4 h-4 text-[#F59E0B]" />
              </div>
              <p className="text-slate-300 leading-relaxed font-normal">
                Every Friday morning, all 2,000 students assemble for community aerobics, physical drill, and the singing of the school hymn in both English and Khasi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
