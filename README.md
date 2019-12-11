# Isomorphic Typescript Fullstack Boilerplate

## Goals of this Project

- Provide an isomorphic/universal TypeScript development environment that promotes the sharing of code between the client and server.
  - Provide the benefits of both server-side and client-side rendering with React.
    - The server can easily render the most essential React components for a page using `renderToString()`, providing the benefits of better SEO and reduced time between initial HTTP request and first meaningful user interaction.
    - For less crucial client-side components or parts of the application that are not needed immediately, client-side rendering can be used to load other resources asynchronously while the user interacts with the page.

## Getting started

There are four main npm scripts:

`npm run watch`

starts the web server using `nodemon` and `./dist/server.js` as the entrypoint, with `tsc` running in watch mode. Whenever changes to `.ts` files are made, `tsc` will transpile them to the `./dist` directory, where `nodemon` detects the changes and restarts the `node` server automatically.

`npm run build`

compiles all `.ts` files in the `./src` directory, placing them in `./dist`

`npm run start`

starts the web server using `node` and `./dist/server.js` as the entrypoint.

`npm run test`

runs all `*.test.ts` files in the `./test` directory with teh Jest testing framework, and produces a coverage summary.
