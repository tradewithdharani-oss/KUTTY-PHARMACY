import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Truck, 
  FileText, 
  ShoppingCart, 
  Menu, 
  X, 
  MessageCircle, 
  PlusCircle, 
  ShieldCheck, 
  Search
} from 'lucide-react';
import { PHARMACY_INFO, getWhatsAppUrl, getCallUrl } from '../data/pharmacyData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPrescriptionModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenPrescriptionModal,
  onScrollToSection
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100">
      {/* Top Notification / Identity Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Kovai Main Rd, Near Bus Stand, Nambiyur</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-100">
              <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Open Today: {PHARMACY_INFO.openingHours}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-200">
              <Truck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Delivery within 3 km for orders &gt; ₹1,000</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="topbar-call-btn"
              href={getCallUrl()}
              className="flex items-center gap-1 text-white hover:text-emerald-200 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>{PHARMACY_INFO.phone}</span>
            </a>
            <span className="text-emerald-400">|</span>
            <a
              id="topbar-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600/60 hover:bg-emerald-600 text-emerald-50 px-2 py-0.5 rounded-full transition-colors font-medium text-[11px]"
            >
              <MessageCircle className="w-3 h-3 text-emerald-200" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('hero-section')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <PlusCircle className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  KUTTY <span className="text-emerald-700">PHARMACY</span>
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide mt-0.5">
                Nambiyur &bull; Near Bus Stand
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              id="nav-medicines"
              onClick={() => handleNavClick('medicines-section')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Shop Medicines
            </button>
            <button
              id="nav-prescription"
              onClick={() => handleNavClick('prescription-section')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Upload Prescription
            </button>
            <button
              id="nav-delivery"
              onClick={() => handleNavClick('delivery-section')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Local Delivery
            </button>
            <button
              id="nav-why-us"
              onClick={() => handleNavClick('why-choose-section')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button
              id="nav-about"
              onClick={() => handleNavClick('about-section')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              id="nav-contact"
              onClick={() => handleNavClick('contact-section')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Prescription Upload Quick Button */}
            <button
              id="header-upload-rx-btn"
              onClick={onOpenPrescriptionModal}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100 hover:border-teal-300 transition-all cursor-pointer shadow-2xs"
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Upload Rx</span>
            </button>

            {/* Call Now Header Button */}
            <a
              id="header-call-btn"
              href={getCallUrl()}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 9787175283</span>
            </a>

            {/* Cart Trigger */}
            <button
              id="header-cart-trigger"
              onClick={onOpenCart}
              aria-label="View Shopping Cart"
              className="relative p-2 text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="header-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2 pb-2">
            <button
              onClick={() => handleNavClick('medicines-section')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              🛒 Shop Medicines
            </button>
            <button
              onClick={() => handleNavClick('prescription-section')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              📄 Upload Prescription
            </button>
            <button
              onClick={() => handleNavClick('delivery-section')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              🚚 Local Delivery (Within 3 km)
            </button>
            <button
              onClick={() => handleNavClick('why-choose-section')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              ⭐ Why Choose Kutty Pharmacy
            </button>
            <button
              onClick={() => handleNavClick('about-section')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              🏥 About Our Nambiyur Store
            </button>
            <button
              onClick={() => handleNavClick('maps-section')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              📍 Find Us on Google Maps
            </button>
            <button
              onClick={() => handleNavClick('contact-section')}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              📞 Contact Us & Address
            </button>
            
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getCallUrl()}
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white py-2.5 rounded-lg font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call 9787175283</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
