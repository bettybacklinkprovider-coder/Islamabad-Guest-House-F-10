import { Room, AmenityItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Islamabad Guest House F-10',
  shortName: 'Islamabad Guest House',
  locationTag: 'F-10/4, Islamabad',
  phone: '+92 315 6088438',
  phoneClean: '+923156088438',
  phoneTel: 'tel:+923156088438',
  whatsappUrl: 'https://wa.me/923156088438?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay%20at%20Islamabad%20Guest%20House%20F-10.',
  address: 'House 54A, Street 39, F-10/4, F-10, Islamabad, 04412, Pakistan',
  googleMapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=House+54A,+Street+39,+F-10/4,+Islamabad,+Pakistan',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13271.868128913346!2d73.0088915!3d33.6938923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe38a1682355%3A0x6730a08e06399c5c!2sF-10%2F4%20F-10%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk',
  email: 'info@islamabadguesthousef10.com',
};

export const HERO_DATA = {
  heading: 'Welcome to Islamabad Guest House F-10',
  subheading: 'A comfortable and welcoming stay in the heart of F-10, Islamabad.',
  backgroundImage: 'https://i.pinimg.com/1200x/d9/61/0c/d9610cf3de5cea102c648cd265e6d6f8.jpg',
};

export const ABOUT_DATA = {
  title: 'About Islamabad Guest House F-10',
  description: 'Islamabad Guest House F-10 is a warm, peaceful, and hospitable accommodation situated in the upscale residential heart of sector F-10/4, Islamabad. Designed specifically for families, business executives, international visitors, and guests seeking a serene stay, our property combines modern guest house amenities with attentive, personal Pakistani hospitality.',
  highlights: [
    'Comfortable accommodation with plush bedding',
    'Clean, hygienic, and welcoming environment',
    'Convenient F-10 location near markets & restaurants',
    'Friendly, respectful, and dedicated guest service',
    'Suitable for both short visits and extended stays'
  ],
  image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    badge: 'Popular for Solo & Couples',
    shortDescription: 'Elegantly furnished room with plush king-size bedding, climate control, and attached private bathroom.',
    fullDescription: 'Our Deluxe Room offers a quiet retreat in sector F-10/4. Outfitted with high-thread-count linens, soft ambient lighting, work space, and modern climate control, it provides everything needed for a relaxing night after a busy day in Islamabad.',
    mainImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80'
    ],
    capacity: '2 Guests',
    bedType: '1 King Size Bed',
    bathroom: 'Private En-Suite Bathroom (Hot/Cold Water 24/7)',
    amenities: ['Free High-Speed Wi-Fi', 'Air Conditioning & Heating', 'Clean En-Suite Bathroom', 'Flat-screen LED TV', '24/7 Room Service', 'Daily Housekeeping'],
    features: ['Sound-dampened windows', 'Work desk & reading chair', 'Complimentary tea/coffee maker', 'Ample wardrobe space']
  },
  {
    id: 'family-room',
    name: 'Family Room',
    badge: 'Ideal for Families',
    shortDescription: 'Spacious multi-bed room crafted for families and small groups visiting Islamabad.',
    fullDescription: 'The Family Room is specially arranged with generous floor space and multiple comfortable sleeping arrangements. Located in a calm residential setting, families can rest with peace of mind and access full guest house support around the clock.',
    mainImage: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80'
    ],
    capacity: '3 - 4 Guests',
    bedType: '1 King Bed + 1 Single Bed / Twin Double Beds',
    bathroom: 'Spacious Private Bathroom with Premium Toiletries',
    amenities: ['Free High-Speed Wi-Fi', 'Dual Air Conditioning & Heater', 'Spacious En-Suite Bathroom', 'Smart LED TV', 'In-Room Breakfast Options', 'Dedicated Family Space'],
    features: ['Separate seating nook', 'Extra luggage racks', 'Secure in-room safety setup', 'Immediate access to garden/lounge']
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    badge: 'Premium Comfort',
    shortDescription: 'Premium suite-style accommodation for business professionals and long-stay guests.',
    fullDescription: 'Designed with extra roominess, an executive desk, high-speed fiber internet, and premium soft furnishings. Perfect for business trips, official visits, or guests looking for an upgraded residential experience in Islamabad F-10.',
    mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80'
    ],
    capacity: '2 Guests',
    bedType: 'Super King Plush Bed',
    bathroom: 'Luxury Marble Attached Bathroom',
    amenities: ['Free High-Speed Fiber Wi-Fi', 'Climate Control Unit', 'Luxury Marble Bathroom', '43" Smart LED TV', 'VIP Room Service', 'Workplace & Executive Desk'],
    features: ['Quiet street-view balcony/window', 'Personal mini-fridge', 'Premium toiletries kit', 'Express check-in / check-out support']
  }
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: 'beds',
    title: 'Comfortable Beds',
    description: 'Clean, crisp linens and ergonomic orthopedic mattresses for restful sleep.',
    iconName: 'Bed',
    imageUrl: 'https://i.pinimg.com/736x/07/7b/d0/077bd0b3d769294a2eda575023dee02c.jpg'
  },
  {
    id: 'wifi',
    title: 'Free Wi-Fi',
    description: 'High-speed wireless internet connection across all rooms and lounge areas.',
    iconName: 'Wifi',
    imageUrl: 'https://i.pinimg.com/736x/3f/69/8b/3f698bc9766d1150b80be2779192778a.jpg'
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description: 'Independent climate control with efficient AC and heating systems.',
    iconName: 'Wind',
    imageUrl: 'https://i.pinimg.com/736x/64/f7/88/64f788237e0d80ab734de21aa7244872.jpg'
  },
  {
    id: 'bathrooms',
    title: 'Clean Bathrooms',
    description: 'Spotless en-suite bathrooms equipped with 24/7 hot and cold water.',
    iconName: 'ShowerHead',
    imageUrl: 'https://i.pinimg.com/736x/3d/3b/e3/3d3be3361990307189a8a9d7b626341b.jpg'
  },
  {
    id: 'room-service',
    title: 'Room Service',
    description: 'Prompt room service delivering hot tea, breakfast, and refreshments.',
    iconName: 'Utensils',
    imageUrl: 'https://i.pinimg.com/736x/d9/5c/a6/d95ca6982a31815bac8e3ac31194f0f3.jpg'
  },
  {
    id: 'parking',
    title: 'Parking',
    description: 'Secure vehicle parking space inside and directly outside the guest house.',
    iconName: 'Car',
    imageUrl: 'https://i.pinimg.com/736x/64/f7/88/64f788237e0d80ab734de21aa7244872.jpg'
  },
  {
    id: 'assistance',
    title: '24/7 Assistance',
    description: 'Dedicated front desk reception staff ready to assist day and night.',
    iconName: 'Clock',
    imageUrl: 'https://i.pinimg.com/736x/91/c8/52/91c852cbf74c09d3b73cfa073e8ad6ce.jpg'
  },
  {
    id: 'family',
    title: 'Family-Friendly Environment',
    description: 'Safe, quiet, and respectable family atmosphere in F-10/4 Islamabad.',
    iconName: 'Users',
    imageUrl: 'https://i.pinimg.com/736x/0d/7b/ba/0d7bbac3cfd826d0edd71acda983e61d.jpg'
  }
];

