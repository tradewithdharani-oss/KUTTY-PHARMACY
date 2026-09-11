export interface Product {
  id: string;
  name: string;
  genericName?: string;
  category: MedicineCategory;
  price: number;
  mrp: number;
  discountPercentage?: number;
  packageSize: string;
  isRxRequired: boolean;
  inStock: boolean;
  image: string;
  description: string;
  dosageForm: 'Tablet' | 'Syrup' | 'Cream' | 'Device' | 'Drops' | 'Powder' | 'Capsule' | 'Gel' | 'Bottle';
}

export type MedicineCategory =
  | 'All'
  | 'Fever & Cold'
  | 'Pain Relief'
  | 'Vitamins & Supplements'
  | 'Diabetes Care'
  | 'Personal Care'
  | 'Baby Care'
  | 'First Aid'
  | 'Health Devices'
  | 'Daily Healthcare Essentials';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PrescriptionFormData {
  patientName: string;
  phoneNumber: string;
  deliveryOption: 'pickup' | 'local_delivery';
  address?: string;
  notes?: string;
  file?: File | null;
  filePreviewUrl?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedLocalCustomer: boolean;
}
