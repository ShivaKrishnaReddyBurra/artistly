import { Hero } from "@/components/home/hero";
import { CategoryCards } from "@/components/home/category-cards";
import { FeaturedArtists } from "@/components/home/featured-artists";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryCards />
      <FeaturedArtists />
    </div>
  );
}