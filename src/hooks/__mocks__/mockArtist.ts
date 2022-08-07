import * as FetcherModule from "../fetcher";
import { ArtistData } from "../useArtist";

export const mockArtist = (artist: Partial<ArtistData> | undefined) => {
  jest
    .spyOn(FetcherModule, "fetcher")
    .mockImplementation(() => Promise.resolve(artist));
};
