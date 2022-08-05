import * as React from "react";
import styled from "styled-components";
import { ArtistData } from "../../hooks/useArtist";
import { PrimaryButton } from "../buttons";
import { Row, Spacer } from "../layout";
import { H1, H2 } from "../typography";
import { VerifiedIcon } from "./VerifiedIcon";

export const Hero: React.FC<{ artist: ArtistData }> = ({ artist }) => {
  return (
    <Container>
      <InnerContainer>
        <ProfileBackground src={artist.thumb_url} />
        <ProfileBackgroundDarken />
        <Row>
          <ProfilePicture src={artist.thumb_url} />
        </Row>
        <Spacer size={20} />
        <Row>
          <H1>{artist.name}</H1>
          <Spacer size={5} />
          <VerifiedIcon height="24px" />
        </Row>
        <Spacer size={35} />
        <Row>
          <H2>{artist.tracker_count.toLocaleString()} Followers</H2>
        </Row>
        <Spacer size={35} />
        <PrimaryButton onClick={() => alert("Feature not implemented")}>
          Follow
        </PrimaryButton>
      </InnerContainer>
    </Container>
  );
};

const ProfilePicture = styled.img.attrs({
  alt: "artist",
})`
  border-radius: 150px;
  height: 150px;
  width: 150px;
`;

const ProfileBackground = styled.img.attrs({ alt: "artist" })`
  position: absolute;
  width: 110%;
  height: 110%;
  top: -40px;
  left: -20px;
  right: 0px;
  filter: blur(8px);
  z-index: -10;

  img {
    width: 100%;
    height: 100%;
    margin-top: -5px;
  }
`;

const ProfileBackgroundDarken = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 110%;
  height: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: -5;
`;

const Container = styled.section`
  background-color: white;
  border-radius: 4px;
`;

const InnerContainer = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 30px 50px;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
  min-height: 195px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
