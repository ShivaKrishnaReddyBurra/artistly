import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";

export function ArtistCard({ artist }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{artist.name}</h3>
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
  );
}