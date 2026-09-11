import React from 'react';
import { MapPin, Navigation, ExternalLink, Bus, Car, Clock, Phone } from 'lucide-react';
import { PHARMACY_INFO, getCallUrl } from '../data/pharmacyData';

export const GoogleMapsSection: React.FC = () => {
  return (
    <section id="maps-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Location & Directions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find KUTTY PHARMACY
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Conveniently located on Kovai Main Road, right near the Nambiyur Bus Stand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    KUTTY PHARMACY
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold">
                    Near Nambiyur Bus Stand
                  </p>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Store Address
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {PHARMACY_INFO.address}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Daily Timings
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    {PHARMACY_INFO.openingHours} (Open Everyday)
                  </p>
                </div>

                {/* Landmarks */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Bus className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Walking distance from Nambiyur Central Bus Stand</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Car className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Easy road parking along Kovai Main Road</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Get Directions CTA Button */}
            <div>
              <a
                id="maps-get-directions-btn"
                href={PHARMACY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-800/20 hover:shadow-lg transition-all active:scale-98"
              >
                <Navigation className="w-5 h-5 text-emerald-200" />
                <span>📍 Get Directions</span>
                <ExternalLink className="w-4 h-4 text-emerald-300 ml-1" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Opens directly in Google Maps for turn-by-turn navigation
              </p>
            </div>

          </div>

          {/* Interactive Google Maps Frame / Map Preview Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>KUTTY PHARMACY &bull; Nambiyur Location Map</span>
              </span>
              <a
                href={PHARMACY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-100 flex items-center gap-1 font-semibold"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 min-h-[380px] bg-slate-100">
              <iframe
                title="Google Maps Location of Kutty Pharmacy Nambiyur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.551676648784!2d77.315!3d11.365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba91f7a0c865187%3A0x7d6365a12a52479f!2sNambiyur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Overlay location pin preview pill */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200/80 max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">KUTTY PHARMACY</p>
                    <p className="text-[10px] text-slate-500">Kovai Main Rd, Near Bus Stand</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <span>📍 Pin Code: <strong>638458</strong> (Nambiyur, Erode Dist)</span>
              <a
                href={PHARMACY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                Direct Link: maps.app.goo.gl/r57dxXbpEZgAZhXM7 &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
