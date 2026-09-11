import React, { useState, useRef } from 'react';
import { 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageCircle, 
  AlertCircle, 
  X,
  FileCheck
} from 'lucide-react';
import { PHARMACY_INFO, getWhatsAppUrl } from '../data/pharmacyData';

interface PrescriptionUploadSectionProps {
  onOpenModal?: () => void;
}

export const PrescriptionUploadSection: React.FC<PrescriptionUploadSectionProps> = () => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'local_delivery'>('pickup');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => {
    setDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit phone number so our pharmacist can contact you.');
      return;
    }

    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello KUTTY PHARMACY (Nambiyur), I have a prescription to order:
- Patient Name: ${patientName || 'Customer'}
- Contact Phone: ${phone}
- Service Type: ${deliveryOption === 'local_delivery' ? `Local Delivery (Nambiyur within 3km) - ${address}` : 'Store Pickup at Kovai Main Rd'}
- Notes: ${notes || 'Please check availability'}
- (Attaching prescription photo directly in this chat)`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  const resetForm = () => {
    setPatientName('');
    setPhone('');
    setAddress('');
    setNotes('');
    setSelectedFile(null);
    setPreviewUrl(null);
    setIsSubmitted(false);
  };

  return (
    <section id="prescription-section" className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Prescription Review Service</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have a Prescription? KUTTY PHARMACY Can Help.
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Simply upload your prescription. Our pharmacy team will review it and contact you regarding availability and order details.
          </p>
        </div>

        {/* Upload Card / Interactive Workflow */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
          
          {isSubmitted ? (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Prescription Details Received!
              </h3>
              <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm sm:text-base">
                Our qualified pharmacist at the Nambiyur store will verify availability and dosage details. We will call you at <strong>{phone}</strong> shortly.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 max-w-md mx-auto text-left text-xs text-emerald-950">
                <p className="font-bold mb-1">Want instant response?</p>
                <p className="text-emerald-800">
                  Send your prescription image directly via WhatsApp to fast-track verification!
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="prescription-whatsapp-fasttrack"
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp (Fast-Track)</span>
                </button>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all"
                >
                  Submit Another Prescription
                </button>
              </div>

              <p className="text-[11px] text-slate-400 mt-6">
                Your prescription information is handled responsibly and used only for processing your request.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Drag and Drop Upload Box */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">
                      Upload Prescription File or Photo
                    </label>
                    <p className="text-xs text-slate-500 mb-3">
                      Take a photo with your phone or upload a clear JPG, PNG, or PDF file.
                    </p>

                    <div
                      onDragOver={onDragOver}
                      onDragLeave={onDragLeave}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                        dragActive
                          ? 'border-emerald-500 bg-emerald-50/50'
                          : selectedFile
                          ? 'border-emerald-400 bg-emerald-50/20'
                          : 'border-slate-300 hover:border-emerald-500 hover:bg-slate-50'
                      }`}
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
                              className="max-h-40 rounded-lg object-contain mb-3 border border-slate-200"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                              <FileCheck className="w-8 h-8" />
                            </div>
                          )}
                          <p className="text-xs font-bold text-slate-900 line-clamp-1">
                            {selectedFile.name}
                          </p>
                          <span className="text-[11px] text-emerald-700 font-semibold mt-1">
                            Ready for review &bull; Click to change
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center py-4">
                          <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                            <UploadCloud className="w-7 h-7" />
                          </div>
                          <span className="text-sm font-bold text-slate-900">
                            Click to browse or drag prescription photo here
                          </span>
                          <span className="text-xs text-slate-400 mt-1">
                            Supports JPG, PNG, PDF up to 10MB
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Trust Highlights below upload box */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Reviewed by registered pharmacist in Nambiyur</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% Genuine, verified batch medicines</span>
                    </div>
                  </div>
                </div>

                {/* Patient & Contact Details */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Patient Name */}
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Patient / Customer Name
                      </label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Ramesh / Priya"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9787175283"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        Our pharmacist will call you on this number to confirm order & delivery.
                      </span>
                    </div>

                    {/* Delivery or Pickup */}
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Fulfillment
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryOption('pickup')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            deliveryOption === 'pickup'
                              ? 'bg-emerald-50 border-emerald-600 text-emerald-900'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          🏪 Store Pickup (Near Bus Stand)
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryOption('local_delivery')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            deliveryOption === 'local_delivery'
                              ? 'bg-emerald-50 border-emerald-600 text-emerald-900'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          🚚 Local Delivery (Within 3 km)
                        </button>
                      </div>
                    </div>

                    {/* Delivery Address if delivery selected */}
                    {deliveryOption === 'local_delivery' && (
                      <div className="mb-4 animate-in fade-in">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Delivery Address in/near Nambiyur
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Street name, landmark in Nambiyur"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-emerald-600"
                        />
                        <span className="text-[10px] text-slate-500 mt-1 block">
                          Delivery available within 3 km for orders above ₹1,000.
                        </span>
                      </div>
                    )}

                    {/* Additional Notes */}
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Notes for Pharmacist (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Need 1 month supply, substitute with generic if brand unavailable..."
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="submit-prescription-form-btn"
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-800/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Submit Prescription for Review</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Mandatory Responsible Privacy Statement */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <p>
                  <strong>Privacy Assurance:</strong> Your prescription information is handled responsibly and used only for processing your request.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
