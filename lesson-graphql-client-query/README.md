## Intro

https://www.nikgraf.com/

- studied Computer Science (now it helps a bit)
- Consulting (Fortune 50 US Company, Ready2Order, Austrian Institute of Technology, Easyname, Eversports)
- https://changefeed.app/
- https://egghead.io/instructors/nik-graf

## Who are you?

One-two sentence each

## What did you do so far?

Data fetching via HTTP?

- https://egghead.io/api/v1/instructors/nik-graf/lessons
- https://egghead.io/api/v1/instructors/nik-graf/series
- https://orf.at/static-extras/bulawindow.json

Show fetching an requestion data in the browser?
-> https://egghead.io/instructors/nik-graf
Why do we do this? In the end store data somewhere, retrieve it and write it to somewhere.

## GraphQL

A pretty cool way to fetching data.

Why?

- very structured and well defined
- only fetch what you need

-> see presentation.pdf

# Exercise

_Hint_: Using CTRL + Space you can autocomplete fields in the GraphQL IDE.

1. Use the StarWars GraphQL API `https://graphql.github.io/swapi-graphql/` to query:

_Hint_: The schema has some duplications of data e.g. people & edges.node contain the same data. Nik will explain why so!

- Query all People
- Query the names of all Starships related to Luke Skywalker!

_Hint_: Get Luke by his id, which you can get from `allPeople`.

- Query the population and all the resisents on the planet Naboo.

2. Use the Github GraphQL API `https://developer.github.com/v4/explorer/` to query

- Your repositories (first 10)
- Extend the query to show the default branch of each repository

## Query data

Go through
https://www.apollographql.com/docs/react/get-started/

## Exercise

Build you own Profile page based on Github e.g. https://github.com/nikgraf using the https://www.graphqlhub.com/ GraphQL Endpoint

- Show your name
- Show your Github Avatar
- Show a list of (public) repositories

```graphql
{
  github {
    user(username: "nikgraf") {
      id
      avatar_url
      repos {
        name
      }
    }
  }
}
```

https://www.graphqlhub.com/playground?query=%7B%0A%20%20github%20%7B%0A%20%20%20%20user(username%3A%20%22nikgraf%22)%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20avatar_url%0A%20%20%20%20%20%20repos%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A

Other public APIs https://github.com/APIs-guru/graphql-apis

_Hint_:

- `npm install --save graphql`
- `npm install --save apollo-boost`
- `npm install --save react-apollo`

```js
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://www.graphqlhub.com/graphql",
});
```

```jsx
<ApolloProvider client={client}>…</ApolloProvider>
```

```jsx
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const profileQuery = gql`
  TODO YOUR QUERY
`;

export default function Profile(props) {
  const { loading, error, data } = useQuery(profileQuery);

  return null; // TOOD render your component
}
```

## Using Variables

Make the username dynamic and allow to fetch the profile based on the url.

When visiting the `profile/:username` route use the route to fetch data for only the one specific route.

_Hint_: Fetch one place first with a hard coded ID to see if it works and then extend it to use GraphQL variables for the profile username to always fetch the correct profile.

_Hint_:

```jsx
const { loading, error, data } = useQuery(placeQuery, { variables: {} });
```
