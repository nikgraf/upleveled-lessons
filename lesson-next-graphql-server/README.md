# (Next) GraphQL Server

https://github.com/zeit/next.js/tree/master/examples/api-routes-graphql

```
yarn create next-app --example api-routes-graphql api-routes-graphql-app
```

```
yarn dev
```

## Let's manipulate the data and add a name

## Debugging

- check out http://localhost:3000/api/graphql
- add logging
- move it away from initial props -> only client side

## What do we need (in the Apollo Server case)

- typeDefs
- resolvers

Nesting, what? 🤯

## Exercise

1. Create a query recipies.
2. It returns a list of recipies.
3. A recipie has a field title of type String and a field vegetarian of type Boolean.

## Home work: Add Apollo Client

- will only work on clientside
- for server side just copy: https://github.com/zeit/next.js/tree/master/examples/api-routes-apollo-server-and-client
