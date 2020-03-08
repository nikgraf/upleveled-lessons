import React, { useEffect, useState } from "react";

function App() {
  const [isOnline, setOnline] = useState(true);

  function onOffline() {
    setOnline(false);
  }
  function onOnline() {
    setOnline(true);
  }
  useEffect(() => {
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  return <div>{isOnline ? "Online" : "Offline"}</div>;
}

export default App;
