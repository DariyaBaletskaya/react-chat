import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = props => {
  let input;

  return (
    <div className="Input">
      <div className="input-wrapper">
        <input
          id="msg-input"
          //onChange={e => this.onChange(e)}
          onKeyPress={e => {
            if (e.key === "Enter") {
              props.addMessage(
                0,
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
// }

// Input.PropTypes = {
//   dispatch: PropTypes.func.isRequired
// };

export default Input;
