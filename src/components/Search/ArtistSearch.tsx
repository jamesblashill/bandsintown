import * as React from "react";
import { Portal } from "react-portal";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ArtistResult,
  useSearchSuggestions,
} from "../../hooks/useSearchSuggestions";
import { VerifiedIcon } from "../Hero/VerifiedIcon";
import { Column, Row, Spacer } from "../layout";
import Loupe from "./loupe.svg";

type SearchProps = {
  placeholder?: string;
};

export const ArtistSearch: React.FC<SearchProps> = ({ placeholder }) => {
  const [query, setQuery] = React.useState("");
  const [hasFocus, setHasFocus] = React.useState(false);
  const { artists } = useSearchSuggestions(query);
  const handleQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const handleArtistClicked = () => {
    setHasFocus(false);
    setQuery("");
  };

  const showResults = query.length > 0 && hasFocus;
  // const showResults = true;

  return (
    <Container>
      <Portal>
        {showResults && <Overlay onClick={() => setHasFocus(false)} />}
        <InputContainer>
          <Loupe />
          <input
            type="text"
            value={query}
            onChange={handleQueryChanged}
            placeholder="Search for artists"
            onFocus={() => setHasFocus(true)}
          />
        </InputContainer>
        {showResults && (
          <ArtistResults onClick={handleArtistClicked}>
            {artists.map((artist) => (
              <ArtistListItem artist={artist as any} key={artist.id} />
            ))}
          </ArtistResults>
        )}
      </Portal>
    </Container>
  );
};

const ArtistListItem: React.FC<{ artist: ArtistResult }> = ({ artist }) => {
  return (
    <Link to={`/artists/${artist.name}`}>
      <ArtistListItemContainer>
        <img src={artist.imageSrc} />
        <Spacer size={10} />
        <Column>
          <Row>
            <Title>{artist.name}</Title>
            {artist.verified && <VerifiedIcon />}
          </Row>
          <Subtitle>{artist.trackerText}</Subtitle>
        </Column>
      </ArtistListItemContainer>
    </Link>
  );
};

const Title = styled.div`
  display: inline-block;
  color: #259998;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
`;
const Subtitle = styled.div`
  color: #8f8f8f;
  font-size: 12px;
  font-weight: 500;
`;
const ArtistResults = styled.div`
  position: absolute;
  top: 125px;
  left: 9px;
  width: calc(100% - 20px);
  border: solid 1px #cdcdcd;
  border-radius: 3px;
  appearance: none;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
  margin-bottom: 40px;
`;
const ArtistListItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white0);
  padding: 10px;
  border: 1px solid #cdcdcd;
  border-top: 0;
  cursor: pointer;
  height: 70px;
  width: 100%;
  text-decoration: none;
  box-sizing: border-box;

  img {
    width: 46px;
    height: 46px;
    border-radius: 23px;
  }

  &:hover {
    background-color: var(--grey0);
  }
`;
const Container = styled.div`
  height: 47px;
`;
const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
`;

const InputContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 67px;
  left: 0;
  width: calc(100% - 20px);
  padding: 10px;

  svg {
    position: absolute;
    left: 24px;
    top: 28px;
    z-index: 1;
  }

  input {
    font-size: 16px;
    color: #8f8f8f;
    font-weight: 500;
    height: 47px;
    width: 100%;
    border: solid 1px #cdcdcd;
    border-radius: 3px;
    appearance: none;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
    padding: 1px 10px 0px 37px;
    outline: none;
    box-sizing: border-box;
    position: relative;
    top: 2px;
  }
`;
