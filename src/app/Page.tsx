import * as React from "react";
import styled from "styled-components";

import LogoSVG from "./logo.svg";

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container>
    <Header>
      <img src={`data:image/svg+xml,${LogoSVG}`} />
    </Header>
    <Children>{children}</Children>
  </Container>
);

const Container = styled.section``;

const Header = styled.header`
  padding: 20px 10px;
  border-bottom: 1px solid var(--header-border-color);
  background-color: var(--header-background);
`;

const Children = styled.section`
  padding: 10px;
`;
