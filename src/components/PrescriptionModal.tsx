import React, { useState, useRef } from 'react';
import { 
  X, 
  UploadCloud, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone,
  FileCheck
} from 'lucide-react';
import { PHARMACY_INFO, getWhatsAppUrl } from '../data/pharmacyData';

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrescriptionModal: React.FC<PrescriptionModalProps> = ({
  isOpen,
  onClose
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello KUTTY PHARMACY (Nambiyur), I want to order medicines with my prescription:
• Patient Name: ${patientName || 'Customer'}
• Phone: ${phone}
• Order Type: ${deliveryType === 'delivery' ? `Local Delivery (within 3km) - ${address}` : 'Counter Pickup at Kovai Main Rd'}
• Notes: ${notes || 'Please verify stock and dosage'}
(I will share the prescription photo in this chat)`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 z-10">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Upload Prescription
              </h3>
              <p className="text-xs text-slate-500">
                KUTTY PHARMACY &bull; Nambiyur
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Prescription Received</h4>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                Our pharmacist on Kovai Main Road will review dosage and call you on <strong>{phone}</strong>.
              </p>

              <div className="mt-5 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Image via WhatsApp to 9787175283</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors"
                >
                  Done
                </button>
              </div>

              <p className="text-[10px] text-slate-400 mt-4">
                Your prescription information is handled responsibly and used only for processing your request.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* File Upload Box */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-4 text-center cursor-pointer bg-slate-50 hover:bg-emerald-50/20 transition-all"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileChange(e.target.files[0]);
                    }
                  }}
                />

                {selectedFile ? (
                  <div className="flex flex-col items-center">
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Prescription preview"
                        className="max-h-28 rounded-md object-contain mb-2 border border-slate-200"
                      />
                    ) : (
                      <FileCheck className="w-8 h-8 text-emerald-600 mb-1" />
                    )}
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">
                      {selectedFile.name}
                    </span>
                    <span className="text-[10px] text-emerald-700">Click to change</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-2">
                    <UploadCloud className="w-8 h-8 text-teal-600 mb-1" />
                    <span className="text-xs font-bold text-slate-800">
                      Tap to attach doctor’s prescription
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">
                      Photo or PDF up to 10MB
                    </span>
                  </div>
                )}
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Name
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Anand"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9787175283"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              {/* Delivery or pickup */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Fulfillment
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border ${
                      deliveryType === 'pickup'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    🏪 Counter Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border ${
                      deliveryType === 'delivery'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    🚚 Delivery (within 3km)
                  </button>
                </div>
              </div>

              {deliveryType === 'delivery' && (
                <div>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address in Nambiyur (min order ₹1,000)"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-emerald-600"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                id="modal-submit-prescription-btn"
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Upload Prescription &amp; Request Callback
              </button>

              <div className="pt-2 text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your prescription information is handled responsibly and used only for processing your request.</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
