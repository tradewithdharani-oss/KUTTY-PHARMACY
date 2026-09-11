import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickActions } from './components/QuickActions';
import { MedicineCatalog } from './components/MedicineCatalog';
import { PrescriptionUploadSection } from './components/PrescriptionUploadSection';
import { LocalDeliverySection } from './components/LocalDeliverySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SpecialBanner } from './components/SpecialBanner';
import { AboutSection } from './components/AboutSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { ContactSection } from './components/ContactSection';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { PrescriptionModal } from './components/PrescriptionModal';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kutty_pharmacy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);

  // Save cart changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kutty_pharmacy_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Header with identity and top notifications */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onShopMedicinesClick={() => scrollToSection('medicines-section')}
          onUploadPrescriptionClick={() => setIsPrescriptionModalOpen(true)}
        />

        {/* Quick Actions (4 Cards immediately below hero) */}
        <QuickActions
          onOrderMedicinesClick={() => scrollToSection('medicines-section')}
          onUploadPrescriptionClick={() => setIsPrescriptionModalOpen(true)}
          onLocalDeliveryClick={() => scrollToSection('delivery-section')}
          onContactClick={() => scrollToSection('contact-section')}
        />

        {/* Medicine Search & Featured Products Catalog */}
        <MedicineCatalog
          onAddToCart={handleAddToCart}
          onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
        />

        {/* Prescription Upload Section */}
        <PrescriptionUploadSection
          onOpenModal={() => setIsPrescriptionModalOpen(true)}
        />

        {/* Local Delivery Section */}
        <LocalDeliverySection
          onOrderNowClick={() => scrollToSection('medicines-section')}
        />

        {/* Why Choose Kutty Pharmacy? (6 Cards) */}
        <WhyChooseUs />

        {/* Special Health Banner */}
        <SpecialBanner
          onShopNowClick={() => scrollToSection('medicines-section')}
        />

        {/* About Kutty Pharmacy */}
        <AboutSection />

        {/* Google Maps Section */}
        <GoogleMapsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Customer Reviews (Clearly Marked Sample Placeholders) */}
        <CustomerReviews />

      </main>

      {/* Footer with Final Website Message */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Prescription Upload Modal */}
      <PrescriptionModal
        isOpen={isPrescriptionModalOpen}
        onClose={() => setIsPrescriptionModalOpen(false)}
      />

      {/* Mobile Sticky Bottom Navigation & Quick Action Floaters */}
      <MobileBottomNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

    </div>
  );
}
