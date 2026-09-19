import React, { useState } from 'react';
import { Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/guestHouseData';

interface GalleryPageProps {
  onOpenLightbox: (index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'bedrooms', label: 'Bedroom Interiors' },
    { id: 'living', label: 'Living & Dining' },
    { id: 'bathrooms', label: 'Bathrooms' },
    { id: 'exterior', label: 'Exterior & Lawn' },
    { id: 'surroundings', label: 'Islamabad Surroundings' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
            alt="Guest House Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase block">
            Islamabad Guest House F-10
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Photo Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our guest house bedrooms, clean bathrooms, comfortable lounge areas, and serene surroundings in F-10/4 Islamabad.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-900 text-amber-300 shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              // Find original index in full list for lightbox navigation
              const originalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(originalIndex)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 cursor-pointer flex flex-col"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                      <div className="flex justify-end">
                        <span className="p-2 bg-emerald-900/80 rounded-full text-amber-300 backdrop-blur-xs">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider block">
                          {item.categoryLabel}
                        </span>
                        <p className="font-serif font-bold text-base">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Caption Bar below image */}
                  <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">
                        {item.caption}
                      </p>
                    </div>
                    <span className="text-emerald-800 text-xs font-medium shrink-0 flex items-center gap-1 group-hover:underline">
                      <ImageIcon className="w-3.5 h-3.5" /> Enlarge
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hint */}
          <div className="text-center pt-8 text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Click any image to expand full-screen lightbox viewer</span>
          </div>

        </div>
      </section>

    </div>
  );
};
