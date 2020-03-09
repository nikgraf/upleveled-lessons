import React from "react";

function Arrow(props) {
  if (props.up === true) {
    return "↑";
  } else if (props.down === true) {
    return "↓";
  }
  return null;
}

export default Arrow;
