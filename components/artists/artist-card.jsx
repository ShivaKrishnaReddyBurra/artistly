"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, MapPin, Phone, Mail, Calendar, Languages, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function ArtistCard({ artist }) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={artist.image || "/placeholder.svg"} 
                alt={artist.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{artist.name}</h3>
                  <Badge variant="secondary" className="capitalize">{artist.category}</Badge>
                </div>
                <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-900">{artist.rating}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="text-sm line-clamp-1">{artist.location}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {artist.specialties.slice(0, 3).map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {artist.specialties.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{artist.specialties.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{artist.priceRange}</span>
                <Button size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">{artist.name}</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Image and Basic Info */}
            <div className="space-y-4">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image 
                  src={artist.image || "/placeholder.svg"} 
                  alt={artist.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-lg font-semibold">{artist.rating}</span>
                  <span className="text-gray-600">(150+ reviews)</span>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1 capitalize">
                  {artist.category}
                </Badge>
              </div>

              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{artist.location}</span>
              </div>

              <div className="text-center p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
                <div className="text-2xl font-bold mb-1">{artist.priceRange}</div>
                <div className="text-sm text-gray-600">Starting Price</div>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-purple-600" />
                  About
                </h3>
                <p className="text-gray-700 leading-relaxed">{artist.bio}</p>
              </div>

              <Separator />

              {/* Specialties */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {artist.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="px-3 py-1">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Languages */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Languages className="h-5 w-5 mr-2 text-blue-600" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artist.languages.map((language) => (
                    <Badge key={language} variant="secondary" className="px-3 py-1">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Contact Actions */}
              <div className="space-y-3">
                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Artist
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Check Availability
                </Button>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Quick Facts</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Response time: Within 24 hours</li>
                  <li>• Travel radius: 50km from base location</li>
                  <li>• Advance booking: 2 weeks minimum</li>
                  <li>• Cancellation: 48 hours notice required</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}