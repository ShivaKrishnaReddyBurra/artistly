"use client";

import { useState, useEffect } from "react";
import { ArtistCard } from "./artist-card";
import { ArtistFilters } from "./artist-filters";

export function ArtistListing({ initialArtists }) {
  const [artists, setArtists] = useState(initialArtists);
  const [filteredArtists, setFilteredArtists] = useState(initialArtists);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
  });

  // Filter logic
  useEffect(() => {
    let filtered = artists;

    if (filters.category) {
      filtered = filtered.filter((artist) => artist.category.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.location) {
      filtered = filtered.filter((artist) => artist.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.priceRange) {
      filtered = filtered.filter((artist) => {
        const [min, max] = filters.priceRange.split("-").map(Number);
        const artistMin = Number.parseInt(artist.priceRange.split("-")[0].replace("$", ""));
        return artistMin >= min && artistMin <= max;
      });
    }

    setFilteredArtists(filtered);
  }, [filters, artists]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className="lg:w-1/4">
        <ArtistFilters filters={filters} onFiltersChange={setFilters} totalCount={filteredArtists.length} />
      </div>

      {/* Artists Grid */}
      <div className="lg:w-3/4">
        {filteredArtists.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}