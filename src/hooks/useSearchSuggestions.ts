import { fakeArtists } from "./fakeArtists";
import { useDebounce } from "./useDebounce";

export type ArtistResult = {
  name: string;
  id: number;
  trackerText: string;
  imageSrc: string;
  properlySizedImageURL: string;
  verifiedSrc: string;
  verified: boolean;
  href: string;
};

// TODO: Could not find public API for this data so faking out for now
export const useSearchSuggestions = (query: string) => {
  // although unecessary when filtering in memory, debouncing is important
  // to not overload an API server with every key press
  const debouncedQuery = useDebounce(query, 300);

  if (debouncedQuery.length === 0) {
    return { artists: [] };
  }

  const artists = fakeArtists.filter((artist) =>
    artist.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return { artists };
};
