import React from 'react';
import { 
  PlusCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Truck, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  Navigation,
  FileText
} from 'lucide-react';
import { PHARMACY_INFO, getCallUrl, getWhatsAppUrl } from '../data/pharmacyData';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenPrescriptionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenPrescriptionModal
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-800">
      
      {/* FINAL WEBSITE MESSAGE BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>Serving Nambiyur With Pride</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            “KUTTY PHARMACY — Caring for Nambiyur, One Customer at a Time.”
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-sm sm:text-base font-semibold text-emerald-100 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Open daily: <strong>{PHARMACY_INFO.openingHours}</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <a href={getCallUrl()} className="hover:underline font-bold text-white">
                📞 {PHARMACY_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>📍 Kovai Main Rd, Near Bus Stand, Nambiyur – 638458</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-call-btn"
              href={getCallUrl()}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>

            <a
              id="footer-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 font-bold text-xs flex items-center gap-2 border border-emerald-600/40 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              id="footer-directions-btn"
              href={PHARMACY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 border border-slate-700 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-teal-300" />
              <span>Google Maps</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                <PlusCircle className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                KUTTY <span className="text-emerald-400">PHARMACY</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-sm">
              Your trusted neighborhood chemist and healthcare store in Nambiyur, Tamil Nadu. Genuine medicines, first-aid, health devices, and local delivery within 3 km.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Kovai Main Rd, Near Bus Stand, Nambiyur – 638458</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Working Hours: 7:00 AM – 11:00 PM (Everyday)</span>
              </p>
              <p className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Delivery: Within 3 km for orders above ₹1,000</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onScrollToSection('hero-section')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('medicines-section')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Shop Medicines &amp; Healthcare
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrescriptionModal}
                  className="hover:text-emerald-400 transition-colors text-emerald-300 font-semibold"
                >
                  📄 Upload Prescription
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('delivery-section')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  🚚 Local Delivery (Within 3 KM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('why-choose-section')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Why Choose Kutty Pharmacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('about-section')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Our Nambiyur Store
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('maps-section')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  📍 Find Us on Google Maps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contact-section')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Medicine Categories */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Pharmacy Categories
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Fever &amp; Cold</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Pain Relief</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Vitamins &amp; Supplements</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Diabetes Care</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Personal Care</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Baby Care</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• First Aid</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Health Devices</span>
              <span className="hover:text-emerald-300 cursor-pointer" onClick={() => onScrollToSection('medicines-section')}>• Healthcare Essentials</span>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
              <span className="font-bold text-white block mb-0.5">Emergency Assistance:</span>
              <p className="text-[11px] text-slate-400">
                In case of critical or life-threatening emergencies, immediately dial <strong>108</strong> for government ambulance service or visit nearest government hospital.
              </p>
            </div>
          </div>

        </div>

        {/* Legal & Medical Compliance Disclaimer */}
        <div className="pt-8 text-center text-xs text-slate-500 space-y-2">
          <p>
            <strong>Statutory Pharmaceutical Disclaimer:</strong> KUTTY PHARMACY dispenses prescription medications strictly upon presentation and verification of a valid prescription issued by a registered medical practitioner, adhering to the Drugs and Cosmetics Act and applicable Indian pharmacy rules. Information on this website is for general educational and ordering convenience only and should not replace professional medical advice.
          </p>
          <p className="pt-2 text-slate-600">
            &copy; {new Date().getFullYear()} KUTTY PHARMACY &bull; Kovai Main Rd, Near Bus Stand, Nambiyur, Tamil Nadu – 638458. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};
