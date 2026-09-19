import React from 'react';
import {
  Bed,
  Users,
  ShowerHead,
  Check,
  Calendar,
  Sparkles,
  ShieldCheck,
  Coffee,
  Wifi,
  Phone
} from 'lucide-react';
import { Room } from '../types';
import { ROOMS_DATA, BUSINESS_INFO } from '../data/guestHouseData';

interface RoomsPageProps {
  onOpenBookingModal: (roomType?: string) => void;
  onSelectRoom: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenBookingModal,
  onSelectRoom,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Hero Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
            alt="Guest House Rooms"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase block">
            Islamabad Guest House F-10
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Rooms & Suites
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Relax in peaceful, comfortable accommodation tailored for families, solo travelers, and business executives visiting Islamabad.
          </p>
        </div>
      </section>

      {/* Intro & Guarantees */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Thoughtfully Equipped Accommodation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every room at Islamabad Guest House F-10 is maintained with meticulous hygiene, crisp linens, and modern climate control. Whether you are staying for a single night or an extended visit, enjoy full access to 24/7 guest house assistance and peaceful surroundings in sector F-10/4.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-700">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Sanitized Rooms</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center justify-center gap-2">
                <Coffee className="w-4 h-4 text-amber-700" />
                <span>Breakfast Options</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center justify-center gap-2">
                <Wifi className="w-4 h-4 text-emerald-700" />
                <span>High-Speed Wi-Fi</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center justify-center gap-2">
                <ShowerHead className="w-4 h-4 text-emerald-700" />
                <span>24/7 Hot Water</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Room Cards List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {ROOMS_DATA.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={room.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Large Room Photos Section */}
                <div
                  className={`lg:col-span-6 relative bg-slate-900 min-h-[320px] sm:min-h-[400px] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  {room.badge && (
                    <span className="absolute top-4 left-4 bg-emerald-950/90 text-amber-300 backdrop-blur-xs text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-800/60 shadow-md">
                      {room.badge}
                    </span>
                  )}

                  {/* Thumbnail gallery preview overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-slate-950/70 p-2 rounded-xl backdrop-blur-md border border-white/10">
                    <span className="text-xs text-white/90 font-medium px-2 shrink-0">
                      Views:
                    </span>
                    <div className="flex items-center gap-2 overflow-x-auto">
                      {room.galleryImages.map((imgUrl, gIdx) => (
                        <button
                          key={gIdx}
                          onClick={() => onSelectRoom(room)}
                          className="w-14 h-10 rounded-lg overflow-hidden border border-white/30 shrink-0 hover:border-amber-400 transition-colors"
                        >
                          <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed Room Info Column */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                        {room.name}
                      </h2>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {room.fullDescription}
                    </p>

                    {/* Room Key Specifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-800 shrink-0" />
                        <div>
                          <span className="block text-slate-500">Occupancy</span>
                          <span className="font-semibold text-slate-900">{room.capacity}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-emerald-800 shrink-0" />
                        <div>
                          <span className="block text-slate-500">Sleeping Setup</span>
                          <span className="font-semibold text-slate-900">{room.bedType}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <ShowerHead className="w-4 h-4 text-emerald-800 shrink-0" />
                        <div>
                          <span className="block text-slate-500">Bathroom Info</span>
                          <span className="font-semibold text-slate-900">En-Suite Attached</span>
                        </div>
                      </div>
                    </div>

                    {/* Features & Amenities List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        Features & Included Amenities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {room.amenities.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="w-full sm:w-auto flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm py-3 px-4 rounded-xl transition-colors text-center cursor-pointer"
                    >
                      View Photo Gallery
                    </button>

                    <button
                      onClick={() => onOpenBookingModal(room.name)}
                      className="w-full sm:w-auto flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-amber-300" />
                      <span>Book This Room</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Booking CTA Footer Bar */}
      <section className="bg-emerald-950 text-white py-12 border-t border-emerald-900">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Need Help Selecting the Right Room?
          </h3>
          <p className="text-emerald-200 text-sm max-w-lg mx-auto">
            Our front desk is available 24/7 to answer room questions or assist with family accommodation requirements.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Front Desk ({BUSINESS_INFO.phone})</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-600 font-bold text-sm px-6 py-3 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Inquire / Reserve Dates</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
