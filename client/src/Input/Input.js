import React from "react";
import "./Input.css";
import userService from "../services/userService";

const Input = props => {
  let input;
  let idGenerator = userService.getNewId();
  let user = props.response.response[0];

  return (
    <div className="Input">
      <div className="input-wrapper">
        <input
          id="msg-input"
          onKeyPress={e => {
            if (e.key === "Enter") {
              props.addMessage(
                idGenerator,
                `${user.name} ${user.surname}`,
                "",
                new Date().toDateString(),
                input.value,
                0,
                true
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
