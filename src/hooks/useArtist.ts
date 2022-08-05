import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export type ArtistData = {
  id: number;
  name: string;
  url: string;
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
};

export const useArtist = (artistName: string) => {
  const { data, error } = useSWR<ArtistData>(
    `https://rest.bandsintown.com/artists/${artistName}?app_id=test`,
    fetcher
  );

  return { artist: data, error };
};
