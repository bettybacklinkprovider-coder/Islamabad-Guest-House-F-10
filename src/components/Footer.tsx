import React from 'react';
import { Phone, MapPin, Mail, Navigation, ExternalLink } from 'lucide-react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/guestHouseData';
import { GHLogo } from './GHLogo';

interface FooterProps {
  onPageChange: (page: PageType) => void;
  onOpenBookingModal: (roomType?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange, onOpenBookingModal }) => {
  const handleNavClick = (page: PageType) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Summary Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <GHLogo className="w-11 h-11" variant="emerald" />
              <div>
                <span className="block font-serif text-xl font-bold text-white">
                  Islamabad Guest House F-10
                </span>
                <span className="block text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  Comfort & Peace in F-10/4 Islamabad
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              A comfortable and welcoming stay in the heart of F-10, Islamabad. Ideal for families, business travelers, and visitors seeking a clean, quiet, and secure environment with personalized hospitality.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBookingModal()}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Book Your Stay Now
              </button>
              <a
                href={BUSINESS_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-xs font-semibold border border-emerald-900/80 bg-emerald-950/50 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group text-slate-300"
                >
                  <span className="text-amber-500/60 group-hover:text-amber-400">›</span>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('rooms')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group text-slate-300"
                >
                  <span className="text-amber-500/60 group-hover:text-amber-400">›</span>
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group text-slate-300"
                >
                  <span className="text-amber-500/60 group-hover:text-amber-400">›</span>
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 group text-slate-300"
                >
                  <span className="text-amber-500/60 group-hover:text-amber-400">›</span>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-slate-800 pb-2">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Address:</span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block font-medium text-white">Phone:</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-amber-400 font-semibold hover:underline text-sm"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block font-medium text-white">Direct Inquiry:</span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Islamabad Guest House F-10. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Sector F-10/4, Islamabad, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
