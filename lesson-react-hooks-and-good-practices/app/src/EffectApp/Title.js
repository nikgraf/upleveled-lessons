import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
