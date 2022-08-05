import * as React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../buttons";
import { Row, Spacer } from "../layout";
import { H1, H2 } from "../typography";
import { VerifiedIcon } from "./VerifiedIcon";

export const Hero: React.FC = () => (
  <Container>
    <InnerContainer>
      <ProfileBackground />
      <ProfileBackgroundDarken />
      <Row>
        <ProfilePicture />
      </Row>
      <Spacer size={20} />
      <Row>
        <H1>Taylor Swift</H1>
        <Spacer size={5} />
        <VerifiedIcon height="24px" />
      </Row>
      <Spacer size={35} />
      <Row>
        <H2>7,249,790 Followers</H2>
      </Row>
      <Spacer size={35} />
      <PrimaryButton>Follow</PrimaryButton>
    </InnerContainer>
  </Container>
);

const ProfilePicture = styled.img.attrs({
  src: "https://photos.bandsintown.com/thumb/11030358.jpeg",
  alt: "artist",
})`
  border-radius: 150px;
  height: 150px;
  width: 150px;
`;

const ProfileBackground: React.FC = () => (
  <ProfileBackgroundPicture>
    <source
      type="image/webp"
      srcSet="https://media.bandsintown.com/100x100/11030358.webp"
    ></source>
    <img
      src="https://photos.bandsintown.com/thumb/11030358.jpeg"
      alt="artist"
    />
  </ProfileBackgroundPicture>
);

const ProfileBackgroundPicture = styled.picture`
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
