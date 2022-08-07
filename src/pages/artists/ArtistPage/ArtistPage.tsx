import * as React from "react";
import { Helmet } from "react-helmet";
import { useMatch } from "react-router-dom";
import { Page } from "../../../app/Page";
import { Hero } from "../../../components/Hero/Hero";
import { useArtist } from "../../../hooks/useArtist";

export const ArtistPage: React.FC = () => {
  let match = useMatch("/artists/:artistName");
  const { artist, error } = useArtist(match?.params.artistName!);

  if (error) return <p>{error}</p>;
  if (!artist) return <p>Loading...</p>;

  const title = `${
    artist.name
  } Tickets, ${new Date().getFullYear()} Concert Tour Dates`;

  return (
    <Page>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Hero artist={artist} />
    </Page>
  );
};
