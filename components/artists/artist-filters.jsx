"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

const categories = [
  { value: "singers", label: "Singers" },
  { value: "dancers", label: "Dancers" },
  { value: "speakers", label: "Speakers" },
  { value: "djs", label: "DJs" },
  { value: "musicians", label: "Musicians" },
  { value: "comedians", label: "Comedians" }
];

const priceRanges = [
  { label: "Under ₹25,000", value: "0-25000" },
  { label: "₹25,000 - ₹50,000", value: "25000-50000" },
  { label: "₹50,000 - ₹1,00,000", value: "50000-100000" },
  { label: "₹1,00,000 - ₹2,00,000", value: "100000-200000" },
  { label: "Over ₹2,00,000", value: "200000-1000000" },
];

const locations = [
  "Mumbai, Maharashtra",
  "Delhi, Delhi",
  "Bangalore, Karnataka",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Hyderabad, Telangana",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Jaipur, Rajasthan",
  "Surat, Gujarat",
  "Kochi, Kerala",
  "Gurgaon, Haryana",
  "Noida, Uttar Pradesh",
  "Vadodara, Gujarat",
  "Chandigarh, Punjab"
];

const languages = [
  "Hindi", "English", "Tamil", "Telugu", "Bengali", "Marathi", 
  "Gujarati", "Punjabi", "Malayalam", "Kannada", "Urdu", "Rajasthani", "French"
];

export function ArtistFilters({ filters, onFiltersChange, totalCount }) {
  const handleFilterChange = (key, value) => {
    // Clear the filter if the same value is selected or if "all" is selected
    const newValue = value === "all" || value === filters[key] ? "" : value;
    onFiltersChange({
      ...filters,
      [key]: newValue,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: "",
      location: "",
      priceRange: "",
      searchTerm: "",
      language: "",
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  // Helper function to get display value for location filter
  const getLocationDisplayValue = (locationValue) => {
    const location = locations.find(loc => loc.toLowerCase() === locationValue);
    return location ? location.split(',')[0] : locationValue;
  };

  // Helper function to get display value for language filter
  const getLanguageDisplayValue = (languageValue) => {
    return languages.find(lang => lang.toLowerCase() === languageValue) || languageValue;
  };

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </div>
          <div className="text-sm font-normal text-gray-600">
            {totalCount} artist{totalCount !== 1 ? 's' : ''}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Artists</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="search"
              placeholder="Search by name or specialty..."
              value={filters.searchTerm || ""}
              onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select 
            value={filters.category || "all"} 
            onValueChange={(value) => handleFilterChange("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select 
            value={filters.location || "all"} 
            onValueChange={(value) => handleFilterChange("location", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Language Filter */}
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select 
            value={filters.language || "all"} 
            onValueChange={(value) => handleFilterChange("language", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              {languages.map((language) => (
                <SelectItem key={language} value={language.toLowerCase()}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-2">
          <Label htmlFor="priceRange">Price Range</Label>
          <Select 
            value={filters.priceRange || "all"} 
            onValueChange={(value) => handleFilterChange("priceRange", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Price Ranges" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Price Ranges</SelectItem>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="space-y-2">
            <Label>Active Filters</Label>
            <div className="flex flex-wrap gap-2">
              {filters.category && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {categories.find(c => c.value === filters.category)?.label}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-red-500" 
                    onClick={() => handleFilterChange("category", "")}
                  />
                </Badge>
              )}
              {filters.location && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {getLocationDisplayValue(filters.location)}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-red-500" 
                    onClick={() => handleFilterChange("location", "")}
                  />
                </Badge>
              )}
              {filters.priceRange && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {priceRanges.find(p => p.value === filters.priceRange)?.label}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-red-500" 
                    onClick={() => handleFilterChange("priceRange", "")}
                  />
                </Badge>
              )}
              {filters.language && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {getLanguageDisplayValue(filters.language)}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-red-500" 
                    onClick={() => handleFilterChange("language", "")}
                  />
                </Badge>
              )}
              {filters.searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: "{filters.searchTerm}"
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-red-500" 
                    onClick={() => handleFilterChange("searchTerm", "")}
                  />
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Clear Filters */}
        <Button 
          variant="outline" 
          onClick={clearFilters} 
          className="w-full"
          disabled={activeFiltersCount === 0}
        >
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
}