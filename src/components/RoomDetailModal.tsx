import React, { useState } from 'react';
import { X, Check, Bed, Users, ShowerHead, Calendar, Sparkles } from 'lucide-react';
import { Room } from '../types';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomName: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!room) return null;

  const currentActiveImage = selectedImage || room.mainImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase block">
              Room Overview
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Image Stage */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-100 shadow-inner">
              <img
                src={currentActiveImage}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {room.badge && (
                <span className="absolute top-3 left-3 bg-emerald-900/90 text-amber-300 backdrop-blur-xs text-xs font-semibold px-3 py-1 rounded-full border border-emerald-700/50">
                  {room.badge}
                </span>
              )}
            </div>

            {/* Thumbnail selector if gallery exists */}
            {room.galleryImages && room.galleryImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {room.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      currentActiveImage === img
                        ? 'border-emerald-700 scale-105 shadow-md'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${room.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-emerald-800 shrink-0" />
              <div>
                <span className="block text-slate-500">Occupancy</span>
                <span className="font-semibold text-slate-900">{room.capacity}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Bed className="w-4 h-4 text-emerald-800 shrink-0" />
              <div>
                <span className="block text-slate-500">Bedding Setup</span>
                <span className="font-semibold text-slate-900">{room.bedType}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <ShowerHead className="w-4 h-4 text-emerald-800 shrink-0" />
              <div>
                <span className="block text-slate-500">Bathroom</span>
                <span className="font-semibold text-slate-900">{room.bathroom}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-slate-900">
              Description
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {room.fullDescription}
            </p>
          </div>

          {/* Amenities & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
            <div className="space-y-3">
              <h5 className="font-semibold text-sm text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Key Room Amenities
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {room.amenities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-sm text-slate-900">
                Comfort Highlights
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {room.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Cleanliness guaranteed. Free Wi-Fi & 24/7 power backup included.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors w-1/2 sm:w-auto"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.name);
              }}
              className="flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all w-1/2 sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book This Room</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
