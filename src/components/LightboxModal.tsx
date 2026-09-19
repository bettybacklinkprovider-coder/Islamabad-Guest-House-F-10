import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200 select-none">
      
      {/* Top bar */}
      <div className="flex items-center justify-between text-white border-b border-slate-800 pb-3">
        <div>
          <span className="text-amber-400 font-medium text-xs uppercase tracking-wider block">
            {currentItem.categoryLabel}
          </span>
          <h4 className="font-serif text-lg font-bold">
            {currentItem.title}
          </h4>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-900 text-white transition-all shadow-lg border border-slate-700 hover:border-emerald-600"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="max-w-5xl max-h-[75vh] flex flex-col items-center justify-center px-8">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[68vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-slate-800"
          />
          <p className="mt-3 text-slate-300 text-xs sm:text-sm text-center max-w-xl">
            {currentItem.caption}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-900 text-white transition-all shadow-lg border border-slate-700 hover:border-emerald-600"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Footer thumbnail ribbon */}
      <div className="flex justify-center items-center gap-2 overflow-x-auto py-2">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => onNavigate(idx)}
            className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
              idx === currentIndex
                ? 'border-amber-400 scale-110 shadow-md opacity-100'
                : 'border-transparent opacity-40 hover:opacity-80'
            }`}
          >
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

    </div>
  );
};
