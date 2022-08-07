import * as React from "react";
import { Route } from "react-router-dom";
import { ArtistPage } from "./ArtistPage/ArtistPage";

export const createArtistRoutes = () => (
  <Route path="artists">
    <Route path=":artistName" element={<ArtistPage />} />
  </Route>
);
