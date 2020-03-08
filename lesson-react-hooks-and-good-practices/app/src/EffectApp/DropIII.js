import React, { useEffect } from "react";

function App() {
  function onOnline(evt) {
    console.log("online", evt);
  }
  useEffect(() => {
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("online", onOnline);
    };
  }, []);

  return <div>Drop v3</div>;
}

export default App;
