import React from 'react';
import { 
  Home, 
  Search, 
  ShoppingCart, 
  FileText, 
  Phone, 
  MessageCircle 
} from 'lucide-react';
import { PHARMACY_INFO, getCallUrl, getWhatsAppUrl } from '../data/pharmacyData';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPrescriptionModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenPrescriptionModal,
  onScrollToSection
}) => {
  return (
    <>
      {/* Floating Action Buttons for quick Call & WhatsApp */}
      <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-2 sm:hidden">
        <a
          id="floating-whatsapp-btn"
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center transition-transform active:scale-95 border-2 border-white"
          aria-label="Chat on WhatsApp with Kutty Pharmacy"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          id="floating-call-btn"
          href={getCallUrl()}
          className="w-12 h-12 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white shadow-lg flex items-center justify-center transition-transform active:scale-95 border-2 border-white"
          aria-label="Call Kutty Pharmacy"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Sticky Bottom Navigation Bar (Mobile only) */}
      <nav 
        id="mobile-sticky-bottom-nav"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 py-2 px-3 sm:hidden shadow-lg"
      >
        <div className="grid grid-cols-5 items-center text-center">
          
          {/* Home */}
          <button
            id="mobile-nav-home"
            onClick={() => onScrollToSection('hero-section')}
            className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-1">Home</span>
          </button>

          {/* Search */}
          <button
            id="mobile-nav-search"
            onClick={() => onScrollToSection('medicines-section')}
            className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <Search className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-1">Search</span>
          </button>

          {/* Cart with count badge */}
          <button
            id="mobile-nav-cart"
            onClick={onOpenCart}
            className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-emerald-700 transition-colors relative"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-emerald-600 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold mt-1">Cart</span>
          </button>

          {/* Prescription */}
          <button
            id="mobile-nav-prescription"
            onClick={onOpenPrescriptionModal}
            className="flex flex-col items-center justify-center py-1 text-teal-700 hover:text-teal-900 transition-colors"
          >
            <FileText className="w-5 h-5 text-teal-700" />
            <span className="text-[10px] font-bold mt-1">Prescription</span>
          </button>

          {/* Contact */}
          <button
            id="mobile-nav-contact"
            onClick={() => onScrollToSection('contact-section')}
            className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-1">Contact</span>
          </button>

        </div>
      </nav>
    </>
  );
};
