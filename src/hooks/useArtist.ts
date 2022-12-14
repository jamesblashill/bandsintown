import useSWR from "swr";
import { fetcher } from "./fetcher";

export type ArtistData = {
  id: string;
  name: string;
  url: string;
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
  error?: string;
};

export const useArtist = (artistName: string) => {
  const { data, error } = useSWR<ArtistData>(
    `https://rest.bandsintown.com/artists/${encodeURIComponent(
      artistName
    )}?app_id=test`,
    fetcher
  );

  if (!data) {
    return { error: "No artist information available" };
  } else if (data.error) {
    return { error: data.error };
  }

  return { artist: data, error };
};
