import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Music, MessageSquare, Headphones } from "lucide-react";

const categories = [
  {
    name: "Singers",
    icon: Mic,
    description: "Vocal artists for all genres and events",
    count: "150+ Artists",
    href: "/artists?category=singers",
  },
  {
    name: "Dancers",
    icon: Music,
    description: "Professional dancers and choreographers",
    count: "120+ Artists",
    href: "/artists?category=dancers",
  },
  {
    name: "Speakers",
    icon: MessageSquare,
    description: "Motivational and keynote speakers",
    count: "80+ Artists",
    href: "/artists?category=speakers",
  },
  {
    name: "DJs",
    icon: Headphones,
    description: "Professional DJs for all occasions",
    count: "100+ Artists",
    href: "/artists?category=djs",
  },
];

export function CategoryCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect artist for your event from our diverse categories of talented performers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.name} href={category.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                    <div className="text-sm text-purple-600 font-medium">{category.count}</div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}