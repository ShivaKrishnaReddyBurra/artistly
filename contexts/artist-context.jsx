"use client";

import { createContext, useContext, useState } from "react";

const ArtistContext = createContext(undefined);

export function ArtistProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (artist) => {
    setFavorites((prev) => [...prev, artist]);
  };

  const removeFromFavorites = (artistId) => {
    setFavorites((prev) => prev.filter((artist) => artist.id !== artistId));
  };

  const isFavorite = (artistId) => {
    return favorites.some((artist) => artist.id === artistId);
  };

  return (
    <ArtistContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}

export function useArtist() {
  const context = useContext(ArtistContext);
  if (context === undefined) {
    throw new Error("useArtist must be used within an ArtistProvider");
  }
  return context;
}