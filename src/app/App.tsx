import * as React from "react";
import { FontFaces } from "./FontFaces";
import { GlobalStyles } from "./GlobalStyles";
import { Hero } from "../components/Hero/Hero";
import { Page } from "./Page";

export const App: React.FC = () => (
  <Page>
    <FontFaces />
    <GlobalStyles />
    <Hero />
  </Page>
);
