import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/guestHouseData';
import { GHLogo } from './GHLogo';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  onOpenBookingModal: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onPageChange,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms & Suites', page: 'rooms' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification / Info Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-900/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-emerald-200/90">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              House 54A, Street 39, F-10/4, Islamabad
            </span>
            <span className="hidden md:inline text-emerald-800">|</span>
            <span className="hidden md:inline text-emerald-300/80">
              Clean & Peaceful Accommodation in Islamabad
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <GHLogo className="w-11 h-11" variant="emerald" />
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-tight">
                Islamabad Guest House
              </span>
              <span className="block text-xs font-semibold tracking-wider text-amber-700 uppercase">
                F-10 / 4 Sector
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-900 font-semibold shadow-xs'
                      : 'text-slate-700 hover:text-emerald-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call & Book CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-2 text-xs lg:text-sm font-semibold text-emerald-950 hover:text-emerald-800 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs lg:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-900 text-white font-semibold'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-3 px-4 rounded-lg text-sm text-center"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-800 text-white font-semibold py-3 px-4 rounded-lg text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Your Stay</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
