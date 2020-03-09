import React from "react";
import Arrow3 from "./Arrow3";

function App() {
  return (
    <div>
      Hello World
      {/* <Arrow up />
      <Arrow down />
      <Arrow up down /> */}
      {/* <Arrow variant="up" />
      <Arrow variant="down" variant="up" /> */}
      {/* <Arrow variant="right" /> */}
      <Arrow2 lineStyle="solidBlack" variant="up" />
      <Arrow2 lineStyle="solidBlack" variant="down" />
      <Arrow2 lineStyle="solidRed" variant="up" />
      <Arrow2 lineStyle="solidRed" variant="down" />
      <Arrow2 lineStyle="dottedRed" variant="up" />
      <Arrow2 lineStyle="dottedRed" variant="down" />
    </div>
  );
}

export default App;
