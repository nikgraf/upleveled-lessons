import React from "react";
import PropTypes from "prop-types";

// Emoji selector: ctrl + command + space

function Arrow(props) {
  if (props.variant === "up") {
    return "↑";
  } else if (props.variant === "down") {
    return "↓";
  }
  return null;
}

Arrow.propTypes = {
  variant: PropTypes.oneOf(["up", "down"])
};

export default Arrow;

// function Arrow(props) {
//   if (props.up === true) {
//     return "↑";
//   } else if (props.down === true) {
//     return "↓";
//   }
//   return null;
// }
