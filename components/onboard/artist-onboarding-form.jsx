"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

// Form validation schema
const artistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  bio: z.string().min(50, "Bio must be at least 50 characters long"),
  categories: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  feeRange: z.string().min(1, "Please select a fee range"),
  location: z.string().min(2, "Location is required"),
  profileImage: z.any().optional(),
});

const categories = ["Singers", "Dancers", "Speakers", "DJs", "Musicians", "Comedians"];
const languages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Mandarin", "Hindi"];
const feeRanges = ["Under $500", "$500 - $1000", "$1000 - $2000", "$2000 - $5000", "Over $5000"];

export function ArtistOnboardingForm() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(artistSchema),
  });

  const handleCategoryChange = (category, checked) => {
    const updated = checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category);

    setSelectedCategories(updated);
    setValue("categories", updated);
  };

  const handleLanguageChange = (language, checked) => {
    const updated = checked ? [...selectedLanguages, language] : selectedLanguages.filter((l) => l !== language);

    setSelectedLanguages(updated);
    setValue("languages", updated);
  };

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Artist submission:", data);

      toast({
        title: "Application Submitted!",
        description: "Your artist profile has been submitted for review. We'll contact you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Artist Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" {...register("name")} placeholder="Enter your full name" />
                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio *</Label>
                <Textarea
                  id="bio"
                  {...register("bio")}
                  placeholder="Tell us about yourself, your experience, and what makes you unique..."
                  rows={4}
                />
                {errors.bio && <p className="text-sm text-red-600">{errors.bio.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input id="location" {...register("location")} placeholder="City, State" />
                {errors.location && <p className="text-sm text-red-600">{errors.location.message}</p>}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories *</h3>
              <p className="text-sm text-gray-600">Select all categories that apply to your performance style</p>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                    />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
              {errors.categories && <p className="text-sm text-red-600">{errors.categories.message}</p>}
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Languages Spoken *</h3>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={language}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={(checked) => handleLanguageChange(language, checked)}
                    />
                    <Label htmlFor={language}>{language}</Label>
                  </div>
                ))}
              </div>
              {errors.languages && <p className="text-sm text-red-600">{errors.languages.message}</p>}
            </div>

            {/* Fee Range */}
            <div className="space-y-2">
              <Label htmlFor="feeRange">Fee Range *</Label>
              <Select onValueChange={(value) => setValue("feeRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your fee range" />
                </SelectTrigger>
                <SelectContent>
                  {feeRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.feeRange && <p className="text-sm text-red-600">{errors.feeRange.message}</p>}
            </div>

            {/* Profile Image */}
            <div className="space-y-2">
              <Label htmlFor="profileImage">Profile Image (Optional)</Label>
              <Input id="profileImage" type="file" accept="image/*" {...register("profileImage")} />
              <p className="text-sm text-gray-600">Upload a professional headshot or performance photo</p>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </>
  );
}