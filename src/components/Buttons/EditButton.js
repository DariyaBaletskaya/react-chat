import { Component } from "react";
import React from "react";
import "./Button.css";

class EditButton extends Component {
  onClick = e => {
    this.props.onLike();
  };
  render() {
    return (
      <button className="user-btn">
        {" "}
        <span role="img" aria-label="emoji">
          &#x270D;
        </span>
      </button>
    );
  }
}

export default EditButton;
