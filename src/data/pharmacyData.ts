import { Product, MedicineCategory, ReviewItem } from '../types';

export const PHARMACY_INFO = {
  name: 'KUTTY PHARMACY',
  tagline: 'Your Health. Our Priority.',
  subtitle: 'Trusted medicines, healthcare essentials and convenient local delivery — right here in Nambiyur.',
  address: 'Kovai Main Rd, Near Bus Stand, Nambiyur, Tamil Nadu – 638458',
  phone: '9787175283',
  phoneDisplay: '+91 97871 75283',
  openingHours: '7:00 AM – 11:00 PM',
  deliveryDetails: 'Available within 3 km for orders above ₹1,000.',
  deliveryRadiusKm: 3,
  freeDeliveryMinOrder: 1000,
  googleMapsUrl: 'https://maps.app.goo.gl/r57dxXbpEZgAZhXM7',
  whatsappNumber: '919787175283',
  email: 'kuttypharmacy.nambiyur@gmail.com',
  closingMessage: 'KUTTY PHARMACY — Caring for Nambiyur, One Customer at a Time.'
};

export const getWhatsAppUrl = (customText?: string) => {
  const defaultText = `Hello KUTTY PHARMACY (Nambiyur), I would like to inquire about medicines / healthcare products.`;
  const message = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${PHARMACY_INFO.whatsappNumber}?text=${message}`;
};

export const getCallUrl = () => `tel:${PHARMACY_INFO.phone}`;

export const CATEGORIES: MedicineCategory[] = [
  'All',
  'Fever & Cold',
  'Pain Relief',
  'Vitamins & Supplements',
  'Diabetes Care',
  'Personal Care',
  'Baby Care',
  'First Aid',
  'Health Devices',
  'Daily Healthcare Essentials'
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'med-1',
    name: 'Dolo 650mg Paracetamol Tablets',
    genericName: 'Paracetamol 650mg',
    category: 'Fever & Cold',
    price: 32,
    mrp: 35,
    discountPercentage: 8,
    packageSize: 'Strip of 15 tablets',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
    description: 'Fast relief from fever, headache, body aches, and mild to moderate pain symptoms.',
    dosageForm: 'Tablet'
  },
  {
    id: 'med-2',
    name: 'Volini Pain Relief Gel with Micro-Particles',
    genericName: 'Diclofenac Diethylamine + Methyl Salicylate',
    category: 'Pain Relief',
    price: 135,
    mrp: 155,
    discountPercentage: 12,
    packageSize: '50g Tube',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=500&auto=format&fit=crop&q=80',
    description: 'Quick absorption deep muscle and joint pain reliever for backache, neck pain, and sprains.',
    dosageForm: 'Gel'
  },
  {
    id: 'med-3',
    name: 'Zincovit Multivitamin & Minerals Tablets',
    genericName: 'Multivitamin with Zinc & Grape Seed Extract',
    category: 'Vitamins & Supplements',
    price: 105,
    mrp: 120,
    discountPercentage: 12,
    packageSize: 'Strip of 15 tablets',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1550572017-ed200f5e6343?w=500&auto=format&fit=crop&q=80',
    description: 'Daily nutritional support to boost immunity, energy levels, and overall wellness.',
    dosageForm: 'Tablet'
  },
  {
    id: 'med-4',
    name: 'Accu-Chek Active Blood Glucose Strips',
    genericName: 'Blood Glucose Test Strips',
    category: 'Diabetes Care',
    price: 980,
    mrp: 1100,
    discountPercentage: 11,
    packageSize: 'Box of 50 strips',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&auto=format&fit=crop&q=80',
    description: 'Accurate and simple self-monitoring blood glucose test strips for diabetic health care.',
    dosageForm: 'Device'
  },
  {
    id: 'med-5',
    name: 'Dettol Antiseptic Disinfectant Liquid',
    genericName: 'Chloroxylenol Antiseptic Formula',
    category: 'First Aid',
    price: 145,
    mrp: 160,
    discountPercentage: 9,
    packageSize: '250ml Bottle',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format&fit=crop&q=80',
    description: 'Trusted antiseptic for first aid wound cleaning, cuts, scratches, and personal hygiene.',
    dosageForm: 'Bottle'
  },
  {
    id: 'med-6',
    name: 'Himalaya Baby Massage Oil with Olive & Winter Cherry',
    genericName: 'Nourishing Herbal Baby Oil',
    category: 'Baby Care',
    price: 210,
    mrp: 235,
    discountPercentage: 10,
    packageSize: '200ml Bottle',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&auto=format&fit=crop&q=80',
    description: 'Enriched with natural herbs to improve baby skin tone and promote healthy growth.',
    dosageForm: 'Bottle'
  },
  {
    id: 'med-7',
    name: 'Omron Digital Arm Blood Pressure Monitor',
    genericName: 'Automatic Upper Arm BP Monitor HEM-7120',
    category: 'Health Devices',
    price: 1850,
    mrp: 2200,
    discountPercentage: 16,
    packageSize: '1 Unit Device + Cuff',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80',
    description: 'High-precision blood pressure and pulse rate measuring device with hypertension indicator.',
    dosageForm: 'Device'
  },
  {
    id: 'med-8',
    name: 'Electral ORS Powder (WHO Formula)',
    genericName: 'Oral Rehydration Salts IP',
    category: 'Daily Healthcare Essentials',
    price: 22,
    mrp: 24,
    discountPercentage: 8,
    packageSize: '21.8g Sachet',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=500&auto=format&fit=crop&q=80',
    description: 'Restores essential body fluids and electrolytes lost due to dehydration, heat, or diarrhea.',
    dosageForm: 'Powder'
  },
  {
    id: 'med-9',
    name: 'Sebamed Clear Face Cleansing Foam',
    genericName: 'Montaline C40 pH 5.5 Face Care',
    category: 'Personal Care',
    price: 520,
    mrp: 580,
    discountPercentage: 10,
    packageSize: '150ml Pump',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
    description: 'Dermatologically tested gentle cleansing foam for acne-prone and sensitive skin.',
    dosageForm: 'Bottle'
  },
  {
    id: 'med-10',
    name: 'Dr. Morepen Digital Thermometer',
    genericName: 'Fast Read Clinical Thermometer',
    category: 'Health Devices',
    price: 195,
    mrp: 250,
    discountPercentage: 22,
    packageSize: '1 Digital Device',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80',
    description: 'Quick 60-second fever readout with fever beeper alert and auto shut-off function.',
    dosageForm: 'Device'
  },
  {
    id: 'med-11',
    name: 'Celin 500mg Chewable Vitamin C',
    genericName: 'Ascorbic Acid IP 500mg',
    category: 'Vitamins & Supplements',
    price: 42,
    mrp: 48,
    discountPercentage: 12,
    packageSize: 'Strip of 25 tablets',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
    description: 'Antioxidant boost for stronger immunity, wound recovery, and radiant skin health.',
    dosageForm: 'Tablet'
  },
  {
    id: 'med-12',
    name: 'Moov Pain Relief Cream',
    genericName: 'Ayurvedic Specialist Pain Relief Formula',
    category: 'Pain Relief',
    price: 140,
    mrp: 160,
    discountPercentage: 12,
    packageSize: '50g Tube',
    isRxRequired: false,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
    description: 'Ayurvedic fast action warming formula for back pain, muscle stiffness, and joint aches.',
    dosageForm: 'Cream'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: 'Hospital',
    title: 'Trusted Local Pharmacy',
    description: 'Serving customers in Nambiyur and nearby areas with dedicated healthcare support.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Quality Healthcare Products',
    description: 'Focus on 100% genuine medicines, verified batch dates, and healthcare essentials.'
  },
  {
    icon: 'Zap',
    title: 'Quick Service',
    description: 'Easy ordering, prompt local dispatch, and responsive customer support over phone & WhatsApp.'
  },
  {
    icon: 'UserCheck',
    title: 'Pharmacist Assistance',
    description: 'Get courteous, knowledgeable assistance from our qualified pharmacy team when needed.'
  },
  {
    icon: 'Lock',
    title: 'Privacy & Care',
    description: 'Handle customer health inquiries and prescription information with utmost confidentiality.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Customer First',
    description: 'Friendly, convenient, and deeply reliable local pharmacy service tailored for Nambiyur families.'
  }
];

export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Senthil Kumar',
    location: 'Near Bus Stand, Nambiyur',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Very dependable pharmacy right on Kovai Main Road. Always get genuine medicines with proper bill and good advice on dosage.',
    verifiedLocalCustomer: true
  },
  {
    id: 'rev-2',
    author: 'Kavitha Ramasamy',
    location: 'Puliampatti Road, Nambiyur',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Convenient prescription upload! Sent my parents’ monthly BP & sugar medicines on WhatsApp and they verified stock immediately.',
    verifiedLocalCustomer: true
  },
  {
    id: 'rev-3',
    author: 'Pravin Murugan',
    location: 'Kovai Main Road',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Prompt delivery within 3 km for our home essentials. Glad to have Kutty Pharmacy serving Nambiyur so well.',
    verifiedLocalCustomer: true
  }
];

export const LOCALITY_LIST = [
  { name: 'Nambiyur Bus Stand Area', distance: '0.2 km', status: 'Eligible (Fast Local Delivery)' },
  { name: 'Kovai Main Road stretch', distance: '0.4 km', status: 'Eligible (Fast Local Delivery)' },
  { name: 'Bazaar Street / Market', distance: '0.6 km', status: 'Eligible (Fast Local Delivery)' },
  { name: 'Old Bus Stand area', distance: '0.8 km', status: 'Eligible (Fast Local Delivery)' },
  { name: 'Puliampatti Road junction', distance: '1.2 km', status: 'Eligible (Fast Local Delivery)' },
  { name: 'Polavapalayam Road area', distance: '1.8 km', status: 'Eligible (Fast Local Delivery)' },
  { name: 'Kunnathur Road outskirts', distance: '2.5 km', status: 'Eligible (Within 3 KM boundary)' },
  { name: 'Sathyamangalam bypass connector', distance: '2.9 km', status: 'Eligible (Within 3 KM boundary)' }
];
