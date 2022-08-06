import useSWR from "swr";
import { useDebounce } from "./useDebounce";

const fetcher = (url) => fetch(url).then((res) => res.json());

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

  const artists = fakeResults.artists.filter((artist) =>
    artist.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return { artists };
};

const fakeResults = {
  artists: [
    {
      name: "d",
      id: 248222,
      trackerText: "7,959 Followers",
      imageSrc: "https://photos.bandsintown.com/thumb/254324.jpeg",
      properlySizedImageURL: "https://media.bandsintown.com/46x46/254324.webp",
      verifiedSrc:
        "https://assets.prod.bandsintown.com/images/verifiedCheck.svg",
      verified: true,
      href: "https://www.bandsintown.com/a/248222-d?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      name: "D A",
      id: 3950493,
      trackerText: "55 Followers",
      imageSrc:
        "https://assets.prod.bandsintown.com/images/homeIcon/festivalPlaceHolderImage/06.png",
      properlySizedImageURL:
        "https://assets.prod.bandsintown.com/images/homeIcon/festivalPlaceHolderImage/05.webp",
      verifiedSrc: null,
      verified: false,
      href: "https://www.bandsintown.com/a/3950493-d-a?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      name: "A D",
      id: 3147194,
      trackerText: "92 Followers",
      imageSrc:
        "https://assets.prod.bandsintown.com/images/homeIcon/festivalPlaceHolderImage/06.png",
      properlySizedImageURL:
        "https://assets.prod.bandsintown.com/images/homeIcon/festivalPlaceHolderImage/02.webp",
      verifiedSrc: null,
      verified: false,
      href: "https://www.bandsintown.com/a/3147194-a-d?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      name: "Drake",
      id: 1488,
      trackerText: "6,640,384 Followers",
      imageSrc: "https://photos.bandsintown.com/thumb/6527020.jpeg",
      properlySizedImageURL: "https://media.bandsintown.com/46x46/6527020.webp",
      verifiedSrc:
        "https://assets.prod.bandsintown.com/images/verifiedCheck.svg",
      verified: true,
      href: "https://www.bandsintown.com/a/1488-drake?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      name: "David Guetta",
      id: 26317,
      trackerText: "3,968,154 Followers",
      imageSrc: "https://photos.bandsintown.com/thumb/11035065.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/11035065.webp",
      verifiedSrc:
        "https://assets.prod.bandsintown.com/images/verifiedCheck.svg",
      verified: true,
      href: "https://www.bandsintown.com/a/26317-david-guetta?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      name: "Demi Lovato",
      id: 22843,
      trackerText: "3,538,622 Followers",
      imageSrc: "https://photos.bandsintown.com/thumb/12533372.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/12533372.webp",
      verifiedSrc:
        "https://assets.prod.bandsintown.com/images/verifiedCheck.svg",
      verified: true,
      href: "https://www.bandsintown.com/a/22843-demi-lovato?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      name: "Daft Punk",
      id: 263,
      trackerText: "2,992,904 Followers",
      imageSrc: "https://photos.bandsintown.com/thumb/226052.jpeg",
      properlySizedImageURL: "https://media.bandsintown.com/46x46/226052.webp",
      verifiedSrc:
        "https://assets.prod.bandsintown.com/images/verifiedCheck.svg",
      verified: true,
      href: "https://www.bandsintown.com/a/263-daft-punk?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      name: "Disturbed",
      id: 68,
      trackerText: "2,537,375 Followers",
      imageSrc: "https://photos.bandsintown.com/thumb/8842395.jpeg",
      properlySizedImageURL: "https://media.bandsintown.com/46x46/8842395.webp",
      verifiedSrc:
        "https://assets.prod.bandsintown.com/images/verifiedCheck.svg",
      verified: true,
      href: "https://www.bandsintown.com/a/68-disturbed?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
  ],
  events: [
    {
      artistName: "The War on Drugs",
      streamingEvent: false,
      eventDate: "2022-08-28T20:00:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-08-29T00:00:00.000Z",
      eventTZ: "America/Toronto",
      imageSrc: "https://photos.bandsintown.com/thumb/11547165.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/11547165.webp",
      venue: { name: "RBC Echo Beach", location: "Toronto, ON" },
      href: "https://www.bandsintown.com/e/103209288-the-war-on-drugs-at-rbc-echo-beach?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      artistName: "Ride",
      streamingEvent: true,
      eventDate: "2022-10-28T20:00:00",
      eventDateEnds: "2022-10-28T23:30:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-10-28T19:00:00.000Z",
      eventTZ: "Europe/London",
      imageSrc: "https://photos.bandsintown.com/thumb/9077455.jpeg",
      properlySizedImageURL: "https://media.bandsintown.com/46x46/9077455.webp",
      venue: { name: "Live Stream", location: "" },
      href: "https://www.bandsintown.com/e/103366918-ride-at-live-stream?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      artistName: "First Aid Kit",
      streamingEvent: false,
      eventDate: "2022-08-17T19:30:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-08-17T23:30:00.000Z",
      eventTZ: "America/Toronto",
      imageSrc: "https://photos.bandsintown.com/thumb/12145713.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/12145713.webp",
      venue: { name: "RBC Echo Beach", location: "Toronto, ON" },
      href: "https://www.bandsintown.com/e/103097720-first-aid-kit-at-rbc-echo-beach?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      artistName: "Death From Above 1979",
      streamingEvent: false,
      eventDate: "2022-10-15T19:00:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-10-15T23:00:00.000Z",
      eventTZ: "America/Toronto",
      imageSrc: "https://photos.bandsintown.com/thumb/11547412.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/11547412.webp",
      venue: { name: "Guelph Concert Theatre", location: "Guelph, ON" },
      href: "https://www.bandsintown.com/e/102760400-death-from-above-1979-at-guelph-concert-theatre?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      artistName: "The Head And The Heart",
      streamingEvent: false,
      eventDate: "2022-09-27T19:00:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-09-27T23:00:00.000Z",
      eventTZ: "America/Toronto",
      imageSrc: "https://photos.bandsintown.com/thumb/12030344.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/12030344.webp",
      venue: { name: "RBC Echo Beach", location: "Toronto, ON" },
      href: "https://www.bandsintown.com/e/103108613-the-head-and-the-heart-at-rbc-echo-beach?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      artistName: "Iron Maiden",
      streamingEvent: false,
      eventDate: "2022-10-12T19:30:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-10-12T23:30:00.000Z",
      eventTZ: "America/Toronto",
      imageSrc: "https://photos.bandsintown.com/thumb/11200712.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/11200712.webp",
      venue: { name: "FirstOntario Centre", location: "Hamilton, ON" },
      href: "https://www.bandsintown.com/e/1023617876-iron-maiden-at-firstontario-centre?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      artistName: "Mat and Savanna Shaw",
      streamingEvent: true,
      eventDate: "2022-08-06T19:00:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-08-07T01:00:00.000Z",
      eventTZ: "America/Denver",
      imageSrc: "https://photos.bandsintown.com/thumb/12508936.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/12508936.webp",
      venue: { name: "Live Stream", location: "" },
      href: "https://www.bandsintown.com/e/103470304-mat-and-savanna-shaw-at-live-stream?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
    {
      artistName: "The Decemberists",
      streamingEvent: true,
      eventDate: "2022-08-12T21:00:00",
      eventDateRange: null,
      eventDateDisplayRule: "datetime",
      localStartTime: "2022-08-13T03:00:00.000Z",
      eventTZ: "America/Denver",
      imageSrc: "https://photos.bandsintown.com/thumb/12076966.jpeg",
      properlySizedImageURL:
        "https://media.bandsintown.com/46x46/12076966.webp",
      venue: { name: "Live Stream", location: "" },
      href: "https://www.bandsintown.com/e/103639102-the-decemberists-at-live-stream?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar",
    },
  ],
  festivals: [],
  venues: [],
};
