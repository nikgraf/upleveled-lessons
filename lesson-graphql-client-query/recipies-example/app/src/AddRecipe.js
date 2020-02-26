import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const addRecipeMutation = gql`
  mutation addRecipe($title: String!) {
    addRecipe(title: $title, vegetarian: true) {
      id
      title
    }
  }
`;

const recipesQuery = gql`
  {
    recipes {
      title
    }
  }
`;

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [addRecipe, Result] = useMutation(addRecipeMutation, {
    refetchQueries: [{ query: recipesQuery }],
    variables: { title: title }
  });

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={evt => setTitle(evt.target.value)}
        placeholder="Recipe title"
      />
      <button
        onClick={() => {
          addRecipe();
        }}
        disabled={Result.loading}
      >
        Add
      </button>
      <div>
        {Result.loading === true && <p>saving …</p>}
        {Result.error && <p>Something bad happened</p>}
        {Result.data && <p>Successfully saved</p>}
      </div>
    </div>
  );
}

export default AddRecipe;
