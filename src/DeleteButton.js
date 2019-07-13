import { Component } from "react";
import React from "react";

class DeleteButton extends Component {
  onClick = e => {
    this.props.onDelete();
  };
  render() {
    return (
      <button className="user-btn" onClick={e => this.onClick(e)}>
        {" "}
        &#x274C;
      </button>
    );
  }
}

export default DeleteButton;