export const WHY_STAY_REASONS = [
  {
    title: 'Convenient F-10 Location',
    description: 'Situated in sector F-10/4, moments away from F-10 Markaz restaurants, banks, shops, and transport routes.'
  },
  {
    title: 'Comfortable Rooms',
    description: 'Well-maintained rooms with cozy beds, fresh linens, and modern amenities tailored for complete relaxation.'
  },
  {
    title: 'Clean & Hygienic Environment',
    description: 'Strict cleanliness protocol ensuring immaculate bedrooms, fresh towels, and sanitized common areas.'
  },
  {
    title: 'Easy Access to Attractions',
    description: 'Quick travel time to Faisal Mosque, Margalla Hills, Centaurus Mall, Daman-e-Koh, and Diplomatic Enclave.'
  },
  {
    title: 'Welcoming & Secure Atmosphere',
    description: 'A peaceful residential neighborhood atmosphere backed by 24/7 guest house security and assistance.'
  },
  {
    title: 'Suitable for Families & Travelers',
    description: 'Thoughtfully suited for short visits, family vacations, business journeys, and extended city stays.'
  }
];

export const WHY_STAY_IMAGE = 'https://i.pinimg.com/736x/90/2f/5b/902f5ba0bd1ffc5f0f9998e0f1887a34.jpg'; // Islamabad Guest House F-10 feature image

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Deluxe Guest Room',
    category: 'bedrooms',
    categoryLabel: 'Bedroom Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clean, comfortably furnished Deluxe bedroom with plush king bedding.'
  },
  {
    id: 'gal-2',
    title: 'Guest House Lounge & Living',
    category: 'living',
    categoryLabel: 'Living Areas',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Welcoming communal sitting area for guests and visitors.'
  },
  {
    id: 'gal-3',
    title: 'Executive Suite Interior',
    category: 'bedrooms',
    categoryLabel: 'Bedroom Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    caption: 'Executive suite with dedicated work desk and ambient lighting.'
  },
  {
    id: 'gal-4',
    title: 'Clean Modern Bathroom',
    category: 'bathrooms',
    categoryLabel: 'Bathrooms',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spotless attached bathroom with 24/7 hot water shower facilities.'
  },
  {
    id: 'gal-5',
    title: 'Family Room Layout',
    category: 'bedrooms',
    categoryLabel: 'Bedroom Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious Family Room accommodating multiple guests comfortably.'
  },
  {
    id: 'gal-6',
    title: 'Guest House Porch & Front Lawn',
    category: 'exterior',
    categoryLabel: 'Exterior & Lawn',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Peaceful residential exterior in F-10/4 Islamabad.'
  },
  {
    id: 'gal-7',
    title: 'Dining & Refreshment Area',
    category: 'living',
    categoryLabel: 'Dining & Common Areas',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bright dining area for morning tea, breakfast, and snacks.'
  },
  {
    id: 'gal-8',
    title: 'Comfortable Seating Nook',
    category: 'living',
    categoryLabel: 'Living Areas',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    caption: 'Relaxing sitting lounge to unwind or converse with family.'
  },
  {
    id: 'gal-9',
    title: 'Islamabad F-10 Surroundings & Margalla Hills',
    category: 'surroundings',
    categoryLabel: 'Islamabad Surroundings',
    imageUrl: 'https://i.pinimg.com/736x/90/2f/5b/902f5ba0bd1ffc5f0f9998e0f1887a34.jpg',
    caption: 'Scenic backdrop of Margalla Hills near F-10 Islamabad.'
  }
];
