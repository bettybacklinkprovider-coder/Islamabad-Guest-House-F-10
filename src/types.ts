export type PageType = 'home' | 'rooms' | 'gallery' | 'contact';

export interface Room {
  id: string;
  name: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  galleryImages: string[];
  capacity: string;
  bedType: string;
  bathroom: string;
  amenities: string[];
  features: string[];
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bedrooms' | 'living' | 'exterior' | 'bathrooms' | 'surroundings';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface BookingInquiry {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message: string;
}
