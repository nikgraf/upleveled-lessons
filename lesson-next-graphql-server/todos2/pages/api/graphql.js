import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-micro";
require("dotenv").config();
const postgres = require("postgres");
const sql = postgres();

const typeDefs = gql`
  type Query {
    todo(id: String!): Todo
    todos(filterChecked: Boolean): [Todo]
  }

  type Mutation {
    createTodo(title: String!): Todo
  }

  type Todo {
    id: String
    title: String
    checked: Boolean
    author: User
  }

  type User {
    name: String
  }
`;

const todos = [
  {
    id: "1",
    title: "Call Mum",
    checked: true,
    author: { name: "Max" },
  },
  {
    id: "2",
    title: "Make Coffee",
    checked: true,
    author: { name: "Max" },
  },
  {
    id: "3",
    title: "Call Dad",
    checked: false,
    author: { name: "Max" },
  },
];

async function getTodos() {
  return await sql`select * from todos`;
}

async function getFilteredTodos(checked) {
  return await sql`select * from todos WHERE checked = ${checked}`;
}

async function getTodo(id) {
  const result = await sql`select * from todos WHERE id = ${id}`;
  return result[0];
}

async function createTodo(title, checked) {
  const result = await sql`INSERT INTO todos (title, checked)
  VALUES (${title}, ${checked}) RETURNING id, title, checked;`;
  return result[0];
}

const resolvers = {
  Query: {
    todo: async (parent, args) => {
      return await getTodo(args.id);
    },
    todos: async (parent, args) => {
      if (args.filterChecked !== undefined) {
        return await getFilteredTodos(args.filterChecked);
      } else {
        return await getTodos();
      }
    },
  },
  Mutation: {
    createTodo: async (parent, args) => {
      return await createTodo(args.title, false);
    },
  },
  // Query, Subscription, Mutation
  // Boolean, String, Int, Float
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

export default new ApolloServer({ schema }).createHandler({
  path: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
