import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  Info, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  ShieldCheck,
  Search
} from 'lucide-react';
import { PHARMACY_INFO, LOCALITY_LIST, getCallUrl, getWhatsAppUrl } from '../data/pharmacyData';

interface LocalDeliverySectionProps {
  onOrderNowClick: () => void;
}

export const LocalDeliverySection: React.FC<LocalDeliverySectionProps> = ({
  onOrderNowClick
}) => {
  const [selectedLocality, setSelectedLocality] = useState('');
  const [customLocality, setCustomLocality] = useState('');
  const [checkResult, setCheckResult] = useState<{ eligible: boolean; message: string } | null>(null);

  const handleCheckDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    const query = (customLocality || selectedLocality).trim().toLowerCase();
    if (!query) {
      setCheckResult({
        eligible: true,
        message: 'Kutty Pharmacy delivers anywhere in Nambiyur town within 3 km for orders above ₹1,000! Contact our team to confirm your exact doorstep location.'
      });
      return;
    }

    setCheckResult({
      eligible: true,
      message: `Great news! "${customLocality || selectedLocality}" is within our local Nambiyur service zone. Free delivery on orders above ₹1,000!`
    });
  };

  return (
    <section id="delivery-section" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Title Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-4 h-4 text-amber-700" />
            <span>Doorstep Healthcare Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            🚚 KUTTY PHARMACY — Delivered Near You
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Stay comfortable at home. Get genuine medicines and daily wellness essentials delivered straight to your doorstep across Nambiyur.
          </p>
        </div>

        {/* 3 Prominent Stat Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Stat 1: Delivery Area */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-2xl p-6 sm:p-7 border border-emerald-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-700/20">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Delivery Area
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              Within 3 KM
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Nambiyur town, bus stand surroundings, Kovai Main Road, and nearby residential zones.
            </p>
          </div>

          {/* Stat 2: Minimum Order */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-4 shadow-md shadow-amber-600/20">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Minimum Order
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              ₹1,000
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Qualify for convenient local delivery with monthly prescriptions or household essentials.
            </p>
          </div>

          {/* Stat 3: Pharmacy Hours */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50/50 rounded-2xl p-6 sm:p-7 border border-teal-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center mb-4 shadow-md shadow-teal-700/20">
              <Clock className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Pharmacy Hours
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              7:00 AM – 11:00 PM
            </h3>
            <p className="text-xs text-slate-600 mt-2">
              Open 7 days a week for in-store pickup and scheduled local doorstep delivery.
            </p>
          </div>

        </div>

        {/* Interactive Delivery Area Checker */}
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-slate-900">
              Check Your Nambiyur Location for Delivery
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Confirm if your street or landmark falls within our 3 km radius
            </p>
          </div>

          <form onSubmit={handleCheckDelivery} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={customLocality}
                onChange={(e) => {
                  setCustomLocality(e.target.value);
                  setCheckResult(null);
                }}
                placeholder="Enter your street / landmark (e.g. Near Bus Stand, Kovai Rd)"
                className="w-full py-3 px-4 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-hidden focus:border-emerald-600 shadow-2xs"
              />
            </div>
            <button
              id="check-delivery-btn"
              type="submit"
              className="py-3 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              Check Delivery / Order Now
            </button>
          </form>

          {/* Quick Locality Chips */}
          <div className="mt-4 flex items-center flex-wrap gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 mr-1">Popular:</span>
            {LOCALITY_LIST.slice(0, 4).map((loc) => (
              <button
                key={loc.name}
                type="button"
                onClick={() => {
                  setCustomLocality(loc.name);
                  setCheckResult({
                    eligible: true,
                    message: `${loc.name} is just ${loc.distance} from our Kovai Main Rd pharmacy. ${loc.status}!`
                  });
                }}
                className="text-[11px] font-semibold bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
              >
                {loc.name}
              </button>
            ))}
          </div>

          {/* Result Alert */}
          {checkResult && (
            <div className="mt-5 p-4 rounded-xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 flex items-start gap-3 animate-in fade-in">
              <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="flex-1 text-xs sm:text-sm">
                <p className="font-bold">{checkResult.message}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={onOrderNowClick}
                    className="px-3.5 py-1.5 bg-emerald-700 text-white font-bold rounded-lg text-xs hover:bg-emerald-800 transition-colors"
                  >
                    Browse Medicines to Order
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello Kutty Pharmacy, I would like to place a delivery order for my address: ${customLocality || 'Nambiyur'}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-white text-emerald-900 border border-emerald-300 font-bold rounded-lg text-xs hover:bg-emerald-50 transition-colors inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Strict Delivery Conditions Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2 text-slate-500 text-[11px] leading-relaxed">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>Terms & Conditions:</strong> Local delivery is available within 3 km of our Kovai Main Road shop for qualifying orders of ₹1,000 and above. Delivery is strictly subject to service availability, weather conditions, and pharmacist verification of any prescription medicines.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
