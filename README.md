# Typescript Server Boilerplate

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
