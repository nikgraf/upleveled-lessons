import React from "react";

function Arrow(props) {
  return <span style={{ fontSize: "3rem" }}>{props.up ? "↑" : "↓"}</span>;
}

export default Arrow;
