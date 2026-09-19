import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, User, Mail, MessageSquare, Users, Building2 } from 'lucide-react';
import { BUSINESS_INFO, ROOMS_DATA } from '../data/guestHouseData';
import { BookingInquiry } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoom = 'Deluxe Room',
}) => {
  const [formData, setFormData] = useState<BookingInquiry>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomType: preselectedRoom || 'Deluxe Room',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Islamabad Guest House F-10,\n\nI would like to book/inquire about a stay:\n- Name: ${formData.fullName || 'Guest'}\n- Phone: ${formData.phone || 'N/A'}\n- Room: ${formData.roomType}\n- Check-in: ${formData.checkIn || 'To be decided'}\n- Check-out: ${formData.checkOut || 'To be decided'}\n- Guests: ${formData.guests}\n- Note: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/923156088438?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-emerald-950 text-white p-5 sm:p-6 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Book Your Stay
              </h3>
              <p className="text-emerald-200/90 text-xs">
                Islamabad Guest House F-10
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-900 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-900">
                Inquiry Received!
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-slate-900">{formData.fullName || 'Guest'}</strong>. We have logged your request for the <strong className="text-slate-900">{formData.roomType}</strong>. Our front desk will contact you shortly at <strong className="text-slate-900">{formData.phone || BUSINESS_INFO.phone}</strong>.
              </p>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-amber-300" />
                  <span>Send Direct WhatsApp Message</span>
                </button>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call Us Now ({BUSINESS_INFO.phone})</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-slate-500 hover:text-slate-800 text-xs font-medium pt-2 block mx-auto underline"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  Submit your requested check-in dates below or call directly at{' '}
                  <strong className="underline">{BUSINESS_INFO.phone}</strong> for instant room availability.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block font-medium text-slate-700 mb-1 text-xs">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Phone & Room Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1 text-xs">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 3XX XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1 text-xs">
                    Select Room Category
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-white"
                  >
                    {ROOMS_DATA.map((rm) => (
                      <option key={rm.id} value={rm.name}>
                        {rm.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Email & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1 text-xs">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1 text-xs">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-white"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Guests (Family)">4+ Guests (Family)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1 text-xs">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1 text-xs">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium text-slate-700 mb-1 text-xs">
                  Special Notes / Demands
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention arrival time, extra bed request, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  Confirm Inquiry Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
