import React from "react";

function Arrow(props) {
  return (
    <span style={{ fontSize: "3rem" }}>
      {props.variant === "up" ? "↑" : "↓"}
    </span>
  );
}

export default Arrow;
