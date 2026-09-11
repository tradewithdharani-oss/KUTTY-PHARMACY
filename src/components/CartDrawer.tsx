import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Info,
  MapPin
} from 'lucide-react';
import { CartItem } from '../types';
import { PHARMACY_INFO, getWhatsAppUrl } from '../data/pharmacyData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const deliveryThreshold = PHARMACY_INFO.freeDeliveryMinOrder;
  const isDeliveryEligible = subtotal >= deliveryThreshold;
  const amountNeeded = deliveryThreshold - subtotal;
  const progressPercent = Math.min(100, (subtotal / deliveryThreshold) * 100);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    if (!customerPhone) {
      alert('Please enter your phone number so Kutty Pharmacy can reach you regarding your order.');
      return;
    }

    let itemsSummary = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (${item.product.packageSize}) x ${item.quantity} = ₹${
            item.product.price * item.quantity
          }`
      )
      .join('\n');

    const message = `*NEW ORDER - KUTTY PHARMACY (Nambiyur)*
-----------------------------------
*Customer Details:*
• Name: ${customerName || 'Customer'}
• Phone: ${customerPhone}
• Fulfillment: ${
      deliveryType === 'delivery'
        ? `Local Delivery (Within 3km) - Address: ${customerAddress || 'Nambiyur'}`
        : 'Store Pickup at Kovai Main Road Counter'
    }

*Ordered Items:*
${itemsSummary}

-----------------------------------
*Subtotal:* ₹${subtotal}
${
  deliveryType === 'delivery'
    ? isDeliveryEligible
      ? '• Delivery: Free (Order > ₹1,000)'
      : '• Delivery: Order below ₹1,000 threshold (subject to pharmacist confirmation)'
    : '• In-Store Pickup: Ready during 7:00 AM – 11:00 PM'
}

Please confirm availability and prepare this order. Thank you!`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Your Medicine Cart</h3>
                <p className="text-xs text-slate-500">{cartItems.length} item(s) selected</p>
              </div>
            </div>
            <button
              id="close-cart-btn"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            
            {/* ₹1000 Local Delivery Progress Bar */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="flex items-center gap-1.5 text-emerald-950">
                  <Truck className="w-4 h-4 text-emerald-700" />
                  <span>Local Delivery (Within 3 KM)</span>
                </span>
                <span className="text-emerald-800">Min: ₹{deliveryThreshold}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-emerald-200/60 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-[11px] text-emerald-900 mt-2 font-medium">
                {isDeliveryEligible ? (
                  <span className="text-emerald-800 font-bold">
                    🎉 Qualified for Local Delivery within 3 km in Nambiyur!
                  </span>
                ) : (
                  <span>
                    Add <strong>₹{amountNeeded}</strong> more to qualify for local delivery in Nambiyur.
                  </span>
                )}
              </p>
            </div>

            {/* Empty state */}
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Your cart is empty</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Add medicines or health devices from the catalog.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  Browse Medicines
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-slate-100 shrink-0 border border-slate-100"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {item.product.packageSize}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-extrabold text-slate-900">
                          ₹{item.product.price * item.quantity}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <div className="flex justify-end">
                  <button
                    onClick={onClearCart}
                    className="text-xs text-rose-600 hover:underline font-semibold"
                  >
                    Clear all items
                  </button>
                </div>
              </div>
            )}

            {/* Customer order details form */}
            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Delivery / Pickup Choice:
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                      deliveryType === 'pickup'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    🏪 Counter Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                      deliveryType === 'delivery'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    🚚 Local Delivery (3km)
                  </button>
                </div>

                <div>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 text-slate-900 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Contact Phone / WhatsApp *"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 text-slate-900 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-emerald-600"
                  />
                </div>

                {deliveryType === 'delivery' && (
                  <div>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Doorstep address in Nambiyur"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 text-slate-900 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-emerald-600"
                    />
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Footer / Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 font-medium">Subtotal</span>
                <span className="text-lg font-black text-slate-900">₹{subtotal}</span>
              </div>

              <button
                id="cart-whatsapp-checkout-btn"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-800/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Order via WhatsApp ({PHARMACY_INFO.phone})</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Genuine medicines verified by registered pharmacist</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
