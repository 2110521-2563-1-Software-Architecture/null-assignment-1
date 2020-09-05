<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Information

This project use Nest JS

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Description

API for list, get, insert, delete books

## Install dependency

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

## API
the app runs at `localhost:3000`

see swagger documentation at `/api`

base path `/books`. End points are:
APIs:
 - `GET /books/list`: get all books
 - `GET /get?id=123`: get a book by ID
 - `DELETE /delete?id=123`: delete a book by ID
 - `POST /insert`: insert a book 

## Client

API client is avaiable in `client.js`, run it with no arguments to see help
