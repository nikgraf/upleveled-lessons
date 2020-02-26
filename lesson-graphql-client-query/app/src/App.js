import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const exchangeRateQuery = gql`
  {
    rates(currency: "USD") {
      name
      currency
      rate
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(exchangeRateQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry, retrieveing the Currency data did fail.</p>;

  return data.rates.map(rate => {
    console.log("RATE: ", rate);
    return (
      <div key={rate.currency}>
        <p style={{ border: "1px solid grey", marginBottom: "20px" }}>
          {rate.currency} - {rate.name}: {rate.rate}
        </p>
      </div>
    );
  });
}

export default App;
