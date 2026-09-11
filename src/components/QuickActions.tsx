import React from 'react';
import { 
  Pill, 
  FileText, 
  Truck, 
  MessageSquare, 
  Phone, 
  MessageCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { PHARMACY_INFO, getCallUrl, getWhatsAppUrl } from '../data/pharmacyData';

interface QuickActionsProps {
  onOrderMedicinesClick: () => void;
  onUploadPrescriptionClick: () => void;
  onLocalDeliveryClick: () => void;
  onContactClick: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onOrderMedicinesClick,
  onUploadPrescriptionClick,
  onLocalDeliveryClick,
  onContactClick
}) => {
  return (
    <section id="quick-actions-section" className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Order Medicines */}
        <div 
          id="quick-card-order-medicines"
          onClick={onOrderMedicinesClick}
          className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-lg shadow-slate-100/80 hover:shadow-xl hover:border-emerald-500/80 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Pill className="w-6 h-6" />
              </div>
              <span className="text-slate-400 group-hover:text-emerald-600 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              💊 Order Medicines
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Find your healthcare essentials quickly and conveniently.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700">
            <span>Browse Catalog &bull; Search</span>
          </div>
        </div>

        {/* Card 2: Upload Prescription */}
        <div 
          id="quick-card-upload-prescription"
          onClick={onUploadPrescriptionClick}
          className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-lg shadow-slate-100/80 hover:shadow-xl hover:border-teal-500/80 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-slate-400 group-hover:text-teal-600 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
              📄 Upload Prescription
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Upload your prescription and our pharmacy team will assist with your order.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-teal-700">
            <span>Fast Review &bull; Instant Support</span>
          </div>
        </div>

        {/* Card 3: Local Delivery */}
        <div 
          id="quick-card-local-delivery"
          onClick={onLocalDeliveryClick}
          className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-lg shadow-slate-100/80 hover:shadow-xl hover:border-amber-500/80 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-slate-400 group-hover:text-amber-600 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
              🚚 Local Delivery
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Convenient delivery within 3 km for orders above ₹1,000.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-amber-700">
            <span>Check Area &bull; Nambiyur Town</span>
          </div>
        </div>

        {/* Card 4: Contact KUTTY PHARMACY */}
        <div 
          id="quick-card-contact"
          className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl p-5 text-white shadow-lg shadow-emerald-950/20 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-emerald-300 text-xs font-bold bg-emerald-700/60 px-2 py-0.5 rounded-full">
                {PHARMACY_INFO.phone}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white">
              💬 Contact KUTTY PHARMACY
            </h2>
            <p className="text-sm text-emerald-100 mt-1.5 leading-relaxed">
              Call or WhatsApp us for assistance with your medicine needs.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-700/60 flex items-center gap-2">
            <a
              id="quick-action-call-btn"
              href={getCallUrl()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold transition-colors shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <a
              id="quick-action-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
