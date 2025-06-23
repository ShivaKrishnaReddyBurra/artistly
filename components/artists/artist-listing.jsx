"use client";

import { useState, useEffect, useMemo } from "react";
import { ArtistCard } from "./artist-card";
import { ArtistFilters } from "./artist-filters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, List, SortAsc } from "lucide-react";

export function ArtistListing({ initialArtists }) {
  const [artists, setArtists] = useState(initialArtists);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
    searchTerm: "",
    language: "",
  });
  const [sortBy, setSortBy] = useState("rating");
  const [viewMode, setViewMode] = useState("grid");

  // Enhanced filtering logic
  const filteredArtists = useMemo(() => {
    let filtered = [...artists];

    // Search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter((artist) =>
        artist.name.toLowerCase().includes(searchLower) ||
        artist.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchLower)
        ) ||
        artist.bio.toLowerCase().includes(searchLower)
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter((artist) => 
        artist.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Location filter - improved to handle partial matches
    if (filters.location) {
      filtered = filtered.filter((artist) => {
        const artistLocation = artist.location.toLowerCase();
        const filterLocation = filters.location.toLowerCase();
        // Match by city or state
        return artistLocation.includes(filterLocation) || 
               artistLocation.split(',')[0].trim() === filterLocation.split(',')[0].trim();
      });
    }

    // Language filter - improved to handle exact language matches
    if (filters.language) {
      filtered = filtered.filter((artist) =>
        artist.languages.some(lang => 
          lang.toLowerCase() === filters.language.toLowerCase()
        )
      );
    }

    // Price range filter - improved to handle rupee format
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(val => parseInt(val));
      filtered = filtered.filter((artist) => {
        // Extract price range from artist.priceRange (e.g., "₹25,000-65,000")
        const priceMatch = artist.priceRange.match(/₹([\d,]+)-([\d,]+)/);
        if (priceMatch) {
          const artistMinPrice = parseInt(priceMatch[1].replace(/,/g, ''));
          const artistMaxPrice = parseInt(priceMatch[2].replace(/,/g, ''));
          
          // Check if artist's price range overlaps with filter range
          return (artistMinPrice <= max && artistMaxPrice >= min);
        }
        return true;
      });
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          const priceA = parseInt(a.priceRange.match(/₹([\d,]+)/)?.[1]?.replace(/,/g, '') || '0');
          const priceB = parseInt(b.priceRange.match(/₹([\d,]+)/)?.[1]?.replace(/,/g, '') || '0');
          return priceA - priceB;
        case "price-high":
          const priceA2 = parseInt(a.priceRange.match(/₹([\d,]+)/)?.[1]?.replace(/,/g, '') || '0');
          const priceB2 = parseInt(b.priceRange.match(/₹([\d,]+)/)?.[1]?.replace(/,/g, '') || '0');
          return priceB2 - priceA2;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [artists, filters, sortBy]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className="lg:w-1/4">
        <ArtistFilters 
          filters={filters} 
          onFiltersChange={setFilters} 
          totalCount={filteredArtists.length} 
        />
      </div>

      {/* Artists Content */}
      <div className="lg:w-3/4">
        {/* Header with sorting and view options */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredArtists.length} Artist{filteredArtists.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-600">Discover talented performers for your events</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <SortAsc className="h-4 w-4 text-gray-500" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Artists Grid/List */}
        {filteredArtists.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Grid className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Artists Found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any artists matching your current filters. Try adjusting your search criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setFilters({
                  category: "",
                  location: "",
                  priceRange: "",
                  searchTerm: "",
                  language: "",
                })}
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        ) : (
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
          }>
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} viewMode={viewMode} />
            ))}
          </div>
        )}

        {/* Load More Button (for pagination) */}
        {filteredArtists.length > 0 && filteredArtists.length >= 12 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Artists
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}