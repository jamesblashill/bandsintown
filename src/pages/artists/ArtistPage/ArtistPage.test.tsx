import { screen, waitFor } from "@testing-library/dom";
import { renderApp } from "../../../app/testing/renderApp";
import { mockArtist } from "../../../hooks/__mocks__/mockArtist";
import { TaylorSwift } from "../../../hooks/__mocks__/TaylorSwift";

describe("<ArtistPage />", () => {
  test("it renders an artist", async () => {
    mockArtist(TaylorSwift);
    renderApp(`/artists/${TaylorSwift.name}`);

    expect(await screen.findByText(`${TaylorSwift.name}`)).toBeInTheDocument();
    expect(
      await screen.findByText(
        `${TaylorSwift.tracker_count.toLocaleString()} Followers`
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("img", { name: "artist" })
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(document.title.includes(TaylorSwift.name)).toBe(true);
    });
  });

  test("handles API error", async () => {
    const error = "Not Found";
    mockArtist({ error });
    renderApp(`/artists/Guns N' Roses`);

    expect(await screen.findByText(error)).toBeInTheDocument();
  });
});
