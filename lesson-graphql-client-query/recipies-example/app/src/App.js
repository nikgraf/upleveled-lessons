import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Recipes from "./Recipes";
import AddRecipe from "./AddRecipe";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Recipes />
      </div>
      <hr />
      <AddRecipe />
    </ApolloProvider>
  );
}

export default App;
