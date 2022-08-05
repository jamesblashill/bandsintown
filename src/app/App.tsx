import * as React from "react";
import { FontFaces } from "./FontFaces";
import { GlobalStyles } from "./GlobalStyles";
import { Hero } from "../components/Hero/Hero";
import { Page } from "./Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroPage } from "../pages/HeroPage/HeroPage";

export const App: React.FC = () => (
  <Page>
    <FontFaces />
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="artists">
          <Route path=":artistName" element={<HeroPage />} />
        </Route>
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
    </Router>
  </Page>
);
