import React from "react";
import "./Input.css";

const Input = props => {
  let input;
  let idGenerator = 0;

  return (
    <div className="Input">
      <div className="input-wrapper">
        <input
          id="msg-input"
          onKeyPress={e => {
            if (e.key === "Enter") {
              props.addMessage(
                idGenerator++,
                "Jhon Doe",
                "",
                new Date().toDateString(),
                input.value
              );
              input.value = "";
            }
          }}
          type="text"
          ref={node => {
            input = node;
          }}
          placeholder="Type your message and press ENTER"
          autoFocus={true}
        />
      </div>
    </div>
  );
};

export default Input;
