import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredArtists = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "Singer",
    location: "New York, NY",
    rating: 4.9,
    priceRange: "$500-1000",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Jazz", "Pop", "Soul"],
  },
  {
    id: 2,
    name: "Michael Chen",
    category: "DJ",
    location: "Los Angeles, CA",
    rating: 4.8,
    priceRange: "$300-800",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Electronic", "House", "Wedding"],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    category: "Dancer",
    location: "Miami, FL",
    rating: 5.0,
    priceRange: "$400-900",
    image: "/placeholder.svg?height=300&width=300",
    specialties: ["Contemporary", "Latin", "Ballet"],
  },
];

export function FeaturedArtists() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover some of our top-rated performing artists</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
            <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{artist.name}</h3>
                    <Badge variant="secondary">{artist.category}</Badge>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{artist.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{artist.location}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {artist.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{artist.priceRange}</span>
                  <Button size="sm">Ask for Quote</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/artists">View All Artists</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}