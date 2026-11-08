import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Download, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Toppers', 'Sports', 'Cultural', 'Environment'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#1B365D] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-300">
              [ CONTAINER: CAMPUS LIFE & REAL PHOTOGRAPHY ARCHIVE ]
            </span>
          </div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            44+ Archived Campus Images
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#D97706] mb-2">
              <Camera className="w-4 h-4 text-[#D97706]" />
              <span>Campus Photography & Archives</span>
              <span className="text-slate-300">•</span>
              <span>Moments of St. Michael</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
              A photographic window into campus life
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Real high resolution photographs documenting morning assemblies of 2,000 students, state academic awards, athletic championships, and traditional cultural festivals.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-slate-200 shadow-xs shrink-0 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1B365D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1B365D] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden bg-white border-2 border-slate-200 shadow-xs hover:border-[#1B365D] hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0F1D38]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 bg-white/90 rounded-full text-[#1B365D] shadow-md">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#1B365D]/90 text-white text-[10px] font-bold rounded shadow-xs uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h4 className="text-sm font-bold text-[#1B365D] leading-snug line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="mt-3 text-[10px] font-mono text-[#D97706] font-bold block">
                  St. Michael Campus Life
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase font-mono tracking-wider text-[#F59E0B] font-bold">
                {filteredItems[lightboxIndex].category} • St. Michael Umsning
              </span>
              <h3 className="text-lg font-bold mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 max-w-xl mx-auto mt-1">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
