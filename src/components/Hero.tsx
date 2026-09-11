import React from 'react';
import { 
  ShoppingCart, 
  FileText, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  UserCheck, 
  Phone, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PHARMACY_INFO, getCallUrl, getWhatsAppUrl } from '../data/pharmacyData';

interface HeroProps {
  onShopMedicinesClick: () => void;
  onUploadPrescriptionClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopMedicinesClick,
  onUploadPrescriptionClick,
}) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50 to-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-100">
      {/* Subtle geometric medical watermark background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Pill / Location Focus */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-200/80 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Serving Nambiyur & Nearby Areas
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              KUTTY PHARMACY — <span className="text-emerald-700">Your Health. Our Priority.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
              Trusted medicines, healthcare essentials and convenient local delivery — right here in Nambiyur.
            </p>

            {/* Two Large CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                id="hero-shop-medicines-btn"
                onClick={onShopMedicinesClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-800/20 hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 text-emerald-100" />
                <span>Shop Medicines</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                id="hero-upload-prescription-btn"
                onClick={onUploadPrescriptionClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-emerald-600 shadow-xs transition-all active:scale-98 cursor-pointer group"
              >
                <FileText className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <span>Upload Prescription</span>
              </button>
            </div>

            {/* Below the buttons display: Open Today & Location */}
            <div className="w-full pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-700">
              <div className="flex items-center gap-2 font-medium bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Open Today:</strong> {PHARMACY_INFO.openingHours}
                </span>
              </div>

              <div className="flex items-center gap-2 font-medium bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Nambiyur</strong>, Tamil Nadu
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">
                <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Delivery within 3 km for orders &gt; ₹1,000</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Pharmacy Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 border border-slate-100 relative">
              
              {/* Store Header Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-700">
                    Local Medical Shop
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    KUTTY PHARMACY
                  </h3>
                  <p className="text-xs text-slate-500">
                    Kovai Main Rd, Near Bus Stand, Nambiyur
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-7 h-7" />
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="relative rounded-xl overflow-hidden mb-5 aspect-16/10 bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800&auto=format&fit=crop&q=80"
                  alt="Modern Pharmacy & Healthcare Products at Kutty Pharmacy Nambiyur"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-semibold text-emerald-300">Nambiyur Community Chemist</p>
                    <p className="text-sm font-bold">100% Genuine Medicines & First-Aid Essentials</p>
                  </div>
                </div>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    <span>Registered Staff</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Qualified assistance for dosage and prescriptions
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                    <Truck className="w-4 h-4 text-teal-600" />
                    <span>Fast Dispatch</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Nambiyur local delivery within 3 km
                  </p>
                </div>
              </div>

              {/* Instant Call / WhatsApp Banner */}
              <div className="bg-emerald-50 rounded-xl p-3.5 border border-emerald-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Need instant medicine help?
                  </span>
                  <span className="text-sm font-extrabold text-emerald-950">
                    {PHARMACY_INFO.phoneDisplay}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    id="hero-quick-call"
                    href={getCallUrl()}
                    className="p-2.5 rounded-lg bg-white hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors shadow-2xs"
                    title="Call Kutty Pharmacy"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    id="hero-quick-whatsapp"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
