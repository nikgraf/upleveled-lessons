import React, { useEffect } from "react";

function App() {
  function onOnline(evt) {
    console.log("online", evt);
  }
  useEffect(() => {
    window.addEventListener("online", onOnline);
  });

  return <div>Drop v1</div>;
}

export default App;
