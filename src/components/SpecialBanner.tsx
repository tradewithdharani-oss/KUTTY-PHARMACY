import React from 'react';
import { ShoppingCart, MessageCircle, HeartPulse, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/pharmacyData';

interface SpecialBannerProps {
  onShopNowClick: () => void;
}

export const SpecialBanner: React.FC<SpecialBannerProps> = ({ onShopNowClick }) => {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl shadow-emerald-950/20">
        
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
            <span>Nambiyur's Health Partner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Your Health Deserves Better Care.
          </h2>

          <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed font-normal mb-8 max-w-2xl">
            Visit KUTTY PHARMACY or order conveniently from your home.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="special-banner-shop-now-btn"
              onClick={onShopNowClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-white text-emerald-950 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all active:scale-98 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-emerald-800" />
              <span>Shop Now</span>
            </button>

            <a
              id="special-banner-whatsapp-btn"
              href={getWhatsAppUrl("Hello KUTTY PHARMACY, I saw your special banner and want to inquire about medicines / healthcare products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-emerald-600/90 hover:bg-emerald-600 text-white border border-emerald-400/40 shadow-lg transition-all active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-800/50 flex flex-wrap items-center gap-6 text-xs text-emerald-200 font-medium">
            <span>📍 Kovai Main Rd, Near Bus Stand</span>
            <span>&bull;</span>
            <span>🕐 Open 7:00 AM – 11:00 PM</span>
            <span>&bull;</span>
            <span>🚚 Local Delivery within 3 km for &gt; ₹1,000</span>
          </div>

        </div>

      </div>
    </section>
  );
};
