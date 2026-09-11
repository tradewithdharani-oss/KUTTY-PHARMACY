import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Truck, 
  Navigation, 
  Mail, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { PHARMACY_INFO, getCallUrl, getWhatsAppUrl } from '../data/pharmacyData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    // Auto-prepare WhatsApp message if user desires
    const text = `Hello KUTTY PHARMACY,
- Name: ${name || 'Customer'}
- Phone: ${phone}
- Inquiry: ${message || 'I have a medicine inquiry.'}`;

    window.open(getWhatsAppUrl(text), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Customer Assistance & Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact KUTTY PHARMACY
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Reach out via phone, WhatsApp, or visit us in person at Kovai Main Road, Nambiyur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Pharmacy Contact Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-emerald-950/20">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-2">
              Pharmacy Identity
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">
              KUTTY PHARMACY
            </h3>

            {/* Exact Required Contact Info Items */}
            <div className="space-y-5 mb-8">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-slate-100 mt-0.5 leading-snug">
                    {PHARMACY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <a 
                    href={getCallUrl()} 
                    className="text-lg font-extrabold text-white hover:text-emerald-300 transition-colors mt-0.5 inline-block"
                  >
                    {PHARMACY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Opening Hours
                  </span>
                  <p className="text-sm font-semibold text-slate-100 mt-0.5">
                    {PHARMACY_INFO.openingHours}
                  </p>
                </div>
              </div>

              {/* Local Delivery */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                    Local Delivery
                  </span>
                  <p className="text-sm font-semibold text-slate-100 mt-0.5">
                    {PHARMACY_INFO.deliveryDetails}
                  </p>
                </div>
              </div>

            </div>

            {/* 3 Prominent Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-emerald-800/60">
              <a
                id="contact-call-now-btn"
                href={getCallUrl()}
                className="py-3 px-3 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md hover:bg-emerald-50 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>📞 Call Now</span>
              </a>

              <a
                id="contact-whatsapp-btn"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>💬 WhatsApp</span>
              </a>

              <a
                id="contact-directions-btn"
                href={PHARMACY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md transition-all text-center border border-teal-600"
              >
                <Navigation className="w-4 h-4 text-teal-200" />
                <span>📍 Get Directions</span>
              </a>
            </div>

          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send a Medicine Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Inquire about specific brand stock, baby formula, adult diapers, or general items.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-900">
                  Inquiry forwarded to WhatsApp!
                </h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Our team on Kovai Main Road will reply to your message promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-emerald-800 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9787175283"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Medicine / Product Inquiry
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what medicine or product you need..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp / Phone</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-500">
                Direct phone line: <a href={getCallUrl()} className="font-bold text-emerald-800 hover:underline">{PHARMACY_INFO.phoneDisplay}</a>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
