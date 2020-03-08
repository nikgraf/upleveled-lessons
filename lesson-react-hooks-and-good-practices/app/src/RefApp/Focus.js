import React, { Fragment, useRef } from "react";

function TextInputWithFocusButton() {
  const inputElement = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputElement.current.focus();
  };

  return (
    <Fragment>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus on the Input</button>
    </Fragment>
  );
}

export default TextInputWithFocusButton;
