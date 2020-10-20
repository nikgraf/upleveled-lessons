import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-micro";
require("dotenv").config();
const postgres = require("postgres");
const sql = postgres();

const users = [
  { name: "Leeroy Jenkins", username: "leeroy" },
  { name: "Foo Bar", username: "foobar" },
];

// const todos = [
//   { id: "abc", title: "Buy Tomatoes", checked: true },
//   { id: "bcd", title: "Call Mom", checked: false },
//   { id: "cde", title: "Call Dad", checked: false },
// ];

const typeDefs = gql`
  type User {
    name: String
    username: String
  }
  type Todo {
    id: String
    title: String
    checked: Boolean
  }
  type Query {
    users: [User!]!
    user(username: String): User
    todos(filterChecked: Boolean): [Todo]
    todo(id: String): Todo
  }

  type Mutation {
    createTodo(title: String!): Todo
  }
`;

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

async function createTodo(title) {
  const result = await sql`INSERT INTO todos (title, checked)
  VALUES (${title}, ${false}) RETURNING id, title, checked;`;
  return result[0];
}

const resolvers = {
  Mutation: {
    createTodo: (root, args) => {
      return createTodo(args.title);
    },
  },
  Query: {
    todos: (root, args) => {
      if (args.filterChecked === true) {
        return getFilteredTodos(true);
      } else if (args.filterChecked === false) {
        return getFilteredTodos(false);
      } else {
        return getTodos();
      }
    },
    todo: (root, args) => {
      // return todos.find((todo) => todo.id === args.id);
      return getTodo(args.id);
    },
    users() {
      return users;
    },
    user(parent, { username }) {
      return users.find((user) => user.username === username);
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({ schema }).createHandler({
  path: "/api/graphql",
});
