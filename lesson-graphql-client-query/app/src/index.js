import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
// import { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           name
//         }
//       }
//     `
//   })
//   .then(result => console.log("CLIENT RESULT:", result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
