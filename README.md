# Typescript Server

A web server boilerplate built on TypeScript and MongoDB.

## Getting Started

### `npm` Scripts

There are four main `npm` scripts that you should familiarise yourself with:

`npm run build`: Runs the TypeScript compiler to generate `.js` files and outputs them to `dist`.

`npm start`: Runs `dist/server.js` with `node`. You will need to make sure you have previously run `npm run build` to compile `src/server.ts`. This script should be used when running the server in production.

`npm run dev`: Runs `src/server.ts` with `nodemon` and `ts-node`, resulting in a development workflow that avoids `tsc` compilation steps and restarts `ts-node` as changes are made to `.ts` files in `src`. If you would prefer to run `tsc` compiled `.js` files in watch mode, you can redefine `npm run dev` to point to `npm run dev:js`.

`npm run test`: Runs all tests with `jest` and outputs a coverage report. Tests can be placed in either a `__tests__` directory inside any level of the `src` folder, or in a separate `tests` directory at the root of the project folder. Tests should be named `*.test.ts` or `*.test.js`.

### MongoDB and Docker

To create a local MongoDB container, simply run `docker-compose up -d`. This will create appropriate volumes for MongoDB data and configuration, as well as make the `mongo-init.sh` script available to the container to seed the database with a non-root user for the application to use.
