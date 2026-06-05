// Site-wide constants for Royal Spa
export const SPA_INFO = {
  name: "Royal Spa",
  tagline: "Luxury Wellness & Massage Spa",
  shortDesc: "Premium massage & wellness spa in Noida Sec-53",
  phone: "9654550098",
  phoneLink: "tel:+919654550098",
  email: "royalspanoida@gmail.com",
  emailLink: "mailto:royalspanoida@gmail.com",
  address: "Noida Sec-53, Mitthas Sweet, Shop No - S8",
  shortAddress: "Sec-53, Noida, UP",
  hours: "Open 24 Hours",
  mapLink: "https://maps.google.com/?q=Royal+Spa+Sector+53+Noida",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.36!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRoyal+Spa+Sector+53+Noida!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  social: {
    instagram: "https://instagram.com/royalspanoida",
    facebook: "https://facebook.com/royalspanoida",
    whatsapp: "https://wa.me/919654550098",
    youtube: "https://youtube.com/@royalspanoida",
  },
  rating: "4.9",
  reviews: "500+",
  clients: "10000+",
  experience: "5+",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM",
  "09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM",
];

export const STATS = [
  { value: 10000, suffix: "+", label: "Happy Clients", icon: "👥" },
  { value: 8, suffix: "", label: "Expert Services", icon: "✨" },
  { value: 5, suffix: "+", label: "Years Experience", icon: "🏆" },
  { value: 15, suffix: "+", label: "Skilled Therapists", icon: "💆" },
];

export const BENEFITS = [
  {
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    title: "100% Natural Products",
    description: "We use only certified organic and natural products, free from harmful chemicals for your skin's safety.",
  },
  {
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    title: "Expert Therapists",
    description: "Our certified therapists have years of experience and undergo regular professional development training.",
  },
  {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
    title: "Open 24/7",
    description: "Unlike other spas, we're available round the clock so you can experience luxury wellness any time.",
  },
  {
    image: "https://images.unsplash.com/photo-1584422506488-825fb414c5d3?w=600&q=80",
    title: "Premium Hygiene",
    description: "We maintain the highest standards of cleanliness with sterilized equipment for every client session.",
  },
  {
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    title: "Personalized Care",
    description: "Every treatment is customized based on your unique needs, skin type, and wellness goals.",
  },
  {
    image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=600&q=80",
    title: "Award Winning",
    description: "Recognized as one of Noida's best wellness destinations with over 500 five-star reviews.",
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Priya Kumari",
    role: "Head Therapist & Skin Expert",
    experience: "8 years",
    speciality: "Facial & Skin Care",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    bio: "Certified dermatologist therapist specializing in advanced facial treatments and skin rejuvenation techniques.",
  },
  {
    id: 2,
    name: "Ravi Sharma",
    role: "Body Massage Specialist",
    experience: "10 years",
    speciality: "Therapeutic Massage",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    bio: "Expert in Swedish, deep tissue, and hot stone massage with a decade of therapeutic practice.",
  },
  {
    id: 3,
    name: "Anjali Mishra",
    role: "Aromatherapy Expert",
    experience: "6 years",
    speciality: "Aromatherapy & Wellness",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    bio: "Certified aromatherapist trained in holistic wellness and essential oil therapy for mind-body healing.",
  },
  {
    id: 4,
    name: "Deepak Verma",
    role: "Hair & Scalp Specialist",
    experience: "7 years",
    speciality: "Hair Spa & Treatments",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    bio: "Trichology-trained specialist focused on hair restoration, scalp health, and premium hair spa treatments.",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Luxury Rose Facial Oil",
    category: "Face Care",
    price: "₹1,299",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Himalayan Salt Body Scrub",
    category: "Body Care",
    price: "₹899",
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80",
    badge: "New",
  },
  {
    id: 3,
    name: "Calming Lavender Oil Set",
    category: "Aromatherapy",
    price: "₹1,599",
    rating: 5.0,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Deep Nourishing Hair Mask",
    category: "Hair Care",
    price: "₹749",
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    badge: null,
  },
];

export const INSTAGRAM_POSTS = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=300&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=300&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&q=80",
];
