import React, { useEffect } from "react";

function Drop() {
  console.log("render Drop");

  function onOnline(evt) {
    console.log("online", evt);
  }
  useEffect(() => {
    console.log("useEffect Drop");
    window.addEventListener("online", onOnline);
    return () => {
      console.log("cleanup useEffect Drop");
      window.removeEventListener("online", onOnline);
    };
  }, []);

  return <div>Drop v2</div>;
}

export default Drop;

// render
// useEffect

// render
// useEffect cleanup (from the previous useEffect)
// useEffect
