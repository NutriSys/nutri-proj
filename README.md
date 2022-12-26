## Installation

```bash
$ npm install
```

## Running Postgres Container
```bash
$ docker-compose up
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
# Testable endpoints

Testable endpoints are provided as a Postman 
collection in the root directory of the project.
![Postman](https://www.zeljkovic.sh/wp-content/uploads/2022/02/1_QOx_tPV5wJnhTzAGhfIiLA.png)

## Steps to run the collection in Postman
1. Install the project
2. Run docker or start PG database
3. Import the collection into Postman
4. Test each endpoint provided.
