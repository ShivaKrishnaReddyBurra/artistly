import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ArtistProvider } from "@/contexts/artist-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artistly - Performing Artist Booking Platform",
  description:
    "Connect event planners with talented performing artists. Browse, shortlist, and book artists for your events.",
  keywords: "artist booking, event planning, performers, musicians, dancers, speakers",
  authors: [{ name: "Artistly Team" }],
  openGraph: {
    title: "Artistly - Performing Artist Booking Platform",
    description: "Connect event planners with talented performing artists",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ArtistProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </ArtistProvider>
      </body>
    </html>
  );
}