import React from 'react';
import {
  Phone,
  Calendar,
  MapPin,
  CheckCircle2,
  Bed,
  Wifi,
  Wind,
  ShowerHead,
  Utensils,
  Car,
  Clock,
  Users,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { PageType, Room } from '../types';
import {
  BUSINESS_INFO,
  HERO_DATA,
  ABOUT_DATA,
  ROOMS_DATA,
  AMENITIES_LIST,
  WHY_STAY_REASONS,
  WHY_STAY_IMAGE
} from '../data/guestHouseData';

interface HomePageProps {
  onPageChange: (page: PageType) => void;
  onOpenBookingModal: (roomType?: string) => void;
  onSelectRoom: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onPageChange,
  onOpenBookingModal,
  onSelectRoom,
}) => {
  // Helper to map amenity icon name to Lucide Icon
  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed': return <Bed className="w-6 h-6 text-amber-600" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-amber-600" />;
      case 'Wind': return <Wind className="w-6 h-6 text-amber-600" />;
      case 'ShowerHead': return <ShowerHead className="w-6 h-6 text-amber-600" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-600" />;
      case 'Car': return <Car className="w-6 h-6 text-amber-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-600" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_DATA.backgroundImage}
            alt="Islamabad Guest House F-10"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center space-y-6 text-white">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-700/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-300 shadow-lg">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>F-10/4, Islamabad • Premium Guest Accommodation</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight tracking-normal text-white max-w-4xl mx-auto">
            {HERO_DATA.heading}
          </h1>

          <p className="text-slate-200 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            {HERO_DATA.subheading}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-amber-300" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onPageChange('rooms')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold text-base px-7 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Info Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs text-emerald-100/90 font-medium border-t border-white/10">
            <span className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 Room Assistance
            </span>
            <span className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Prime Sector F-10/4
            </span>
            <span className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clean Family Environment
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT US */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interior Image Beside Text */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={ABOUT_DATA.image}
                  alt="Islamabad Guest House F-10 Interior"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg">
                  <p className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                    Peaceful, Clean & Safe Stay in Islamabad
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    House 54A, Street 39, Sector F-10/4
                  </p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-amber-700 font-semibold text-xs tracking-wider uppercase block mb-1">
                  Welcome To Our Guest House
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  About Islamabad Guest House F-10
                </h2>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                {ABOUT_DATA.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-semibold text-sm text-slate-900">
                  Key Highlights of Stay:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  {ABOUT_DATA.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onPageChange('contact')}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Contact Our Front Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-700 font-semibold text-xs tracking-wider uppercase block">
              Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Rooms & Accommodation
            </h2>
            <p className="text-slate-600 text-base">
              Thoughtfully arranged rooms equipped with plush bedding, clean attached bathrooms, and climate control for a relaxing rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Room Image */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {room.badge && (
                    <span className="absolute top-3 left-3 bg-emerald-950/90 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/60 shadow-sm">
                      {room.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-md font-medium backdrop-blur-xs">
                    {room.capacity}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {room.shortDescription}
                    </p>

                    {/* Key Amenities */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Key Amenities:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {room.amenities.slice(0, 4).map((amenity, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs py-2.5 px-3 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      View Room
                    </button>
                    <button
                      onClick={() => onOpenBookingModal(room.name)}
                      className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs py-2.5 px-3 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onPageChange('rooms')}
              className="inline-flex items-center gap-2 text-emerald-900 hover:text-emerald-950 font-semibold text-sm border-b-2 border-emerald-800 pb-1 hover:border-emerald-950 transition-colors cursor-pointer"
            >
              <span>View All Rooms & Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4 — GUEST HOUSE AMENITIES */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase block">
              Guest Comfort & Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Guest House Amenities
            </h2>
            <p className="text-slate-300 text-base">
              We offer comprehensive hospitality features to ensure your stay in Islamabad F-10 is smooth, restful, and effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_LIST.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl hover:border-amber-500/50 hover:bg-slate-800 transition-all group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {amenity.imageUrl ? (
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-700/60 bg-slate-950">
                      <img
                        src={amenity.imageUrl}
                        alt={amenity.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 right-2.5 w-9 h-9 rounded-lg bg-slate-900/90 text-amber-400 flex items-center justify-center backdrop-blur-xs border border-amber-500/30 shadow-md">
                        {renderAmenityIcon(amenity.iconName)}
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {renderAmenityIcon(amenity.iconName)}
                    </div>
                  )}
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — WHY STAY WITH US */}
      <section className="py-20 bg-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-amber-700 font-semibold text-xs tracking-wider uppercase block mb-1">
                  Why Choose Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                  Why Stay With Us in Islamabad F-10
                </h2>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                Islamabad Guest House F-10 stands out for its ideal location, immaculate hygiene standards, and guest-centric service. Here is why our guests love staying with us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {WHY_STAY_REASONS.map((reason, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2 font-serif font-bold text-slate-900 text-base">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{reason.title}</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed pl-6">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Islamabad Related Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={WHY_STAY_IMAGE}
                  alt="Islamabad Margalla Hills View"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-amber-300 font-semibold text-xs tracking-wider uppercase block">
                    Capital City Stay
                  </span>
                  <p className="font-serif text-lg font-bold">
                    Easy access to Islamabad attractions
                  </p>
                  <p className="text-xs text-slate-300">
                    Minutes away from Margalla Hills view points, F-10 Markaz, and Faisal Mosque.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — CONTACT / BOOKING CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="space-y-3">
            <span className="text-amber-300 font-semibold text-xs tracking-wider uppercase block">
              Direct Inquiries & Booking
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Plan Your Comfortable Stay in Islamabad
            </h2>
            <p className="text-slate-200 text-base max-w-2xl mx-auto">
              Our front desk is ready to assist you with availability, room bookings, and inquiries. Contact us directly or get directions to our guest house.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto space-y-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-emerald-100">
              <div className="flex items-center gap-2 text-base font-semibold">
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Phone: </span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-amber-300 hover:text-white underline font-bold"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-200">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* 3 Explicit Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto pt-2">
            
            {/* Call Now Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Book Your Stay Button */}
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto flex-1 bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg border border-emerald-600 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Your Stay</span>
            </button>

            {/* Get Directions Button */}
            <a
              href={BUSINESS_INFO.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>Get Directions</span>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};
