import { Component } from "react";
import React from "react";
import "./Button.css";

class DeleteButton extends Component {
  onClick = e => {
    this.props.onDelete();
  };
  render() {
    return (
      <button className="user-btn" onClick={e => this.onClick(e)}>
        {" "}
        <span role="img" aria-label="emoji">
          &#x274C;
        </span>
      </button>
    );
  }
}

export default DeleteButton;
