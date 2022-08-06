import * as React from "react";
import { Helmet } from "react-helmet";
import { useMatch } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { useArtist } from "../../hooks/useArtist";

export const HeroPage: React.FC = () => {
  let match = useMatch("/artists/:artistName");
  const { artist, error } = useArtist(match?.params.artistName!);

  if (error) return <p>"An error has occurred."</p>;
  if (!artist) return <p>"Loading..."</p>;

  const title = `${
    artist.name
  } Tickets, ${new Date().getFullYear()} Concert Tour Dates`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Hero artist={artist} />
    </>
  );
};
