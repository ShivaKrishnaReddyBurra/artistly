// Mock data for artists
const mockArtists = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "singers",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    priceRange: "₹40,000-80,000",
    image: "https://c4.wallpaperflare.com/wallpaper/865/558/463/anime-girl-singing-sunlight-guitar-wallpaper-preview.jpg",
    specialties: ["Jazz", "Pop", "Soul"],
    bio: "Professional vocalist with 10+ years of experience performing at corporate events, weddings, and music festivals across India.",
    languages: ["English", "Hindi"],
  },
  {
    id: 2,
    name: "Michael Chen",
    category: "djs",
    location: "Delhi, Delhi",
    rating: 4.8,
    priceRange: "₹25,000-65,000",
    image: "https://backiee.com/static/wallpapers/1920x1080/381313.jpg",
    specialties: ["Electronic", "House", "Wedding"],
    bio: "Award-winning DJ specializing in electronic music with experience at major clubs and wedding venues.",
    languages: ["English", "Hindi"],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    category: "dancers",
    location: "Bangalore, Karnataka",
    rating: 5.0,
    priceRange: "₹35,000-75,000",
    image: "https://w0.peakpx.com/wallpaper/392/595/HD-wallpaper-anime-girl-dancing.jpg",
    specialties: ["Contemporary", "Bollywood", "Classical"],
    bio: "Professional dancer and choreographer with expertise in Indian classical and contemporary dance forms.",
    languages: ["English", "Kannada", "Hindi"],
  },
  {
    id: 4,
    name: "David Thompson",
    category: "speakers",
    location: "Chennai, Tamil Nadu",
    rating: 4.7,
    priceRange: "₹80,000-1,60,000",
    image: "https://img.freepik.com/premium-photo/anime-boy-with-microphone-hand-lights-background_900814-100302.jpg",
    specialties: ["Motivational", "Business", "Leadership"],
    bio: "Inspirational speaker and business coach with over 15 years of experience in corporate training and leadership development.",
    languages: ["English", "Tamil"],
  },
  {
    id: 5,
    name: "Lisa Park",
    category: "singers",
    location: "Hyderabad, Telangana",
    rating: 4.9,
    priceRange: "₹50,000-95,000",
    image: "https://thumbs.dreamstime.com/z/cheerful-idol-anime-girl-bright-blue-hair-microphone-her-hand-singing-dancing-colorful-stage-manga-style-277372310.jpg",
    specialties: ["Playback", "Folk", "Devotional"],
    bio: "Renowned playback singer with multiple hit songs in Telugu and Hindi cinema industry.",
    languages: ["English", "Telugu", "Hindi"],
  },
  {
    id: 6,
    name: "Carlos Martinez",
    category: "dancers",
    location: "Pune, Maharashtra",
    rating: 4.6,
    priceRange: "₹30,000-60,000",
    image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/09/Dance-Dance-Danseur-visual-2-scaled-e1631075224910.jpg",
    specialties: ["Salsa", "Hip-Hop", "Bollywood"],
    bio: "International dance instructor and performer specializing in Latin and Bollywood fusion styles.",
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    id: 7,
    name: "Priya Sharma",
    category: "singers",
    location: "Jaipur, Rajasthan",
    rating: 4.8,
    priceRange: "₹45,000-85,000",
    image: "https://c4.wallpaperflare.com/wallpaper/865/558/463/anime-girl-singing-sunlight-guitar-wallpaper-preview.jpg",
    specialties: ["Classical", "Ghazal", "Sufi"],
    bio: "Classical vocalist trained in Hindustani music with performances at prestigious cultural events.",
    languages: ["Hindi", "Urdu", "Rajasthani"],
  },
  {
    id: 8,
    name: "Arjun Reddy",
    category: "comedians",
    location: "Kolkata, West Bengal",
    rating: 4.5,
    priceRange: "₹20,000-45,000",
    image: "https://img.freepik.com/premium-photo/anime-boy-with-microphone-hand-lights-background_900814-100302.jpg",
    specialties: ["Stand-up", "Improv", "Corporate"],
    bio: "Stand-up comedian with a unique blend of observational humor and social commentary.",
    languages: ["English", "Hindi", "Bengali"],
  },
  {
    id: 9,
    name: "Kavya Nair",
    category: "dancers",
    location: "Kochi, Kerala",
    rating: 4.9,
    priceRange: "₹40,000-70,000",
    image: "https://w0.peakpx.com/wallpaper/392/595/HD-wallpaper-anime-girl-dancing.jpg",
    specialties: ["Bharatanatyam", "Mohiniyattam", "Contemporary"],
    bio: "Award-winning classical dancer specializing in South Indian dance forms with international recognition.",
    languages: ["English", "Malayalam", "Tamil"],
  },
  {
    id: 10,
    name: "Rohit Gupta",
    category: "musicians",
    location: "Ahmedabad, Gujarat",
    rating: 4.7,
    priceRange: "₹35,000-65,000",
    image: "https://backiee.com/static/wallpapers/1920x1080/381313.jpg",
    specialties: ["Tabla", "Fusion", "World Music"],
    bio: "Tabla virtuoso and composer creating innovative fusion music blending traditional and modern elements.",
    languages: ["English", "Hindi", "Gujarati"],
  },
];

// Mock data for artist submissions
const mockSubmissions = [
  {
    id: 1,
    name: "Alex Rivera",
    bio: "Passionate musician with 8 years of experience in rock and alternative music.",
    categories: ["Singers", "Musicians"],
    languages: ["English", "Hindi"],
    feeRange: "₹40,000 - ₹80,000",
    location: "Gurgaon, Haryana",
    status: "pending",
    submittedAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Maya Patel",
    bio: "Contemporary dancer specializing in fusion styles and cultural performances.",
    categories: ["Dancers"],
    languages: ["English", "Hindi", "Gujarati"],
    feeRange: "₹32,000 - ₹64,000",
    location: "Vadodara, Gujarat",
    status: "approved",
    submittedAt: "2024-01-14",
  },
  {
    id: 3,
    name: "James Wilson",
    bio: "Professional DJ with expertise in wedding and corporate events.",
    categories: ["DJs"],
    languages: ["English", "Hindi"],
    feeRange: "₹25,000 - ₹55,000",
    location: "Noida, Uttar Pradesh",
    status: "pending",
    submittedAt: "2024-01-13",
  },
  {
    id: 4,
    name: "Sophie Laurent",
    bio: "Bilingual comedian and speaker specializing in corporate entertainment.",
    categories: ["Comedians", "Speakers"],
    languages: ["English", "French", "Hindi"],
    feeRange: "₹65,000 - ₹1,20,000",
    location: "Chandigarh, Punjab",
    status: "rejected",
    submittedAt: "2024-01-12",
  },
];

// Simulate API calls with delays
export async function getArtists() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockArtists;
}

export async function getArtistSubmissions() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockSubmissions;
}

export async function getArtistById(id) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockArtists.find((artist) => artist.id === id) || null;
}