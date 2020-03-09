import React from "react";
import PropTypes from "prop-types";

function Arrow(props) {
  if (props.variant === "up") {
    if (props.lineStyle === "solidBlack") {
      return <span style={{ color: "black" }}>↑</span>;
    }
    if (props.lineStyle === "solidRed") {
      return <span style={{ color: "red" }}>↑</span>;
    }
    if (props.lineStyle === "dottedRed") {
      return <span style={{ color: "red" }}>⇡</span>;
    }
  } else if (props.variant === "down") {
    if (props.lineStyle === "solidBlack") {
      return <span style={{ color: "black" }}>↓</span>;
    }
    if (props.lineStyle === "solidRed") {
      return <span style={{ color: "red" }}>↓</span>;
    }
    if (props.lineStyle === "dottedRed") {
      return <span style={{ color: "red" }}>⇣</span>;
    }
  }
  return null;
}

Arrow.propTypes = {
  variant: PropTypes.oneOf(["up", "down"]),
  lineStyle: PropTypes.oneOf(["solidBlack", "solidRed", "dottedRed"])
};

export default Arrow;
