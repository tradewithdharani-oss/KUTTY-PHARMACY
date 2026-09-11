import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Heart,
  ThermometerSnowflake,
  FileCheck2
} from 'lucide-react';
import { PHARMACY_INFO, getCallUrl } from '../data/pharmacyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase / Collage */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-4/3 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&auto=format&fit=crop&q=80"
                  alt="Pharmacist dispensing medicines at Kutty Pharmacy Nambiyur"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-emerald-700 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-emerald-600/50">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Trusted Sourcing
                  </span>
                </div>
                <p className="text-sm font-extrabold leading-tight">
                  100% Genuine Medicines &amp; Proper Batch Bills
                </p>
              </div>

            </div>
          </div>

          {/* Text Information */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Your Local Pharmacy in Nambiyur
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <strong>KUTTY PHARMACY</strong> is a local pharmacy located on Kovai Main Road, near the Nambiyur Bus Stand. We aim to make medicines and everyday healthcare essentials easily accessible while providing friendly and reliable customer service.
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Whether you need everyday wellness products, baby care essentials, regular diabetes & hypertension maintenance supplies, or immediate fever care, our counter is stocked with verified brands and staffed by experienced personnel who prioritize your health.
              </p>
            </div>

            {/* Three key highlight badges */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <ThermometerSnowflake className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Cold-Chain Storage</h4>
                  <p className="text-[11px] text-slate-500">Dedicated refrigeration for insulin & vaccines</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <FileCheck2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Printed Bills</h4>
                  <p className="text-[11px] text-slate-500">Clear batch numbers & expiry verification</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Local Care</h4>
                  <p className="text-[11px] text-slate-500">Fast delivery within 3 km in Nambiyur</p>
                </div>
              </div>
            </div>

            {/* Mandatory Contact Details Box */}
            <div className="w-full bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">Address:</span>
                  <p className="text-sm font-bold text-slate-900">
                    {PHARMACY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-emerald-200/60">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">Phone / WhatsApp:</span>
                  <a href={getCallUrl()} className="text-sm font-extrabold text-emerald-900 hover:underline">
                    {PHARMACY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-emerald-200/60">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">Working Hours:</span>
                  <p className="text-sm font-bold text-slate-900">
                    {PHARMACY_INFO.openingHours} (Open All 7 Days)
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
