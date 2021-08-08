## Description

1. Typescript (NestJS)
2. MongoDB

Most of the app's contents can be found in the `src/codes` directory.

## Configuration

Add a `.env` file to the root of the project
```
DATABASE_HOST=mongodb://localhost
DATABASE_PORT=27018
DATABASE_NAME=jupiter-one
UNLOCK_TIMESPAN=120000
```
If desired, run container version of mongo: `$ docker-compose up`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
