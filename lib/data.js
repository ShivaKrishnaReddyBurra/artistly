// Mock data for artists
const mockArtists = [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "singers",
      location: "New York, NY",
      rating: 4.9,
      priceRange: "$500-1000",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Jazz", "Pop", "Soul"],
      bio: "Professional vocalist with 10+ years of experience",
      languages: ["English", "Spanish"],
    },
    {
      id: 2,
      name: "Michael Chen",
      category: "djs",
      location: "Los Angeles, CA",
      rating: 4.8,
      priceRange: "$300-800",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Electronic", "House", "Wedding"],
      bio: "Award-winning DJ specializing in electronic music",
      languages: ["English", "Mandarin"],
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      category: "dancers",
      location: "Miami, FL",
      rating: 5.0,
      priceRange: "$400-900",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Contemporary", "Latin", "Ballet"],
      bio: "Professional dancer and choreographer",
      languages: ["English", "Spanish"],
    },
    {
      id: 4,
      name: "David Thompson",
      category: "speakers",
      location: "Chicago, IL",
      rating: 4.7,
      priceRange: "$1000-2000",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Motivational", "Business", "Leadership"],
      bio: "Inspirational speaker and business coach",
      languages: ["English"],
    },
    {
      id: 5,
      name: "Lisa Park",
      category: "singers",
      location: "Nashville, TN",
      rating: 4.9,
      priceRange: "$600-1200",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Country", "Folk", "Acoustic"],
      bio: "Country music artist with multiple chart hits",
      languages: ["English"],
    },
    {
      id: 6,
      name: "Carlos Martinez",
      category: "dancers",
      location: "San Antonio, TX",
      rating: 4.6,
      priceRange: "$350-750",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Salsa", "Bachata", "Tango"],
      bio: "Latin dance instructor and performer",
      languages: ["English", "Spanish"],
    },
  ];
  
  // Mock data for artist submissions
  const mockSubmissions = [
    {
      id: 1,
      name: "Alex Rivera",
      bio: "Passionate musician with 8 years of experience in rock and alternative music.",
      categories: ["Singers", "Musicians"],
      languages: ["English", "Spanish"],
      feeRange: "$500 - $1000",
      location: "Austin, TX",
      status: "pending",
      submittedAt: "2024-01-15",
    },
    {
      id: 2,
      name: "Maya Patel",
      bio: "Contemporary dancer specializing in fusion styles and cultural performances.",
      categories: ["Dancers"],
      languages: ["English", "Hindi"],
      feeRange: "$400 - $800",
      location: "San Francisco, CA",
      status: "approved",
      submittedAt: "2024-01-14",
    },
    {
      id: 3,
      name: "James Wilson",
      bio: "Professional DJ with expertise in wedding and corporate events.",
      categories: ["DJs"],
      languages: ["English"],
      feeRange: "$300 - $700",
      location: "Seattle, WA",
      status: "pending",
      submittedAt: "2024-01-13",
    },
    {
      id: 4,
      name: "Sophie Laurent",
      bio: "Bilingual comedian and speaker specializing in corporate entertainment.",
      categories: ["Comedians", "Speakers"],
      languages: ["English", "French"],
      feeRange: "$800 - $1500",
      location: "Montreal, QC",
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