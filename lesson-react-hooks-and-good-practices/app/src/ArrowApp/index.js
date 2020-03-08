import React from "react";
import Arrow from "./Arrow1";
// import Arrow from "./Arrow2";

function App() {
  return (
    <div>
      <Arrow up />
      <Arrow down />
      {/* <Arrow up down /> */}

      <Arrow variant="up" />
      <Arrow variant="down" />
      {/* <Arrow variant="up" variant="down" /> */}
    </div>
  );
}

export default App;
