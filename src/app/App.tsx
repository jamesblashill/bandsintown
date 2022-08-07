import * as React from "react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { FontFaces } from "./FontFaces";
import { GlobalStyles } from "./GlobalStyles";

export const App: FC = () => (
  <BrowserRouter>
    <FontFaces />
    <GlobalStyles />
    <AppRoutes />
  </BrowserRouter>
);
