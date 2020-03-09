import React, { useState, useEffect } from "react";

// const myData = Array.from({ length: 10000000 }, () =>
//   Math.floor(Math.random() * 40)
// );

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const time0 = performance.now();
    // const newData = myData.map(x => (x / 5) * 2325345);
    // const newNewData = newData.map(x => (x * 2) / 99);
    // const newNewNewData = newNewData.map(x => (x * 77) / 99);
    // const time1 = performance.now();
    // console.log("Took " + (time1 - time0) + " milliseconds.");
    document.title = `${count} new messages`;
  });

  return (
    <div>
      <p>{count} new messages …</p>
      <button onClick={() => setCount(count + 1)}>One new message</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
