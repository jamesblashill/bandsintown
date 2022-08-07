# bandsintown

Replicating the artist page on https://www.bandsintown.com/

## Get Started

```
$ yarn install
$ yarn start
```

Open http://localhost:1234/artists/Led%20Zeppelin in your browser!

![image](https://user-images.githubusercontent.com/22937311/183303894-8f919200-ba5f-405c-82a6-e5833574905c.png)

## Strategy

This codebase was constructed piece by piece, rather than starting from a typical `create-react-app` setup. The intent here was only add features as they become necessary to gain a better understanding all aspects of the build/configuration.

## Technology Used

1. Typescript, React, styled-components, react-router and swr are the major libraries in use for crafting most of the application source code.
2. Jest, React Testing Libary was used for component testing
3. ParcelJS was chosen to build the application due to it's very easy setup

## What was built

1. The application infrastructure whose responsibility is to render the application, setup global styling, page layout & routing
2. The artist page whose responsibility is to fetch the artist referenced by the url path
3. The Hero component which displays artist image and followers
4. The ArtistSearch component which handles of input of artist search queries, "fake" fetches the results and renders them

## What was not built

As this was a self time-boxed activity, here's what was not done:

1. Component testing for artist search was skipped
2. Using real backend data for artist search was skipped as there does not appear to be a public API for search
3. Mobile responsiveness was skipped and all focus was put into mobile viewport only (~400px)
4. Serverside rendering was not done
5. Prefetching images when loading artists was skipped (depending on your network connection this will lead to a "janky" experience as images flicker in)
6. Visual & E2E tests were skipped
7. tsconfig & eslint optimization was skipped
8. PR checks were skipped
9. No attempt to deploy in a production environment was made
10. Accessibility was skipped

## Testing

Only a single test file was written to demonstrate an approach to component testing. The strategy chosen was to attempt to render as much of the application as possible in a Jest / jsdom environment. That is not to say that specific components could not be isolated and tested in more detail, but the suggestion is that these full-app rendering tests account for a larger portion of the overall test coverage.
