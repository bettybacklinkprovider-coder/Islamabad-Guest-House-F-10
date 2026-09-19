import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Calendar,
  Navigation,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  MessageSquare,
  Users
} from 'lucide-react';
import { BUSINESS_INFO, ROOMS_DATA } from '../data/guestHouseData';
import { BookingInquiry } from '../types';

interface ContactPageProps {
  onOpenBookingModal: (roomType?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBookingModal }) => {
  const [formData, setFormData] = useState<BookingInquiry>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomType: 'Deluxe Room',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Islamabad Guest House F-10,\n\nI am contacting you from your website:\n- Name: ${formData.fullName || 'Guest'}\n- Phone: ${formData.phone || 'N/A'}\n- Room Requested: ${formData.roomType}\n- Dates: ${formData.checkIn || 'N/A'} to ${formData.checkOut || 'N/A'}\n- Guests: ${formData.guests}\n- Message: ${formData.message || 'General Inquiry'}`
    );
    window.open(`https://wa.me/923156088438?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Hero Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
            alt="Islamabad Guest House Location"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase block">
            We Are Ready To Assist You
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out to our front desk for immediate reservations, room inquiries, or location guidance in sector F-10/4, Islamabad.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Business Info & Direct Actions */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-900 text-amber-300 flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-slate-900">
                        {BUSINESS_INFO.name}
                      </h2>
                      <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider block">
                        F-10/4 Sector, Islamabad
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    A peaceful, clean, and safe guest house accommodation located in the residential sector of F-10/4, Islamabad, Pakistan.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase">
                        Phone Number
                      </span>
                      <a
                        href={BUSINESS_INFO.phoneTel}
                        className="text-emerald-900 font-bold text-base hover:underline"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <span className="block text-xs text-slate-400 mt-0.5">
                        Available 24/7 for calls & inquiries
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase">
                        Guest House Address
                      </span>
                      <p className="text-slate-900 font-medium text-sm">
                        {BUSINESS_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase">
                        Reception & Front Desk
                      </span>
                      <p className="text-slate-900 font-medium text-sm">
                        24 Hours / 7 Days a Week
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Click To Call ({BUSINESS_INFO.phone})</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-emerald-400" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-md space-y-6">
                
                <div>
                  <span className="text-amber-700 font-semibold text-xs tracking-wider uppercase block mb-1">
                    Send An Inquiry
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    Contact & Booking Inquiry Form
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Fill out the form below to inquire about room availability, group bookings, or special requests.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 bg-emerald-800 text-white rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-amber-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Inquiry Submitted Successfully!
                    </h3>
                    <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting <strong className="text-slate-900">Islamabad Guest House F-10</strong>. Our manager will review your check-in dates (<strong className="text-slate-900">{formData.checkIn || 'Requested'}</strong>) and call you back shortly.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsApp}
                        className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-amber-300" />
                        <span>Instant WhatsApp Chat</span>
                      </button>

                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 px-6 rounded-xl text-sm transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+92 315 6088438"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Dates Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Check-in Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.checkIn}
                          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Check-out Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.checkOut}
                          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Guests & Room Choice */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Number of Guests
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                        >
                          <option value="1 Guest">1 Guest</option>
                          <option value="2 Guests">2 Guests</option>
                          <option value="3 Guests">3 Guests</option>
                          <option value="4+ Family Guests">4+ Family Guests</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Room Type
                        </label>
                        <select
                          value={formData.roomType}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                        >
                          {ROOMS_DATA.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Message / Special Demands
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your trip or specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 text-sm bg-slate-50/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Inquiry</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Location / Google Map Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-700 font-semibold text-xs tracking-wider uppercase block">
              Prime Location
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Find Us in F-10/4, Islamabad
            </h2>
            <p className="text-slate-600 text-sm">
              Located in House 54A, Street 39, F-10/4, Islamabad — easy access to markets, restaurants, and main capital avenues.
            </p>
          </div>

          <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative h-[400px]">
            <iframe
              title="Islamabad Guest House F-10 Map"
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-slate-950/90 text-white p-4 rounded-xl border border-slate-800 backdrop-blur-md shadow-xl max-w-xs hidden sm:block">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                Islamabad Guest House F-10
              </span>
              <p className="text-xs text-slate-300 mt-1">
                House 54A, Street 39, F-10/4, Islamabad, Pakistan
              </p>
              <a
                href={BUSINESS_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-white underline"
              >
                <Navigation className="w-3.5 h-3.5" /> Open Directions
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-serif font-bold text-lg">
                Ready to book your room in Islamabad?
              </p>
              <p className="text-xs text-slate-300">
                Call us at <strong className="text-amber-300">{BUSINESS_INFO.phone}</strong> or send an instant booking inquiry.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Booking Inquiry</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
