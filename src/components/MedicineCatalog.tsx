import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  ShoppingCart, 
  Check, 
  AlertCircle, 
  Info, 
  Tag, 
  Filter, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Product, MedicineCategory } from '../types';
import { CATEGORIES, SAMPLE_PRODUCTS, getWhatsAppUrl } from '../data/pharmacyData';

interface MedicineCatalogProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenPrescriptionModal: () => void;
}

export const MedicineCatalog: React.FC<MedicineCatalogProps> = ({
  onAddToCart,
  onOpenPrescriptionModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MedicineCategory>('All');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        product.name.toLowerCase().includes(query) ||
        (product.genericName && product.genericName.toLowerCase().includes(query)) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product, 1);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  const handleWhatsAppQuickInquiry = (product: Product) => {
    const text = `Hello KUTTY PHARMACY, I want to inquire about availability and price of "${product.name}" (${product.packageSize}).`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="medicines-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <span>Pharmacy Catalog & Search</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Medicines & Daily Healthcare Essentials
        </h2>
        <p className="text-slate-600 mt-2 text-base">
          Browse popular products or search specifically. Serving Nambiyur with genuine medicines and healthcare items.
        </p>
      </div>

      {/* Prominent Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative flex items-center shadow-lg shadow-slate-200/60 rounded-2xl bg-white border-2 border-slate-200 focus-within:border-emerald-600 transition-all overflow-hidden">
          <div className="pl-4 pr-2 text-slate-400">
            <Search className="w-6 h-6 text-emerald-700" />
          </div>
          <input
            id="medicine-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What medicine or healthcare product are you looking for?"
            className="w-full py-4 text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden bg-transparent"
          />
          {searchQuery && (
            <button
              id="clear-search-btn"
              onClick={() => setSearchQuery('')}
              className="p-2 mr-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Responsible Healthcare / No Self-Diagnosis Notice */}
        <div className="mt-3.5 px-4 py-3 rounded-xl bg-amber-50/90 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Medical Advisory:</strong> Kutty Pharmacy does not encourage self-diagnosis or unprescribed medication. Schedule H and prescription medicines strictly require a valid doctor’s prescription and verification by our registered pharmacist.{' '}
            <button
              onClick={onOpenPrescriptionModal}
              className="underline font-bold text-amber-950 hover:text-emerald-800"
            >
              Upload your prescription here &rarr;
            </button>
          </p>
        </div>
      </div>

      {/* Categories Horizontal Scroller */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-600" />
            <span>Select Category</span>
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs font-semibold text-emerald-700 hover:underline"
            >
              Reset to All
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                id={`cat-pill-${category.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-800/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clearly Marked Sample / Placeholder Inventory Notice */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500 bg-slate-100/90 px-4 py-2.5 rounded-xl border border-slate-200">
        <span className="flex items-center gap-2 font-medium">
          <Info className="w-4 h-4 text-slate-600 shrink-0" />
          <span>
            <strong>Inventory Notice:</strong> Displayed items are verified sample pharmacy products representative of stock at our Nambiyur store. Real-time availability is confirmed on order.
          </span>
        </span>
        <span className="text-slate-600 font-semibold">
          Showing {filteredProducts.length} items
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching medicines found</h3>
          <p className="text-sm text-slate-600 mt-2">
            We likely have it in stock at our Nambiyur counter! Call or WhatsApp us directly or upload your prescription.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
            >
              Clear Filters
            </button>
            <button
              onClick={onOpenPrescriptionModal}
              className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold"
            >
              Upload Prescription
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedProductId === product.id;
            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Product Image Container */}
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Discount Pill */}
                    {product.discountPercentage && product.discountPercentage > 0 && (
                      <div className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md shadow-2xs">
                        {product.discountPercentage}% OFF
                      </div>
                    )}

                    {/* Dosage form / Category badge */}
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                      {product.dosageForm}
                    </div>

                    {/* Sample badge watermark */}
                    <div className="absolute bottom-2 left-2 bg-slate-900/60 text-white text-[9px] font-medium px-1.5 py-0.5 rounded-sm backdrop-blur-xs">
                      Sample Item
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    {product.genericName && (
                      <p className="text-xs text-slate-500 italic mt-0.5 line-clamp-1">
                        {product.genericName}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      Pack: {product.packageSize}
                    </p>
                  </div>
                </div>

                {/* Pricing & Add to Cart */}
                <div className="p-4 sm:p-5 pt-0">
                  <div className="flex items-center justify-between mb-3 border-t border-slate-100 pt-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-extrabold text-slate-900">
                          ₹{product.price}
                        </span>
                        {product.mrp > product.price && (
                          <span className="text-xs text-slate-400 line-through">
                            ₹{product.mrp}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-medium text-emerald-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        In Stock at Nambiyur
                      </span>
                    </div>

                    <button
                      onClick={() => handleWhatsAppQuickInquiry(product)}
                      className="text-slate-400 hover:text-emerald-600 p-1.5 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Quick WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    id={`add-to-cart-btn-${product.id}`}
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isJustAdded
                        ? 'bg-emerald-800 text-white'
                        : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs hover:shadow-md'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Prescription Reminder Callout */}
      <div className="mt-12 bg-teal-50 border border-teal-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Need a specific medicine not listed here?
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Our Nambiyur store stocks thousands of prescription & OTC brands
          </h3>
          <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
            Send us a photo of your doctor’s prescription or box packaging. Our pharmacist will immediately check stock and prepare your order.
          </p>
        </div>
        <button
          id="catalog-upload-rx-cta"
          onClick={onOpenPrescriptionModal}
          className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          Upload Prescription Now
        </button>
      </div>

    </section>
  );
};
