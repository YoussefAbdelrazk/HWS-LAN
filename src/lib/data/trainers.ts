export interface Trainer {
  id: string;
  name: string;
  image: string;
  location: string;
  isCertified: boolean;
  phone: string;
  whatsapp: string;
  gymPhone: string;
  gymWhatsapp: string;
  availableDays: string[];
}

export const trainersData: Trainer[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    image: '/assets/trainer1.png',
    location: 'Maadi, Cairo',
    isCertified: true,
    phone: '0123 456 800',
    whatsapp: '0113 456 800',
    gymPhone: '0123 456 800',
    gymWhatsapp: '0113 456 800',
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
  },
  {
    id: '2',
    name: 'Sarah Mohamed',
    image: '/assets/trainer2.png',
    location: 'Zamalek, Cairo',
    isCertified: true,
    phone: '0123 456 801',
    whatsapp: '0113 456 801',
    gymPhone: '0123 456 801',
    gymWhatsapp: '0113 456 801',
    availableDays: ['Sunday', 'Tuesday', 'Wednesday', 'Friday'],
  },
  {
    id: '3',
    name: 'Omar Ali',
    image: '/assets/trainer3.png',
    location: 'New Cairo, Cairo',
    isCertified: true,
    phone: '0123 456 802',
    whatsapp: '0113 456 802',
    gymPhone: '0123 456 802',
    gymWhatsapp: '0113 456 802',
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
  },
  {
    id: '4',
    name: 'Fatma Ibrahim',
    image: '/assets/trainer4.png',
    location: 'Heliopolis, Cairo',
    isCertified: true,
    phone: '0123 456 803',
    whatsapp: '0113 456 803',
    gymPhone: '0123 456 803',
    gymWhatsapp: '0113 456 803',
    availableDays: ['Sunday', 'Monday', 'Wednesday', 'Thursday'],
  },
  {
    id: '5',
    name: 'Mahmoud Youssef',
    image: '/assets/trainer5.png',
    location: 'Nasr City, Cairo',
    isCertified: true,
    phone: '0123 456 804',
    whatsapp: '0113 456 804',
    gymPhone: '0123 456 804',
    gymWhatsapp: '0113 456 804',
    availableDays: ['Tuesday', 'Thursday', 'Friday', 'Saturday'],
  },
  {
    id: '6',
    name: 'Nour El-Din',
    image: '/assets/trainer6.png',
    location: 'Giza, Giza',
    isCertified: true,
    phone: '0123 456 805',
    whatsapp: '0113 456 805',
    gymPhone: '0123 456 805',
    gymWhatsapp: '0113 456 805',
    availableDays: ['Sunday', 'Monday', 'Tuesday', 'Thursday'],
  },
];
