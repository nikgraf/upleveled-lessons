const { ApolloServer, gql } = require("apollo-server");

// 1. Define the Schema
const typeDefs = gql`
  type Query {
    books: [Book]
  }

  type Book {
    title: String
    author: String
    createdAt: String
  }
`;

// 2. Data source
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    created_at: 3243463441256,
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
    created_at: 3243463441256,
  },
];

// 3. Resolve schema to data
const resolvers = {
  Query: {
    books: () => books,
  },
  Book: {
    createdAt: (root) => new Date(root.created_at).toISOString(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
