# (Next) GraphQL Server

## Setup

First, create a repository on GitHub, clone it and `cd` into the directory.

Then run:

```sh
npx create-next-app --example api-routes-apollo-server .
```

## Development

```sh
yarn dev
```

### Explore the GraphQL API with GraphiQL

- check out http://localhost:3000/api/graphql

### Static Result

- Return a list of all todos (static)
- Return one single todo
- Filter list of todos by `checked`

```graphql
{
  todos(filterChecked: false) {
    id
    title
  }
}
```

```graphql
{
  todo(id: "2") {
    id
    title
    checked
  }
}
```

### Add SQL

Set up the database:

```sh
psql postgres
```

In there run

```sql
CREATE DATABASE todos_next;
CREATE USER todos_next WITH ENCRYPTED PASSWORD 'todos_next';
GRANT ALL PRIVILEGES ON DATABASE todos_next TO todos_next;
```

Add dependencies:

```sh
yarn add dotenv dotenv-cli postgres ley
```

Add the file .env in the project root

```sh
PGHOST=localhost
PGDATABASE=todos_next
PGUSERNAME=todos_next
PGPASSWORD=todos_next
```

Copy the migration folder from https://github.com/nikgraf/upleveled-lessons/tree/master/lesson-next-graphql-server/todos and run the migrations

```sh
yarn dotenv ley up
```

JS to initialize the DB (do not do this in Prod?!? (connection management))

```js
require("dotenv").config();
const postgres = require("postgres");
const sql = postgres();
```

- Return a list of all todos
- Return one single todo
- Filter list of todos by `checked`

### Mutation

- Create a todo

```graphql
# Write your query or mutation here
mutation {
  createTodo(title: "Call my Brother") {
    id
    title
    checked
  }
}
```

### Nesting

What? 🤯

- create manipulated property based on an existing one e.g. slug

## Home work: Add Apollo Client

- will only work on clientside
- for server side just copy: https://github.com/zeit/next.js/tree/master/examples/api-routes-apollo-server-and-client
