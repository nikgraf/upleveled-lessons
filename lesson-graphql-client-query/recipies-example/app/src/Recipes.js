import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const recipesQuery = gql`
  query($veggie: Boolean!) {
    recipes(vegetarian: $veggie) {
      title
      vegetarian
    }
  }
`;

function Recipes() {
  const [filterForVeggie, setFilterForVeggie] = React.useState(false);
  const Result = useQuery(recipesQuery, {
    variables: { veggie: filterForVeggie }
  });

  if (Result.loading) {
    return <div>Loading …</div>;
  }

  if (Result.error) {
    return <div>Something wrong.</div>;
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterForVeggie}
          onChange={evt => setFilterForVeggie(evt.target.checked)}
        />
        filter for veggie
      </label>
      {Result.data.recipes.map(recipe => (
        <div>{recipe.title}</div>
      ))}
    </div>
  );
}

export default Recipes;
