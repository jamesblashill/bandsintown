import * as React from "react";
import styled from "styled-components";
import { Spacer } from "../components/layout";
import { ArtistSearch } from "../components/Search/ArtistSearch";

import Logo from "./logo.svg";

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container>
    <Header>
      <Logo />
      <Spacer size={20} />
      <ArtistSearch />
    </Header>
    <Children>{children}</Children>
  </Container>
);

const Container = styled.section``;

const Header = styled.header`
  padding: 20px 10px;
  border-bottom: 1px solid var(--header-border-color);
  background-color: var(--header-background);
  display: flex;
  flex-direction: column;
`;

const Children = styled.section`
  padding: 10px;
`;
