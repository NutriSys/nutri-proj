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

## Create
```bash
  GET http://localhost:3000/api/diets
```
## Create
```bash
  POST http://localhost:3000/api/diets
  body : JSON
{
    "name":"example diet",
    "description": "example diet",
    "cals":"example diet"
}
```
## Delete
```bash
  DEL http://localhost:3000/api/diets/{diet_id}
```
## Update 
```bash
  PUT http://localhost:3000/api/diets/{diet_id}
  body: JSON
  {
    "name":"example diet",
    "description": "example diet",
    "cals":"example diet"
}
```


