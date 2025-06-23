import { ArtistListing } from "@/components/artists/artist-listing";
import { getArtists } from "@/lib/data";

export const metadata = {
  title: "Browse Artists - Artistly",
  description: "Discover talented performing artists for your events. Filter by category, location, and price range.",
};

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Browse Artists</h1>
        <p className="text-muted-foreground">Discover talented performing artists for your events</p>
      </div>
      <ArtistListing initialArtists={artists} />
    </div>
  );
}