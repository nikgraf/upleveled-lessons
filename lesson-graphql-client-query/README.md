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

- Query the population and all the residents on the planet Naboo.

2. Use the Github GraphQL API `https://docs.github.com/en/free-pro-team@latest/graphql/overview/explorer` to query

- Your repositories (first 10)
- Extend the query to show the default branch of each repository

## Query data

Create new app with `yarn create react-app app` and go through
https://www.apollographql.com/docs/react/get-started/

## Exercise

Build you own Profile page based on Github e.g. https://github.com/nikgraf using the Github GraphQL Endpoint

- Show your name
- Show your Github Avatar
- Show a list of (public) repositories

Other public APIs https://github.com/APIs-guru/graphql-apis

1. Generate an access token:
   https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token

_Hint_:

- `yarn add @apollo/client graphql`

```js
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer TODO",
  },
});
```

```jsx
<ApolloProvider client={client}>…</ApolloProvider>
```

```jsx
import { gql, useQuery } from "@apollo/client";

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
