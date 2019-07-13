import { Component } from "react";
import React from "react";
import "./Button.css";

class EditButton extends Component {
  onClick = e => {
    document.getElementById("msg-input").value = this.props.message;
    this.props.onEdit();
  };
  render() {
    return (
      <button className="user-btn" onClick={e => this.onClick(e)}>
        {" "}
        <span role="img" aria-label="emoji">
          &#x270D;
        </span>
      </button>
    );
  }
}

export default EditButton;
