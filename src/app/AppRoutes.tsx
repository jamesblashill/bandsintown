import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { createArtistRoutes } from "../pages/artists/createArtistRoutes";

export const AppRoutes: React.FC = () => (
  <Routes>
    {createArtistRoutes()}
    <Route path="*" element={<p>Page not found!</p>} />
  </Routes>
);
