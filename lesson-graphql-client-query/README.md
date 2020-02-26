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

(https://slides.com/nikgraf/graphql-serverless-3#/2)

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
