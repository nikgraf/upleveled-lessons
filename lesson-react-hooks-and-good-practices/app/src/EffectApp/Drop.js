import React, { useEffect } from "react";

function Drop() {
  console.log("render Drop");

  function onOnline(evt) {
    console.log("online", evt);
  }
  useEffect(() => {
    window.addEventListener("online", onOnline);
  });

  return <div>Drop v1</div>;
}

export default Drop;
